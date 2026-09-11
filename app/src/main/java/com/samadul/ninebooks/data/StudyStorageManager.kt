package com.samadul.ninebooks.data

import android.content.Context
import android.content.SharedPreferences
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import java.util.UUID

@Serializable
data class SavedWord(
    val id: String = UUID.randomUUID().toString(),
    val word: String,
    val translation: String,
    val lessonTitle: String = "",
    val timestamp: Long = System.currentTimeMillis()
)

@Serializable
data class SavedHighlight(
    val id: String = UUID.randomUUID().toString(),
    val text: String,
    val lessonTitle: String = "",
    val timestamp: Long = System.currentTimeMillis()
)

class StudyStorageManager(context: Context) {

    private val prefs: SharedPreferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val json = Json { ignoreUnknownKeys = true }

    private val _savedWords = MutableStateFlow<List<SavedWord>>(loadWords())
    val savedWords: StateFlow<List<SavedWord>> = _savedWords.asStateFlow()

    private val _savedHighlights = MutableStateFlow<List<SavedHighlight>>(loadHighlights())
    val savedHighlights: StateFlow<List<SavedHighlight>> = _savedHighlights.asStateFlow()

    private fun loadWords(): List<SavedWord> {
        val raw = prefs.getString(KEY_WORDS, null) ?: return emptyList()
        return try {
            json.decodeFromString<List<SavedWord>>(raw)
        } catch (e: Exception) {
            emptyList()
        }
    }

    private fun loadHighlights(): List<SavedHighlight> {
        val raw = prefs.getString(KEY_HIGHLIGHTS, null) ?: return emptyList()
        return try {
            json.decodeFromString<List<SavedHighlight>>(raw)
        } catch (e: Exception) {
            emptyList()
        }
    }

    fun saveWord(word: String, translation: String, lessonTitle: String = ""): SavedWord {
        val trimmed = word.trim()
        val existing = _savedWords.value.find { it.word.equals(trimmed, ignoreCase = true) }
        val item = existing?.copy(translation = translation) ?: SavedWord(
            word = trimmed,
            translation = translation,
            lessonTitle = lessonTitle
        )

        val updated = listOf(item) + _savedWords.value.filterNot { it.id == item.id }
        _savedWords.value = updated
        prefs.edit().putString(KEY_WORDS, json.encodeToString(updated)).apply()
        return item
    }

    fun deleteWord(id: String) {
        val updated = _savedWords.value.filterNot { it.id == id }
        _savedWords.value = updated
        prefs.edit().putString(KEY_WORDS, json.encodeToString(updated)).apply()
    }

    fun saveHighlight(text: String, lessonTitle: String = ""): SavedHighlight {
        val trimmed = text.trim()
        val existing = _savedHighlights.value.find { it.text == trimmed }
        if (existing != null) return existing

        val item = SavedHighlight(
            text = trimmed,
            lessonTitle = lessonTitle
        )
        val updated = listOf(item) + _savedHighlights.value
        _savedHighlights.value = updated
        prefs.edit().putString(KEY_HIGHLIGHTS, json.encodeToString(updated)).apply()
        return item
    }

    fun deleteHighlight(id: String) {
        val updated = _savedHighlights.value.filterNot { it.id == id }
        _savedHighlights.value = updated
        prefs.edit().putString(KEY_HIGHLIGHTS, json.encodeToString(updated)).apply()
    }

    companion object {
        private const val PREFS_NAME = "ninebooks_study_prefs"
        private const val KEY_WORDS = "saved_vocabulary_words"
        private const val KEY_HIGHLIGHTS = "saved_highlighted_sentences"

        @Volatile
        private var instance: StudyStorageManager? = null

        fun getInstance(context: Context): StudyStorageManager {
            return instance ?: synchronized(this) {
                instance ?: StudyStorageManager(context.applicationContext).also { instance = it }
            }
        }
    }
}
