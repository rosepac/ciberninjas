---

author: rosepac
bootstrap: true
comments: false
tags:
- Fuchsia
- Go
- C
- C++
- Dart
- Rust
- Go
categories:
- Lenguajes de Programación
thumbnail: /assets/img/blog/google-fuchsia-logo-fondo.webp
feature-img: /assets/img/blog/google-fuchsia-logo-fondo.webp
title: '🚀 ▷ ¿Qué lenguajes de programación permite utilizar el Sistema Operativo Fuchsia?'
description: >-
  Políticas de aplicación para los lenguajes de programación recomendados dentro del sistema operativo Fuchsia, esos lenguajes son: C, C++, Dart, Rust, Go y Python
excerpt: >-
  Políticas de aplicación para los lenguajes de programación recomendados dentro del sistema operativo Fuchsia, esos lenguajes son: C, C++, Dart, Rust, Go y Python
canonical_URL: https://ciberninjas.com/politica-de-los-lenguajes-programacion-fuchsia/
permalink: /politica-de-los-lenguajes-programacion-fuchsia/
date: 2020-02-27
last_modified_at: 
published: true

---
<!-- https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/docs/project/policy/programming_languages.md -->

Este documento describe qué lenguajes de programación admite y usa el proyecto Fuchsia para el software de producción sobre el dispositivo de destino, y habla sobre sus pros / beneficios y contras / perjuicios que puede conllevar programar con un cierto lenguaje u otro sobre Fuchsia.

![Logotipo del Sistema Operativo Fuchsia, el nuevo SO para Android de Google](/assets/img/blog/google-fuchsia-logo-fondo.webp "Logotipo del Sistema Operativo Fuchsia, el nuevo SO para Android de Google")

Estas políticas no se aplican a las herramientas de los desarrolladores, siempre que estás, se ejecuten desde dispositivos de destino o host, u otros casos similares.

Por ejemplo, esta política no se aplica a ZXDB (un depurador) porque ZXDB es una herramienta de desarrollador; en cambio, la política si que se aplicaría sobre PKGFS porque PKGFS (es un sistema de archivos) que se ejecuta en la operación normal del dispositivo por parte del usuario final.

## Definiciones

