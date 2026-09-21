---
layout: page
title: AF Prediction with Hypergraph Pre-training
description: Data-efficient atrial fibrillation prediction through transferable patient representations.
img: assets/img/af-framework.jpg
permalink: /projects/af-prediction/
importance: 2
group: Health and Scientific AI
period: 2024-2026
status: Third author
arxiv: https://arxiv.org/abs/2603.13297
github: https://github.com/JonathanWry/Enhanced-Atrial-Fibrillation-Prediction-in-ESUS-Patients-with-Pre-training-and-Transfer-Learning
tags: [Hypergraphs, Transfer learning, Risk prediction]
---

{% include figure.liquid loading="eager" path="assets/img/af-framework.jpg" title="Hypergraph pre-training and transfer learning pipeline" class="img-fluid rounded z-depth-1" %}

This project learns compact patient representations from a larger stroke cohort and transfers them to a smaller ESUS cohort for atrial fibrillation risk prediction.

### What I worked on

- Developed hypergraph-transformer pre-training pipelines for transferable patient visit embeddings.
- Integrated 32-dimensional embeddings with baseline clinical features in the downstream cohort.
- Evaluated lightweight classifiers under limited-data conditions and compared them with from-scratch baselines.

[ArXiv](https://arxiv.org/abs/2603.13297) · [Code](https://github.com/JonathanWry/Enhanced-Atrial-Fibrillation-Prediction-in-ESUS-Patients-with-Pre-training-and-Transfer-Learning)
