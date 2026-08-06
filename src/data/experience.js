// Restructured from the prose on the old /workexp/ page. Every figure below
// appeared there verbatim; none are estimates.
export const experience = [
  {
    id: 'mtu',
    role: 'Graduate Research Engineer',
    org: 'Michigan Technological University',
    orgUrl: 'https://www.mtu.edu/',
    period: 'May 2025 — Present',
    current: true,
    summary:
      'I own the productionization of lab research — taking models that work in a notebook and putting them behind services that other people can actually use.',
    highlights: [
      {
        text: 'Turned a fine-tuned 110M-parameter BERT model into FragBERTa, a FastAPI service with a React frontend on HPC infrastructure, returning batch inference over',
        metric: '1k+ compounds in under 90 seconds',
      },
      {
        text: 'Shipped nuGAN, a GAN-based cosmological simulator, behind Flask, Gunicorn and Nginx with SSL termination and rate limiting.',
      },
      {
        text: 'Migrated the lab site onto a React SPA, coordinating the DNS handover with university IT.',
      },
      { text: 'Mentor two graduate students on ML deployment.' },
    ],
    stack: ['Python', 'FastAPI', 'PyTorch', 'React', 'Flask', 'Gunicorn', 'Nginx', 'HPC'],
  },
  {
    id: 'capgemini',
    role: 'Software Engineer → Senior Software Engineer',
    org: 'Capgemini',
    orgUrl: 'https://www.capgemini.com/',
    location: 'Bangalore',
    period: 'Dec 2021 — Jul 2024',
    summary:
      'Close to three years embedded with a fintech client, on the Spring Boot microservices behind their personalized-offer platform. Joined as a software engineer, left as a senior one.',
    highlights: [
      {
        text: 'Led the microservices behind the offer platform and scaled them to',
        metric: '1M+ requests/min at 99.99% uptime',
        after: 'with horizontal autoscaling and graceful degradation.',
      },
      {
        text: 'Asynchronous pipelines on Amazon SQS, Kafka and parallel workers cut synchronous load by',
        metric: '45%',
      },
      {
        text: 'Multi-layer caching across Redis and DynamoDB/RDS cut read load by',
        metric: '75%',
      },
      {
        text: 'Prometheus and Grafana dashboards tracking p95/p99 latency pulled mean time to detect down from hours to minutes.',
      },
      {
        text: 'Containerized services onto AWS ECS and EKS with Lambda and S3, reaching zero-downtime rolling deployments, and added WebSocket updates that removed roughly',
        metric: '60%',
        after: 'of redundant API calls at peak.',
      },
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Kafka',
      'Amazon SQS',
      'Redis',
      'DynamoDB',
      'AWS ECS/EKS',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    id: 'kiet',
    role: 'ERP Systems Administrator',
    org: 'KIET Group of Institutions',
    orgUrl: 'https://www.kiet.edu/',
    period: 'May 2019 — Nov 2021',
    note: 'Part-time, alongside my undergraduate degree',
    summary:
      'Administered the institution ERP while studying — the first systems I was responsible for keeping up for other people.',
    highlights: [
      {
        text: 'Access provisioning for',
        metric: '1,500+ students and 50+ faculty',
      },
      { text: 'Owned the grade management and academic record modules.' },
    ],
    stack: ['SQL', 'ERP Administration'],
  },
]
