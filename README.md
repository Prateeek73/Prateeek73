<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&duration=2800&pause=2000&color=70A5FD&center=true&vCenter=true&width=940&lines=Hey%2C+I'm+Prateek+%F0%9F%91%8B;ML+Engineer+%7C+LLM+Inference+%26+Infra;Founding+ML+Researcher+Intern+%40+Pareto+Labs;PyTorch+%7C+vLLM+%7C+Rust+%7C+GCP" alt="Typing SVG" />
</div>

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=Prateeek73&style=for-the-badge&color=blue" alt="Profile Views"/>
</div>

---

## About Me

I take models from research code to served endpoints, and I care about what happens after the demo: getting them served, monitored and kept up in production.

Public proof: [RefAgent](https://github.com/Prateeek73/java-refactoring-llm-benchmark), which refactored real Java codebases with 90% of its changes still passing their test suites (LLM agents I served with vLLM).

**Right now:** I'm a founding ML researcher intern at Pareto Labs, an LLM inference startup, working on serving open-source LLMs behind an OpenAI-compatible API: the serving infrastructure and its observability. Serving numbers from that work are the company's, not mine to publish, so the charts below show *how* I work there, counted from my own commits only. I'm also replicating and extending RefAgent with a professor at Michigan Tech.

**Before that:** nearly three years at Capgemini as a backend engineer on payment microservices (4M users, 99.99% availability), then an MS in Data Science at Michigan Tech (2024–26) spent turning research models into tools other people could use.

**What I'm good at:** PyTorch, Hugging Face, vLLM, FastAPI, Rust, Kafka, Kubernetes, GCP/AWS.

---

## The path, in five charts

_Where a chart uses the private Pareto repository, it counts only my own commits._

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/01_career_timeline.svg?v=4">
  <img src="graphs/light/01_career_timeline.svg?v=4" width="940" alt="Career timeline, December 2021 to today">
</picture></p>

Backend services kept running at scale; research models turned into tools people could use; open LLMs served in production.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/05_area_share.svg?v=4">
  <img src="graphs/light/05_area_share.svg?v=4" width="940" alt="Share of my code changes by part of the platform">
</picture></p>

Share of my code changes by part of the platform. The backend bucket (36%) includes the serving work; the others are product UI, tests, hosting and build, and docs.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/14_test_ratio.svg?v=4">
  <img src="graphs/light/14_test_ratio.svg?v=4" width="940" alt="Test lines per 100 lines of code changes, per week">
</picture></p>

For every 100 lines of application code changes in a week, how many lines of tests went in with them. A zero is a week of code changes with no new tests.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/15_numbers.svg?v=4">
  <img src="graphs/light/15_numbers.svg?v=4" width="940" alt="Tickets linked to my commits">
</picture></p>

Tickets linked to my commits, September to November 2026.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/20_research_to_production.svg?v=4">
  <img src="graphs/light/20_research_to_production.svg?v=4" width="940" alt="From research code to a production platform">
</picture></p>

What each chapter fed into the next: production habits from Capgemini, research-to-tool work at Michigan Tech, and the Pareto platform.

---

## Core Stack

<div align="center">

### ML & LLMs
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![vLLM](https://img.shields.io/badge/vLLM-30A2FF?style=for-the-badge&logoColor=white)
![Apache Spark](https://img.shields.io/badge/Apache_Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white)

### Backend & Serving
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)

### Data & Streaming
![Apache Kafka](https://img.shields.io/badge/Apache_Kafka-000000?style=for-the-badge&logo=apache-kafka&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

### Cloud & DevOps
![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)

</div>

---

## Featured Projects

### [RefAgent: Multi-Agent LLM Code Refactoring](https://github.com/Prateeek73/java-refactoring-llm-benchmark)
LLM agents that refactor real open-source Java projects. In our runs they removed about half the detected code problems (52.5%) and 90% of their changes still passed the projects' test suites; a change only counts if it compiles and passes tests.  
**Stack:** Python, LLM agents, Qwen2.5-Coder-7B served with vLLM on A30 GPUs, Java (Designite, RefactoringMiner)

---

### FragBERTa: Molecular Property Inference <sub>(university tool, code not public)</sub>
Lets chemists score molecules with a fine-tuned, fragment-aware BERT model from a web page, in batch or one at a time, without touching the model. Deployed on the university HPC cluster.  
**Stack:** FastAPI, React, PyTorch, Hugging Face  
**Impact:** Batch and interactive querying across MoleculeNet benchmarks (ESOL, FreeSolv, HIV, Tox21); 1K+ compounds scored in under 90 seconds.

---

### [nuGAN: Cosmological Simulator Platform](https://github.com/Prateeek73/nuGAN-webapplet)
Turned a deep-learning cosmology simulator into a web platform so researchers generate sky maps without writing scripts.  
**Stack:** Flask, Gunicorn, Nginx, PyTorch  
**Impact:** Generates and stores 512×512 maps conditioned on neutrino mass, with async job queuing, checkpoint management and a live visualization pipeline.

---

### [Mormon-NLT: Shakespearean Style Transfer](https://github.com/Prateeek73/Mormon-NLT)
Translates modern English to Shakespearean and back, improving output quality by 20–23% over its own base model in each setup.  
**Stack:** PyTorch, PEFT, Flash Attention 2 (LoRA on Qwen2.5-3B and a full fine-tune of Qwen2.5-1.5B, scored by BERTScore)

---

### RAG IDP Q&A System
Document processing system with custom knowledge ingestion, built to get around the context limits of base LLMs.  
**Stack:** FastAPI, pgvector, RAG  
**Impact:** Context-aware semantic search with answers grounded in retrieved passages.

---

### Distributed Deep Learning with Spark
A GPU-accelerated distributed pipeline for high-volume image data.  
**Stack:** Apache Spark, PyTorch, Python  
**Impact:** Data parallelism across 20K images, reaching 97.37% accuracy in 6 minutes.

---

## GitHub Activity

<div align="center">

![GitHub Stats](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Prateeek73&theme=tokyonight)

</div>

<div align="center">
  <picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/languages_recent.svg?v=4">
  <img src="graphs/light/languages_recent.svg?v=4" width="48%" alt="Languages in my recent commits, private repository">
</picture>
</div>

<sub>The contribution count above includes private work. The language card is generated from my own commits in the private Pareto Labs repository; third-party language cards only see public repos.</sub>

---

## Let's Connect

I'm looking for full-time **ML Engineer, ML Infrastructure or Backend roles**. I want to work on systems where latency and scale matter: LLM inference, model serving, real-time pipelines and distributed AI deployments.

<div align="center">

[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pra73ek.singh@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pra73ek-singh)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/pra73ek)

**📍 Houston, TX** | **💼 Open to Remote/Hybrid**

</div>

---

<div align="center">
  <i>From backend microservices to LLM inference, I build ML systems that keep running in production.</i>
</div>
