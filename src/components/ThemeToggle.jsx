import { useEffect, useState } from 'react'

// The initial value is read off <html>, which the inline script in index.html
// already resolved before paint. Reading it here instead of recomputing keeps
// React and the DOM in agreement on the very first render.
function currentTheme() {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') || 'dark'
}

export default function ThemeToggle({ withLabel = false }) {
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Private browsing with storage disabled — the theme still applies for
      // this page view, it just won't be remembered.
    }
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={
        withLabel
          ? 'flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint transition-colors duration-200 hover:text-accent'
          : 'grid h-8 w-8 place-items-center rounded-full border border-rule text-text-faint transition-colors duration-200 hover:border-accent hover:text-accent'
      }
    >
      {/* Names the theme you would switch to, matching the icon beside it. */}
      {withLabel && <span>{next}</span>}
      {theme === 'dark' ? (
        <svg
          viewBox="0 0 24 24"
          className="h-[14px] w-[14px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-[14px] w-[14px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
