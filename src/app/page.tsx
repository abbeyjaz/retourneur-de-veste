'use client'

import { useState } from 'react'
import Lucas from '@/components/Lucas'
import Checklist from '@/components/Checklist'
import Confetti from '@/components/Confetti'
import Philippe from '@/components/Philippe'

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
    <main className="page">
      {/* Background gradient rouge → bleu */}
      <div className="bg-gradient" />

      {/* Philippe fantôme à droite */}
      <Philippe progress={progress} isComplete={isComplete} />

      {/* Title */}
      <h1 className="title">Lucas Sauquet Vest Returning Simulator 2027</h1>

      {/* HERO: Spectrum zone avec Lucas */}
      <div className="hero">
        <div className="spectrum">
          <div className="spectrum-labels">
            <span className="label-left">☭ GAUCHE</span>
            <span className="label-right">DROITE 🇫🇷</span>
          </div>
          <div className="spectrum-track">
            <div
              className="spectrum-fill"
              style={{ width: `${progress * 100}%` }}
            />
            <Lucas progress={progress} isComplete={isComplete} />
          </div>
          <div className="spectrum-counter">{count}/10</div>
        </div>

        {isComplete && (
          <p className="complete-message">Le retournement est complet.</p>
        )}
      </div>

      {/* Checklist en bas */}
      <div className="checklist-zone">
        <Checklist checked={checked} onToggle={handleToggle} />
      </div>

      <Confetti fire={isComplete} />
    </main>
  )
}
