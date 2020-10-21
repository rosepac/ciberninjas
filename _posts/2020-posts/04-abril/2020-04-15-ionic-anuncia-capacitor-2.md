---
title: "🚀 Ionic: Anuncia cambios importantes y presenta Capacitor 2.0"
description: "Hoy estoy encantado de anunciar el lanzamiento de Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código."
excerpt: "Hoy estoy encantado de anunciar el lanzamiento de Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código."
date: 2020-04-15 01:00:00 +0100
canonical_URL: https://ciberninjas.com/ionic-anuncia-capacitor-2/
permalink: /ionic-anuncia-capacitor-2/

published: true
tags:
  - Frameworks Multiplataforma
  - Ionic
thumbnail: /assets/img/blog/capacitor-2-img.webp
feature-img: /assets/img/blog/capacitor-2-img.webp
---

![🚀 Ionic: Anuncia cambios importantes y presenta Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código](/assets/img/blog/capacitor-2-img.webp "🚀 Ionic: Anuncia cambios importantes y presenta Capacitor 2.0. El tiempo de ejecución nativo de Ionic, que va a facilitar la creación de aplicaciones web que se ejecutan en Android, iOS y sobre la web como aplicaciones web progresivas, todo con una única base de código")

Los desarrolladores usan Capacitor como contenedor de aplicaciones nativas para empaquetar e implementar sus aplicaciones Ionic en varias plataformas móviles y de escritorio. Capacitor, te permite acceder a funciones nativas como la cámara usando el mismo código en todas las plataformas, sin tener que preocuparte por los detalles más específicos de cada plataforma.

Esta nueva versión actualiza Capacitor y sus plantillas de proyecto a la última versión aportando mayor seguridad, corrección de errores y las siguientes nuevas características:

- Soporte Swift 5 y Xcode 11+.
- Compatible con Android 10 (SDK 29) y AndroidX, lo que hace que Face Unlock e Iris Unlock estén disponibles ahora en Ionic Identity Vault.
- Corrección de errores y mejoras de usabilidad para más de 23 complementos principales.

<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/ionic-anuncia-capacitor-2/#por-qué-capacitor"><strong>¿Por qué Capacitor?</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#swift-5-y-xcode-11"><strong>Swift 5 y XCode 11</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#android-10-sdk-29-y-androidx"><strong>Android 10 SDK 29 y AndroidX</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#complementos-herramientas-y-documentos-mejorados"><strong>Complementos, Herramientas y Documentos Mejorados</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#inicio-de-sesión-con-apple"><strong>Inicio de Sesión con Apple</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#desbloqueo-facial-con-android-y-desbloqueo-con-el-iris"><strong>Desbloqueo Facial con Android y Desbloque con el Iris</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#próximamente-suprimir-cors"><strong>Próximamente, ¡Suprimir CORS!</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#actualización-sobre-el-soporte-de-electron"><strong>Actualización sobre el Soporte de Electrón</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#fácil-proceso-de-actualización"><strong>Fácil Proceso de Actualización</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#más-que-un-número-de-versión"><strong>Más que un Número de Versión</strong></a></li>
    <li><a href="/ionic-anuncia-capacitor-2/#comienza-a-construir-hoy"><strong>Comienza a Construir Hoy</strong></a></li>
  </ol>
</nav>
</details>

