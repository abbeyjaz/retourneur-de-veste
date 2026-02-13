'use client'

import Image from 'next/image'

interface PhilippeProps {
  progress: number
  isComplete: boolean
}

export default function Philippe({ progress, isComplete }: PhilippeProps) {
  // Philippe only appears from 5/10
  const t = Math.max(0, (progress - 0.5) / 0.5) // 0 at 5/10, 1 at 10/10

  if (t <= 0) return null

  // Opacity: very faint at start, more visible at end
  const opacity = 0.04 + t * t * 0.45 // quadratic curve: 0.04 → 0.49
  // Scale: tiny at start, full height at end
  const scale = 0.15 + t * 0.85 // 0.15 → 1.0

  return (
    <div
      className="philippe-wrapper"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: 'bottom right',
      }}
    >
      <Image
        src="/philippe.webp"
        alt="Philippe"
        width={500}
        height={700}
        className="philippe-img"
      />
      {isComplete && (
        <div className="philippe-speech">Mufasa est fier de toi, fiston.</div>
      )}
    </div>
  )
}
