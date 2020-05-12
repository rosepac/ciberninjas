---
title: "🥇 ▷ React Native: Aprende todo sobre el Framework Javascript de Facebook"
description: "React Native, aprende todo lo que debes saber sbore este impresionante Framework de creación de preciosas Aplicaciones Web creado por Facebook."
excerpt: "React Native, aprende todo lo que debes saber sbore este impresionante Framework de creación de preciosas Aplicaciones Web creado por Facebook."
date: 2020-04-18 01:00:00 +0100
canonical_URL: https://ciberninjas.com/react-native/
permalink: /react-native/
classes: wide
published: true
categories:
  - Framework Multiplataforma
tags:
  - React Native
header:
  teaser: /assets/images/frameworks-multiplataforma/react-native-ciberninjas.webp
#  overlay_image: /assets/images/frameworks-multiplataforma/react-native-ciberninjas.webp
#  overlay_filter: '0.2'
#  image_description: >-
#  caption: >-
#    **Créditos**: Foto de [Redd Angelo](https://unsplash.com/photos/9o8YdYGTT64) en [Unsplash](https://unsplash.com/@reddangelo)
# toc: true
# toc_label: "Contenidos"
# toc_icon: user-ninja
# toc_sticky: true
---

![React Native: Aprende todo sobre el Framework Javascript de Facebook](/assets/images/frameworks-multiplataforma/react-native-ciberninjas.webp "React Native: Aprende todo sobre el Framework Javascript de Facebook")

## Introducción a React Native

React Native es un framework para la creación de aplicaciones móviles de código abierto creado por Facebook. Se utiliza para desarrollar aplicaciones para Android, iOS, Web y UWP (incluso existe un puerto imcompleto para Qt) al permitir a los desarrolladores conjuntar a los componentes de React junto a las mejores capacidades de una plataforma nativa.

🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-editores-texto/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/) >> [mejores regalos 2 - 🎁](/prime-day-amazon/)
{: .notice--danger}

## ¿Qué es React Native?

React Native es una librería de código de Facebook que te ayuda a crear aplicaciones móviles utilizando solo Javascript.

Mientras que otras librerías de creación de aplicaciones crea solo versiones híbridas, web o HTML de las aplicaciones móviles, React Native en realidad crea aplicaciones móviles que son casi idénticas a las aplicaciones móviles Javascript y Objective-C.

La librería React Native puede hacer esto porque emplea la misma tecnología de UI y los componentes básicos que utilizan las aplicaciones de Android y IOS.

👉 ESPACIO RESERVADO PARA ENLACE A PÁGINA DE RECURSOS DE REACT NATIVE
{: .notice--info}

## **Historia de React Native**

En 2012, Mark Zuckerberg comentó: "El mayor error que cometimos como empresa fue apostar demasiado en HTML en lugar de en nativo". Prometió que Facebook pronto ofrecería una mejor experiencia móvil.

Dentro de Facebook , Jordan Walke encontró una manera de generar elementos de interfaz de usuario para iOS a partir de un hilo de JavaScript en segundo plano. Decidieron organizar un Hackathon interno para perfeccionar este prototipo y poder crear aplicaciones nativas con esta tecnología.

Después de meses de desarrollo, Facebook lanzó la primera versión de React JavaScript Configuration en 2015. Durante una charla técnica, Christopher Chedeau explicó que Facebook ya estaba usando React Native en producción para su aplicación de grupo y su aplicación de administrador de anuncios.

## **Requisitos**

