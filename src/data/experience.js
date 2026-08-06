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
    location: 'Michigan, USA',
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
            text: ' — research users needed self-serve access to a fine-tuned 110M-parameter BERT model for molecular property prediction. Owned productionization end to end, FastAPI backend through React frontend to HPC deployment, delivering batch inference over',
            metric: '1k+ compounds in under 90 seconds',
          },
          {
            term: 'nuGAN',
            termUrl: 'https://kaushallab.mtu.edu/nugan/',
            text: ' — a GAN-based cosmological simulator existed only as research code. Shipped it as a full-stack web application on the HPC cluster via Flask, Gunicorn and Nginx with SSL termination and rate limiting, enabling real-time 512×512 map generation.',
          },
          {
            text: 'Own hosting and deployment for every product in the ',
            term: 'lab',
            termUrl: 'https://www.kaushallab.mtu.edu/home',
            termAfter: ' on the university HPC cluster — the full stack around each model, not just the model.',
          },
          {
            text: "Migrated the lab's public site off Google Sites onto a React SPA, coordinating the DNS migration with university IT, improving load speed and giving the lab full content ownership.",
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
        id: 'capgemini-senior',
        title: 'Senior Software Engineer',
        period: 'Sep 2022 — Jul 2024',
        mode: 'On-site',
        defaultOpen: false,
        highlights: [
          {
            text: 'Owned the core Spring Boot microservices behind personalized recommendations for a fintech client — offer creation, validation and distribution — the system their revenue workflows depended on daily.',
          },
          {
            text: 'Built automated payment and subscription management on the same platform.',
          },
          {
            text: 'Peak campaign windows threatened availability; scaled the platform to',
            metric: '1M+ requests/min at 99.99% uptime',
            after: 'with horizontal autoscaling and graceful degradation.',
          },
          {
            text: 'Synchronous processing was the scaling bottleneck; asynchronous pipelines on Amazon SQS, Kafka and parallel workers cut it by',
            metric: '45%',
            after: 'and enabled near-linear horizontal scalability.',
          },
          {
            text: 'Read pressure drove latency spikes under load; multi-layer caching across Redis and DynamoDB/RDS cut read load by',
            metric: '75%',
            after: 'and stabilised response times at peak.',
          },
          {
            text: 'Incidents were being caught hours after impact; Prometheus metrics and Grafana dashboards tracking p95/p99 latency, error rates and throughput pulled mean time to detect down to minutes.',
          },
        ],
        stack: [
          'Java',
          'Spring Boot',
          'Kafka',
          'Amazon SQS',
          'Redis',
          'DynamoDB',
          'Prometheus',
          'Grafana',
        ],
      },
      {
        id: 'capgemini-swe',
        title: 'Software Engineer',
        period: 'Dec 2021 — Aug 2022',
        mode: 'On-site',
        defaultOpen: false,
        highlights: [
          {
            text: 'Built the EMS microservices for a Mercedes in-car system.',
          },
          {
            text: "Built the organisation's internal attendance portal.",
          },
          {
            text: 'Releases needed manual coordination and risked downtime; containerized services onto AWS ECS/EKS with Lambda for event-driven processing and S3 for assets, reaching zero-downtime rolling deployments across staging and production.',
          },
          {
            text: 'Clients polled every 30 seconds for offer status; WebSocket-based real-time updates cut redundant API calls by roughly',
            metric: '60%',
            after: 'at peak.',
          },
          {
            text: 'Partnered with stakeholders to turn ambiguous business objectives into structured technical requirements, and ran root cause analysis on data inconsistencies across services.',
          },
        ],
        stack: [
          'Java',
          'Spring Boot',
          'AWS ECS/EKS',
          'Lambda',
          'Amazon S3',
          'WebSockets',
          'Docker',
        ],
      },
    ],
  },
]
