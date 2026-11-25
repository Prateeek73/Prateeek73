// Grouped by employer, with roles nested underneath. `defaultOpen` decides which
// role is expanded on load — the most recent one, so the page opens on what
// matters. `location` is optional. An employer with no public site leaves out `orgUrl` and its name
// renders as plain text.
//
// A highlight may lead with a linked `term`; everything else is plain text with
// an optional `metric` rendered in the accent colour.
export const experience = [
  {
    id: 'pareto',
    org: 'Pareto Labs',
    location: 'Remote',
    period: 'Aug 2026 — Present',
    roles: [
      {
        id: 'pareto-founding-ml',
        title: 'Founding ML Researcher Intern',
        period: 'Aug 2026 — Present',
        current: true,
        defaultOpen: true,
        // Built and verified features only — planned work that does not run yet
        // stays off until it does. The owner has chosen to publish the platform's
        // components and figures on the site; the profile README stays at the
        // shorter public wording.
        highlights: [
          {
            text: 'Designing the infrastructure for a data center that will serve LLM inference endpoints to clients: provisioning, the control plane, a vLLM-based inference core and per-tenant metering. Built the platform under it from scratch and wrote every layer — a Rust control plane with a Firecracker microVM runtime, node and guest agents, an HTTPS ingress, the databases, observability and the React console.',
          },
          {
            text: 'Apps on Firecracker microVMs from any registry image, with rolling deploys, health checks, autoscaling and private .internal service names; GPU apps in hardened containers with a CPU fallback when no GPU is free; and compose-style stacks that put a full-stack deploy behind one address with path routing.',
          },
          {
            text: 'VS Code in the browser inside running app replicas, on any image including Alpine and distroless, because the editor carries its own runtime libraries — plus an SSH gateway into VMs, jobs, sandboxes and a SLURM-style GPU batch queue.',
          },
          {
            text: 'Managed Postgres with a SQL console, data browser, backups and restore, public access over TLS with IP allowlists, and a Supabase-style data API (PostgREST + JWT) so apps hosted elsewhere, such as on Vercel, can use the databases directly. Alongside it, key-value stores each on their own Valkey instance, S3-compatible object storage on Garage with per-bucket keys, and pgvector stores.',
          },
          {
            text: 'A data-ingestion product that loads CSV, XLSX, JSON, ZIP and API sources into Postgres on schedules, chains pipelines one after another, and skips sources that have not changed.',
          },
          {
            text: "A Rust HTTPS ingress with automatic Let's Encrypt certificates and custom domains, a Postgres TLS proxy, strict tenant isolation enforced in SQL, audit logs, step-up authentication for sensitive actions and secrets encrypted at rest. A Prometheus exporter covers every tenant resource, with Grafana dashboards embedded in the console and scoped per user and project.",
          },
          {
            text: 'Ran a 20-hour stress test of the whole platform (16 findings) and fixed the bottlenecks it exposed — direct connections 20.2k → 51.6k TPS, app throughput 1.6–3.5 → 12.7 req/s, API memory 149 → 22 MiB by switching to jemalloc, and pooled Postgres throughput',
            metric: '8.8k → 38.8k TPS (4.4×)',
          },
          {
            text: 'Prototyped VM pause and resume through Firecracker snapshots, cutting resume time from 15 s to',
            metric: 'about 2 s',
          },
          {
            text: 'About 120k lines of Rust (API 77k, node agent 19k, guest 4k, tests 19k) and 46k of React, across',
            metric: '196 API routes, 40 migrations and ~1,250 automated tests',
          },
        ],
        stack: [
          'Rust',
          'Axum',
          'Tokio',
          'SQLx',
          'Firecracker',
          'KVM',
          'PostgreSQL',
          'PgBouncer',
          'PostgREST',
          'pgvector',
          'Valkey',
          'Garage (S3)',
          'Docker',
          'TLS/ACME',
          'Prometheus',
          'Grafana',
          'React',
        ],
      },
    ],
  },
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
        defaultOpen: false,
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
            text: ' — productionized a deep-learning cosmic-web emulator as a full-stack platform on the HPC cluster via Flask, Gunicorn and Nginx with SSL termination and rate limiting, so researchers can generate and store 512×512 cosmic web maps conditioned on neutrino masses without manual scripting. Implemented async job queuing, checkpoint management and a real-time visualization pipeline.',
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
        id: 'capgemini-senior',
        title: 'Senior Software Engineer',
        period: 'Jan 2024 — Jul 2024',
        mode: 'On-site',
        client: 'Fintech client',
        defaultOpen: false,
        highlights: [
          {
            text: 'Architected async data pipelines on Kafka (MSK) and Amazon SQS, offloading',
            metric: '2,250 req/s',
            after: 'and cutting core-path traffic by 45% while holding p99 latency under 480ms through surges.',
          },
          {
            text: 'Built a Redis cache tier in front of DynamoDB, absorbing 75% of traffic at a',
            metric: '97.2% hit rate under 5ms p95',
          },
          {
            text: 'Deployed a Prometheus and Grafana observability stack with custom alerting, cutting mean time to detect, and templated the dashboards per service so new services inherited them instead of starting blank.',
          },
        ],
        stack: [
          'Java',
          'Spring Framework',
          'Apache Kafka',
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
        period: 'Dec 2021 — Dec 2023',
        mode: 'On-site',
        defaultOpen: false,
        highlights: [
          {
            text: 'Engineered a Spring Boot microservice for payment and subscription management with core banking integration and SCA flows, serving',
            metric: '4M users at 99.99% availability',
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
          'AWS EKS',
          'Docker',
          'Angular',
          'REST APIs',
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
  {
    // The same four internships the career timeline chart draws. A role with no
    // highlights renders as a plain one-line row rather than a collapsible one.
    id: 'internships',
    org: 'Internships',
    period: '2019 — 2021',
    roles: [
      { id: 'intern-twowaits', title: 'Data science intern · TwoWaits', period: '2021' },
      { id: 'intern-cureya', title: 'Data analyst intern · Cureya', period: '2021' },
      { id: 'intern-ibm', title: 'Data analyst intern · IBM', period: '2021' },
      { id: 'intern-spaceboat', title: 'Web developer intern · Spaceboat', period: '2019' },
    ],
  },
]
