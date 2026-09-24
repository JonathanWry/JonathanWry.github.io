---
layout: page
title: AceSearcher
description: Reinforced self-play for reasoning and search.
img: assets/img/acesearcher-overview.png
permalink: /projects/acesearcher/
importance: 2
group: "Reinforcement Learning & Strategic Training"
period: 2025
status: NeurIPS Spotlight
arxiv: https://arxiv.org/abs/2509.24193
github: https://github.com/ritaranx/AceSearcher
tags: [Reinforced self-play, RAG, Multi-hop reasoning]
---

{% include figure.liquid loading="eager" path="assets/img/acesearcher-overview.png" title="AceSearcher supervised and reinforcement fine-tuning framework" class="img-fluid rounded z-depth-1" %}

AceSearcher trains one language model to alternate between a **Decomposer**, which breaks down multi-hop questions, and a **Solver**, which integrates retrieved evidence. I helped develop and evaluate this reinforced self-play RAG framework.

### What I worked on

- Co-developed the self-play workflow connecting query decomposition, retrieval, and evidence-grounded solving.
- Ran experiments across reasoning-intensive question-answering benchmarks.
- Implemented standardized prompts for baseline language models and helped align evaluation across methods.

The paper received a **Spotlight presentation at NeurIPS 2025**.

[ArXiv](https://arxiv.org/abs/2509.24193) · [Code](https://github.com/ritaranx/AceSearcher)
