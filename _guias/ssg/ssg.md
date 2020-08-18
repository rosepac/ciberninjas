---
layout: page
title: 🥇 ▷ Guía Completa de Generadores de Sitios Estáticos o SSG y JamStack en 2020 👨‍💻
description: 🔨 Cómo aprender desde cero todo sobre los generadores páginas web estáticos
excerpt: 🔨 Cómo aprender desde cero todo sobre los generadores páginas web estáticos
date: 2020-03-16
last_modified_at:
author: rosepac
bootstrap: true
published: true
permalink: /ssg/
canonical_URL: https://ciberninjas.com/ssg/
thumbnail: /assets/img/paginas/sitios-estaticos.webp
feature-img: /assets/img/paginas/sitios-estaticos.webp
img: /assets/img/paginas/sitios-estaticos.webp
tags: [SSG]
---

La gente a veces pregunta si los sitios estáticos tienen sentido para algo más allá de un localizador. ¡Esta tabla de clasificación destaca los principales proyectos de código abierto, en muchos idiomas diferentes, que hacen que los sitios estáticos no solo sean viables, sino también una opción atractiva para crear sitios web sofisticados!

El sitio web típico impulsado por CMS funciona construyendo cada página a pedido, obteniendo contenido de una base de datos y ejecutándolo a través de un motor de plantillas. Esto significa que cada página se ensambla a partir de plantillas y contenido en cada solicitud al servidor.

Para la mayoría de los sitios, esto es una sobrecarga completamente innecesaria y solo agrega complejidad, problemas de rendimiento y problemas de seguridad. Después de todo, con mucho, la mayoría de los sitios web solo cambian cuando los autores de contenido o su equipo de diseño realizan cambios.

Un generador de sitio estático adopta un enfoque diferente y genera todas las páginas del sitio web una vez cuando realmente hay cambios en el sitio. Esto significa que no hay partes móviles en el sitio web implementado. El almacenamiento en caché se vuelve mucho más fácil, el rendimiento aumenta y los sitios estáticos son mucho más seguros.

[👉 Saber Más en Nuestra Wiki 🔨](/wiki/generador-de-sitios-estaticos){: .btn .btn--inverse .btn--large .align-center}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Qué es StaticGen**

StaticGen es una tabla de clasificación de los principales generadores de sitios estáticos de código abierto. Es administrado por Netlify, un servicio de alojamiento y automatización para sitios web estáticos y aplicaciones, como una forma de promover un enfoque estático para crear sitios web. El sitio en sí está construido con Gatsby, y Netlify lo construye e implementa con datos nuevos todos los días. Puede consultar la fuente en GitHub y las contribuciones son más que bienvenidas.

