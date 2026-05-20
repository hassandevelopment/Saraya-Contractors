interface ScopeListProps {
  heading: string
  items: string[]
}

export default function ScopeList({ heading, items }: ScopeListProps) {
  return (
    <div className="bg-sand-50 border border-sand-200 p-8">
      <h2 className="text-sm font-semibold tracking-widest uppercase text-terra-500 mb-6">
        {heading}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-navy-700 leading-snug">
            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 bg-terra-500 rounded-full" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
