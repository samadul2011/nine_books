package com.samadul.ninebooks.ui.theme

import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext

private val DarkColorScheme = darkColorScheme(
    primary = Color(0xFF2DD4BF),           // Luminous Teal
    onPrimary = Color(0xFF042F2E),
    primaryContainer = Color(0xFF115E59),
    onPrimaryContainer = Color(0xFFCCFBF1),
    secondary = Color(0xFF818CF8),         // Indigo 400
    onSecondary = Color(0xFF1E1B4B),
    secondaryContainer = Color(0xFF312E81),
    onSecondaryContainer = Color(0xFFE0E7FF),
    tertiary = Color(0xFF38BDF8),          // Sky Blue
    background = Color(0xFF0B1329),        // Deep Slate/Navy
    onBackground = Color(0xFFF1F5F9),
    surface = Color(0xFF131F37),           // Elegant dark card
    onSurface = Color(0xFFF1F5F9),
    surfaceVariant = Color(0xFF1E293B),
    onSurfaceVariant = Color(0xFF94A3B8),
    outline = Color(0xFF334155),
    outlineVariant = Color(0xFF1E293B)
)

private val LightColorScheme = lightColorScheme(
    primary = Color(0xFF0F766E),           // Deep Rich Teal (Teal 700)
    onPrimary = Color.White,
    primaryContainer = Color(0xFFE6FFFA),  // Very soft fresh mint
    onPrimaryContainer = Color(0xFF134E4A),
    secondary = Color(0xFF4F46E5),         // Vivid Indigo
    onSecondary = Color.White,
    secondaryContainer = Color(0xFFEEF2FF),
    onSecondaryContainer = Color(0xFF312E81),
    tertiary = Color(0xFF0284C7),          // Sky 600
    background = Color(0xFFF8FAFC),        // Modern crisp Slate 50
    onBackground = Color(0xFF0F172A),      // Slate 900
    surface = Color(0xFFFFFFFF),           // Pure White
    onSurface = Color(0xFF0F172A),
    surfaceVariant = Color(0xFFF1F5F9),    // Slate 100
    onSurfaceVariant = Color(0xFF475569),  // Slate 600
    outline = Color(0xFFCBD5E1),           // Slate 300
    outlineVariant = Color(0xFFE2E8F0)     // Slate 200
)

@Composable
fun NineBooksTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = false,         // Fixed to false so custom branded colors always show!
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }
        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
