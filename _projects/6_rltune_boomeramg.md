---
layout: page
title: RLTune-BoomerAMG
description: Online learning for adaptive configuration of a scientific computing solver.
img: assets/img/rltune-formulation.png
permalink: /projects/rltune-boomeramg/
importance: 1
group: "Reinforcement Learning & Strategic Training"
period: 2025-2026
status: Research project
tags: [Reinforcement learning, Scientific computing, HYPRE]
---

{% include figure.liquid loading="eager" path="assets/img/rltune-formulation.png" title="Cycle-based reinforcement learning formulation for BoomerAMG" class="img-fluid rounded z-depth-1" %}

RLTune-BoomerAMG treats solver configuration as online learning over mixed continuous and categorical parameters, including strength thresholds, smoothing choices, coarsening, and relaxation.

### What I worked on

- Formulated repeated BoomerAMG configuration as an adaptive decision problem over problem streams.
- Implemented policy-based setup and solve-control experiments in HYPRE.
- Compared contextual bandits and episodic reinforcement learning with fixed and physics-informed baselines.
- Built reproducible experiment bundles for runtime, convergence, and stability analysis.

The code is still under active development and is not linked publicly yet.
