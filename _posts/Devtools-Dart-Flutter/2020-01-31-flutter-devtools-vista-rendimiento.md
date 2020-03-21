---

title: '🚀 ¿Cómo usar la vista de rendimiento de DevTools con Flutter?'
excerpt: '👩‍🚀 Primeros pasos de uso de la vista de rendimiento de DevTools sobre Flutter.'
description: '👩‍🚀 Primeros pasos de uso de la vista de rendimiento de DevTools sobre Flutter.'
published: true
author_profile: true
comments: false
classes: wide
date: 2020-01-31 13:34:33
last_modified_at: 
header:
  teaser: https://flutter.dev/assets/tools/devtools/cpu_profiler_flame_chart-278ceb3e99b141dd9e2ccf583badcf6e16bf501b482f67814a7adc0356daae74.png
tags:
- Flutter
- Dart
categories:
- SDK Multiplataforma
- Herramientas
permalink: /flutter-dart-devtools-vista-rendimiento/
canonical_URL: https://ciberninjas.com/flutter-dart-devtools-vista-rendimiento/

---

**Nota:** La vista de rendimiento solo funciona con aplicaciones móviles. Use Chrome DevTools para [analizar el rendimiento](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/){:target="_blank"} de una aplicación web.
{: .notice--info}

## ¿Qué es la vista de rendimiento de DevTools?

La vista de rendimiento le permite grabar y perfilar una sesión desde su aplicación Dart.

 **Nota:** **Si está ejecutando una aplicación Flutter, use una compilación de perfil para analizar el rendimiento.** Los perfiles de CPU no son indicativos del rendimiento de la versión a menos que su aplicación Flutter se ejecute en modo de perfil.
{: .notice--info}
## CPU Profiler

Comience a grabar un perfil de CPU haciendo clic en Grabar. Cuando termine de grabar, haga clic en Detener. En este punto, los datos de creación de perfiles de CPU se extraen de la máquina virtual y se muestran en las vistas del generador de perfiles (Árbol de llamadas, De abajo hacia arriba y Gráfico de llama).

## Perfil de granularidad

La velocidad predeterminada a la que la VM recolecta muestras de CPU es 1 muestra / 250 μs. Esto se selecciona de forma predeterminada en la vista Rendimiento como "Granularidad de perfil: medio". Esta tasa se puede modificar a través del selector en la parte superior de la página. Las tasas de muestreo para granularidad baja, media y alta son 1/50 μs, 1/250 μs y 1/1000 μs, respectivamente. Es importante conocer las desventajas de modificar esta configuración.

Un perfil de **granularidad más** alto tiene una tasa de muestreo más alta y, por lo tanto, produce un perfil de CPU de grano fino con más muestras. Esto también puede afectar el rendimiento de su aplicación, ya que la VM se interrumpe con más frecuencia para recopilar muestras. Esto también hace que el búfer de muestra de CPU de la VM se desborde más rápidamente. La máquina virtual tiene un espacio limitado donde puede almacenar información de muestra de la CPU. A una frecuencia de muestreo más alta, el espacio se llena y comienza a desbordarse antes de lo que lo haría si se utilizara una frecuencia de muestreo más baja. Esto significa que es posible que no tenga acceso a las muestras de CPU desde el comienzo del perfil grabado.

Un perfil de **granularidad más** bajo tiene una tasa de muestreo más baja y, por lo tanto, produce un perfil de CPU de grano grueso con menos muestras. Sin embargo, esto afecta menos el rendimiento de su aplicación. El búfer de muestra de la máquina virtual también se llena más lentamente, por lo que puede ver muestras de CPU durante un período de tiempo de ejecución de la aplicación más largo. Esto significa que tiene una mejor oportunidad de ver muestras de CPU desde el comienzo del perfil grabado.

## Tabla de llamas

Esta pestaña del generador de perfiles muestra muestras de CPU para la duración registrada. Este gráfico debe verse como un seguimiento de la pila de arriba hacia abajo, donde el marco de la pila superior llama al que está debajo de él. El ancho de cada marco de pila representa la cantidad de tiempo que consumió la CPU. Los marcos de pila que consumen mucho tiempo de CPU pueden ser un buen lugar para buscar posibles mejoras de rendimiento.

