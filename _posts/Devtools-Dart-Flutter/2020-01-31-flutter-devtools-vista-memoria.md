---

title: '🚀 ¿Cómo usar la vista de memoria de DevTools con Flutter?'
excerpt: '👩‍🚀 Primeros pasos de uso de la vista de memoria de DevTools sobre Flutter.'
description: '👩‍🚀 Primeros pasos de uso de la vista de memoria de DevTools sobre Flutter.'
published: true
author_profile: true
comments: false
classes: wide
date: 2020-01-31 13:20:33
last_modified_at: 
header:
  teaser: https://i.ibb.co/2Sk0Kdr/vscode-show-in-browser-4848ba01b78de1138104589c726b1dd8a845364356b9d50dffdffd36dbf20887.png
tags:
- Flutter
- Dart
categories:
- SDK Multiplataforma
- Herramientas
permalink: /flutter-dart-devtools-vista-memoria/
canonical_URL: https://ciberninjas.com/flutter-dart-devtools-vista-memoria/

---

## ¿Qué es la vista de memoria de DevTools?

Los objetos Dart asignados creados usando un constructor de clase (por ejemplo, usando `new MyClass()`o `MyClass()`) viven en una porción de memoria llamada el montón.

El panel de memoria de DevTools le permite ver cómo un aislado está utilizando la memoria en un momento dado. Este panel, usando Instantánea y Restablecer, puede mostrar los recuentos de acumuladores. Los acumuladores se pueden usar para estudiar la tasa de asignaciones de memoria, si sospecha que su aplicación está perdiendo memoria o tiene otros errores relacionados con la asignación de memoria.

La creación de perfiles de memoria consta de cuatro partes, cada una de las cuales aumenta su granularidad:

- Cuadro de resumen de memoria
- Cronología del evento
- Clases de instantáneas
- Instancias de clase

 **Nota:** **Use el [modo de perfil](https://flutter.dev/docs/testing/build-modes#profile){:target="_blank" rel="nofollow"} cuando ejecute su aplicación para analizar el rendimiento.** El uso de la memoria no es indicativo del rendimiento de la versión a menos que su aplicación se ejecute en modo de perfil. En general, el uso de la memoria es bastante preciso, en términos relativos, entre los modos de depuración, liberación o perfil. El modo de perfil puede mostrar un uso de memoria absoluto más alto porque se crea un aislamiento de servicio para perfilar su aplicación. Este aislamiento no existirá en el modo de lanzamiento. La memoria absoluta utilizada también podría ser mayor en el modo de depuración frente a liberación. En el modo de lanzamiento, el trabajo puede calcularse y optimizarse con anticipación, mientras que en el modo de depuración ese mismo trabajo podría calcularse en tiempo de ejecución, lo que requiere más información.
 {: .notice--info}

## Anatomía de la memoria

Use un gráfico de series de tiempo para visualizar el estado de la memoria de Flutter en intervalos de tiempo sucesivos. Cada punto de datos en el gráfico corresponde a la marca de tiempo (eje x) de las cantidades medidas (eje y) del montón, por ejemplo, uso, capacidad, externo, recolección de basura y tamaño de conjunto residente.

![Captura de pantalla de una página de anatomía de la memoria](https://flutter.dev/assets/tools/devtools/memory_anatomy-68b1ff0b9ed6ae03c388642615d2eddd57e7ddbf220be5b8d54a2fa1b8cf1e06.png)

- **Leyenda**

Todas las medidas recopiladas con respecto a la memoria. Al hacer clic en el nombre de una leyenda, se ocultan o muestran esos datos.

- **Selector de rango**

Todos los datos de memoria recopilados (series de tiempo). La izquierda / primera vez / datos (información de memoria), en el selector, es cuando se inició la aplicación. El tiempo / datos más a la derecha o la última es la información de memoria continua que se recibe (en vivo) hasta que se detiene la aplicación.

- **Vista del selector de rango**

Vista detallada de los datos recopilados para este rango de series de tiempo (área no gris).

- **Marca de tiempo del eje X**

Hora de la información de memoria recopilada (capacidad, usada, externa, RSS (tamaño de conjunto residente) y GC (recolección de basura).

- **Desplazar información de datos recopilados**

En un momento particular (eje x) los datos de memoria recopilados detallados.

- **Recolección de basura ocurrió**

Se produjo compactación del montón.

- **Cronología del evento**

Cuando se produjo una acción del usuario (como hacer clic en el botón Instantánea o Restablecer).

- **Instantánea**

Mostrar una tabla de objetos de memoria activa actuales (consulte [Clases de instantáneas](https://flutter.dev/docs/development/tools/devtools/memory#snapshot-classes){:target="_blank" rel="nofollow"} ).

- **Restablecer acumulador**

Restablezca los valores, a cero, en la columna Acumulador en la tabla de clases Snapshot.

- **Clases de filtrado**

👷‍♂️ PENDIENTE

- **Clases de instantáneas**

Al hacer clic en el botón Instantánea (área superior derecha) se muestra una tabla de objetos de memoria actuales. Los objetos de memoria se pueden ordenar por nombre de clase, tamaño, instancias asignadas, etc.

- **El acumulador cuenta desde el reinicio**

Al hacer clic en el botón Restablecer (área superior derecha) se restablece el recuento de instancias acumuladas. Al hacer clic en Instantánea después de un reinicio, se muestra el número de instancias nuevas asignadas desde el último reinicio. Esto es útil para encontrar pérdidas de memoria.

- **Instancias de clase**

Al hacer clic en una clase en la tabla de clases Snapshot, se muestra el número de instancias activas para esa clase.

- **Inspeccionar el contenido de una instancia**

👷‍♂️ PENDIENTE

- **Total de objetos activos y clases en el montón**

Clases totales asignadas en el montón y objetos totales (instancias) en el montón.

## Cuadro de resumen de memoria

![Captura de pantalla de la tabla de memoria básica](https://flutter.dev/assets/tools/devtools/memory_basic_chart-4ea94b865fdc80062a865c620c86fa4f6fd000691e60dc7ec13ea1cfb24a64fe.png)

Este gráfico es un gráfico de series de tiempo para ayudar a visualizar el estado del montón en varios puntos en el tiempo.

El eje x del gráfico es una línea de tiempo de eventos (series de tiempo). En otras palabras, muestra el estado sondeado de la memoria cada 500 ms. Esto ayuda a dar una apariencia en vivo del estado de la memoria a medida que se ejecuta la aplicación. Las cantidades trazadas en el eje y son (de arriba a abajo):

- **Capacidad**

Capacidad actual del montón.

- **GC**

GC (recolección de basura) ha ocurrido. Para obtener más información sobre cómo Dart realiza la recolección de basura, vea [No tema al recolector de basura](https://medium.com/flutter/flutter-dont-fear-the-garbage-collector-d69b3ff1ca30){:target="_blank" rel="nofollow"}.

- **Usado**

Objetos (objetos Dart) en el montón.

- **Externo**

Memoria que no está en el montón de Dart pero que todavía es parte de la huella de memoria total. Los objetos en la memoria externa serían objetos nativos (por ejemplo, de una memoria leída de un archivo o una imagen decodificada). Los objetos nativos se exponen a la máquina virtual Dart desde el sistema operativo nativo (como Android, Linux, Windows, iOS) utilizando un integrador Dart. El insertador crea un contenedor Dart con un finalizador, lo que permite que el código Dart se comunique con estos recursos nativos. Flutter tiene un integrador para Android e iOS. Para obtener más información, consulte [Dart on the Server](https://dart-lang.github.io/server/server.html){:target="_blank" rel="nofollow"} o [Custom Flutter Engine Embedders](https://github.com/flutter/flutter/wiki/Custom-Flutter-Engine-Embedders){:target="_blank" rel="nofollow"}
    
![Captura de pantalla de la tabla de tamaño de conjunto residente](https://flutter.dev/assets/tools/devtools/memory_rss_chart-3c159500df160cf818ea66fcacc03e6b89098692a9bc4173fa546d29e59baa27.png)
    
Para ver RSS (tamaño de conjunto residente), haga clic en el nombre del RSS ubicado en la leyenda.
    
- El tamaño del conjunto residente muestra la cantidad de memoria para un proceso. No incluye la memoria que se intercambia. Incluye memoria de bibliotecas compartidas que se cargan, así como toda la memoria de pila y montón.
    
Para obtener más información, vea [Dart VM internos](https://mrale.ph/dartvm/){:target="_blank" rel="nofollow"}.

## Cronología del evento

![Captura de pantalla de eventos DevTools](https://flutter.dev/assets/tools/devtools/memory_snapshot_reset-2ec2102b65a6e570138b308b585ddf1994cdd7fab2e816eedd581f5de65f9a6c.png)

Este gráfico muestra los eventos de DevTools (como los clics de los botones Instantánea y Restablecer) en relación con la línea de tiempo del gráfico de memoria. Al pasar el cursor sobre los marcadores en la línea de tiempo del evento, se muestra la hora en que ocurrió el evento. Esto ayuda a identificar cuándo podría haber ocurrido una pérdida de memoria en la línea de tiempo (eje x).

![Captura de pantalla de la línea de tiempo del evento.](https://flutter.dev/assets/tools/devtools/memory_eventtimeline-c058d5b0fd6816fd3af5f96d42be7508d3487b8b525a4e329955578f6d10819b.png)

Al hacer clic en el botón **Instantánea,** se muestra el estado actual del montón con respecto a todas las clases activas y sus instancias. Cuando se presiona el botón **Restablecer** , el acumulador para todas las clases se restablece a cero. El restablecimiento está vinculado temporalmente, utilizando una barra horizontal azul tenue, a la instantánea anterior. Al hacer clic nuevamente en el botón **Restablecer,** se restablecen los acumuladores desde el último restablecimiento y se vincula temporalmente el último restablecimiento al restablecimiento anterior.

## Clases de instantáneas

![Captura de pantalla de las clases de instantáneas](https://flutter.dev/assets/tools/devtools/memory_classes-66ee73eda35bf89654d98da542375b0e356a4aa8889edb92b70c415f342c973c.png)

Este panel muestra las clases asignadas en el montón, instancias totales, bytes totales asignados y un acumulador de asignaciones desde el último reinicio.

- **Talla**

Cantidad total de memoria utilizada por los objetos actuales en el montón.

- **Contar**

Número total de objetos actuales en el montón.

- **Acumulador**

Número total de objetos en el montón desde el último reinicio.

- **Clase**

Un agregado de los objetos asignados a esta clase. Al hacer clic en el nombre de una clase, se muestra una lista de instancias de clase.

## Instancias de clase

Muestra una lista de instancias de clase por su nombre de identificador. [👷‍♂️ PENDIENTE: agregue un enlace para inspeccionar los valores de datos.]

## Acciones de memoria

![Captura de pantalla de las clases de instantáneas](https://flutter.dev/assets/tools/devtools/memory_classes-66ee73eda35bf89654d98da542375b0e356a4aa8889edb92b70c415f342c973c.png)

### Vivacidad de la tabla de resumen de memoria

- **Pausa**

Pause el cuadro de resumen de memoria para permitir la inspección de los datos actualmente trazados. Los datos de la memoria entrante todavía se reciben; observe que el selector de rango continúa creciendo hacia la derecha.

- **Currículum**

El cuadro de resumen de memoria está en vivo y muestra la hora actual y los últimos datos de memoria recibidos.

### Administrar los objetos y las estadísticas en el montón

- **Instantánea**

Devuelve la lista de clases activas en el montón. La columna Acumulador muestra el número de objetos asignados desde el reinicio anterior.

- **Reiniciar**

Reduce a cero la columna Acumulador en la tabla de clases de instantáneas y actualiza los datos mostrados.

- **Filtrar**

La tabla de clases de Instantánea muestra clases del conjunto de paquetes seleccionados.

- **GC**

Inicia una recolección de basura.

## Glosario de términos de VM

Estos son algunos conceptos informáticos que lo ayudarán a comprender mejor cómo su aplicación utiliza la memoria.

- **Recolección de basura (GC)**

GC es el proceso de buscar en el montón para localizar y recuperar regiones de memoria "muerta", memoria que ya no está siendo utilizada por una aplicación. Este proceso permite que la memoria se reutilice y minimiza el riesgo de que una aplicación se quede sin memoria, lo que hace que se bloquee. La recolección de basura se realiza automáticamente por Dart VM. En DevTools, puede realizar la recolección de basura a pedido haciendo clic en el botón GC.

- **Montón**

Los objetos Dart que se asignan dinámicamente viven en una porción de memoria llamada montón. Un objeto asignado desde el montón se libera (elegible para la recolección de basura) cuando nada lo señala o cuando la aplicación finaliza. Cuando nada apunta a un objeto, se considera muerto. Cuando un objeto es señalado por otro objeto, es en vivo.

- **Aislamientos**

Dart admite la ejecución concurrente a través de aislamientos, que puede pensar en procesos sin la sobrecarga. Cada aislamiento tiene su propia memoria y código que no puede verse afectado por ningún otro aislamiento. Para obtener más información, vea [The Event Loop and Dart](https://dart.dev/articles/archive/event-loop){:target="_blank" rel="nofollow"}.

- **Pérdida de memoria**

Se produce una pérdida de memoria cuando un objeto está vivo (lo que significa que otro objeto apunta a él), pero no se está utilizando (por lo que no debería tener ninguna referencia de otros objetos). Tal objeto no se puede recolectar basura, por lo que ocupa espacio en el montón y contribuye a la fragmentación de la memoria. Las pérdidas de memoria ejercen una presión innecesaria sobre la máquina virtual y pueden ser difíciles de depurar.

- **Máquina virtual (VM)**

La máquina virtual Dart es un software que ejecuta directamente el código Dart.

## Guía DevTools

[👉 ¿Qué es DevTools?](/flutter-dart-devtools/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo instalar DevTools?](/flutter-dart-devtools-como-instalar/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el inspector de DevTools?](/flutter-dart-devtools-inspector/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la línea de tiempo de DevTools?](/flutter-dart-devtools-linea-tiempo/){: .btn .btn--inverse .btn--large} [📌 ¿Cómo usar la vista de memoria de DevTools?](/flutter-dart-devtools-vista-memoria/){: .btn .btn--light-outline .btn--large} [👉 ¿Cómo usar la vista de rendimiento de DevTools?](/flutter-dart-devtools-vista-rendimiento/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el depurador de DevTools?](/flutter-dart-devtools-depurador/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de registro de DevTools?](/flutter-dart-devtools-vista-registro/){: .btn .btn--inverse .btn--large} [👉 Guía Flutter?](/que-es-flutter-y-por-que-debes-aprenderlo/){: .btn .btn--inverse .btn--large}

## Relacionados

[🎓 Cursos en Español](/cursos-tecnologia/#flutter){: .btn .btn--warning .btn--large} [👉 Ejemplos de Aplicaciones](/flutter-aplicaciones-ejemplos/){: .btn .btn--inverse .btn--large} [⚓ Documentación en Español](https://flutter-es.io/docs/get-started/install){: .btn .btn--inverse .btn--large}

**Fuente**: Salvo que se indique lo contrario, este trabajo está licenciado bajo una [licencia internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0){:target="_blank" rel="nofollow"} y los ejemplos de código están licenciados bajo la licencia BSD. Creado por [Flutter Oficial](https://flutter.dev/docs/development/tools/devtools){:target="_blank" rel="nofollow"}
{: .notice--info}
