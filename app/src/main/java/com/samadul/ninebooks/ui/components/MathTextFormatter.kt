package com.samadul.ninebooks.ui.components

import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * Utility to convert raw LaTeX math strings into authentic textbook-quality Unicode representations.
 */
object MathTextFormatter {

    private val SUPERSCRIPT_MAP = mapOf(
        '0' to '⁰', '1' to '¹', '2' to '²', '3' to '³', '4' to '⁴',
        '5' to '⁵', '6' to '⁶', '7' to '⁷', '8' to '⁸', '9' to '⁹',
        '+' to '⁺', '-' to '⁻', '=' to '⁼', '(' to '⁽', ')' to '⁾',
        'a' to 'ᵃ', 'b' to 'ᵇ', 'c' to 'ᶜ', 'd' to 'ᵈ', 'e' to 'ᵉ',
        'f' to 'ᶠ', 'g' to 'ᵍ', 'h' to 'ʰ', 'i' to 'ⁱ', 'j' to 'ʲ',
        'k' to 'ᵏ', 'l' to 'ˡ', 'm' to 'ᵐ', 'n' to 'ⁿ', 'o' to 'ᵒ',
        'p' to 'ᵖ', 'q' to 'ᵠ', 'r' to 'ʳ', 's' to 'ˢ', 't' to 'ᵗ',
        'u' to 'ᵘ', 'v' to 'ᵛ', 'w' to 'ʷ', 'x' to 'ˣ', 'y' to 'ʸ', 'z' to 'ᶻ',
        'A' to 'ᴬ', 'B' to 'ᴮ', 'D' to 'ᴰ', 'E' to 'ᴱ', 'G' to 'ᴳ',
        'H' to 'ᴴ', 'I' to 'ᴵ', 'J' to 'ᴶ', 'K' to 'ᴷ', 'L' to 'ᴸ',
        'M' to 'ᴹ', 'N' to 'ᴺ', 'O' to 'ᴼ', 'P' to 'ᴾ', 'R' to 'ᴿ',
        'T' to 'ᵀ', 'U' to 'ᵁ', 'V' to 'ⱽ', 'W' to 'ᵂ'
    )

    private val SUBSCRIPT_MAP = mapOf(
        '0' to '₀', '1' to '₁', '2' to '₂', '3' to '₃', '4' to '₄',
        '5' to '₅', '6' to '₆', '7' to '₇', '8' to '₈', '9' to '₉',
        '+' to '₊', '-' to '₋', '(' to '₍', ')' to '₎',
        'a' to 'ₐ', 'e' to 'ₑ', 'h' to 'ₕ', 'i' to 'ᵢ', 'j' to 'ⱼ',
        'k' to 'ₖ', 'l' to 'ₗ', 'm' to 'ₘ', 'n' to 'ₙ', 'o' to 'ₒ',
        'p' to 'ₚ', 'r' to 'ᵣ', 's' to 'ₛ', 't' to 'ₜ', 'u' to 'ᵤ',
        'v' to 'ᵥ', 'x' to 'ₓ'
    )

    fun toSuperscript(input: String): String {
        return buildString {
            for (ch in input) {
                append(SUPERSCRIPT_MAP[ch] ?: ch)
            }
        }
    }

    fun toSubscript(input: String): String {
        return buildString {
            for (ch in input) {
                append(SUBSCRIPT_MAP[ch] ?: ch)
            }
        }
    }

