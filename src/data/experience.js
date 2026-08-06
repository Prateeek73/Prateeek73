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
            text: ' — research users needed self-serve access to a fine-tuned 110M-parameter BERT model for molecular property prediction. Owned productionization end to end, FastAPI backend through React frontend to HPC deployment, delivering batch inference over',
            metric: '1k+ compounds in under 90 seconds',
          },
          {
            term: 'nuGAN',
            termUrl: 'https://kaushallab.mtu.edu/nugan/',
            text: ' — a GAN-based cosmological simulator existed only as research code. Shipped it as a full-stack web application on the HPC cluster via Flask, Gunicorn and Nginx with SSL termination and rate limiting, enabling real-time 512×512 map generation.',
          },
          {
            text: 'Owned hosting and deployment for every product in the ',
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
        title: 'Senior Software Engineer (Backend & Cloud Platform)',
        period: 'Sep 2022 — Jul 2024',
        mode: 'On-site',
        client: 'Fintech client',
        defaultOpen: false,
        highlights: [
          {
            text: "The client's fintech platform had run on a mainframe for the better part of two decades. Capgemini was brought in to move the whole stack to a cloud-native architecture on AWS with an Angular front end; my team owned two of its core features.",
          },
          {
            text: 'Owned the critical Spring Boot microservices behind offer delivery to millions of users — creation, validation and distribution, plus personalized recommendations and automated payment and subscription management.',
          },
          {
            text: 'Scaled the platform to',
            metric: '1M+ requests/min at 99.99% uptime',
            after: 'with horizontal autoscaling and graceful degradation through peak campaign windows.',
          },
          {
            text: 'Asynchronous pipelines on Amazon SQS and Kafka cut synchronous load by',
            metric: '45%',
            after: 'and enabled near-linear horizontal scalability.',
          },
          {
            text: 'Multi-layer caching across Redis and DynamoDB/RDS cut database read load by',
            metric: '75%',
            after: 'and stabilised response times at peak.',
          },
          {
            text: 'Prometheus and Grafana instrumentation tracking p95/p99 latency, error rates and throughput pulled',
            metric: 'mean time to detect from hours to minutes',
          },
          {
            text: 'Containerized services onto AWS ECS/EKS, reaching zero-downtime rolling deployments across staging and production.',
          },
          {
            text: 'WebSocket real-time updates replaced 30-second client polling, cutting redundant API calls by',
            metric: '60%',
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
          'WebSockets',
          'Prometheus',
          'Grafana',
        ],
      },
      {
        id: 'capgemini-swe',
        title: 'Software Engineer (Full Stack)',
        period: 'Dec 2021 — Aug 2022',
        mode: 'Hybrid',
        client: 'EMS client · internal platform',
        defaultOpen: false,
        highlights: [
          {
            text: 'Built the EMS microservices for a Mercedes in-car system.',
          },
          {
            text: 'Built the internal attendance management platform for the global workforce across the NA and EU servers, increasing compliance by',
            metric: '87%',
          },
          {
            text: 'Integrated geolocation APIs to capture precise employee coordinates through browser-based tracking.',
          },
          {
            text: 'Implemented secure image capture with Base64 encoding, stored in PostgreSQL.',
          },
          {
            text: 'Designed centralized exception handling and logging for system observability.',
          },
          {
            text: 'Built Angular dashboards and the API communication layers behind them, visualising productivity data in real time.',
          },
        ],
        stack: [
          'Java',
          'Spring Framework',
          'Angular',
          'PostgreSQL',
          'REST APIs',
          'Geolocation APIs',
        ],
      },
    ],
  },
]
