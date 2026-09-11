package com.samadul.ninebooks.ui.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.samadul.ninebooks.data.models.Chapter
import com.samadul.ninebooks.data.models.ExamQuestion
import com.samadul.ninebooks.data.models.Lesson
import com.samadul.ninebooks.data.models.Subject
import com.samadul.ninebooks.data.repository.StudyRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

sealed interface UiState<out T> {
    object Loading : UiState<Nothing>
    data class Success<T>(val data: T) : UiState<T>
    data class Error(val message: String) : UiState<Nothing>
}

class StudyViewModel(
    private val repository: StudyRepository = StudyRepository()
) : ViewModel() {

    private val _subjects = MutableStateFlow<UiState<List<Subject>>>(UiState.Loading)
    val subjects: StateFlow<UiState<List<Subject>>> = _subjects.asStateFlow()

    private val _chapters = MutableStateFlow<UiState<List<Chapter>>>(UiState.Loading)
    val chapters: StateFlow<UiState<List<Chapter>>> = _chapters.asStateFlow()

    private val _lessons = MutableStateFlow<UiState<List<Lesson>>>(UiState.Loading)
    val lessons: StateFlow<UiState<List<Lesson>>> = _lessons.asStateFlow()

    private val _questions = MutableStateFlow<UiState<List<ExamQuestion>>>(UiState.Loading)
    val questions: StateFlow<UiState<List<ExamQuestion>>> = _questions.asStateFlow()

    private val _examSubmissionState = MutableStateFlow<UiState<Unit>?>(null)
    val examSubmissionState: StateFlow<UiState<Unit>?> = _examSubmissionState.asStateFlow()

    init {
        fetchSubjects()
    }

    fun fetchSubjects() {
        viewModelScope.launch {
            _subjects.value = UiState.Loading
            try {
                val list = repository.getSubjects()
                _subjects.value = UiState.Success(list)
            } catch (e: Exception) {
                _subjects.value = UiState.Error(e.localizedMessage ?: "Failed to load subjects")
            }
        }
    }

    fun fetchChapters(subjectId: String) {
        viewModelScope.launch {
            _chapters.value = UiState.Loading
            try {
                val list = repository.getChapters(subjectId)
                _chapters.value = UiState.Success(list)
            } catch (e: Exception) {
                _chapters.value = UiState.Error(e.localizedMessage ?: "Failed to load chapters")
            }
        }
    }

    fun fetchLessons(chapterId: String) {
        viewModelScope.launch {
            _lessons.value = UiState.Loading
            try {
                val list = repository.getLessons(chapterId)
                _lessons.value = UiState.Success(list)
            } catch (e: Exception) {
                _lessons.value = UiState.Error(e.localizedMessage ?: "Failed to load lessons")
            }
        }
    }

    fun fetchExamQuestions(chapterId: String) {
        viewModelScope.launch {
            _questions.value = UiState.Loading
            try {
                val list = repository.getExamQuestions(chapterId)
                _questions.value = UiState.Success(list)
            } catch (e: Exception) {
                _questions.value = UiState.Error(e.localizedMessage ?: "Failed to load questions")
            }
        }
    }

    fun submitExamScore(chapterId: String, score: Int, total: Int) {
        viewModelScope.launch {
            _examSubmissionState.value = UiState.Loading
            repository.saveProgress(chapterId, score, total)
                .onSuccess {
                    _examSubmissionState.value = UiState.Success(Unit)
                }
                .onFailure {
                    _examSubmissionState.value = UiState.Error(it.localizedMessage ?: "Could not save progress")
                }
        }
    }

    fun resetExamState() {
        _examSubmissionState.value = null
    }
}