    /**
     * Formats inline math and equations into clean, readable textbook expressions.
     */
    fun formatMath(text: String): String {
        if (text.isBlank()) return text

        var s = text

        // 1. Clean JS escape corruption (\f, \t)
        s = s.replace("\u000crac", "\\frac")
            .replace("\u000c", "")
            .replace("\t(?=imes)".toRegex(), "\\times")

        // 2. Remove surrounding markdown bold markers if wrapping math
        s = s.replace("\\{", "{").replace("\\}", "}")
            .replace("\\left(", "(").replace("\\right)", ")")
            .replace("\\left[", "[").replace("\\right]", "]")
            .replace("\\left\\{", "{").replace("\\right\\}", "}")

        // 3. LaTeX symbols replacement
        s = s.replace("\\times", "×")
            .replace("\\cdot", "·")
            .replace("\\div", "÷")
            .replace("\\pm", "±")
            .replace("\\mp", "∓")
            .replace("\\ne", "≠")
            .replace("\\neq", "≠")
            .replace("\\le", "≤")
            .replace("\\leq", "≤")
            .replace("\\ge", "≥")
            .replace("\\geq", "≥")
            .replace("\\approx", "≈")
            .replace("\\equiv", "≡")
            .replace("\\infty", "∞")
            .replace("\\alpha", "α")
            .replace("\\beta", "β")
            .replace("\\theta", "θ")
            .replace("\\pi", "π")
            .replace("\\Delta", "Δ")
            .replace("\\Rightarrow", "⇒")
            .replace("\\to", "→")

        // 4. Roots
        // \sqrt[3]{...}
        s = Regex("""\\sqrt\[3\]\{([^\}]+)\}""").replace(s) { "∛(${formatMath(it.groupValues[1])})" }
        // \sqrt[4]{...}
        s = Regex("""\\sqrt\[4\]\{([^\}]+)\}""").replace(s) { "∜(${formatMath(it.groupValues[1])})" }
        // \sqrt[n]{...}
        s = Regex("""\\sqrt\[([0-9a-zA-Z]+)\]\{([^\}]+)\}""").replace(s) {
            val root = toSuperscript(it.groupValues[1])
            "${root}√(${formatMath(it.groupValues[2])})"
        }
        // \sqrt{...}
        s = Regex("""\\sqrt\{([^\}]+)\}""").replace(s) { "√(${formatMath(it.groupValues[1])})" }
        s = Regex("""\\sqrt([0-9a-zA-Z]+)""").replace(s) { "√${it.groupValues[1]}" }

        // 5. Overline \bar{x}
        s = Regex("""\\bar\{([^\}]+)\}""").replace(s) {
            it.groupValues[1] + "̄"
        }

        // 6. Subscripts with log bases: \log_3 81 -> log₃ 81, \log_{10} -> log₁₀
        s = Regex("""\\log_\{([^\}]+)\}""").replace(s) { "log" + toSubscript(it.groupValues[1]) }
        s = Regex("""\\log_([0-9a-zA-Z]+)""").replace(s) { "log" + toSubscript(it.groupValues[1]) }
        s = s.replace("\\log", "log")
        s = s.replace("\\ln", "ln")

        // Other subscripts: _{...} or _a
        s = Regex("""_\{([^\}]+)\}""").replace(s) { toSubscript(it.groupValues[1]) }
        s = Regex("""_([0-9a-zA-Z+-]+)""").replace(s) { toSubscript(it.groupValues[1]) }

        // 7. Superscripts: ^{...} or ^2
        s = Regex("""\^\{([^\}]+)\}""").replace(s) { toSuperscript(it.groupValues[1]) }
        s = Regex("""\^([0-9a-zA-Z+-]+)""").replace(s) { toSuperscript(it.groupValues[1]) }

        // 8. Fractions: \frac{A}{B}
        // Common standalone fractions
        s = s.replace("\\frac{1}{2}", "½")
            .replace("\\frac{1}{3}", "⅓")
            .replace("\\frac{2}{3}", "⅔")
            .replace("\\frac{1}{4}", "¼")
            .replace("\\frac{3}{4}", "¾")

        // General fraction handling
        s = Regex("""\\frac\{([^\}]+)\}\{([^\}]+)\}""").replace(s) {
            val num = formatMath(it.groupValues[1].trim())
            val den = formatMath(it.groupValues[2].trim())
            "($num / $den)"
        }

        // 9. Remove lingering $ math delimiters
        s = s.replace("$", "")

        return s
    }

    /**
     * Checks if a line is a mathematical fraction that could benefit from vertical rendering.
     */
    fun extractVerticalFraction(line: String): Triple<String, String, String>? {
        val fracRegex = Regex("""^(.*?)\\frac\{([^\}]+)\}\{([^\}]+)\}(.*?)$""")
        val match = fracRegex.find(line) ?: return null
        val prefix = formatMath(match.groupValues[1].trim())
        val num = formatMath(match.groupValues[2].trim())
        val den = formatMath(match.groupValues[3].trim())
        val suffix = formatMath(match.groupValues[4].trim())
        return Triple(if (suffix.isNotEmpty()) "$prefix ... $suffix" else prefix, num, den)
    }
}

/**
 * Renders an authentic two-level Vertical Fraction with a real horizontal division bar.
 */
