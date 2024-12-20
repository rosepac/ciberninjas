---
layout: page
title: "🥇 ▷ Jekyll: Creando un blog estatíco con la ayuda de Ruby y YAML 2021"
description: "Uno de los mejores generadores de contenidos estático (SSG)"
excerpt: "Uno de los mejores generadores de contenidos estático (SSG)"
date: 2020-10-26
last_modified_at:
permalink:  /jekyll/
canonical_URL: https://ciberninjas.com/jekyll/
author: rosepac
bootstrap: true
thumbnail: "/assets/img/paginas/jekyll-arbol-documentos.webp"
feature-img: "/assets/img/paginas/jekyll-arbol-documentos.webp"
img: "/assets/img/paginas/jekyll-arbol-documentos.webp"
tags:
- SSG
---

Existe un gran cambio al modificar tus hábitos y buscar el cambio desde un [Sistema de Gestión de Contenidos](/glosario/cms/) (CMS) como por ejemplo: Wordpress. Hacía un [Sistema de Contenidos de Generación Estática](/wiki/generador-de-sitios-estaticos) (SSG) como por ejemplo: Jekyll.

Buscando hacer ese paso un poco más sencillo, se ha creado este repositorio con todos los enlaces que me han ido siendo de utilidad, a lo largo del tiempo; tanto para la importación de un blog a otro, como para el desarrollo, configuración, gestión y mantenimiento de la nueva página estática.

Además, se incluyen enlaces a los lugares más importantes dentro de la Comunidad de Jekyll y un breve contenido de la utilización más práctica sobre uno de los temas de Jekyl más utilizados a nivel mundial: Minimal Mistakes.

Espero que estos enlaces puedan ser de ayuda y ojalá; lleguen a suplir aunque solamente sean en parte, a la gran comunidad de Wordpress existente.

> **¡Al lío!**

<span id="menu"><strong>Menú de los Contenidos del SSG: Jekyll</strong></span>

