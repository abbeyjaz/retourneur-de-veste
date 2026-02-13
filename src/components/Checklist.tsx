'use client'

// Ordonnés du plus soft au plus "droite"
export const ITEMS = [
  "Trouve que Mélenchon exagère",
  "Dit que les charges sont trop élevées",
  'Dit "on peut plus rien dire"',
  "On paie trop d'impôts, je te le dis en tant qu'entrepreneur",
  "Je suis Pierre Ninet sur les réseaux sociaux et j'assume",
  "Est quand même un peu d'accord avec Sarah Knafo chez Matthieu Stef",
  "C'est scandaleux de pouvoir poser un congé maladie pendant ses vacances",
  "Place ses enfants dans le privé",
  "Va remplacer ses salariés par de l'IA",
  "On est quand même mieux à l'Île de Ré",
]

interface ChecklistProps {
  checked: boolean[]
  onToggle: (index: number) => void
}

export default function Checklist({ checked, onToggle }: ChecklistProps) {
  return (
    <div className="checklist">
      {ITEMS.map((item, i) => (
        <label
          key={i}
          className={`checklist-item ${checked[i] ? 'checked' : ''}`}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <input
            type="checkbox"
            checked={checked[i]}
            onChange={() => onToggle(i)}
          />
          <span className="checkmark">
            <span className="check-number">{i + 1}</span>
          </span>
          <span className="label-text">{item}</span>
        </label>
      ))}
    </div>
  )
}
