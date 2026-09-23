---
layout: page
title: Memory for VLA-based Manipulation
description: Early-stage VLA memory research, including retriever supervision, data generation, training, and evaluation.
img: assets/img/memory-vla-overview.png
permalink: /projects/memory-vla/
importance: 1
group: Embodied Systems
period: Summer 2026
status: MagicLab internship
visual_label: VLA / MEMORY
tags: [Vision-language-action, Memory, Robot learning]
---

{% include figure.liquid loading="eager" path="assets/img/memory-vla-overview.png" title="Overview from the later Dual-Stream Memory manuscript, shown for project context" class="img-fluid rounded z-depth-1" %}

During my summer internship at MagicLab, I contributed to the early exploration of how memory could support vision-language-action policies over extended manipulation tasks. My work covered both experimental infrastructure and supervision for retrieving task-relevant evidence from interaction history.

### What I contributed

- Surveyed memory mechanisms for VLA models and long-horizon robotic manipulation.
- Participated in early design discussions around the retriever and selective access to historical visual evidence.
- Implemented temporal and keyframe supervision, together with the offline tools used to generate those training labels.
- Implemented object-level spatial supervision and its generation tools for localizing task-relevant objects and evidence.
- Helped establish training and evaluation workflows, ran a subset of model-training and testing experiments, and analyzed early memory behavior and failure modes.

### Relationship to the later manuscript

The broader project later produced the ICRA 2027 manuscript **Dual-Stream Memory for Vision-Language-Action Policies**. Its final system combines a recurrent temporal compressor, task-conditioned threshold retrieval, and multi-scale spatial fusion. The paper's retriever direction and temporal/keyframe and object-level spatial supervision build on areas I explored and implemented during the internship.

I left before the final Dual-Stream Memory architecture and training recipe were formed. I therefore describe my contributions at the component and tooling level and do not claim the final system integration or its complete reported results. The figure above is from the later manuscript and is included to show where the broader research direction ultimately led.
