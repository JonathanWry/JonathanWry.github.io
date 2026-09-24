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

### Technical context in the final system

The later design separates two memory requirements. A Gated DeltaNet compresses execution history into one temporal token, while a task-conditioned retriever keeps frames whose relevance exceeds a fixed threshold. Each retained frame is represented by sixteen multi-scale spatial tokens. The supervision and label-generation tools I implemented targeted the retriever's two localization problems: finding when useful evidence appears and where the relevant object or region is within that frame.

### Results reported by the later manuscript

The numbers below describe the broader project's final system and are included as technical context, not as individual results that I claim.

<div class="project-results" aria-label="Results reported in the later Dual-Stream Memory manuscript">
  <div class="project-result">
    <strong>+4.22 pp</strong>
    <span>threshold retrieval on the RoboMME Permanence suite</span>
  </div>
  <div class="project-result">
    <strong>49.22%</strong>
    <span>mean success across 16 RoboMME tasks, versus 44.51%</span>
  </div>
  <div class="project-result">
    <strong>62.5%</strong>
    <span>mean real-robot success, versus 37.5%</span>
  </div>
</div>

The retriever's temporal and spatial localization reached 96.88% and 95.00% Hit@1, with average precision of 96.53% and 92.24%. The complete model improved fourteen of sixteen RoboMME tasks and all four suite means. The gains were not uniform: success on the real-robot Shell task fell from 53.3% to 40.0%, exposing persistent target identity tracking as an open limitation.