![Captura de pantalla de un gráfico de llamas](https://flutter.dev/assets/tools/devtools/cpu_profiler_flame_chart-278ceb3e99b141dd9e2ccf583badcf6e16bf501b482f67814a7adc0356daae74.png)

## Árbol de llamadas

La vista de árbol de llamadas muestra el rastreo del método para el perfil de CPU. Esta tabla es una representación de arriba hacia abajo del perfil, lo que significa que se puede expandir un método para mostrar sus *calles* .

- **Tiempo Total**

Tiempo que el método dedicó a ejecutar su propio código, así como el código de sus calles.

- **Tiempo propio**

Tiempo que el método pasó ejecutando solo su propio código.

- **Método**

Nombre del método llamado.

- **Fuente**

Ruta del archivo para el sitio de llamada al método.

![Captura de pantalla de una tabla de árbol de llamadas](https://flutter.dev/assets/tools/devtools/cpu_profiler_call_tree-58fae3eb87044cc5a6bc9de83d501e990823053777695ad91fe9efc74b933961.png)

## De abajo hacia arriba

La vista ascendente muestra el seguimiento del método para el perfil de la CPU pero, como su nombre indica, es una representación ascendente del perfil. Esto significa que cada método de nivel superior en la tabla es en realidad el último método en la pila de llamadas para una muestra de CPU dada (en otras palabras, es el nodo hoja para la muestra).

En esta tabla, se puede expandir un método para mostrar a *quienes llaman* .

- **Tiempo Total**

Tiempo que el método dedicó a ejecutar su propio código, así como el código de su destinatario.

- **Tiempo propio**

Para los métodos de nivel superior en el árbol de abajo hacia arriba (marcos de pila de hojas en el perfil), este es el tiempo que el método pasó ejecutando solo su propio código. Para los nodos secundarios (las personas que llaman en el perfil de la CPU), este es el tiempo propio de la persona que llama cuando la llama la persona que llama. En el siguiente ejemplo, el tiempo propio de la persona `Element.updateSlotForChild.visit()`que llama es igual al tiempo propio de la persona `[Stub] OneArgCheckInLineCache`que llama cuando es llamado por la persona que llama.

- **Método**

Nombre del método llamado.

- **Fuente**

Ruta del archivo para el sitio de llamada al método.![Captura de pantalla de una tabla de abajo hacia arriba](https://flutter.dev/assets/tools/devtools/cpu_profiler_bottom_up-69a444ab734f2a151c2291c475b0a95b3e7991a89cbbfcf489d5e65c00ebfe06.png)

## Guía DevTools

[👉 ¿Qué es DevTools?](/flutter-dart-devtools/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo instalar DevTools?](/flutter-dart-devtools-como-instalar/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el inspector de DevTools?](/flutter-dart-devtools-inspector/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la línea de tiempo de DevTools?](/flutter-dart-devtools-linea-tiempo/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de memoria de DevTools?](/flutter-dart-devtools-vista-memoria/){: .btn .btn--inverse .btn--large} [📌 ¿Cómo usar la vista de rendimiento de DevTools?](/flutter-dart-devtools-vista-rendimiento/){: .btn .btn--light-outline .btn--large} [👉 ¿Cómo usar el depurador de DevTools?](/flutter-dart-devtools-depurador/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de registro de DevTools?](/flutter-dart-devtools-vista-registro/){: .btn .btn--inverse .btn--large} [👉 Guía Flutter?](/que-es-flutter-y-por-que-debes-aprenderlo/){: .btn .btn--inverse .btn--large}

## Relacionados

[🎓 Cursos en Español](/cursos-tecnologia/#flutter){: .btn .btn--warning .btn--large} [👉 Ejemplos de Aplicaciones](/flutter-aplicaciones-ejemplos/){: .btn .btn--inverse .btn--large} [⚓ Documentación en Español](https://flutter-es.io/docs/get-started/install){: .btn .btn--inverse .btn--large}

**Fuente**: Salvo que se indique lo contrario, este trabajo está licenciado bajo una [licencia internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0){:target="_blank"} y los ejemplos de código están licenciados bajo la licencia BSD. Creado por [Flutter Oficial](https://flutter.dev/docs/development/tools/devtools){:target="_blank"}
{: .notice--info}
