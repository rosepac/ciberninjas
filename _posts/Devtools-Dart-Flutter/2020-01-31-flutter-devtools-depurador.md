---

title: '🚀 ¿Cómo usar el depurador de DevTools con Flutter?'
excerpt: '👩‍🚀 Primeros pasos de uso de el depurador de DevTools sobre Flutter.'
description: '👩‍🚀 Primeros pasos de uso de el depurador de DevTools sobre Flutter.'
published: true
author_profile: true
comments: false
classes: wide
date: 2020-01-31 13:34:33
last_modified_at: 
header:
  teaser: https://flutter.dev/assets/tools/devtools/debugger_screenshot-e0e87a8a45952b4c109a24213a0d01143e58fa17384f2a64c951e2d900cd87ca.png
tags:
- Flutter
- Dart
categories:
- SDK Multiplataforma
- Herramientas
permalink: /flutter-dart-devtools-depurador/
canonical_URL: https://ciberninjas.com/flutter-dart-devtools-depurador/

---

 **Nota:** El depurador funciona con aplicaciones móviles y web de Flutter.
{: .notice--info}

## Empezando

DevTools incluye un depurador de nivel fuente completo, que admite puntos de interrupción, pasos e inspección variable.

Cuando abra la pestaña del depurador, debería ver todas las bibliotecas para su aplicación en la pantalla inferior izquierda (debajo del área de **Scripts**), y la fuente del punto de entrada principal para su aplicación se carga en el área de origen de la aplicación principal .

Para explorar más fuentes de aplicaciones, puede desplazarse por el `Scripts` área y seleccionar otros archivos fuente para mostrar.

![Captura de pantalla de la pestaña del depurador](https://flutter.dev/assets/tools/devtools/debugger_screenshot-e0e87a8a45952b4c109a24213a0d01143e58fa17384f2a64c951e2d900cd87ca.png)

## Establecer puntos de interrupción

Para establecer un punto de interrupción, haga clic en el margen izquierdo (la regla del número de línea) en el área de origen. Al hacer clic una vez, se establece un punto de interrupción, que también debería aparecer en el área de **Puntos de** interrupción a la izquierda. Al hacer clic nuevamente, se elimina el punto de interrupción.

## La pila de llamadas y las áreas variables

Cuando su aplicación encuentra un punto de interrupción, se detiene allí, y el depurador DevTools muestra la ubicación de ejecución pausada en el área de origen. Además, las áreas `Call stack` y se completan `Variables` con la pila de llamadas actual para el aislamiento en pausa y las variables locales para el marco seleccionado. La selección de otros cuadros en el `Call stack` área cambia el contenido de las variables.

Dentro del `Variables` área, puede inspeccionar objetos individuales al abrirlos para ver sus campos. Al pasar el cursor sobre un objeto en el `Variables` área, se llama `toString()` a ese objeto y se muestra el resultado.

## Recorriendo el código fuente

Cuando está en pausa, los tres botones de paso se activan.

- Use **Step In** para ingresar a una invocación de método, deteniéndose en la primera línea ejecutable de ese método invocado.
- Use **Step Over** a paso para pasar por encima de una invocación de método; esto recorre las líneas de origen en el método actual.
- Use **Step Out** para salir del método actual, sin detenerse en ninguna línea intermedia.

Además, el botón **Resume** continúa la ejecución regular de la aplicación.

## Salida de la consola

La salida de la consola para la aplicación en ejecución (stdout y stderr) se muestra en la consola, debajo del área del código fuente. También puede ver el resultado en la [vista de Registro](https://flutter.dev/docs/development/tools/devtools/logging){:target="_blank"} o "Logging View".

## Rompiendo excepciones

Para ajustar el comportamiento de interrupción de excepciones, active las casillas de verificación **Romper en excepciones no controladas** (Break on unhandled exceptions) y **Romper en todas las excepciones** (Break on all exceptions) en la esquina superior derecha de la vista del depurador.

Romper las excepciones no controladas solo detiene la ejecución si el código de aplicación considera que el punto de interrupción no ha sido capturado. Romper con todas las excepciones hace que el depurador haga una pausa si el código de aplicación capturó o no el punto de interrupción.

## Problemas conocidos

Al realizar un reinicio en caliente para una aplicación Flutter, los puntos de interrupción del usuario se borran.

## Otros recursos

Para obtener más información sobre depuración y creación de perfiles, consulte la página [Depuración](https://flutter.dev/docs/testing/debugging){:target="_blank"} o "Debugging".

## Guía DevTools

[👉 ¿Qué es DevTools?](/flutter-dart-devtools/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo instalar DevTools?](/flutter-dart-devtools-como-instalar/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el inspector de DevTools?](/flutter-dart-devtools-inspector/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la línea de tiempo de DevTools?](/flutter-dart-devtools-linea-tiempo/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de memoria de DevTools?](/flutter-dart-devtools-vista-memoria/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de rendimiento de DevTools?](/flutter-dart-devtools-vista-rendimiento/){: .btn .btn--inverse .btn--large} [📌 ¿Cómo usar el depurador de DevTools?](/flutter-dart-devtools-depurador/){: .btn .btn--light-outline .btn--large} [👉 ¿Cómo usar la vista de registro de DevTools?](/flutter-dart-devtools-vista-registro/){: .btn .btn--inverse .btn--large} [👉 Guía Flutter?](/que-es-flutter-y-por-que-debes-aprenderlo/){: .btn .btn--inverse .btn--large}

## Relacionados

[🎓 Cursos en Español](/cursos-tecnologia/#flutter){: .btn .btn--warning .btn--large} [👉 Ejemplos de Aplicaciones](/flutter-aplicaciones-ejemplos/){: .btn .btn--inverse .btn--large} [⚓ Documentación en Español](https://flutter-es.io/docs/get-started/install){: .btn .btn--inverse .btn--large}

**Fuente**: Salvo que se indique lo contrario, este trabajo está licenciado bajo una [licencia internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0){:target="_blank"} y los ejemplos de código están licenciados bajo la licencia BSD. Creado por [Flutter Oficial](https://flutter.dev/docs/development/tools/devtools){:target="_blank"}
{: .notice--info}
