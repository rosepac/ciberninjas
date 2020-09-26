---
layout: page
author: rosepac
bootstrap: true
title: 🥇 ▷ La Guía Web Completa de Rastreadores Web y robots.txt
description: "Buscadores, rastreadores web, arañas, robots y bots; aprende todo para mejorar tu página web"
excerpt: "Buscadores, rastreadores web, arañas, robots y bots; aprende todo para mejorar tu página web"
published: true
comments: false
date: 2020-03-10
last_modified_at: 
permalink: /robots-txt/
canonical_URL: https://ciberninjas.com/robots-txt/
thumbnail: "/assets/img/robots-txt-lupa-ciberninjas.webp"
feature-img: "/assets/img/robots-txt-lupa-ciberninjas.webp"
img: "/assets/img/robots-txt-lupa-ciberninjas.webp"
# toc: true
# toc_label: "Contenidos"
# toc_icon: user-ninja
# toc_sticky: true
---

Los robots web (también conocidos como errantes, rastreadores o arañas) son programas que atraviesan la cada página web de todo el mundo de Internet automáticamente. Los motores de búsqueda como Google los usan para indexar el contenido web, los spammers los usan para buscar direcciones de correo electrónico y otros muchos más tienen diferenciados usos.

Con esta página traemos toda la información necesaria para ser todo un maestro sobre los robots web.

<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/robots-txt/#qué-es-robotstxt">Qué es robots.txt</a></li>
    <li><a href="/robots-txt/#al-detalle">Al Detalle</a></li>
    <li><a href="/robots-txt/#cómo-crear-un-archivo-robotstxt">¿Cómo crear un archivo /robots.txt?</a></li>
    <li><a href="/robots-txt/#qué-debo-poner-en-este-archivo">¿Qué debo poner en este archivo?</a></li>
    <li><a href="/robots-txt/#acerca-de-la-meta-etiqueta-robots">Acerca de la META etiqueta robots</a></li>
    <li><a href="/robots-txt/#cómo-escribir-una-metaetiqueta-de-robots">¿Cómo escribir una metaetiqueta de robots?</a></li>
    <li><a href="/robots-txt/#sitios-de-información-importantes">Sitios de información importantes</a></li>
    <li><a href="/robots-txt/#cómo-chequear-o-probar-tu-robotstxt">Cómo chequear o probar tu robots.txt</a></li>
    <li><a href="/robots-txt/#rastreadores-web">Rastreadores web</a></li>
    <li><a href="/robots-txt/#rastreadores-de-código-abierto">Rastreadores de código abierto</a></li>
  </ol>
</nav>
</details>

