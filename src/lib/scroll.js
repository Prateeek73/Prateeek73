// 'smooth' unless the visitor has asked the system for reduced motion. Read at
// call time rather than once at load, so changing the setting takes effect
// without a reload.
export function scrollBehavior() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'auto'
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}
