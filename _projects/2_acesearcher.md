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

AceSearcher trains one language model to alternate between decomposing complex questions and solving them with retrieved evidence. I contributed experiments and standardized evaluation for the self-play search framework.

### What I worked on

- Ran experiments across reasoning-intensive question-answering benchmarks.
- Implemented and prompted baseline language models for consistent comparison.
- Helped standardize evaluation across retrieval, decomposition, and final-answer quality.

The paper received a **Spotlight presentation at NeurIPS 2025**.

[ArXiv](https://arxiv.org/abs/2509.24193) · [Code](https://github.com/ritaranx/AceSearcher)
