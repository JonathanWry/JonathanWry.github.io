---
layout: page
title: KG-Augmented LLMs for Disease Prediction
description: Grounded next-visit prediction with knowledge-graph evidence.
img: assets/img/kg-framework.png
permalink: /projects/kg-disease-prediction/
importance: 1
group: Health and Scientific AI
period: 2025-2026
status: First author
arxiv: https://arxiv.org/abs/2512.01210
github: https://github.com/JonathanWry/KG-guided-LLM-pipeline
tags: [Knowledge graphs, LLM fine-tuning, Clinical AI]
---

{% include figure.liquid loading="eager" path="assets/img/kg-framework.png" title="Knowledge graph guided disease prediction pipeline" class="img-fluid rounded z-depth-1" %}

I mapped clinical codes to PrimeKG, mined disease-specific evidence paths, and used filtered reasoning traces to fine-tune compact language models for interpretable next-visit disease prediction.

### What I worked on

- Built the data pipeline connecting longitudinal patient visits with disease-centered subgraphs from PrimeKG.
- Designed structured reasoning traces for supervised fine-tuning and filtered low-quality evidence before training.
- Evaluated predictive performance, data efficiency, transfer across clinical cohorts, and the interpretability of generated reasoning.

The work was accepted to the **AMIA 2026 Informatics Summit**.

[ArXiv](https://arxiv.org/abs/2512.01210) · [Code](https://github.com/JonathanWry/KG-guided-LLM-pipeline)
