import { useState, useRef, useCallback } from 'react'

const ACCESSIBILITY_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="24" height="24" aria-hidden="true">
    <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
  </svg>
)

const GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts'
const SAMPLE_RATE = 24000
const MAX_CHARS = 12000

function pcmToWavBlob(pcmData, sampleRate = SAMPLE_RATE, numChannels = 1, bitsPerSample = 16) {
  const bytesPerSample = bitsPerSample / 8
  const blockAlign = numChannels * bytesPerSample
  const byteRate = sampleRate * blockAlign
  const dataSize = pcmData.byteLength
  const buffer = new ArrayBuffer(44 + dataSize)
  const view = new DataView(buffer)
  let offset = 0

  const write = (str) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset++, str.charCodeAt(i))
  }
  write('RIFF')
  view.setUint32(offset, 36 + dataSize, true); offset += 4
  write('WAVE')
  write('fmt ')
  view.setUint32(offset, 16, true); offset += 4 // chunk size
  view.setUint16(offset, 1, true); offset += 2   // audio format PCM
  view.setUint16(offset, numChannels, true); offset += 2
  view.setUint32(offset, sampleRate, true); offset += 4
  view.setUint32(offset, byteRate, true); offset += 4
  view.setUint16(offset, blockAlign, true); offset += 2
  view.setUint16(offset, bitsPerSample, true); offset += 2
  write('data')
  view.setUint32(offset, dataSize, true); offset += 4

  new Uint8Array(buffer).set(new Uint8Array(pcmData), 44)
  return new Blob([buffer], { type: 'audio/wav' })
}

export default function AccessibilityTool() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const audioRef = useRef(null)

  const speak = useCallback(async () => {
    setError(null)

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setIsPlaying(false)
      return
    }

    const main = document.querySelector('main')
    if (!main) return

    let fullText = (main.innerText || main.textContent || '').replace(/\s+/g, ' ').trim()
    if (!fullText) return

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY
    if (!apiKey) {
      setError('Gemini API key not set. Add VITE_GEMINI_API_KEY to .env')
      return
    }

    if (fullText.length > MAX_CHARS) {
      fullText = fullText.slice(0, MAX_CHARS) + '…'
    }

    const prompt = `Say in a deep, male, manly, authoritative voice—clear and resonant, like a seasoned narrator: ${fullText}`

    setIsLoading(true)
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_TTS_MODEL}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: 'Algenib',
                  },
                },
              },
            },
          }),
        }
      )

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData?.error?.message || `API error: ${res.status}`)
      }

      const data = await res.json()
      const b64 = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data
      if (!b64) throw new Error('No audio in response')

      const binary = atob(b64)
      const bytes = new Uint8Array(binary.length)
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)

      const wavBlob = pcmToWavBlob(bytes.buffer)
      const url = URL.createObjectURL(wavBlob)

      const audio = new Audio(url)
      audioRef.current = audio

      audio.onended = () => {
        URL.revokeObjectURL(url)
        audioRef.current = null
        setIsPlaying(false)
      }
      audio.onerror = (e) => {
        URL.revokeObjectURL(url)
        setError('Playback failed')
        setIsPlaying(false)
        setIsLoading(false)
      }

      await audio.play()
      setIsPlaying(true)
    } catch (err) {
      setError(err.message || 'TTS failed')
    } finally {
      setIsLoading(false)
    }
  }, [isPlaying])

  return (
    <div className="accessibility-tool" aria-label="Accessibility tools">
      <button
        type="button"
        className="accessibility-tool__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Open accessibility options"
        title="Accessibility"
      >
        {ACCESSIBILITY_ICON}
      </button>
      {isOpen && (
        <div className="accessibility-tool__panel">
          <button
            type="button"
            className="accessibility-tool__btn"
            onClick={speak}
            disabled={isLoading}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Stop reading' : 'Listen to page content'}
          >
            {isLoading ? (
              <>
                <span className="accessibility-tool__icon">⏳</span>
                Loading…
              </>
            ) : isPlaying ? (
              <>
                <span className="accessibility-tool__icon">⏹</span>
                Stop
              </>
            ) : (
              <>
                <span className="accessibility-tool__icon">▶</span>
                Listen
              </>
            )}
          </button>
          {error && (
            <p className="accessibility-tool__error" role="alert">
              {error}
            </p>
          )}
          <p className="accessibility-tool__hint">
            Read this page aloud with Gemini TTS (deep male voice).
          </p>
        </div>
      )}
    </div>
  )
}
