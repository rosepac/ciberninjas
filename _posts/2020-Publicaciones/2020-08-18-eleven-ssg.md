---

author: rosepac
bootstrap: true
comments: false
tags:
- SSG
thumbnail: /assets/img/blog/18-eleventy-ssg.webp
feature-img: /assets/img/blog/18-eleventy-ssg.webp
title: '▷ Eleventy: Un generador de sitios estáticos muy simple y minimalista'
description: >-
  Eleventy es un generador de sitios estático simple basado en JavaScript. Lo bueno de Eleventy es que no tiene configuración por defecto, pero también se puede ejecutar con opciones de configuración.
excerpt: >-
  Eleventy es un generador de sitios estático simple basado en JavaScript. Lo bueno de Eleventy es que no tiene configuración por defecto, pero también se puede ejecutar con opciones de configuración.
canonical_URL: https://ciberninjas.com/eleventy-ssg/
permalink: /eleventy-ssg/
date: 2020-08-18 10:12:12
published: true

---

Eleventy es un [generador de sitios estático](https://ciberninjas.com/ssg/) simple o [SSG](https://ciberninjas.com/wiki/generador-de-sitios-estaticos/) basado en JavaScript. Lo bueno de Eleventy, es que no tiene configuración por defecto, pero también se puede ejecutar con opciones de configuración; lo que hace que sea totalmente flexible y extremadamente fácil de usar al mismo tiempo.

A diferencia de otros generadores de sitios estáticos, como por ejemplo [Jekyll](https://ciberninjas.com/jekyll/), Eleventy no te obliga a utilizar un motor de plantilla específico. Eleventy trabaja con muchos lenguajes de plantillas diferentes como:

- HTML (*.html)
- Markdown (*.md)
- JavaScript (*.11ty.js)
- Liquid (*.liquid)
- Nunjucks (*.njk)
- Handlebars (*.hbs)
- Mustache (*.mustache)
- EJS (*.ejs)
- Haml (*.html)
- Pug (*.pug)
- JavaScript Template Literals (*.jstl)

Se puede optar por utilizar cualquiera de estos lenguajes para la realización de las plantillas y el contenido; y el propio SSG de Eleventy se encarga de reconocer el motor correspondiente a través de la extensión del archivo.

## **Creando tu primer proyecto con Eleventy**

### Crea una carpeta para el proyecto

Para crear un nuevo proyecto de Eleventy, solo necesita crear una carpeta vacía:

{% highlight js %}
$ mkdir eleventy-01
$ cd eleventy-01
{% endhighlight %}

### Crear un archivo package.json

Dentro de esta carpeta de proyecto recién creada, debes crear un archivo inicial para json: `package.json`, de modo que puedas usar la herramienta de Node.js Package Manager (npm) posteriormente, para la administración de las dependencias:

<!-- {% highlight js %}{% endhighlight %} -->
{% highlight js %}
$ npm init -y
{% endhighlight %}

### Instalación de Eleventy

Habiendo creado el archivo `package.json` a continuación debemos agregar el paquete de Eleventy ( @11ty/eleventy ) como una dependencia de desarrollo, dentro de nuestro proyecto, usando el comando `npm install`:

{% highlight js %}
$ npm install --save-dev @11ty/eleventy
{% endhighlight %}

### Ejecutando Eleventy

Ahora solamente debes probar que Eleventy ya esta instalado. Ejecuta el comando, y la consola te mostrará una respuesta del número de ficheros creados y el tiempo que ha tardado en ello.

{% highlight js %}
$ npx @11/eleventy
{% endhighlight %}

Como aún no se han creado archivos adicional a la carpeta del proyecto, el resultado debería ser de 0 archivos. También puedes iniciar Eleventy en modo de recarga en caliente, utilizando la opción –serve:

{% highlight js %}
$ npx @11/eleventy --serve
{% endhighlight %}

En este caso, el comando sigue ejecutándose y está atento a cualquier cambio de archivo de los archivos dentro de la plantilla y dentro de la carpeta del proyecto actual. Si el contenido de un archivo se cambia y luego se guarda, Elevanty reconoce ese cambio automáticamente y genera un nuevo archivo de salida.

### Adición de plantillas

Ahora es el momento de ver realmente a Eleventy en acción y eso requiere que agreguemos archivos de plantilla a nuestro proyecto.

### Crear una plantilla de diseño

En primer lugar, estamos creando un archivo de plantilla especial, una plantilla de diseño. Al utilizar una plantilla de diseño, puedes ajustar el contenido con un diseño común. Para crear dicha plantilla, primero agregamos una nueva carpeta denominada `_includes` al proyecto:

$ mkdir _includes

Luego, dentro de esta nueva carpeta `_includes`, creamos un nuevo archivo vacío con el nombre de `mylayout.njk` e insertamos el siguiente código de plantilla:


{% highlight js %}
site_title: Mi Primer Sitio de Eleventy
---

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ site_title }}</title>
    </head>
    <body>
        <h1>{{ site_title }}</h1>
        <hr/>
        {{ content | safe }}
        <hr/>
        <small>by
            <a href="https://ciberninjas.com">Ciberninjas.com</a>
        </small>
    </body>
</html>
{% endhighlight %}

Al usar la extensión de archivo njk, estamos indicando que estamos usando el lenguaje de plantillas Nunjucks dentro de este archivo. Si quieres saber más sobre Nunjucks puedes encontrar el sitio web del proyecto y la documentación correspondiente en [Mozilla Nunjucks](https://mozilla.github.io/nunjucks/){:target="_blank" rel="nofollow,noreferrer"}.

El código comienza con una sección preliminar al principio. Dentro de la sección de contenido inicial, puede definir datos que luego se pueden usar en el siguiente código de plantilla. En el ejemplo, estamos usando la sección principal para definir la propiedad `site_title` que contiene una cadena para el valor del título.

Dentro del código de la plantilla, accedemos a `site_title` utilizando llaves dobles. El valor de esta propiedad se utiliza para establecer el título de la página.

### Creación de plantillas utilizando un diseño

Ahora creemos dos plantillas más (usando Markdown como el lenguaje de la plantilla) usando nuestra plantilla de diseño creada previamente: Cree un nuevo archivo `post-01.md` en la carpeta del proyecto e inserte el siguiente código de Markdown:

{% highlight js %}
---
layout: mylayout.njk
title: Mi primer post del blog.
---

## {{ title }}

This is my first blog post! Have much fun using _Eleventy_, an easy and flexible JavaScript-based static site generator.
{% endhighlight %}

Estas plantillas, generan una publicación simple sobre un blog, que aún no posee ningun tipo de CSS ni estilo decorativo incluido.

#### **Relacionados** <!-- omit in toc -->

[Guía Completa de Generadores de Sitios Estáticos o SSG](https://ciberninjas.com/ssg/)

[🥇 ▷ Jekyll, Aprender desde Cero a Experto en 2020](https://ciberninjas.com/guias/ssg/jekyll)

[Generador de Sitios Estáticos](https://ciberninjas.com/wiki/generador-de-sitios-estaticos/)

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Página de ZzFXM](https://www.11ty.dev/){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.