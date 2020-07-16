---

author: rosepac
bootstrap: true
title: Nuevas Opciones para Ayudar a los Sitios Web a Obtener una Vista Previa de su Contenido en la Búsqueda de Google
description: Metaetiquetas y robots, aprender paso a paso a implementar las nuevas vistas previas que muestra Google a través de su buscador, por John Mueller
excerpt: Metaetiquetas y robots, aprender paso a paso a implementar las nuevas vistas previas que muestra Google a través de su buscador, por John Mueller
date: 2019-09-24 15:00:00 +0200
permalink: /opciones-ayudar-sitios-web-vista-previa
canonical_URL: 'https://ciberninjas.com/opciones-ayudar-sitios-web-vista-previa'
tags:
  - Actualidad
  - Google Webmaster
  - Ayudar
  - Sitio Web
  - Búsqueda
  - Vista Previa
  - Rastreo
  - Indexación

---

> 📰 📱🔍 Metaetiquetas y robots, aprender paso a paso a implementar las nuevas vistas previas que muestra Google a trav&eacute;s de su buscador, por [John Mueller](https://twitter.com/johnmu?rel=rel)\: analista de tendencias para webmasters

Google usa vistas previas de contenido, incluidos [fragmentos de texto](https://support.google.com/webmasters/answer/35624) y otros medios, para ayudar a las personas a decidir si un resultado es relevante para su consulta. El tipo de vista previa que se muestra depende de muchos factores, incluido el tipo de contenido que busca una persona y el tipo de dispositivo en el que lo est&aacute; viendo.

Por ejemplo, si busca resultados de recetas en Google, es posible que vea im&aacute;genes en miniatura y calificaciones de los usuarios, cosas que pueden ser m&aacute;s &uacute;tiles que los fragmentos de texto a la hora de decidir qu&eacute; quiere comer. Alternativamente, o tal vez est&eacute; buscando un concierto cercano y pueda ver los eventos directamente en los resultados de b&uacute;squeda. Esto es posible gracias a los editores que marcan sus p&aacute;ginas con [datos estructurados](https://developers.google.com/search/docs/guides/search-gallery) .

Google genera autom&aacute;ticamente vistas previas de una manera destinada a ayudar al usuario a comprender por qu&eacute; los resultados mostrados son relevantes para su b&uacute;squeda y por qu&eacute; el usuario querr&iacute;a visitar las p&aacute;ginas vinculadas. Sin embargo, reconocemos que los propietarios de sitios pueden desear ajustar de forma independiente la extensi&oacute;n de su contenido de vista previa en los resultados de b&uacute;squeda. Para facilitar que los sitios web individuales definan cu&aacute;nto o qu&eacute; texto deber&iacute;a estar disponible para el recorte y la medida en que otros medios deber&iacute;an incluirse en sus vistas previas, ahora presentamos varias configuraciones nuevas para webmasters.

### Informar a Google sobre sus preferencias de fragmento y vista previa de contenido

Anteriormente, solo era posible permitir un fragmento de texto o no permitirlo. Ahora presentamos un conjunto de m&eacute;todos que permiten una configuraci&oacute;n m&aacute;s detallada del contenido de vista previa que se muestra para sus p&aacute;ginas. Esto se realiza a trav&eacute;s de dos tipos de configuraciones nuevas: un conjunto de metaetiquetas de robots y un atributo HTML.

### Uso de metaetiquetas de robots

La metaetiqueta robots se agrega a la &lt;head&gt; de una p&aacute;gina HTML, o se especifica mediante el encabezado HTTP x-robots-tag. Las metaetiquetas de robots que abordan el contenido de vista previa de una p&aacute;gina son:

" `nosnippet`" Esta es una opci&oacute;n existente para especificar que no desea que se muestre ning&uacute;n fragmento de texto para esta p&aacute;gina.

" `max-snippet:[number]`" &iexcl;Nuevo\! Especifique una longitud m&aacute;xima de texto, en caracteres, de un fragmento para su p&aacute;gina.

" `max-video-preview:[number]`" &iexcl;Nuevo\! Especifique una duraci&oacute;n m&aacute;xima en segundos de una vista previa de video animado.

" `max-image-preview:[setting]`" &iexcl;Nuevo\! Especifique un tama&ntilde;o m&aacute;ximo de vista previa de la imagen que se mostrar&aacute; para las im&aacute;genes en esta p&aacute;gina, utilizando "ninguno", "est&aacute;ndar" o "grande".

Se pueden combinar, por ejemplo:

~~~
<meta name="robots" content="max-snippet:50, max-image-preview:large">
~~~

La configuraci&oacute;n de vista previa de estas metaetiquetas entrar&aacute; en vigencia a mediados o fines de octubre de 2019 y puede demorar aproximadamente una semana para que se complete el lanzamiento global.

### Usando el nuevo atributo HTML de nosnippet de datos

Una nueva forma de ayudar a limitar el cual parte de una p&aacute;gina es elegible para ser mostrado como un fragmento es el " `data-nosnippet`" atributo HTML en `span`, `div`y `section` elementos. Con esto, puede evitar que esa parte de una p&aacute;gina HTML se muestre dentro del fragmento de texto en la p&aacute;gina.

Por ejemplo:

~~~
<p><span data-nosnippet>Harry Houdini</span> is undoubtedly the most famous magician ever to live.</p>
~~~

El atributo HTML de nosnippet de datos comenzar&aacute; a afectar la presentaci&oacute;n en los productos de Google a finales de este a&ntilde;o. Obtenga m&aacute;s informaci&oacute;n en nuestra [documentaci&oacute;n de desarrollador para la metaetiqueta de robots, x-robots-tag y data-nosnippet](https://developers.google.com/search/reference/robots_meta_tag) .

### Una nota sobre resultados enriquecidos y fragmentos destacados

El contenido de [los datos estructurados](https://developers.google.com/search/docs/guides/intro-structured-data) es apto para mostrarse como [resultados enriquecidos en la b&uacute;squeda](https://developers.google.com/search/docs/guides/search-gallery) . Este tipo de resultados no se ajustan a los l&iacute;mites declarados en la configuraci&oacute;n de meta robots anterior, sino que pueden abordarse con mucha mayor especificidad limitando o modificando el contenido proporcionado en los datos estructurados. Por ejemplo, si se incluye una [receta](https://developers.google.com/search/docs/data-types/recipe) en datos estructurados, el contenido de esos datos estructurados puede presentarse en un carrusel de recetas en los resultados de b&uacute;squeda. Del mismo modo, si un evento est&aacute; marcado con datos estructurados, puede presentarse como tal en los resultados de b&uacute;squeda. Para limitar esa presentaci&oacute;n, un editor puede limitar la cantidad y el tipo de contenido en los datos estructurados.

Algunas caracter&iacute;sticas especiales de la b&uacute;squeda dependen de la disponibilidad del contenido de vista previa, por lo que limitar sus vistas previas puede evitar que su contenido aparezca en estas &aacute;reas. [Los fragmentos destacados](https://support.google.com/websearch/answer/9351707) , por ejemplo, requieren que se muestre un cierto n&uacute;mero m&iacute;nimo de caracteres. Esto puede variar seg&uacute;n el idioma, por lo que no hay una longitud m&aacute;xima exacta de fragmentos que podamos proporcionar para garantizar que aparezca en esta funci&oacute;n. Aquellos que no desean que el contenido aparezca como fragmentos destacados pueden experimentar con longitudes de fragmento m&aacute;ximo m&aacute;s bajas. Aquellos que quieran una forma garantizada de darse [de baja de los fragmentos destacados](https://support.google.com/webmasters/answer/6229325) deben usar nosnippet.

### El formato AMP

El [formato AMP](https://kutt.it/amp) viene con ciertos beneficios, incluida la elegibilidad para una presentaci&oacute;n m&aacute;s destacada de im&aacute;genes en miniatura en [los resultados de b&uacute;squeda](https://developers.google.com/search/docs/guides/about-amp) y en el [feed de Google Discover](https://support.google.com/webmasters/answer/9046777) . Se ha demostrado que estas caracter&iacute;sticas generan m&aacute;s tr&aacute;fico a los art&iacute;culos de los editores. Sin embargo, los editores que no desean que Google use im&aacute;genes en miniatura m&aacute;s grandes cuando sus p&aacute;ginas AMP se presentan en la b&uacute;squeda y Discover pueden usar la configuraci&oacute;n anterior de meta robots para especificar una vista previa m&aacute;xima de la imagen de "est&aacute;ndar" o "ninguna".

Estas nuevas opciones est&aacute;n disponibles para los propietarios de contenido en todo el mundo y funcionar&aacute;n igual para los resultados que mostramos a nivel mundial. Esperamos que le ayuden a optimizar el valor que obtiene de la b&uacute;squeda y a alcanzar sus objetivos comerciales. Para obtener m&aacute;s informaci&oacute;n, consulte nuestra [documentaci&oacute;n para desarrolladores sobre metaetiquetas](https://developers.google.com/search/reference/robots_meta_tag). Si tiene alguna no dudes en visitar nuestros [foros de ayuda para webmasters](https://support.google.com/webmasters/go/community).

**Fuente**\: [Blog de Webmaster Central](https://webmasters.googleblog.com/2019/09/more-controls-on-search.html "Más Opciones para Ayudar a los Sitios Web a Obtener una Vista Previa de su Contenido en la Búsqueda de Google")
{: .notice--info}