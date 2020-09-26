---

author: rosepac
bootstrap: true
comments: false
tags:
- Sistema Operativo
- Android
thumbnail: /assets/img/blog/11-android-11-desarrolladores.webp
feature-img: /assets/img/blog/11-android-11-desarrolladores.webp
title: '🔩 ▷ Webview en Beta: Herramienta de depuración para desarrolladores Android'
description: >-
  Publicado por el equipo de WebView Desde 2014, Android WebView ha allanando el camino para convertirse en un componente del sistema operativo Android actualizable.
excerpt: >-
  Publicado por el equipo de WebView Desde 2014, Android WebView ha allanando el camino para convertirse en un componente del sistema operativo Android actualizable.
canonical_URL: https://ciberninjas.com/herramienta-desarrollador-android-webview/
permalink: /herramienta-desarrollador-android-webview/
date: 2020-05-11 20:32:32
last_modified_at: 
published: true

---

Desde 2014, Android WebView ha allanado el camino como un componente del sistema actualizable, ofreciendo mejoras de estabilidad y rendimiento, características modernas de la plataforma web y parches de seguridad para aplicaciones y usuarios de Android.

Sin embargo, las actualizaciones pueden ser un arma de doble filo: por mucho que nos esforcemos por la estabilidad y la compatibilidad con versiones anteriores, ocasionalmente se producen nuevos bloqueos y cambios importantes.

Para resolver estos problemas más rápido, hoy anunciamos WebView DevTools, un nuevo conjunto de herramientas de depuración en el dispositivo para diagnosticar fallas causadas por WebView y el mal comportamiento de las características de la plataforma web.

> 🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

Para su comodidad, WebView DevTools viene incluido como parte de WebView. La forma más fácil de iniciar WebView Devtools es [probar WebView Beta](https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/docs/prerelease.md){:target="_blank" rel="nofollow,noreferrer"}.

El programa beta de WebView es una forma para que los desarrolladores de aplicaciones obtengan WebView varias semanas antes de llegar a los usuarios, para un tiempo de espera adicional para [informar errores de compatibilidad a nuestro equipo](https://bugs.chromium.org/p/chromium/issues/entry?template=Webview+Bugs&labels=Via-WebView-Blog){:target="_blank" rel="nofollow,noreferrer"}.

A partir de la versión de hoy (M83), WebView Beta incluye un icono de iniciador para WebView DevTools. Simplemente busque el ícono de engranaje de WebView azul y gris para comenzar a depurar WebView en su aplicación.

![Inspeccionar un bloqueo en WebView DevTools](https://1.bp.blogspot.com/-Wu-KqYgso9Q/XpoX_vC3lkI/AAAAAAAAO4U/r95fkVJJam0gxx75FQmZzjrwKDib7g1ggCLcBGAsYHQ/s1600/AD_Webview%2Bimage%2B1.gif "Inspeccionar un bloqueo en WebView DevTools")

Ningún software está libre de errores y la carga de contenido web puede ser un desafío, por lo que no sorprende que los bloqueos de WebView sean un problema para las aplicaciones. Peor aún, estos bloqueos son difíciles de depurar porque los rastros de la pila Java y C ++ de WebView están ofuscados (para minimizar el tamaño del APK para los usuarios de Android).

Para ayudar a que estos bloqueos sean más procesables, estamos exponiendo el acceso de primera clase al reportero de fallos incorporado de WebView. Simplemente abra WebView DevTools, toque "bloqueos" y verá una lista de los bloqueos recientes causados por WebView de las aplicaciones en su dispositivo. 

Puedes usar esta herramienta para ver si el informe de bloqueo se ha cargado en nuestros servidores, cargarlo de manera forzada si es necesario y, posteriormente, presentar un error. Esto garantiza que nuestro equipo tenga toda la información que necesitamos para resolver rápidamente estos bloqueos y garantizar una experiencia de usuario más fluida en su aplicación.

![Usar banderas para resaltar el uso de WebView en aplicaciones de Android](https://1.bp.blogspot.com/-VSv9mpaVrrc/XpoQ4KbaW_I/AAAAAAAAO4I/XK8Xfii9McMlwJe27_4oAGCmXFzEGQBPQCLcBGAsYHQ/s1600/revised-flags.gif "Usar banderas para resaltar el uso de WebView en aplicaciones de Android")

Sin embargo, no todos los errores causan bloqueos. Un puñado de versiones anteriores de WebView han roto las aplicaciones de Android debido a los cambios de comportamiento causados por las nuevas funciones.

Si bien la política de nuestro equipo es revertir las funciones que rompen la compatibilidad, el equipo de Chrome lanza varias funciones para WebView en cada versión, y a menudo necesitamos tiempo para identificar la función infractora. WebView DevTools también puede ayudar aquí.

Inspirado por la herramienta ```chrome://flags``` de Google Chrome, que permite la prueba de compatibilidad con las funciones de la plataforma web, ofrecemos a los desarrolladores de aplicaciones controles similares para las funciones experimentales.

Para comenzar, abra WebView DevTools, toque "flags", habilite o deshabilite las funciones disponibles, luego cierre y reinicie la aplicación basada en WebView que está probando. El uso de WebView DevTools nos ayudará a trabajar juntos para identificar al culpable y poder revertirlo.

Esperamos que encuentre útiles las herramientas de desarrollo de WebView para informar fallas y realizar pruebas con las nuevas características de WebView. Instale WebView Beta hoy para comenzar a usar WebView DevTools y consulte [la guía del usuario](https://chromium.googlesource.com/chromium/src/+/HEAD/android_webview/docs/developer-ui.md){:target="_blank" rel="nofollow,noreferrer"} para obtener más sugerencias y trucos.


### **Relacionados** <!-- omit in toc -->

[📱 ▷ Vista previa de Android 11 para desarrolladores](/android-11-para-desarrolladores/)

[▷ Cómo mantener tu privacidad en un teléfono Android 📲](/como-mantener-tu-privacidad-usando-android/)

[📱 andOTP Aplicación de Doble Factor de Código Abierto para Android](/andotp-aplicaci%C3%B3n-de-doble-factor-de-c%C3%B3digo-abierto-para-android/)

[🚀 ▷ Lanzamiento de las extensiones de Firebase para Kotlin](/firebase-extensiones-kotlin/)

[▷ Open GApps lanza paquetes de aplicaciones de Google flasheables](/open-gapps-aplicaciones-google-flasheables/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}