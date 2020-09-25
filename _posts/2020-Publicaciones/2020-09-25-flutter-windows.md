---

author: rosepac
bootstrap: true
comments: false
tags:
- Flutter
thumbnail: /assets/img/blog/flutter-colores.webp
feature-img: /assets/img/blog/flutter-colores.webp
title: '▷ Se anuncia el kit de desarrollo Flutter Alpha para su uso en Windows'
description: >-
  Aplicaciones Flutter compiladas de forma nativas para Windows, lanzados complementos y una aplicación de galería en beta.
excerpt: >-
  Aplicaciones Flutter compiladas de forma nativas para Windows, lanzados complementos y una aplicación de galería en beta.
canonical_URL: https://ciberninjas.com/flutter-windows-alpha/
permalink: /flutter-windows-alpha/
date: 2020-09-25 20:12:32
last_modified_at: 
published: true

---

Nuestra misión es proporcionar a los desarrolladores un framework de código abierto y de alta productividad para crear aplicaciones nativas hermosas en cualquier plataforma.

Hasta ahora, hemos enviado soporte de calidad de producción para Android e iOS, con ocho versiones estables y más de 100,000 aplicaciones enviadas solo a Google Play Store.

Continuamos ampliando nuestro enfoque para incluir otras plataformas, incluidas web, macOS y Linux. Hoy, nos complace anunciar un objetivo adicional para Flutter con la versión alfa del soporte de Flutter para Windows.

Windows sigue siendo una opción popular para dispositivos de escritorio y portátiles, y Microsoft informa más de mil millones de dispositivos activos que ejecutan Windows 10.

Nuestras propias estadísticas muestran que más de la mitad de todos los desarrolladores de Flutter usan Windows, por lo que es un objetivo natural para Flutter.

El soporte de escritorio nativo abre una variedad de posibilidades interesantes para Flutter, que incluyen herramientas mejoradas para desarrolladores, menor fricción para los nuevos usuarios y, por supuesto, aplicaciones que pueden llegar a cualquier dispositivo que un usuario pueda tener desde una única base de código.

## **Agregar Flutter a Windows**

Como se describe en nuestra descripción arquitectónica, Flutter es un conjunto de herramientas de interfaz de usuario multiplataforma que está diseñado para permitir la reutilización de código en sistemas operativos como iOS y Android, al tiempo que permite que las aplicaciones interactúen directamente con los servicios de la plataforma subyacente.

El objetivo es permitir que los desarrolladores entreguen aplicaciones de alto rendimiento que se sientan naturales en diferentes plataformas, adoptando las diferencias donde existen mientras comparten la mayor cantidad de código posible.

En el núcleo de Flutter está el motor, que admite las primitivas necesarias para admitir todas las aplicaciones de Flutter.

El motor es responsable de rasterizar escenas compuestas cada vez que se necesita pintar un nuevo framework. Proporciona la implementación de bajo nivel de la API central de Flutter, que incluye gráficos, diseño de texto, E / S de archivos y redes, soporte de accesibilidad, arquitectura de complementos y una cadena de herramientas de compilación y tiempo de ejecución de Dart.

Cada nueva plataforma que agregamos a Flutter expande el framework principal con nuevos servicios para permitirle brillar en esa plataforma.

Comenzamos con Android e iOS con Material Design, así como una interfaz de usuario centrada en dispositivos móviles y basada en el tacto que está diseñada para tener píxeles perfectos en ambas plataformas móviles.

Agregar soporte para factores de forma de escritorio con web, Windows, macOS y Linux brinda un conjunto completamente nuevo de servicios, que incluye un soporte sólido para teclados, mouse, ruedas de mouse y controladores en el lado de entrada, así como widgets que se adaptan o incluso funcionan mejor en los tamaños de pantalla más grandes que vienen con las aplicaciones web y de escritorio.

Además, cada nueva plataforma no solo influye en el framework y el motor de Flutter, sino también en muchas otras cosas:

