---

title: '🚀 ¿Cómo usar la línea de tiempo de DevTools con Flutter?'
excerpt: '👩‍🚀 Primeros pasos de uso de la línea de tiempo de DevTools sobre Flutter.'
description: '👩‍🚀 Primeros pasos de uso de la línea de tiempo de DevTools sobre Flutter.'
published: true
author: rosepac
bootstrap: true
comments: false
date: 2020-01-31 12:45:33
last_modified_at: 
thumbnail: https://flutter.dev/assets/tools/devtools/timeline_frame_events_chart-3339ef25e6f5c09c32fc7fd0cf043585dca937a2d138ef1e0650762a9240296e.png
feature-img: https://flutter.dev/assets/tools/devtools/timeline_frame_events_chart-3339ef25e6f5c09c32fc7fd0cf043585dca937a2d138ef1e0650762a9240296e.png
tags:
- Flutter
- Dart
categories:
- SDK Multiplataforma
- Herramientas
permalink: /flutter-dart-devtools-linea-tiempo/
canonical_URL: https://ciberninjas.com/flutter-dart-devtools-linea-tiempo/

---

## ¿Qué es la línea de tiempo de DevTools?

La vista de línea de tiempo es una muestra de información sobre los cuadros Flutter. Consta de tres partes, cada una de las cuales aumenta su granularidad.

- Cuadro de representación de cuadros
- Cuadro de eventos de marco
- Perfilador de CPU

**Nota:** **Use una compilación de perfil de su aplicación para analizar el rendimiento.** Los tiempos de representación de cuadros no son indicativos del rendimiento de la versión a menos que su aplicación se ejecute en modo de perfil.
{: .notice--info}

