package com.samadul.ninebooks.ui.components

import androidx.compose.animation.*
import androidx.compose.animation.core.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.samadul.ninebooks.audio.AudioNarratorManager
import com.samadul.ninebooks.audio.VoiceMode

@Composable
fun LessonAudioPlayer(
    narratorManager: AudioNarratorManager,
    textToRead: String,
    modifier: Modifier = Modifier
) {
    val state by narratorManager.state.collectAsState()

    // Pulse animation when audio is active
    val infiniteTransition = rememberInfiniteTransition(label = "pulse")
    val pulseAlpha by infiniteTransition.animateFloat(
        initialValue = 0.4f,
        targetValue = 1.0f,
        animationSpec = infiniteRepeatable(
            animation = tween(800, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulseAlpha"
    )

    Card(
        shape = RoundedCornerShape(20.dp),
        border = BorderStroke(1.dp, Color(0xFF0D9488).copy(alpha = 0.4f)),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFF064E3B).copy(alpha = 0.92f) // Deep emerald green
        ),
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            // Header Row: Title & Free Badge
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.weight(1f)
                ) {
                    Box(
                        modifier = Modifier
                            .size(36.dp)
                            .clip(CircleShape)
                            .background(
                                if (state.isPlaying && !state.isPaused)
                                    Color(0xFF10B981).copy(alpha = pulseAlpha * 0.3f)
                                else
                                    Color.White.copy(alpha = 0.1f)
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Default.VolumeUp,
                            contentDescription = null,
                            tint = if (state.isPlaying && !state.isPaused) Color(0xFF34D399) else Color.White.copy(alpha = 0.8f),
                            modifier = Modifier.size(20.dp)
                        )
                    }
                    Spacer(modifier = Modifier.width(10.dp))
                    Column {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(
                                text = "স্মার্ট পাঠ অডিও রিডার",
                                fontWeight = FontWeight.Bold,
                                fontSize = 15.sp,
                                color = Color.White
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Surface(
                                shape = RoundedCornerShape(50),
                                color = Color(0xFF10B981).copy(alpha = 0.25f),
                                border = BorderStroke(1.dp, Color(0xFF34D399).copy(alpha = 0.5f))
                            ) {
                                Text(
                                    text = "100% Free HD",
                                    fontSize = 10.sp,
                                    fontWeight = FontWeight.SemiBold,
                                    color = Color(0xFF6EE7B7),
                                    modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                )
                            }
                        }
                        Text(
                            text = if (state.mode == VoiceMode.STUDIO_NEURAL)
                                "🌟 আল্ট্রা-রিয়্যালিস্টিক নিউরাল এআই (স্টুডিও ভয়েস)"
                            else
                                "📱 ডিভাইস সিস্টেম ভয়েস (অফলাইন)",
                            fontSize = 12.sp,
                            color = Color(0xFFA7F3D0).copy(alpha = 0.85f)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(12.dp))

            // Dual Voice Toggle Pills
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(12.dp))
                    .background(Color.Black.copy(alpha = 0.35f))
                    .padding(4.dp),
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                // Studio Neural AI Button
                Box(
                    modifier = Modifier
                        .weight(1f)
                        .clip(RoundedCornerShape(9.dp))
                        .background(
                            if (state.mode == VoiceMode.STUDIO_NEURAL)
                                Color(0xFF059669)
                            else
                                Color.Transparent
                        )
                        .clickable { narratorManager.setMode(VoiceMode.STUDIO_NEURAL) }
                        .padding(vertical = 8.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = Icons.Default.AutoAwesome,
                            contentDescription = null,
                            tint = if (state.mode == VoiceMode.STUDIO_NEURAL) Color.White else Color.White.copy(alpha = 0.6f),
                            modifier = Modifier.size(14.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "স্টুডিও নিউরাল এআই",
                            fontSize = 12.sp,
                            fontWeight = if (state.mode == VoiceMode.STUDIO_NEURAL) FontWeight.Bold else FontWeight.Normal,
                            color = if (state.mode == VoiceMode.STUDIO_NEURAL) Color.White else Color.White.copy(alpha = 0.65f)
                        )
                    }
                }

                // Device Voice Button
                Box(
                    modifier = Modifier
                        .weight(1f)
                        .clip(RoundedCornerShape(9.dp))
                        .background(
                            if (state.mode == VoiceMode.DEVICE_VOICE)
                                Color(0xFF0D9488)
                            else
                                Color.Transparent
                        )
                        .clickable { narratorManager.setMode(VoiceMode.DEVICE_VOICE) }
                        .padding(vertical = 8.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(
                            imageVector = Icons.Default.PhoneAndroid,
                            contentDescription = null,
                            tint = if (state.mode == VoiceMode.DEVICE_VOICE) Color.White else Color.White.copy(alpha = 0.6f),
                            modifier = Modifier.size(14.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "ডিভাইস ভয়েস",
                            fontSize = 12.sp,
                            fontWeight = if (state.mode == VoiceMode.DEVICE_VOICE) FontWeight.Bold else FontWeight.Normal,
                            color = if (state.mode == VoiceMode.DEVICE_VOICE) Color.White else Color.White.copy(alpha = 0.65f)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            // Controls & Speed Row
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                // Play / Pause / Stop
                Row(verticalAlignment = Alignment.CenterVertically) {
                    IconButton(
                        onClick = {
                            if (!state.isPlaying) {
                                narratorManager.play(textToRead)
                            } else if (state.isPaused) {
                                narratorManager.resume()
                            } else {
                                narratorManager.pause()
                            }
                        },
                        modifier = Modifier
                            .size(44.dp)
                            .clip(CircleShape)
                            .background(
                                if (state.isPlaying && !state.isPaused)
                                    Color(0xFFF59E0B) // Amber pause
                                else
                                    Color(0xFF10B981) // Emerald play
                            )
                    ) {
                        if (state.isLoading) {
                            CircularProgressIndicator(
                                modifier = Modifier.size(20.dp),
                                color = Color.White,
                                strokeWidth = 2.dp
                            )
                        } else if (state.isPlaying && !state.isPaused) {
                            Icon(
                                imageVector = Icons.Default.Pause,
                                contentDescription = "পজ",
                                tint = Color.Black,
                                modifier = Modifier.size(22.dp)
                            )
                        } else {
                            Icon(
                                imageVector = Icons.Default.PlayArrow,
                                contentDescription = "শুনুন",
                                tint = Color.Black,
                                modifier = Modifier.size(26.dp)
                            )
                        }
                    }

                    if (state.isPlaying) {
                        Spacer(modifier = Modifier.width(8.dp))
                        IconButton(
                            onClick = { narratorManager.stop() },
                            modifier = Modifier
                                .size(36.dp)
                                .clip(CircleShape)
                                .background(Color.White.copy(alpha = 0.15f))
                        ) {
                            Icon(
                                imageVector = Icons.Default.Stop,
                                contentDescription = "বন্ধ করুন",
                                tint = Color.White,
                                modifier = Modifier.size(18.dp)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.width(10.dp))

                    // Status / Sentence counter
                    if (state.isPlaying) {
                        Text(
                            text = "পড়ছে: ${state.currentChunk} / ${state.totalChunks} বাক্য",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Medium,
                            color = Color(0xFFA7F3D0)
                        )
                    } else {
                        Text(
                            text = "শুনতে প্লে বাটনে চাপুন",
                            fontSize = 12.sp,
                            color = Color.White.copy(alpha = 0.7f)
                        )
                    }
                }

                // Speed buttons
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier
                        .clip(RoundedCornerShape(8.dp))
                        .background(Color.Black.copy(alpha = 0.25f))
                        .padding(horizontal = 4.dp, vertical = 2.dp)
                ) {
                    val speeds = listOf(0.75f, 1.0f, 1.25f, 1.5f)
                    speeds.forEach { s ->
                        Box(
                            modifier = Modifier
                                .clip(RoundedCornerShape(6.dp))
                                .background(if (state.speed == s) Color(0xFF10B981) else Color.Transparent)
                                .clickable { narratorManager.setSpeed(s) }
                                .padding(horizontal = 6.dp, vertical = 3.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = "${s}x",
                                fontSize = 11.sp,
                                fontWeight = if (state.speed == s) FontWeight.Bold else FontWeight.Normal,
                                color = if (state.speed == s) Color.Black else Color.White.copy(alpha = 0.7f)
                            )
                        }
                    }
                }
            }

            // Error message if any
            state.errorMessage?.let { err ->
                Spacer(modifier = Modifier.height(8.dp))
                Surface(
                    shape = RoundedCornerShape(8.dp),
                    color = Color(0xFF991B1B).copy(alpha = 0.4f),
                    border = BorderStroke(1.dp, Color(0xFFEF4444).copy(alpha = 0.5f)),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(
                        text = err,
                        fontSize = 11.sp,
                        color = Color(0xFFFCA5A5),
                        modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp)
                    )
                }
            }
        }
    }
}
