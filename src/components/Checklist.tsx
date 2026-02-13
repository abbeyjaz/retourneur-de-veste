'use client'

const ITEMS = [
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

interface ChecklistProps {
  checked: boolean[]
  onToggle: (index: number) => void
}

export default function Checklist({ checked, onToggle }: ChecklistProps) {
  const left = ITEMS.slice(0, 5)
  const right = ITEMS.slice(5)

  return (
    <>
      <div className="checklist-column left">
        {left.map((item, i) => (
          <label key={i} className={`checklist-item ${checked[i] ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => onToggle(i)}
            />
            <span className="checkmark" />
            <span className="label-text">{item}</span>
          </label>
        ))}
      </div>
      <div className="checklist-column right">
        {right.map((item, i) => (
          <label key={i + 5} className={`checklist-item ${checked[i + 5] ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={checked[i + 5]}
              onChange={() => onToggle(i + 5)}
            />
            <span className="checkmark" />
            <span className="label-text">{item}</span>
          </label>
        ))}
      </div>
    </>
  )
}
