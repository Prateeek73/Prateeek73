// Grouped by employer, with roles nested underneath. `defaultOpen` decides which
// role is expanded on load — the current one, so the page opens on what matters.
//
// A highlight may lead with a linked `term`; everything else is plain text with
// an optional `metric` rendered in the accent colour.
export const experience = [
  {
    id: 'mtu',
    org: 'Michigan Technological University',
    orgUrl: 'https://www.mtu.edu/',
    location: 'Michigan',
    period: 'May 2025 — Present',
    roles: [
      {
        id: 'mtu-gre',
        title: 'Graduate Research Engineer',
        period: 'May 2025 — Present',
        mode: 'On-site',
        current: true,
        defaultOpen: true,
        highlights: [
          {
            term: 'FragBERTa',
            termUrl: 'https://kaushallab.mtu.edu/fragberta/',
            text: ' — productionized a fine-tuned 110M-parameter BERT model as a FastAPI service with a React frontend on HPC infrastructure, returning batch inference over',
            metric: '1k+ compounds in under 90 seconds',
          },
          {
            term: 'nuGAN',
            termUrl: 'https://kaushallab.mtu.edu/nugan/',
            text: ' — shipped a GAN-based cosmological simulator behind Flask, Gunicorn and Nginx with SSL termination and rate limiting.',
          },
          {
            text: 'Own hosting and deployment for every product in the ',
            term: 'lab',
            termUrl: 'https://www.kaushallab.mtu.edu/home',
            termAfter: ' on the university HPC cluster — the full stack around each model, not just the model.',
          },
          {
            text: 'Migrated the lab site onto a React SPA, coordinating the DNS handover with university IT.',
          },
          {
            text: 'Trained undergraduate and graduate students to take the role over.',
          },
        ],
        stack: [
          'Python',
          'FastAPI',
          'PyTorch',
          'React',
          'Flask',
          'Gunicorn',
          'Nginx',
          'HPC',
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
        title: 'Software Engineer → Senior Software Engineer',
        period: 'Dec 2021 — Jul 2024',
        mode: 'On-site',
        defaultOpen: false,
        highlights: [
          {
            text: 'Worked directly with the client to pull requirements out of ambiguity and turn deliverables around at the fastest workable resolution.',
          },
          {
            text: 'Led the Spring Boot microservices behind a personalized-offer platform for a fintech client, scaling to',
            metric: '1M+ requests/min at 99.99% uptime',
            after: 'with horizontal autoscaling and graceful degradation.',
          },
          {
            text: 'Built personalized recommendations and automated billing and subscription management on the same platform.',
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
          {
            text: 'Built an internal attendance portal for the organisation, off the back of earlier ERP systems work.',
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
          'Lambda',
          'Prometheus',
          'Grafana',
        ],
      },
    ],
  },
]
