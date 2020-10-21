---

title: '🚀 ¿Cómo instalar Dart DevTools para Flutter? Aprende a instalar la nueva herramienta de desarrollo'
excerpt: '👩‍🚀 Instalando DevTools para Dart y Flutter creada por Google.'
description: '👩‍🚀 Instalando DevTools para Dart y Flutter creada por Google.'
published: true
author: rosepac
bootstrap: true
comments: false
date: 2020-01-31 12:05:33
last_modified_at: 
thumbnail: https://flutter.dev/assets/tools/vs-code/vscode_install_prompt-1394c21ae2249e60eade893fb259aed7b2a64e293919cd33d98cbf2cdbc11272.png
feature-img: https://flutter.dev/assets/tools/vs-code/vscode_install_prompt-1394c21ae2249e60eade893fb259aed7b2a64e293919cd33d98cbf2cdbc11272.png
tags:
- SDK Multiplataforma
- Herramientas
- Flutter
- Dart
permalink: /flutter-dart-devtools-como-instalar/
canonical_URL: https://ciberninjas.com/flutter-dart-devtools-como-instalar/

---

## Cómo instalar DevTools en Android Studio e IntelliJ

## Instale el complemento Flutter

Instale el complemento Flutter si aún no lo tiene instalado. Esto se puede hacer usando la página normal de **complementos** en la configuración de IntelliJ y Android Studio. Una vez que la página está abierta, puede buscar en el mercado el complemento Flutter.

## Inicie una aplicación para depurar

Para abrir DevTools, primero debe ejecutar una aplicación Flutter. Esto se puede lograr abriendo un proyecto Flutter, asegurándose de que tiene un dispositivo conectado y haciendo clic en los botones de la barra de herramientas **Ejecutar** o **Depurar** .

## Inicie DevTools desde la barra de herramientas / menú

Una vez que se está ejecutando una aplicación, puede iniciar DevTools utilizando uno de los siguientes:

- Seleccione la acción **Abrir** barra de herramientas **DevTools** en la vista Ejecutar.
- Seleccione la acción **Abrir** barra de herramientas **DevTools** en la vista Depuración. (si se está depurando)
- Seleccione la acción **Abrir DevTools** del menú **Más acciones** en la vista del Inspector de aleteo.

