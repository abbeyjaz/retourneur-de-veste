'use client'

import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

interface ConfettiProps {
  fire: boolean
}

export default function Confetti({ fire }: ConfettiProps) {
  const hasFired = useRef(false)

  useEffect(() => {
    if (fire && !hasFired.current) {
      hasFired.current = true
      const colors = ['#002395', '#FFFFFF', '#ED2939']
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors,
      })
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 120,
          origin: { y: 0.5 },
          colors,
        })
      }, 300)
    }
  }, [fire])

  return null
}
