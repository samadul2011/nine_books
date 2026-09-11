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
            val targetLocale = if (isBengali(text)) Locale("bn", "BD") else Locale.US
            textToSpeech?.language = targetLocale
            textToSpeech?.setSpeechRate(_state.value.speed)
            val params = android.os.Bundle()
            textToSpeech?.speak(text, TextToSpeech.QUEUE_FLUSH, params, "chunk_$index")
            _state.value = _state.value.copy(isLoading = false, isPaused = false)
        } catch (e: Exception) {
            Log.e(tag, "Device TTS speak failed", e)
            playNextChunk()
        }
    }

    /**
     * Pronounces a single word or short phrase immediately.
     */
    fun speakSingleText(text: String) {
        if (text.isBlank()) return
        val lang = if (isBengali(text)) "bn" else "en"
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
                        textToSpeech?.language = if (lang == "bn") Locale("bn", "BD") else Locale.US
                        textToSpeech?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "single_word")
                    }
                }
            }
        } else {
            textToSpeech?.language = if (lang == "bn") Locale("bn", "BD") else Locale.US
            textToSpeech?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "single_word")
        }
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
     * Splits long text into natural sentence chunks of up to ~180 characters each.
     */
    private fun splitIntoChunks(text: String): List<String> {
        val sentenceDelimiters = Regex("[।?!.]")
        val rawSentences = text.split(sentenceDelimiters)
        val chunksList = mutableListOf<String>()
        var currentChunk = StringBuilder()

        for (s in rawSentences) {
            val trimmed = s.trim()
            if (trimmed.isEmpty()) continue

            val isBn = isBengali(trimmed)
            val punct = if (isBn) "।" else "."

            if (currentChunk.length + trimmed.length + 2 <= 180) {
                if (currentChunk.isNotEmpty()) currentChunk.append(" ")
                currentChunk.append(trimmed).append(punct)
            } else {
                if (currentChunk.isNotEmpty()) {
                    chunksList.add(currentChunk.toString().trim())
                    currentChunk = StringBuilder()
                }
                if (trimmed.length > 180) {
                    val words = trimmed.split(" ")
                    var subChunk = StringBuilder()
                    for (w in words) {
                        if (subChunk.length + w.length + 1 <= 160) {
                            if (subChunk.isNotEmpty()) subChunk.append(" ")
                            subChunk.append(w)
                        } else {
                            if (subChunk.isNotEmpty()) chunksList.add(subChunk.toString().trim())
                            subChunk = StringBuilder(w)
                        }
                    }
                    if (subChunk.isNotEmpty()) chunksList.add(subChunk.toString().trim())
                } else {
                    currentChunk.append(trimmed).append(punct)
                }
            }
        }

        if (currentChunk.isNotEmpty()) {
            chunksList.add(currentChunk.toString().trim())
        }

        return chunksList.filter { it.isNotBlank() }
    }
}
