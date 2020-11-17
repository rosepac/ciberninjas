---

layout: page
author: rosepac
bootstrap: true
comments: false
tags:
- Editores de Texto
- Markdown
thumbnail: /assets/img/2020/markdown-nubes-720.webp
feature-img: /assets/img/2020/markdown-nubes-720.webp
img: /assets/img/2020/markdown-nubes-720.webp
title: '▷ Cheatsheet u hoja de trucos de Markdown 2021'
description: >-
  Una referencia rápida a la sintaxis de Markdown.
excerpt: >-
  Una referencia rápida a la sintaxis de Markdown.
canonical_URL: https://ciberninjas.com/markdown-cheatsheet/
permalink: /markdown-cheatsheet/
date: 2020-10-30 08:32:32
last_modified_at: 
published: true

---

<div class="hidden-sm-down">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
    <li class="breadcrumb-item"><a href="/guias/">Guías</a></li>
    <li class="breadcrumb-item"><a href="/markdown/">Markdown</a></li>
    <li class="breadcrumb-item active" aria-current="page">Markdown CheatSheet</li>
  </ol>
</nav>
</div>

**Cheatsheet o Hoja de referencia o de trucos para aprender a utilizar Markdown, y totalmente en español.**

Esta hoja de trucos de Markdown proporciona una descripción general rápida de todos los elementos de la sintaxis de Markdown. A continuación, te dejo unos enlaces, por si necesitas [más información sobre que es Markdown](https://ciberninjas.com/markdown/) o si quieres conocer [los mejores editores para Markdown](https://ciberninjas.com/editores-markdown/) con los que trabajar.

<!-- No puede cubrir todos los casos extremos, cualquiera de estos elementos, consulte las guías de referencia para conocer la sintaxis básica y avanzada. -->

> [Aprender Markdown](https://ciberninjas.com/markdown/) >> [Editores Markdown](https://ciberninjas.com/editores-markdown/) >> [Cursos Markdon](https://ciberninjas.com/cursos-lenguajes-marcado/#cursos-gratis-de-markdown)

- [**Sintaxis Básica**](#sintaxis-básica)
- [**Sintaxis Avanzada**](#sintaxis-avanzada)
- [**Descarga la Cheatsheet**](#descarga-la-cheatsheet)

## **Sintaxis Básica**

Estos elementos son los que establecen la base principal de Makrdown.

| Elemento                                                     | Sintaxis de Markdown                            |
| ------------------------------------------------------------ | ----------------------------------------------- |
| **Encabezado** | `# H1 ## H2 ### H3`                               |
| **Negrita**  | `**texto en negrita**`                          |
| **Cursiva** | `*texto en cursiva*`                            |
| **Blockquote** | `> blockquote`                                  |
| **Lista Ordenada** | `1. Primer item 2. Segundo item 3. Tercer item` |
| **Lista Desordenada** | `- First item- Second item- Third item`         |
| **Código**   | ` ` código ` `                                      |
| **Línea Divisoria Horizontal** | `---`                                           |
| **Enlace**  | `[título](https://www.ejemplo.com)`              |
| **Imagen** | `![alt text](imagen.jpg)`                        |
| **Imagen** | `[![alt text](imagen.jpg)](https://www.ejemplo.com)`                        |

## **Sintaxis Avanzada**

Estos elementos amplían la sintaxis básica agregando características adicionales. No todas las aplicaciones de Markdown admiten estos elementos.

| Elemento                                                     | Sintaxis Markdown                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Tablas** | `| Sintaxis | Descripción || ----------- | ----------- || Encabezado | Título || Párrafo | Texto |` |
| **Bloque de Código** | ````{ "primerNombre": "Pablo", "primerApellido": "Álvarez", "edad": 25}```` |
| **Nota al Pie de Página** | `Esta es una frase con una nota al pie de página. [^1][^1]: Este es el pie de página.` |
| **Encabezado con ID** | `### Mi Encabezado Principal {#id-personalizado}`                   |
| **Definiciones de Palabras** | `termino: definición`                                        |
| **Contenido Tachado** | `~~El mundo es plano.~~`                                     |
| **Lista de Tareas** | `- [x] Escribir el comunicado de prensa- [ ] Actualizar la página web- [ ] Contactar con la prensa` |

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Cómo se escribe un título de página con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes utilizar la almohadilla (#) al inicio de la frase que deseas utilizar como título de la página, artículo o documento, etc. Esto equivaldrá a un <h1> de HTML."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se escribe un título secundario con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes utilizar dos almohadillas (##) si deseas generar un subtítulo equivalente a un sutítulo <h2> de HTML. O tres almohadillas (###) para <h3> y así sucesivamente. Las # se colocan previas a la frase que se desea con subtítulo."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se utiliza la negrita con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes rodear la palabra, frase o párrafo completo con dos asteriscos (**), tanto al inicio de la negrita como al cierre. Ejemplo: Una palabra en **negrita** (negrita, sería la palabra en negrita)."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se utiliza la cursiva con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes rodear la palabra, frase o párrafo completo con un asterisco (*), tanto al inicio de la cursiva como al cierre. Ejemplo: Una palabra en *cursiva* (cursiva, sería la palabra en cursiva)."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se crea un bloque de blockquote con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes utilizar el símbolo de > al inicio de la frase que desees que aparezca enmarcado dentro de un cuadro \"blockquote\" que se mostrará con el diseño que se le aplique a través del .CSS."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se crear una lista ordenada con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Solamente debes enumerar (1,2,3,4,5,6) cada frase que desees que forme parte de la lista; también, puedes crear las listas con el número 1; tal que así (1,1,1,1,1,1,1) y Markdown se encargará de mostrar la secuencia de Nº."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se crear una lista desordenada con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Solamente debes utilizar el guion al inicio de cada \"item\" de la lista. (- Item 1, - Item 2, - Item 3) y redactar  cada uno de los ítems en una línea nueva."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se incluye código con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "La inclusión de código dentro de Markdown puede cambiar dependiendo del Markdown que se use. Pero, casi siempre, funciona la inclusión del código entre dos líneas que incluyan tres comillas simples de apertura (```)"
    }
  },{
    "@type": "Question",
    "name": "¿Cómo se incluye un comando de código con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes agregar el comando entre dos comillas simples de apertura. Ejemplo: `ComandoAquí`. Esto generará un pequeño cuadro sombreado alrededor de ese comando concreto."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo puedo crear una línea divisoria horizontal en Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Incluyendo tres guiones (---) en una única línea; debes dejar la línea exclusivamente con los guiones. Eso generará una línea divisoria entre el contenido superior e inferior."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo crear un enlace o hipervínculo con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes incluir el título entre corchetes y seguido, la URL entre paréntisis. Ejemplo. [título](https://www.ejemplo.com)."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo insertar una imagen en Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "La inserción de una imagen, es muy sencilla. Solamente debes utilizar el siguiente código: ![alt text](imagen.jpg)"
    }
  },{
    "@type": "Question",
    "name": "¿Cómo insertar una imagen con enlace en Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "La inserción de una imagen, es unos de los códigos, más rebuscados. Aún así. Es algo sencillo, solo debes seguir el siguiente ejemplo: [![alt text](imagen.jpg)](https://www.ejemplo.com)"
    }
  },{
    "@type": "Question",
    "name": "¿Cómo crear tablas con Markdown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Si bien, puedes utilizar el símbolo ( | ) para implementar tablas dentro de Markdown. Existe una mejor opción, que es utilizar una de las múltiples páginas que existen para su creación, las que, cuidan que existan los espacios necesarios para que la página se represente de forma correcta."
    }
  },{
    "@type": "Question",
    "name": "¿Cómo incluir palabras tachadas en Mardown?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Debes utilizar dos \"cejas\" (~~) tanto antes como después del contenido que deseas tachar."
    }
  }]
}
</script>

