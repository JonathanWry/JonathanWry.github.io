---
layout: page
title: research
permalink: /research/
description: Projects, experiments, and research artifacts across embodied systems, reinforcement learning, and structured reasoning.
nav: true
nav_order: 2
---

{% assign research_groups = "Health and Scientific AI|Reinforcement Learning & Strategic Training|Embodied Systems" | split: "|" %}

{% for group in research_groups %}
  {% assign group_projects = site.projects | where: "group", group | sort: "importance" %}
  <section class="research-group" aria-labelledby="group-{{ forloop.index }}">
    <div class="research-group-heading">
      <span>0{{ forloop.index }}</span>
      <h2 id="group-{{ forloop.index }}">{{ group }}</h2>
    </div>

    <div class="research-grid">
      {% for project in group_projects %}
        <article class="research-card">
          <a class="research-card-media" href="{{ project.url | relative_url }}" aria-label="Read more about {{ project.title }}">
            {% if project.img %}
              {% include figure.liquid loading="lazy" path=project.img sizes="(min-width: 900px) 520px, 94vw" alt=project.title class="research-card-image" %}
            {% else %}
              <span class="research-card-placeholder" aria-hidden="true">
                <span>{{ project.visual_label }}</span>
              </span>
            {% endif %}
          </a>
          <div class="research-card-body">
            <div class="research-card-meta">
              <span>{{ project.period }}</span>
              <span>{{ project.status }}</span>
            </div>
            <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            <p>{{ project.description }}</p>
            {% if project.tags %}
              <ul class="tag-list" aria-label="Topics">
                {% for tag in project.tags %}<li>{{ tag }}</li>{% endfor %}
              </ul>
            {% endif %}
            {% if project.arxiv or project.github %}
            <div class="research-card-links">
              {% if project.arxiv %}<a href="{{ project.arxiv }}" target="_blank" rel="noopener">ArXiv</a>{% endif %}
              {% if project.github %}<a href="{{ project.github }}" target="_blank" rel="noopener">Code</a>{% endif %}
            </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
