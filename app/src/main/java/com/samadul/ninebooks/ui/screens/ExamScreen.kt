package com.samadul.ninebooks.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Cancel
import androidx.compose.material.icons.filled.EmojiEvents
import androidx.compose.material.icons.filled.FactCheck
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.samadul.ninebooks.data.models.ExamQuestion
import com.samadul.ninebooks.ui.viewmodel.StudyViewModel
import com.samadul.ninebooks.ui.viewmodel.UiState

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ExamScreen(
    chapterId: String,
    chapterTitle: String,
    viewModel: StudyViewModel,
    onBack: () -> Unit
) {
    LaunchedEffect(chapterId) {
        viewModel.fetchExamQuestions(chapterId)
        viewModel.resetExamState()
    }

    val questionsState by viewModel.questions.collectAsState()
    val submissionState by viewModel.examSubmissionState.collectAsState()

    var currentIndex by remember { mutableIntStateOf(0) }
    var selectedAnswers by remember { mutableStateOf<Map<Int, Int>>(emptyMap()) }
    var showCheckpointDialog by remember { mutableStateOf(false) }
    var checkpointBatch by remember { mutableIntStateOf(1) } // 1 = Q1-5, 2 = Q6-10, etc.
    var showFinalResultsDialog by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("অনুশীলন: $chapterTitle", fontWeight = FontWeight.Bold, maxLines = 1) },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    // Quick button to view checkpoint if answered at least 1
                    if (selectedAnswers.isNotEmpty()) {
                        TextButton(onClick = {
                            checkpointBatch = (currentIndex / 5) + 1
                            showCheckpointDialog = true
                        }) {
                            Text("উত্তর চেক করুন", fontWeight = FontWeight.SemiBold)
                        }
                    }
                }
            )
        }
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            when (val state = questionsState) {
                is UiState.Loading -> {
                    CircularProgressIndicator(modifier = Modifier.align(Alignment.Center))
                }
                is UiState.Error -> {
                    Column(
                        modifier = Modifier
                            .align(Alignment.Center)
                            .padding(16.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text("ত্রুটি: ${state.message}", color = MaterialTheme.colorScheme.error)
                        Spacer(modifier = Modifier.height(8.dp))
                        Button(onClick = { viewModel.fetchExamQuestions(chapterId) }) {
                            Text("পুনরায় চেষ্টা করুন")
                        }
                    }
                }
                is UiState.Success -> {
                    val questions = state.data
                    if (questions.isEmpty()) {
                        Column(
                            modifier = Modifier
                                .align(Alignment.Center)
                                .padding(16.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Text(
                                "এই অধ্যায়ের কোনো প্রশ্ন পাওয়া যায়নি।",
                                style = MaterialTheme.typography.bodyLarge
                            )
                            Spacer(modifier = Modifier.height(12.dp))
                            Button(onClick = onBack) {
                                Text("ফিরে যান (Go Back)")
                            }
                        }
                    } else {
                        val currentQuestion = questions[currentIndex]
                        val progress = (currentIndex + 1).toFloat() / questions.size
                        val isYesNo = currentQuestion.options.size == 2 && 
                                     currentQuestion.options.any { it.contains("হ্যাঁ") || it.contains("Yes") }

                        Column(
                            modifier = Modifier
                                .fillMaxSize()
                                .padding(20.dp)
                                .verticalScroll(rememberScrollState()),
                            verticalArrangement = Arrangement.SpaceBetween
                        ) {
                            Column {
                                // Progress Bar & Batch indicator
                                LinearProgressIndicator(
                                    progress = { progress },
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .height(8.dp)
                                        .clip(RoundedCornerShape(4.dp)),
                                    color = MaterialTheme.colorScheme.primary,
                                    trackColor = MaterialTheme.colorScheme.surfaceVariant
                                )
                                Spacer(modifier = Modifier.height(10.dp))
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Text(
                                        text = "প্রশ্ন ${currentIndex + 1} / ${questions.size}",
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 15.sp,
                                        color = MaterialTheme.colorScheme.primary
                                    )
                                    // Checkpoint Badge
                                    Surface(
                                        shape = RoundedCornerShape(8.dp),
                                        color = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.5f)
                                    ) {
                                        Text(
                                            text = "রাউন্ড: প্রশ্ন ${(currentIndex / 5) * 5 + 1} - ${minOf(((currentIndex / 5) + 1) * 5, questions.size)}",
                                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
                                            fontSize = 11.sp,
                                            fontWeight = FontWeight.Medium,
                                            color = MaterialTheme.colorScheme.primary
                                        )
                                    }
                                }

                                Spacer(modifier = Modifier.height(20.dp))

                                // Question Card
                                Card(
                                    shape = RoundedCornerShape(18.dp),
                                    colors = CardDefaults.cardColors(
                                        containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.45f)
                                    ),
                                    border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f)),
                                    modifier = Modifier.fillMaxWidth()
                                ) {
                                    Column(modifier = Modifier.padding(20.dp)) {
                                        Text(
                                            text = currentQuestion.questionBn,
                                            fontWeight = FontWeight.Bold,
                                            fontSize = 18.sp,
                                            lineHeight = 28.sp,
                                            color = MaterialTheme.colorScheme.onSurface
                                        )
                                        if (currentQuestion.questionEn.isNotBlank()) {
                                            Spacer(modifier = Modifier.height(6.dp))
                                            Text(
                                                text = currentQuestion.questionEn,
                                                fontSize = 13.sp,
                                                color = MaterialTheme.colorScheme.onSurfaceVariant
                                            )
                                        }
                                    }
                                }

                                Spacer(modifier = Modifier.height(24.dp))

                                // Options: Special Big UI for Yes/No, standard for MCQ
                                if (isYesNo) {
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.spacedBy(14.dp)
                                    ) {
                                        currentQuestion.options.forEachIndexed { optIndex, optionText ->
                                            val isSelected = selectedAnswers[currentIndex] == optIndex
                                            val isYes = optIndex == 0
                                            val activeColor = if (isYes) Color(0xFF2E7D32) else Color(0xFFC62828)

                                            Card(
                                                shape = RoundedCornerShape(16.dp),
                                                border = BorderStroke(
                                                    width = if (isSelected) 2.5.dp else 1.dp,
                                                    color = if (isSelected) activeColor else MaterialTheme.colorScheme.outlineVariant
                                                ),
                                                colors = CardDefaults.cardColors(
                                                    containerColor = if (isSelected) activeColor.copy(alpha = 0.15f) else MaterialTheme.colorScheme.surface
                                                ),
                                                modifier = Modifier
                                                    .weight(1f)
                                                    .height(90.dp)
                                                    .clickable {
                                                        selectedAnswers = selectedAnswers + (currentIndex to optIndex)
                                                    }
                                            ) {
                                                Box(
                                                    modifier = Modifier.fillMaxSize(),
                                                    contentAlignment = Alignment.Center
                                                ) {
                                                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                                        Text(
                                                            text = if (isYes) "✔" else "✘",
                                                            fontSize = 22.sp,
                                                            color = if (isSelected) activeColor else MaterialTheme.colorScheme.onSurfaceVariant
                                                        )
                                                        Spacer(modifier = Modifier.height(2.dp))
                                                        Text(
                                                            text = optionText,
                                                            fontSize = 16.sp,
                                                            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                                                            color = if (isSelected) activeColor else MaterialTheme.colorScheme.onSurface
                                                        )
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    // General MCQ Options
                                    currentQuestion.options.forEachIndexed { optIndex, optionText ->
                                        val isSelected = selectedAnswers[currentIndex] == optIndex
                                        Card(
                                            shape = RoundedCornerShape(14.dp),
                                            border = BorderStroke(
                                                width = if (isSelected) 2.dp else 1.dp,
                                                color = if (isSelected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outlineVariant
                                            ),
                                            colors = CardDefaults.cardColors(
                                                containerColor = if (isSelected) MaterialTheme.colorScheme.primary.copy(alpha = 0.12f) else MaterialTheme.colorScheme.surface
                                            ),
                                            modifier = Modifier
                                                .fillMaxWidth()
                                                .padding(vertical = 5.dp)
                                                .clickable {
                                                    selectedAnswers = selectedAnswers + (currentIndex to optIndex)
                                                }
                                        ) {
                                            Row(
                                                modifier = Modifier
                                                    .fillMaxWidth()
                                                    .padding(16.dp),
                                                verticalAlignment = Alignment.CenterVertically
                                            ) {
                                                RadioButton(
                                                    selected = isSelected,
                                                    onClick = {
                                                        selectedAnswers = selectedAnswers + (currentIndex to optIndex)
                                                    }
                                                )
                                                Spacer(modifier = Modifier.width(8.dp))
                                                Text(
                                                    text = optionText,
                                                    fontSize = 16.sp,
                                                    color = MaterialTheme.colorScheme.onSurface
                                                )
                                            }
                                        }
                                    }
                                }
                            }

                            Spacer(modifier = Modifier.height(24.dp))

                            // Bottom Navigation buttons
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .navigationBarsPadding()
                                    .padding(bottom = 8.dp),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                OutlinedButton(
                                    onClick = { if (currentIndex > 0) currentIndex-- },
                                    enabled = currentIndex > 0,
                                    shape = RoundedCornerShape(12.dp)
                                ) {
                                    Text("পূর্ববর্তী (Prev)")
                                }

                                if (currentIndex < questions.size - 1) {
                                    Button(
                                        onClick = {
                                            val nextIndex = currentIndex + 1
                                            // Checkpoint triggered every 5 questions! (after Q5, Q10, Q15...)
                                            if (nextIndex % 5 == 0) {
                                                checkpointBatch = nextIndex / 5
                                                showCheckpointDialog = true
                                            } else {
                                                currentIndex++
                                            }
                                        },
                                        shape = RoundedCornerShape(12.dp)
                                    ) {
                                        // Show special text if this next click triggers checkpoint
                                        if ((currentIndex + 1) % 5 == 0) {
                                            Icon(Icons.Default.FactCheck, contentDescription = null, modifier = Modifier.size(16.dp))
                                            Spacer(modifier = Modifier.width(6.dp))
                                            Text("উত্তর যাচাই (${currentIndex + 1} টি সম্পন্ন)")
                                        } else {
                                            Text("পরবর্তী (Next)")
                                        }
                                    }
                                } else {
                                    Button(
                                        onClick = {
                                            var score = 0
                                            questions.forEachIndexed { i, q ->
                                                if (selectedAnswers[i] == q.correctAnswerIndex) score++
                                            }
                                            viewModel.submitExamScore(chapterId, score, questions.size)
                                            showFinalResultsDialog = true
                                        },
                                        shape = RoundedCornerShape(12.dp),
                                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF2E7D32))
                                    ) {
                                        Icon(Icons.Default.CheckCircle, contentDescription = null)
                                        Spacer(modifier = Modifier.width(6.dp))
                                        Text("চূড়ান্ত জমা দিন (Finish)")
                                    }
                                }
                            }
                        }

                        // 5-Question Checkpoint Review Dialog
                        if (showCheckpointDialog) {
                            val startIdx = (checkpointBatch - 1) * 5
                            val endIdx = minOf(checkpointBatch * 5, questions.size)
                            val batchQuestions = questions.subList(startIdx, endIdx)

                            var batchScore = 0
                            batchQuestions.forEachIndexed { relIdx, q ->
                                val actualIdx = startIdx + relIdx
                                if (selectedAnswers[actualIdx] == q.correctAnswerIndex) batchScore++
                            }

                            AlertDialog(
                                onDismissRequest = { showCheckpointDialog = false },
                                icon = {
                                    Icon(
                                        Icons.Default.FactCheck,
                                        contentDescription = null,
                                        tint = MaterialTheme.colorScheme.primary,
                                        modifier = Modifier.size(36.dp)
                                    )
                                },
                                title = {
                                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                        Text("প্রশ্ন ${startIdx + 1} হতে ${endIdx} এর ফলাফল", fontWeight = FontWeight.Bold, fontSize = 18.sp)
                                        Text(
                                            text = "স্কোর: $batchScore / ${batchQuestions.size}",
                                            fontWeight = FontWeight.ExtraBold,
                                            fontSize = 20.sp,
                                            color = if (batchScore >= 4) Color(0xFF2E7D32) else MaterialTheme.colorScheme.primary
                                        )
                                    }
                                },
                                text = {
                                    Column(
                                        modifier = Modifier
                                            .fillMaxWidth()
                                            .verticalScroll(rememberScrollState()),
                                        verticalArrangement = Arrangement.spacedBy(10.dp)
                                    ) {
                                        batchQuestions.forEachIndexed { relIdx, q ->
                                            val actualIdx = startIdx + relIdx
                                            val userAns = selectedAnswers[actualIdx]
                                            val isCorrect = userAns == q.correctAnswerIndex
                                            val correctText = q.options.getOrElse(q.correctAnswerIndex) { "" }

                                            Card(
                                                shape = RoundedCornerShape(10.dp),
                                                colors = CardDefaults.cardColors(
                                                    containerColor = if (isCorrect) Color(0xFF1B5E20).copy(alpha = 0.15f)
                                                                     else Color(0xFFB71C1C).copy(alpha = 0.15f)
                                                ),
                                                border = BorderStroke(
                                                    1.dp,
                                                    if (isCorrect) Color(0xFF2E7D32) else Color(0xFFC62828)
                                                )
                                            ) {
                                                Column(modifier = Modifier.padding(10.dp)) {
                                                    Row(verticalAlignment = Alignment.CenterVertically) {
                                                        Icon(
                                                            imageVector = if (isCorrect) Icons.Default.CheckCircle else Icons.Default.Cancel,
                                                            contentDescription = null,
                                                            tint = if (isCorrect) Color(0xFF2E7D32) else Color(0xFFC62828),
                                                            modifier = Modifier.size(18.dp)
                                                        )
                                                        Spacer(modifier = Modifier.width(6.dp))
                                                        Text(
                                                            text = "প্রশ্ন ${actualIdx + 1}",
                                                            fontWeight = FontWeight.Bold,
                                                            fontSize = 13.sp
                                                        )
                                                    }
                                                    Spacer(modifier = Modifier.height(4.dp))
                                                    Text(text = q.questionBn, fontSize = 12.sp, lineHeight = 16.sp)
                                                    Spacer(modifier = Modifier.height(4.dp))
                                                    Text(
                                                        text = "সঠিক উত্তর: $correctText",
                                                        fontWeight = FontWeight.SemiBold,
                                                        fontSize = 12.sp,
                                                        color = Color(0xFF2E7D32)
                                                    )
                                                }
                                            }
                                        }
                                    }
                                },
                                confirmButton = {
                                    Button(onClick = {
                                        showCheckpointDialog = false
                                        // Move to next question if we paused at a checkpoint
                                        if (currentIndex < endIdx && currentIndex < questions.size - 1) {
                                            currentIndex = endIdx
                                        }
                                    }) {
                                        Text(if (endIdx < questions.size) "পরবর্তী ৫টি প্রশ্ন শুরু করুন ➔" else "সম্পন্ন")
                                    }
                                },
                                dismissButton = {
                                    TextButton(onClick = { showCheckpointDialog = false }) {
                                        Text("বন্ধ করুন")
                                    }
                                }
                            )
                        }

                        // Final Results Dialog
                        if (showFinalResultsDialog) {
                            var score = 0
                            questions.forEachIndexed { i, q ->
                                if (selectedAnswers[i] == q.correctAnswerIndex) score++
                            }

                            AlertDialog(
                                onDismissRequest = {},
                                icon = {
                                    Icon(
                                        Icons.Default.EmojiEvents,
                                        contentDescription = null,
                                        tint = Color(0xFFFFA000),
                                        modifier = Modifier.size(48.dp)
                                    )
                                },
                                title = { Text("পরীক্ষা সম্পন্ন!", fontWeight = FontWeight.Bold) },
                                text = {
                                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                                        Text(
                                            text = "মোট স্কোর: $score / ${questions.size}",
                                            fontSize = 22.sp,
                                            fontWeight = FontWeight.ExtraBold,
                                            color = MaterialTheme.colorScheme.primary
                                        )
                                        Spacer(modifier = Modifier.height(8.dp))
                                        val percentage = (score * 100) / questions.size
                                        Text(
                                            text = if (percentage >= 80) "অসাধারণ পারফরম্যান্স! আপনি লেনদেন পুরোপুরি বুঝতে পেরেছেন! 🌟" 
                                                   else if (percentage >= 50) "ভালো হয়েছে! আরো কিছুদিন অনুশীলন চালিয়ে যান। 👍" 
                                                   else "অনুশীলন অব্যাহত রাখুন। 📖"
                                        )
                                        Spacer(modifier = Modifier.height(12.dp))
                                        when (submissionState) {
                                            is UiState.Loading -> Text("ফলাফল সেভ হচ্ছে...", fontSize = 12.sp)
                                            is UiState.Success -> Text("✅ ফলাফল সফলভাবে সেভ হয়েছে", color = Color(0xFF2E7D32), fontSize = 12.sp)
                                            is UiState.Error -> Text("⚠️ সেভ করতে সমস্যা হয়েছে", color = MaterialTheme.colorScheme.error, fontSize = 12.sp)
                                            null -> {}
                                        }
                                    }
                                },
                                confirmButton = {
                                    Button(onClick = {
                                        showFinalResultsDialog = false
                                        onBack()
                                    }) {
                                        Text("ফিরে যান (Finish)")
                                    }
                                }
                            )
                        }
                    }
                }
            }
        }
    }
}