Las aplicaciones React Native pueden apuntar a iOS 9.0 y Android 4.1 (API 16) o más nuevas. Puede usar Windows, macOS o Linux como su sistema operativo de desarrollo, aunque la creación y ejecución de aplicaciones iOS está limitada a macOS. Se pueden utilizar herramientas como [Expo](https://expo.io/) para solucionar esto.

## **Construyendo tu primera aplicación React Native**

Siga la [guía de introducción](https://facebook.github.io/react-native/docs/getting-started.html){:target="_blank" rel="nofollow"}. La forma recomendada de instalar React Native depende de su proyecto. Aquí puede encontrar guías cortas para los escenarios más comunes:

- [Probando reaccionar nativo](https://snack.expo.io/@hramos/hello,-world!){:target="_blank" rel="nofollow"}
- [Creando una nueva aplicación](https://facebook.github.io/react-native/docs/getting-started.html){:target="_blank" rel="nofollow"}
- [Agregando React Native a una aplicación existente](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html){:target="_blank" rel="nofollow"}

## **Documentación**

La documentación completa de React Native se puede encontrar en el [sitio web](https://facebook.github.io/react-native/docs/getting-started.html){:target="_blank" rel="nofollow"} .

La documentación de React Native analiza los componentes, las API y los temas que son específicos de React Native. Para obtener más documentación sobre la API React que se comparte entre React Native y React DOM, consulte la [documentación de React](https://reactjs.org/docs/getting-started.html){:target=":blank"}.

La fuente de la documentación y el sitio web de React Native se encuentra en un repositorio separado, [**@ facebook / react-native-website**](https://github.com/facebook/react-native-website){:target="_blank" rel="nofollow"}.

## **Actualización**

La actualización a nuevas versiones de React Native puede brindarle acceso a más API, vistas, herramientas de desarrollo y otros recursos. Consulte la [Guía de actualización](https://facebook.github.io/react-native/docs/upgrading){:target="_blank}" para obtener instrucciones.

Las versiones nativas de React se analizan en la comunidad nativa React, [**@ react-native-community / react-native-releases**](https://github.com/react-native-community/react-native-releases){:target="_blank" rel="nofollow"}.

## **Primer Hola Mundo con React Native**

Un programa Hello, World en React Native se vería así:

`````
importación  Reaccionar  desde  'reaccionar' ; 
importar  {  AppRegistry ,  Text  }  desde  'react-native' ; 

const  HelloWorldApp  =  ()  =>  < Texto > ¡Hola  mundo ! < / Texto>; 
exportación  predeterminada  HelloWorldApp ; 

// Omita esta línea si utiliza Crear React Native App 
AppRegistry . registerComponent ( 'HelloWorld' ,  () =>  HelloWorldApp ); 

// El código nativo React también se puede importar desde otro componente con el siguiente código: 
import  HelloWorldApp  desde  './HelloWorldApp' ;
`````

## Implementación

Los principios de funcionamiento de React Native son prácticamente idénticos a React, excepto que React Native no manipula el DOM a través del DOM virtual . Se ejecuta en un proceso en segundo plano (que interpreta el JavaScript escrito por los desarrolladores) directamente en el dispositivo final y se comunica con la plataforma nativa a través de un puente serializado, asíncrono y por lotes.

Los componentes de React envuelven el código nativo existente e interactúan con las API nativas a través del paradigma declarativo de IU de React y JavaScript .Esto permite el desarrollo de aplicaciones nativas para equipos completamente nuevos de desarrolladores, y puede permitir que los equipos nativos existentes trabajen mucho más rápido.

React Native no usa HTML o CSS. En cambio, los mensajes del hilo de JavaScript se utilizan para manipular vistas nativas. React Native también permite a los desarrolladores escribir código nativo en lenguajes como Java para Android y Objective-C o Swift para iOS que lo hacen aún más flexible.

## **Primera Impresión de React Native**

La primera impresión de React Native es muy buena y gusta mucho el buen resultado al crear las aplicaciones además de lo rápido que se pueden crear.

También impresionó mucho la forma en que el diseño se transfiere de una aplicación web a una aplicación móvil. Es capaz de crear aplicaciones multiplataforma de una sola vez, definitivamente ahorrando tiempo y energía.

Sin embargo, hubo algunos errores que se resolvieron investigando; pero en general, la librería funciona realmente bien considerando la cantidad de código que se puede implementar a través de su uso.

## **Prost de React Native ⏫**

- La librería React Native tiene varios beneficios que otras herramientas similares no tienen Al considerar las ventajas de usar React Native, elegí compararlo con Ionic, un software similar basado en Javascript que se usa para crear aplicaciones móviles.
- El DOM personalizado lo hace mucho más rápido que HTML Dom.
- Usa JIT para aplicaciones basadas en Android.
- Incluye un conjunto de widgets personalizados que se traduce fácilmente a los widgets de iOS y Android.
- Las hojas de estilo predeterminadas no se conectan en cascada automáticamente, lo que hace que la aplicación sea aún más rápida.

## **Contras de React Native ⏬**

- Como se cita en los pros, existen algunos inconvenientes con la librería React Native. En comparación, entre los inconvenientes de React Native y Ionic, en búsqueda de la mejor librería de creación de aplicaciones basado en javascript.
- React Native necesita un intérprete para descifrar el código para iOS, lo que ralentiza un poco la velocidad de codificación. Esto lo hizo más lento que el intérprete de Ionic.
- No existe una sensación de estar desarrollando una aplicación nativa de forma clara y concisa ni busca al usar la inserción de sus widgets.

### Relacionados

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/programar/)
[👩‍💻 Aprender a Programar es Cada Vez Más Difícil](/programar/ "👩‍💻 Aprender a Programar es Cada Vez Más Difícil")
[▷ ¿Por qué Python es Mejor que PHP?](desarrolladores-lenguaje-rust/ "👩‍💻 Aprender a Programar es Cada Vez Más Difícil")
[▷ A los desarrolladores les encanta el lenguaje de programación Rust: He aquí por qué](/porque-python-es-mejor-que-php/ "👩‍💻 Aprender a Programar es Cada Vez Más Difícil")
[¿Por qué Python es Mejor que PHP?](/porque-python-es-mejor-que-php/ "👩‍💻 Aprender a Programar es Cada Vez Más Difícil")
[👨‍🎨 Palabras más usadas en cada lenguaje de programación](/palabras-lenguajes-programacion/ "👨‍🎨 Palabras más usadas en cada lenguaje de programación")
