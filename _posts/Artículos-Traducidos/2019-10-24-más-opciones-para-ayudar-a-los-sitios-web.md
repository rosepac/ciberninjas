---

author: rosepac
bootstrap: true
title: Nuevas Opciones para Ayudar a los Sitios Web a Obtener una Vista Previa de su Contenido en la Búsqueda de Google
description: Metaetiquetas y robots, aprender paso a paso a implementar las nuevas vistas previas que muestra Google a través de su buscador, por John Mueller
excerpt: Metaetiquetas y robots, aprender paso a paso a implementar las nuevas vistas previas que muestra Google a través de su buscador, por John Mueller
date: 2019-09-24 15:00:00 +0200
permalink: /opciones-ayudar-sitios-web-vista-previa/
canonical_URL: https://ciberninjas.com/opciones-ayudar-sitios-web-vista-previa/
tags:
  - Actualidad
  - Herramienta Webmaster

---

> 📰 📱🔍 Metaetiquetas y robots, aprender paso a paso a implementar las nuevas vistas previas que muestra Google a través de su buscador, por [John Mueller](https://twitter.com/johnmu?rel=rel){:target="_blank" rel="nofollow,noreferrer"}: analista de tendencias para webmasters

Google usa vistas previas de contenido, incluidos [fragmentos de texto](https://support.google.com/webmasters/answer/35624){:target="_blank" rel="nofollow,noreferrer"} y otros medios, para ayudar a las personas a decidir si un resultado es relevante para su consulta. El tipo de vista previa que se muestra depende de muchos factores, incluido el tipo de contenido que busca una persona y el tipo de dispositivo en el que lo está viendo.

Por ejemplo, si busca resultados de recetas en Google, es posible que vea imágenes en miniatura y calificaciones de los usuarios, cosas que pueden ser más útiles que los fragmentos de texto a la hora de decidir qué quiere comer.

Alternativamente, o tal vez esté buscando un concierto cercano y pueda ver los eventos directamente en los resultados de búsqueda. Esto es posible gracias a los editores que marcan sus páginas con [datos estructurados](https://developers.google.com/search/docs/guides/search-gallery){:target="_blank" rel="nofollow,noreferrer"}.

Google genera automáticamente vistas previas de una manera destinada a ayudar al usuario a comprender por qué los resultados mostrados son relevantes para su búsqueda y por qué el usuario querría visitar las páginas vinculadas.

Sin embargo, reconocemos que los propietarios de sitios pueden desear ajustar de forma independiente la extensión de su contenido de vista previa en los resultados de búsqueda.

Para facilitar que los sitios web individuales definan cuánto o qué texto debería estar disponible para el recorte y la medida en que otros medios deberían incluirse en sus vistas previas, ahora presentamos varias configuraciones nuevas para webmasters.

- [Informar a Google](#informar-a-google)
- [Uso de metaetiquetas de robots](#uso-de-metaetiquetas-de-robots)
- [Usando el nuevo atributo HTML de nosnippet de datos](#usando-el-nuevo-atributo-html-de-nosnippet-de-datos)
- [Una nota sobre resultados enriquecidos y fragmentos destacados](#una-nota-sobre-resultados-enriquecidos-y-fragmentos-destacados)
- [El formato AMP](#el-formato-amp)

## Informar a Google

Anteriormente, solo era posible permitir un fragmento de texto o no permitirlo. Ahora presentamos un conjunto de métodos que permiten una configuración más detallada del contenido de vista previa que se muestra para sus páginas. Esto se realiza a través de dos tipos de configuraciones nuevas: un conjunto de metaetiquetas de robots y un atributo HTML.

## Uso de metaetiquetas de robots

La metaetiqueta robots se agrega a la &lt;head&gt; de una página HTML, o se especifica mediante el encabezado HTTP x-robots-tag. Las metaetiquetas de robots que abordan el contenido de vista previa de una página son:

- `nosnippet`: Esta es una opción existente para especificar que no desea que se muestre ningún fragmento de texto para esta página.

- `max-snippet:[number]`: &iexcl;Nuevo\! Especifique una longitud máxima de texto, en caracteres, de un fragmento para su página.

- `max-video-preview:[number]`: &iexcl;Nuevo\! Especifique una duración máxima en segundos de una vista previa de video animado.

- `max-image-preview:[setting]`: &iexcl;Nuevo\! Especifique un tamaño máximo de vista previa de la imagen que se mostrará para las imágenes en esta página, utilizando "ninguno", "estándar" o "grande".

Se pueden combinar, por ejemplo:

{% highlight js %}
<meta name="robots" content="max-snippet:50, max-image-preview:large">
{% endhighlight %}

La configuración de vista previa de estas metaetiquetas entrará en vigencia a mediados o fines de octubre de 2019 y puede demorar aproximadamente una semana para que se complete el lanzamiento global.

## Usando el nuevo atributo HTML de nosnippet de datos

Una nueva forma de ayudar a limitar el cual parte de una página es elegible para ser mostrado como un fragmento es el " `data-nosnippet`" atributo HTML en los elementos `span`, `div`y `section`. Con esto, puedes evitar que esa parte de una página HTML se muestre dentro del fragmento de texto en la página.

Por ejemplo:

{% highlight js %}
<p><span data-nosnippet>Harry Houdini</span> is undoubtedly the most famous magician ever to live.</p>
{% endhighlight %}

El atributo HTML de nosnippet de datos comenzará a afectar la presentación en los productos de Google a finales de este año. Obtenga más información en nuestra [documentación de desarrollador para la metaetiqueta de robots, x-robots-tag y data-nosnippet](https://developers.google.com/search/reference/robots_meta_tag){:target="_blank" rel="nofollow,noreferrer"}.

## Una nota sobre resultados enriquecidos y fragmentos destacados

El contenido de [los datos estructurados](https://developers.google.com/search/docs/guides/intro-structured-data){:target="_blank" rel="nofollow,noreferrer"} es apto para mostrarse como [resultados enriquecidos en la búsqueda](https://developers.google.com/search/docs/guides/search-gallery){:target="_blank" rel="nofollow,noreferrer"}. Este tipo de resultados no se ajustan a los límites declarados en la configuración de meta robots anterior, sino que pueden abordarse con mucha mayor especificidad limitando o modificando el contenido proporcionado en los datos estructurados.

Por ejemplo, si se incluye una [receta](https://developers.google.com/search/docs/data-types/recipe){:target="_blank" rel="nofollow,noreferrer"} en datos estructurados, el contenido de esos datos estructurados puede presentarse en un carrusel de recetas en los resultados de búsqueda. Del mismo modo, si un evento está marcado con datos estructurados, puede presentarse como tal en los resultados de búsqueda. Para limitar esa presentación, un editor puede limitar la cantidad y el tipo de contenido en los datos estructurados.

Algunas características especiales de la búsqueda dependen de la disponibilidad del contenido de vista previa, por lo que limitar sus vistas previas puede evitar que su contenido aparezca en estas áreas. [Los fragmentos destacados](https://support.google.com/websearch/answer/9351707){:target="_blank" rel="nofollow,noreferrer"}, por ejemplo, requieren que se muestre un cierto número mínimo de caracteres.

Esto puede variar según el idioma, por lo que no hay una longitud máxima exacta de fragmentos que podamos proporcionar para garantizar que aparezca en esta función. Aquellos que no desean que el contenido aparezca como fragmentos destacados pueden experimentar con longitudes de fragmento máximo más bajas. Aquellos que quieran una forma garantizada de darse [de baja de los fragmentos destacados](https://support.google.com/webmasters/answer/6229325){:target="_blank" rel="nofollow,noreferrer"} deben usar nosnippet.

## El formato AMP

El [formato AMP](https://kutt.it/amp){:target="_blank" rel="nofollow,noreferrer"} viene con ciertos beneficios, incluida la elegibilidad para una presentación más destacada de imágenes en miniatura en [los resultados de búsqueda](https://developers.google.com/search/docs/guides/about-amp){:target="_blank" rel="nofollow,noreferrer"} y en el [feed de Google Discover](https://support.google.com/webmasters/answer/9046777){:target="_blank" rel="nofollow,noreferrer"}.

Se ha demostrado que estas características generan más tráfico a los artículos de los editores. Sin embargo, los editores que no desean que Google use imágenes en miniatura más grandes cuando sus páginas AMP se presentan en la búsqueda y Discover pueden usar la configuración anterior de meta robots para especificar una vista previa máxima de la imagen de "estándar" o "ninguna".

Estas nuevas opciones están disponibles para los propietarios de contenido en todo el mundo y funcionarán igual para los resultados que mostramos a nivel mundial. Esperamos que le ayuden a optimizar el valor que obtiene de la búsqueda y a alcanzar sus objetivos comerciales.

Para obtener más información, consulte nuestra [documentación para desarrolladores sobre metaetiquetas](https://developers.google.com/search/reference/robots_meta_tag){:target="_blank" rel="nofollow,noreferrer"}. Si tiene alguna no dudes en visitar nuestros [foros de ayuda para webmasters](https://support.google.com/webmasters/go/community){:target="_blank" rel="nofollow,noreferrer"}.

> **Fuente**\: [Blog de Webmaster Central](https://webmasters.googleblog.com/2019/09/more-controls-on-search.html "Más Opciones para Ayudar a los Sitios Web a Obtener una Vista Previa de su Contenido en la Búsqueda de Google"){:target="_blank" rel="nofollow,noreferrer"}