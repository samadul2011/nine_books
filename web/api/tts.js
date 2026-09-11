import https from 'node:https'

export default function handler(req, res) {
  const text = req.query.text || ''
  if (!text) {
    res.statusCode = 400
    res.end('Missing text parameter')
    return
  }

  const targetUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=bn&client=tw-ob&q=${encodeURIComponent(text)}`
  
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
    console.error('TTS Vercel Proxy Error:', err)
    res.statusCode = 500
    res.end('TTS Error')
  })
}