El ***árbol fuente de la plataforma Fuchsia*** es el código fuente alojado en [fuchsia.googlesource.com](https://fuchsia.googlesource.com){:target="_blank" rel="nofollow,noreferrer"}.

Fuchsia Platform Source Tree puede absorber cambios más grandes en el sistema Fuchsia y sus tecnologías subyacentes que los desarrolladores finales porque los cambios que afectan solo al Fuchsia Platform Source Tree pueden ejecutarse sin coordinación con otros grupos de personas.

*Los desarrolladores finales* son personas que escriben software para Fuchsia desde fuera de la plataforma de Fuchsia. Los cambios que afectan a los desarrolladores finales, requieren más coordinación y tardan más en ejecutarse que los cambios que afectan solamente al "código fuente de origen del árbol" de la propia plataforma Fuchsia.

*El soporte para desarrolladores finales* significa que el SDK de Fuchsia contiene bibliotecas y herramientas que ayudan a las personas a usar el lenguaje para desarrollar software para Fuchsia, incluido un backend específico del idioma (y bibliotecas de soporte) para FIDL. El soporte también implica cierto nivel de documentación, incluidos tutoriales y ejemplos, así como también la inversión de las relaciones con los desarrolladores.

*Un fuerte soporte para la programación asincrónica* significa que los programas asincrónicos pueden escribirse usando código de línea recta (por ejemplo, usando async / wait en lenguajes como Rust y Dart).

### Lenguajes de Programación

## C

### Análisis

- Pros: C es un lenguaje ampliamente utilizado. El lenguaje tiene propiedades que son bien entendidas, han sido estables durante un largo período de tiempo y se han usado para construir sistemas similares en el pasado. El lenguaje tiene una cadena de herramientas madura y herramientas de desarrollo asociadas.
- Pros: C tiene un ABI estable, que permite que el SDK de Fuchsia contenga archivos binarios preconstruidos que los desarrolladores finales pueden reutilizar.
- Pros: Muchos lenguajes pueden interoperar con C usando una interfaz de función externa. La compatibilidad con C facilita a los desarrolladores finales la integración de estos lenguajes con Fuchsia.
- Pros: Nuestros desarrolladores finales actuales ya usan el lenguaje.
- Contra: El soporte para la programación asincrónica es débil.
- Contra: Los programas escritos en el idioma a menudo tienen errores de seguridad derivados de la falta de seguridad de la memoria del idioma.
- Contra: Los programas escritos en el idioma a menudo contienen pérdidas de recursos porque el idioma no proporciona una instalación para liberar recursos automáticamente.
- Contra: La seguridad de tipo es débil en comparación con C ++. Simplemente recompilando parte de nuestro código C ya que C ++ a menudo resulta en errores de compilación que muestran errores latentes en el código.

### Decisión Final

- C es compatible con desarrolladores finales. (Consulte [la lista de versiones compatibles de C](https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/docs/concepts/api/c.md#Language-versions) ).
- Dentro del árbol de origen de la plataforma fucsia, se desaconsejan los nuevos usos de C. Solicite orientación a los PROPIETARIOS relevantes sobre si utilizar C para un nuevo código.
- C está aprobado para su uso en el Árbol de origen de la plataforma de Fuchsia:
	- para la programación de sistemas de bajo nivel, incluso dentro del núcleo, y
	- para definir interfaces estables ABI a bibliotecas compartidas y otros componentes del sistema.

## C ++

### Análisis

- Pros: Muchos de nuestros desarrolladores finales actuales usan C ++ ampliamente.
- Pros: El árbol de origen de la plataforma Fuchsia usa C ++ ampliamente.
- Pros: C ++ es un lenguaje ampliamente utilizado. El lenguaje tiene propiedades que son bien entendidas, han sido estables durante un largo período de tiempo y se han usado para construir sistemas similares en el pasado. El lenguaje tiene una cadena de herramientas madura y herramientas de desarrollo asociadas.
- Contra: El soporte para la programación asincrónica es débil.
- Contra: Los programas escritos en el idioma a menudo tienen errores de seguridad derivados de la falta de seguridad de la memoria del idioma.

### Decisión Final

- C ++ es compatible con desarrolladores finales. (Consulte [la lista de versiones compatibles de C ++](https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/docs/concepts/api/c.md#Language-versions) .)
- C ++ está aprobado para su uso en todo el árbol de origen de la plataforma Fuchsia.

## Dart

### Análisis

- Pros: Nuestros desarrolladores finales actuales ya usan el lenguaje.
- Pros: La mayoría de la interfaz de usuario de Fuchsia está construida con Flutter, que usa Dart.
- Pros: Los programas asincrónicos se pueden escribir utilizando código de línea recta.
- Pros: Las personas que usan el lenguaje son altamente productivas.
- Pros: El proyecto Fuchsia tiene la oportunidad de influir en la evolución del lenguaje.
- Pros: El lenguaje proporciona garantías de seguridad de memoria, lo que reduce el riesgo de que el software desarrollado en el lenguaje tenga errores de seguridad.
- Contra: El lenguaje utiliza la recolección de basura para administrar la memoria, que requiere más recursos que otras técnicas para administrar la memoria.
- Contra: El lenguaje tiene un entorno de tiempo de ejecución sustancial.
- Contra: La cadena de herramientas obliga a un equilibrio entre el tamaño binario, el rendimiento y la latencia de inicio que es peor que la compensación proporcionada por las cadenas de herramientas para otros idiomas.

### Decisión Final

- Dart es compatible con los desarrolladores finales que se dirigen a los no conductores.
- Dart está aprobado para su uso en Fuchsia Platform Source Tree para interfaces de usuario y para programas que no se ejecutan indefinidamente.

## Rust

### Análisis

- Pros: El árbol de origen de la plataforma Fuchsia ha tenido una experiencia de implementación positiva con Rust.
- Pros: el lenguaje proporciona garantías de seguridad de memoria, lo que reduce el riesgo de que el software desarrollado en el lenguaje tenga errores de seguridad.
- Pros: los programas asincrónicos se pueden escribir utilizando código de línea recta.
- Pros: El proyecto Fuchsia tiene la oportunidad de influir en la evolución del lenguaje.
- Contra: el óxido no es un lenguaje ampliamente utilizado. Las propiedades del lenguaje aún no se comprenden bien, después de haber seleccionado un punto de diseño de lenguaje inusual (por ejemplo, corrector de préstamos) y haber existido solo por un período de tiempo relativamente corto.
- Contra: Ninguno de nuestros desarrolladores finales actuales usa Rust.

### Decisión Final

- Rust no es compatible con los desarrolladores finales.
- Rust está aprobado para su uso en todo el árbol de origen de la plataforma Fuchsia, con las siguientes excepciones:
	- *kernel* . El núcleo Zircon se construye utilizando un conjunto restringido de tecnologías que han establecido un historial en la industria de su uso en sistemas operativos de producción.

## Go

### Análisis

- Pros: Go es un lenguaje muy utilizado en Google.
- Pros: gVisor ha implementado una pila de red utilizando el lenguaje y esa pila de red se ha integrado con Fuchsia.
- Pros: Las personas que usan el lenguaje son altamente productivas.
- Pros: El proyecto Fuchsia tiene la oportunidad de influir en la evolución del lenguaje.
- Pros: el lenguaje proporciona garantías de seguridad de memoria, lo que reduce el riesgo de que el software desarrollado en el lenguaje tenga errores de seguridad.
- Pros: El lenguaje tiene un extenso ecosistema de bibliotecas que probablemente sean útiles en Fuchsia.
- Contra: El lenguaje utiliza la recolección de basura para administrar la memoria, que requiere más recursos que otras técnicas para administrar la memoria.
- Contra: El lenguaje tiene un entorno de tiempo de ejecución sustancial.
- Contra: El árbol fuente de la plataforma Fuchsia ha tenido una experiencia de implementación negativa al usar Go. Los componentes del sistema que el proyecto Fuchsia ha construido en Go han usado más recursos de memoria y kernel que sus contrapartes (o reemplazos) que el proyecto Fuchsia ha construido usando C ++ o Rust.
- Contra: La cadena de herramientas produce grandes binarios.

### Decisión Final

- Go no está aprobado, con las siguientes excepciones:
	- *netstack* . Migrar netstack a otro idioma requeriría una inversión significativa. En la totalidad del tiempo, debemos migrar netstack a un idioma aprobado.
- Todos los demás usos de Go in Fuchsia para software de producción en el dispositivo de destino deben migrarse a un idioma aprobado.

## Licencia

Este contenido se encuentra bajo licencia **[Apache 2.0](https://es.wikipedia.org/wiki/Apache_License "Licencia Apache 2.0")**.

**Fuente**\: [](https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/docs/project/policy/programming_languages.md ""){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}

## Otros que te pueden interesar..

**Saber Más**: [Qué es Flutter SDK](/que-es-flutter-y-por-que-debes-aprenderlo/), [Cómo aprender Flutter en 2020](/como-aprender-flutter/), [Wallpapers de Flutter](/wallpaper-flutter/), [Productos de Flutter](https://ciberninjas.redbubble.com){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--primary}

[▷ Editores de Texto](/categoria/#editor-de-texto) \ [Eclipse Theia](/wiki/eclipse-theia)

[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)

[▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331103423743176" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331103423743176" class="fb-xfbml-parse-ignore"><p>👩‍💻 Libros para Aprender el lenguaje de programación Dart, el SDK Flutter. Las tecnologías que podrás usar dentro del nuevo Sistema Operativo Fuchsia</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331103423743176">Martes, 3 de marzo de 2020</a></blockquote></div>
