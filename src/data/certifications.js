// The four credential documents attached to the internship roles on LinkedIn.
// They are hosted there rather than on a public verification endpoint, so each
// links to the profile instead of a credential URL.
const LINKEDIN = 'https://www.linkedin.com/in/pra73ek-singh/details/certifications/'

export const certifications = [
  {
    id: 'ibm-internship',
    name: 'Internship Certificate',
    issuer: 'IBM',
    context: 'Data Analyst',
    issued: 'Aug 2021',
    url: LINKEDIN,
  },
  {
    id: 'twowaits-internship',
    name: 'Internship Certificate',
    issuer: 'TwoWaits',
    context: 'Data Science and ML Intern',
    issued: 'Jul 2021',
    url: LINKEDIN,
  },
  {
    id: 'cureeya-internship',
    name: 'Internship Certificate',
    issuer: 'CUREEYA',
    context: 'Data Analyst',
    issued: 'Jul 2021',
    url: LINKEDIN,
  },
  {
    id: 'cureeya-lor',
    name: 'Letter of Recommendation',
    issuer: 'CUREEYA',
    context: 'Data Analyst',
    issued: 'Jul 2021',
    url: LINKEDIN,
  },
]
