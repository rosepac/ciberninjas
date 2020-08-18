---

author: rosepac
bootstrap: true
comments: false
tags:
- Ciberninjas
# thumbnail: /assets/img/blog/16-renderizar-musica-javascript.webp
# feature-img: /assets/img/blog/16-renderizar-musica-javascript.webp
title: '▷ ¿Cómo escribir en el blog de Ciberninjas?'
description: >-
  Paso a paso a realizar, para agregar contenidos dentro de la web de Ciberninjas, cualquier contenido relacionado con la programación y el diseño es bien recibido.
excerpt: >-
  Paso a paso a realizar, para agregar contenidos dentro de la web de Ciberninjas, cualquier contenido relacionado con la programación y el diseño es bien recibido.
canonical_URL: https://ciberninjas.com/ciberninjas-redactores/
permalink: /ciberninjas-redactores/
date: 2020-08-18 21:12:12
published: true

---

Alguna vez, algunas personas me han preguntado como podrían aportar o participar dentro del proyecto; y finalmente, he considerado crear la opción de agregar a otros autores dentro de la página web de Ciberninjas.

A continuación, realizaré una pequeña guía de los pasos necesarios para agregar contenidos dentro de la web, lo que nunca ha estado cerrado para otros usuarios; si bien, nunca lo había ofrecido directamente antes.

Ahora, contemplando que la página ya contiene una cantidad de contenido lo suficientemente importante; y parece, que su mantenimiento parece estar más o menos estable.

Considero es un buen momento de invitar a otras personas, si es que alguien desea participar.

## **¿Qué ofrezco a cambio?**

Sinceramente, a día de hoy no puedo ofrecer gran cosa a cambio de que participes.

Siendo realistas, ofrezco un lugar en el que publicar si te gustaría hacerlo, sin que debas preocuparte demasiado por mantener tus publicaciones o tu blog personal.

Ciberninjas no es una web perfecta, ni mucho menos, pero al menos es una página dedicada concretamente a una temática en la que no existen demasiadas páginas web, ni contenidos en español; en realidad.

Además, siempre puede ayudar a quién se anime a publicar, el que yo me ocuparé de realizar la difusión de contenidos a través de redes sociales y compartirlo con nuestra, poco a poco, crecida comunidad:

- Página Facebook: + 4.000 seguidores en la página adyacente (Cibercursos) que si facebook me lo permite, se pasará a denominar Ciberninjas (algún día). Con la que se ofrecen picos de visualización de hasta incluso 6.000 personas en algunos días y con un alcance continuo de 1.000 personas diarias).
- Grupo Facebook: +- 2.400 usuarios en el grupo de facebook.
- Twitter: No es demasiado el tirón, pero se ofrecen la interacción de entre 110 y 130 pro cada Tweet compartido.
- Linkedin: Cuesta un poco el trabajo de red social a través de Linkedin, sobre todo porque no es una red enfocada en esto. Pero poco a poco, se van ganando entre 40 y 50 visualizaciones por publicación.
- Instagram: Estamos trabajando en ello 😹
- Grupo Telegram: A poco pasamos de las 150 personas, el alcance real es de entre 30 y 40 visualización de lo compartido a través de allí.

En estos momentos, la web, posee anuncios de Adsense. Más, será desactivada de todos los artículos de aquellas personas que lo deseen.

## **¿Qué contenidos puedes publicar?**

Realmente. Ciberninjas, evoluciona de una idea de blog anterior, el que se intentaba centrar en transmitir las noticias más recientes sobre los frameworks web. Con el paso del tiempo, eso casi se ha quedado en el olvido.

En la actualidad. Se intentan publicar las actualizaciones sobre proyectos relacionados con los lenguajes de la programación y los frameworks de cada diferente programa; además, de contenidos interesantes que considero no se pueden encontrar en español.

Lo ideal, seguramente, sería. Que si una persona se animase a publicar. Comenzará a realizar continuamente publicaciones sobre un lenguaje o framework de programación concreto, o una temática concreta.

## **¿Por dónde empezar?**

### **Creando tu usuario de escritor**

