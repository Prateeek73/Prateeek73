// Real, named people who can speak to Prateek's work. Everything below is fact
// he supplied or that is verifiable on the linked profile.
//
// `quote` is what renders. `draftQuote` does not render — it is a starting point
// written from the real shared history, meant to be sent to that person to edit
// and approve. Once they have signed off, move the text into `quote` and the page
// picks it up.
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
      "Prateek and I built Orion together across three years of undergrad, second year through to final — an Android community for artists, put together around coursework and everything else going on. He took on the parts nobody volunteers for, the ones that have to keep working when you are not looking at them. What stuck with me is that he would rather understand why a feature mattered than start writing it, which is not a common instinct at that stage.",
    url: '',
  },
  {
    id: 'sarvesh-viraktamath',
    name: 'Sarvesh L Viraktamath',
    title: 'Senior Software Engineer',
    org: 'Capgemini',
    relationship: 'Dual team leads · six developers between us',
    quote: '',
    draftQuote:
      "Prateek and I led the team together at Capgemini — two leads over six developers on the offer platform. Splitting a lead role in half only works if neither person is precious about it, and he never was. He would take the unglamorous half of a problem without being asked, and he was who the team went to when something in production did not add up.",
    url: 'https://www.linkedin.com/in/sarvesh-l-viraktamath/',
  },
  {
    id: 'harsh-mishra',
    name: 'Harsh Mishra',
    title: '',
    org: 'KIET Group of Institutions',
    relationship: 'ERP team together, three years · I owned mobile, he owned web',
    quote: '',
    draftQuote:
      'We joined the ERP team at KIET at the same time and worked alongside each other for three years — I ran the web side, Prateek the mobile. Between us we kept access and academic records running for the whole institution, and trained the students who took over after us. He was the one who would sit with a student until it clicked rather than just fixing it himself.',
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
      'Prateek rebuilt the lab’s web presence and put our nuGAN emulator behind an interface people can actually use — you pick a neutrino mass and get the density map back, where before that meant running the code yourself. He moved through drafts quickly and took the hosting and DNS side off my hands entirely. It is useful having someone who treats research software as something that has to be usable by other people.',
    // Found by search, not confirmed by Prateek — verify before relying on it.
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
      'Prateek worked in my group on reproducing a published multi-agent refactoring benchmark. He built the experiment infrastructure around it — the compiler and test-generation agents, per-commit prebuilds — and got most of the target repositories running. What I valued was that he reported the numbers he actually got rather than the ones we were hoping for, and raised the reproduction problems early enough for us to change direction.',
    // Found by search, not confirmed by Prateek — verify before relying on it.
    url: 'https://www.linkedin.com/in/jiewu3/',
  },
]