- [**CMS para Jekyll**](#cms-para-jekyll)
  - [Prose.io](#proseio)
  - [Forestry, Enlaces Directos](#forestry-enlaces-directos)
  - [CloudCannon](#cloudcannon)
- [**¿Cómo realizar pruebas y montar un blog con Jekyll?**](#cómo-realizar-pruebas-y-montar-un-blog-con-jekyll)
- [**¿Cómo implementar mejoras de SEO en Jekyll?**](#cómo-implementar-mejoras-de-seo-en-jekyll)
- [Plugins de Importación](#plugins-de-importación)
- [**Generando una PWA**](#generando-una-pwa)
- [Enlaces Externos](#enlaces-externos)
  - [Enlaces de Chuletas](#enlaces-de-chuletas)
  - [Comercio Electrónico](#comercio-electrónico)
  - [Lenguaje de Uso: Liquid](#lenguaje-de-uso-liquid)
  - [Plugins de Jekyll](#plugins-de-jekyll)
  - [Temas de Jekyll](#temas-de-jekyll)
  - [Videotutoriales](#videotutoriales)
- [Plantilla de Minimal Mistakes](#plantilla-de-minimal-mistakes)
  - [Publicar un Enlace](#publicar-un-enlace)
  - [Publicar una Cita](#publicar-una-cita)
  - [Actualizar la Fecha de Publicación](#actualizar-la-fecha-de-publicación)
  - [Agregar Cajas de Avisos o Notas Informativas](#agregar-cajas-de-avisos-o-notas-informativas)
  - [Agregar Etiqueta: more](#agregar-etiqueta-more)
  - [Configuración de la Plantilla Minimal Mistakes](#configuración-de-la-plantilla-minimal-mistakes)
  - [Cómo cambiar la fuente tipográfica](#cómo-cambiar-la-fuente-tipográfica)
- [Enlaces por Investigar y por Organizar](#enlaces-por-investigar-y-por-organizar)

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## **CMS para Jekyll**

Un CMS o Gestor de Contenidos es un software creado para poder ayudarte a la hora de la utilización de un blog, página o web en la que deseas agregar tus contenidos.

En el caso de Jekyll, no es que existan grandes CMS, más si existen variopintas posibilidades de gestionarlo si es que no deseas introducirte demasiado a crear absolutamente todo desde cero.

En mi caso, decidí utilizar [Forestry](https://www.forestry.io){:target="_blank" rel="nofollow,noreferrer"} puesto qu es gratuito y permite gestionar el contenido desde una interfaz totalmente minimalista; además de ofrecer la posibilidad de generar plantillas para las diferentes entradas futuras que se deseen ir realizando; a lo que denominan _front matter._

[Soluciones de CMS para Jekyll](https://jekyllthemes.io/resources/jekyll-hosting-and-cms-solutions){:target="_blank" rel="nofollow,noreferrer"} en esta publicación puedes encontrar el mejor lugar para alojar tu sitio Jekyll o hacer que tu sitio web estático sea editable con estos excelentes servicios de administración de contenido.

### Prose.io

Este es un pequeño editor que permite cargar de forma muy rápida los repositorios de Github además de modificar sus diferentes opciones a través de una pequeña edición del archivo de configuración de Jekyll.

A pesar de que hace mucho que el proyecto no es modificado dentro de Github, es aún totalmente funcional.

Otro por menor, que te va a surgir a la hora de su utilización; es que deberas personalizar todos los ajustes del encabezado para adaptarlo a las opciones de tu blog; y que eso te permita facilitar el trabajo de publicar directamente a través del editor online.

### Forestry, Enlaces Directos

* [Documentación Completa](https://forestry.io/docs/welcome "Forestry: Documentación Completa"){:target="_blank" rel="nofollow,noreferrer"}
* [Edición](https://forestry.io/docs/editing "Forestry: Edición"){:target="_blank" rel="nofollow,noreferrer"}
* [Plantillas](https://forestry.io/docs/settings/front-matter-templates "Forestry: Plantillas"){:target="_blank" rel="nofollow,noreferrer"}
* [Campos/Fields](https://forestry.io/docs/settings/fields/#text "Campos/Fields, utilizados en las plantillas de Forestry "){:target="_blank" rel="nofollow,noreferrer"}, utilizados en las plantillas
* [Snippets](https://forestry.io/docs/settings/snippets "Forestry: Snippets"){:target="_blank" rel="nofollow,noreferrer"} similar a los "shortcodes" de Wordpress

### CloudCannon

* [El CMS en la Nube para Jekyll](https://cloudcannon.com/){:target="_blank" rel="nofollow,noreferrer"}

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **¿Cómo realizar pruebas y montar un blog con Jekyll?**

* [Supercarga las páginas de GitHub con Jekyll y Travis CI](https://medium.com/@mcred/supercharge-github-pages-with-jekyll-and-travis-ci-699bc0bde075){:target="_blank" rel="nofollow,noreferrer"}

## **¿Cómo implementar mejoras de SEO en Jekyll?**

* [Plugin Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/ "Plugin Jekyll SEO Tag, mejorando el SEO de t blog en Jekyll"){:target="_blank" rel="nofollow,noreferrer"} - Relacionado: [Esturctura de Datos](https://developers.google.com/search/docs/guides/intro-structured-data#structured-data "Introducción a la estructura de datos por los desarrolladores de Google"){:target="_blank" rel="nofollow,noreferrer"}
* [Plugin Jekyll SEO Tag: Cómo usarlo](https://jekyll.github.io/jekyll-seo-tag/usage/ "¿Cómo usar el Plugin seo tag para Jekyll"){:target="_blank" rel="nofollow,noreferrer"}
* [Plugin Jekyll SEO Tag: Cómo usarlo a nivel avanzado](http://jekyll.github.io/jekyll-seo-tag/advanced-usage/ "¿Cómo usar el Plugin seo tag Avanzado para Jekyll"){:target="_blank" rel="nofollow,noreferrer"}
* [Plugin Jekyll SEO Tag: Repositorio de Github](https://github.com/jekyll/jekyll-seo-tag "Código fuente del Plugin SEO Tag para Jekyll"){:target="_blank" rel="nofollow,noreferrer"}
* [Cómo usar Jekyll como un profesional: Mejorar el SEO](https://codeburst.io/use-jekyll-like-a-pro-improving-seo-c8cfb81781b7){:target="_blank" rel="nofollow,noreferrer"}
* [Cómo usar Jekyll como un profesional: Mejorar el SEO](https://codeburst.io/use-jekyll-like-a-pro-improving-seo-c8cfb81781b7){:target="_blank" rel="nofollow,noreferrer"}
* [Cómo usar Jekyll como un profesional: Mejorar el SEO](https://codeburst.io/use-jekyll-like-a-pro-improving-seo-c8cfb81781b7){:target="_blank" rel="nofollow,noreferrer"}

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## Plugins de Importación

Si deseas transportar tus datos de Wordpress a Jekyll, es posible que puedas terminar por volverte loco, puesto que a pesar de que existe un método que debería de ser sencillo desde la propia página de documentación de Jekyll; yo no he logrado hacerlo funcionar; por tanto decidí buscar alguna fórmula alternativa.

En mi caso, lo único que me funciono; fue este _plugin_: [Wordpress2Jekyll](https://github.com/FablabLannion/wordpress2jekyll){:target="_blank" rel="nofollow,noreferrer"}. Es bastante viejo, pero es lo único que me ha ayudado a guardar mi antiguo contenido hasta que pueda ir realojandolo dentro de mi nuevo blog.

## **Generando una PWA**

[Registro y Testing de PWA](https://www.pwabuilder.com/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}
[Jekyll PWA](https://alokprateek.in/articles/jekyll-pwa/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}

## Enlaces Externos

Colección de enlaces que he ido guardando con los que poder aprender el uso lo más correcto posible de Jekyll, Ruby, Github Pages y Forestry.

### Enlaces de Chuletas

* [WebFX](https://www.webfx.com/tools/emoji-cheat-sheet/ "Chuleta de todos los emoticonos suportados dentro de la Gema de Ruby Gemoji"){:target="_blank" rel="nofollow,noreferrer"}: Lista de Emojis / Emoticonos que pueden ser usados al estilo de los emoticones de Github :+1:

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### Comercio Electrónico

* [Snipcart + Jekyll](https://snipcart.com/blog/static-site-e-commerce-part-2-integrating-snipcart-with-jekyll "Snipcart, es un pequeño sistema de getión de comercios electrónicos que permite generar una tienda online estática"){:target="_blank" rel="nofollow,noreferrer"}

POR INVESTIGAR
{:notice-info}

### Lenguaje de Uso: Liquid

* [¿Qué es Liquid?](https://shopify.github.io/liquid "Lenguaje generador de plantillas; seguro y orientado al cliente para aplicaciones web flexibles."){:target="_blank" rel="nofollow,noreferrer"}
* [Versión de Liquid, usada por Github Pages](https://www.rubydoc.info/gems/liquid/2.2.2/Liquid/StandardFilters "Versión 2.2 la que utilizan desde Github Páginas en la actualidad"){:target="_blank" rel="nofollow,noreferrer"}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### Plugins de Jekyll

Si bien Jekyll no posee tanto repertorio como Wordpress, si que es posible ir añadiéndole diferentes acciones o pedazos de código que vayan ejecutando diferentes opciones.

* [Github: Jekyll - Twitter](https://github.com/rob-murray/jekyll-twitter-plugin "Plugin que permite trabajar a la API de Twitter desde Jekyll"){:target="_blank" rel="nofollow,noreferrer"}
* [Algoria: Paso a Paso](https://mmistakes.github.io/minimal-mistakes/docs/configuration/#algolia){:target="_blank" rel="nofollow,noreferrer"}
* [Instalar Buscador Algoria + Travis CI](https://community.algolia.com/jekyll-algolia/github-pages.html){:target="_blank" rel="nofollow,noreferrer"}

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### Temas de Jekyll

* [Beautifull Jekyll](https://deanattali.com/beautiful-jekyll/ "Plantilla Hermosa y Sencilla de Jekyll para perfiles personales o portfolios, blogs sencillos"){:target="_blank" rel="nofollow,noreferrer"}
* [Agregar un tema Jekyll](https://help.github.com/en/articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser "Agregar un tema o plantilla a tu página web creada con Jekyll y las Páginas de Github"){:target="_blank" rel="nofollow,noreferrer"} en Github Pages, con el Selector de temas de Jekyll
* [Plantilla de Documentación Jekyll](https://idratherbewriting.com/documentation-theme-jekyll/index.html "Plantilla de Documentación de Jekyll con diferentes Layouts"){:target="_blank" rel="nofollow,noreferrer"}

### Videotutoriales

* [Videotutoriales de Giraffe Academy](https://jekyllrb.com/tutorials/video-walkthroughs "Videotutoriales en inglés sobre Jekyll paso a paso"){:target="_blank" rel="nofollow,noreferrer"}

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## Plantilla de Minimal Mistakes

Vamos a ver paso a paso, algunas de las pautas más importantes sobre como podemos realizar nuestras publicaciones comodamente en está, una de las plantillas más reconocidas usadas de Jekyll.

### Publicar un Enlace

Añadir a la cabecera YAML `link: https://github.com`

### Publicar una Cita

Seguir el siguiente ejemplo, con el uso de >

> Cita o frase a incluir.
> <cite><a href="http://www.brainyquote.com/quotes/quotes/m/marktwain163473.html">Mark Twain</a></cite>

### Actualizar la Fecha de Publicación

Agregar en la cabecera YAML `last_modified_at: 2016-03-09T16:20:02-05:00`

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### Agregar Cajas de Avisos o Notas Informativas

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

¿Desea ajustar varios párrafos u otros elementos en un aviso? Usar Liquid para capturar el contenido y luego filtrarlo con `markdownify` es una buena manera de hacerlo.

### Agregar Etiqueta: more

Si deseas ingresa la etiqueta _más_ o también conocida como _more_ en tus publicaciones puedes ejecutar la etiqueta `<!--more-->` situándolo luego del primer o segundo párrafo, además debes aplicar en tu cabecera YAML:

`excerpt_separator: "<!--more-->"`

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### Configuración de la Plantilla Minimal Mistakes

Se puede cambiar absolutamente todo dentro de la plantilla, siempre y cuando la estés ejecutando de forma independiente y por tu cuenta. Existe, una limitación dentro de las posibles ediciones; si estás; son realizadas a través de Github Pages (como viendo siendo mi caso).

Por tanto, y una vez diferenciadas ambas situaciones, veamos como poder realizar pequeños cambios dentro de la plantilla Minimal Mistakes instalada sobre las páginas de Github.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### Cómo cambiar la fuente tipográfica

1. Cargar el enlace de las fuentes de Google, a través de la carpeta *includes* en el fichero `_includes/head/custom.html`.
2. Por ejemplo: 

<link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,600;1,400&display=swap" rel="stylesheet">

1. Agregar al fichero de .scss las variables correspondientes para las variables `$serif` y `$sans-serif` que corresponden respectivamente a `$global-font-family : $serif;` y `$header-font-family : $sans-serif-narrow;` . En el documento: `_sass/minimal-mistakes.scss`

2. Cambiar dentro del fichero `_sass/minimal-mistakes.scss` las variables redactadas en el paso anterior citando la fuente adecuada.

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## Enlaces por Investigar y por Organizar

* [Jekyll Paginación 2](https://github.com/sverrirs/jekyll-paginate-v2){:target="_blank" rel="nofollow,noreferrer"}
* [GDPR](https://github.com/mmistakes/minimal-mistakes/issues/1867#issuecomment-440663127){:target="_blank" rel="nofollow,noreferrer"} o como cumplir la legislación de Cookies de la Unión Europea.
* [Configurar plantilla, buscador.. Y otros Ajustes del Tema](https://mmistakes.github.io/minimal-mistakes/docs/configuration "Configuración de la Plantilla"){:target="_blank" rel="nofollow,noreferrer"} (- por revisar la implementación de un mejor buscador ¿Algabia? y ajustar algunos otros distintos parámetros -)

* [Jekyll Guía SEO](https://jsinibardy.com/optimize-seo-jekyll){:target="_blank" rel="nofollow,noreferrer"}
* [Jekyll Comenzando](https://terminaladdict.com/linux/jekyll/bash/development/2018/10/17/Jekyll-Getting-Started.html "Jekyll comenzando, publicación creada en el blog Terminal Adicto"){:target="_blank" rel="nofollow,noreferrer"} (terminaladdict.com)
  * [Usando Jekyll 2017](https://mademistakes.com/articles/using-jekyll-2017 "Usando Jekyl 2017. Cómo ir creando una plantilla por completo, paso a paso"){:target="_blank" rel="nofollow,noreferrer"}
    * [Menú de Navegación](http://ajclarkson.co.uk/blog/jekyll-category-post-navigation/ "Cómo crear un menú de navegación en un blog estático con Jekyll"){:target="_blank" rel="nofollow,noreferrer"} - Jekyll Plugins con los que generar una plantilla.. ([jekyll-picture-tag](https://github.com/robwierzbowski/jekyll-picture-tag){:target="_blank" rel="nofollow,noreferrer"}, [sort_name](https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/_plugins/sort_name.rb){:target="_blank" rel="nofollow,noreferrer"}, [jekyll-archives](https://github.com/jekyll/jekyll-archives){:target="_blank" rel="nofollow,noreferrer"}, [jekyll-assets](https://github.com/jekyll/jekyll-assets){:target="_blank" rel="nofollow,noreferrer"}, [jekyll/tagging](https://github.com/pattex/jekyll-tagging){:target="_blank" rel="nofollow,noreferrer"}, [jekyll-tagging-related_posts](https://github.com/toshimaru/jekyll-tagging-related_posts){:target="_blank" rel="nofollow,noreferrer"}, [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap){:target="_blank" rel="nofollow,noreferrer"}, [jemoji](https://github.com/jekyll/jemoji){:target="_blank" rel="nofollow,noreferrer"}, [jekyll-category-post-navigation](http://ajclarkson.co.uk/blog/jekyll-category-post-navigation/){:target="_blank" rel="nofollow,noreferrer"}, and [jekyll-typogrify](https://github.com/myles/jekyll-typogrify){:target="_blank" rel="nofollow,noreferrer"}.)
* [FULL Contenido de Publicación](https://mmistakes.github.io/minimal-mistakes/year-archive/ "Los trucos necesarios para generar una plantilla bien implementada sobre Jekyll"){:target="_blank" rel="nofollow,noreferrer"}, de mi Plantilla Minimal Mistake
* [Documentación Plantilla Minimal Mistake](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide "Documentación de la plantilla Minimal Mistake para Jekyll, paso a paso todas las pautas para su funcionamiento"){:target="_blank" rel="nofollow,noreferrer"} [Layout: Sidebar + Menú](https://mmistakes.github.io/minimal-mistakes/layout-sidebar-nav-list){:target="_blank" rel="nofollow,noreferrer"}
* [Cómo crear Colecciones con Jekyll](https://jekyllrb.com/docs/collections "Crear colecciones con Jekyll"){:target="_blank" rel="nofollow,noreferrer"} (jekyllrb.com)
  * [Cómo crear Colecciones con Jekyll](https://mmistakes.github.io/minimal-mistakes/docs/layouts/#layout-collection "Cómo crear el layout o plantilla necesarios para generar colecciones de múltiples elementos dentro de Jekyll con la plantilla Minimal Mistake"){:target="_blank" rel="nofollow,noreferrer"} (..en Plantilla Minimal Mistake)
* [Kramdown](https://kramdown.gettalong.org/converter/html.html "Kramdown, la librería de código de Ruby que implementa acciones desde el código a través de Markdown") (librería de Ruby, que permite implementar índices entre otras muchas cosas)
* [Foro de Jekyll](https://talk.jekyllrb.com/ "El foro más grande que he encontrado sobre Jekyll")
* [Buscador con Entradas sobre Jekyll](https://codeday.me/es){:target="_blank" rel="nofollow,noreferrer"}
* [WebJeda](https://blog.webjeda.com/optimize-jekyll-seo){:target="_blank" rel="nofollow,noreferrer"} Muchos contenidos y entradas en relación a Jekyll.
* [Enlaces nofollow en Jekyll - SEO](https://jamiegoodwin.uk/seo-friendly-nofollow-links-jekyll-github-pages/){:target="_blank" rel="nofollow,noreferrer"}
* [Crear desplegables](https://github.com/deepchar/deepchar.github.io){:target="_blank" rel="nofollow,noreferrer"} [1](https://github.community/t5/GitHub-Pages/Collapsible-markdown-inside-lt-details-gt-lt-summary-gt-lt/m-p/13838#M1090){:target="_blank" rel="nofollow,noreferrer"}
* [Ordenar Páginas en Jekyll](https://stackoverflow.com/questions/41087699/jekyll-how-to-change-the-default-ordering-of-collections){:target="_blank" rel="nofollow,noreferrer"}
* [Crear listado con las publicaciones de una categoría .yml](https://elliotekj.com/2016/12/05/jekyll-create-a-list-of-all-posts-in-the-same-category){:target="_blank" rel="nofollow,noreferrer"}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

[🔖 Ir al Índice](/jekyll/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

La **Guía de Jekyll** fue creada el *16 de Marzo de 2020* y su última edición fue realizada el *18 de Mayo de 2020*.
{: .notice--info}