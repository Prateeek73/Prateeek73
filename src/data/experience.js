// Grouped by employer, with roles nested underneath. `defaultOpen` decides which
// role is expanded on load — the most recent one, so the page opens on what
// matters.
//
// A highlight may lead with a linked `term`; everything else is plain text with
// an optional `metric` rendered in the accent colour.
export const experience = [
  {
    id: 'mtu',
    org: 'Michigan Technological University',
    orgUrl: 'https://www.mtu.edu/',
    location: 'Michigan, USA',
    period: 'May 2025 — Apr 2026',
    roles: [
      {
        id: 'mtu-gre',
        title: 'Graduate Research Engineer',
        period: 'May 2025 — Apr 2026',
        mode: 'On-site',
        defaultOpen: true,
        highlights: [
          {
            term: 'FragBERTa',
            termUrl: 'https://kaushallab.mtu.edu/fragberta/',
            text: ' — built an end-to-end production inference tool for a fragment-aware molecular property prediction model, FastAPI backend and React frontend, letting researchers query molecular structures in batch or interactively across the MoleculeNet benchmarks (ESOL, FreeSolv, HIV, Tox21) without touching the model. Returns',
            metric: '1k+ compounds in under 90 seconds',
          },
          {
            term: 'nuGAN',
            termUrl: 'https://kaushallab.mtu.edu/nugan/',
            text: ' — productionized a deep-learning cosmological simulator as a full-stack platform on the HPC cluster via Flask, Gunicorn and Nginx with SSL termination and rate limiting, so researchers can generate and store 512×512 cosmic web maps conditioned on neutrino masses without manual scripting. Implemented async job queuing, checkpoint management and a real-time visualization pipeline.',
          },
          {
            text: 'Owned hosting and deployment for every product in the ',
            term: 'lab',
            termUrl: 'https://www.kaushallab.mtu.edu/home',
            termAfter: ' on the university HPC cluster — the full stack around each model, not just the model.',
          },
          {
            text: "Migrated the lab's public site off Google Sites onto a React SPA hosted on cPanel, coordinating the DNS migration with university IT, improving load speed and giving the lab full content ownership.",
          },
          {
            text: 'Trained undergraduate and graduate students to take the role over.',
          },
        ],
        stack: [
          'Python',
          'FastAPI',
          'PyTorch',
          'Transformers',
          'React',
          'Flask',
          'Gunicorn',
          'Nginx',
          'SSL/TLS',
          'cPanel',
          'HPC Deployment',
        ],
      },
    ],
  },
  {
    id: 'capgemini',
    org: 'Capgemini',
    orgUrl: 'https://www.capgemini.com/',
    location: 'Bangalore, India',
    period: 'Dec 2021 — Jul 2024',
    roles: [
      {
        id: 'capgemini-swe',
        title: 'Software Engineer',
        period: 'Dec 2021 — Jul 2024',
        mode: 'On-site',
        client: 'Fintech client',
        defaultOpen: false,
        highlights: [
          {
            text: 'Engineered a Spring Boot microservice for payment and subscription management with core banking integration and SCA flows, serving',
            metric: '4M users at 99.99% availability',
          },
          {
            text: 'Architected async data pipelines on Kafka (MSK) and Amazon SQS, offloading',
            metric: '2,250 req/s',
            after: 'and cutting core-path traffic by 45% while holding p99 latency under 480ms through surges.',
          },
          {
            text: 'Implemented multi-tier caching across Redis and DynamoDB, absorbing 75% of traffic at a',
            metric: '97.2% hit rate under 5ms p95',
          },
          {
            text: 'Deployed a Prometheus and Grafana observability stack with custom alerting, cutting mean time to detect.',
          },
          {
            text: 'Containerized 12+ microservices on AWS EKS with',
            metric: '200+ zero-downtime Blue/Green deployments',
            after: 'and full rollback in under 60 seconds.',
          },
          {
            text: 'Built an internal attendance platform with geolocation and secure image capture that improved compliance by 87%, then led its integration with existing HR systems via role-based REST dashboards, cutting HR audit effort by',
            metric: '60%',
          },
        ],
        stack: [
          'Java',
          'Spring Boot',
          'Microservices',
          'Apache Kafka',
          'Amazon SQS',
          'Redis',
          'DynamoDB',
          'AWS EKS',
          'Docker',
          'Prometheus',
          'Grafana',
        ],
      },
    ],
  },
  {
    id: 'kiet',
    org: 'KIET Group of Institutions',
    orgUrl: 'https://www.kiet.edu/',
    location: 'Ghaziabad, India',
    period: 'Jun 2019 — Jun 2022',
    roles: [
      {
        id: 'kiet-fullstack',
        title: 'Full Stack Developer',
        period: 'Jun 2019 — Jun 2022',
        mode: 'Part-time',
        defaultOpen: false,
        highlights: [
          {
            text: 'Shipped MobiKIET, a mobile ERP with',
            metric: '10K+ daily active users',
          },
          {
            text: 'Built the student and faculty modules in React Native and Java, integrating the REST APIs behind them.',
          },
        ],
        stack: ['React Native', 'Java', 'REST APIs'],
      },
    ],
  },
]