@Composable
fun VerticalFractionView(
    prefix: String = "",
    numerator: String,
    denominator: String,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier.padding(vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (prefix.isNotBlank()) {
            Text(
                text = prefix,
                fontSize = 16.sp,
                fontWeight = FontWeight.SemiBold,
                color = Color(0xFF38BDF8)
            )
            Spacer(modifier = Modifier.width(6.dp))
        }
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(horizontal = 4.dp)
        ) {
            Text(
                text = numerator,
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF7DD3FC)
            )
            HorizontalDivider(
                thickness = 1.5.dp,
                color = Color(0xFF38BDF8),
                modifier = Modifier
                    .widthIn(min = 36.dp)
                    .padding(vertical = 2.dp)
            )
            Text(
                text = denominator,
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF7DD3FC)
            )
        }
    }
}

/**
 * Math Problem Card:
 * Renders each math problem as an interactive textbook card with
 * problem statement, expandable solution button, and structured steps.
 */
@Composable
fun MathProblemCard(
    problemPrompt: String,
    solutionLines: List<String>,
    modifier: Modifier = Modifier
) {
    var isExpanded by remember { mutableStateOf(false) }
    val formattedPrompt = remember(problemPrompt) {
        MathTextFormatter.formatMath(problemPrompt)
    }

    Card(
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFF0F172A).copy(alpha = 0.95f)
        ),
        border = BorderStroke(
            1.dp,
            if (isExpanded) Color(0xFF0D9488).copy(alpha = 0.7f) else Color(0xFF0284C7).copy(alpha = 0.4f)
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 3.dp),
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            // Header Badge: গাণিতিক সমস্যা ও অনুশীলন
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    shape = RoundedCornerShape(8.dp),
                    color = Color(0xFF0284C7).copy(alpha = 0.18f),
                    border = BorderStroke(1.dp, Color(0xFF0284C7).copy(alpha = 0.4f))
                ) {
                    Row(
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(text = "🔢", fontSize = 12.sp)
                        Spacer(modifier = Modifier.width(5.dp))
                        Text(
                            text = "গাণিতিক সমস্যা ও অনুশীলন",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color(0xFF38BDF8)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Problem Prompt
            Text(
                text = formattedPrompt,
                fontWeight = FontWeight.Bold,
                fontSize = 16.sp,
                lineHeight = 24.sp,
                color = Color.White
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Show / Hide Solution Toggle Button
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
                        containerColor = if (isExpanded) Color(0xFF10B981).copy(alpha = 0.12f) else Color(0xFF0284C7).copy(alpha = 0.10f),
                        contentColor = if (isExpanded) Color(0xFF34D399) else Color(0xFF38BDF8)
                    ),
                    contentPadding = PaddingValues(horizontal = 14.dp, vertical = 6.dp),
                    modifier = Modifier.height(36.dp)
                ) {
                    Icon(
                        imageVector = if (isExpanded) Icons.Default.VisibilityOff else Icons.Default.Lightbulb,
                        contentDescription = null,
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = if (isExpanded) "🙈 সমাধান লুকান (Hide Solution)" else "💡 সমাধান দেখুন (Show Solution)",
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold
                    )
                }
            }

            // Expandable Step-by-Step Solution Container
            AnimatedVisibility(
                visible = isExpanded,
                enter = expandVertically() + fadeIn(),
                exit = shrinkVertically() + fadeOut()
            ) {
                Column(
                    modifier = Modifier
                        .padding(top = 12.dp)
                        .fillMaxWidth()
                ) {
                    HorizontalDivider(
                        color = Color(0xFF334155),
                        thickness = 1.dp
                    )
                    Spacer(modifier = Modifier.height(12.dp))

                    Surface(
                        shape = RoundedCornerShape(14.dp),
                        color = Color(0xFF064E3B).copy(alpha = 0.15f),
                        border = BorderStroke(1.dp, Color(0xFF059669).copy(alpha = 0.35f)),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(14.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            // Solution Title
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Box(
                                    modifier = Modifier
                                        .size(8.dp)
                                        .clip(CircleShape)
                                        .background(Color(0xFF34D399))
                                )
                                Spacer(modifier = Modifier.width(8.dp))
                                Text(
                                    text = "ধাপভিত্তিক বিস্তারিত সমাধান (STEP-BY-STEP SOLUTION)",
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color(0xFF34D399)
                                )
                            }

                            Spacer(modifier = Modifier.height(4.dp))

                            // Render each step line
                            solutionLines.forEach { rawLine ->
                                val clean = rawLine.trim().removePrefix(">").trim()
                                if (clean.isBlank()) return@forEach

                                when {
                                    // Step Header (e.g. ধাপ ১ (সূচকের গুণের সূত্র প্রয়োগ):)
                                    clean.startsWith("ধাপ") || clean.startsWith("**ধাপ") -> {
                                        Surface(
                                            shape = RoundedCornerShape(8.dp),
                                            color = Color(0xFF0284C7).copy(alpha = 0.15f),
                                            modifier = Modifier.padding(top = 6.dp)
                                        ) {
                                            Text(
                                                text = MathTextFormatter.formatMath(clean.replace("**", "")),
                                                fontWeight = FontWeight.Bold,
                                                fontSize = 14.sp,
                                                color = Color(0xFF38BDF8),
                                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                            )
                                        }
                                    }

                                    // Given Expression (প্রদত্ত রাশি:)
                                    clean.startsWith("প্রদত্ত রাশি") || clean.startsWith("**প্রদত্ত রাশি") -> {
                                        Text(
                                            text = MathTextFormatter.formatMath(clean.replace("**", "")),
                                            fontWeight = FontWeight.Bold,
                                            fontSize = 15.sp,
                                            color = Color(0xFF6EE7B7)
                                        )
                                    }

                                    // Formula Knowledge (আমরা জানি, ...)
                                    clean.startsWith("আমরা জানি") || clean.startsWith("**আমরা জানি") -> {
                                        Surface(
                                            shape = RoundedCornerShape(8.dp),
                                            color = Color(0xFF1E293B),
                                            border = BorderStroke(1.dp, Color(0xFF38BDF8).copy(alpha = 0.25f))
                                        ) {
                                            Text(
                                                text = MathTextFormatter.formatMath(clean.replace("**", "")),
                                                fontSize = 13.sp,
                                                fontWeight = FontWeight.Medium,
                                                color = Color(0xFFE2E8F0),
                                                modifier = Modifier.padding(horizontal = 10.dp, vertical = 5.dp)
                                            )
                                        }
                                    }

                                    // Final Answer (🎯 উত্তর:)
                                    clean.startsWith("🎯") || clean.startsWith("উত্তর:") || clean.startsWith("**উত্তর") -> {
                                        Surface(
                                            shape = RoundedCornerShape(10.dp),
                                            color = Color(0xFF065F46).copy(alpha = 0.35f),
                                            border = BorderStroke(1.dp, Color(0xFF10B981).copy(alpha = 0.5f)),
                                            modifier = Modifier
                                                .fillMaxWidth()
                                                .padding(top = 6.dp)
                                        ) {
                                            Text(
                                                text = MathTextFormatter.formatMath(clean.replace("**", "")),
                                                fontWeight = FontWeight.Bold,
                                                fontSize = 15.sp,
                                                color = Color(0xFF34D399),
                                                modifier = Modifier.padding(10.dp)
                                            )
                                        }
                                    }

                                    // Equation / Calculation line starting with = or $=
                                    clean.startsWith("=") || clean.startsWith("$=") || clean.startsWith("হর =") || clean.startsWith("লব =") -> {
                                        Surface(
                                            shape = RoundedCornerShape(8.dp),
                                            color = Color(0xFF0F172A),
                                            border = BorderStroke(1.dp, Color(0xFF1E293B)),
                                            modifier = Modifier.fillMaxWidth()
                                        ) {
                                            Box(
                                                modifier = Modifier
                                                    .horizontalScroll(rememberScrollState())
                                                    .padding(horizontal = 10.dp, vertical = 6.dp)
                                            ) {
                                                Text(
                                                    text = MathTextFormatter.formatMath(clean.replace("**", "")),
                                                    fontSize = 14.sp,
                                                    fontWeight = FontWeight.SemiBold,
                                                    fontFamily = FontFamily.Monospace,
                                                    color = Color(0xFF7DD3FC)
                                                )
                                            }
                                        }
                                    }

                                    // Standard calculation / explanation line
                                    else -> {
                                        Text(
                                            text = MathTextFormatter.formatMath(clean.replace("**", "")),
                                            fontSize = 14.sp,
                                            lineHeight = 22.sp,
                                            color = Color(0xFFE2E8F0),
                                            modifier = Modifier.padding(vertical = 1.dp)
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
