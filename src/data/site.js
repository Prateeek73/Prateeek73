export const site = {
  name: 'Prateek Singh',
  firstName: 'Prateek',
  lastName: 'Singh',
  role: 'Forward-Deployed Engineer',
  tagline:
    'I sit with the people who need the system and ship it end-to-end — 1M+ requests/min in fintech, research models put in front of real users.',
  location: 'Michigan',
  summary:
    'Forward-deployed engineer taking systems from prototype to production. Michigan.',
  email: 'pra73ek.singh@gmail.com',

  // Short code shown top-right of the sidebar identity block.
  locationCode: 'MI',

  // The mono status line under the name, next to the tx/rx dots.
  statusLine: 'Forward-Deployed Engineer',

  // TODO(Prateek): drop the photo into public/ as avatar.jpg (or .png/.jpeg/.webp
  // — each is tried in turn). Until one exists the sidebar shows the monogram,
  // so nothing renders broken either way.
  avatarCandidates: ['avatar.jpg', 'avatar.jpeg', 'avatar.png', 'avatar.webp'],
  monogram: 'PS',

  // Shown next to the pulsing tx/rx dots on the home page.
  availability: {
    status: 'Open to work',
    detail: 'Forward-deployed engineering roles',
  },

  // TODO(Prateek): paste the shareable resume URL (Drive / Dropbox / Overleaf).
  // Left empty on purpose — every surface that renders it checks for a value
  // first, so an unset link is omitted rather than shipped broken.
  resumeUrl: '',

  // `short` is the two-letter code used in the sidebar footer row.
  socials: [
    {
      label: 'GitHub',
      short: 'GH',
      handle: 'Prateeek73',
      href: 'https://github.com/Prateeek73',
    },
    {
      label: 'LinkedIn',
      short: 'LI',
      handle: 'pra73ek-singh',
      href: 'https://www.linkedin.com/in/pra73ek-singh/',
    },
    // Note: the LeetCode handle has one fewer 'e' than the GitHub one.
    {
      label: 'LeetCode',
      short: 'LC',
      handle: 'Prateek73',
      href: 'https://leetcode.com/u/Prateek73/',
    },
    {
      label: 'Email',
      short: 'EM',
      handle: 'pra73ek.singh@gmail.com',
      href: 'mailto:pra73ek.singh@gmail.com',
    },
  ],
}

export const sections = [
  {
    to: '/',
    id: 'about',
    name: 'About',
    blurb: 'Who I am and how I work.',
  },
  {
    to: '/experience',
    id: 'experience',
    name: 'Experience',
    blurb: 'Michigan Tech, Capgemini, KIET. Spring Boot at scale, ML on HPC.',
  },
  {
    to: '/projects',
    id: 'projects',
    name: 'Projects',
    blurb: 'Applied ML, infrastructure, and research — thirteen of them.',
  },
  {
    to: '/skills',
    id: 'skills',
    name: 'Skills',
    blurb: 'Languages, frameworks, and platforms. Tap one to filter projects.',
  },
  {
    to: '/certifications',
    id: 'certifications',
    name: 'Certifications',
    blurb: 'AWS and Azure cloud certifications.',
  },
  {
    to: '/testimonials',
    id: 'testimonials',
    name: 'Testimonials',
    blurb: 'People who can speak to the work.',
  },
  {
    to: '/education',
    id: 'education',
    name: 'Education',
    blurb: 'M.S. Data Science at Michigan Tech, April 2026.',
  },
  {
    to: '/contact',
    id: 'contact',
    name: 'Contact',
    blurb: 'Email, LinkedIn, GitHub. The inbox is open.',
  },
]

// Standalone routes, kept out of the numbered sections so the eight-section
// scroll — its NN/08 counters, arrow-key stepping and scroll-spy — stays intact.
export const pages = [{ to: '/gallery', name: 'Gallery' }]

export const colophon = {
  text: 'Geist',
  display: 'Instrument Serif',
  mono: 'JetBrains Mono',
  note: 'Built with React, Vite, and Tailwind. Served from GitHub Pages.',
}
