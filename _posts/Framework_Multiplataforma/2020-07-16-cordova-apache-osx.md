---

author: rosepac
bootstrap: true
comments: false
tags:
- Frameworks Multiplataforma
- Cordova Apache
- OSX
thumbnail: /assets/img/2020-news/cordova-apache.webp
feature-img: /assets/img/2020-news/cordova-apache.webp
title: '▷ Apache Cordova para crear aplicaciones de escritorio macOS'
description: >-
  CordovaLib es un framework que permite a los usuarios incluir Cordova en sus proyectos de aplicaciones OS X fácilmente, y también crear nuevos proyectos de aplicaciones OS X basados ​​en Cordova.
excerpt: >-
  CordovaLib es un framework que permite a los usuarios incluir Cordova en sus proyectos de aplicaciones OS X fácilmente, y también crear nuevos proyectos de aplicaciones OS X basados ​​en Cordova.
canonical_URL: https://ciberninjas.com/cordova-apache-para-osx/
permalink: /cordova-apache-para-osx/
date: 2020-07-16 10:50:32
last_modified_at: 
published: true

---

CordovaLib es un framework que permite a los usuarios incluir Cordova en sus proyectos de aplicaciones OS X fácilmente, y también crear nuevos proyectos de aplicaciones OS X basados ​​en Cordova.

Debes tener en cuenta que el enfoque actual de esta plataforma Cordova es proporcionar aplicaciones de tipo quiosco para OSX, que generalmente se ejecutan a pantalla completa y tienen poca interacción con el escritorio.

Por lo tanto, no hay soporte directo para menús, integración de base, integración de buscador, documentos, etc. Piensa en ella como una aplicación móvil que se ejecuta en una pantalla muy grande.

## **Requisitos**

Asegurarse de haber instalado el SDK OS X más reciente que viene con Xcode 6 o posterior; puedes descargarlo en http://developer.apple.com/downloads o en la App Store de Mac.

## **Crear tu proyecto**

1. (Opcionalmente) Sigue las instrucciones en la sección Uso de la línea de comandos de los Documentos de Cordova para crear un nuevo proyecto. Por ejemplo:

`$ cordova create hello com.example.hello HelloWorld`

2. Agrega la plataforma OSX:

`$ cordova platform add osx` + `$ cordova run osx`

3. Puedes agregar el proyecto en XCode:

`$ open platforms/osx/<yourproject>.xcodeproj`

### **Agregar plugins**

Por ejemplo, si necesita el complemento de archivo, puedes hacer lo siguiente: `$ cordova plugin add cordova-plugin-file`

## **Crear un proyecto independiente con Cordova OSX**

1. Descarga la fuente.
2. Ejecuta el comando `create` para configurar un proyecto vacío-

`$ bin/create <path_to_new_project> <package_name> <project_name>`

Por ejemplo:

`$ bin/create ../Foo org.apache.foo FooBar`

### **Agregar Complementos**

Por ejemplo, si necesita el complemento de archivo, haga lo siguiente:

`$ cordova plugin add cordova-plugin-file`

## **Actualización de una referencia de subproyecto CordovaLib en su proyecto**

Cuando actualiza a una nueva versión de Cordova, es posible que deba actualizar la referencia de CordovaLib en un proyecto existente. Cordova viene con un script que te ayudará a hacer esto.

1. Inicie **Terminal.app**
2. Vaya a la ubicación donde instaló Cordova, en la `bin`subcarpeta
3. correr `update /path/to/your/project`

[🔨 Más Información](https://www.npmjs.com/package/cordova-osx){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Relacionados** <!-- omit in toc --> <!-- omit in toc -->