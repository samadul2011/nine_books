package com.samadul.ninebooks.audio

import android.content.Context
import android.media.AudioAttributes
import android.media.MediaPlayer
import android.media.PlaybackParams
import android.os.Build
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.util.Log
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import java.net.URLEncoder
import java.util.*

enum class VoiceMode {
    STUDIO_NEURAL, // Ultra-Realistic AI Voice (Free HD Natural Studio Voice)
    DEVICE_VOICE   // Offline Device Voice (Android Native TTS)
}

data class AudioNarratorState(
    val isPlaying: Boolean = false,
    val isPaused: Boolean = false,
    val isLoading: Boolean = false,
    val mode: VoiceMode = VoiceMode.STUDIO_NEURAL,
    val speed: Float = 1.0f,
    val currentChunk: Int = 0,
    val totalChunks: Int = 0,
    val currentChunkText: String = "",
    val errorMessage: String? = null
)

class AudioNarratorManager(private val context: Context) : TextToSpeech.OnInitListener {

    private val tag = "AudioNarratorManager"
    private val scope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    private val _state = MutableStateFlow(AudioNarratorState())
    val state: StateFlow<AudioNarratorState> = _state.asStateFlow()

    private var mediaPlayer: MediaPlayer? = null
    private var textToSpeech: TextToSpeech? = null
    private var isTtsReady = false

    private var chunks: List<String> = emptyList()
    private var currentChunkIndex = 0

    init {
        // Initialize offline Device TTS
        try {
            textToSpeech = TextToSpeech(context.applicationContext, this)
        } catch (e: Exception) {
            Log.e(tag, "Failed to instantiate TextToSpeech", e)
        }
    }

    private fun isBengali(text: String): Boolean {
        val bengaliCount = text.count { it in '\u0980'..'\u09FF' }
        return bengaliCount > (text.length * 0.2)
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            val result = textToSpeech?.setLanguage(Locale("bn", "BD"))
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                textToSpeech?.setLanguage(Locale("bn"))
            }
            textToSpeech?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                override fun onStart(utteranceId: String?) {
                    _state.value = _state.value.copy(isPlaying = true, isPaused = false, isLoading = false)
                }

                override fun onDone(utteranceId: String?) {
                    scope.launch {
                        if (_state.value.isPlaying && !_state.value.isPaused) {
                            playNextChunk()
                        }
                    }
                }