## **Descarga la Cheatsheet**

Puede descargar esta [cheatsheet u hoja de trucos de Markdown](https://drive.google.com/file/d/1jrTzd53AvkiePGsE4iGl2Ja7vNSzB7gD/view?usp=sharing) como un archivo de Markdown para usar en su aplicación de Markdown.

> [Aprender Markdown](https://ciberninjas.com/markdown/) >> [Chuleta Markdown](https://ciberninjas.com/markdown-cheatsheet/) >> [Cursos Markdon](https://ciberninjas.com/cursos-lenguajes-marcado/#cursos-gratis-de-markdown)

### **Relacionados** <!-- omit in toc -->

[▷ Empezando con Markdown](https://ciberninjas.com/markdown/)

[▷ Los Mejores Editores de Texto GRATIS para PROGRAMAR en 2021](https://ciberninjas.com/mejores-editores-texto/)

[▷ 11 Mejores Editores de Código de Python y entornos de desarrollo IDE 2021](https://ciberninjas.com/mejores-ide-python/)

[▷ Los 11 Mejores Editores de Código PHP y Entornos de Desarrollo 2021](https://ciberninjas.com/mejores-editores-php/)

[▷ Gitpod: Plataforma IDE en la nube de código abierto](https://ciberninjas.com/gitpod-abre-el-codigo/)

[▷ Segunda actualización de Java para Visual Studio Code en 2020](https://ciberninjas.com/actualidad-java-visual-studio/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Una descripción general de Markdown, cómo funciona y qué puede hacer con él](/assets/img/2020/markdown-nubes-720.webp)

<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement":
 [
  {
   "@type": "ListItem",
   "position": 1,
   "item":
   {
    "@id": "https://ciberninjas.com/guias/",
    "name": "Las Mejores Guías de Tecnología del Mundo"
    }
  },
  {
   "@type": "ListItem",
   "position": 2,
   "item":
   {
    "@id": "https://ciberninjas.com/markdown/",
     "name": "Empezando con Markdown"
    }
  },
  {
   "@type": "ListItem",
  "position": 3,
  "item":
   {
     "@id": "https://ciberninjas.com/markdown-cheatsheet/",
     "name": "Cheatsheet u hoja de trucos de Markdown 2021"
   }
  }
 ]
}
</script>