> 🔥 Quizás te interese: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/ionic-anuncia-capacitor-2/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [recomendaciones Ciberninjas](https://kutt.it/cibercursos-recomienda)
{: .notice--danger}

## **¿Por qué Capacitor?**

Tradicionalmente, los desarrolladores web han recurrido a herramientas como Apache Cordova / Adobe PhoneGap para implementar sus aplicaciones web en otras plataformas. Esto funcionó bien durante muchos años, con Ionic recomendando Cordova como el método predeterminado para apuntar a las plataformas nativas de iOS y Android.

Con el tiempo, nuestras opiniones cambiaron sobre cómo debería funcionar esta capa y después de explorar varias ideas, determinamos que la mejor opción era incorporar el componente de tiempo de ejecución nativo en la creación de las aplicaciones.

Ahora, una parte clave de la plataforma de Ionic, es Capacitor. Capacitor será el encargado de facilitar a los desarrolladores web la reutilización de sus habilidades para crear aplicaciones de calidad ante todas las plataformas, al mismo tiempo que disminuye significativamente la probabilidad de que ocurran problemas específicos derivados de la "compatibilidad" con lo que serían aplicaciones nativas. Puedes obtener más información sobre cómo se compara Capacitor con Cordova [en este artículo escrito por Max](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development){:target="_blank" rel="nofollow,noreferrer"}.

Capacitor 2.0 actualiza su tecnología subyacente para admitir las últimas versiones de lenguajes de programación y sistemas operativos, permitiendo un rendimiento mejorado, seguridad y experiencias de desarrollo más modernas. Específicamente, el soporte para la última tecnología de Android e iOS ya está disponible.

## **Swift 5 y Xcode 11+**

Respecto a iOS, la compatibilidad de Ionic junto a [Swift 5](https://www.raywenderlich.com/55728-what-s-new-in-swift-5){:target="_blank" rel="nofollow,noreferrer"} y Xcode 11+. Esto nos ofrece paquetes de aplicaciones más pequeños, herramientas y características de desarrollo modernas y compatibilidad con versiones anteriores de Swift.

## Android 10 (SDK 29) y AndroidX

En Android, el uso de Capacitor significa mejoras en la seguridad y la biometría, las capacidades del uso del audio y video y un modo oscuro para todo el sistema.

Además, AndroidX (la próxima generación de la Biblioteca de soporte de Android) ya es compatible.

AndroidX reemplaza la Biblioteca de soporte de Android, proporcionando paridad de características y compatibilidad con versiones anteriores, a la vez que brinda mejoras en la modularidad de la biblioteca, un tamaño de código más pequeño y una mejor experiencia de desarrollador.

Si usted es un consumidor de Capacitor o un [autor de complementos](https://capacitor.ionicframework.com/docs/plugins/){:target="_blank" rel="nofollow,noreferrer"}, simplemente necesita actualizar sus proyectos (o CLI) para acceder a estas nuevas características (ver más abajo).

## **Complementos, herramientas y documentos mejorados**

Capacitor 1.0 no hubiera sido tan exitoso como lo ha sido sin la experiencia de los desarrolladore que los respaldan. Con Capacitor 2.0, nos hemos centrado más en revisarlo por completo de pies a cabeza, lo que lleva a las actualizaciones de los complementos principales, las herramientas de CLI y la documentación.

Fundamentalmente, si deseas crear aplicaciones que resulten en experiencias únicas, necesitas un conjunto de complementos y herramientas confiables para construirlas. Capacitor 2.0, incluye muchas actualizaciones de sus [23 complementos principales](https://capacitor.ionicframework.com/docs/apis){:target="_blank" rel="nofollow,noreferrer"}, desde correcciones de errores hasta nuevas funciones y mejoras de usabilidad. Muchos de estos cambios fueron impulsados por los comentarios de la comunidad.

Hablando de los increíbles esfuerzos de la comunidad, la herramienta oficial de Ionic para generar pantallas de bienvenida e íconos `cordova-res`, acaba de recibir una gran actualización: ¡Soporte para condensadores! Gracias a wannadream por [esta contribución](https://github.com/ionic-team/cordova-res/pull/85){:target="_blank" rel="nofollow,noreferrer"}.

```shell
npm i -g cordova-res
cordova-res --skip-config --copy
```

Con este gran expansión, ¡creo que tendremos que [cambiarle el nombre](https://github.com/ionic-team/cordova-res/issues/99){:target="_blank" rel="nofollow,noreferrer"}!

La adopción de las herramientas nativas de Capacitor significa que nunca ha sido tan fácil implementar características nativas de forma creativa. Dicho esto, los matices y los detalles pueden ser complicados, por lo que hemos comenzado a agregar nuevas guías de implementación a los documentos de Capacitor, incluidos [Deep Links](https://capacitor.ionicframework.com/docs/guides/deep-links/){:target="_blank" rel="nofollow,noreferrer"} , [Inicio de sesión desde Apple](https://ionicframework.com/blog/adding-sign-in-with-apple-to-an-ionic-app/){:target="_blank" rel="nofollow,noreferrer"} y una guía actualizada de [notificaciones push con Firebase](https://capacitor.ionicframework.com/docs/guides/push-notifications-firebase){:target="_blank" rel="nofollow,noreferrer"}. Pronto esperamos ir creando más nuevas guías.

## **Inicio de sesión con Apple**

Iniciar sesión con Apple ofrece a los usuarios la posibilidad de iniciar sesión en aplicaciones y sitios web utilizando su ID de Apple. Los beneficios incluyen un enfoque de seguridad (la autenticación automática de dos factores y la actividad del usuario no se rastrea) y los usuarios pueden comenzar a usar su aplicación de inmediato (sin pasar por las medidas de registro tradicionales).

A partir de abril del 2020, las aplicaciones que utilizan un servicio de inicio de sesión social o de terceros también deben ofrecer la opción Iniciar sesión con Apple. Esto incluye Facebook, Twitter, Linkedin y Google.

El inicio de sesión creador con Capacitor impulsado por la comunidad con el complemento de Apple ofrece un proceso de implementación fácil  y listo para usar. Simplemente instale el complemento, configure el proyecto nativo de iOS y luego continúe. Aprende cómo hacerlo desde [aquí](https://ionicframework.com/blog/adding-sign-in-with-apple-to-an-ionic-app/){:target="_blank" rel="nofollow,noreferrer"}.

## **Desbloqueo facial con Android y desbloqueo con el iris**

Para proteger los datos de tu usuario, debes mantenerte actualizado con las últimas funciones de seguridad móviles. La seguridad es tradicionalmente difícil de implementar correctamente, con resultados desastrosos si se hace mal.

Con el nuevo soporte de AndroidX en Capacitor 2.0, [Ionic Identity Vault](https://ionicframework.com/enterprise/identity-vault){:target="_blank" rel="nofollow,noreferrer"} ahora es compatible con Face Unlock e Iris Unlock de Android. Esta actualización del sistema de gestión de identidad frontend todo en uno de Ionic trae a la plataforma Android características de autenticación facial y de iris líderes en la industria. Usando una API simple, puede agregar autenticación biométrica de primera línea a sus aplicaciones Capacitor. [Obtenga más información aquí](https://ionicframework.com/enterprise/identity-vault#demo){:target="_blank" rel="nofollow,noreferrer"}.

## **Próximamente: ¡Suprimir CORS!**

En estos momentos, tenemos un nuevo complemento en proceso que debería aliviar la mayor parte del dolor que sienten los desarrolladores de Ionic al acceder a datos externos y API´s en dispositivos móviles.

Cross-Origin Resource Sharing (CORS) es un mecanismo que los navegadores y las vistas web, como los que alimentan Capacitor, usan para proteger los datos de sus usuarios y evitar ataques que comprometerían su aplicación.

Si bien es excelente para la seguridad, comúnmente restringe las solicitudes HTTP / S, el mecanismo a través del cual los desarrolladores acceden y administran datos externos, lo que genera mucha confusión. En última instancia, esta es una distracción que le quita tiempo y no te permite enfocarte en la creación de las aplicaciones.

Pronto, presentaremos un nuevo complemento HTTP que aborda esto automáticamente en un enfoque multiplataforma. En dispositivos móviles, las solicitudes HTTP se ejecutan de forma nativa, fuera de la vista web. Esto evita de manera efectiva CORS, lo que resulta en una experiencia de desarrollador mejorada al tiempo que mantiene protocolos de seguridad adecuados (las aplicaciones nativas no están sujetas a CORS). Las solicitudes web utilizan fetch, la API moderna del navegador web para recuperar recursos externos.

El complemento HTTP está en [desarrollo activo](https://github.com/ionic-team/capacitor/pull/2495){:target="_blank" rel="nofollow,noreferrer"}. Nos encantaría que lo pruebes y proporciones comentarios. Mientras tanto, también puedes consultar nuestra [guía de solución de problemas CORS](https://ionicframework.com/docs/troubleshooting/cors){:target="_blank" rel="nofollow,noreferrer"}.

## **Actualización sobre el soporte de Electron**

Después de analizar detenidamente cuáles deben ser nuestras prioridades y nuestro enfoque en 2020, hemos decidido volver a poner el soporte de Electrón en beta. Después de una inversión adicional en plataformas clave que generan el mayor interés (iOS, Android y PWA), volveremos a centrarnos en él.

## **Fácil proceso de actualización**

Capacitor le da a los desarrolladores de Ionic un control completo de sus proyectos nativos. Entre [muchos otros beneficios](https://capacitor.ionicframework.com/docs/cordova#native-project-management){:target="_blank" rel="nofollow,noreferrer"}, esto hace que las actualizaciones sean fáciles y directas.

Primero, actualiza el "Capacitor Core" y el CLI:

```shell
cd your-app-folder
npm update @capacitor/cli
npm update @capacitor/core
```

A continuación, actualice cada biblioteca de Capacitor en uso:

```shell
npm install @capacitor/ios@latest
npx cap sync ios

npm install @capacitor/android@latest
# Within Android Studio, click “Sync Project with Gradle Files” button

cd electron
npm install @capacitor/electron@latest
```

Luego, siga estas instrucciones de actualización dependiendo de la plataforma que estes usando:

- [iOS](https://capacitor.ionicframework.com/docs/ios/updating/#from-1-5-1-to-2-0-0){:target="_blank" rel="nofollow,noreferrer"}
- [Android](https://capacitor.ionicframework.com/docs/android/updating/#from-1-5-1-to-2-0-0){:target="_blank" rel="nofollow,noreferrer"}
- [Electrón](https://capacitor.ionicframework.com/docs/electron/updating/#from-1-5-2-to-2-0-0){:target="_blank" rel="nofollow,noreferrer"}
- [Releases Capacitor](https://github.com/ionic-team/capacitor/releases/tag/2.0.0){:target="_blank" rel="nofollow,noreferrer"}

## **Más que un número de versión**

[Capacitor 2.0](https://capacitor.ionicframework.com/){:target="_blank" rel="nofollow,noreferrer"} es una actualización significativa de una parte cada vez más importante de la plataforma de desarrollo de aplicaciones de Ionic.

La recepción de Capacitor nos ha impresionado mucho desde que se anunció y las instalaciones han estado [creciendo rápidamente](https://npmcharts.com/compare/@capacitor/core){:target="_blank" rel="nofollow,noreferrer"}.

Con 2.0, comenzamos a hacer que Capacitor sea el valor predeterminado para todos los nuevos proyectos de Ionic React y pronto Ionic Angular, y esperamos que estemos recomendando Capacitor para todas las nuevas aplicaciones de Ionic y cada vez más para las aplicaciones empresariales.

Además, estamos dedicando más recursos internos a Capacitor, ya que se convierte en una parte clave de la oferta de Ionic. Espero ver que Capacitor reciba mucho más enfoque y atención por el equipo de Ionic durante los próximos meses.

## **Comienza a construir hoy**

Si eres nuevo en Capacitor, es fácil de comenzar. Sigue nuestra [guía](https://ionicframework.com/docs/intro/next){:target="_blank" rel="nofollow,noreferrer"} completa de la [primera aplicación](https://ionicframework.com/docs/intro/next){:target="_blank" rel="nofollow,noreferrer"} para crear una aplicación de galería de fotos con tecnología de la cámara de Capacitor, el sistema de archivos y las API de almacenamiento. Para aquellos que buscan sumergirse de inmediato, eche un vistazo al [Asistente de aplicaciones iónicas](https://ionicframework.com/start){:target="_blank" rel="nofollow,noreferrer"}: Genere una excelente aplicación de inicio de Capacitor en segundos.

**Fuente**\: [Ionic Framework: Anuncia el lanzamiento de Capacitor 2.0](https://ionicframework.com/blog/announcing-capacitor-2-0/ "Ionic Framework: Anuncia el lanzamiento de Capacitor 2.0") traducci&oacute;n al castellano por [Pablo &Aacute;lvarez Corredera](https://kutt.it/ciberninjast) bajo permiso del autor.
{: .notice--info}

### **Relacionados** <!-- omit in toc -->

[📰 Ionic 4.0: Introducción Ionic para todos](https://ciberninjas.com/ionic-4-0-introduccion-ionic-para-todos)

[🚀 Ionic: ¿Qué es Ionic?](/ionic-framework/)

[🚀 Ionic: Conceptos Básicos del Framework](/ionic-framework-concepto/)
