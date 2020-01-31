---

title: '🚀 ¿Cómo usar el inspector de DevTools con Flutter?'
excerpt: '👩‍🚀 Primeros pasos de uso del inspector de DevTools sobre Flutter.'
description: '👩‍🚀 Primeros pasos de uso del inspector de DevTools sobre Flutter.'
published: true
author_profile: true
comments: true
classes: wide
date: 2020-01-31 12:32:33
last_modified_at: 
header:
  teaser: https://flutter.dev/assets/tools/devtools/inspector_screenshot-20506a87233698df68d6ba223034f3e95b3e4e11773da7d748a3c6fdd6ca8bf8.png
tags:
- Flutter
- Dart
categories:
- SDK Multiplataforma
- Herramientas
permalink: /flutter-dart-devtools-inspector/
canonical_URL: https://ciberninjas.com/flutter-dart-devtools-inspector/

---

## ¿Qué es el inspector de Flutter?

El inspector de widgets de Flutter es una herramienta poderosa para visualizar y explorar árboles de widgets de Flutter. El **framework Flutter** usa widgets como el [bloque de construcción central](https://flutter.dev/docs/development/ui/widgets-intro){:target="_blank"} para cualquier cosa, desde controles (como texto, botones y conmutadores) hasta diseño (como centrado, relleno, filas y columnas). El inspector lo ayuda a visualizar y explorar árboles de widgets de Flutter y puede usarse para lo siguiente:

- Comprender los diseños existentes
- Diagnosticar problemas de diseño

![Captura de pantalla de la ventana del inspector Flutter](https://flutter.dev/assets/tools/devtools/inspector_screenshot-20506a87233698df68d6ba223034f3e95b3e4e11773da7d748a3c6fdd6ca8bf8.png)

## Empezar

Para depurar un problema de diseño, ejecute la aplicación en [modo de depuración](https://flutter.dev/docs/testing/build-modes#debug){:target="_blank"} y abra el inspector haciendo clic en la pestaña **Inspector Flutter** en la barra de herramientas de DevTools.

 **Nota:** Todavía puede acceder al inspector de Flutter directamente desde Android Studio / IntelliJ, pero es posible que prefiera la vista más espaciosa cuando lo ejecuta desde DevTools en un navegador. También tenga en cuenta que la interfaz de usuario para el inspector varía ligeramente entre estos entornos. Esta página describe la interfaz de usuario para la versión DevTools del inspector.
 {: .notice--info}

### Depuración visual de problemas de diseño

La siguiente es una guía de las funciones disponibles en la barra de herramientas del inspector. Cuando el espacio es limitado, el icono se usa como la versión visual de la etiqueta.

- **Seleccionar modo de widget** ![Seleccionar icono de modo de widget](https://flutter.dev/assets/tools/devtools/select-widget-mode-icon-d55d488f9949c944b2acb62ea12b76d5cef86f447d48eb2420e739adec98b490.png)

Active este botón para seleccionar un widget en el dispositivo para inspeccionarlo. Para obtener más información, consulte [Inspección de un widget](https://flutter.dev/docs/development/tools/devtools/inspector#inspecting-a-widget){:target="_blank"}.

- **Actualizar árbol** ![Actualizar icono de árbol](https://flutter.dev/assets/tools/devtools/refresh-tree-icon-9028765959cd8c8226e495f5aeeeea8f293280d6fbaf580e4b220551a91b1bb6.png)

Vuelva a cargar la información del widget actual.

- **Superposición de rendimiento** ![Icono de superposición de rendimiento](https://flutter.dev/assets/tools/devtools/performance-overlay-icon-98d3cd664c3ef07bd340cdb58ae65eab31c65292d979c916edde5c50a85805ad.png)

Alternar la visualización de gráficos de rendimiento para los hilos de GPU y CPU. Para obtener más información sobre la interpretación de estos gráficos, consulte [La superposición](https://flutter.dev/docs/perf/rendering/ui-performance#the-performance-overlay){:target="_blank"} de [rendimiento en el perfil de rendimiento de Flutter](https://flutter.dev/docs/perf/rendering/ui-performance){:target="_blank"}.

- **iOS** ![Alternar icono de plataforma](https://flutter.dev/assets/tools/devtools/toggle-platform-icon-96bfe37adf2fa433e858b0980b98bcb1a7dcbb22079c6a99fc287bf744a46128.png)

Alternar los comportamientos de representación y gestos entre Android e iOS.

- **Pintura de depuración** ![Icono de modo de pintura de depuración](https://flutter.dev/assets/tools/devtools/debug-paint-mode-icon-e568719fdc4c1646dfa81a623188d6b79c979b60278ea079845522fa523b74f8.png)

Agregue sugerencias de depuración visual a la representación que muestre bordes, relleno, alineación y espaciadores.

- **Pintar líneas de base** ![Icono de pintura de referencia](https://flutter.dev/assets/tools/devtools/paint-baselines-icon-fec7c2efe20ab1cbf12633501c93f4f7025d0e48bd8d60b9fae8c2181b7ec20e.png)

Haga que cada RenderBox dibuje una línea en cada una de sus líneas de base de texto.

- **Animaciones lentas** ![Icono de animaciones lentas](https://flutter.dev/assets/tools/devtools/slow-animations-icon-107a9c1945ec1889da98f4d0bdacc3c4bbbedfb0bca0d6bdcce62a59110b2b87.png)

Reduzca la velocidad de las animaciones para permitir la inspección visual.

- **Repintar Rainbow** ![Repintar el icono del arco iris](https://flutter.dev/assets/tools/devtools/repaint-rainbow-icon-1c39ae7368f741a125b64e830d2b638160e669fd6e0056a4a4cefd9304afc94e.png)

Muestra colores rotativos en las capas al repintar.

- **Banner de modo de depuración** ![Icono de banner de modo de depuración](https://flutter.dev/assets/tools/devtools/debug-mode-banner-icon-ec8b2a56998d4ae5409b5109933362b349dd267e9e947ba7dd64ff4cd6368517.png)

Alterna la visualización del banner de depuración incluso cuando se ejecuta una compilación de depuración.

## Inspeccionar un widget

Puede explorar el árbol de widgets interactivos para ver widgets cercanos y ver sus valores de campo.

Para ubicar elementos de IU individuales en el árbol de widgets, haga clic en el botón **Seleccionar modo de widget** en la barra de herramientas. Esto pone la aplicación en el dispositivo en un modo de "selección de widget". Haga clic en cualquier widget en la interfaz de usuario de la aplicación; esto selecciona el widget en la pantalla de la aplicación y desplaza el árbol de widgets al nodo correspondiente. Mueva el botón **Seleccionar modo de widget** nuevamente para salir del modo de selección de widget.

Al depurar problemas de diseño, los campos clave a tener en cuenta son los campos `size`y `constraints`. Las restricciones fluyen hacia abajo del árbol, y los tamaños vuelven a subir.

## Explorador de diseño de aleteo

**Nota:** Esta función solo está disponible en la versión alfa de [DevTools escrita en Flutter](https://flutter.dev/docs/development/tools/devtools/overview#how-do-i-try-devtools-written-in-flutter).
{: .notice--info}

El explorador de diseño de Flutter le ayuda a comprender mejor los diseños de Flutter. Actualmente, el explorador de diseño solo admite la exploración de [diseños flexibles](https://api.flutter.dev/flutter/widgets/Flex-class.html){:target="_blank"}, pero puede extenderse a otros tipos de diseños en el futuro.

### Usar el Explorador de diseño

Desde el Inspector Flutter, seleccione un widget flexible (por ejemplo, [Fila](https://api.flutter.dev/flutter/widgets/Row-class.html){:target="_blank"} , [Columna](https://api.flutter.dev/flutter/widgets/Column-class.html){:target="_blank"}, [Flex](https://api.flutter.dev/flutter/widgets/Flex-class.html){:target="_blank"}, etc.) o un hijo directo de un widget flexible. Si está utilizando Flutter 1.12.16 o posterior, verá una pestaña adicional "Explorador de diseño" junto a "Árbol de detalles". Al seleccionar esta pestaña, se mostrará la nueva función Explorador de diseño.

![La pestaña Explorador de diseño](https://flutter.dev/assets/tools/devtools/layout_explorer_tab-e151d6866e9cdb1e8a2afeb0bd11a0e156cdef2e8ab1b29cc806d2fe23193d6e.png)

El Explorador de diseño visualiza cómo se presentan los widgets [Flex](https://api.flutter.dev/flutter/widgets/Flex-class.html){:target="_blank"} y sus hijos. El explorador identifica el eje principal y el eje transversal, así como la alineación actual para cada uno (por ejemplo, inicio, final, espacio entre, etc.). También muestra detalles como factor flexible y restricciones de diseño.

Además, el explorador muestra violaciones de restricciones de diseño y errores de desbordamiento de representación. Las restricciones de diseño violadas son de color rojo, y los errores de desbordamiento se presentan en el patrón estándar de "cinta amarilla", como vería en un dispositivo en ejecución. Estas visualizaciones tienen como objetivo mejorar la comprensión de por qué se producen errores de desbordamiento y cómo solucionarlos.

![El Explorador de diseño que muestra los errores y el inspector de dispositivos](https://flutter.dev/assets/tools/devtools/layout_explorer_errors_and_device-3d9dca72160d0b110d30a3229b391a5448c690fb1616abdb9bb0c0a442ecc2e4.gif)

Al hacer clic en un widget en el explorador de diseño, se reflejará la selección en el inspector del dispositivo. "Seleccionar modo de widget" debe estar habilitado para esto. Para habilitarlo, haga clic en el botón "Seleccionar modo de widget" en el inspector.

![El botón Seleccionar modo de widget en el inspector](https://flutter.dev/assets/tools/devtools/select_widget_mode_devtools_alpha-638e9a097b977cbe603def69d4af69d2be6581a3886b00b7a28051b1157a12c1.png)

Para algunas propiedades, como el factor flexible y la alineación, puede modificar el valor mediante listas desplegables en el explorador. Al modificar una propiedad de widget, verá el nuevo valor reflejado no solo en el Explorador de diseño, sino también en el dispositivo que ejecuta su aplicación Flutter. El explorador anima los cambios de propiedad para que el efecto del cambio sea claro. Los cambios de propiedad del widget realizados desde el explorador de diseño no modifican su código fuente y se revierten en la recarga en caliente.

### Propiedades interactivas

Layout Explorer admite la modificación de [mainAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/mainAxisAlignment.html) , [crossAxisAlignment](https://api.flutter.dev/flutter/widgets/Flex/crossAxisAlignment.html) y [FlexParentData.flex](https://api.flutter.dev/flutter/rendering/FlexParentData/flex.html) . En el futuro, podemos agregar soporte para propiedades adicionales como [mainAxisSize](https://api.flutter.dev/flutter/widgets/Flex/mainAxisSize.html) , [textDirection](https://api.flutter.dev/flutter/widgets/Flex/textDirection.html) y [FlexParentData.fit](https://api.flutter.dev/flutter/rendering/FlexParentData/fit.html) .

#### mainAxisAlignment

![El Explorador de diseño cambia la alineación del eje principal](https://flutter.dev/assets/tools/devtools/layout_explorer_main_axis_alignment-f7a5366e773f3754bfcd44b7928f766e0657b8862e40579b8930d6a869fb634f.gif)

Valores soportados:

- MainAxisAlignment.start
- MainAxisAlignment.end
- MainAxisAlignment.center
- MainAxisAlignment.spaceBetween
- MainAxisAlignment.spaceAround
- MainAxisAlignment.spaceEvenly

#### crossAxisAlignment

![El Explorador de diseño cambia la alineación del eje transversal](https://flutter.dev/assets/tools/devtools/layout_explorer_cross_axis_alignment-5353ac29ab6334eb369ff45fd9bb947c91193ec5db783646e77dd13991c99541.gif)

Valores soportados:

- CrossAxisAlignment.start
- CrossAxisAlignment.center
- CrossAxisAlignment.end
- CrossAxisAlignment.stretch

#### FlexParentData.flex

![El Explorador de diseño cambia el factor flexible](https://flutter.dev/assets/tools/devtools/layout_explorer_flex-47d63723387e6cd33b37de6626339e9d3f2de7820d92144b4a5eba2cea08b335.gif)

El Explorador de diseño admite 7 opciones flexibles en la interfaz de usuario (nulo, 0, 1, 2, 3, 4, 5), pero técnicamente el factor flexible del elemento secundario de un widget flexible puede ser cualquier int.

## Seguimiento de la creación de widgets

Parte de la funcionalidad del inspector Flutter se basa en instrumentar el código de la aplicación para comprender mejor las ubicaciones de origen donde se crean los widgets. La instrumentación de origen permite que el inspector de Flutter presente el árbol de widgets de manera similar a cómo se definió la IU en su código fuente. Sin él, el árbol de nodos en el árbol de widgets es mucho más profundo, y puede ser más difícil entender cómo la jerarquía de widgets de tiempo de ejecución corresponde a la IU de su aplicación.

Al iniciar una aplicación desde un IDE, la instrumentación de origen ocurre de manera predeterminada. Para los lanzamientos de línea de comandos, debe optar por la instrumentación de origen. Para hacer esto, ejecute la aplicación con la `--track-widget-creation`bandera:

```
flutter run --track-widget-creation
```

Si inicia sin la bandera, aún puede usar el inspector; verá un mensaje recordatorio en línea y descartable sobre el uso de la bandera de instrumentación de origen.

Estos son ejemplos de cómo se vería su árbol de widgets con y sin la creación de widgets de seguimiento habilitada.

Seguimiento de creación de widgets habilitado ( **recomendado** ):

![El árbol de widgets con la creación de widgets de seguimiento habilitada](https://flutter.dev/assets/tools/devtools/track_widget_creation_enabled-c9b0963330328870af663811fa487361cbc576b01ae3ec98b245090e54efb549.png)

Seguimiento de creación de widgets deshabilitado ( **no** recomendado):

![El árbol de widgets con creación de widgets de pista deshabilitado](https://flutter.dev/assets/tools/devtools/track_widget_creation_disabled-ec30a54cb971534b22f07678e837108971a25020b5d670a4ac78cedf6bd37451.png)

## Otros recursos

Para una demostración de lo que generalmente es posible con el inspector, vea la [charla DartConf 2018 que](https://www.youtube.com/watch?v=JIcmJNT9DNI){:target="_blank"} demuestra la versión IntelliJ del inspector Flutter.

## Guía DevTools

[👉 ¿Qué es DevTools?](/flutter-dart-devtools/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo instalar DevTools?](/flutter-dart-devtools-como-instalar/){: .btn .btn--inverse .btn--large} [📌 ¿Cómo usar el inspector de DevTools?](/flutter-dart-devtools-inspector/){: .btn .btn--light-outline .btn--large} [👉 ¿Cómo usar la línea de tiempo de DevTools?](/flutter-dart-devtools-linea-tiempo/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de memoria de DevTools?](/flutter-dart-devtools-vista-memoria/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de rendimiento de DevTools?](/flutter-dart-devtools-vista-rendimiento/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el depurador de DevTools?](/flutter-dart-devtools-depurador/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de registro de DevTools?](/flutter-dart-devtools-vista-registro/){: .btn .btn--inverse .btn--large}

## Relacionados

[🎓 Cursos en Español](/cursos-tecnologia/#flutter){: .btn .btn--warning .btn--large} [👉 Ejemplos de Aplicaciones](/flutter-aplicaciones-ejemplos/){: .btn .btn--inverse .btn--large} [⚓ Documentación en Español](https://flutter-es.io/docs/get-started/install){: .btn .btn--inverse .btn--large}

**Fuente**: Salvo que se indique lo contrario, este trabajo está licenciado bajo una [licencia internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0){:target="_blank"} y los ejemplos de código están licenciados bajo la licencia BSD. Creado por [Flutter Oficial](https://flutter.dev/docs/development/tools/devtools){:target="_blank"}
{: .notice--info}