- Lo primero, tendrás que crear tu perfil de autor.
  - Edita el [fichero de autores](https://github.com/rosepac/ciberninjas/blob/master/_data/authors.yml) a través del repositorio de Github.
- Agrega un apartado idéntico al existente para el usuario `rosepac`:

{% highlight js %}
rosepac:
  name: "Pablo Alvarez Corredera"
  avatar: "https://avatars0.githubusercontent.com/u/4309005?s=460&u=4"
  url: "https://twitter.com/ciberninjas"
{% endhighlight %}

- Cambiando el nombre de `rosepac` por la palabra clave que usarás para indicar que eres el autor de las publicaciones que crees posteriormente.
- Sustituye el nombre que aparece entre las comillas del apartado `name:` introduciendo tu nombre real.
- Sustituye la URL de la línea siguiente por una URL de tu imagen de avatar (a poder ser una imagen en formato .webp de aprox. 400px X 400px), puedes extraer la URL de la imagen de tu perfil de Github, o bien subir una imagen al directorio siguiente `https://github.com/rosepac/ciberninjas/tree/master/assets/img/autores` y situa su ruta como la URL a mostrar `assets/img/autores/NombreDelFicheroDeTuAvatar.webp`
- Finalmente, incluye la URL a la que quieres que se redirija tu nombre de redact@r que aparece en la parte superior de las publicaciones que realices, bajo el título de la misma; puedes enlazar a tu Github, tu Twitter, tu Instagram, u lo que quieras.
  - Quedaría algo, como así:

{% highlight js %}
redactoraana:
  name: "Ana García García"
  avatar: "assets/img/autores/redactoraana.webp"
  url: "https://twitter.com/anagarciagarcia"
{% endhighlight %}

## **Creando una nueva publicación**

- Usa markdown y las etiquetas YAML.
- Copia el contenido siguiente, para el encabezado de cada publicación.

{% highlight js %}
author: redactoraana
bootstrap: true
comments: false
tags:
- EtiquetaQueDeseesAñadir
thumbnail: /assets/img/blog/NombreDeLaImagen.webp
feature-img: /assets/img/blog/NombreDeLaImagen.webp
title: '▷ Título de tu nueva publicación'
description: >-
  Breve descripción de la publicación, a poder ser que no sea superior a aproximadamente 240 carácteres.
excerpt: >-
  Copia de la descripción.
canonical_URL: https://ciberninjas.com/nombre-de-la-url/
permalink: /nombre-de-la-url/
date: 2020-08-18 21:12:12 # Fecha de la publicación, ten en cuenta de que puede ser que no se actualice si la hora es más actual a la hora del servidor (EE.UU)
published: true

---
{% endhighlight %}
<!-- {% highlight js %}{% endhighlight %} -->

## **Contenido de las publicaciones**

- Las publicaciones permiten formato Markdown y HTML.
- Se puede agregar un Índice de los encabezados automáticamente, siempre que utilices VSCode para generar el contenido (existen plugins para su creación).
- Las imágenes insertadas deben ser previamente subidas a la ruta `assets/img/blog/` la otra opción es, que crees una carpeta personal dentro de la ruta `assets/img/` bajo el nombre de `blogredactoraana` o lo que es lo mismo `blogMásNombreDeTuIdentificador`.
- Las imágenes no pueden ser fotografías directamente extraídas de Google, y en el caso de `imágenes` de vectores; no deben ser imágenes que Google detecte en un número mayor de miles. Si deseas comprobar esto, ante los ojos de Google, simplemente debes Clickar con el botón derecho sobre una imagen cualquiera; y posteriormente, pulsar sobre Buscar imagen en Google. Si el número de imágenes encontradas es superior a varias decenas de páginas de Google - deséchala.
- Si deseas acceder a imágenes poco o casi nada utilizadas, sencillamente deja de rastrear en Google.
- Las imágenes usadas deben estar en formato .WEBP (puedes [convertirlas desde aquí](https://imagen.online-convert.com/es/convertir-a-webp){:target="_blank" rel="nofollow,noreferrer"}) y a poder ser, no tamaño demasiado excesivo (máximo de 2560x1440).
- El atajo de código para insertar una imagen, es el siguiente `![Nombre o título de la imagen](URL DE LA IMAGEN "Texto alternativo de la imagen")` 
- Si deseas agregar código, debes usar la siguiente etiqueta: agregar una línea antes`{% highlight js %}` y una línea después`{% endhighlight %}`. Si simplemente deseas marcar una palabra o una pequeña frase, como si fuese código, te servirá; el incluir una comilla simple, tanto al principio como al final.
- Al final de las publicaciones. Opcionalmente, puedes agregar una sección bajo un título `h3` denominada `relacionados` en la que se muestren los enlaces relacionados a tu publicación dentro de Ciberninjas. En su defecto, puedes incluir este apartado, para indicar otras publicaciones propias creadas anteriormente dentro de Ciberninjas.

{% highlight js %}
### Relacionados

[Título de la Publicación 1](https://ciberninjas.com/URL-de-la-Publicacion-Relacionada)

[Título de la Publicación 1](https://ciberninjas.com/URL-de-la-Publicacion-Relacionada)

[Título de la Publicación 1](https://ciberninjas.com/URL-de-la-Publicacion-Relacionada)
{% endhighlight %}

- Sobre los enlaces externos. Si deseas incluir enlaces externos hacía otras páginas, debes incluirlos bajo el formato siguiente:
`[NombreDelEnlaceAMostrar](https://URL-Al-Enlace "Título del Enlace"){:target="_blank" rel="nofollow,noreferrer"}` esto hará que los enlaces se abran en una pestaña externa y que sea tratado de una forma específica respecto al SEO.
- Al agregar la etiquetade YAML `bootstrap: true` puedes utilizar cualquier código usado dentro del framework CSS de Bootstrap en tus publicaciones.
- Inserción de vídeo. El código para insertar vídeos utilizado, es el que se muestra a continuación. Si en su defecto, fuesen insertados de otra forma, la URL de Youtube siempre deberá incluir la opción de `no-coockies` o "privacidad" en su código. Deberás cambiar `CÓDIGOVÍDEO` por el ID identificador del vídeo de Youtube (vamos la serie de números y letras que Youtube le asigna).

{% highlight js %}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/CÓDIGOVÍDEO?rel=0" allowfullscreen></iframe>
</div><br/>
{% endhighlight %}

- Inserción sencilla de botones, gracias a las clases de bootstrap. Si lo deseas, puedes incluir botones de forma sencilla, simplemente debes incluir al final de un enlace y entre corchetes, las clases de bootstrap que correspondan al botón que quieres agregar.

Por ejemplo, para un botón negro que ocupe todo el ancho del contenido, agregaremos `{: .btn .btn-dark .btn-lg .btn-block}` y si ese botón, es hacía un enlace externo `{: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}` simplemente con modificar la clase `btn-dark` por los atributos típicos de Bootstrap `primary, secondary, danger, etc` se modificará el color del botón o `lg,etc` para modificar su tamaño.

- Fuente. La fuente debe ser añadida al final de la página, tal que así `> **Fuente**: [Página de XXXX](https://URL-De-La-Fuente.com/){:target="_blank" rel="nofollow,noreferrer"}`.
- Licencia. La licencia del contenido, en principio es de Creative Commons 2.0. A excepción de que en la publicación concreta se indique lo contrario.

## **Enviando tu publicación**

Si el contenido ha sido generado a través de Github, simplemente rellena el contenido del `Commit` de la forma más adecuada posible. Envíalo pulsando sobre `Commit Changes` y si no te lo permitiese, simplemente sigue los pasos que Github te indica para crear un Fork y posteriormente realizar el `Commit` pertinente.

Si el contenido, lo vas a realizar desde un fork del repositorio del [original](https://github.com/rosepac/ciberninjas/edit/master/) desde tu editor de código favorito, es más que probable que ya sepas los pasos que debes seguir 😉

## **Aprobación de las publicaciones**

En un corto período de tiempo, revisaré y casi con toda seguridad aceptaré tu publicación. Mi idea, es la de no ser especialmente estricto con los contenidos, siempre y cuando no estén repletos de SPAM, enlaces de afiliados u alguna otra barbaridad.

- Seré permisivo con los enlaces de afiliados u otras referencias propias, siempre y cuando no sean abusivos.
- Las publicaciones incluyen publicidad de Adsense por defecto, de inicio, la eliminaré de las publicaciones externas de las personas que deseen participar.

### **Relacionados** <!-- omit in toc -->

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Página de ZzFXM](https://keithclark.github.io/ZzFXM/){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.
