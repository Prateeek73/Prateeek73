/**
 * Splits a string into per-character spans so each one can animate on its own
 * delay. Spaces are rendered as non-breaking so the stagger doesn't collapse
 * whitespace, and the whole string is exposed to assistive tech as one label
 * rather than a stream of single letters.
 */
export default function RevealText({
  text,
  as: Tag = 'span',
  cinematic = false,
  step,
  startIndex = 0,
  className = '',
}) {
  const charClass = cinematic ? 'reveal-char reveal-char--cinematic' : 'reveal-char'
  const defaultStep = cinematic ? '40ms' : '28ms'

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">
        {Array.from(text).map((char, i) => (
          <span
            key={`${char}-${i}`}
            className={charClass}
            style={{ '--index': startIndex + i, '--reveal-step': step ?? defaultStep }}
          >
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </span>
    </Tag>
  )
}
