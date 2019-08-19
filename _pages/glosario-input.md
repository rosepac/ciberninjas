---
title: Filtrado del staff-miembros
layout: collection
permalink: /staff-miembros-input/
---

{% for staff-miembros in site.staff-miembros %}
  <h2>{{ staff-miembros.name }} - {{ staff-miembros.position }}</h2>
  <p>{{ staff-miembros.content | markdownify }}</p>
{% endfor %}