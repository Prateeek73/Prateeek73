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
  <source media="(prefers-color-scheme: dark)" srcset="graphs/01_career_timeline.svg?v=5">
  <img src="graphs/light/01_career_timeline.svg?v=5" width="940" alt="Career timeline, December 2021 to today">
</picture></p>

Backend services kept running at scale; research models turned into tools people could use; open LLMs served in production.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/05_area_share.svg?v=5">
  <img src="graphs/light/05_area_share.svg?v=5" width="940" alt="Share of my code changes by part of the platform">
</picture></p>

Share of my code changes by part of the platform. The backend bucket (36%) includes the serving work; the others are product UI, tests, hosting and build, and docs.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/14_test_ratio.svg?v=5">
  <img src="graphs/light/14_test_ratio.svg?v=5" width="940" alt="Test lines per 100 lines of code changes, per week">
</picture></p>

For every 100 lines of application code changes in a week, how many lines of tests went in with them. A zero is a week of code changes with no new tests.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/15_numbers.svg?v=5">
  <img src="graphs/light/15_numbers.svg?v=5" width="940" alt="Tickets linked to my commits">
</picture></p>

Tickets linked to my commits, September to November 2026.

<p align="center"><picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/20_research_to_production.svg?v=5">
  <img src="graphs/light/20_research_to_production.svg?v=5" width="940" alt="From research code to a production platform">
</picture></p>

What each chapter fed into the next: production habits from Capgemini, research-to-tool work at Michigan Tech, and the Pareto platform.

---

## Core Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![vLLM](https://img.shields.io/badge/vLLM-30A2FF?style=flat-square&logo=&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-000000?style=flat-square&logo=apachekafka&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white)

</div>

---

## Featured Projects

### [RefAgent: Multi-Agent LLM Code Refactoring](https://github.com/Prateeek73/java-refactoring-llm-benchmark)
LLM agents that refactor real open-source Java projects. In our runs they removed about half the detected code problems (52.5%) and 90% of their changes still passed the projects' test suites; a change only counts if it compiles and passes tests.  
**Stack:** Python, LLM agents, Qwen2.5-Coder-7B served with vLLM on A30 GPUs, Java (Designite, RefactoringMiner)


---

### [Mormon-NLT: Shakespearean Style Transfer](https://github.com/Prateeek73/Mormon-NLT)
Translates modern English to Shakespearean and back, improving output quality by 20–23% over its own base model in each setup.  
**Stack:** PyTorch, PEFT, Flash Attention 2 (LoRA on Qwen2.5-3B and a full fine-tune of Qwen2.5-1.5B, scored by BERTScore)


---

## GitHub Activity

<div align="center">

![GitHub Stats](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Prateeek73&theme=tokyonight)

</div>

<div align="center">
  <picture>
  <source media="(prefers-color-scheme: dark)" srcset="graphs/languages_recent.svg?v=5">
  <img src="graphs/light/languages_recent.svg?v=5" width="48%" alt="Languages across my GitHub, private work included">
</picture>
</div>

<sub>The contribution count above includes private work. The language card combines every repository I have written to, including the private Pareto Labs one; third-party cards only see public repos.</sub>

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
