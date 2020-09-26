---

author: rosepac
bootstrap: true
comments: false
tags:
- Frameworks Multiplataforma
- Cordova Apache
- Android Studio
thumbnail: /assets/img/2020-news/cordova-apache-android-studio.webp
feature-img: /assets/img/2020-news/cordova-apache-android-studio.webp
title: '▷ Apache Cordova 9.0 para crear aplicaciones móviles Android'
description: >-
  Cordova Android es una biblioteca de aplicaciones de Android que permite construir proyectos basados ​​en Cordova para la plataforma Android. Las aplicaciones basadas en Cordova son, en esencia, aplicaciones escritas con tecnología web: HTML, CSS y JavaScript.
excerpt: >-
  Cordova Android es una biblioteca de aplicaciones de Android que permite construir proyectos basados ​​en Cordova para la plataforma Android. Las aplicaciones basadas en Cordova son, en esencia, aplicaciones escritas con tecnología web: HTML, CSS y JavaScript.
canonical_URL: https://ciberninjas.com/cordova-apache-9-para-android/
permalink: /cordova-apache-9-para-android/
date: 2020-07-16 10:50:32
last_modified_at: 
published: true

---

Cordova Android es una biblioteca de aplicaciones de Android que permite construir proyectos basados ​​en Cordova para la plataforma Android. Las aplicaciones basadas en Cordova son, en esencia, aplicaciones escritas con tecnología web: HTML, CSS y JavaScript.

## **Requisitos**

Java JDK 1.8 + Android SDK 

## **Herramientas de desarrollo de Android Cordova**

Recomendamos utilizar la herramienta de línea de comandos Cordova para crear proyectos y poder instalar fácilmente complementos.

Sin embargo, se pueden utilizar los siguientes scripts en su lugar:

{% highlight js %}
./bin/create [ruta del paquete] ... crea la aplicación ./o un proyecto de Android Cordova
./bin/check_reqs ....................... comprueba que el entorno esta configurado para el desarrollo cordova-android
./bin/update [ruta] .................... actualiza un proyecto de cordova-android existente a la versión del framework
{% endhighlight %}

Estos comandos viven en un proyecto de Android Cordova generado. Cualquier interacción con el emulador requiere que tenga un AVD definido.

{% highlight js %}
./cordova/clean ........................ limpia el proyecto
./cordova/build ........................ llama a `clean` para limpiar y luego compila el proyecto
./cordova/log   ........................ transmite registros de dispositivo o emulador a STDOUT
./cordova/run   ........................ llama a `build` para construir y luego se implementa en un dispositivo Android conectado. Si no se detecta ningún dispositivo Android, iniciará un emulador y lo implementará.
./cordova/version ...................... devuelve la versión cordova-android del proyecto actual
{% endhighlight %}

## **Usando Android Studio**

1. Crea un proyecto.
2. Importalo a través de "Proyecto de NO Android Studio"

## **Ejecuando pruebas nativas**

El directorio /test en este proyecto contiene un proyecto de prueba de Android que se puede usar para ejecutar diferentes tipos de pruebas nativas. ¡Mira el archivo README que contiene para más detalles!

[🔨 Más Información](https://www.npmjs.com/package/cordova-android){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Relacionados** <!-- omit in toc --> <!-- omit in toc -->

[▷ Apache Cordova para construir aplicaciones sobre móviles iOS](https://ciberninjas.com/cordova-apache-para-ios/)

[▷ Apache Cordova para crear aplicaciones de escritorio macOS](https://ciberninjas.com/cordova-apache-para-osx/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Cordova Android es una biblioteca de aplicaciones de Android que permite construir proyectos basados ​​en Cordova para la plataforma Android. Las aplicaciones basadas en Cordova son, en esencia, aplicaciones escritas con tecnología web: HTML, CSS y JavaScript.](/assets/img/2020-news/cordova-apache-android-studio.webp "Cordova Android es una biblioteca de aplicaciones de Android que permite construir proyectos basados ​​en Cordova para la plataforma Android. Las aplicaciones basadas en Cordova son, en esencia, aplicaciones escritas con tecnología web: HTML, CSS y JavaScript.")