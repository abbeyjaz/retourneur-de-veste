'use client'

import Image from 'next/image'

interface PhilippeProps {
  progress: number
  isComplete: boolean
}

export default function Philippe({ progress, isComplete }: PhilippeProps) {
  // Philippe appears progressively from 20% progress
  const visibility = Math.max(0, (progress - 0.2) / 0.8)

  if (visibility <= 0) return null

  return (
    <div
      className="philippe-wrapper"
      style={{ opacity: 0.15 + visibility * 0.35 }}
    >
      <Image
        src="/philippe.webp"
        alt="Philippe"
        width={400}
        height={500}
        className="philippe-img"
      />
      {isComplete && (
        <div className="philippe-speech">Mufasa est fier de toi, Simba.</div>
      )}
    </div>
  )
}
