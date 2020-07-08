---
layout: post
title: 'Kweb: Crea aplicaciones con actualización en vivo desde el lado del servidor mediante Kotlin puro'
published: false
author: rosepac
bootstrap: true
comments: false
date: 2018-12-09 08:12:51
tags:
    - aplicaciones
    - programar
    - web
categories:
    - codigo-abierto
    - kotlin
permalink: >
    /kweb-crea-aplicaciones-con-actualizacion-en-vivo-desde-el-lado-del-servidor-mediante-kotlin-puro
---
## ¿Qué es **Kweb**?

**Kweb** es una biblioteca para crear aplicaciones web en el lenguaje de programación **[Kotlin][1]** , que prácticamente elimina la separación entre el navegador y el servidor desde la perspectiva del programador.

**Kweb** le permite interactuar directamente con el **DOM** del navegador como si fuera local al servidor web. Este proceso es eficiente, minimizando la charla del navegador-servidor y la sobrecarga de representación del navegador. Los fragmentos de **DOM** también se almacenan en caché en el navegador para una interfaz de usuario extremadamente sensible, y los eventos se transmiten sin problemas entre el cliente y el servidor para mantener un estado consistente en ambos.

## Características de Kweb

  * Construir sitios web en **Kotlin**.
  * Elimina la barrera entre el navegador web y el servidor web para el programador.
  * Minimiza las conexiones entre el cliente y el servidor además del tiempo de procesamiento del navegador.
  * Se integra a la perfección con bibliotecas de JavaScript potentes como la [**Semantic UI**][2] (para la que posee un complemento que ofrece una DSI de **Semantic UI** bastante completa)
  * Enlazar los elementos DOM desde el navegador directamente al servidor y hace que se actualice automáticamente, a través de los patrones del _&#171;observer&#187;(https://en.wikipedia.org/wiki/Observer_pattern)_ y del _&#171;data\_mapper\_pattern&#187;(https://en.m.wikipedia.org/wiki/Data\_mapper\_pattern)_.
  * Se integra a la perfección con el almacén de datos [Shoebox][3].
  * Es fácil de agregar a un proyecto existente, **Kweb** es solo una biblioteca; no busca decirte cómo organizar tu proyecto.
  * Actualización sobre el navegador al instante.

## ¿Cómo funciona?

**Kweb** conserva toda la lógica del lado del servidor y utiliza los _&#171;sockets&#187;_ web eficientes para comunicarse con los navegadores web. También aprovechamos el poderoso y nuevo mecanismo de integrado en Kotlin para manejar de manera eficiente la asincronía, de manera invisible para el programador.

* * *

**URL del Proyecto**: http://kweb.io/
  
**Repositorio Github**: https://github.com/kwebio

* * *


  Proyectos Que Debes Conocer..



     


![Web de Mundo Framework. Noticias de programacion gratis y criptomonedas desde Asturias para el mundo con amor, por @rosepac][4]

@rosepac & [@twitter][5] & [facebook][6] & [adobe stock][7] & [pixabay][8]

 [1]: http://kotlinlang.org
 [2]: https://semantic-ui.com
 [3]: https://github.com/kwebio/shoebox
 [4]: https://image.ibb.co/iTckvT/mundo-framework-1350x167-steemit.png
 [5]: https://twitter.com/rosepac21
 [6]: https://facebook.com/rosepac21
 [7]: https://stock.adobe.com/es/contributor/208304300/rosepac
 [8]: https://pixabay.com/es/users/rosepac-4939477/