[👉 Visitar StaticGen 🔩](https://www.staticgen.com/){: .btn .btn--inverse .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Qué es JamStack**

JamStack son sitios y aplicaciones rápidos y seguros entregados mediante archivos de representación previa y sirviéndolos directamente desde un CDN, eliminando el requisito de administrar o ejecutar servidores web.

Cuando hablamos de "The Stack", ya no hablamos de sistemas operativos, servidores web específicos, lenguajes de programación back-end o bases de datos.

El Jamstack no se trata de tecnologías específicas. Es una nueva forma de crear sitios web y aplicaciones que ofrece un mejor rendimiento, mayor seguridad, menor costo de escala y una mejor experiencia de desarrollador.

Los sitios preprocesados ​​se pueden mejorar con JavaScript y las capacidades crecientes de los navegadores y servicios disponibles a través de API.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Por qué el Jamstack**

### **Mejor interpretación**

¿Por qué esperar a que las páginas se creen sobre la marcha cuando puede generarlas en el momento de la implementación? Cuando se trata de minimizar el tiempo hasta el primer byte, nada supera a los archivos preconstruidos que se sirven en un CDN.

### **Mayor seguridad**

Con los procesos del lado del servidor abstraídos en las API de microservicio, se reducen las áreas de superficie para los ataques. También puede aprovechar la experiencia en el dominio de servicios especializados de terceros.

### **Escala más barata y fácil**

Cuando su implementación equivale a una pila de archivos que se pueden servir en cualquier lugar, el escalado es una cuestión de servir esos archivos en más lugares. Las CDN son perfectas para esto y, a menudo, incluyen la escala en todos sus planes.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Mejor experiencia de desarrollador**

El acoplamiento flexible y la separación de los controles permiten un desarrollo y una depuración más específicos, y la selección cada vez mayor de opciones de CMS para los generadores de sitios elimina la necesidad de mantener una pila separada de contenido y marketing.

[👉 Visitar StaticGen 🔩](https://www.staticgen.com/){: .btn .btn--inverse .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Cómo saber que tu página web no es un sitio JamStack**

Cualquier proyecto que se base en un acoplamiento estrecho entre el cliente y el servidor no se construye con Jamstack. Esto incluiría:

* Sitios creados con un CMS del lado del servidor como WordPress, Drupal, Joomla o Squarespace.
* Una aplicación de página única que utiliza renderizado isomorfo para generar vistas en el servidor en tiempo de ejecución.
* Una aplicación web monolítica de servidor que se basa en Ruby, Node u otro lenguaje de back-end.

## **Cómo empezar**

Este es un listado de las mejores prácticas a seguir si deseas montar tu sitio JamStack. A la hora de crear proyectos Jamstack, realmente puedes aprovechar al máximo si prosigues algunas prácticas recomendadas; como por ejemplo, pueden ser las siguientes..

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Monta tu proyecto por completo sobre un CDN 🖐**

Debido a que los proyectos Jamstack no se basan en el código del lado del servidor, se pueden distribuir en lugar de vivir en un solo servidor. Servir directamente desde un CDN desbloquea velocidades y rendimiento que no se pueden superar. Cuanta más al límite puedas llevar la aplicación, mejor será la experiencia del usuario.

### **Todo vive en Git 🖐**

Con un proyecto Jamstack, cualquiera debería poder hacer git clone, instalar las dependencias necesarias con un procedimiento estándar (como npm install) y estar listo para ejecutar el proyecto completo localmente. Sin bases de datos para clonar, sin instalaciones complejas. Esto reduce la fricción de los contribuyentes y también simplifica los flujos de trabajo de prueba y puesta en escena.
### **Herramientas modernas de construcción 🖐**

Aproveche el mundo de las herramientas de construcción modernas. Puede ser una jungla para orientarse y es un espacio en rápido movimiento, pero querrá poder usar los estándares web del mañana hoy sin esperar a los navegadores del mañana. Y eso actualmente significa Babel, PostCSS, Webpack u otros parecidos.
### **Construcciones automatizadas 🖐**

Debido a que el marcado Jamstack está preconstruido, los cambios de contenido no se activarán hasta que ejecute otra compilación. Automatizar este proceso te ahorrará mucha frustración. Puede hacerlo usted mismo con webhooks, o usar una plataforma de publicación que incluya el servicio automáticamente.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Despliegues atómicos 🖐**

A medida que los proyectos de Jamstack crecen mucho, los nuevos cambios pueden requerir la implementación de cientos de archivos. Cargar estos archivos de una sola vez puede causar un estado inconsistente mientras se completa el proceso. Se puede evitar esto con un sistema que le permite hacer "implementaciones atómicas", donde no se activan los cambios hasta que se hayan cargado todos los archivos modificados.
### **Invalidación de la caché instantánea 🖐**

Cuando el ciclo de la compilación o implementación se lanza, debes saber que ya no existe forma de paralizarlo. Para que este proceso pueda ser re-envertido debes asegurarte de que dentro de tu CDN se puedan manejar instantáneas de la caché.

## **Qué CMS de contenidos JamStack existen**

¡Es posible que ya hayas trabajado con anterioridad en un sitio de Jamstack! Se pueden construir a mano, o con Jekyll, Hugo, Nuxt, Next, Gatsby u otros muchos; puedes conocerlos a todos desde el listad de [JamStack CMS](https://headlesscms.org/){:target="_blank" rel="nofollow,noreferrer"}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Guía Completa de Generadores de sitios estáticos en Ciberninjas](/assets/img/paginas/sitios-estaticos.webp)