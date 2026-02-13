import { useState, useEffect, useRef } from 'react'

const SENTENCES = [
  'Intelligence Beyond Dashboards.',
  'See What Others Miss.',
  'Clarity Before Consequence.',
  'Signal. Not Noise.',
  'Know Before It Costs You.',
]

const TYPING_MS = 70
const PAUSE_AFTER_TYPING_MS = 4500
const FADE_OUT_MS = 400

export default function CohiHeadlineTicker({ className = '' }) {
  const [visibleText, setVisibleText] = useState('')
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'hold' | 'fade'
  const [opacity, setOpacity] = useState(1)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const sentence = SENTENCES[sentenceIndex]

    const clearAll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    const runTyping = () => {
      setPhase('typing')
      setOpacity(1)

      let charIndex = 1
      const typeNext = () => {
        if (charIndex <= sentence.length) {
          setVisibleText(sentence.slice(0, charIndex))
          charIndex += 1
          timeoutRef.current = setTimeout(typeNext, TYPING_MS)
        } else {
          setPhase('hold')
          timeoutRef.current = setTimeout(runHold, PAUSE_AFTER_TYPING_MS)
        }
      }
      typeNext()
    }

    const runHold = () => {
      setPhase('fade')
      setOpacity(0)
      timeoutRef.current = setTimeout(runNext, FADE_OUT_MS)
    }

    const runNext = () => {
      setSentenceIndex((i) => (i + 1) % SENTENCES.length)
    }

    runTyping()
    return clearAll
  }, [sentenceIndex])

  return (
    <span
      className={`cohi-headline-ticker ${className}`.trim()}
      style={{
        opacity,
        transition: phase === 'fade' ? `opacity ${FADE_OUT_MS}ms ease-out` : 'none',
        display: 'inline-block',
        minWidth: 'min-content',
      }}
    >
      {visibleText}
    </span>
  )
}
