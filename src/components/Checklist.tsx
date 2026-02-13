'use client'

export const ITEMS = [
  "Dit que les charges sont trop élevées",
  "Est quand même un peu d'accord avec Sarah Knafo chez Matthieu Stef",
  "Trouve que Mélenchon exagère",
  "Parle de mérite et de responsabilité individuelle",
  'Dit "on peut plus rien dire"',
  "A commencé à suivre des comptes LinkedIn inspirants",
  "Trouve que le RSA c'est trop facile",
  "Place ses enfants dans le privé",
  "Va remplacer ses salariés par de l'IA",
  "On est quand même mieux à l'Île de Ré",
]

interface ChecklistColumnProps {
  items: string[]
  checked: boolean[]
  startIndex: number
  onToggle: (index: number) => void
  side: 'left' | 'right'
}

export function ChecklistColumn({ items, checked, startIndex, onToggle, side }: ChecklistColumnProps) {
  return (
    <div className={`checklist-column ${side}`}>
      {items.map((item, i) => {
        const idx = startIndex + i
        return (
          <label key={idx} className={`checklist-item ${checked[idx] ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={checked[idx]}
              onChange={() => onToggle(idx)}
            />
            <span className="checkmark" />
            <span className="label-text">{item}</span>
          </label>
        )
      })}
    </div>
  )
}
