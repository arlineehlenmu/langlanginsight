---
title: "最新文章"
layout: "default"
---

<div class="list">
  {% for post in collections.posts %}
  <a class="post-item" href="{{ post.url }}">
    <h3>{{ post.data.title }}</h3>
    <div class="meta">
      {{ post.date | date: "%Y-%m-%d" }}
      {% if post.data.description %} · {{ post.data.description }}{% endif %}
    </div>
  </a>
  {% endfor %}
  {% if collections.posts.size == 0 %}
  <div class="post-item">还没有文章，先新建一篇吧～</div>
  {% endif %}
</div>
