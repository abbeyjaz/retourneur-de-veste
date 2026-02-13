'use client'

import Image from 'next/image'

interface PhilippeProps {
  progress: number
  isComplete: boolean
}

export default function Philippe({ progress, isComplete }: PhilippeProps) {
  // Philippe appears progressively from 30% progress
  const visibility = Math.max(0, (progress - 0.3) / 0.7)

  if (visibility <= 0) return null

  return (
    <div
      className="philippe-wrapper"
      style={{ opacity: visibility, transform: `scale(${0.6 + visibility * 0.4})` }}
    >
      <div className={`philippe-body ${isComplete ? 'celebrating' : ''}`}>
        <div className="philippe-head">
          <Image src="/philippe.webp" alt="Philippe" width={100} height={100} />
        </div>
      </div>
      {isComplete && (
        <div className="philippe-speech">Mufasa est fier de toi, Simba.</div>
      )}
    </div>
  )
}
