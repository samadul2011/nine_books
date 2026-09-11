package com.samadul.ninebooks

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.samadul.ninebooks.ui.screens.ChapterListScreen
import com.samadul.ninebooks.ui.screens.ExamScreen
import com.samadul.ninebooks.ui.screens.LessonScreen
import com.samadul.ninebooks.ui.screens.SubjectListScreen
import com.samadul.ninebooks.ui.theme.NineBooksTheme
import com.samadul.ninebooks.ui.viewmodel.StudyViewModel
import java.net.URLDecoder
import java.net.URLEncoder
import java.nio.charset.StandardCharsets

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            NineBooksTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    NineBooksApp()
                }
            }
        }
    }
}

@Composable
fun NineBooksApp() {
    val navController = rememberNavController()
    val viewModel: StudyViewModel = viewModel()

    NavHost(
        navController = navController,
        startDestination = "subjects"
    ) {
        // 1. Subjects Screen
        composable("subjects") {
            SubjectListScreen(
                viewModel = viewModel,
                onSubjectClick = { subject ->
                    val encodedName = URLEncoder.encode(subject.nameBn, StandardCharsets.UTF_8.toString())
                    navController.navigate("chapters/${subject.id}/$encodedName")
                }
            )
        }

        // 2. Chapters Screen
        composable(
            route = "chapters/{subjectId}/{subjectName}",
            arguments = listOf(
                navArgument("subjectId") { type = NavType.StringType },
                navArgument("subjectName") { type = NavType.StringType }
            )
        ) { backStackEntry ->
            val subjectId = backStackEntry.arguments?.getString("subjectId") ?: ""
            val rawName = backStackEntry.arguments?.getString("subjectName") ?: ""
            val subjectName = URLDecoder.decode(rawName, StandardCharsets.UTF_8.toString())

            ChapterListScreen(
                subjectId = subjectId,
                subjectName = subjectName,
                viewModel = viewModel,
                onChapterClick = { chapter ->
                    val encodedTitle = URLEncoder.encode(chapter.titleBn, StandardCharsets.UTF_8.toString())
                    navController.navigate("lessons/${chapter.id}/$encodedTitle")
                },
                onBack = { navController.popBackStack() }
            )
        }

        // 3. Lesson Reading Screen
        composable(
            route = "lessons/{chapterId}/{chapterTitle}",
            arguments = listOf(
                navArgument("chapterId") { type = NavType.StringType },
                navArgument("chapterTitle") { type = NavType.StringType }
            )
        ) { backStackEntry ->
            val chapterId = backStackEntry.arguments?.getString("chapterId") ?: ""
            val rawTitle = backStackEntry.arguments?.getString("chapterTitle") ?: ""
            val chapterTitle = URLDecoder.decode(rawTitle, StandardCharsets.UTF_8.toString())

            LessonScreen(
                chapterId = chapterId,
                chapterTitle = chapterTitle,
                viewModel = viewModel,
                onTakeExam = {
                    val encodedTitle = URLEncoder.encode(chapterTitle, StandardCharsets.UTF_8.toString())
                    navController.navigate("exam/$chapterId/$encodedTitle")
                },
                onBack = { navController.popBackStack() }
            )
        }

        // 4. Multiple Choice Exam Screen
        composable(
            route = "exam/{chapterId}/{chapterTitle}",
            arguments = listOf(
                navArgument("chapterId") { type = NavType.StringType },
                navArgument("chapterTitle") { type = NavType.StringType }
            )
        ) { backStackEntry ->
            val chapterId = backStackEntry.arguments?.getString("chapterId") ?: ""
            val rawTitle = backStackEntry.arguments?.getString("chapterTitle") ?: ""
            val chapterTitle = URLDecoder.decode(rawTitle, StandardCharsets.UTF_8.toString())

            ExamScreen(
                chapterId = chapterId,
                chapterTitle = chapterTitle,
                viewModel = viewModel,
                onBack = { navController.popBackStack() }
            )
        }
    }
}