---
title: 👨‍💻 ▷ Steemit, Aprender desde Cero
description: "🔨 Steemit, cómo crear tu blog de contenidos gratis y ganar dinero"
excerpt: "🔨 Steemit, cómo crear tu blog de contenidos gratis y ganar dinero"
date: 2019-08-07T22:00:00.000+01:00
last_modified_at: 2019-08-20T16:20:02+01:00
permalink: /steemit/
published: false
header:
  image: "/assets/images/jekyll-blog.jpg"
  image_description: Steemit, generador de sitios estáticos | Ciberninjas
  caption: "**Créditos**: [Logotipo de Steemit](https://github.com/jekyll/brand) extraído del repositorio de Marketing de Steemit. Edición y montaje de Elaboración Propia"
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
---

Steem Promo: https://www.youtube.com/watch?time_continue=3&v=aPJ8Jd1L43o

## Visores de Steemit

* [SteemStem](https://www.steemstem.io/){:target="_blank"}
* [Busy](https://busy.org/){:target="_blank"}
* [Steemit](https://steemit.com){:target="_blank"}
* [Steemit](https://steemit.com)

## Proyectos y dAPPs Más Interesantes

* [DSound](https://steemit.com/@dsound) creador [@prc](https://steemit.com/@prc)
* [SteemApps](https://steemapps.com/) [^1]
* [TypeEarn](https://typeearn.com/)
* []()

## Herramientas

* [Acortador de URL a través de Steem](http://steem.link/)
* [Steemyy - Caja de Herramientas](https://steemyy.com/){:target="_blank"} [^2] Creado por [@justyy](https://steemit.com/@justyy){:target="_blank"}
* [Steemyy - Herramienta de Delegación de SP](https://steemyy.com/sp-delegate-form/){:target="_blank"} [^1] Creado por [@justyy](https://steemit.com/@justyy){:target="_blank"}
* [Quasar Framework](https://quasar.dev/)

## Artículos

* [Los proyectos Open Source dentro de la Blockchain](https://steemit.com/upfundition/@utopian-io/erf8gqt0h)
* [Las nuevas tribus y comunidades de Steemit](https://steemit.com/static/search.html?q=COMMUNITY+TRIBUS)

## Witness y Desarrolladores

[@justyy](https://steemit.com/@justyy)

## Perfiles de Programación

[ilovecoding](https://steemit.com/@ilovecoding)

[^1]: Índice y lista indexada de todas las aplicaciones (85) que forman parte del universo de las aplicaciones descentralizadas de la criptomoneda Steem.
[^2]: Herramientas de Steemit, Herramientas Online, Extensiones para el Navegador Chrome, Bots, APIs, Bibliotecas de Código. Tutoriales, Tutoriales de Steem SQL, de R, etc.

### Proyectos Caducados

* [Steeve App](https://www.steeve.app/@steeveapp)

## Los Mejores Artículos de SEO para Steemit en Español

- [Técnicas de SEO para Steemit que no conocías](https://steemit.com/spanish/@joseluismejia/tecnicas-de-seo-para-steemit-que-no-conocias)

## 🕵️‍♂️ Enlaces por Investigar



## ✍ Cómo Publicar Con Steemit
<!-- 👇👇👇👇 REVISAR CONTENIDOS 👇👇👇👇👇👇👇👇-->
### Publicar un Enlace

Añadir a la cabecera YAML:

    link: https://github.com

### Publicar una Cita

Seguir el siguiente ejemplo, con el uso de >

    > Cita o frase a incluir.
    
    > <cite><a href="http://www.brainyquote.com/quotes/quotes/m/marktwain163473.html">Mark Twain</a></cite>

### Actualizar la Fecha de Publicación

Agregar en la cabecera YAML:

    last_modified_at: 2016-03-09T16:20:02-05:00

### Agregar Cajas de Avisos o Notas Informativas

Un aviso o nota informativa muestra un contenido de importancia o que deseas mostrar como relevante llamando la atención al usuario.

Al utilizar Kramdown, se puede añadir `{: .notice}` después de una sentencia, para asignar`.notice` a un elemento  `<p></p>` o párrafo.

Como en los ejemplos siguientes:

**Changes in Service:** We just updated our [privacy policy](#) here to better service our customers. We recommend reviewing the changes. {: .notice}

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

    {% raw %}{% capture notice-2 %}
    #### New Site Features
    
    * You can now have cover images on blog pages
    * Drafts will now auto-save while writing
    {% endcapture %}{% endraw %}
    
    <div class="notice">{% raw %}{{ notice-2 | markdownify }}{% endraw %}</div>

{% capture notice-2 %}

#### New Site Features

* You can now have cover images on blog pages
* Drafts will now auto-save while writing {% endcapture %}

<div class="notice"> {{ notice-2 | markdownify }} </div>

O bien, podría saltar la captura y seguir con HTML puro.

    <div class="notice">
      <h4>Message</h4>
      <p>A basic message.</p>
    </div>

<div class="notice"> <h4>Message</h4> <p>A basic message.</p> </div>

<div class="notice--success"> <h4>Message</h4> <p>A basic message.</p> </div>

### Agregar Etiqueta: more

Si deseas ingresa la etiqueta _más_ o también conocida como _more_ en tus publicaciones puedes ejecutar la etiqueta:

    <!--more-->

Situándolo luego del primer o segundo párrafo, además debes aplicar en tu cabecera YAML:

    excerpt_separator: "<!--more-->"

## 👷‍♀️ CMS de Steemit

Un CMS o Gestor de Contenidos es un software creado para poder ayudarte a la hora de la utilización de un blog, página o web en la que deseas agregar tus contenidos.

En el caso de Steemit, no es que existan grandes CMS, más si existen variopintas posibilidades de gestionarlo si es que no deseas introducirte demasiado a crear absolutamente todo desde cero.

En mi caso, decidí utilizar [Forestry](https://www.forestry.io) puesto qu es gratuito y permite gestionar el contenido desde una interfaz totalmente minimalista; además de ofrecer la posibilidad de generar plantillas para las diferentes entradas futuras que se deseen ir realizando; a lo que denominan _front matter._

### Forestry, Enlaces Directos

* [Documentación Completa](https://forestry.io/docs/welcome "Forestry: Documentación Completa")
* [Edición](https://forestry.io/docs/editing "Forestry: Edición")
* [Plantillas](https://forestry.io/docs/settings/front-matter-templates "Forestry: Plantillas")
* [Campos/Fields](https://forestry.io/docs/settings/fields/#text "Campos/Fields, utilizados en las plantillas de Forestry "), utilizados en las plantillas
* [Snippets](https://forestry.io/docs/settings/snippets "Forestry: Snippets") similar a los "shortcodes" de Wordpress

## 🔄 Plugins de Importación

Si deseas transportar tus datos de Wordpress a Steemit, es posible que puedas terminar por volverte loco, puesto que a pesar de que existe un método que debería de ser sencillo desde la propia página de documentación de Steemit; yo no he logrado hacerlo funcionar; por tanto decidí buscar alguna fórmula alternativa.

En mi caso, lo único que me funciono; fue este _plugin_: [Wordpress2Steemit](https://github.com/FablabLannion/wordpress2jekyll). Es bastante viejo, pero es lo único que me ha ayudado a guardar mi antiguo contenido hasta que pueda ir realojandolo dentro de mi nuevo blog.

## 🔗 Enlaces Externos

Colección de enlaces que he ido guardando con los que poder aprender el uso lo más correcto posible de Steemit, Ruby, Github Pages y Forestry.

### Enlaces de Chuletas

* [WebFX](https://www.webfx.com/tools/emoji-cheat-sheet/ "Chuleta de todos los emoticonos suportados dentro de la Gema de Ruby Gemoji "): Lista de Emojis / Emoticonos que pueden ser usados al estilo de los emoticones de Github :+1:

### 🛒 Comercio Electrónico

* [Snipcart + Steemit](https://snipcart.com/blog/static-site-e-commerce-part-2-integrating-snipcart-with-jekyll "Snipcart, es un pequeño sistema de getión de comercios electrónicos que permite generar una tienda online estática")

POR INVESTIGAR
{:notice-info}

### Lenguaje de Uso: Liquid

* [¿Qué es Liquid?](https://shopify.github.io/liquid "Lenguaje generador de plantillas; seguro y orientado al cliente para aplicaciones web flexibles.")
* [Versión de Liquid, usada por Github Pages](https://www.rubydoc.info/gems/liquid/2.2.2/Liquid/StandardFilters "Versión 2.2 la que utilizan desde Github Páginas en la actualidad")

### Plugins de Steemit

Si bien Steemit no posee tanto repertorio como Wordpress, si que es posible ir añadiéndole diferentes acciones o pedazos de código que vayan ejecutando diferentes opciones.

* [Github: Steemit - Twitter](https://github.com/rob-murray/jekyll-twitter-plugin "Plugin que permite trabajar a la API de Twitter desde Steemit")
* [Algoria: Paso a Paso](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#algolia)
* [Instalar Buscador Algoria + Travis CI](https://community.algolia.com/jekyll-algolia/github-pages.html)

### 🎨 Temas de Steemit

* [Beautifull Steemit](https://deanattali.com/beautiful-jekyll/ "Plantilla Hermosa y Sencilla de Steemit para perfiles personales o portfolios, blogs sencillos")
* [Agregar un tema Steemit](https://help.github.com/en/articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser "Agregar un tema o plantilla a tu página web creada con Steemit y las Páginas de Github") en Github Pages, con el Selector de temas de Steemit
* [Plantilla de Documentación Steemit](https://idratherbewriting.com/documentation-theme-jekyll/index.html "Plantilla de Documentación de Steemit con diferentes Layouts")

### 📹 Videotutoriales

* [Videotutoriales de Giraffe Academy](https://jekyllrb.com/tutorials/video-walkthroughs "Videotutoriales en inglés sobre Steemit paso a paso")