// Colour is a prop rather than an overriding class: MonoLabel's own colour class
// and an appended one would have equal specificity, so which wins would depend on
// stylesheet order rather than on intent.
const tones = {
  faint: 'text-text-faint',
  muted: 'text-text-muted',
  accent: 'text-accent',
}

/** The small uppercase mono label that heads each block. */
export default function MonoLabel({
  children,
  as: Tag = 'div',
  tone = 'faint',
  className = '',
}) {
  return (
    <Tag
      className={`font-mono text-[10px] uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {children}
    </Tag>
  )
}

/** Label with a hairline rule running to the end of the row. */
export function RuledLabel({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <MonoLabel className="shrink-0">{children}</MonoLabel>
      <span className="h-px flex-1 bg-rule" aria-hidden="true" />
    </div>
  )
}
