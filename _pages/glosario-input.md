---
title: Filtrado del Glosario
---

{% for glosario in site.glosario %}
  <h2>{{ glosario.name }} - {{ glosario.position }}</h2>
  <p>{{ glosario.content | markdownify }}</p>
{% endfor %}