- **Actualizaciones de la cadena de herramientas**: Agregar un nuevo objetivo a las herramientas CLI e IDE (en este caso, Windows)
- **Shell**: Soporte para manejar la entrada de Windows a través de WM_*mensajes y salida a través de ANGLE , que usa Skia para renderizar a velocidad nativa en una superficie DirectX subyacente
- **Ejecutor**: Cada proyecto obtiene una aplicación de shell para los objetivos admitidos. Para Windows, es un programa Win32 / C ++ que carga su código Flutter y lo ejecuta en tiempo de ejecución. Es un buen lugar para agregar código nativo a su aplicación si lo necesita.
- **Complementos**: Un complemento es una mezcla de código Dart y código nativo para cada una de las plataformas que admite el complemento. Ese código nativo debe agregarse para cada complemento que se compile en su aplicación Flutter en Windows.

Esta versión alfa ofrece una base sólida que estabilizaremos en los próximos meses. Con soporte para Windows 7 y superior, esperamos que esto les dé a los desarrolladores aventureros algo con lo que empezar.

## **Explorando algunas aplicaciones de Flutter en Windows**

Si desea utilizar la aplicación Flokk en su máquina Windows, puede [descargar la última versión en GitHub](https://github.com/gskinnerTeam/Flokk/releases){:target="_blank" rel="nofollow,noreferrer"}.

Además, [la aplicación Flutter Gallery](https://gallery.flutter.dev/){:target="_blank" rel="nofollow,noreferrer"}, la aplicación de escaparate para todo lo relacionado con Flutter, se reescribió por completo recientemente para agregar soporte para factores de forma de escritorio. Esto nos permitió comprobar que funciona bien en la web , así como en Windows, macOS y Linux.

Muchos estudios en la Galería demuestran ideas para diferentes estilos de aplicaciones que recomendamos al diseñar su propia aplicación de Windows con Flutter. Cuando encuentra algo que le gusta, [el código está disponible en GitHub](https://github.com/flutter/gallery){:target="_blank" rel="nofollow,noreferrer"}.

## **Empezando con Flutter para Windows**

Comience instalando el SDK de Flutter de acuerdo con [las instrucciones de instalación de Flutter en Windows](https://flutter.dev/docs/get-started/install/windows){:target="_blank" rel="nofollow,noreferrer"}. Para apuntar al escritorio de Windows, primero debe [instalar las herramientas descritas](https://flutter.dev/desktop#additional-windows-requirements){:target="_blank" rel="nofollow,noreferrer"} en los siguientes documentos.

De forma predeterminada, Flutter asume que está creando software de producción y no está configurado para desarrollar aplicaciones de Windows. Sin embargo, eso se soluciona fácilmente desde la línea de comando:

{% highlight js %}
$ flutter channel dev 
$ flutter upgrade 
$ flutter config --enable-windows-desktop
{% endhighlight %}

El primer comando configura Flutter para usar el canal "dev" de calidad experimental (en lugar del canal "estable", que es el predeterminado). Esto le permite utilizar el soporte de la plataforma que todavía está en alfa, como Windows. El segundo comando extrae los últimos bits de ese canal. El tercer comando habilita el desarrollo de aplicaciones de Windows en su PC.

Una vez que lo ha configurado, cada vez que crea una nueva aplicación Flutter, utilizando el soporte de extensión para Android Studio o Visual Studio Code , o desde la línea de comando, crea una subcarpeta de Windows.

Finalmente, una vez que haya creado su aplicación, compilarla crea un archivo EXE nativo en modo de lanzamiento, así como las DLL de soporte necesarias.

En ese momento, si desea experimentar con la ejecución de su nueva aplicación de Windows en cualquier máquina con Windows 10, incluso aquellas que no tienen Flutter instalado, puede seguir los pasos para comprimir los archivos necesarios y listo.

## **Complementos de Flutter para Windows**

Aunque acabamos de llegar a la versión alfa, la comunidad de Flutter ya ha estado trabajando en complementos para Windows. A continuación, presentamos algunos:

- [url_launcher](https://pub.dev/packages/url_launcher){:target="_blank" rel="nofollow,noreferrer"}: Lanza URL en el navegador desde tu aplicación.
- [path_provider](https://pub.dev/packages/path_provider){:target="_blank" rel="nofollow,noreferrer"}: Encuentra la ruta a direcciones especiales en la máquina del usuario como Documents o temp.
- [shared_preferences](https://pub.dev/packages/shared_preferences){:target="_blank" rel="nofollow,noreferrer"}: Mantenga las preferencias del usuario serializadas en el disco entre sesiones de su aplicación.
- [biometric_storage](https://pub.dev/packages/biometric_storage){:target="_blank" rel="nofollow,noreferrer"}: Almacenamiento cifrado por biometría.
- [flutter_audio_desktop](https://pub.dev/packages/flutter_audio_desktop){:target="_blank" rel="nofollow,noreferrer"}: Reproduce audio desde tus aplicaciones de escritorio.

El beneficio de usar estos complementos es que la mayoría de ellos también son compatibles con otras plataformas Flutter, lo que le permite orientar sus aplicaciones a Android, iOS, web, etc., así como a Windows.

Además, mientras que aproximadamente un tercio de [los paquetes disponibles en pub.dev](http://pub.dev/){:target="_blank" rel="nofollow,noreferrer"} (el administrador de paquetes de Dart y Flutter) son complementos con código específico de la plataforma, la mayoría no lo son.

Por ejemplo, muchos de los paquetes más utilizados y de la más alta calidad forman parte del programa Flutter Favorite y la mayoría de ellos funcionan en Windows. Si desea ver la lista completa de paquetes que se ejecutan en Windows, puede [ejecutar esta consulta en pub.dev](https://pub.dev/flutter/packages?platform=windows){:target="_blank" rel="nofollow,noreferrer"}.

## **Interoperabilidad de Flutter con Windows**

Si desea crear sus propios complementos para Windows, puede hacerlo. Una vez que esté en el canal de desarrollo y tenga Windows habilitado para su máquina, puede comenzar con el siguiente comando:

{% highlight js %}
$ flutter create --template plugin --platforms windows hello_plugin
{% endhighlight %}

En ese momento, podrá agregar su código de Flutter a la subcarpeta `libsub` y su código de Windows a la subcarpeta `windows` de su proyecto. Se comunicará entre las dos pilas mediante los canales de plataforma , que esencialmente es un mensaje que pasa entre su código Dart y C ++. Para ver un ejemplo bien elaborado de esto, consulte [la implementación de url_launcher](https://github.com/flutter/plugins/tree/master/packages/url_launcher/url_launcher_windows){:target="_blank" rel="nofollow,noreferrer"}.

Si quieres más recursos y conocer más paso a paso, como implementar Flutter sobre windows, no dejes de visitar [la publicación original](https://medium.com/flutter/announcing-flutter-windows-alpha-33982cd0f433 "Blog oficial del kit de desarrollo Flutter"){:target="_blank" rel="nofollow,noreferrer"} de este contenido.

### **Relacionados** <!-- omit in toc -->

[☕ Las Mejores Tazas y Productos de Flutter](https://ciberninjas.redbubble.com "Las Mejores Tazas y Productos de Flutter"){:target="_blank" rel="nofollow,noreferrer"}

[🥇 ▷ ¿Qué es el kit de desarrollo multiplataforma Flutter?](https://ciberninjas.com/que-es-flutter-y-por-que-debes-aprenderlo/ "¿Qué es el kit de desarrollo multiplataforma Flutter?")

[▷ Los Mejores Wallpaper de Flutter 2020](https://ciberninjas.com/wallpaper-flutter/ "Los Mejores Wallpaper de Flutter 2020")

[¿Qué puedo crear con Flutter? La mejor lista de colecciones](https://ciberninjas.com/flutter-aplicaciones-ejemplos/ "¿Qué puedo crear con Flutter? La mejor lista de colecciones")

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog oficial del kit de desarrollo Flutter](https://medium.com/flutter/announcing-flutter-windows-alpha-33982cd0f433 "Blog oficial del kit de desarrollo Flutter"){:target="_blank" rel="nofollow,noreferrer"}

![Se anuncia el kit de desarrollo Flutter Alpha para su uso en Windows](/assets/img/blog/flutter-colores.webp "Se anuncia el kit de desarrollo Flutter Alpha para su uso en Windows")