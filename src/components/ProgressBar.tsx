'use client'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const r = Math.round(229 - progress * (229 - 21))
  const g = Math.round(57 - progress * (57 - 101))
  const b = Math.round(53 + progress * (192 - 53))
  const color = `rgb(${r}, ${g}, ${b})`

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: color,
        }}
      />
      <span className="progress-label">
        {Math.round(progress * 10)}/10
      </span>
    </div>
  )
}
