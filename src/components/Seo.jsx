import { useEffect } from 'react'
import { site } from '../data'

// No trailing slash: paths passed to <Seo path="/experience"> supply their own.
const BASE_URL = 'https://prateeek73.github.io/Prateeek73'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Client-side <head> updates for each route. Crawlers that execute JS pick these
 * up; the ones that don't still get the full set of tags baked into index.html.
 */
export default function Seo({ title, description, path }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`
    document.title = fullTitle
    setMeta('meta[name="title"]', 'content', fullTitle)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="twitter:title"]', 'content', fullTitle)

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
      setMeta('meta[property="twitter:description"]', 'content', description)
    }

    if (path) {
      const url = `${BASE_URL}${path}`
      setMeta('link[rel="canonical"]', 'href', url)
      setMeta('meta[property="og:url"]', 'content', url)
      setMeta('meta[property="twitter:url"]', 'content', url)
    }
  }, [title, description, path])

  return null
}