                @Deprecated("Deprecated in Java")
                override fun onError(utteranceId: String?) {
                    scope.launch {
                        if (_state.value.isPlaying) {
                            playNextChunk()
                        }
                    }
                }
            })
            isTtsReady = true
        } else {
            Log.w(tag, "Device TextToSpeech init failed with status: $status")
        }
    }

    fun setMode(mode: VoiceMode) {
        if (_state.value.mode != mode) {
            stop()
            _state.value = _state.value.copy(mode = mode, errorMessage = null)
        }
    }

    fun setSpeed(speed: Float) {
        _state.value = _state.value.copy(speed = speed)
        if (_state.value.mode == VoiceMode.STUDIO_NEURAL && mediaPlayer != null) {
            applyMediaPlayerSpeed(speed)
        } else if (_state.value.mode == VoiceMode.DEVICE_VOICE && isTtsReady) {
            textToSpeech?.setSpeechRate(speed)
        }
    }

    fun play(rawText: String) {
        stop()
        val cleanedText = cleanTextForSpeech(rawText)
        if (cleanedText.isBlank()) {
            _state.value = _state.value.copy(errorMessage = "পড়ার মতো কোনো লেখা পাওয়া যায়নি।")
            return
        }

        chunks = splitIntoChunks(cleanedText)
        if (chunks.isEmpty()) return

        currentChunkIndex = 0
        _state.value = _state.value.copy(
            isPlaying = true,
            isPaused = false,
            isLoading = true,
            currentChunk = 1,
            totalChunks = chunks.size,
            currentChunkText = chunks[0],
            errorMessage = null
        )

        playChunk(0)
    }

    private fun playChunk(index: Int) {
        if (!_state.value.isPlaying || index >= chunks.size) {
            stop()
            return
        }

        currentChunkIndex = index
        val chunk = chunks[index]
        _state.value = _state.value.copy(
            currentChunk = index + 1,
            currentChunkText = chunk,
            isLoading = true
        )

        if (_state.value.mode == VoiceMode.STUDIO_NEURAL) {
            playNeuralChunk(chunk, index)
        } else {
            playDeviceChunk(chunk, index)
        }
    }

    private fun playNextChunk() {
        if (currentChunkIndex + 1 < chunks.size) {
            playChunk(currentChunkIndex + 1)
        } else {
            stop()
        }
    }

    private fun playNeuralChunk(text: String, index: Int) {
        scope.launch(Dispatchers.IO) {
            try {
                val lang = if (isBengali(text)) "bn" else "en"
                val encodedText = URLEncoder.encode(text, "UTF-8")
                val streamUrl = "https://translate.google.com/translate_tts?ie=UTF-8&tl=$lang&client=tw-ob&q=$encodedText"

                withContext(Dispatchers.Main) {
                    try {
                        mediaPlayer?.release()
                        mediaPlayer = MediaPlayer().apply {
                            setAudioAttributes(
                                AudioAttributes.Builder()
                                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                                    .setUsage(AudioAttributes.USAGE_MEDIA)
                                    .build()
                            )
                            setDataSource(streamUrl)
                            setOnPreparedListener { mp ->
                                if (_state.value.isPlaying && !_state.value.isPaused) {
                                    applyMediaPlayerSpeed(_state.value.speed)
                                    mp.start()
                                    _state.value = _state.value.copy(isLoading = false, isPaused = false)
                                }
                            }
                            setOnCompletionListener {
                                if (_state.value.isPlaying && !_state.value.isPaused) {
                                    playNextChunk()
                                }
                            }
                            setOnErrorListener { _, what, extra ->
                                Log.w(tag, "MediaPlayer error ($what, $extra), falling back to device TTS")
                                playDeviceChunk(text, index)
                                true
                            }
                            prepareAsync()
                        }
                    } catch (e: Exception) {
                        Log.w(tag, "MediaPlayer setup failed, falling back to device TTS", e)
                        playDeviceChunk(text, index)
                    }
                }
            } catch (e: Exception) {
                withContext(Dispatchers.Main) {
                    playDeviceChunk(text, index)
                }
            }
        }
    }

    private fun playDeviceChunk(text: String, index: Int) {
        if (!isTtsReady || textToSpeech == null) {
            _state.value = _state.value.copy(
                errorMessage = "ডিভাইসের স্পিচ ইঞ্জিন প্রস্তুত নয়।",
                isLoading = false
            )
            return
        }

        try {
            val isBn = isBengali(text)
            val targetLocale = if (isBn) Locale("bn", "BD") else Locale.US
            textToSpeech?.language = targetLocale
            textToSpeech?.setSpeechRate(_state.value.speed)
            textToSpeech?.setPitch(if (isBn) 1.05f else 1.08f)

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                try {
                    val voices = textToSpeech?.voices
                    if (!voices.isNullOrEmpty()) {
                        val langCode = if (isBn) "bn" else "en"
                        val femaleVoice = voices.firstOrNull { v ->
                            val n = v.name.lowercase(Locale.ROOT)
                            v.locale.language == langCode &&
                                    (n.contains("female") || n.contains("woman") || n.contains("en-us-x-sfg") || n.contains("en-us-x-tpd") || n.contains("network")) &&
                                    !n.contains("male")
                        } ?: voices.firstOrNull { v ->
                            v.locale.language == langCode && !v.name.lowercase(Locale.ROOT).contains("male")
                        }
                        if (femaleVoice != null) {
                            textToSpeech?.voice = femaleVoice
                        }
                    }
                } catch (e: Exception) {
                    Log.w(tag, "Failed to apply female voice: ${e.message}")
                }
            }

            val params = android.os.Bundle()
            textToSpeech?.speak(text, TextToSpeech.QUEUE_FLUSH, params, "chunk_$index")
            _state.value = _state.value.copy(isLoading = false, isPaused = false)
        } catch (e: Exception) {
            Log.e(tag, "Device TTS speak failed", e)
            playNextChunk()
        }
    }

    /**
     * Pronounces a single word or short phrase immediately with AI female voice.
     */
    fun speakSingleText(text: String) {
        if (text.isBlank()) return
        val isBn = isBengali(text)
        val lang = if (isBn) "bn" else "en"
        if (_state.value.mode == VoiceMode.STUDIO_NEURAL) {
            scope.launch(Dispatchers.IO) {
                try {
                    val encoded = URLEncoder.encode(text.trim(), "UTF-8")
                    val streamUrl = "https://translate.google.com/translate_tts?ie=UTF-8&tl=$lang&client=tw-ob&q=$encoded"
                    withContext(Dispatchers.Main) {
                        mediaPlayer?.release()
                        mediaPlayer = MediaPlayer().apply {
                            setAudioAttributes(
                                AudioAttributes.Builder()
                                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                                    .setUsage(AudioAttributes.USAGE_MEDIA)
                                    .build()
                            )
                            setDataSource(streamUrl)
                            setOnPreparedListener { mp -> mp.start() }
                            prepareAsync()
                        }
                    }
                } catch (e: Exception) {
                    withContext(Dispatchers.Main) {
                        applyDeviceVoice(text, isBn)
                    }
                }
            }
        } else {
            applyDeviceVoice(text, isBn)
        }
    }

    private fun applyDeviceVoice(text: String, isBn: Boolean) {
        textToSpeech?.language = if (isBn) Locale("bn", "BD") else Locale.US
        textToSpeech?.setSpeechRate(_state.value.speed)
        textToSpeech?.setPitch(if (isBn) 1.05f else 1.08f)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            try {
                val voices = textToSpeech?.voices
                if (!voices.isNullOrEmpty()) {
                    val langCode = if (isBn) "bn" else "en"
                    val femaleVoice = voices.firstOrNull { v ->
                        val n = v.name.lowercase(Locale.ROOT)
                        v.locale.language == langCode &&
                                (n.contains("female") || n.contains("woman") || n.contains("en-us-x-sfg") || n.contains("en-us-x-tpd")) &&
                                !n.contains("male")
                    } ?: voices.firstOrNull { v ->
                        v.locale.language == langCode && !v.name.lowercase(Locale.ROOT).contains("male")
                    }
                    if (femaleVoice != null) textToSpeech?.voice = femaleVoice
                }
            } catch (ignored: Exception) {}
        }
        textToSpeech?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "single_word")
    }

    private fun applyMediaPlayerSpeed(speed: Float) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && mediaPlayer != null) {
            try {
                val params = PlaybackParams().apply {
                    this.speed = speed
                    pitch = 1.0f
                }
                mediaPlayer?.playbackParams = params
            } catch (e: Exception) {
                Log.w(tag, "Could not set playback speed on MediaPlayer", e)
            }
        }
    }

    fun pause() {
        if (!_state.value.isPlaying || _state.value.isPaused) return

        _state.value = _state.value.copy(isPaused = true)
        if (_state.value.mode == VoiceMode.STUDIO_NEURAL) {
            mediaPlayer?.pause()
        } else {
            textToSpeech?.stop()
        }
    }

    fun resume() {
        if (!_state.value.isPlaying || !_state.value.isPaused) return

        _state.value = _state.value.copy(isPaused = false)
        if (_state.value.mode == VoiceMode.STUDIO_NEURAL) {
            mediaPlayer?.start()
        } else {
            playChunk(currentChunkIndex)
        }
    }

    fun stop() {
        _state.value = _state.value.copy(
            isPlaying = false,
            isPaused = false,
            isLoading = false,
            currentChunk = 0,
            currentChunkText = ""
        )

        try {
            mediaPlayer?.stop()
            mediaPlayer?.release()
            mediaPlayer = null
        } catch (e: Exception) {
            // ignore
        }

        try {
            textToSpeech?.stop()
        } catch (e: Exception) {
            // ignore
        }
    }

    fun release() {
        stop()
        try {
            textToSpeech?.shutdown()
            textToSpeech = null
        } catch (e: Exception) {
            // ignore
        }
    }

    /**
     * Converts markdown, tables, bullets, and accounting entries into fluent spoken narration.
     */
    private fun cleanTextForSpeech(raw: String): String {
        var text = raw
            .replace("&nbsp;", " ")
            .replace("&amp;", "&")
            .replace("&lt;", "<")
            .replace("&gt;", ">")
            .replace(Regex("<br\\s*/?>", RegexOption.IGNORE_CASE), " ")
            .replace(Regex("```[\\s\\S]*?```"), " ")
            .replace(Regex("^\\|?[\\s\\-:]+(\\|[\\s\\-:]+)+\\|?$", RegexOption.MULTILINE), "")

        // Convert table rows to spoken sentences: | বিবরণ | টাকা | -> "বিবরণ, টাকা।"
        val lines = text.lines().map { line ->
            val trimmed = line.trim()
            if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
                val cells = trimmed
                    .removeSurrounding("|")
                    .split("|")
                    .map { it.trim() }
                    .filter { it.isNotBlank() }
                cells.joinToString(", ") + "।"
            } else {
                trimmed
            }
        }

        text = lines.joinToString(" ")
            .replace(Regex("^[#■•\\-\\*]+\\s*", RegexOption.MULTILINE), "")
            .replace(Regex("\\*\\*(.*?)\\*\\*"), "$1")
            .replace(Regex("\\*(.*?)\\*"), "$1")
            .replace(Regex("_{1,2}(.*?)_{1,2}"), "$1")
            .replace(Regex("[━─\\-]{3,}"), " ")
            .replace(Regex("[📌💡⚠️🎯]"), "")
            .replace(Regex("\\s+"), " ")
            .trim()

        return text
    }

    /**
     * Splits long text into natural single-sentence chunks for exact reading-time highlighting.
     */
    private fun splitIntoChunks(text: String): List<String> {
        val sentenceRegex = Regex("""[^।?!.\n]+[।?!.]?""")
        val matches = sentenceRegex.findAll(text)
            .map { it.value.trim() }
            .filter { it.isNotBlank() }
            .toList()

        val chunksList = mutableListOf<String>()

        for (sentence in matches) {
            if (sentence.length <= 160) {
                chunksList.add(sentence)
            } else {
                // If a single sentence is very long, split at clauses (commas, semicolons, dashes)
                val clauses = sentence.split(Regex("(?<=[,;:—])\\s+"))
                var current = StringBuilder()
                for (clause in clauses) {
                    val trimmed = clause.trim()
                    if (trimmed.isEmpty()) continue
                    if (current.length + trimmed.length + 1 <= 150) {
                        if (current.isNotEmpty()) current.append(" ")
                        current.append(trimmed)
                    } else {
                        if (current.isNotEmpty()) {
                            chunksList.add(current.toString().trim())
                            current = StringBuilder()
                        }
                        if (trimmed.length > 150) {
                            // Split by words
                            val words = trimmed.split(" ")
                            var wordChunk = StringBuilder()
                            for (w in words) {
                                if (wordChunk.length + w.length + 1 <= 140) {
                                    if (wordChunk.isNotEmpty()) wordChunk.append(" ")
                                    wordChunk.append(w)
                                } else {
                                    if (wordChunk.isNotEmpty()) chunksList.add(wordChunk.toString().trim())
                                    wordChunk = StringBuilder(w)
                                }
                            }
                            if (wordChunk.isNotEmpty()) chunksList.add(wordChunk.toString().trim())
                        } else {
                            current.append(trimmed)
                        }
                    }
                }
                if (current.isNotEmpty()) {
                    chunksList.add(current.toString().trim())
                }
            }
        }

        return chunksList.filter { it.isNotBlank() }
    }
}
