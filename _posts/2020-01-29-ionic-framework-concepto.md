---

title: '🚀 Ionic: Conceptos Básicos del Framework'
excerpt: '👩‍🚀 Conoce los conceptos básicos en los que se basa el framework de Ionic; sus metas, su licencia, su CLI, su compatibilidad con otros frameworks y sus novedades.'
description: '👩‍🚀 Conoce los conceptos básicos en los que se basa el framework de Ionic; sus metas, su licencia, su CLI, su compatibilidad con otros frameworks y sus novedades.'
published: true
author_profile: true
comments: true
classes: wide
date: 2020-01-31 11:20:33
last_modified_at: 
header:
  teaser: https://i.ibb.co/3SbbVS3/ionic-framework-og.png
tags:
- Ionic
- Componentes
- Móviles
- Aplicaciones
categories:
- SDK Multiplataforma
- Documentación
permalink: /ionic-framework-concepto/
canonical_URL: https://ciberninjas.com/ionic-framework-concepto/

---
<!-- https://ionicframework.com/docs/intro/concepts -->
## ¿Cuál es el concepto del framework Ionic?

Para aquellos completamente nuevos en el desarrollo de aplicaciones de Ionic, puede ser útil obtener una comprensión de alto nivel de la filosofía, los conceptos y las herramientas principales detrás del proyecto. Antes de sumergirnos en temas complejos, cubriremos los conceptos básicos de lo que es Ionic y cómo funciona.

