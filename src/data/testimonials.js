// Real, named people who can speak to Prateek's work. Everything below is fact
// he supplied or that is verifiable on the linked profile. The References
// section lists every person here; a quote appears under someone only once it
// is in `quote`.
//
// `draftQuote` never renders — it is a starting point written from the real
// shared history, meant to be sent to that person to edit and approve. Once
// they have signed off, move the text into `quote` and the page picks it up.
//
// The split exists because these are identifiable people linked from the page:
// until someone has actually approved the words, publishing them under their
// name states something they have not said.
export const references = [
  {
    id: 'naman-mahendra',
    name: 'Naman Mahendra',
    title: 'SDE 3',
    org: 'Blinkit',
    relationship: 'Co-built Orion across three years of undergrad',
    quote: '',
    draftQuote:
      "Prateek and I co-built Orion across three years of undergrad, which is a long time to build something alongside one person. I worked with him closely through that whole stretch, and I am glad to talk about that work with anyone considering him.",
  },
  {
    id: 'sarvesh-viraktamath',
    name: 'Sarvesh L Viraktamath',
    title: 'Senior Software Engineer',
    org: 'Capgemini',
    relationship: 'Dual team leads · six developers between us',
    quote: '',
    draftQuote:
      "Prateek and I led the team together at Capgemini — two leads over six developers. Splitting a lead role in half only works if neither person is precious about it, and he never was. He would take the unglamorous half of a problem without being asked, and he was who the team went to when something in production did not add up.",
    url: 'https://www.linkedin.com/in/sarvesh-l-viraktamath/',
  },
  {
    id: 'harsh-mishra',
    name: 'Harsh Mishra',
    org: 'KIET Group of Institutions',
    relationship: 'ERP team together, three years · I owned mobile, he owned web',
    quote: '',
    draftQuote:
      "Prateek and I were on the ERP team at KIET for three years. I ran the web side and he owned mobile, building the student and faculty modules in React Native and Java for MobiKIET, which ended up with 10K+ daily active users.",
    url: 'https://www.linkedin.com/in/harsh-mishra-060911/',
  },
  {
    id: 'neerav-kaushal',
    name: 'Neerav Kaushal',
    title: 'Assistant Professor, Applied Computing',
    org: 'Michigan Technological University',
    relationship: 'Lab work at Michigan Tech · nuGAN applet and the lab site',
    quote: '',
    draftQuote:
      "Prateek migrated the lab's public site off Google Sites onto a React app on cPanel, working through the DNS change with university IT. He also put our nuGAN emulator behind a simple applet: pick a neutrino mass, get the density map back. He treats research software as something other people must be able to use.",
    url: 'https://www.linkedin.com/in/neerav-kaushal/',
  },
  {
    id: 'jie-wu',
    name: 'Jie Wu',
    title: 'Assistant Professor, Computer Science',
    org: 'Michigan Technological University',
    relationship: 'Advising the agentic code-refactoring research',
    quote: '',
    // Deliberately narrow, and about process rather than results. Wu's own
    // recorded assessment of the output is that it is incomplete, so a draft
    // praising the results would be one he could not honestly sign.
    draftQuote:
      "Prateek worked with me on replicating and extending RefAgent, a multi-agent LLM framework for Java refactoring. He served the open model behind it with vLLM, and he reported the numbers his runs actually gave, not the ones we hoped for. He raised reproduction problems early enough for us to change direction.",
    url: 'https://www.linkedin.com/in/jiewu3/',
  },
]
