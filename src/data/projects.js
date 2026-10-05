// Ported from the old /projects/ page. `url: null` means there is no public repo
// to point at — those render unlinked, with a hollow marker rather than a code
// link.
//
// Order is display order, and only the first five show before "Show all" — so
// the work worth seeing first goes at the top.
//
// Two repo names carry upstream typos ("Energey", "Predection"). They are correct
// as written; fixing the spelling here would break the links.
export const projects = [
  {
    id: 'pareto-platform',
    kind: 'Professional',
    title: 'Pareto Cloud Platform',
    blurb:
      'A cloud platform built from scratch, where teams deploy apps on Firecracker microVMs, run GPU workloads and use managed Postgres, key-value, object storage and vector search from one console. I wrote every layer: the Rust control plane, node and guest agents, HTTPS ingress, observability and the React console.',
    metric: 'Pooled Postgres 8.8k → 38.8k TPS (4.4×) after a 20-hour stress test',
    tags: [
      'Rust',
      'Firecracker',
      'PostgreSQL',
      'pgvector',
      'Docker',
      'React',
      'Prometheus',
      'Grafana',
      'Distributed Systems',
    ],
    // Company code — private, so there is nothing public to link to.
    url: null,
  },
  {
    id: 'fragberta',
    kind: 'Professional',
    title: 'FragBERTa',
    blurb:
      'Productionizes a fine-tuned 110M-parameter BERT model so researchers can screen compounds at scale, over FastAPI and React on HPC infrastructure.',
    metric: '1k+ compounds in under 90 seconds',
    tags: ['Python', 'FastAPI', 'PyTorch', 'Transformers', 'React', 'HPC Deployment'],
    // Lab research — the code is not public, so there is nothing to link to.
    url: null,
  },
  {
    id: 'nugan',
    kind: 'Professional',
    title: 'nuGAN — serving layer',
    // The emulator itself is Neerav Kaushal's research (neeravkaushal/nuGAN).
    // What is mine is the applet around it, so no PyTorch tag: I did not train
    // the model.
    blurb:
      "A web applet over Neerav Kaushal's cosmic-web emulator — pick a neutrino mass, get the matching 2D density map back. I built the Flask, Gunicorn and Nginx service and the frontend on the HPC cluster.",
    tags: ['Python', 'Flask', 'Nginx', 'HPC Deployment'],
    url: 'https://kaushallab.mtu.edu/nugan/',
  },
  {
    id: 'blt-chess',
    kind: 'Personal',
    title: 'MessBot — Byte Latent Transformer Chess Engine',
    // Follows the repo README. GitHub's one-line repo description still says
    // "AB search via depth and Heuristics"; in the README, search survives only
    // as a shallow minimax choosing among sampled candidates during self-play.
    blurb:
      'A character-level Byte Latent Transformer that plays chess by predicting the next PGN characters instead of searching bitboards, with constrained decoding that masks illegal moves against python-chess at generation time. It trains through STaR self-play on a Docker Swarm, where a shallow minimax picks among sampled candidate moves, and plays humans live through the Lichess API.',
    tags: ['C++', 'Python', 'PyTorch', 'Transformers', 'Reinforcement Learning', 'Docker Swarm'],
    url: 'https://github.com/Prateeek73/MessBot',
  },
  {
    id: 'sql-practice',
    kind: 'Personal',
    // The repo is named SQL-Cheat-Sheet; the title follows its README.
    title: 'SQL Practice — 113 Queries on Real Data',
    blurb:
      'An interview-prep environment: five real Kaggle datasets loaded whole into five SQLite databases, with 113 progressively harder queries — revenue and RFM, churn risk, pay equity, fraud thresholds — and a Python pipeline that rebuilds the questions site from the SQL that actually runs.',
    metric: '113/113 queries execute · 0 errors · 0 empty results',
    tags: ['SQL', 'SQLite', 'Python'],
    url: 'https://github.com/Prateeek73/SQL-Cheat-Sheet',
  },
  {
    id: 'multi-agent-refactor',
    kind: 'Professional',
    title: 'RefAgent Evaluation Study',
    blurb:
      'An independent evaluation of RefAgent, a multi-agent LLM framework for software refactoring — replicating and extending the original study across model variations on open-source Java repositories.',
    metric: 'Median 52.5% code-smell reduction · 90% unit-test pass rate',
    tags: ['Python', 'LLMs', 'Agentic AI', 'Java', 'Static Analysis'],
    url: null,
    status: 'In progress',
  },
  {
    id: 'lmforge-rag',
    kind: 'Professional',
    title: 'LMForge — RAG Financial Q&A',
    blurb:
      'An end-to-end RAG chatbot over 3,000+ pages of financial books, SEC filings and research, with structure-aware PDF segmentation by chapter, section and topic.',
    metric: '85% chunking accuracy',
    tags: ['Python', 'Django', 'RAG', 'LLMs', 'Qdrant'],
    url: 'https://github.com/Prateeek73/LMForge_RAG',
  },
  {
    id: 'spark-gpu',
    kind: 'Personal',
    title: 'GPU-Accelerated Spark Pipeline',
    blurb:
      'A distributed deep-learning pipeline on HDFS and Spark 3.5.0 training a VGG-style CNN over 20,000+ COCO images, using chunk-based RDD loading and disk-serialized batching to eliminate out-of-memory failures.',
    metric: '97.37% train / 56.26% val in under 19 minutes',
    tags: ['Apache Spark', 'Python', 'TensorFlow', 'HDFS', 'Distributed Systems'],
    url: 'https://github.com/Prateeek73/SP4',
  },
  {
    id: 'mormon-nlt',
    kind: 'Personal',
    title: 'Mormon-NLT',
    blurb:
      'Modern English to Shakespearean style transfer on Qwen2.5-3B-Instruct — six experiments across training direction, LoRA rank and learning rate over a 27K+ pair dataset, showing LoRA matches full fine-tuning at 100× fewer parameters (26M vs 1.54B).',
    metric: '0.8405 LoRA vs 0.8415 full fine-tune BERTScore',
    tags: ['Python', 'PyTorch', 'Transformers', 'LLMs', 'Hugging Face', 'PEFT', 'LoRA'],
    url: 'https://github.com/Prateeek73/Mormon-NLT',
  },
  {
    id: 'fibroblast-unet',
    kind: 'Professional',
    title: 'U-Net vs. Lightweight CNN',
    blurb:
      'Wound-area segmentation on microscopy images, benchmarking a U-Net against a lightweight CNN.',
    metric: '0.914 Dice score',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning'],
    url: 'https://github.com/Prateeek73/Investigating-Fibroblast-Migration-Using-Deep-Learning',
  },
  {
    id: 'pjme-sarima',
    kind: 'Personal',
    title: 'PJM Energy Forecasting',
    blurb: 'SARIMA forecasting on PJM hourly energy consumption across 140K+ records.',
    metric: '77.8% R², 4.45% MAPE',
    tags: ['Python', 'Time Series', 'Scikit-learn'],
    url: 'https://github.com/Prateeek73/PJME_Energey_Consumption_Analysis',
  },
  {
    id: 'housing-price',
    kind: 'Personal',
    title: 'Housing Price Prediction',
    blurb: 'Regression modelling on housing market data.',
    metric: 'R² 0.7357',
    tags: ['Python', 'Scikit-learn', 'SQL'],
    url: 'https://github.com/Prateeek73/Housing-Price-Predection',
  },
  {
    id: 'surface-temp',
    kind: 'Personal',
    title: 'Surface Temperature Analysis',
    blurb: 'Plotly visualizations of global temperature trends over time.',
    tags: ['Python', 'Plotly', 'Data Visualization'],
    url: 'https://github.com/Prateeek73/Surface-Temperature-Analysis',
  },
  {
    id: 'glucose-bayesian',
    kind: 'Personal',
    title: 'Bayesian Glucose Mixture Model',
    blurb:
      'A mixture model of plasma glucose fitted with Gibbs sampling in JAGS.',
    tags: ['R', 'Bayesian Statistics', 'JAGS'],
    url: 'https://github.com/Prateeek73/Glucose-Bayesian-Analysis',
  },
]

export const projectKinds = ['All', 'Personal', 'Professional']
