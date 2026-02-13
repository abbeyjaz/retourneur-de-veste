'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { ITEMS, ChecklistColumn } from '@/components/Checklist'
import ProgressBar from '@/components/ProgressBar'
import Confetti from '@/components/Confetti'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

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

  const bgStyle = {
    background: `linear-gradient(135deg,
      rgb(${Math.round(40 - progress * 30)}, ${Math.round(10 + progress * 10)}, ${Math.round(10 + progress * 30)}) 0%,
      rgb(${Math.round(20 - progress * 15)}, ${Math.round(15 + progress * 10)}, ${Math.round(25 + progress * 30)}) 100%)`,
  }

  return (
    <main className="page" style={bgStyle}>
      <h1 className="title">Lucas Sauquet — Le Retournement</h1>

      <div className="content">
        <ChecklistColumn
          items={ITEMS.slice(0, 5)}
          checked={checked}
          startIndex={0}
          onToggle={handleToggle}
          side="left"
        />

        <div className="scene-container">
          <Scene progress={progress} isComplete={isComplete} />
        </div>

        <ChecklistColumn
          items={ITEMS.slice(5)}
          checked={checked}
          startIndex={5}
          onToggle={handleToggle}
          side="right"
        />
      </div>

      <ProgressBar progress={progress} />

      {isComplete && (
        <p className="complete-message">Le retournement est complet.</p>
      )}

      <Confetti fire={isComplete} />
    </main>
  )
}
