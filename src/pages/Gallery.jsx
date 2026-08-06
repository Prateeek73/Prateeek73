import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import MonoLabel from '../components/MonoLabel'
import { gallery, site } from '../data'

const BASE = import.meta.env.BASE_URL

export default function Gallery() {
  const [open, setOpen] = useState(null)
  // Remembered so focus can go back to the tile that opened the lightbox.
  const triggers = useRef([])

  useEffect(() => {
    document.title = `Photography — ${site.name}`
  }, [])

  const close = () => {
    const i = open
    setOpen(null)
    triggers.current[i]?.focus()
  }

  const step = (delta) =>
    setOpen((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length))

  return (
    <div className="mx-auto max-w-[1040px] lg:mx-0">
      <div className="flex items-baseline justify-between gap-4">
        <MonoLabel>
          <Link to="/" className="transition-colors duration-200 hover:text-accent">
            ← Index
          </Link>
          <span className="px-2 text-text-faint">·</span>
          Photography
        </MonoLabel>
        <MonoLabel className="tabular-nums">
          {String(gallery.length).padStart(2, '0')} photos
        </MonoLabel>
      </div>

      <h1 className="mt-3 font-display text-[44px] italic leading-[1.02] tracking-tight text-text sm:text-[52px]">
        Photography
      </h1>

      <div className="mt-6 h-px w-full bg-rule" aria-hidden="true" />

      <p className="mt-8 max-w-xl text-[14.5px] leading-relaxed text-text-muted">
        A hobby, not a portfolio. Mostly streets, weather and whatever the walk
        home looked like.
      </p>

      {/* CSS columns rather than a grid: the photos are a mix of portrait,
          landscape and square, and columns let each keep its own ratio instead
          of being cropped to a common one. */}
      <div className="mt-10 gap-3 [column-count:2] sm:[column-count:3] lg:[column-count:3] xl:[column-count:4]">
        {gallery.map((photo, i) => (
          <button
            key={photo.id}
            ref={(el) => (triggers.current[i] = el)}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open photo ${i + 1} of ${gallery.length}`}
            className="mb-3 block w-full break-inside-avoid overflow-hidden border border-transparent transition-colors duration-200 hover:border-accent focus-visible:border-accent"
          >
            <img
              src={`${BASE}${photo.thumb}`}
              alt=""
              // Real dimensions so the column reserves the right height before
              // the image decodes — without these the grid reflows as it loads.
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-cover grayscale transition-[filter,transform] duration-500 hover:scale-[1.02] hover:grayscale-0"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <Lightbox photos={gallery} index={open} onClose={close} onStep={step} />
      )}
    </div>
  )
}
