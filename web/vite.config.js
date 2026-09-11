import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import https from 'node:https'

function ttsAndTranslateProxyPlugin() {
  return {
    name: 'tts-translate-proxy-plugin',
    configureServer(server) {
      // 1. TTS Proxy
      server.middlewares.use('/api/tts', (req, res) => {
        const urlObj = new URL(req.url, `http://${req.headers.host}`)
        const text = urlObj.searchParams.get('text') || ''
        const lang = urlObj.searchParams.get('lang') || 'bn'
        if (!text) {
          res.statusCode = 400
          res.end('Missing text parameter')
          return
        }

        const targetUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(lang)}&client=tw-ob&q=${encodeURIComponent(text)}`
        
        https.get(targetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'Referer': 'https://translate.google.com/'
          }
        }, (upstreamRes) => {
          res.writeHead(upstreamRes.statusCode || 200, {
            'Content-Type': upstreamRes.headers['content-type'] || 'audio/mpeg',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=86400'
          })
          upstreamRes.pipe(res)
        }).on('error', (err) => {
          console.error('TTS Proxy Error:', err)
          res.statusCode = 500
          res.end('TTS Proxy Error')
        })
      })

      // 2. Google Translate Proxy
      server.middlewares.use('/api/translate', (req, res) => {
        const urlObj = new URL(req.url, `http://${req.headers.host}`)
        const text = urlObj.searchParams.get('text') || ''
        const toLang = urlObj.searchParams.get('to') || 'bn'
        const fromLang = urlObj.searchParams.get('from') || 'auto'
        if (!text) {
          res.statusCode = 400
          res.end(JSON.stringify({ error: 'Missing text parameter' }))
          return
        }

        const targetUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(fromLang)}&tl=${encodeURIComponent(toLang)}&dt=t&q=${encodeURIComponent(text)}`

        https.get(targetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
          }
        }, (upstreamRes) => {
          let body = ''
          upstreamRes.on('data', chunk => body += chunk)
          upstreamRes.on('end', () => {
            try {
              const parsed = JSON.parse(body)
              const translatedText = parsed[0] ? parsed[0].map(item => item[0]).filter(Boolean).join('') : ''
              const detectedLang = parsed[2] || fromLang
              
              res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
              })
              res.end(JSON.stringify({
                originalText: text,
                translatedText: translatedText,
                detectedLang: detectedLang
              }))
            } catch (err) {
              res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
              })
              res.end(JSON.stringify({
                originalText: text,
                translatedText: text,
                error: 'Parsing failed'
              }))
            }
          })
        }).on('error', (err) => {
          console.error('Translate Proxy Error:', err)
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'Translate Proxy Error' }))
        })
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/nine_books/',
  plugins: [
    react(),
    tailwindcss(),
    ttsAndTranslateProxyPlugin()
  ],
})
