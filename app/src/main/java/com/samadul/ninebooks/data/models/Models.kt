package com.samadul.ninebooks.data.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Subject(
    val id: String,
    @SerialName("name_bn") val nameBn: String,
    @SerialName("name_en") val nameEn: String,
    @SerialName("icon_url") val iconUrl: String? = null
)

@Serializable
data class Chapter(
    val id: String,
    @SerialName("subject_id") val subjectId: String,
    @SerialName("title_bn") val titleBn: String,
    @SerialName("title_en") val titleEn: String,
    @SerialName("order_index") val orderIndex: Int = 0
)

@Serializable
data class Lesson(
    val id: String,
    @SerialName("chapter_id") val chapterId: String,
    @SerialName("content_text") val contentText: String,
    @SerialName("audio_url") val audioUrl: String? = null,
    @SerialName("order_index") val orderIndex: Int = 0
)

@Serializable
data class ExamQuestion(
    val id: String,
    @SerialName("chapter_id") val chapterId: String,
    @SerialName("question_bn") val questionBn: String,
    @SerialName("question_en") val questionEn: String,
    @SerialName("options_json") val options: List<String>,
    @SerialName("correct_answer_index") val correctAnswerIndex: Int
)

@Serializable
data class StudentProgressInsert(
    @SerialName("student_id") val studentId: String,
    @SerialName("chapter_id") val chapterId: String,
    val score: Int,
    val total: Int
)
