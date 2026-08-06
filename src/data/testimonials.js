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
    title: '',
    org: 'Capgemini',
    relationship: 'Worked together at Capgemini',
    quote: '',
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
    relationship: 'Faculty at Michigan Tech',
    quote: '',
    // Found by search, not confirmed by Prateek — verify before relying on it.
    url: 'https://www.linkedin.com/in/neerav-kaushal/',
  },
  {
    id: 'jie-wu',
    name: 'Jie Wu',
    title: 'Assistant Professor, Computer Science',
    org: 'Michigan Technological University',
    relationship: 'Faculty at Michigan Tech',
    quote: '',
    // Found by search, not confirmed by Prateek — verify before relying on it.
    url: 'https://www.linkedin.com/in/jiewu3/',
  },
]
