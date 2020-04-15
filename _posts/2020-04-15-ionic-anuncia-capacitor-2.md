---
title: "🚀 Ionic: Anuncia cambios importantes y presenta Capacitor 2.0"
description: "Hoy estoy encantado de anunciar el lanzamiento de Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código."
excerpt: "Hoy estoy encantado de anunciar el lanzamiento de Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código."
date: 2020-04-15 01:00:00 +0100
canonical_URL: https://ciberninjas.com/ionic-anuncia-capacitor-2/
permalink: /ionic-anuncia-capacitor-2/
classes: wide
published: true
categories:
  - Reflexión Programar
tags:
  - Programar
  - Realidad
header:
  teaser: /assets/images/blog/capacitor-2-img.webp
#  overlay_image: /assets/images/
#  overlay_filter: '0.2'
#  image_description: >-
#  caption: >-
#    **Créditos**: Foto de [Redd Angelo](https://unsplash.com/photos/9o8YdYGTT64) en [Unsplash](https://unsplash.com/@reddangelo)
# toc: true
# toc_label: "Contenidos"
# toc_icon: user-ninja
# toc_sticky: true
---

![🚀 Ionic: Anuncia cambios importantes y presenta Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código](/assets/images/blog/capacitor-2-img.webp "🚀 Ionic: Anuncia cambios importantes y presenta Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código")

Los desarrolladores usan Capacitor como contenedor de aplicaciones nativas para empaquetar e implementar sus aplicaciones Ionic en varias plataformas móviles y de escritorio. El capacitor les permite acceder a funciones nativas como la cámara usando el mismo código en todas las plataformas, sin tener que preocuparse por los detalles específicos de la plataforma.

Esta nueva versión actualiza Capacitor y sus plantillas de proyecto a la última versión aportando mayor seguridad, corrección de errores y nuevas características:

- Soporte Swift 5 y Xcode 11+
- Compatible con Android 10 (SDK 29) y AndroidX, lo que hace que Face Unlock e Iris Unlock estén disponibles ahora en Ionic Identity Vault.
- Corrección de errores y mejoras de usabilidad para más de 23 complementos principales.

## **¿Por qué Capacitor?**

Tradicionalmente, los desarrolladores web han recurrido a herramientas como Apache Cordova / Adobe PhoneGap para implementar sus aplicaciones web en otras plataformas. Esto funcionó bien durante muchos años, con Ionic recomendando Cordova como el método predeterminado para apuntar a las plataformas nativas de iOS y Android. Con el tiempo, nuestras opiniones cambiaron sobre cómo debería funcionar esta capa y después de explorar varias ideas, determinamos que la mejor opción era incorporar el componente de tiempo de ejecución nativo de la creación de aplicaciones internamente.

Ahora, una parte clave de la plataforma iónica, Capacitor facilita a los desarrolladores web la reutilización de sus habilidades para crear aplicaciones de calidad para todas las plataformas, al tiempo que disminuye significativamente la probabilidad de que se atasquen en problemas específicos de los nativos. Puede obtener más información sobre cómo se compara Capacitor con Cordova [en este artículo escrito por Max](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development){:target="_blank"}.

Capacitor 2.0 actualiza su tecnología subyacente para admitir las últimas versiones de lenguajes de programación y sistemas operativos que potencian todas las aplicaciones de Capacitor, permitiendo un rendimiento mejorado, seguridad y experiencias de desarrollo modernas. Específicamente, el soporte para la última tecnología de iOS y Android ya está disponible.

## **Swift 5 y Xcode 11+**

