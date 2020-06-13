---
title: "🤖 ▷ Robots.txt: Un estándar para la exclusión de robots"
description: "🕷 Esta página muestra el primer Standar creado en 1994 escrito por Martijn Koster"
excerpt: "🕷 Esta página muestra el primer Standar creado en 1994 escrito por Martijn Koster"
published: true
comments: false
author_profile: true
date: 2020-03-10
last_modified_at: 
permalink: /standar-original-robots-txt/
canonical_URL: https://ciberninjas.com/standar-original-robots-txt/
classes: wide
header:
  overlay_image: "/assets/images/robots-txt-lupa-ciberninjas.webp"
  image_description: Robots txt, el Standar original de 1994 escrito por Martijn Koster | Ciberninjas
#  caption: "**Créditos**: Edición Personal Sobre Foto de Emiliano Vittoriosi en Unsplash"
  teaser: "/assets/images/robots-txt-lupa-ciberninjas.webp"
# toc: true
# toc_label: "Contenidos"
# toc_icon: user-ninja
# toc_sticky: true
---

WWW Robots (también llamados errantes o arañas) son programas que atraviesan muchas páginas en la World Wide Web mediante la recuperación recursiva de páginas enlazadas. Para obtener más información, consulta [guía de robots.txt](/robots-txt/) y [preguntas frecuentes sobre robots.txt](/robots-txt-preguntas-frecuentes/).

En 1993 y 1994 hubo ocasiones en que los robots visitaron los servidores WWW donde no fueron bienvenidos por varias razones. A veces, estos motivos eran específicos del robot, por ejemplo, ciertos robots inundaban los servidores con solicitudes de disparo rápido o recuperaban los mismos archivos repetidamente.

En otras situaciones, los robots atravesaron partes de servidores WWW que no eran adecuados, por ejemplo, árboles virtuales muy profundos, información duplicada, información temporal o scripts cgi con efectos secundarios (como votar).

Estos incidentes indicaron la necesidad de mecanismos establecidos para los servidores WWW para indicar a los robots a qué partes de su servidor no se debe acceder. Este estándar aborda esta necesidad con una solución operativa.

<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/standar-original-robots-txt/#estado-de-este-documento">Estado del Documento</a></li>
    <li><a href="/standar-original-robots-txt/#el-método">El Método</a></li>
    <li><a href="/standar-original-robots-txt/#el-formato">El Formato</a></li>
    <li><a href="/standar-original-robots-txt/#ejemplos">Ejemplos</a></li>
  </ol>
</nav>
</details>