[Componentes IU](/ionic-framework-concepto/#componentes-de-la-interfaz-de-usuario) [Estilo adaptativo](https://ionicframework.com/docs/intro/concepts#adaptive-styling) [Navegación](https://ionicframework.com/docs/intro/concepts#navigation) [Acceso nativo](https://ionicframework.com/docs/intro/concepts#native-access) [Temática](https://ionicframework.com/docs/intro/concepts#theming)

## Componentes de la Interfaz de Usuario

Ionic Framework es una biblioteca de componentes de la interfaz de usuario, que son elementos reutilizables que sirven como bloques de construcción para una aplicación. Los componentes iónicos están construidos sobre [estándares web](https://ionicframework.com/docs/faq/glossary#web-standards) usando HTML, CSS y JavaScript. Aunque los componentes están preconstruidos, están diseñados desde cero para ser altamente personalizables para que las aplicaciones puedan hacer que cada componente sea propio, permitiendo que cada aplicación tenga su propia apariencia. Más específicamente, los componentes iónicos pueden ser fácilmente temáticos para cambiar globalmente la apariencia en toda una aplicación. Para obtener más información sobre cómo personalizar el aspecto, consulte[Temática](https://ionicframework.com/docs/theming/basics).

## [Estilo adaptativo](https://ionicframework.com/docs/intro/concepts#adaptive-styling)

Adaptive Styling es una característica incorporada de Ionic Framework que permite a los desarrolladores de aplicaciones usar la misma base de código para múltiples plataformas. Cada componente iónico adapta su aspecto a la plataforma en la que se ejecuta la aplicación. Por ejemplo, los dispositivos de Apple, como el iPhone y el iPad, usan el [lenguaje de diseño iOS de](https://www.apple.com/ios) Apple . Del mismo modo, los dispositivos Android utilizan el lenguaje de diseño de Google llamado [Material Design](https://material.io/guidelines/) .

Al realizar sutiles cambios de diseño entre las plataformas, los usuarios reciben una experiencia de aplicación familiar. Una aplicación Ionic descargada de la App Store de Apple obtendrá el tema iOS, mientras que una aplicación Ionic descargada de la Play Store de Android obtendrá el tema Material Design. Para las aplicaciones que se ven como una aplicación web progresiva (PWA) desde un navegador, Ionic usará de manera predeterminada el tema Diseño de materiales. Además, decidir qué plataforma usar en ciertos escenarios es completamente configurable. Se puede encontrar más información sobre el estilo adaptativo en[Temática](https://ionicframework.com/docs/theming/basics).

## [Navegación](https://ionicframework.com/docs/intro/concepts#navigation)

Las aplicaciones web tradicionales usan un historial lineal, lo que significa que el usuario navega hacia adelante a una página y puede presionar el botón Atrás para navegar hacia atrás. Un ejemplo de esto es hacer clic en Wikipedia donde el usuario avanza y retrocede en la pila de historial lineal del navegador.

En contraste, las aplicaciones móviles a menudo utilizan navegación paralela "no lineal". Por ejemplo, una interfaz con pestañas puede tener pilas de navegación separadas para cada pestaña, asegurándose de que el usuario nunca pierda su lugar mientras navega y cambia entre pestañas.

Las aplicaciones iónicas adoptan este enfoque de navegación móvil, soportando historiales de navegación paralelos que también pueden anidarse, todo mientras mantienen los conceptos de navegación de estilo de navegador con los que los desarrolladores web están familiarizados.

Para las aplicaciones que están construidas con Angular y `@ionic/angular`, recomendamos usar el[ Enrutador Angular](https://angular.io/guide/router) que viene de fábrica para cada nueva aplicación Ionic 4 Angular. Las versiones anteriores de Ionic se enviaron con nuestro propio enrutador personalizado, pero con el fin de proporcionar la mejor experiencia de herramientas y desarrollador, hemos pasado a utilizar el enrutador recomendado por el marco.

## [Acceso nativo](https://ionicframework.com/docs/intro/concepts#native-access)

Una característica sorprendente de las aplicaciones creadas con tecnologías web (como las aplicaciones Ionic) es que puede ejecutarse en prácticamente cualquier plataforma: computadoras de escritorio, teléfonos, tabletas, automóviles, refrigeradores y mucho más. La misma base de código para las aplicaciones Ionic puede funcionar en muchas plataformas porque se basa en estándares web y API comunes que se comparten en estas plataformas.

Uno de los casos de uso más comunes para Ionic es crear una aplicación que se pueda descargar desde[ App Store](https://www.apple.com/ios/app-store/) y [Play Store](https://play.google.com/) . Los kits de desarrollo de software (SDK) de iOS y Android proporcionan[Vistas web](https://ionicframework.com/docs/building/webview)que procesan cualquier aplicación Ionic, mientras permiten *el* acceso *completo al* SDK nativo.

Los proyectos como[ Capacitor](https://capacitor.ionicframework.com/) y [Cordova](https://cordova.apache.org/) se usan comúnmente para dar a las aplicaciones Ionic este acceso a los SDK nativos. Esto significa que los desarrolladores pueden crear rápidamente una aplicación utilizando herramientas de desarrollo web comunes y aún tener acceso a funciones nativas como el acelerómetro, la cámara, el GPS y más del dispositivo.

## [Temática](https://ionicframework.com/docs/intro/concepts#theming)

En esencia, Ionic Framework se construye utilizando [CSS, lo](https://developer.mozilla.org/en-US/docs/Web/CSS) que nos permite aprovechar la flexibilidad que proporcionan las [propiedades (variables) de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) . Esto hace que sea increíblemente fácil diseñar una aplicación que se vea genial mientras sigue el estándar web. Proporcionamos un conjunto de colores para que los desarrolladores puedan tener algunos valores predeterminados excelentes, pero recomendamos anularlos para crear diseños que coincidan con una marca, empresa o una paleta de colores deseada. Todo, desde el color de fondo de una aplicación hasta el color del texto, es totalmente personalizable. Puede encontrar más información sobre la temática de aplicaciones en[Temática](https://ionicframework.com/docs/theming/basics).
<!-- SIGUIENTE PÁGINA: https://ionicframework.com/docs/intro/first-app -->

[👉 Conceptos Básicos de Ionic](/ionic-framework-conceptos/){: .btn .btn--inverse .btn--x-large .align-center}
[👉 Introducción a Ionic](/ionic-4-0-introduccion-ionic-para-todos){: .btn .btn--inverse .btn--x-large .align-center}
  
**Fuente**: [Doc. Ionic](https://ionicframework.com/docs)
{: .notice--info}