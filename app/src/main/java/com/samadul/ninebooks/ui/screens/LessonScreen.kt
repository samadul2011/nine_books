package com.samadul.ninebooks.ui.screens

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.widget.Toast
import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.Assignment
import androidx.compose.material.icons.automirrored.filled.MenuBook
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalTextToolbar
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.samadul.ninebooks.audio.AudioNarratorManager
import com.samadul.ninebooks.data.SavedHighlight
import com.samadul.ninebooks.data.SavedWord
import com.samadul.ninebooks.data.StudyStorageManager
import com.samadul.ninebooks.data.TranslationManager
import com.samadul.ninebooks.ui.components.CustomSelectionPopup
import com.samadul.ninebooks.ui.components.CustomTextToolbar
import com.samadul.ninebooks.ui.components.LessonAudioPlayer
import com.samadul.ninebooks.ui.components.MathProblemCard
import com.samadul.ninebooks.ui.components.MathTextFormatter
import com.samadul.ninebooks.ui.components.SelectionAction
import com.samadul.ninebooks.ui.viewmodel.StudyViewModel
import com.samadul.ninebooks.ui.viewmodel.UiState
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

fun cleanSingleWord(raw: String): String {
    val cleaned = raw.replace('\u00A0', ' ').trim()
    if (cleaned.isEmpty()) return ""

    // If it's a phrase or sentence (contains spaces or newlines)
    if (cleaned.contains(" ") || cleaned.contains("\n")) {
        return cleaned
            .removeSurrounding("**")
            .removeSurrounding("*")
            .removeSurrounding("\"")
            .removeSurrounding("“", "”")
            .removeSurrounding("‘", "’")
            .removeSurrounding("`")
            .trim()
    }

    // If it's a single word, strip surrounding punctuation so dictionary lookup works
    return cleaned
        .trim('"', '\'', '.', ',', '!', '?', ';', ':', '(', ')', '[', ']', '{', '}', '“', '”', '‘', '’', '—', '-', '/', '\\', '`')
        .filter { it.isLetterOrDigit() || it == '-' || it == '\'' }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LessonScreen(
    chapterId: String,
    chapterTitle: String,
    viewModel: StudyViewModel,
    onTakeExam: () -> Unit,
    onBack: () -> Unit
) {
    LaunchedEffect(chapterId) {
        viewModel.fetchLessons(chapterId)
    }

    val context = LocalContext.current
    val narratorManager = remember { AudioNarratorManager(context) }
    val studyStorage = remember { StudyStorageManager.getInstance(context) }
    val composeClipboard = LocalClipboardManager.current
    val androidClipboard = remember { context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager }
    val clipboard = androidClipboard
    val scope = rememberCoroutineScope()

    // Holds the text synchronously intercepted from Compose selection
    var capturedSelectionText by remember { mutableStateOf("") }

    val interceptingClipboardManager = remember(composeClipboard) {
        object : androidx.compose.ui.platform.ClipboardManager {
            override fun getText(): AnnotatedString? = composeClipboard.getText()
            override fun hasText(): Boolean = composeClipboard.hasText()
            override fun setText(annotatedString: AnnotatedString) {
                capturedSelectionText = annotatedString.text
                composeClipboard.setText(annotatedString)
            }
        }
    }

    // Clipboard-based text capture (RELIABLE: works when system ActionMode overrides our toolbar)
    var clipboardCopiedText by remember { mutableStateOf("") }
    var showClipboardChip by remember { mutableStateOf(false) }

    // Auto-dismiss clipboard chip after 10 seconds
    LaunchedEffect(showClipboardChip) {
        if (showClipboardChip) {
            delay(10000)
            showClipboardChip = false
        }
    }

    // Listen for clipboard changes (fires AFTER system Copy commits text)
    DisposableEffect(Unit) {
        val listener = ClipboardManager.OnPrimaryClipChangedListener {
            val raw = androidClipboard.primaryClip?.getItemAt(0)?.text?.toString() ?: ""
            val cleaned = cleanSingleWord(raw)
            if (cleaned.isNotBlank()) {
                clipboardCopiedText = cleaned
                showClipboardChip = true
            }
        }
        androidClipboard.addPrimaryClipChangedListener(listener)
        onDispose {
            androidClipboard.removePrimaryClipChangedListener(listener)
            narratorManager.release()
        }
    }

    val lessonsState by viewModel.lessons.collectAsState()
    val narratorState by narratorManager.state.collectAsState()
    val savedWords by studyStorage.savedWords.collectAsState()
    val savedHighlights by studyStorage.savedHighlights.collectAsState()

    var showVocabularyDialog by remember { mutableStateOf(false) }
    var showHighlightsDialog by remember { mutableStateOf(false) }
    var showTranslateSheet by remember { mutableStateOf(false) }

    // Translation popup dialog state (lightweight popup instead of bottom sheet)
    var showTranslatePopup by remember { mutableStateOf(false) }
    var popupEnglishText by remember { mutableStateOf("") }
    var popupBengaliText by remember { mutableStateOf("") }
    var isPopupTranslating by remember { mutableStateOf(false) }

    // Selected text & translation for bottom sheet
    var selectedEnglishText by remember { mutableStateOf("") }
    var selectedBengaliTranslation by remember { mutableStateOf("") }
    var isTranslatingSelected by remember { mutableStateOf(false) }

    fun translateAndShow(text: String) {
        val cleaned = cleanSingleWord(text)
        if (cleaned.isBlank()) return
        showClipboardChip = false
        selectedEnglishText = cleaned
        selectedBengaliTranslation = ""
        isTranslatingSelected = true
        showTranslateSheet = true
        scope.launch {
            val res = TranslationManager.translateToBengali(cleaned)
            isTranslatingSelected = false
            res.onSuccess {
                selectedBengaliTranslation = it
            }.onFailure {
                selectedBengaliTranslation = it.message ?: "অনুবাদ লোড করা যায়নি"
            }
        }
    }

    fun translatePopup(text: String) {
        val cleaned = cleanSingleWord(text)
        if (cleaned.isBlank()) return
        showClipboardChip = false
        popupEnglishText = cleaned
        popupBengaliText = ""
        isPopupTranslating = true
        showTranslatePopup = true
        scope.launch {
            val res = TranslationManager.translateToBengali(cleaned)
            isPopupTranslating = false
            res.onSuccess {
                popupBengaliText = it
            }.onFailure {
                popupBengaliText = it.message ?: "অনুবাদ লোড করা যায়নি"
            }
        }
    }

    // Custom selection toolbar: Triggers when user explicitly taps an action on the floating bar!
    val customTextToolbar = remember {
        CustomTextToolbar(
            onActionTriggered = { action, onCopy ->
                capturedSelectionText = ""
                onCopy?.invoke()

                val text = cleanSingleWord(
                    capturedSelectionText.ifBlank {
                        composeClipboard.getText()?.text ?: ""
                    }
                )

                if (text.isNotBlank()) {
                    when (action) {
                        SelectionAction.TRANSLATE -> translatePopup(text)
                        SelectionAction.SPEAK -> narratorManager.speakSingleText(text)
                        SelectionAction.HIGHLIGHT -> {
                            studyStorage.saveHighlight(text, chapterTitle)
                            Toast.makeText(context, "হাইলাইট ও সেভ করা হয়েছে!", Toast.LENGTH_SHORT).show()
                        }
                        SelectionAction.SAVE_WORD -> {
                            scope.launch {
                                val res = TranslationManager.translateToBengali(text)
                                val tr = res.getOrDefault("")
                                studyStorage.saveWord(text, tr, chapterTitle)
                                Toast.makeText(context, "'$text' শব্দভাণ্ডারে সেভ হয়েছে!", Toast.LENGTH_SHORT).show()
                            }
                        }
                        SelectionAction.COPY -> {
                            val clip = ClipData.newPlainText("Copied Text", text)
                            androidClipboard.setPrimaryClip(clip)
                            Toast.makeText(context, "ক্লিপবোর্ডে কপি করা হয়েছে", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
            }
        )
    }

    val savedHighlightTexts = remember(savedHighlights) {
        savedHighlights.map { it.text }
    }

    CompositionLocalProvider(
        LocalTextToolbar provides customTextToolbar,
        LocalClipboardManager provides interceptingClipboardManager
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            Scaffold(
                topBar = {
                    TopAppBar(
                        title = {
                            Text(
                                text = chapterTitle,
                                fontWeight = FontWeight.Bold,
                                fontSize = 18.sp,
                                maxLines = 1,
                                overflow = TextOverflow.Ellipsis
                            )
                        },
                        navigationIcon = {
                            IconButton(onClick = onBack) {
                                Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back")
                            }
                        },
                        actions = {
                            // Quick Translate Tool Button (Takes active selection, clipboard text or opens search)
                            IconButton(onClick = {
                                val activeCopy = customTextToolbar.menuData?.onCopyRequested
                                if (activeCopy != null) {
                                    capturedSelectionText = ""
                                    activeCopy.invoke()
                                    customTextToolbar.hide()
                                }

                                val candidate = cleanSingleWord(
                                    capturedSelectionText.ifBlank {
                                        clipboardCopiedText.ifBlank {
                                            androidClipboard.primaryClip?.getItemAt(0)?.text?.toString() ?: ""
                                        }
                                    }
                                )

                                if (candidate.isNotBlank()) {
                                    translatePopup(candidate)
                                } else {
                                    selectedEnglishText = ""
                                    selectedBengaliTranslation = ""
                                    showTranslateSheet = true
                                }
                            }) {
                                val hasCandidate = customTextToolbar.menuData != null ||
                                        capturedSelectionText.isNotBlank() ||
                                        clipboardCopiedText.isNotBlank() ||
                                        (androidClipboard.primaryClip?.getItemAt(0)?.text?.isNotBlank() == true)
                                BadgedBox(
                                    badge = {
                                        if (hasCandidate) {
                                            Badge(
                                                containerColor = Color(0xFF0284C7),
                                                contentColor = Color.White
                                            ) {
                                                Text("✓")
                                            }
                                        }
                                    }
                                ) {
                                    Icon(
                                        imageVector = Icons.Default.Translate,
                                        contentDescription = "Translate to Bengali",
                                        tint = if (hasCandidate) Color(0xFF0284C7) else MaterialTheme.colorScheme.primary
                                    )
                                }
                            }

                        // Vocabulary Notebook with badge
                        IconButton(onClick = { showVocabularyDialog = true }) {
                            BadgedBox(
                                badge = {
                                    if (savedWords.isNotEmpty()) {
                                        Badge(
                                            containerColor = MaterialTheme.colorScheme.primary,
                                            contentColor = MaterialTheme.colorScheme.onPrimary
                                        ) {
                                            Text("${savedWords.size}")
                                        }
                                    }
                                }
                            ) {
                                Icon(
                                    imageVector = Icons.AutoMirrored.Filled.MenuBook,
                                    contentDescription = "Vocabulary Notebook",
                                    tint = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                        }

                        // Highlights with badge
                        IconButton(onClick = { showHighlightsDialog = true }) {
                            BadgedBox(
                                badge = {
                                    if (savedHighlights.isNotEmpty()) {
                                        Badge(
                                            containerColor = MaterialTheme.colorScheme.tertiary,
                                            contentColor = MaterialTheme.colorScheme.onTertiary
                                        ) {
                                            Text("${savedHighlights.size}")
                                        }
                                    }
                                }
                            ) {
                                Icon(
                                    imageVector = Icons.Default.BorderColor,
                                    contentDescription = "Saved Highlights",
                                    tint = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = MaterialTheme.colorScheme.surface,
                        titleContentColor = MaterialTheme.colorScheme.onSurface
                    )
                )
            },
            bottomBar = {
                Surface(
                    tonalElevation = 8.dp,
                    shadowElevation = 16.dp,
                    color = MaterialTheme.colorScheme.surface,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .navigationBarsPadding()
                            .padding(horizontal = 20.dp, vertical = 12.dp)
                    ) {
                        Button(
                            onClick = onTakeExam,
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(54.dp),
                            shape = RoundedCornerShape(16.dp),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MaterialTheme.colorScheme.primary,
                                contentColor = MaterialTheme.colorScheme.onPrimary
                            ),
                            elevation = ButtonDefaults.buttonElevation(
                                defaultElevation = 4.dp,
                                pressedElevation = 8.dp
                            )
                        ) {
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.Assignment,
                                contentDescription = null,
                                modifier = Modifier.size(22.dp)
                            )
                            Spacer(modifier = Modifier.width(10.dp))
                            Text(
                                text = "পরীক্ষা শুরু করুন (Take Exam)",
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }
            }
        ) { innerPadding ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(MaterialTheme.colorScheme.background)
                    .padding(innerPadding)
            ) {
                when (val state = lessonsState) {
                    is UiState.Loading -> {
                        CircularProgressIndicator(
                            modifier = Modifier.align(Alignment.Center),
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                    is UiState.Error -> {
                        Column(
                            modifier = Modifier
                                .align(Alignment.Center)
                                .padding(24.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Text(
                                text = "ত্রুটি: ${state.message}",
                                color = MaterialTheme.colorScheme.error,
                                fontSize = 15.sp
                            )
                            Spacer(modifier = Modifier.height(12.dp))
                            Button(onClick = { viewModel.fetchLessons(chapterId) }) {
                                Text("পুনরায় চেষ্টা করুন")
                            }
                        }
                    }
                    is UiState.Success -> {
                        val lessons = state.data
                        if (lessons.isEmpty()) {
                            Text(
                                text = "এই অধ্যায়ের কোনো পড়া এখনো যুক্ত করা হয়নি।",
                                modifier = Modifier.align(Alignment.Center),
                                fontSize = 16.sp,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        } else {
                            Column(
                                modifier = Modifier
                                    .fillMaxSize()
                                    .verticalScroll(rememberScrollState())
                                    .padding(horizontal = 14.dp, vertical = 10.dp),
                                verticalArrangement = Arrangement.spacedBy(14.dp)
                            ) {
                                val fullChapterText = remember(lessons) {
                                    lessons.joinToString("\n\n") { it.contentText }
                                }

                                // Audio Player at Top
                                LessonAudioPlayer(
                                    narratorManager = narratorManager,
                                    textToRead = fullChapterText
                                )

                                // Full continuous passage inside SelectionContainer (Natural reading, NO auto-open!)
                                SelectionContainer {
                                    Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                                        lessons.forEach { lesson ->
                                            LessonFullPassageCard(
                                                lessonText = lesson.contentText,
                                                activeChunk = if (narratorState.isPlaying) narratorState.currentChunkText else "",
                                                savedHighlights = savedHighlightTexts
                                            )
                                        }
                                    }
                                }

                                Spacer(modifier = Modifier.height(30.dp))
                            }
                        }
                    }
                }
            } // Box inner padding
        } // Scaffold

        // Floating Selection Toolbar (fallback for devices where Compose toolbar works)
        CustomSelectionPopup(toolbar = customTextToolbar)

        // ═══════════════════════════════════════════════════════════
        // FLOATING TRANSLATE CHIP (Appears after user copies text)
        // This is the PRIMARY translate mechanism - works on ALL devices
        // ═══════════════════════════════════════════════════════════
        AnimatedVisibility(
            visible = showClipboardChip && clipboardCopiedText.isNotBlank(),
            enter = slideInVertically(initialOffsetY = { it }) + fadeIn(),
            exit = slideOutVertically(targetOffsetY = { it }) + fadeOut(),
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 80.dp) // Above the "Take Exam" bottom bar
        ) {
            Surface(
                shape = RoundedCornerShape(20.dp),
                color = Color(0xFF0F172A),
                border = BorderStroke(1.dp, Color(0xFF0284C7).copy(alpha = 0.5f)),
                tonalElevation = 12.dp,
                shadowElevation = 16.dp,
                modifier = Modifier.padding(horizontal = 16.dp)
            ) {
                Row(
                    modifier = Modifier.padding(start = 14.dp, end = 6.dp, top = 6.dp, bottom = 6.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Preview of copied text
                    Column(
                        modifier = Modifier.weight(1f)
                    ) {
                        Text(
                            text = "কপি হয়েছে:",
                            fontSize = 10.sp,
                            color = Color(0xFF94A3B8),
                            fontWeight = FontWeight.Medium
                        )
                        Text(
                            text = clipboardCopiedText.take(50) + if (clipboardCopiedText.length > 50) "..." else "",
                            fontSize = 13.sp,
                            color = Color.White,
                            fontWeight = FontWeight.SemiBold,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                    Spacer(modifier = Modifier.width(8.dp))

                    // Translate button
                    Button(
                        onClick = { translatePopup(clipboardCopiedText) },
                        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 6.dp),
                        shape = RoundedCornerShape(14.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = Color(0xFF0284C7),
                            contentColor = Color.White
                        ),
                        modifier = Modifier.height(34.dp)
                    ) {
                        Icon(
                            imageVector = Icons.Default.Translate,
                            contentDescription = null,
                            modifier = Modifier.size(14.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text("অনুবাদ", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                    }

                    // Dismiss button
                    IconButton(
                        onClick = { showClipboardChip = false },
                        modifier = Modifier.size(28.dp)
                    ) {
                        Icon(
                            imageVector = Icons.Default.Close,
                            contentDescription = "Dismiss",
                            tint = Color(0xFF64748B),
                            modifier = Modifier.size(14.dp)
                        )
                    }
                }
            }
        }
    } // Box root

        // Translation Bottom Sheet: Shows ONLY when user taps "অনুবাদ" button!
        if (showTranslateSheet) {
            ModalBottomSheet(
                onDismissRequest = {
                    showTranslateSheet = false
                    customTextToolbar.clearSelectedText()
                },
                sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true),
                containerColor = MaterialTheme.colorScheme.surface,
                tonalElevation = 8.dp
            ) {
                val initialCandidate = remember(selectedEnglishText) {
                    selectedEnglishText.ifBlank {
                        val clip = androidClipboard.primaryClip?.getItemAt(0)?.text?.toString() ?: ""
                        cleanSingleWord(clip)
                    }
                }
                var searchInput by remember(initialCandidate) { mutableStateOf(initialCandidate) }

                LaunchedEffect(initialCandidate) {
                    if (initialCandidate.isNotBlank() && selectedBengaliTranslation.isBlank()) {
                        translateAndShow(initialCandidate)
                    }
                }

                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .navigationBarsPadding()
                        .padding(horizontal = 20.dp, vertical = 12.dp)
                ) {
                    // Header
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                imageVector = Icons.Default.Translate,
                                contentDescription = null,
                                tint = Color(0xFF0284C7),
                                modifier = Modifier.size(24.dp)
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = "অনুবাদ ও শব্দার্থ (English & Bengali)",
                                fontSize = 17.sp,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }
                        IconButton(onClick = { showTranslateSheet = false }) {
                            Icon(Icons.Default.Close, contentDescription = "Close")
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    // Input / Word Display Box
                    OutlinedTextField(
                        value = searchInput,
                        onValueChange = {
                            searchInput = it
                        },
                        label = { Text("ইংরেজি শব্দ বা বাক্য") },
                        placeholder = { Text("যেকোনো ইংরেজি শব্দ লিখুন বা পেস্ট করুন...") },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(14.dp),
                        trailingIcon = {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                if (searchInput.isNotBlank()) {
                                    IconButton(onClick = { narratorManager.speakSingleText(searchInput) }) {
                                        Icon(
                                            imageVector = Icons.AutoMirrored.Filled.VolumeUp,
                                            contentDescription = "Speak",
                                            tint = Color(0xFF0284C7)
                                        )
                                    }
                                }
                                IconButton(onClick = {
                                    val clipData = composeClipboard.getText()?.text
                                        ?: androidClipboard.primaryClip?.getItemAt(0)?.text?.toString()
                                        ?: ""
                                    if (clipData.isNotBlank()) {
                                        val cleaned = cleanSingleWord(clipData)
                                        searchInput = cleaned
                                        translateAndShow(cleaned)
                                    }
                                }) {
                                    Icon(
                                        imageVector = Icons.Default.ContentPaste,
                                        contentDescription = "Paste",
                                        tint = Color(0xFF64748B)
                                    )
                                }
                            }
                        }
                    )

                    if (searchInput.isBlank()) {
                        val clipText = androidClipboard.primaryClip?.getItemAt(0)?.text?.toString() ?: ""
                        if (clipText.isNotBlank()) {
                            TextButton(
                                onClick = {
                                    val cleaned = cleanSingleWord(clipText)
                                    searchInput = cleaned
                                    translateAndShow(cleaned)
                                },
                                modifier = Modifier.align(Alignment.End)
                            ) {
                                Icon(Icons.Default.ContentPaste, contentDescription = null, modifier = Modifier.size(15.dp))
                                Spacer(modifier = Modifier.width(4.dp))
                                Text("ক্লিপবোর্ড থেকে পেস্ট ও অনুবাদ", fontSize = 12.sp)
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    Button(
                        onClick = { translateAndShow(searchInput) },
                        enabled = searchInput.isNotBlank() && !isTranslatingSelected,
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7))
                    ) {
                        if (isTranslatingSelected) {
                            CircularProgressIndicator(
                                modifier = Modifier.size(18.dp),
                                color = Color.White,
                                strokeWidth = 2.dp
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("অনুবাদ হচ্ছে...")
                        } else {
                            Icon(Icons.Default.Translate, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("অনুবাদ করুন (Translate)")
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    // Card: Bengali Translation (Shows only this word's meaning!)
                    Card(
                        shape = RoundedCornerShape(16.dp),
                        colors = CardDefaults.cardColors(
                            containerColor = Color(0xFFECFDF5) // Emerald green
                        ),
                        border = BorderStroke(1.dp, Color(0xFFA7F3D0)),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Text(
                                text = "🇧🇩 বাংলা অর্থ (Bengali Meaning):",
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color(0xFF047857)
                            )
                            Spacer(modifier = Modifier.height(6.dp))
                            if (isTranslatingSelected) {
                                Text(
                                    text = "অনুবাদ লোড হচ্ছে...",
                                    fontSize = 14.sp,
                                    color = Color(0xFF065F46)
                                )
                            } else {
                                Text(
                                    text = selectedBengaliTranslation.ifBlank { "অনুবাদ দেখতে বাটনে চাপ দিন।" },
                                    fontSize = 18.sp,
                                    lineHeight = 27.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color(0xFF064E3B)
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(18.dp))

                    // Action Buttons: Save Word, Highlight Sentence
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Button(
                            onClick = {
                                studyStorage.saveWord(searchInput, selectedBengaliTranslation, chapterTitle)
                                Toast.makeText(context, "'$searchInput' শব্দার্থ খাতা-এ সেভ করা হয়েছে!", Toast.LENGTH_SHORT).show()
                                showTranslateSheet = false
                            },
                            shape = RoundedCornerShape(12.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                            modifier = Modifier.weight(1f)
                        ) {
                            Icon(Icons.Default.Bookmark, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(6.dp))
                            Text("শব্দার্থ সেভ", fontSize = 13.sp)
                        }

                        OutlinedButton(
                            onClick = {
                                studyStorage.saveHighlight(searchInput, chapterTitle)
                                Toast.makeText(context, "বাক্যটি হাইলাইট ও সেভ করা হয়েছে!", Toast.LENGTH_SHORT).show()
                                showTranslateSheet = false
                            },
                            shape = RoundedCornerShape(12.dp),
                            modifier = Modifier.weight(1f)
                        ) {
                            Icon(Icons.Default.BorderColor, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(6.dp))
                            Text("বাক্য হাইলাইট", fontSize = 13.sp)
                        }
                    }
                    Spacer(modifier = Modifier.height(10.dp))
                }
            }
        }

        // Vocabulary Dialog
        if (showVocabularyDialog) {
            VocabularyDialog(
                words = savedWords,
                onDismiss = { showVocabularyDialog = false },
                onSpeak = { word -> narratorManager.speakSingleText(word) },
                onDelete = { id -> studyStorage.deleteWord(id) }
            )
        }

        // Highlights Dialog
        if (showHighlightsDialog) {
            HighlightsDialog(
                highlights = savedHighlights,
                onDismiss = { showHighlightsDialog = false },
                onCopy = { text ->
                    val clip = ClipData.newPlainText("Highlighted Sentence", text)
                    clipboard.setPrimaryClip(clip)
                    Toast.makeText(context, "ক্লিপবোর্ডে কপি করা হয়েছে!", Toast.LENGTH_SHORT).show()
                },
                onDelete = { id -> studyStorage.deleteHighlight(id) }
            )
        }

        // ═══════════════════════════════════════════════════════════
        // INSTANT TRANSLATION POPUP DIALOG
        // Lightweight centered dialog - much faster than bottom sheet
        // ═══════════════════════════════════════════════════════════
        if (showTranslatePopup) {
            Dialog(
                onDismissRequest = {
                    showTranslatePopup = false
                    clipboardCopiedText = ""
                    capturedSelectionText = ""
                    customTextToolbar.clearSelectedText()
                },
                properties = DialogProperties(usePlatformDefaultWidth = false)
            ) {
                Surface(
                    shape = RoundedCornerShape(24.dp),
                    color = Color(0xFF0F172A),
                    border = BorderStroke(1.dp, Color(0xFF334155)),
                    tonalElevation = 16.dp,
                    modifier = Modifier
                        .fillMaxWidth(0.92f)
                        .padding(16.dp)
                ) {
                    Column(
                        modifier = Modifier.padding(20.dp)
                    ) {
                        // Header
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Icon(
                                    imageVector = Icons.Default.Translate,
                                    contentDescription = null,
                                    tint = Color(0xFF0284C7),
                                    modifier = Modifier.size(22.dp)
                                )
                                Spacer(modifier = Modifier.width(8.dp))
                                Text(
                                    text = "বাংলা অনুবাদ",
                                    fontSize = 18.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color.White
                                )
                            }
                            IconButton(
                                onClick = {
                                    showTranslatePopup = false
                                    clipboardCopiedText = ""
                                    capturedSelectionText = ""
                                    customTextToolbar.clearSelectedText()
                                },
                                modifier = Modifier.size(32.dp)
                            ) {
                                Icon(
                                    Icons.Default.Close,
                                    contentDescription = "Close",
                                    tint = Color(0xFF94A3B8),
                                    modifier = Modifier.size(18.dp)
                                )
                            }
                        }

                        Spacer(modifier = Modifier.height(16.dp))

                        // English Text Card
                        Surface(
                            shape = RoundedCornerShape(14.dp),
                            color = Color(0xFF1E293B),
                            border = BorderStroke(1.dp, Color(0xFF334155)),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Column(modifier = Modifier.padding(14.dp)) {
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Text(
                                        text = "🇬🇧 English:",
                                        fontSize = 11.sp,
                                        color = Color(0xFF94A3B8),
                                        fontWeight = FontWeight.Bold
                                    )
                                    IconButton(
                                        onClick = { narratorManager.speakSingleText(popupEnglishText) },
                                        modifier = Modifier.size(28.dp)
                                    ) {
                                        Icon(
                                            imageVector = Icons.AutoMirrored.Filled.VolumeUp,
                                            contentDescription = "Speak",
                                            tint = Color(0xFF0284C7),
                                            modifier = Modifier.size(16.dp)
                                        )
                                    }
                                }
                                Spacer(modifier = Modifier.height(4.dp))
                                Text(
                                    text = popupEnglishText,
                                    fontSize = 16.sp,
                                    lineHeight = 24.sp,
                                    color = Color.White,
                                    fontWeight = FontWeight.Medium
                                )
                            }
                        }

                        Spacer(modifier = Modifier.height(12.dp))

                        // Bengali Translation Card
                        Surface(
                            shape = RoundedCornerShape(14.dp),
                            color = Color(0xFF064E3B).copy(alpha = 0.5f),
                            border = BorderStroke(1.dp, Color(0xFF10B981).copy(alpha = 0.4f)),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Column(modifier = Modifier.padding(14.dp)) {
                                Text(
                                    text = "🇧🇩 বাংলা অর্থ:",
                                    fontSize = 11.sp,
                                    color = Color(0xFF6EE7B7),
                                    fontWeight = FontWeight.Bold
                                )
                                Spacer(modifier = Modifier.height(6.dp))
                                if (isPopupTranslating) {
                                    Row(verticalAlignment = Alignment.CenterVertically) {
                                        CircularProgressIndicator(
                                            modifier = Modifier.size(16.dp),
                                            color = Color(0xFF10B981),
                                            strokeWidth = 2.dp
                                        )
                                        Spacer(modifier = Modifier.width(8.dp))
                                        Text(
                                            text = "অনুবাদ করা হচ্ছে...",
                                            fontSize = 14.sp,
                                            color = Color(0xFFA7F3D0)
                                        )
                                    }
                                } else {
                                    Text(
                                        text = popupBengaliText.ifBlank { "অনুবাদ লোড হচ্ছে..." },
                                        fontSize = 19.sp,
                                        lineHeight = 30.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = Color(0xFFD1FAE5)
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(16.dp))

                        // Action Buttons
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            Button(
                                onClick = {
                                    studyStorage.saveWord(popupEnglishText, popupBengaliText, chapterTitle)
                                    Toast.makeText(context, "'$popupEnglishText' শব্দার্থ সেভ হয়েছে!", Toast.LENGTH_SHORT).show()
                                    showTranslatePopup = false
                                    clipboardCopiedText = ""
                                    capturedSelectionText = ""
                                    customTextToolbar.clearSelectedText()
                                },
                                enabled = !isPopupTranslating,
                                shape = RoundedCornerShape(12.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                                modifier = Modifier.weight(1f)
                            ) {
                                Icon(Icons.Default.Bookmark, contentDescription = null, modifier = Modifier.size(14.dp))
                                Spacer(modifier = Modifier.width(4.dp))
                                Text("শব্দার্থ সেভ", fontSize = 12.sp)
                            }

                            OutlinedButton(
                                onClick = {
                                    studyStorage.saveHighlight(popupEnglishText, chapterTitle)
                                    Toast.makeText(context, "হাইলাইট সেভ হয়েছে!", Toast.LENGTH_SHORT).show()
                                    showTranslatePopup = false
                                    clipboardCopiedText = ""
                                    capturedSelectionText = ""
                                    customTextToolbar.clearSelectedText()
                                },
                                enabled = !isPopupTranslating,
                                shape = RoundedCornerShape(12.dp),
                                border = BorderStroke(1.dp, Color(0xFFFDE047).copy(alpha = 0.5f)),
                                modifier = Modifier.weight(1f)
                            ) {
                                Icon(
                                    Icons.Default.BorderColor,
                                    contentDescription = null,
                                    modifier = Modifier.size(14.dp),
                                    tint = Color(0xFFFDE047)
                                )
                                Spacer(modifier = Modifier.width(4.dp))
                                Text("হাইলাইট", fontSize = 12.sp, color = Color(0xFFFDE047))
                            }
                        }
                    }
                }
            }
        }
    }
}

/**
 * Clean, uninterrupted Full Passage Card.
 * Natural reading passage with real-time karaoke audio highlight.
 * NO auto-opening or auto-translate on tap!
 */
@Composable
fun LessonFullPassageCard(
    lessonText: String,
    activeChunk: String = "",
    savedHighlights: List<String> = emptyList()
) {
    Card(
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier.padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            FullPassageStructuredContent(
                rawText = lessonText,
                activeChunk = activeChunk,
                savedHighlights = savedHighlights
            )
        }
    }
}

@Composable
fun QuestionAnswerCard(
    question: String,
    answer: String,
    activeChunk: String = "",
    savedHighlights: List<String> = emptyList()
) {
    var isExpanded by remember { mutableStateOf(false) }

    Card(
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.45f)
        ),
        border = BorderStroke(
            1.dp,
            if (isExpanded) Color(0xFF0284C7).copy(alpha = 0.6f) else MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f)
        ),
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 5.dp)
    ) {
        Column(modifier = Modifier.padding(14.dp)) {
            // Question Row
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.Top
            ) {
                Box(
                    modifier = Modifier
                        .size(24.dp)
                        .clip(CircleShape)
                        .background(Color(0xFF0284C7).copy(alpha = 0.15f)),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "Q",
                        color = Color(0xFF0284C7),
                        fontWeight = FontWeight.Bold,
                        fontSize = 13.sp
                    )
                }
                Spacer(modifier = Modifier.width(10.dp))
                Text(
                    text = parseInlinePassageMarkdown(
                        text = question,
                        baseColor = MaterialTheme.colorScheme.onSurface,
                        boldColor = Color(0xFF0284C7),
                        activeChunk = activeChunk,
                        savedHighlights = savedHighlights
                    ),
                    fontWeight = FontWeight.SemiBold,
                    fontSize = 15.sp,
                    lineHeight = 23.sp,
                    modifier = Modifier.weight(1f)
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Hide/Show Answer Button
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.End
            ) {
                OutlinedButton(
                    onClick = { isExpanded = !isExpanded },
                    shape = RoundedCornerShape(12.dp),
                    border = BorderStroke(
                        1.dp,
                        if (isExpanded) Color(0xFF10B981) else Color(0xFF0284C7)
                    ),
                    colors = ButtonDefaults.outlinedButtonColors(
                        containerColor = if (isExpanded) Color(0xFF10B981).copy(alpha = 0.12f) else Color(0xFF0284C7).copy(alpha = 0.08f),
                        contentColor = if (isExpanded) Color(0xFF059669) else Color(0xFF0284C7)
                    ),
                    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 4.dp),
                    modifier = Modifier.height(34.dp)
                ) {
                    Icon(
                        imageVector = if (isExpanded) Icons.Default.VisibilityOff else Icons.Default.Visibility,
                        contentDescription = null,
                        modifier = Modifier.size(15.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = if (isExpanded) "উত্তর লুকান (Hide Answer)" else "উত্তর দেখুন (Show Answer)",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold
                    )
                }
            }

            // Expandable Answer Section
            AnimatedVisibility(
                visible = isExpanded,
                enter = expandVertically() + fadeIn(),
                exit = shrinkVertically() + fadeOut()
            ) {
                Column(modifier = Modifier.padding(top = 10.dp)) {
                    HorizontalDivider(
                        color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f),
                        thickness = 1.dp
                    )
                    Spacer(modifier = Modifier.height(10.dp))
                    Surface(
                        shape = RoundedCornerShape(12.dp),
                        color = Color(0xFF064E3B).copy(alpha = 0.12f),
                        border = BorderStroke(1.dp, Color(0xFF10B981).copy(alpha = 0.35f)),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Row(
                            modifier = Modifier.padding(12.dp),
                            verticalAlignment = Alignment.Top
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(24.dp)
                                    .clip(CircleShape)
                                    .background(Color(0xFF10B981).copy(alpha = 0.2f)),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = "A",
                                    color = Color(0xFF059669),
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 13.sp
                                )
                            }
                            Spacer(modifier = Modifier.width(10.dp))
                            Text(
                                text = parseInlinePassageMarkdown(
                                    text = answer,
                                    baseColor = MaterialTheme.colorScheme.onSurface,
                                    boldColor = Color(0xFF047857),
                                    activeChunk = activeChunk,
                                    savedHighlights = savedHighlights
                                ),
                                fontSize = 15.sp,
                                lineHeight = 23.sp,
                                fontWeight = FontWeight.Medium,
                                modifier = Modifier.weight(1f)
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun FullPassageStructuredContent(
    rawText: String,
    activeChunk: String = "",
    savedHighlights: List<String> = emptyList()
) {
    val decodedText = rawText
        .replace("&nbsp;", " ")
        .replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", "\"")
        .replace("<br>", "§BR§")
        .replace("<br/>", "§BR§")
        .replace("<br />", "§BR§")

    val lines = decodedText.split("\n")
    var inCodeBlock = false
    val codeBlockLines = mutableListOf<String>()
    val tableLines = mutableListOf<String>()

    fun flushTable(targetList: MutableList<@Composable () -> Unit>) {
        if (tableLines.isNotEmpty()) {
            val copy = tableLines.toList()
            tableLines.clear()
            targetList.add { MarkdownTable(copy) }
        }
    }

    fun flushCode(targetList: MutableList<@Composable () -> Unit>) {
        if (codeBlockLines.isNotEmpty()) {
            val code = codeBlockLines.joinToString("\n")
            codeBlockLines.clear()
            targetList.add { CodeBox(code) }
        }
    }

    val composables = mutableListOf<@Composable () -> Unit>()

    var i = 0
    while (i < lines.size) {
        val line = lines[i]
        val trimmed = line.trim()

        if (trimmed.startsWith("```")) {
            if (inCodeBlock) {
                inCodeBlock = false
                flushCode(composables)
            } else {
                flushTable(composables)
                inCodeBlock = true
            }
            i++
            continue
        }

        if (inCodeBlock) {
            codeBlockLines.add(line)
            i++
            continue
        }

        if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
            tableLines.add(trimmed)
            i++
            continue
        } else {
            flushTable(composables)
        }

        if (trimmed.length >= 5 && (trimmed.all { it == '━' } || trimmed.all { it == '─' } || trimmed.all { it == '-' })) {
            composables.add {
                HorizontalDivider(
                    modifier = Modifier.padding(vertical = 12.dp),
                    color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.8f),
                    thickness = 1.dp
                )
            }
            i++
            continue
        }

        if (trimmed.isEmpty()) {
            composables.add { Spacer(modifier = Modifier.height(8.dp)) }
            i++
            continue
        }

        // 1. Math Problem & Solution Card Detection (Supports 🔢, **সমস্যা, **অনুশীলনী, **উদাহরণ)
        val isMathProblem = trimmed.startsWith("> 🔢") || trimmed.startsWith("🔢") ||
                trimmed.startsWith("> **সমস্যা") || trimmed.startsWith("**সমস্যা") ||
                trimmed.startsWith("> **অনুশীলনী") || trimmed.startsWith("**অনুশীলনী") ||
                trimmed.startsWith("> **উদাহরণ") || trimmed.startsWith("**উদাহরণ") ||
                trimmed.startsWith("> **গাণিতিক সমস্যা") || trimmed.startsWith("**গাণিতিক সমস্যা")

        if (isMathProblem) {
            flushTable(composables)
            flushCode(composables)

            val promptLines = mutableListOf<String>()
            val initialPrompt = trimmed
                .replace(Regex("""^>\s*🔢?\s*"""), "")
                .replace(Regex("""^🔢\s*"""), "")
                .trim()
            promptLines.add(initialPrompt)

            val solutionLines = mutableListOf<String>()
            var foundSolution = false
            var nextIdx = i + 1

            while (nextIdx < lines.size) {
                val nextTrim = lines[nextIdx].trim()
                val isNextProblem = nextTrim.startsWith("> 🔢") || nextTrim.startsWith("🔢") ||
                        nextTrim.startsWith("> **সমস্যা") || nextTrim.startsWith("**সমস্যা") ||
                        nextTrim.startsWith("> **অনুশীলনী") || nextTrim.startsWith("**অনুশীলনী") ||
                        nextTrim.startsWith("> **উদাহরণ") || nextTrim.startsWith("**উদাহরণ") ||
                        nextTrim.startsWith("> **গাণিতিক সমস্যা") || nextTrim.startsWith("**গাণিতিক সমস্যা") ||
                        nextTrim.startsWith("###") || nextTrim.startsWith("## ") || nextTrim.startsWith("# ")

                if (isNextProblem) {
                    break
                }

                val isSolStart = nextTrim.startsWith("> 💡 **সমাধান") || nextTrim.startsWith("💡 **সমাধান") ||
                        nextTrim.startsWith("> 💡 সমাধান") || nextTrim.startsWith("💡 সমাধান") ||
                        nextTrim.startsWith("> **সমাধান:") || nextTrim.startsWith("**সমাধান:") ||
                        nextTrim.startsWith("সমাধান:")

                if (isSolStart) {
                    foundSolution = true
                    val cleanSol = nextTrim
                        .replace(Regex("""^>\s*💡?\s*\*\*সমাধান[:.]?\s*\*{0,2}"""), "")
                        .replace(Regex("""^💡?\s*\*\*সমাধান[:.]?\s*\*{0,2}"""), "")
                        .replace(Regex("""^>\s*💡?\s*সমাধান[:.]?\s*"""), "")
                        .replace(Regex("""^💡?\s*সমাধান[:.]?\s*"""), "")
                        .replace(Regex("""^>\s*\*\*সমাধান[:.]?\s*"""), "")
                        .replace(Regex("""^\*\*সমাধান[:.]?\s*"""), "")
                        .replace(Regex("""^সমাধান[:.]?\s*"""), "")
                        .trim()
                    if (cleanSol.isNotBlank()) {
                        solutionLines.add(cleanSol)
                    }
                    nextIdx++
                    continue
                }

                if (foundSolution) {
                    solutionLines.add(nextTrim)
                } else {
                    promptLines.add(nextTrim)
                }
                nextIdx++
            }

            if (foundSolution) {
                val fullPrompt = promptLines.joinToString(" ").trim()
                val solCopy = solutionLines.toList()
                composables.add {
                    MathProblemCard(
                        problemPrompt = fullPrompt,
                        solutionLines = solCopy
                    )
                }
                i = nextIdx
                continue
            }
        }

        // 2. Question & Answer Pair Detection (Supports both English Q/Answer and Bengali প্রশ্ন/উত্তর)
        val isQuestion = (trimmed.startsWith("> ❓ **Q") || trimmed.startsWith("> **Q") ||
                trimmed.startsWith("**Q:") || trimmed.startsWith("**Q1") || trimmed.startsWith("**Q2") ||
                trimmed.startsWith("**Q3") || trimmed.startsWith("**Q4") || trimmed.startsWith("**Q5") ||
                trimmed.startsWith("**Q6") || trimmed.startsWith("**Q7") || trimmed.startsWith("**Q8") ||
                trimmed.startsWith("**Q9") || trimmed.startsWith("**Question") ||
                trimmed.startsWith("> ❓ **প্রশ্ন") || trimmed.startsWith("> **প্রশ্ন") ||
                trimmed.startsWith("**প্রশ্ন:") || trimmed.startsWith("**প্রশ্ন") || trimmed.startsWith("প্রশ্ন:"))

        if (isQuestion) {
            flushTable(composables)
            flushCode(composables)

            val questionText = trimmed
                .replace(Regex("""^>\s*❓?\s*\*\*Q\d*[:.]?\s*"""), "")
                .replace(Regex("""^>\s*\*\*Question\d*[:.]?\s*"""), "")
                .replace(Regex("""^\*\*Q\d*[:.]?\s*"""), "")
                .replace(Regex("""^\*\*Question\d*[:.]?\s*"""), "")
                .replace(Regex("""^>\s*❓?\s*\*\*প্রশ্ন\d*[:.]?\s*"""), "")
                .replace(Regex("""^>\s*\*\*প্রশ্ন\d*[:.]?\s*"""), "")
                .replace(Regex("""^\*\*প্রশ্ন\d*[:.]?\s*"""), "")
                .replace(Regex("""^প্রশ্ন[:.]?\s*"""), "")
                .trimEnd('*', ' ')
                .trim()

            // Look for Answer line
            var answerText = ""
            var nextIdx = i + 1
            while (nextIdx < lines.size) {
                val nextTrimmed = lines[nextIdx].trim()
                if (nextTrimmed.isEmpty()) {
                    nextIdx++
                    continue
                }
                val isAnswer = (nextTrimmed.startsWith("> 💡 **Answer") || nextTrimmed.startsWith("> 💡 **A") ||
                        nextTrimmed.startsWith("> **Answer") || nextTrimmed.startsWith("> **A") ||
                        nextTrimmed.startsWith("**Answer") || nextTrimmed.startsWith("**A:") ||
                        nextTrimmed.startsWith("Answer:") ||
                        nextTrimmed.startsWith("> 💡 **উত্তর") || nextTrimmed.startsWith("> **উত্তর") ||
                        nextTrimmed.startsWith("**উত্তর") || nextTrimmed.startsWith("উত্তর:"))

                if (isAnswer) {
                    answerText = nextTrimmed
                        .replace(Regex("""^>\s*💡?\s*\*\*Answer[:.]?\s*"""), "")
                        .replace(Regex("""^>\s*💡?\s*\*\*A[:.]?\s*"""), "")
                        .replace(Regex("""^\*\*Answer[:.]?\s*"""), "")
                        .replace(Regex("""^\*\*A[:.]?\s*"""), "")
                        .replace(Regex("""^Answer[:.]?\s*"""), "")
                        .replace(Regex("""^>\s*💡?\s*\*\*উত্তর[:.]?\s*"""), "")
                        .replace(Regex("""^>\s*\*\*উত্তর[:.]?\s*"""), "")
                        .replace(Regex("""^\*\*উত্তর[:.]?\s*"""), "")
                        .replace(Regex("""^উত্তর[:.]?\s*"""), "")
                        .trimEnd('*', ' ')
                        .trim()
                    i = nextIdx
                    break
                } else {
                    break
                }
            }

            if (answerText.isNotBlank()) {
                val q = questionText
                val a = answerText
                composables.add {
                    QuestionAnswerCard(
                        question = q,
                        answer = a,
                        activeChunk = activeChunk,
                        savedHighlights = savedHighlights
                    )
                }
                i++
                continue
            }
        }

        // Title Badge
        if (trimmed.startsWith("📌") || (trimmed.startsWith("পাঠ ") && !trimmed.contains("\n"))) {
            composables.add {
                Surface(
                    shape = RoundedCornerShape(14.dp),
                    color = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.7f),
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 10.dp)
                ) {
                    Row(
                        modifier = Modifier.padding(horizontal = 14.dp, vertical = 10.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.Bookmark,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(20.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = trimmed.replace("📌", "").replace(Regex("""^[#■]+\s*"""), "").trim(),
                            fontWeight = FontWeight.Bold,
                            fontSize = 17.sp,
                            color = MaterialTheme.colorScheme.onPrimaryContainer
                        )
                    }
                }
            }
            i++
            continue
        }

        // Section Headers
        if (trimmed.startsWith("#") || trimmed.startsWith("■")) {
            val title = trimmed.replace(Regex("""^[#■]+\s*"""), "").trim()
            val isMainHeader = trimmed.startsWith("# ") || trimmed.startsWith("## ")
            val headerSize = if (isMainHeader) 19.sp else 17.sp

            composables.add {
                Row(
                    modifier = Modifier.padding(top = 14.dp, bottom = 6.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .width(4.dp)
                            .height(headerSize.value.dp + 4.dp)
                            .clip(RoundedCornerShape(2.dp))
                            .background(Color(0xFF0284C7))
                    )
                    Spacer(modifier = Modifier.width(10.dp))
                    Text(
                        text = title,
                        fontWeight = FontWeight.Bold,
                        fontSize = headerSize,
                        color = Color(0xFF0284C7)
                    )
                }
            }
            i++
            continue
        }

        // Bullet point
        if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
            val bulletContent = trimmed.removePrefix("•").removePrefix("-").trim()
            composables.add {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 4.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .padding(top = 9.dp, end = 10.dp)
                            .size(6.dp)
                            .clip(CircleShape)
                            .background(Color(0xFF0284C7))
                    )
                    Text(
                        text = parseInlinePassageMarkdown(
                            text = bulletContent.replace("§BR§", "\n"),
                            baseColor = MaterialTheme.colorScheme.onSurface,
                            boldColor = Color(0xFF0284C7),
                            activeChunk = activeChunk,
                            savedHighlights = savedHighlights
                        ),
                        fontSize = 16.sp,
                        lineHeight = 26.sp
                    )
                }
            }
            i++
            continue
        }

        // 3. Blockquote / Callout Box (lines starting with > that are not questions or math)
        if (trimmed.startsWith(">")) {
            val calloutLines = mutableListOf<String>()
            var qIdx = i
            while (qIdx < lines.size) {
                val qLine = lines[qIdx].trim()
                if (qLine.startsWith(">")) {
                    val clean = qLine.removePrefix(">").trim()
                    calloutLines.add(clean)
                    qIdx++
                } else {
                    break
                }
            }

            if (calloutLines.isNotEmpty()) {
                val copy = calloutLines.toList()
                composables.add {
                    Surface(
                        shape = RoundedCornerShape(14.dp),
                        color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.45f),
                        border = BorderStroke(1.dp, Color(0xFF0284C7).copy(alpha = 0.35f)),
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 6.dp)
                    ) {
                        Row(modifier = Modifier.padding(14.dp)) {
                            Box(
                                modifier = Modifier
                                    .width(4.dp)
                                    .fillMaxHeight()
                                    .clip(RoundedCornerShape(2.dp))
                                    .background(Color(0xFF0284C7))
                            )
                            Spacer(modifier = Modifier.width(12.dp))
                            Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                                copy.forEach { ql ->
                                    if (ql.isNotBlank()) {
                                        Text(
                                            text = parseInlinePassageMarkdown(
                                                text = ql.replace("§BR§", "\n"),
                                                baseColor = MaterialTheme.colorScheme.onSurface,
                                                boldColor = Color(0xFF0284C7),
                                                activeChunk = activeChunk,
                                                savedHighlights = savedHighlights
                                            ),
                                            fontSize = 15.sp,
                                            lineHeight = 23.sp
                                        )
                                    }
                                }
                            }
                        }
                    }
                }
                i = qIdx
                continue
            }
        }

        // Standard Natural Paragraph (Pure reading, NO auto-open on tap!)
        composables.add {
            Text(
                text = parseInlinePassageMarkdown(
                    text = trimmed.replace("§BR§", "\n"),
                    baseColor = MaterialTheme.colorScheme.onSurface,
                    boldColor = MaterialTheme.colorScheme.onSurface,
                    activeChunk = activeChunk,
                    savedHighlights = savedHighlights
                ),
                fontSize = 17.sp,
                lineHeight = 28.sp,
                modifier = Modifier.padding(vertical = 4.dp)
            )
        }
        i++
    }

    flushTable(composables)
    flushCode(composables)

    Column {
        composables.forEach { item ->
            item()
        }
    }
}

fun parseInlinePassageMarkdown(
    text: String,
    baseColor: Color,
    boldColor: Color,
    activeChunk: String = "",
    savedHighlights: List<String> = emptyList()
): AnnotatedString {
    val mathFormatted = MathTextFormatter.formatMath(text)
    val clean = mathFormatted
        .replace("&nbsp;", " ")
        .replace("§BR§", "\n")

    return buildAnnotatedString {
        var cursor = 0
        val regex = Regex("""\*\*(.*?)\*\*""")
        val matches = regex.findAll(clean)

        for (match in matches) {
            if (match.range.first > cursor) {
                appendPassageSegment(
                    text = clean.substring(cursor, match.range.first),
                    baseColor = baseColor,
                    activeChunk = activeChunk,
                    savedHighlights = savedHighlights
                )
            }
            val boldContent = match.groupValues[1]
            appendPassageSegment(
                text = boldContent,
                baseColor = boldColor,
                isBold = true,
                activeChunk = activeChunk,
                savedHighlights = savedHighlights
            )
            cursor = match.range.last + 1
        }
        if (cursor < clean.length) {
            appendPassageSegment(
                text = clean.substring(cursor),
                baseColor = baseColor,
                activeChunk = activeChunk,
                savedHighlights = savedHighlights
            )
        }
    }
}

private fun AnnotatedString.Builder.appendPassageSegment(
    text: String,
    baseColor: Color,
    isBold: Boolean = false,
    activeChunk: String = "",
    savedHighlights: List<String> = emptyList()
) {
    if (text.isEmpty()) return

    // 1. Real-time Audio Karaoke Sentence Highlight
    val cleanChunk = activeChunk.trim().trimEnd('.', '।', '?', '!')
    val activeIdx = if (cleanChunk.length >= 4) text.indexOf(cleanChunk, ignoreCase = true) else -1

    if (activeIdx >= 0) {
        val before = text.substring(0, activeIdx)
        val match = text.substring(activeIdx, activeIdx + cleanChunk.length)
        val after = text.substring(activeIdx + cleanChunk.length)

        if (before.isNotEmpty()) {
            appendPassageSegment(before, baseColor, isBold, "", savedHighlights)
        }
        withStyle(
            SpanStyle(
                background = Color(0xFFFDE047), // Vivid yellow karaoke highlight
                color = Color(0xFF713F12),
                fontWeight = FontWeight.Bold
            )
        ) {
            append(match)
        }
        if (after.isNotEmpty()) {
            appendPassageSegment(after, baseColor, isBold, activeChunk, savedHighlights)
        }
        return
    }

    // 2. Saved user highlight
    val matchedHighlight = savedHighlights.firstOrNull { hl ->
        val cleanHl = hl.trim()
        cleanHl.length >= 3 && text.contains(cleanHl, ignoreCase = true)
    }

    if (matchedHighlight != null) {
        val hlTrimmed = matchedHighlight.trim()
        val hlIdx = text.indexOf(hlTrimmed, ignoreCase = true)
        if (hlIdx >= 0) {
            val before = text.substring(0, hlIdx)
            val match = text.substring(hlIdx, hlIdx + hlTrimmed.length)
            val after = text.substring(hlIdx + hlTrimmed.length)

            if (before.isNotEmpty()) {
                appendPassageSegment(before, baseColor, isBold, "", emptyList())
            }
            withStyle(
                SpanStyle(
                    background = Color(0xFFFEF08A), // Soft warm yellow highlight
                    color = Color(0xFF854D0E),
                    fontWeight = if (isBold) FontWeight.Bold else FontWeight.Medium
                )
            ) {
                append(match)
            }
            if (after.isNotEmpty()) {
                appendPassageSegment(after, baseColor, isBold, "", savedHighlights)
            }
            return
        }
    }

    // 3. Normal text
    withStyle(
        SpanStyle(
            color = baseColor,
            fontWeight = if (isBold) FontWeight.Bold else FontWeight.Normal
        )
    ) {
        append(text)
    }
}

@Composable
fun MarkdownTable(lines: List<String>) {
    if (lines.size < 2) return

    val rows = lines
        .filter { line ->
            !line.trim().matches(Regex("""^\|?[\s\-:]+(\|[\s\-:]+)+\|?$"""))
        }
        .map { line ->
            line.trim().removeSurrounding("|").split("|").map { it.trim() }
        }

    if (rows.isEmpty()) return

    val header = rows.first()
    val data = rows.drop(1)

    Card(
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant),
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .horizontalScroll(rememberScrollState())
        ) {
            Row(
                modifier = Modifier
                    .background(MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.7f))
                    .padding(vertical = 10.dp, horizontal = 12.dp)
            ) {
                header.forEach { cell ->
                    Text(
                        text = cell.replace("**", "").replace("§BR§", "\n").replace("&nbsp;", " "),
                        fontWeight = FontWeight.Bold,
                        fontSize = 14.sp,
                        color = MaterialTheme.colorScheme.onPrimaryContainer,
                        modifier = Modifier
                            .widthIn(min = 120.dp, max = 240.dp)
                            .padding(horizontal = 6.dp)
                    )
                }
            }
            HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant)

            data.forEachIndexed { idx, row ->
                val bg = if (idx % 2 == 0) MaterialTheme.colorScheme.surface else MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f)
                Row(
                    modifier = Modifier
                        .background(bg)
                        .padding(vertical = 8.dp, horizontal = 12.dp)
                ) {
                    row.forEach { cell ->
                        Text(
                            text = parseInlinePassageMarkdown(
                                text = cell,
                                baseColor = MaterialTheme.colorScheme.onSurface,
                                boldColor = Color(0xFF0284C7)
                            ),
                            fontSize = 14.sp,
                            lineHeight = 20.sp,
                            modifier = Modifier
                                .widthIn(min = 120.dp, max = 240.dp)
                                .padding(horizontal = 6.dp)
                        )
                    }
                }
                if (idx < data.size - 1) {
                    HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.4f))
                }
            }
        }
    }
}

@Composable
fun CodeBox(code: String) {
    Card(
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.6f)
        ),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant),
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .horizontalScroll(rememberScrollState())
                .padding(14.dp)
        ) {
            Text(
                text = code.trim(),
                fontFamily = FontFamily.Monospace,
                fontSize = 13.sp,
                lineHeight = 18.sp,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

/**
 * Vocabulary Notebook Dialog for reviewing saved words and practicing pronunciation.
 */
@Composable
fun VocabularyDialog(
    words: List<SavedWord>,
    onDismiss: () -> Unit,
    onSpeak: (String) -> Unit,
    onDelete: (String) -> Unit
) {
    var searchQuery by remember { mutableStateOf("") }
    val filtered = remember(words, searchQuery) {
        if (searchQuery.isBlank()) words
        else words.filter {
            it.word.contains(searchQuery, ignoreCase = true) ||
            it.translation.contains(searchQuery, ignoreCase = true)
        }
    }

    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false)
    ) {
        Surface(
            shape = RoundedCornerShape(24.dp),
            color = MaterialTheme.colorScheme.surface,
            tonalElevation = 6.dp,
            modifier = Modifier
                .fillMaxWidth(0.95f)
                .fillMaxHeight(0.85f)
                .padding(vertical = 16.dp)
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.MenuBook,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(24.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "শব্দভাণ্ডার খাতা (${words.size})",
                            fontWeight = FontWeight.Bold,
                            fontSize = 18.sp
                        )
                    }
                    IconButton(onClick = onDismiss) {
                        Icon(Icons.Default.Close, contentDescription = "Close")
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                OutlinedTextField(
                    value = searchQuery,
                    onValueChange = { searchQuery = it },
                    placeholder = { Text("শব্দ বা অর্থ খুঁজুন...") },
                    leadingIcon = { Icon(Icons.Default.Search, contentDescription = null) },
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth()
                )

                Spacer(modifier = Modifier.height(12.dp))

                if (filtered.isEmpty()) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .weight(1f),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = if (words.isEmpty()) "এখনো কোনো নতুন শব্দ সেভ করা হয়নি।\nপাঠ পড়ার সময় যেকোনো শব্দ সিলেক্ট করে সেভ করুন।"
                                   else "কোনো মিল পাওয়া যায়নি।",
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            fontSize = 14.sp,
                            lineHeight = 22.sp
                        )
                    }
                } else {
                    LazyColumn(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        items(filtered, key = { it.id }) { item ->
                            Card(
                                shape = RoundedCornerShape(14.dp),
                                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)),
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Row(
                                    modifier = Modifier
                                        .padding(14.dp)
                                        .fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Column(modifier = Modifier.weight(1f)) {
                                        Text(
                                            text = item.word,
                                            fontWeight = FontWeight.Bold,
                                            fontSize = 17.sp,
                                            color = MaterialTheme.colorScheme.onSurface
                                        )
                                        Spacer(modifier = Modifier.height(2.dp))
                                        Text(
                                            text = item.translation,
                                            fontSize = 15.sp,
                                            color = MaterialTheme.colorScheme.primary,
                                            fontWeight = FontWeight.SemiBold
                                        )
                                        if (item.lessonTitle.isNotBlank()) {
                                            Spacer(modifier = Modifier.height(4.dp))
                                            Text(
                                                text = item.lessonTitle,
                                                fontSize = 11.sp,
                                                color = MaterialTheme.colorScheme.onSurfaceVariant
                                            )
                                        }
                                    }

                                    Row {
                                        IconButton(onClick = { onSpeak(item.word) }) {
                                            Icon(
                                                imageVector = Icons.AutoMirrored.Filled.VolumeUp,
                                                contentDescription = "Listen",
                                                tint = MaterialTheme.colorScheme.primary
                                            )
                                        }
                                        IconButton(onClick = { onDelete(item.id) }) {
                                            Icon(
                                                imageVector = Icons.Default.Delete,
                                                contentDescription = "Delete",
                                                tint = MaterialTheme.colorScheme.error.copy(alpha = 0.7f)
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/**
 * Highlights Dialog for viewing and copying saved important sentences.
 */
@Composable
fun HighlightsDialog(
    highlights: List<SavedHighlight>,
    onDismiss: () -> Unit,
    onCopy: (String) -> Unit,
    onDelete: (String) -> Unit
) {
    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false)
    ) {
        Surface(
            shape = RoundedCornerShape(24.dp),
            color = MaterialTheme.colorScheme.surface,
            tonalElevation = 6.dp,
            modifier = Modifier
                .fillMaxWidth(0.95f)
                .fillMaxHeight(0.85f)
                .padding(vertical = 16.dp)
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = Icons.Default.BorderColor,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.tertiary,
                            modifier = Modifier.size(24.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "গুরুত্বপূর্ণ বাক্য (${highlights.size})",
                            fontWeight = FontWeight.Bold,
                            fontSize = 18.sp
                        )
                    }
                    IconButton(onClick = onDismiss) {
                        Icon(Icons.Default.Close, contentDescription = "Close")
                    }
                }

                Spacer(modifier = Modifier.height(14.dp))

                if (highlights.isEmpty()) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .weight(1f),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "এখনো কোনো বাক্য হাইলাইট করা হয়নি।\nপড়ার সময় প্রয়োজনীয় বাক্য সিলেক্ট করে হাইলাইট অপশনে সেভ করুন।",
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            fontSize = 14.sp,
                            lineHeight = 22.sp
                        )
                    }
                } else {
                    LazyColumn(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        items(highlights, key = { it.id }) { item ->
                            Card(
                                shape = RoundedCornerShape(14.dp),
                                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f)),
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Column(modifier = Modifier.padding(14.dp)) {
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        verticalAlignment = Alignment.CenterVertically
                                    ) {
                                        Box(
                                            modifier = Modifier
                                                .width(4.dp)
                                                .height(20.dp)
                                                .background(Color(0xFFEAB308), RoundedCornerShape(2.dp))
                                        )
                                        Spacer(modifier = Modifier.width(8.dp))
                                        Text(
                                            text = item.lessonTitle.ifBlank { "সাধারণ নোট" },
                                            fontSize = 12.sp,
                                            fontWeight = FontWeight.SemiBold,
                                            color = MaterialTheme.colorScheme.onSurfaceVariant
                                        )
                                    }

                                    Spacer(modifier = Modifier.height(8.dp))

                                    Text(
                                        text = item.text,
                                        fontSize = 15.sp,
                                        lineHeight = 23.sp,
                                        color = MaterialTheme.colorScheme.onSurface
                                    )

                                    Spacer(modifier = Modifier.height(8.dp))

                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.End
                                    ) {
                                        IconButton(onClick = { onCopy(item.text) }) {
                                            Icon(
                                                imageVector = Icons.Default.ContentCopy,
                                                contentDescription = "Copy",
                                                tint = MaterialTheme.colorScheme.primary,
                                                modifier = Modifier.size(18.dp)
                                            )
                                        }
                                        IconButton(onClick = { onDelete(item.id) }) {
                                            Icon(
                                                imageVector = Icons.Default.Delete,
                                                contentDescription = "Delete",
                                                tint = MaterialTheme.colorScheme.error.copy(alpha = 0.7f),
                                                modifier = Modifier.size(18.dp)
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
