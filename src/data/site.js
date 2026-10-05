export const site = {
  name: 'Prateek Singh',
  firstName: 'Prateek',
  lastName: 'Singh',
  role: 'AI/ML Engineer',
  tagline:
    'I care about what happens after the demo — getting models served, monitored and kept up in production.',
  location: 'Houston, TX',
  summary:
    'AI/ML engineer working on LLM inference and the infrastructure under it. Houston, TX.',
  email: 'pra73ek.singh@gmail.com',

  // Short code shown top-right of the sidebar identity block.
  locationCode: 'TX',

  // The mono status line under the name, next to the tx/rx dots. Keep it to
  // about 25 characters — any longer wraps at the narrowest sidebar width.
  statusLine: 'LLM Inference & Infra',

  // The photo lives at public/avatar.jpg. Each candidate is tried in turn and
  // the sidebar falls back to the monogram, so a missing file never renders
  // broken.
  avatarCandidates: ['avatar.jpg', 'avatar.jpeg', 'avatar.png', 'avatar.webp'],
  monogram: 'PS',

  // Shown next to the pulsing tx/rx dots on the home page.
  availability: {
    status: 'Open to work',
    detail: 'Full-time AI/ML, ML infrastructure and backend roles',
  },

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
    blurb:
      'Pareto Labs, Michigan Tech, Capgemini, KIET. LLM infrastructure, ML on HPC, Spring Boot at scale.',
  },
  {
    to: '/projects',
    id: 'projects',
    name: 'Projects',
    blurb: 'Applied ML, infrastructure, and research.',
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
    to: '/references',
    id: 'references',
    name: 'References',
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
export const pages = [{ to: '/gallery', name: 'Photography' }]

export const colophon = {
  text: 'Geist',
  display: 'Instrument Serif',
  mono: 'JetBrains Mono',
  note: 'Built with React, Vite, and Tailwind. Served from GitHub Pages.',
}