En el frente de iOS, esto significa compatibilidad con [Swift 5](https://www.raywenderlich.com/55728-what-s-new-in-swift-5){:target="_blank"} y Xcode 11+. Esto ofrece tamaños de paquetes de aplicaciones más pequeños, herramientas y características de desarrollo modernas y compatibilidad con versiones anteriores de Swift.

## Android 10 (SDK 29) y AndroidX

En Android, esto significa Android 10 (también conocido como SDK 29), con seguridad y biometría mejoradas, capacidades de audio / video y modo oscuro en todo el sistema.

Además, AndroidX, la próxima generación de la Biblioteca de soporte de Android, ahora es compatible. Ambos brindan a los desarrolladores de Android una forma estándar de proporcionar a los usuarios características más recientes en versiones anteriores de Android o una alternativa elegante cuando no están disponibles.

AndroidX reemplaza la Biblioteca de soporte, proporcionando paridad de características y compatibilidad con versiones anteriores, a la vez que brinda mejoras en la modularidad de la biblioteca, un tamaño de código más pequeño y una mejor experiencia de desarrollador.

Si usted es un consumidor de Capacitor o un [autor de complementos](https://capacitor.ionicframework.com/docs/plugins/){:target="_blank"}, simplemente necesita actualizar sus proyectos (o CLI) para acceder a estas nuevas capacidades (ver más abajo).

## **Complementos, herramientas y documentos mejorados**

Capacitor 1.0 no hubiera sido tan exitoso como lo hubiera sido sin una sólida experiencia de desarrollador que lo respalde. Con Capacitor 2.0, lo hemos revisado de pies a cabeza, lo que lleva a las actualizaciones de los complementos principales, las herramientas de CLI y la documentación.

Fundamentalmente, si va a crear experiencias de aplicaciones únicas, necesita un conjunto confiable de complementos para construir sobre ellas. Capacitor 2.0 incluye muchas actualizaciones a sus [23 complementos principales](https://capacitor.ionicframework.com/docs/apis){:target="_blank"}, desde correcciones de errores hasta nuevas funciones y mejoras de usabilidad. Muchos de estos cambios fueron impulsados por los comentarios de usted, la comunidad jónica, ¡así que gracias! Apreciamos sus esfuerzos y comentarios: nos ayuda a garantizar que nunca haya sido más fácil comenzar con Capacitor.

Hablando de increíbles esfuerzos de la comunidad, la herramienta oficial de Ionic para generar pantallas de bienvenida e íconos `cordova-res`, acaba de recibir una gran actualización: ¡Soporte para condensadores! Gracias a wannadream por [esta contribución](https://github.com/ionic-team/cordova-res/pull/85){:target="_blank"}.

```shell
npm i -g cordova-res
cordova-res --skip-config --copy
```

Con este alcance en expansión, ¡creo que tendremos que [cambiarle el nombre](https://github.com/ionic-team/cordova-res/issues/99){:target="_blank"}!

La adopción del capacitor de herramientas nativas significa que nunca ha sido tan fácil implementar características nativas más creativas. Dicho esto, los matices y los detalles pueden ser desafiantes, por lo que hemos comenzado a agregar nuevas guías de implementación a los documentos de Capacitor, incluidos [Deep Links](https://capacitor.ionicframework.com/docs/guides/deep-links/){:target="_blank"} , [Iniciar sesión con Apple](https://ionicframework.com/blog/adding-sign-in-with-apple-to-an-ionic-app/){:target="_blank"} y una guía actualizada de [notificaciones push con Firebase](https://capacitor.ionicframework.com/docs/guides/push-notifications-firebase){:target="_blank"}. Pronto habrá más: si hay contenido que cree que falta, háganoslo saber en los comentarios.

## **Inicio de sesión con Apple**

Iniciar sesión con Apple ofrece a los usuarios la posibilidad de iniciar sesión en aplicaciones y sitios web utilizando su ID de Apple. Los beneficios incluyen un enfoque en la seguridad (la autenticación automática de dos factores y la actividad del usuario no se rastrea) y los usuarios pueden comenzar a usar su aplicación de inmediato (sin pasar por las medidas de registro tradicionales).

A partir de abril de 2020, las aplicaciones que utilizan un servicio de inicio de sesión social o de terceros también deben ofrecer la opción Iniciar sesión con Apple. Esto incluye Facebook, Twitter, Linkedin y Google.

El inicio de sesión capacitor impulsado por la comunidad con el complemento de Apple ofrece un proceso de implementación fácil listo para usar. Simplemente instale el complemento, configure el proyecto nativo de iOS y luego continúe. Aprende cómo [aquí](https://ionicframework.com/blog/adding-sign-in-with-apple-to-an-ionic-app/){:target="_blank"}.

## **Desbloqueo facial con Android y desbloqueo con iris**

Para proteger los datos de su usuario, debe mantenerse actualizado con las últimas funciones de seguridad móvil. La seguridad es tradicionalmente difícil de implementar correctamente, con resultados desastrosos si se hace mal.

Con el nuevo soporte de AndroidX en Capacitor 2.0, [Ionic Identity Vault](https://ionicframework.com/enterprise/identity-vault){:target="_blank"} ahora es compatible con Face Unlock e Iris Unlock de Android. Esta actualización del sistema de gestión de identidad frontend todo en uno de Ionic trae a la plataforma Android características de autenticación facial y de iris líderes en la industria. Usando una API simple, puede agregar autenticación biométrica de primera línea a sus aplicaciones Capacitor. [Obtenga más información aquí](https://ionicframework.com/enterprise/identity-vault#demo){:target="_blank"}.

## **Próximamente: ¡CORS ya no existe!**

Hablando de escuchar los comentarios de los desarrolladores, tenemos un nuevo complemento en proceso que debería aliviar la mayor parte del dolor que sienten los desarrolladores de Ionic al acceder a datos externos y API en dispositivos móviles.

Cross-Origin Resource Sharing (CORS) es un mecanismo que los navegadores y las vistas web, como los que alimentan Capacitor, usan para proteger los datos de sus usuarios y evitar ataques que comprometerían su aplicación.

Si bien es excelente para la seguridad, comúnmente restringe las solicitudes HTTP / S, el mecanismo a través del cual los desarrolladores acceden y administran datos externos, lo que genera mucha confusión. En última instancia, esta es una distracción que le quita tiempo y enfoca mejor la creación de aplicaciones.

Pronto, presentaremos un nuevo complemento HTTP que aborda esto automáticamente en un enfoque multiplataforma. En dispositivos móviles, las solicitudes HTTP se ejecutan de forma nativa, fuera de la vista web. Esto evita de manera efectiva CORS, lo que resulta en una experiencia de desarrollador mejorada al tiempo que mantiene protocolos de seguridad adecuados (las aplicaciones nativas no están sujetas a CORS). Las solicitudes web utilizan fetch, la API moderna del navegador web para recuperar recursos externos.

El complemento HTTP está en [desarrollo activo](https://github.com/ionic-team/capacitor/pull/2495){:target="_blank"}. Nos encantaría que lo pruebe y proporcione comentarios. Mientras tanto, también puede consultar nuestra [guía de solución de problemas CORS](https://ionicframework.com/docs/troubleshooting/cors){:target="_blank"}.

## **Una actualización sobre el soporte Electron**

Después de analizar detenidamente cuáles deben ser nuestras prioridades y nuestro enfoque en 2020, hemos decidido volver a poner el soporte de Electron en beta. Después de una inversión adicional en plataformas clave que generan el mayor interés (iOS, Android y PWA), lo volveremos a visitar.

## **Fácil proceso de actualización**

Capacitor le da a los desarrolladores de Ionic un control completo de sus proyectos nativos. Entre [muchos otros beneficios](https://capacitor.ionicframework.com/docs/cordova#native-project-management){:target="_blank"}, esto hace que la actualización sea fácil y directa.

Primero, actualice Capacitor Core y la CLI:

```shell
cd your-app-folder
npm update @capacitor/cli
npm update @capacitor/core
```

A continuación, actualice cada biblioteca de condensadores en uso:

```shell
npm install @capacitor/ios@latest
npx cap sync ios

npm install @capacitor/android@latest
# Within Android Studio, click “Sync Project with Gradle Files” button

cd electron
npm install @capacitor/electron@latest
```

Luego, siga estas instrucciones de actualización que cubren los pasos manuales únicos:

- [iOS](https://capacitor.ionicframework.com/docs/ios/updating/#from-1-5-1-to-2-0-0){:target="_blank"}
- [Androide](https://capacitor.ionicframework.com/docs/android/updating/#from-1-5-1-to-2-0-0){:target="_blank"}
- [Electrón](https://capacitor.ionicframework.com/docs/electron/updating/#from-1-5-2-to-2-0-0){:target="_blank"}
- [Rompiendo cambios](https://github.com/ionic-team/capacitor/releases/tag/2.0.0){:target="_blank"}

## **Más que un número de versión**

[Capacitor 2.0](https://capacitor.ionicframework.com/){:target="_blank"} es una actualización significativa de una parte cada vez más importante de la plataforma de desarrollo de aplicaciones de Ionic.

La recepción de Capacitor nos ha impresionado mucho desde que se anunció, y las instalaciones han estado [creciendo rápidamente](https://npmcharts.com/compare/@capacitor/core){:target="_blank"}.

Con 2.0, comenzamos a hacer que Capacitor sea el valor predeterminado para todos los nuevos proyectos de Ionic React y pronto Ionic Angular, y esperamos que estemos recomendando Capacitor para todas las nuevas aplicaciones de Ionic y cada vez más para las aplicaciones empresariales.

Además, estamos dedicando más recursos internos a Capacitor, ya que se convierte en una parte clave de la oferta de Ionic. Espere ver que Capacitor reciba mucho más enfoque y atención de nuestra parte en los próximos meses.

## **Comienza a construir hoy**

Si eres nuevo en Capacitor, es fácil comenzar. Siga nuestra [guía](https://ionicframework.com/docs/intro/next){:target="_blank"} completa de la [primera aplicación](https://ionicframework.com/docs/intro/next){:target="_blank"} para crear una aplicación de galería de fotos con tecnología de la cámara del condensador, el sistema de archivos y las API de almacenamiento. Para aquellos que buscan sumergirse de inmediato, eche un vistazo al [Asistente de aplicaciones iónicas](https://ionicframework.com/start){:target="_blank"}: Genere una excelente aplicación de inicio de condensador en segundos.

**Fuente**\: [Ionic Framework: Anuncia el lanzamiento de Capacitor 2.0](https://ionicframework.com/blog/announcing-capacitor-2-0/ "Ionic Framework: Anuncia el lanzamiento de Capacitor 2.0") traducci&oacute;n al castellano por [Pablo &Aacute;lvarez Corredera](https://kutt.it/ciberninjast) bajo permiso del autor.
{: .notice--info}

### Relacionados

[📰 Ionic 4.0: Introducción Ionic para todos](https://ciberninjas.com/ionic-4-0-introduccion-ionic-para-todos)


[🚀 Ionic: ¿Qué es Ionic?](/ionic-framework/)


[🚀 Ionic: Conceptos Básicos del Framework](/ionic-framework-concepto/)
