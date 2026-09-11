package com.samadul.ninebooks.data

import android.util.Log
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder
import java.util.concurrent.ConcurrentHashMap

object TranslationManager {
    private const val TAG = "TranslationManager"
    private val memoryCache = ConcurrentHashMap<String, String>()

    /**
     * Translates the given text (English, etc.) to Bengali with multi-layer fallback.
     */
    suspend fun translateToBengali(text: String): Result<String> = withContext(Dispatchers.IO) {
        val trimmed = text.trim()
        if (trimmed.isEmpty()) {
            return@withContext Result.success("")
        }

        // Check in-memory cache first
        val cached = memoryCache[trimmed.lowercase()]
        if (cached != null) {
            return@withContext Result.success(cached)
        }

        // 1. Try clients5.google.com (Fast, unblocked Chrome extension endpoint)
        tryFromGoogleClients5(trimmed)?.let {
            memoryCache[trimmed.lowercase()] = it
            return@withContext Result.success(it)
        }

        // 2. Try Google Translate gtx fallback
        tryFromGoogleGtx(trimmed)?.let {
            memoryCache[trimmed.lowercase()] = it
            return@withContext Result.success(it)
        }

        // 3. Try MyMemory API fallback
        tryFromMyMemory(trimmed)?.let {
            memoryCache[trimmed.lowercase()] = it
            return@withContext Result.success(it)
        }

        return@withContext Result.failure(Exception("অনুবাদ পাওয়া যায়নি। দয়া করে ইন্টারনেট সংযোগ চেক করুন।"))
    }

    private fun tryFromGoogleClients5(text: String): String? {
        return try {
            val encoded = URLEncoder.encode(text, "UTF-8")
            val url = URL("https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=bn&q=$encoded")
            val conn = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 6000
                readTimeout = 6000
                setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
            }

            if (conn.responseCode == HttpURLConnection.HTTP_OK) {
                val resp = BufferedReader(InputStreamReader(conn.inputStream, "UTF-8")).use { it.readText() }
                conn.disconnect()
                parseGoogleClients5Response(resp)
            } else {
                conn.disconnect()
                null
            }
        } catch (e: Exception) {
            Log.w(TAG, "Google clients5 translation failed", e)
            null
        }
    }

    private fun parseGoogleClients5Response(raw: String): String? {
        return try {
            val jsonElement = Json.parseToJsonElement(raw)
            if (jsonElement is JsonArray) {
                val sb = StringBuilder()
                for (item in jsonElement) {
                    when (item) {
                        is JsonPrimitive -> sb.append(item.content)
                        is JsonArray -> {
                            if (item.isNotEmpty() && item[0] is JsonPrimitive) {
                                sb.append((item[0] as JsonPrimitive).content)
                            }
                        }
                        else -> {}
                    }
                }
                val res = sb.toString().trim()
                if (res.isNotBlank()) res else null
            } else null
        } catch (e: Exception) {
            Log.w(TAG, "parseGoogleClients5Response failed", e)
            null
        }
    }

    private fun tryFromGoogleGtx(text: String): String? {
        return try {
            val encoded = URLEncoder.encode(text, "UTF-8")
            val url = URL("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=bn&dt=t&q=$encoded")
            val conn = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 5000
                readTimeout = 5000
                setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
            }

            if (conn.responseCode == HttpURLConnection.HTTP_OK) {
                val resp = BufferedReader(InputStreamReader(conn.inputStream, "UTF-8")).use { it.readText() }
                conn.disconnect()
                val jsonElement = Json.parseToJsonElement(resp)
                val segments = jsonElement.jsonArray[0].jsonArray
                val sb = StringBuilder()
                for (seg in segments) {
                    val segArray = seg.jsonArray
                    if (segArray.isNotEmpty()) {
                        sb.append(segArray[0].jsonPrimitive.content)
                    }
                }
                val res = sb.toString().trim()
                if (res.isNotBlank()) res else null
            } else {
                conn.disconnect()
                null
            }
        } catch (e: Exception) {
            Log.w(TAG, "Google gtx fallback failed", e)
            null
        }
    }

    private fun tryFromMyMemory(text: String): String? {
        return try {
            val encoded = URLEncoder.encode(text, "UTF-8")
            val url = URL("https://api.mymemory.translated.net/get?q=$encoded&langpair=en|bn")
            val conn = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 6000
                readTimeout = 6000
                setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
            }

            if (conn.responseCode == HttpURLConnection.HTTP_OK) {
                val resp = BufferedReader(InputStreamReader(conn.inputStream, "UTF-8")).use { it.readText() }
                conn.disconnect()
                val jsonElement = Json.parseToJsonElement(resp)
                val respData = jsonElement.jsonObject["responseData"]?.jsonObject
                val translated = respData?.get("translatedText")?.jsonPrimitive?.content
                if (!translated.isNullOrBlank() && !translated.startsWith("MYMEMORY WARNING")) {
                    translated.trim()
                } else null
            } else {
                conn.disconnect()
                null
            }
        } catch (e: Exception) {
            Log.w(TAG, "MyMemory fallback failed", e)
            null
        }
    }
}
