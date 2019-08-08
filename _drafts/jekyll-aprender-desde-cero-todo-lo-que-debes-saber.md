---
title: Jekyll, aprender desde cero todo lo que debes saber
categories:
- SSG
tags:
- Estático
- Contenidos
- Gestor
date: 2019-08-08 00:00:00 +0200
permalink: jekyll
excerpt: "\U0001F6E0 Jekyll, el mejor generador de contenidos estático. Aprende desde
  cero todo lo que debes saber"
description: "\U0001F6E0 Jekyll, el mejor generador de contenidos estático. Aprende
  desde cero todo lo que debes saber"
header:
  overlay_image: "/assets/images/jekyll-blog.jpg"
  overlay_filter: "0.3"
  image_description: Jekyll, generador de sitios estáticos | Ciberninjas
  caption: "**Créditos**: [WikiMedial](https://es.wikipedia.org/wiki/Archivo:Jekyll_(software)_Logo.png)"

---
## Cómo Publicar Con Jekyll

### Publicar un Enlace

Añadir a la cabecera YAML:

    link: https://github.com

### Publicar una Cita

    > Cita o frase a incluir.
    
    > <cite><a href="http://www.brainyquote.com/quotes/quotes/m/marktwain163473.html">Mark Twain</a></cite>

### Agregar Cajas de Avisos o Nota Informativa

Un aviso o nota informativa muestra un contenido de importancia o que deseas mostrar como relevante llamando la atención al usuario.

Al utilizar Kramdown, se puede añadir `{: .notice}` después de una sentencia, para asignar`.notice` a un elemento  `<p></p>` o párrafo.

Como en los ejemplos siguientes:

**Changes in Service:** We just updated our [privacy policy](#) here to better service our customers. We recommend reviewing the changes.
{: .notice}

**Primary Notice:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. [Praesent libero](#). Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--primary}

**Info Notice:** Lorem ipsum dolor sit amet, [consectetur adipiscing elit](#). Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.   
{: .notice--info}

**Warning Notice:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Integer nec odio](#). Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--warning}

**Danger Notice:** Lorem ipsum dolor sit amet, [consectetur adipiscing](#) elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
{: .notice--danger}

**Success Notice:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at [nibh elementum](#) imperdiet.
{: .notice--success}

Want to wrap several paragraphs or other elements in a notice? Using Liquid to capture the content and then filter it with `markdownify` is a good way to go.

```html
{% raw %}{% capture notice-2 %}
#### New Site Features

* You can now have cover images on blog pages
* Drafts will now auto-save while writing
{% endcapture %}{% endraw %}

<div class="notice">{% raw %}{{ notice-2 | markdownify }}{% endraw %}</div>
```

{% capture notice-2 %}
#### New Site Features

* You can now have cover images on blog pages
* Drafts will now auto-save while writing
{% endcapture %}

<div class="notice">
  {{ notice-2 | markdownify }}
</div>

O bien, podría saltar la captura y seguir con HTML puro.

```html
<div class="notice">
  <h4>Message</h4>
  <p>A basic message.</p>
</div>
```

<div class="notice">
  <h4>Message</h4>
  <p>A basic message.</p>
</div>

<div class="notice--success">
  <h4>Message</h4>
  <p>A basic message.</p>
</div>

### Actualizar la Fecha de Publicación

Agregar en la cabecera YAML:

    last_modified_at: 2016-03-09T16:20:02-05:00

### Agregar Etiqueta: more

Si deseas ingresa la etiqueta _más_ o también conocida como _more_ en tus publicaciones puedes ejecutar la etiqueta:

    <!--more-->

Situándolo luego del primer o segundo párrafo, además debes aplicar en tu cabecera YAML:

    excerpt_separator: "<!--more-->"

### CMS o Gestor de Contenidos de Jekyll

Un CMS o Gestor de Contenidos es un software creado para poder ayudarte a la hora de la utilización de un blog, página o web en la que deseas agregar tus contenidos.

En el caso de Jekyll, no es que existan grandes CMS, más si existen variopintas posibilidades de gestionarlo si es que no deseas introducirte demasiado a crear absolutamente todo desde cero.

En mi caso, decidí utilizar [Forestry](https://www.forestry.io) puesto qu es gratuito y permite gestionar el contenido desde una interfaz totalmente minimalista; además de ofrecer la posibilidad de generar plantillas para las diferentes entradas futuras que se deseen ir realizando; a lo que denominan _front matter._

## Plugins de Importación

Si deseas transportar tus datos de Wordpress a Jekyll, es posible que puedas terminar por volverte loco, puesto que a pesar de que existe un método que debería de ser sencillo desde la propia página de documentación de Jekyll; yo no he logrado hacerlo funcionar; por tanto decidí buscar alguna fórmula alternativa.

En mi caso, lo único que me funciono; fue este _plugin_: [Wordpress2Jekyll](https://github.com/FablabLannion/wordpress2jekyll). Es bastante viejo, más es lo único que me ha ayudado a guardar mi antiguo contenido hasta que pueda ir realojandolo dentro de mi nuevo blog.