> 🔥 Seguro también te interesa: [preguntas frecuentes sobre robots.txt](/robots-txt-preguntas-frecuentes/) >> [recursos webmaster](/recursos-herramientas-webmaster/) >> [aprender posicionamiento web](/posicionamiento-web-seo/) >> [recursos de posicionamiento y seo](/posicionamiento-seo-recursos/) >> [cursos gratis de seo](/cursos-tecnologia/#seo-y-posicionamiento-) >> >> [libros gratis de seo](/biblioteca-de-programacion-y-tecnologia/#seo-y-posicionamiento-) >> [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-editores-texto/)
{: .notice--danger}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **¿Qué es robots.txt?**

Los propietarios de sitios web usan el archivo /robots.txt para dar instrucciones sobre su sitio a los robots web; esto se llama el protocolo de exclusión de robots.

Funciona así: un robot quiere visitar la URL de un sitio web, por ejemplo, http://www.ejemplo.com/bienvenido.html & antes de hacerlo, primero comprueba si existe el documento: http://www.ejemplo.com/robots.txt y dependiendo del contenido que exista dentro del mismo, actua.

Si el robot encuentra:

{% highlight js %}
User-agent: *
Disallow: /
{% endhighlight %}

La parte de "User-Agent: * "significa que esta sección se aplica a todos los robots y "Disallow: /" dice al robot que no debe visitar ninguna página de nuestro sitio web.

Existen dos consideraciones importantes que debes tener en cuenta a la hora de usar /robots.txt:

- Los robots pueden ignorar tu /robots.txt. Especialmente los robots de malware que escanean la web en busca de vulnerabilidades de seguridad y los dedicados a recolectar direcciones de correo electrónico que trabajan como _"spammers"_ no prestarán atención.
- El archivo /robots.txt es un archivo disponible públicamente. Osea, cualquiera posee acceso a ver qué secciones de su servidor no desea que usen los robots.

Por tanto, no intentes usar /robots.txt para ocultar información.

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

👉 Ver también:<br/>>>[¿Puedo bloquear solo robots malos?](/robots-txt-preguntas-frecuentes/#se-puede-bloquear-solo-a-los-robots-malos)<br/>>> [¿Por qué este robot ignoró mi /robots.txt?](/robots-txt-preguntas-frecuentes/#por-qué-este-robot-ignoró-mi-robotstxt)<br/>>> [¿Cuáles son las implicaciones de seguridad de /robots.txt?](/robots-txt-preguntas-frecuentes/#seguramente-enumerar-archivos-confidenciales-es-un-problema)
{: .notice--danger}

### **Robots.txt al detalle**

Robots.txt es un estándar de facto y no es propiedad de ningún organismo de estándares. Hay dos descripciones históricas:

- El documento original de 1994 [A Standard for Robot Exclusion](/standar-original-robots-txt/){:tar}.
<!-- Un borrador de la especificación de Internet de 1997 [Un método para el control de robots web](https://www.robotstxt.org/norobots-rfc.txt) -->
- [Especificación HTML 4.01, Apéndice B.4.1](http://www.w3.org/TR/html4/appendix/notes.html#h-B.4.1.1){:target="_blank" rel="nofollow,noreferrer"}
- [Wikipedia - Estándar de exclusión de robots](http://en.wikipedia.org/wiki/Robots.txt){:target="_blank" rel="nofollow,noreferrer"}

El estándar /robots.txt no se desarrolla activamente. Consulte [¿Qué pasa con el desarrollo posterior de /robots.txt? ](https://www.robotstxt.org/faq/future.html)para más discusión

El resto de esta página ofrece una descripción general de cómo usar /robots.txt en su servidor, con algunas recetas simples. Para obtener más información, consulte también las [preguntas frecuentes](https://www.robotstxt.org/faq.html) .

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **¿Cómo crear un archivo /robots.txt?**

**¿Dónde debemos poner el fichero robots.txt?**

La respuesta cortaes, en el directorio de nivel superior de su servidor web.

La respuesta más larga:

Cuando un robot busca el archivo "/robots.txt" para URL, despoja el componente de ruta de la URL (todo desde la primera barra oblicua) y coloca "/robots.txt" en su lugar.

Por ejemplo, para " `https://www.ejemplo.com/shop/index.html` , eliminará" `/shop/index.html` ", lo reemplazará con" `/robots.txt` "y terminará en "https://www.ejemplo.com/robots.txt".

Entonces, como propietario de un sitio web, debe colocarlo en el lugar correcto en su servidor web para que funcione la URL resultante. Por lo general, ese es el mismo lugar donde coloca la página principal " `index.html` " de bienvenida de tu sitio web . La ruta exacta puede cambiar, dependiendo del software que utilices o de las rutas usadas por tu servidor web.

Recuerde utilizar las letras con minúsculas para el nombre de archivo: "robots.txt", y no "Robots.TXT".

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

👉 Ver también:<br/>>> [¿Qué programa debo usar para crear /robots.txt?](/robots-txt-preguntas-frecuentes/#qué-programa-debo-usar-para-crear-robotstxt)<br/>>> [¿Cómo uso /robots.txt en un host virtual?](/robots-txt-preguntas-frecuentes/#cómo-uso-robotstxt-en-un-host-virtual) <br/>>> [¿Cómo uso /robots.txt en un host compartido?](/robots-txt-preguntas-frecuentes/#cómo-uso-robotstxt-en-un-host-compartido)
{: .notice--danger}

## **¿Qué debo poner en este archivo?**

El archivo "/robots.txt" es un archivo de texto, con uno o más registros. Por lo general, contiene un solo registro que se ve así:

{% highlight js %}

User-agent: *
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /~carpeta-personal/
{% endhighlight %}

En este ejemplo, se excluyen tres directorios.

Tenga en cuenta que necesita una línea separada "No permitir" para cada prefijo de URL que desee excluir; no puede decir "No permitir: / cgi-bin / / tmp /" en una sola línea. Además, es posible que no tenga líneas en blanco en un registro, ya que se usan para delimitar múltiples registros.

Tenga en cuenta también que el globing y la expresión regular **no** son compatibles con las líneas User-agent o Disallow. El '*' en el campo Agente de usuario es un valor especial que significa "cualquier robot". Específicamente, no puede tener líneas como "User-agent: * bot *", "Disallow: / tmp / *" o "Disallow: * .gif".

Lo que desea excluir depende de su servidor. Todo lo que no se rechaza explícitamente se considera un juego justo para recuperar. Aquí siguen algunos ejemplos:

### **Para excluir todos los robots de todo el servidor**

{% highlight js %}
User-agent: *
Disallow: /
{% endhighlight %}

### **Para permitir que todos los robots tengan acceso completo**

{% highlight js %}
User-agent: *
Disallow:
{% endhighlight %}

(o simplemente cree un archivo "/robots.txt" vacío, o no use ninguno)

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Para excluir todos los robots de parte del servidor**

{% highlight js %}
User-agent: *
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /junk/
{% endhighlight %}

### **Para excluir un solo robot**

{% highlight js %}
User-agent: BadBot
Disallow: /
{% endhighlight %}

### **Para permitir un solo robot**

{% highlight js %}
User-agent: Google
Disallow:

User-agent: *
Disallow: /
{% endhighlight %}

### **Para excluir todos los archivos excepto uno**

Esto es actualmente un poco incómodo, ya que no hay un campo "Permitir". La manera fácil es colocar todos los archivos que se deshabilitarán en un directorio separado, decir "cosas" y dejar el único archivo en el nivel sobre este directorio:

{% highlight js %}
User-agent: *
Disallow: /~carpeta-personal/stuff/
{% endhighlight %}

Alternativamente, puede rechazar explícitamente todas las páginas no permitidas:

Alternativamente, puede rechazar explícitamente todas las páginas no permitidas:

{% highlight js %}
User-agent: *
Disallow: /~carpeta-personal/junk.html
Disallow: /~carpeta-personal/foo.html
Disallow: /~carpeta-personal/bar.html
{% endhighlight %}

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Acerca de la META etiqueta robots**

### **En una palabra**

Puede usar una etiqueta HTML especial `META` para indicar a los robots que no indexen el contenido de una página y / o que no la escaneen para buscar enlaces a seguir.

Por ejemplo:

{% highlight js %}
<html>
<head>
<title> ... </title>
<META NAME="ROBOTS" CONTENT="NOINDEX,NOFOLLOW">
</head>
{% endhighlight %}

Hay dos consideraciones importantes cuando se usa la etiqueta <META> de robots:

- Los robots pueden ignorar su etiqueta <META>. Especialmente los robots de malware que escanean la web en busca de vulnerabilidades de seguridad, y los recolectores de direcciones de correo electrónico utilizados por los spammers no prestarán atención.
- La directiva NOFOLLOW solo se aplica a los enlaces de esta página. Es muy probable que un robot encuentre los mismos enlaces en alguna otra página sin un NOFOLLOW (quizás en algún otro sitio), y aún así llegue a su página no deseada.

No confunda este NOFOLLOW con el atributo de enlace `rel = "nofollow"`](/robots-txt-preguntas-frecuentes/#acerca-de-las-etiquetas-meta).

### **Al detalle**

Al igual que /robots.txt, la etiqueta META de robots es un estándar de facto. Se originó en una reunión de un [taller de indexación distribuido](http://www.w3.org/Search/9605-Indexing-Workshop/){:target="_blank" rel="nofollow,noreferrer"} en [1996](http://www.w3.org/Search/9605-Indexing-Workshop/){:target="_blank" rel="nofollow,noreferrer"}, y se describió en las notas de la reunión.

La etiqueta META también se describe en [la especificación HTML 4.01, Apéndice B.4.1](http://www.w3.org/TR/html401/appendix/notes.html#h-B.4.1.2){:target="_blank" rel="nofollow,noreferrer"}.

A continuación se ofrece una descripción general de cómo usar las etiquetas <META> de robots en tu página web, con algunos ejemplos simples. Para obtener más información, consulta nuestra página de [preguntas frecuentes o FAQ](https://www.robotstxt.org/faq.html).

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **¿Cómo escribir una metaetiqueta de robots?**

### **¿Dónde situarlo?**

Al igual que cualquier etiqueta <META>, debe colocarse en la sección HEAD de una página HTML, como en el ejemplo anterior. Debe ponerlo en cada página de su sitio, porque un robot puede encontrar un [enlace profundo](http://en.wikipedia.org/wiki/Deep_linking){:target="_blank" rel="nofollow,noreferrer"} a cualquier página de su sitio.

### **¿Qué poner en él?**

El atributo "`name`" debe ser "ROBOTS".

Los valores válidos para el atributo "`CONTENT`" son: "`INDEX`", "`NOINDEX`", "`FOLLOW`", "`NOFOLLOW`". Se permiten múltiples valores separados por comas, pero obviamente solo algunas combinaciones tienen sentido. Si no hay una etiqueta <META> de robots, el valor predeterminado es " `INDEX, NOFOLLOW` ", por lo que no hay necesidad de explicarlo. Eso quedaría:

{% highlight js %}
<META NAME="ROBOTS" CONTENT="NOINDEX, FOLLOW"> 
<META NAME="ROBOTS" CONTENT="INDEX, NOFOLLOW"> 
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
{% endhighlight %}

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

## **Sitios de Información Importantes**

- [Mejores Herramientas para Webmasters](https://www.bing.com/toolbox/webmaster)
- [Posicionamiento, Web y SEO](/posicionamiento-web-seo/)

### **El Sitio sobre Búsqueda y Webmasters de Google**

Muchas personas terminan en este sitio porque tienen preguntas sobre robots y motores de búsqueda específicos. Para tales preguntas, el mejor lugar son las propias páginas de ayuda del sitio relevante:

- [Centro de ayuda de Google Web Search en Español](https://support.google.com/webmasters/search?q=robots){:target="_blank" rel="nofollow,noreferrer"}
- [Centro de ayuda para webmasters de Google](https://www.google.com/intl/es/webmasters/#?modal_active=none){:target="_blank" rel="nofollow,noreferrer"}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Sitios sobre motores de búsqueda**

Sitios muy útiles para webmasters:

- [Search Engine Land](http://searchengineland.com/){:target="_blank" rel="nofollow,noreferrer"}
- [Search Engine Watch](http://searchenginewatch.com/){:target="_blank" rel="nofollow,noreferrer"}
- [Mesa redonda de motores de búsqueda](http://www.seroundtable.com/){:target="_blank" rel="nofollow,noreferrer"}

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1336704793183039" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1336704793183039" class="fb-xfbml-parse-ignore"><p>🔍 Los Mejores Libros sobre SEO, Posicionamiento y Marketing Digital; en una sola Colección Los Mejores Libros sobre SEO, Posicionamiento y Marketing Digital; en una sola Colección 🕵️‍♂️</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1336704793183039">Martes, 10 de marzo de 2020</a></blockquote></div>

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

## **¿Cómo chequear o probar tu robots.txt?**

- [Herramienta de prueba del fichero robots de Chrome](https://support.google.com/webmasters/answer/6062598?hl=es)

## **Rastreadores web**
<!-- https://www.keycdn.com/blog/web-crawlers -->
- [Bingbot](https://en.wikipedia.org/wiki/Bingbot){:target="_blank" rel="nofollow,noreferrer"} es el nombre del [webcrawler](https://en.wikipedia.org/wiki/Bingbot){:target="_blank" rel="nofollow,noreferrer"} de [Bing](https://en.wikipedia.org/wiki/Bing_(search_engine)){:target="_blank" rel="nofollow,noreferrer"} de Microsoft . Reemplazó a *[Msnbot](https://en.wikipedia.org/wiki/Msnbot){:target="_blank" rel="nofollow,noreferrer"}* .
- [Googlebot](https://en.wikipedia.org/wiki/Googlebot){:target="_blank" rel="nofollow,noreferrer"} se describe con cierto detalle, pero la referencia es solo sobre una versión temprana de su arquitectura, que estaba basada en C ++ y [Python](https://en.wikipedia.org/wiki/Python_(programming_language)){:target="_blank" rel="nofollow,noreferrer"} . El rastreador se integró con el proceso de indexación, porque el análisis de texto se realizó para la indexación de texto completo y también para la extracción de URL. Hay un servidor de URL que envía listas de URL para que sean recuperadas por varios procesos de rastreo. Durante el análisis, las URL encontradas se pasaron a un servidor de URL que verificó si la URL se había visto anteriormente. De lo contrario, la URL se agregó a la cola del servidor de URL.
- [SortSite](https://en.wikipedia.org/wiki/SortSite){:target="_blank" rel="nofollow,noreferrer"}
- Swiftbot es el rastreador web de [Swiftype](https://en.wikipedia.org/wiki/Swiftype){:target="_blank" rel="nofollow,noreferrer"} .
- [WebCrawler](https://en.wikipedia.org/wiki/WebCrawler){:target="_blank" rel="nofollow,noreferrer"} se utilizó para crear el primer índice de texto completo disponible públicamente de un subconjunto de la Web. Se basó en lib-WWW para descargar páginas, y otro programa para analizar y ordenar URL para una exploración más amplia del gráfico web. También incluía un rastreador en tiempo real que seguía enlaces basados en la similitud del texto de anclaje con la consulta proporcionada.
- [WebFountain](https://en.wikipedia.org/wiki/WebFountain){:target="_blank" rel="nofollow,noreferrer"} es un rastreador modular distribuido similar a Mercator pero escrito en C ++.
- [World Wide Web Worm](https://en.wikipedia.org/wiki/World_Wide_Web_Worm){:target="_blank" rel="nofollow,noreferrer"} fue un rastreador utilizado para crear un índice simple de títulos de documentos y URL. Se puede buscar el índice utilizando el `comando grep` [Unix](https://en.wikipedia.org/wiki/Unix){:target="_blank" rel="nofollow,noreferrer"} .
- [Xenon](https://en.wikipedia.org/wiki/Xenon_(program)) es un rastreador web utilizado por las autoridades fiscales del gobierno para detectar fraudes.
- Yahoo! Slurp era el nombre de [Yahoo! ](https://en.wikipedia.org/wiki/Yahoo!){:target="_blank" rel="nofollow,noreferrer"} buscador, el rastreador de Yahoo! contratado con [Microsoft](https://en.wikipedia.org/wiki/Microsoft){:target="_blank" rel="nofollow,noreferrer"} para usar [Bingbot](https://en.wikipedia.org/wiki/Bingbot){:target="_blank" rel="nofollow,noreferrer"} en [su](https://en.wikipedia.org/wiki/Bingbot){:target="_blank" rel="nofollow,noreferrer"} lugar.

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Rastreadores de código abierto**

- [Frontera](https://en.wikipedia.org/wiki/Frontera_(web_crawling)){:target="_blank" rel="nofollow,noreferrer"} es un framework de rastreo web que implementa el componente de [frontera de rastreo](https://en.wikipedia.org/wiki/Crawl_frontier){:target="_blank" rel="nofollow,noreferrer"} y proporciona primitivas de escalabilidad para aplicaciones de [rastreo](https://en.wikipedia.org/wiki/Crawl_frontier){:target="_blank" rel="nofollow,noreferrer"} web.
- [GNU Wget](https://en.wikipedia.org/wiki/Wget){:target="_blank" rel="nofollow,noreferrer"} es un rastreador operado por [línea de](https://en.wikipedia.org/wiki/Command_line_interface){:target="_blank" rel="nofollow,noreferrer"} comandos escrito en [C](https://en.wikipedia.org/wiki/C_(programming_language)){:target="_blank" rel="nofollow,noreferrer"} y lanzado bajo la [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License){:target="_blank" rel="nofollow,noreferrer"}. Por lo general, se usa para reflejar sitios web y FTP.
- [GRUB](https://en.wikipedia.org/wiki/Grub_(search_engine)){:target="_blank" rel="nofollow,noreferrer"} es un rastreador de búsqueda distribuida de código abierto que [Wikia Search](https://en.wikipedia.org/wiki/Wikia_Search){:target="_blank" rel="nofollow,noreferrer"} usó para rastrear la web.
- [Heritrix](https://en.wikipedia.org/wiki/Heritrix){:target="_blank" rel="nofollow,noreferrer"} es el rastreador de calidad de archivo de [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive){:target="_blank" rel="nofollow,noreferrer"}, diseñado para archivar instantáneas periódicas de una gran parte de la Web. Fue escrito en [Java](https://en.wikipedia.org/wiki/Java_(programming_language)){:target="_blank" rel="nofollow,noreferrer"}.
- [ht: // Dig](https://en.wikipedia.org/wiki/Ht-//dig){:target="_blank" rel="nofollow,noreferrer"} incluye un rastreador web en su motor de indexación.
- [HTTrack](https://en.wikipedia.org/wiki/HTTrack){:target="_blank" rel="nofollow,noreferrer"} utiliza un rastreador web para crear un espejo de un sitio web para su visualización fuera de línea. Está escrito en [C](https://en.wikipedia.org/wiki/C_(programming_language)){:target="_blank" rel="nofollow,noreferrer"} y publicado bajo la [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License){:target="_blank" rel="nofollow,noreferrer"}.
- [mnoGoSearch](https://en.wikipedia.org/wiki/MnoGoSearch){:target="_blank" rel="nofollow,noreferrer"} es un rastreador, indexador y un motor de búsqueda escrito en C y con licencia bajo la [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License){:target="_blank" rel="nofollow,noreferrer"} (* solo máquinas NIX)
- [Norconex HTTP Collector](https://en.wikipedia.org/wiki/Norconex_HTTP_Collector){:target="_blank" rel="nofollow,noreferrer"} es una araña web, o rastreador, escrita en [Java](https://en.wikipedia.org/wiki/Java_(programming_language)){:target="_blank" rel="nofollow,noreferrer"} , que tiene como objetivo facilitar la vida de los integradores y desarrolladores de Enterprise Search (con licencia de [Apache License](https://en.wikipedia.org/wiki/Apache_License){:target="_blank" rel="nofollow,noreferrer"}.
- [Apache Nutch](https://en.wikipedia.org/wiki/Apache_Nutch){:target="_blank" rel="nofollow,noreferrer"} es un rastreador web altamente extensible y escalable escrito en Java y lanzado bajo una [licencia de Apache](https://en.wikipedia.org/wiki/Apache_License){:target="_blank" rel="nofollow,noreferrer"}. Está basado en [Apache Hadoop](https://en.wikipedia.org/wiki/Apache_Hadoop){:target="_blank" rel="nofollow,noreferrer"} y puede usarse con [Apache Solr](https://en.wikipedia.org/wiki/Apache_Solr){:target="_blank" rel="nofollow,noreferrer"} o [Elasticsearch](https://en.wikipedia.org/wiki/Elasticsearch){:target="_blank" rel="nofollow,noreferrer"}.
- [Open Search Server](https://en.wikipedia.org/wiki/Open_Search_Server){:target="_blank" rel="nofollow,noreferrer"} es un motor de búsqueda y una versión de software de rastreador web bajo la [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License){:target="_blank" rel="nofollow,noreferrer"}.
- [PHP-Crawler](https://en.wikipedia.org/wiki/PHP-Crawler){:target="_blank" rel="nofollow,noreferrer"} es un simple rastreador basado en [PHP](https://en.wikipedia.org/wiki/PHP){:target="_blank" rel="nofollow,noreferrer"} y [MySQL](https://en.wikipedia.org/wiki/MySQL){:target="_blank" rel="nofollow,noreferrer"} lanzado bajo la [Licencia BSD](https://en.wikipedia.org/wiki/BSD_License){:target="_blank" rel="nofollow,noreferrer"}.
- [Scrapy](https://en.wikipedia.org/wiki/Scrapy){:target="_blank" rel="nofollow,noreferrer"}, un framework de [webcrawler de](https://en.wikipedia.org/wiki/Scrapy){:target="_blank" rel="nofollow,noreferrer"} código abierto, escrito en python (licenciado bajo [BSD](https://en.wikipedia.org/wiki/BSD_License){:target="_blank" rel="nofollow,noreferrer"}.
- [Seeks](https://en.wikipedia.org/wiki/Seeks){:target="_blank" rel="nofollow,noreferrer"}, un motor de búsqueda distribuido gratuito (con licencia [AGPL](https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License){:target="_blank" rel="nofollow,noreferrer"}.
- [StormCrawler](https://en.wikipedia.org/wiki/StormCrawler){:target="_blank" rel="nofollow,noreferrer"}, una colección de recursos para crear rastreadores web escalables y de baja latencia en [Apache Storm](https://en.wikipedia.org/wiki/Storm_(event_processor)){:target="_blank" rel="nofollow,noreferrer"} ( [licencia de Apache](https://en.wikipedia.org/wiki/Apache_License){:target="_blank" rel="nofollow,noreferrer"} ).
- [tkWWW Robot](https://en.wikipedia.org/wiki/TkWWW_Robot){:target="_blank" rel="nofollow,noreferrer"}, un rastreador basado en el navegador web [tkWWW](https://en.wikipedia.org/wiki/TkWWW){:target="_blank" rel="nofollow,noreferrer"} (con licencia bajo [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License){:target="_blank" rel="nofollow,noreferrer"} ).
- [Xapian](https://en.wikipedia.org/wiki/Xapian){:target="_blank" rel="nofollow,noreferrer"}, un motor de búsqueda de rastreadores, escrito en c ++.
- [YaCy](https://en.wikipedia.org/wiki/YaCy){:target="_blank" rel="nofollow,noreferrer"}, un motor de búsqueda distribuido gratuito, basado en los principios de las redes punto a punto (con licencia bajo [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License){:target="_blank" rel="nofollow,noreferrer"} ).
- [Trandoshan](https://github.com/trandoshan-io){:target="_blank" rel="nofollow,noreferrer"}, un rastreador web distribuido de código abierto y gratuito diseñado para la web profunda.

[⏫ Regresar al Menú](/robots-txt/#menu){: .btn .btn--inverse .btn--large .align-center}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<!-- https://www.keycdn.com/blog/web-crawlers los 10 rastreadores web más conocidos. -->
<!-- https://prowebscraper.com/blog/50-best-open-source-web-crawlers/ Los 50 Rastreadores Web Más -->
<!-- https://www.nichemarket.co.za/blog/nichemarket-advice/6-web-crawling-tools 6 herramientas de web rastreo -->

<!-- - [Automatic indexing](https://en.wikipedia.org/wiki/Automatic_indexing)
- [Gnutella crawler](https://en.wikipedia.org/wiki/Gnutella_crawler)
- [Web archiving](https://en.wikipedia.org/wiki/Web_archiving)
- [Webgraph](https://en.wikipedia.org/wiki/Webgraph)
- [Website mirroring software](https://en.wikipedia.org/wiki/Website_mirroring_software)
- [Search Engine Scraping](https://en.wikipedia.org/wiki/Search_Engine_Scraping) -->