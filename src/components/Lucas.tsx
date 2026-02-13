'use client'

import Image from 'next/image'

interface LucasProps {
  progress: number // 0 to 1
  isComplete: boolean
}

export default function Lucas({ progress, isComplete }: LucasProps) {
  return (
    <div
      className="lucas-wrapper"
      style={{ left: `${5 + progress * 80}%` }}
    >
      <div className={`lucas-body ${progress > 0 ? 'running' : 'idle'} ${isComplete ? 'celebrating' : ''}`}>
        {/* Photo de Lucas */}
        <div className="lucas-head">
          <Image src="/lucas.jpg" alt="Lucas Sauquet" width={130} height={130} />
        </div>

        {/* Petit corps */}
        <div className="lucas-torso" />

        {/* Petites jambes animées */}
        <div className="lucas-legs">
          <div className="leg left-leg" />
          <div className="leg right-leg" />
        </div>

        {/* Petits bras */}
        <div className="lucas-arms">
          <div className="arm left-arm" />
          <div className="arm right-arm" />
        </div>
      </div>

      {isComplete && <div className="lucas-speech">Je suis de gauche, mais je vote à droite.</div>}
    </div>
  )
}
