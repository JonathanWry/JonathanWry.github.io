---
layout: about
title: about
permalink: /
subtitle: M.S. student in Computer Science at UCLA.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info:

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="intro-copy" id="about">
  <p class="intro-lead">Hello! My name is <strong>Ruiyu (Jonathan) Wang</strong>, and I am pursuing a <strong>Master of Science in Computer Science</strong> at UCLA. I graduated from <strong>Emory University</strong> with a B.S. in Computer Science and a B.S. in Applied Mathematics and Statistics.</p>

  <p>My previous work spans memory and evaluation for vision-language-action models, reinforcement learning for adaptive scientific computing, self-play search agents, and clinically grounded language models.</p>

  <p><strong>Research interests:</strong> embodied intelligence, reinforcement learning, planning, and reliable learning systems that connect structured reasoning with interaction.</p>

  <p>In my free time, I enjoy music, play guitar, and arrange music as a hobby.</p>

  <div class="intro-actions">
    <a class="action-link action-link--primary" href="#projects">Explore my work <i class="fa-solid fa-arrow-down" aria-hidden="true"></i></a>
    <a class="action-link" href="#cv">CV</a>
  </div>
</div>

<section class="home-section home-education" id="education" aria-labelledby="education-title">
  <div class="section-heading-row">
    <h2 id="education-title">Education</h2>
  </div>
  <div class="education-grid">
    <div class="education-entry">
      <div class="education-entry-top"><span>2026 - Present</span><span>Los Angeles, CA</span></div>
      <h3>University of California, Los Angeles</h3>
      <p>Master of Science in Computer Science</p>
    </div>
    <div class="education-entry">
      <div class="education-entry-top"><span>2022 - 2026</span><span>Atlanta, GA</span></div>
      <h3>Emory University</h3>
      <p>B.S. in Computer Science<br>B.S. in Applied Mathematics and Statistics</p>
      <p class="education-note">GPA 3.93 / 4.00</p>
    </div>
  </div>
</section>

<section class="home-section home-cv" id="cv" aria-labelledby="cv-title">
  <div class="section-heading-row">
    <h2 id="cv-title">CV</h2>
    <div class="cv-inline-actions">
      <a class="section-link" href="{{ '/assets/pdf/ruiyu-wang-cv.pdf' | relative_url }}" download>
        Download PDF <i class="fa-solid fa-download" aria-hidden="true"></i>
      </a>
      <a class="section-link" href="{{ '/assets/pdf/ruiyu-wang-cv.pdf' | relative_url }}" target="_blank" rel="noopener">
        Open full screen <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
      </a>
    </div>
  </div>
  <div class="cv-pdf-frame cv-pdf-frame--home">
    <object data="{{ '/assets/pdf/ruiyu-wang-cv.pdf' | relative_url }}#view=FitH" type="application/pdf" aria-label="Ruiyu Wang curriculum vitae">
      <p>Your browser cannot display the PDF inline. <a href="{{ '/assets/pdf/ruiyu-wang-cv.pdf' | relative_url }}">Open the CV</a>.</p>
    </object>
  </div>
</section>

<section class="home-section home-projects" id="projects" aria-labelledby="projects-title">
  <div class="section-heading-row">
    <h2 id="projects-title">Projects</h2>
  </div>
  {% include project-grid.liquid %}
</section>

<section class="home-section home-publications" id="publications" aria-labelledby="publications-title">
  <div class="section-heading-row">
    <h2 id="publications-title">Publications</h2>
  </div>
  <div class="publications">
    {% bibliography %}
  </div>
</section>
