---
title: "Contador Etiquetas"
---

{% assign alldocs = site.glosario | <additional filtering and sorting> %} 
{% assign grouptag =  alldocs | map: 'tags' | join: ','  | split: ','  | group_by: tag %}
{%- for tag in grouptag -%}
    <h1>{{- tag.name -}} - {{tag.size}}</h1>
    {%- for document in alldocs -%}
        {% if document.tags contains tag.name %}
             <p>{{- document.title -}}
         {% endif %}
    {%- endfor -%}
{%- endfor -%}