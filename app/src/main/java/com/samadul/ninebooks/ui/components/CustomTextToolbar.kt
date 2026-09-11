package com.samadul.ninebooks.ui.components

import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.VolumeUp
import androidx.compose.material.icons.filled.Bookmark
import androidx.compose.material.icons.filled.BorderColor
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.Translate
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.TextToolbar
import androidx.compose.ui.platform.TextToolbarStatus
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Popup
import androidx.compose.ui.window.PopupProperties
import kotlin.math.roundToInt

enum class SelectionAction {
    TRANSLATE,
    SPEAK,
    HIGHLIGHT,
    SAVE_WORD,
    COPY
}

class CustomTextToolbar(
    val onActionTriggered: (action: SelectionAction, onCopy: (() -> Unit)?) -> Unit
) : TextToolbar {

    override var status: TextToolbarStatus = TextToolbarStatus.Hidden
        private set

    var menuData by mutableStateOf<MenuData?>(null)
        private set

    var currentSelectedText by mutableStateOf("")

    data class MenuData(
        val rect: Rect,
        val onCopyRequested: (() -> Unit)?
    )

    override fun hide() {
        status = TextToolbarStatus.Hidden
        menuData = null
        currentSelectedText = ""
    }

    fun clearSelectedText() {
        currentSelectedText = ""
    }

    override fun showMenu(
        rect: Rect,
        onCopyRequested: (() -> Unit)?,
        onPasteRequested: (() -> Unit)?,
        onCutRequested: (() -> Unit)?,
        onSelectAllRequested: (() -> Unit)?
    ) {
        status = TextToolbarStatus.Shown
        menuData = MenuData(rect, onCopyRequested)
    }
}

/**
 * Floating action bar that renders directly at the selected text position.
 * Clamped to screen bounds so it is always 100% visible and interactive.
 */
@Composable
fun CustomSelectionPopup(toolbar: CustomTextToolbar) {
    val data = toolbar.menuData ?: return
    val density = androidx.compose.ui.platform.LocalDensity.current
    val configuration = androidx.compose.ui.platform.LocalConfiguration.current

    val screenWidthPx = with(density) { configuration.screenWidthDp.dp.toPx() }
    val screenHeightPx = with(density) { configuration.screenHeightDp.dp.toPx() }
    val popupEstimatedWidthPx = with(density) { 260.dp.toPx() }
    val popupEstimatedHeightPx = with(density) { 44.dp.toPx() }

    val centerX = data.rect.left + (data.rect.width / 2)
    val xOffset = (centerX - (popupEstimatedWidthPx / 2))
        .coerceIn(
            with(density) { 12.dp.toPx() },
            (screenWidthPx - popupEstimatedWidthPx - with(density) { 12.dp.toPx() }).coerceAtLeast(0f)
        )
        .roundToInt()

    // If selection is near top of screen (under top bar, < 110dp), place below selection; otherwise above
    val rawY = if (data.rect.top < with(density) { 110.dp.toPx() }) {
        (data.rect.bottom + with(density) { 8.dp.toPx() }).roundToInt()
    } else {
        (data.rect.top - popupEstimatedHeightPx - with(density) { 10.dp.toPx() }).roundToInt()
    }

    val yOffset = rawY.coerceIn(
        with(density) { 56.dp.toPx() }.roundToInt(),
        (screenHeightPx - popupEstimatedHeightPx - with(density) { 70.dp.toPx() }).coerceAtLeast(0f).roundToInt()
    )

    Popup(
        offset = IntOffset(xOffset, yOffset),
        onDismissRequest = { toolbar.hide() },
        properties = PopupProperties(focusable = false, clippingEnabled = false)
    ) {
        Surface(
            shape = RoundedCornerShape(20.dp),
            color = Color(0xFF0F172A), // Dark slate
            border = BorderStroke(1.dp, Color(0xFF334155)),
            tonalElevation = 8.dp,
            shadowElevation = 14.dp
        ) {
            Row(
                modifier = Modifier.padding(horizontal = 6.dp, vertical = 3.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(2.dp)
            ) {
                // 1. Primary Translate Button
                Button(
                    onClick = {
                        toolbar.onActionTriggered(SelectionAction.TRANSLATE, data.onCopyRequested)
                        toolbar.hide()
                    },
                    contentPadding = PaddingValues(horizontal = 10.dp, vertical = 4.dp),
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
                        modifier = Modifier.size(15.dp)
                    )
                    Spacer(modifier = Modifier.width(5.dp))
                    Text("অনুবাদ", fontSize = 12.sp, fontWeight = FontWeight.Bold)
                }

                // 2. Pronounce Button
                IconButton(
                    onClick = {
                        toolbar.onActionTriggered(SelectionAction.SPEAK, data.onCopyRequested)
                        toolbar.hide()
                    },
                    modifier = Modifier.size(34.dp)
                ) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.VolumeUp,
                        contentDescription = "Speak",
                        tint = Color(0xFFE2E8F0),
                        modifier = Modifier.size(17.dp)
                    )
                }

                // 3. Highlight Button
                IconButton(
                    onClick = {
                        toolbar.onActionTriggered(SelectionAction.HIGHLIGHT, data.onCopyRequested)
                        toolbar.hide()
                    },
                    modifier = Modifier.size(34.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.BorderColor,
                        contentDescription = "Highlight",
                        tint = Color(0xFFFDE047), // Yellow
                        modifier = Modifier.size(16.dp)
                    )
                }

                // 4. Save Word Button
                IconButton(
                    onClick = {
                        toolbar.onActionTriggered(SelectionAction.SAVE_WORD, data.onCopyRequested)
                        toolbar.hide()
                    },
                    modifier = Modifier.size(34.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Bookmark,
                        contentDescription = "Save Word",
                        tint = Color(0xFFF59E0B), // Amber
                        modifier = Modifier.size(17.dp)
                    )
                }

                // 5. Copy Button
                IconButton(
                    onClick = {
                        toolbar.onActionTriggered(SelectionAction.COPY, data.onCopyRequested)
                        toolbar.hide()
                    },
                    modifier = Modifier.size(34.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.ContentCopy,
                        contentDescription = "Copy",
                        tint = Color(0xFF94A3B8),
                        modifier = Modifier.size(16.dp)
                    )
                }
            }
        }
    }
}
