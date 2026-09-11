package com.samadul.ninebooks.data.repository

import com.samadul.ninebooks.data.SupabaseClient
import com.samadul.ninebooks.data.models.Chapter
import com.samadul.ninebooks.data.models.ExamQuestion
import com.samadul.ninebooks.data.models.Lesson
import com.samadul.ninebooks.data.models.StudentProgressInsert
import com.samadul.ninebooks.data.models.Subject
import io.github.jan.supabase.auth.auth
import io.github.jan.supabase.postgrest.from
import io.github.jan.supabase.postgrest.query.Order
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class StudyRepository {
    private val client = SupabaseClient.client

    suspend fun getSubjects(): List<Subject> = withContext(Dispatchers.IO) {
        client.from("subjects")
            .select()
            .decodeList<Subject>()
    }

    suspend fun getChapters(subjectId: String): List<Chapter> = withContext(Dispatchers.IO) {
        client.from("chapters")
            .select {
                filter {
                    eq("subject_id", subjectId)
                }
                order("order_index", Order.ASCENDING)
            }
            .decodeList<Chapter>()
    }

    suspend fun getLessons(chapterId: String): List<Lesson> = withContext(Dispatchers.IO) {
        client.from("lessons")
            .select {
                filter {
                    eq("chapter_id", chapterId)
                }
                order("order_index", Order.ASCENDING)
            }
            .decodeList<Lesson>()
    }

    suspend fun getExamQuestions(chapterId: String): List<ExamQuestion> = withContext(Dispatchers.IO) {
        client.from("exam_questions")
            .select {
                filter {
                    eq("chapter_id", chapterId)
                }
            }
            .decodeList<ExamQuestion>()
    }

    suspend fun saveProgress(chapterId: String, score: Int, total: Int): Result<Unit> = withContext(Dispatchers.IO) {
        runCatching {
            // Get current user id from auth, or generate a guest fallback UUID if not logged in
            val currentUserId = client.auth.currentUserOrNull()?.id 
                ?: "00000000-0000-0000-0000-000000000001" // Demo/Guest student UUID
            
            client.from("student_progress").insert(
                StudentProgressInsert(
                    studentId = currentUserId,
                    chapterId = chapterId,
                    score = score,
                    total = total
                )
            )
            Unit
        }
    }
}