🔥 Seguro también te interesa: [guía de robots.txt](/robots-txt/) >> [preguntas frecuentes sobre robots.txt](/robots-txt-preguntas-frecuentes/) >> [recursos webmaster](/recursos-herramientas-webmaster/) >> [aprender posicionamiento web](/posicionamiento-web-seo/) >> [recursos de posicionamiento y seo](/posicionamiento-seo-recursos/) >> [cursos gratis de seo](/cursos-tecnologia/#seo-y-posicionamiento-) >> [libros gratis de seo](/biblioteca-de-programacion-y-tecnologia/#seo-y-posicionamiento-) >> [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-editores-texto/)
{: .notice--warning}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## Estado de este documento

Este documento representa un consenso el 30 de junio de 1994 sobre la lista de correo de robots (robots-request@nexor.co.uk), entre la mayoría de los autores de robots y otras personas interesadas en robots. También ha estado abierto para discusión en la lista de correo técnico de la World Wide Web (www-talk@info.cern.ch). Este documento se basa en un borrador de trabajo previo con el mismo título.

No es un estándar oficial respaldado por un organismo de estándares, ni es propiedad de ninguna organización comercial. Nadie lo aplica, y no hay garantía de que todos los robots actuales y futuros lo usen. Considérelo una instalación común que la mayoría de los autores de robots ofrecen a la comunidad WWW para proteger el servidor WWW contra accesos no deseados de sus robots.

## El método

El método utilizado para excluir robots de un servidor es crear un archivo en el servidor que especifique una política de acceso para robots. Este archivo debe ser accesible a través de HTTP en la URL local " `/robots.txt`". El contenido de este archivo se especifica a continuación.

Se eligió este enfoque porque puede implementarse fácilmente en cualquier servidor WWW existente, y un robot puede encontrar la política de acceso con solo una recuperación de documentos.

Un posible inconveniente de este enfoque de archivo único es que solo un administrador del servidor puede mantener dicha lista, no los mantenedores de documentos individuales en el servidor. Esto puede resolverse mediante un proceso local para construir el archivo único a partir de varios otros, pero si, o cómo, esto se hace está fuera del alcance de este documento.

La elección de la URL fue motivada por varios criterios:

- El nombre del archivo debe caber en las restricciones de nombres de archivos de todos los sistemas operativos comunes.
- La extensión del nombre de archivo no debería requerir una configuración de servidor adicional.
- El nombre del archivo debe indicar el propósito del archivo y ser fácil de recordar.
- La probabilidad de un choque con los archivos existentes debe ser mínima.

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## El formato

El formato y la semántica del `/robots.txt`archivo " " son los siguientes:

El archivo consta de uno o más registros separados por una o más líneas en blanco (terminadas por CR, CR / NL o NL). Cada registro contiene líneas de la forma " `:`". El nombre del campo no distingue entre mayúsculas y minúsculas.

Los comentarios se pueden incluir en el archivo usando las convenciones de shell de bourne de UNIX: el carácter ' `#`' se usa para indicar que el espacio anterior (si lo hay) y el resto de la línea hasta la terminación de la línea se descartan. Las líneas que contienen solo un comentario se descartan por completo y, por lo tanto, no indican un límite de registro.

El registro comienza con una o más `User-agent` líneas, seguido de una o más `Disallow`líneas, como se detalla a continuación. Los encabezados no reconocidos se ignoran.

- Agente de usuario

	El valor de este campo es el nombre del robot para el que el registro describe la política de acceso.Si hay más de un campo Usuario-agente presente, el registro describe una política de acceso idéntica para más de un robot. Al menos un campo debe estar presente por registro.El robot debe ser liberal al interpretar este campo. Se recomienda una coincidencia de subcadena del nombre sin mayúsculas y minúsculas sin información de versión.Si el valor es ' `*`', el registro describe la política de acceso predeterminada para cualquier robot que no coincida con ninguno de los otros registros. No está permitido tener múltiples registros de este tipo en el " `/robots.txt`" archivo.

- Rechazar

	El valor de este campo especifica una URL parcial que no se debe visitar. Esta puede ser una ruta completa o una ruta parcial; no se recuperará ninguna URL que comience con este valor. Por ejemplo, `Disallow: /help` no permite ambos `/help.html`y `/help/index.html`, mientras `Disallow: /help/`que no `/help/index.html` permitiría pero permitiría `/help.html`.Cualquier valor vacío indica que se pueden recuperar todas las URL. Al menos un campo Disallow debe estar presente en un registro.

La presencia de un " `/robots.txt`" archivo vacío no tiene una semántica asociada explícita, se tratará como si no estuviera presente, es decir, todos los robots se considerarán bienvenidos.

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## Ejemplos

El siguiente `/robots.txt`archivo " " de ejemplo especifica que ningún robot debe visitar una URL que comience con " `/cyberworld/map/`" o " `/tmp/`" o `/foo.html`:

```
# robots.txt para http://www.example.com/

Agente de usuario: *
No permitir: / cyberworld / map / # Este es un espacio de URL virtual infinito
No permitir: / tmp / # estos pronto desaparecerán
No permitir: /foo.html
```

Este " `/robots.txt`" archivo de ejemplo especifica que ningún robot debe visitar ninguna URL que comience con " `/cyberworld/map/`", excepto el robot llamado " `cybermapper`":

```
# robots.txt para http://www.example.com/

Agente de usuario: *
No permitir: / cyberworld / map / # Este es un espacio de URL virtual infinito

# Cybermapper sabe a dónde ir.
Usuario-agente: cybermapper
Rechazar:
```

Este ejemplo indica que ningún robot debe visitar más este sitio:

```
# vete
Agente de usuario: *
No permitir: /
```

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

### Código de ejemplo

Aunque no es parte de esta especificación, algunos códigos de ejemplo en Perl están disponibles en norobots.pl. Es un poco más flexible en su análisis que las especificaciones de este documento, y se proporciona tal cual, sin garantía.

> **Nota:** este código ya no está disponible. En su lugar, recomiendo utilizar el código de exclusión de robots en la biblioteca Perl libwww-perl5, disponible desde [CPAN](http://www.cpan.org/){:target="_blank" rel="nofollow,noreferrer"} en el [directorio LWP](http://www.cpan.org/modules/by-module/LWP/){:target="_blank" rel="nofollow,noreferrer"}.

### Dirección del autor

[Martijn Koster](http://www.greenhills.co.uk/mak/mak.html)

[⏪ Regresa a La Guía de Robots.txt](/robots-txt/)
{: .notice--info}
<!-- https://www.robotstxt.org/orig.html -->

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}