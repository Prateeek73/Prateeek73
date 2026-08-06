// Ported from the old /projects/ page. `url: null` means there is no public repo
// to point at — those render with a status chip and are deliberately not
// clickable.
//
// Two repo names carry upstream typos ("Energey", "Predection"). They are correct
// as written; fixing the spelling here would break the links.
export const projects = [
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
    status: 'Research',
  },
  {
    id: 'nugan',
    kind: 'Professional',
    title: 'nuGAN',
    blurb:
      'A GAN-based cosmological simulator, deployed with Flask, Gunicorn and Nginx — the same productionization treatment applied to cosmology.',
    tags: ['Python', 'PyTorch', 'Flask', 'Nginx', 'HPC Deployment'],
    // Lab research — the code is not public, so there is nothing to link to.
    url: null,
    status: 'Research',
  },
  {
    id: 'lmforge-rag',
    kind: 'Professional',
    title: 'RAG Document Q&A',
    blurb:
      'Retrieval-augmented question answering over FastAPI and pgVector, with every answer grounded in the source material.',
    tags: ['Python', 'FastAPI', 'RAG', 'LLMs', 'PostgreSQL'],
    url: 'https://github.com/Prateeek73/LMForge_RAG',
  },
  {
    id: 'spark-gpu',
    kind: 'Personal',
    title: 'GPU-Accelerated Spark Pipeline',
    blurb:
      'Distributed image classification across a GPU Spark cluster using data parallelism.',
    metric: '97.37% accuracy on 20k+ COCO images in six minutes',
    tags: ['Apache Spark', 'Python', 'PyTorch', 'Distributed Systems'],
    url: 'https://github.com/Prateeek73/SP4',
  },
  {
    id: 'multi-agent-refactor',
    kind: 'Professional',
    title: 'Multi-Agent LLM Refactoring Pipeline',
    blurb:
      'Runs Designite and RefactoringMiner across Apache repositories and verifies that every proposed change still compiles. The speculative one.',
    tags: ['Python', 'LLMs', 'Agentic AI', 'Java', 'Static Analysis'],
    url: null,
    status: 'In progress',
  },
  {
    id: 'mormon-nlt',
    kind: 'Personal',
    title: 'Mormon-NLT',
    blurb:
      'Compares LoRA adapters against full fine-tuning on Qwen2.5 for Shakespearean style transfer, at roughly a 100× parameter reduction.',
    metric: '0.84 BERTScore F1',
    tags: ['Python', 'PyTorch', 'Transformers', 'LLMs', 'Hugging Face'],
    url: 'https://github.com/Prateeek73/Mormon-NLT',
  },
  {
    id: 'blt-chess',
    kind: 'Personal',
    title: 'MessBot — Byte Latent Transformer Chess Engine',
    // Blurb follows the repo's own description: the model is paired with an
    // alpha-beta search, not used in place of search.
    blurb:
      'A Byte Latent Transformer chess bot, pairing the learned model with alpha-beta search over depth and heuristic objectives.',
    tags: ['C++', 'Transformers'],
    url: 'https://github.com/Prateeek73/MessBot',
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
    id: 'orion',
    kind: 'Personal',
    title: 'Orion',
    blurb:
      'A community platform on Android for artists — sharing work, running competitions, conversations and a leaderboard. Built with Naman Mahendra over final year.',
    tags: ['Java', 'Android', 'Firebase'],
    url: 'https://github.com/Prateeek73/Orion1.0',
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