![captura de pantalla del botón Abrir DevTools](https://flutter.dev/assets/tools/devtools/android_studio_open_devtools-d94a8fb398b655e3383ffd99d1443a9b7e2a76b927d4cb9e7a1602365f2d4eb9.png)

## Lanzar DevTools desde una acción

También puede abrir DevTools desde una acción IntelliJ. Abra el cuadro de diálogo **Buscar acción ...** (en una Mac, presione `Command+Shift+A)`y busque la acción **Abrir DevTools** . Cuando selecciona esa acción, DevTools se instala (si aún no lo está), el servidor DevTools se inicia y se abre una instancia del navegador señalando a la aplicación DevTools.

Cuando se abre con una acción IntelliJ, DevTools no está conectado a una aplicación Flutter. Deberá proporcionar un puerto de protocolo de servicio para una aplicación que se esté ejecutando actualmente. Puede hacer esto utilizando el cuadro de diálogo **Conectar en** línea **a una aplicación en ejecución** .

## Cómo instalar DevTools en Visual Studio Code

## Instale las extensiones de Visual Studio Code

Para usar DevTools de VS Code, necesita la [extensión Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code){:target="_blank" rel="nofollow,noreferrer"} y si está depurando aplicaciones de Flutter, también debe instalar la [extensión Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter){:target="_blank" rel="nofollow,noreferrer"}.

## Inicie una aplicación para depurar

Inicie una sesión de depuración para su aplicación abriendo la carpeta raíz de su proyecto (la que contiene `pubspec.yaml`) en VS Code y haciendo clic en **Debug> Start Debugging** ( `F5`).

## Lanzar DevTools

Una vez que la sesión de depuración está activa y la aplicación se ha iniciado, el siguiente comando **Dart: Open DevTools** estará disponible en la paleta de comandos VS Code:

![Captura de pantalla que muestra el comando Abrir DevTools](https://flutter.dev/assets/tools/vs-code/vscode_command-baa743a198f33f26d351271426290bb08bcb87b94a6db26eb720bcacae985037.png)

La primera vez que ejecute esto (y posteriormente cuando se actualice el paquete DevTools), se le solicitará que active o actualice DevTools.

![Captura de pantalla que muestra el comando Active DevTools](https://flutter.dev/assets/tools/vs-code/vscode_install_prompt-1394c21ae2249e60eade893fb259aed7b2a64e293919cd33d98cbf2cdbc11272.png)

Al hacer clic en el botón **Activar / Actualizar** debe usar `pub global generate` para activar el paquete DevTools. A continuación, DevTools se inicia en el navegador y se conecta automáticamente a su sesión de depuración.

![Captura de pantalla que muestra DevTools en un navegador](https://flutter.dev/assets/tools/vs-code/vscode_show_in_browser-4848ba01b78de1138104589c726b1dd8a845364356b9d50dffdffd36dbf20887.png)

Mientras las DevTools estén activas, las verá en la barra de estado de VS Code. Si ha cerrado la pestaña del navegador, puede hacer clic en la barra de estado para volver a iniciar su navegador, siempre y cuando todavía haya disponible una sesión de depuración Dart / Flutter adecuada.

![Captura de pantalla que muestra DevTools en la barra de estado del código VS](https://flutter.dev/assets/tools/vs-code/vscode_status_bar-0101e66f4b7c66d29756b516cda9446a3d27fc021f4773c44b5c6787087420d4.png)

## Cómo instalar DevTools desde la línea de Comandos

## Instalar DevTools

Si tiene `pub` como su ruta principal, puedes ejecutar:

```
pub global activate devtools
```

Si tienes `flutter` como su ruta principal, puede ejecutar:

```
flutter pub global activate devtools
```

Ese comando instala (o actualiza) DevTools en su máquina.

## Inicie el servidor de aplicaciones DevTools

Luego, ejecute el servidor web local, que sirve a la aplicación DevTools. Para hacer eso, ejecute uno de los siguientes dos comandos:

```
pub global run devtools   # Si tienes `pub` como ruta principal.
```

O

```
flutter pub global run devtools   # Si tienes `flutter` como ruta principal.
```

En la línea de comando, debería ver una salida similar a:

```
Serving DevTools at http://127.0.0.1.9100
```

## Inicie una aplicación para depurar

A continuación, inicie una aplicación para conectarse. Puede ser una aplicación Flutter o una aplicación de línea de comandos Dart. El siguiente comando utiliza una aplicación Flutter:

```
cd path/to/flutter/app
flutter run
```

Necesitas tener un dispositivo conectado, o un simulador abierto, para comprobar mediante `flutter run` que todo esta funcionando. Una vez que se inicia la aplicación, verá un mensaje en su terminal que se ve así:

```
An Observatory debugger and profiler on iPhone X is available
at: http://127.0.0.1:50976/Swm0bjIe0ks=/
```

Tenga en cuenta esta URL, ya que la usará para conectar su aplicación a DevTools.

## Abra DevTools y conéctese a la aplicación de destino

Una vez que está configurado, usar DevTools es tan simple como abrir una ventana del navegador Chrome y navegar a `http://localhost:9100`.

Una vez que se abre DevTools, debería ver un diálogo de conexión:

![Captura de pantalla de una vista de registro](https://flutter.dev/assets/tools/devtools/connect_dialog-9765dd1badb8901096edbcdd7f74997d2b887ef25c43925c6c0ebb7cca987090.png)

Pegue la URL que obtuvo al ejecutar su aplicación (en este ejemplo `http://127.0.0.1:50976/Swm0bjIe0ks=/`) en el cuadro de diálogo de conexión para conectar su aplicación a DevTools.

Esta URL contiene un token de seguridad, por lo que será diferente para cada ejecución de su aplicación. Esto significa que si detiene su aplicación y la vuelve a ejecutar, debe conectarse a DevTools a través de una nueva URL.

## Guía DevTools

[👉 ¿Qué es DevTools?](/flutter-dart-devtools/){: .btn .btn--inverse .btn--large} [📌 ¿Cómo instalar DevTools?](/flutter-dart-devtools-como-instalar/){: .btn .btn--light-outline .btn--large} [👉 ¿Cómo usar el inspector de DevTools?](/flutter-dart-devtools-inspector/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la línea de tiempo de DevTools?](/flutter-dart-devtools-linea-tiempo/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de memoria de DevTools?](/flutter-dart-devtools-vista-memoria/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de rendimiento de DevTools?](/flutter-dart-devtools-vista-rendimiento/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar el depurador de DevTools?](/flutter-dart-devtools-depurador/){: .btn .btn--inverse .btn--large} [👉 ¿Cómo usar la vista de registro de DevTools?](/flutter-dart-devtools-vista-registro/){: .btn .btn--inverse .btn--large} [👉 Guía Flutter?](/que-es-flutter-y-por-que-debes-aprenderlo/){: .btn .btn--inverse .btn--large}

## Relacionados

[🎓 Cursos en Español](/cursos-tecnologia/#flutter){: .btn .btn--warning .btn--large} [👉 Ejemplos de Aplicaciones](/flutter-aplicaciones-ejemplos/){: .btn .btn--inverse .btn--large} [⚓ Documentación en Español](https://flutter-es.io/docs/get-started/install){: .btn .btn--inverse .btn--large}

**Fuente**: Salvo que se indique lo contrario, este trabajo está licenciado bajo una [licencia internacional Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0){:target="_blank" rel="nofollow,noreferrer"} y los ejemplos de código están licenciados bajo la licencia BSD. Creado por [Flutter Oficial](https://flutter.dev/docs/development/tools/devtools){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}
