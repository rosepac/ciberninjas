---

author: rosepac
bootstrap: true
title: '▷ Swift: Nueva versión Beta 5.2'
description: "Qué hay de nuevo en la versión beta 5.2 del lenguaje de programación Swift"
excerpt: "Qué hay de nuevo en la versión beta 5.2 del lenguaje de programación Swift"
published: true
comments: false
date: 2020-02-13 15:10:12
last_modified_at: 
thumbnail: /assets/img/blog/swift-open-source_2048.webp
feature-img: /assets/img/blog/swift-open-source_2048.webp
permalink: /swift-version-beta-5-2/
canonical_URL: https://ciberninjas.com/swift-version-beta-5-2/
categories:
- Novedades
- Lenguajes de Programación
tags:
- Swift

---

La primera versión beta de Swift 5.2 acaba de lanzarse junto con Xcode 11.4 beta e incluye varios cambios del idioma junto con la reducción del tamaño del código y una mejoría del uso de la memoria, además de una nueva arquitectura de diagnóstico que debe ayudar a diagnosticar errores en el código, mucho más rápido.

![Logotipo del lanzamiento 5.2 del lenguaje de Programación de Apple: Swift](/assets/img/blog/swift-open-source_2048.webp "Logotipo del lanzamiento 5.2 del lenguaje de Programación de Apple: Swift")

Algunos de los cambios introducidos se basan en:

- Cambios en la metodología de acceso a la ruta principal desde las funciones.
- Llamadas a valores de forma estática: Se introducen valores invocables de forma estática, que es una forma elegante de decir que ahora se puede llamar a un valor directamente si su tipo implementa un método llamado `callAsFunction()`. No se requiere ajustar a ningún protocolo especial para que este comportamiento funcione; solo necesita agregar ese método al tipo.
- Subíndices capaces de declarar argumentos predeterminados: Al agregar subíndices personalizados a un tipo, ahora se pueden usar argumentos determinados con anterioridad para cualquiera de los parámetros.
- Diagnósticos mejorados: Swift 5.2 introduce una nueva arquitectura de diagnóstico que tiene como objetivo mejorar la calidad y la precisión de los mensajes de error emitidos por Xcode cuando comete un error de codificación. Esto es particularmente evidente cuando se trabaja con el código SwiftUI, donde Swift a menudo produce mensajes de error falsos.

Si deseas ver ejemplos más específicos y prácticos para ver cómo ha evolucionado el código; puedes encontrarlos [aquí](https://www.hackingwithswift.com/articles/212/whats-new-in-swift-5-2) junto a otros muchos artículos e interesantes tutoriales sobre Swift.

**Fuente**\: [Hacking with Swift](https://www.hackingwithswift.com/articles/212/whats-new-in-swift-5-2){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}