La vista de línea de tiempo también admite la importación y exportación de archivos de datos de línea de tiempo. Para obtener más información, consulte la sección [Importar y exportar](/flutter-dart-devtools-linea-tiempo/#importar-y-exportar) .

## Cuadro de representación de cuadros

Este gráfico se completa con fotogramas individuales a medida que se representan en su aplicación. Cada barra en el gráfico representa un marco. Las barras están codificadas por colores para resaltar las diferentes partes del trabajo que se producen al renderizar un marco Flutter: trabajar desde el hilo de la interfaz de usuario y trabajar desde el hilo de la GPU.

![Captura de pantalla de una grabación de línea de tiempo](https://flutter.dev/assets/tools/devtools/timeline_frame_rendering_chart-4105f54cbd00a33d60eece8645279d63b27cf565fbe85ecfc616e2d6c109ce7a.png)

Al hacer clic en una barra, se muestran detalles adicionales sobre ese marco.

### Interfaz de Usuario

El subproceso de la interfaz de usuario ejecuta el código Dart en la máquina virtual Dart. Esto incluye el código de su aplicación, así como el marco Flutter. Cuando su aplicación crea y muestra una escena, el subproceso de la interfaz de usuario crea un árbol de capas, un objeto liviano que contiene comandos de pintura independientes del dispositivo y envía el árbol de capas al subproceso de la GPU para que se represente en el dispositivo. No **no** bloquear este hilo.

### GPU

El subproceso de la GPU ejecuta el código de gráficos del motor Flutter. Este hilo toma el árbol de capas y lo muestra hablando con la GPU (unidad de procesamiento gráfico). No puede acceder directamente al hilo de la GPU o sus datos, pero si este hilo es lento, es el resultado de algo que ha hecho en el código Dart. Skia, la biblioteca de gráficos, se ejecuta en este hilo, que a veces se denomina hilo rasterizador.

A veces, una escena da como resultado un árbol de capas que es fácil de construir, pero costoso renderizar en el hilo de la GPU. En este caso, necesitará averiguar qué está haciendo su código que hace que el código de procesamiento sea lento. Los tipos específicos de cargas de trabajo son más difíciles para la GPU. Pueden implicar llamadas innecesarias a `saveLayer()`, opacidades que se cruzan con múltiples objetos y clips o sombras en situaciones específicas.

Para obtener más información sobre la creación de perfiles, consulte [Identificación de problemas en el gráfico de GPU](https://flutter.dev/docs/perf/rendering/ui-performance#identifying-problems-in-the-gpu-graph){:target="_blank" rel="nofollow,noreferrer"}.

### Jank

El cuadro de representación de cuadros muestra jank con una superposición roja. Una trama se considera irregular si se tarda más de ~ 16 ms en completarse. Para lograr una velocidad de representación de cuadros de 60 FPS (cuadros por segundo), cada cuadro debe renderizarse en ~ 16 ms o menos. Cuando se pierde este objetivo, es posible que experimente un salto de interfaz de usuario o fotogramas caídos.

Para obtener más información sobre cómo analizar el rendimiento de su aplicación, consulte [Perfiles de rendimiento de Flutter](https://flutter.dev/docs/perf/rendering/ui-performance){:target="_blank" rel="nofollow,noreferrer"}.

## Cuadro de eventos de marco

El gráfico de eventos de cuadro muestra el seguimiento de eventos para un solo cuadro. El evento más destacado genera el evento debajo de él, y así sucesivamente. Los eventos de UI y GPU son flujos de eventos separados, pero comparten una línea de tiempo común (que se muestra en la parte superior del cuadro de cuadros). Esta línea de tiempo es estrictamente para el marco dado. No refleja el reloj compartido por todos los cuadros.

![Captura de pantalla de eventos de línea de tiempo para un marco](https://flutter.dev/assets/tools/devtools/timeline_frame_events_chart-3339ef25e6f5c09c32fc7fd0cf043585dca937a2d138ef1e0650762a9240296e.png)

La tabla de llamas admite el zoom y la panorámica. Desplácese hacia arriba y hacia abajo para acercar y alejar, respectivamente. Para desplazarse, puede hacer clic y arrastrar el gráfico o desplazarse horizontalmente. Puede hacer clic en un evento para ver información de perfiles de CPU en el generador de perfiles de CPU, que se describe en la siguiente sección.

## Perfilador de CPU

Esta sección muestra información de perfiles de CPU para un evento específico del cuadro de eventos de marco (Build, Layout, Paint, etc.).

### Perfil de granularidad

La velocidad predeterminada a la que la VM recolecta muestras de CPU es 1 muestra / 250 μs. Esto se selecciona de forma predeterminada en la vista de línea de tiempo como "Granularidad de perfil: medio". Esta tasa se puede modificar a través del selector en la parte superior de la página. Las tasas de muestreo para granularidad baja, media y alta son 1/50 μs, 1/250 μs y 1/1000 μs, respectivamente. Es importante conocer las desventajas de modificar esta configuración.

Un perfil de **granularidad más** alto tiene una tasa de muestreo más alta y, por lo tanto, produce un perfil de CPU de grano fino con más muestras. Esto también puede afectar el rendimiento de su aplicación, ya que la VM se interrumpe con más frecuencia para recopilar muestras. Esto también hace que el búfer de muestra de CPU de la VM se desborde más rápidamente. La máquina virtual tiene un espacio limitado donde puede almacenar información de muestra de la CPU. A una frecuencia de muestreo más alta, el espacio se llena y comienza a desbordarse antes de lo que lo haría si se utilizara una frecuencia de muestreo más baja. Esto significa que es posible que no tenga acceso a muestras de CPU para cuadros al comienzo de la línea de tiempo.

Un perfil de **granularidad más** bajo tiene una tasa de muestreo más baja y, por lo tanto, produce un perfil de CPU de grano grueso con menos muestras. Sin embargo, esto afecta menos el rendimiento de su aplicación. El búfer de muestra de la máquina virtual también se llena más lentamente, por lo que puede ver muestras de CPU durante un período de tiempo de ejecución de la aplicación más largo. Esto significa que tiene una mejor oportunidad de ver muestras de CPU de fotogramas anteriores en la línea de tiempo.

### Tabla de llamas

Esta pestaña del generador de perfiles muestra muestras de CPU para el evento de cuadro seleccionado (como Diseño en el siguiente ejemplo). Este gráfico debe verse como un seguimiento de la pila de arriba hacia abajo, donde el marco de la pila superior llama al que está debajo de él. El ancho de cada marco de pila representa la cantidad de tiempo que consumió la CPU. Los marcos de pila que consumen mucho tiempo de CPU pueden ser un buen lugar para buscar posibles mejoras de rendimiento.

![Captura de pantalla de un gráfico de llamas](https://flutter.dev/assets/tools/devtools/timeline_cpu_profiler_flame_chart-f87c908a3d74bd900a2dc28da3ae2a89cf08707b01afc16a69abd33695842376.png)

### Árbol de llamadas

La vista de árbol de llamadas muestra el rastreo del método para el perfil de CPU. Esta tabla es una representación de arriba hacia abajo del perfil, lo que significa que se puede expandir un método para mostrar sus *calles* .

- **Tiempo Total**

	Tiempo que el método dedicó a ejecutar su propio código, así como el código de sus calles.

- **Tiempo propio**

	Tiempo que el método pasó ejecutando solo su propio código.

- **Método**

	Nombre del método llamado.

- **Fuente**

	Ruta del archivo para el sitio de llamada al método.

![Captura de pantalla de una tabla de árbol de llamadas](https://flutter.dev/assets/tools/devtools/timeline_cpu_profiler_call_tree-5718f5d6ef49f2bafd5500a14fdebe51153a49a6f6a8850ad7fde48bc9fe2348.png)

### De abajo hacia arriba

La vista ascendente muestra el seguimiento del método para el perfil de la CPU pero, como su nombre indica, es una representación ascendente del perfil. Esto significa que cada método de nivel superior en la tabla es en realidad el último método en la pila de llamadas para una muestra de CPU dada (en otras palabras, es el nodo hoja para la muestra).

En esta tabla, se puede expandir un método para mostrar a *quienes llaman* .

- **Tiempo Total**

	Tiempo que el método dedicó a ejecutar su propio código, así como el código de su destinatario.

- **Tiempo propio**

	Para los métodos de nivel superior en el árbol de abajo hacia arriba (marcos de pila de hojas en el perfil), este es el tiempo que el método pasó ejecutando solo su propio código. Para los nodos secundarios (las personas que llaman en el perfil de la CPU), este es el tiempo propio de la persona que llama cuando la llama la persona que llama. En el siguiente ejemplo, el tiempo propio de la persona `Element.updateSlotForChild.visit()`que llama es igual al tiempo propio de la persona `[Stub] OneArgCheckInLineCache`que llama cuando es llamado por la persona que llama.

- **Método**

	Nombre del método llamado.

- **Fuente**

	Ruta del archivo para el sitio de llamada al método.![Captura de pantalla de una tabla de abajo hacia arriba](https://flutter.dev/assets/tools/devtools/timeline_cpu_profiler_bottom_up-fa2598265cc077c36c637f04dd602649637be3d9fd6a30a2b21fb82f933a532c.png)Importar y exportarDevTools admite la importación y exportación de instantáneas de línea de tiempo. Al hacer clic en el botón de exportación (esquina superior derecha encima del cuadro de representación de cuadros) se descarga una instantánea del estado actual de la línea de tiempo. Para importar una instantánea de la línea de tiempo, puede arrastrar y soltar la instantánea en DevTools desde cualquier página. **Tenga en cuenta que DevTools solo admite la importación de archivos que se exportaron originalmente desde DevTools.**

## Importar y exportar

DevTools admite la importación y exportación de instantáneas de línea de tiempo. Al hacer clic en el botón de exportación (esquina superior derecha encima del cuadro de representación de cuadros) se descarga una instantánea del estado actual de la línea de tiempo. Para importar una instantánea de la línea de tiempo, puede arrastrar y soltar la instantánea en DevTools desde cualquier página. Tenga en cuenta que DevTools solo admite la importación de archivos que se exportaron originalmente desde DevTools.

## Guía DevTools

[👉 ¿Qué es DevTools?](/flutter-dart-devtools/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo instalar DevTools?](/flutter-dart-devtools-como-instalar/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el inspector de DevTools?](/flutter-dart-devtools-inspector/){: .btn .btn--inverse .btn--large} [📌 ¿Cómo usar la línea de tiempo de DevTools?](/flutter-dart-devtools-linea-tiempo/){: .btn .btn--light-outline .btn--large} [👉 ¿Cómo usar la vista de memoria de DevTools?](/flutter-dart-devtools-vista-memoria/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de rendimiento de DevTools?](/flutter-dart-devtools-vista-rendimiento/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el depurador de DevTools?](/flutter-dart-devtools-depurador/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de registro de DevTools?](/flutter-dart-devtools-vista-registro/){: .btn .btn--inverse .btn--large} [👉 Guía Flutter?](/que-es-flutter-y-por-que-debes-aprenderlo/){: .btn .btn--inverse .btn--large}

## Relacionados

[🎓 Cursos en Español](/cursos-tecnologia/#flutter){: .btn .btn--warning .btn--large} [👉 Ejemplos de Aplicaciones](/flutter-aplicaciones-ejemplos/){: .btn .btn--inverse .btn--large} [⚓ Documentación en Español](https://flutter-es.io/docs/get-started/install){: .btn .btn--inverse .btn--large}

**Fuente**: Salvo que se indique lo contrario, este trabajo está licenciado bajo una [licencia internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0){:target="_blank" rel="nofollow,noreferrer"} y los ejemplos de código están licenciados bajo la licencia BSD. Creado por [Flutter Oficial](https://flutter.dev/docs/development/tools/devtools){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}
