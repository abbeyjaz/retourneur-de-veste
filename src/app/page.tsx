'use client'

import { useState } from 'react'
import Lucas from '@/components/Lucas'
import Checklist from '@/components/Checklist'
import ProgressBar from '@/components/ProgressBar'
import Confetti from '@/components/Confetti'

export default function Home() {
  const [checked, setChecked] = useState<boolean[]>(new Array(10).fill(false))

  const count = checked.filter(Boolean).length
  const progress = count / 10
  const isComplete = count === 10

  const handleToggle = (index: number) => {
    setChecked(prev => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <main
      className="page"
      style={{
        background: `linear-gradient(135deg,
          hsl(${progress * 220}, ${40 + progress * 20}%, ${12 + progress * 3}%) 0%,
          hsl(${progress * 220}, ${30 + progress * 20}%, ${8 + progress * 5}%) 100%)`,
      }}
    >
      <h1 className="title">Lucas Sauquet Vest Returning Simulator 2027</h1>

      {/* Zone du spectre politique */}
      <div className="spectrum">
        <div className="spectrum-labels">
          <span className="label-left">GAUCHE</span>
          <span className="label-right">DROITE</span>
        </div>
        <div className="spectrum-track">
          <div
            className="spectrum-fill"
            style={{ width: `${progress * 100}%` }}
          />
          <Lucas progress={progress} isComplete={isComplete} />
        </div>
      </div>

      {/* Checklist */}
      <Checklist checked={checked} onToggle={handleToggle} />

      {/* Progress */}
      <ProgressBar progress={progress} />

      {isComplete && (
        <p className="complete-message">Le retournement est complet.</p>
      )}

      <Confetti fire={isComplete} />
    </main>
  )
}
