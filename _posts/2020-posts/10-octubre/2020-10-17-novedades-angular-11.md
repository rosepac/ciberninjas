---

author: rosepac
bootstrap: true
comments: false
tags:
- 
thumbnail: /assets/img/blog/.webp
feature-img: /assets/img/blog/.webp
title: '▷ Novedades de Angular 11'
description: >-
  Los aspectos más destacados de la actualización planificada al marco web desarrollado por Google incluyen tipos más estrictos y mejoras en el rendimiento del enrutador.
excerpt: >-
  Los aspectos más destacados de la actualización planificada al marco web desarrollado por Google incluyen tipos más estrictos y mejoras en el rendimiento del enrutador.
canonical_URL: https://ciberninjas.com/novedades-angular-11/
permalink: /novedades-angular-11/
date: 2020-10-17 17:28:32
last_modified_at: 
published: false

---

<!-- https://www.infoworld.com/article/3584372/whats-new-in-angular-11.html -->
Se está desarrollando Angular 11, una actualización planificada del marco web desarrollado por Google, con cinco versiones beta entregadas en septiembre y dos más en octubre. Hasta ahora, las adiciones y cambios propuestos incluyen tipos más estrictos, mejoras en el rendimiento del enrutador y la eliminación del soporte para ciertas versiones del navegador Internet Explorer.

Las versiones beta están disponibles en GitHub . Con Angular 11, se agregarían tipos más estrictos para DatePipe  y conductos numéricos , con el fin de detectar usos indebidos, como pasar un Observable o una matriz, en tiempo de compilación.

Otras mejoras propuestas para Angular 11 incluyen:

- Para el compilador angular, keySpanse agregaría al Variablenodo.
- Para la CLI del compilador, getResourceDependenciesse agrega un método a la clase del compilador Ngcompiler que permite que las integraciones del compilador accedan a las dependencias de recursos de los archivos dentro de la compilación. Esto se utilizará dentro del complemento de paquete web de la CLI para optimizar el proceso de descubrimiento de dependencias.
- Se está agregando soporte para la funcionalidad "ir a la definición" al Servicio de Idiomas de Ivy.
El enrutador en Angular 11 cambiaría el valor predeterminado de  relativeLinkResolution "heredado" a "corregido". La migración actualiza las RouterModuleconfiguraciones que usan el valor predeterminado para usar ahora específicamente "heredado" para evitar roturas durante la actualización.
En una solución básica, se está introduciendo una política de tipos de confianza en el modo de desarrollo. Permite conversiones inseguras arbitrarias a tipos de confianza para admitir funciones de desarrollo. Además, se está agregando un módulo para crear una política de Tipos de confianza para uso interno de Angular.
Se están agregando nuevas opciones de navegación inicial a la funcionalidad heredada.
Para la refactorización de código en el enrutador, el tipo de parámetro en navigateByUrly createUrlTreese está ajustando para que sea más preciso.
Para mejorar el rendimiento del enrutador, ngDevModese puede utilizar para modificar los mensajes de error.
Para el trabajador del servicio, UnrecoverableStateError se está agregando una notificación, solucionando un problema en el que surgiría un estado roto en el que solo partes de una aplicación se cargarían correctamente. Esta situación ha surgido cuando el navegador ha desalojado ansiosamente activos almacenados en caché de la caché que ya no se pueden encontrar en el servidor.
Se elimina la compatibilidad con los navegadores Microsoft IE 9 e IE 10, al igual que la compatibilidad con dispositivos móviles IE.
Se está agregando compatibilidad con los formatos de año de numeración de semanas ISOformatDate .
Para el compilador-cli , se están definiendo interfaces que se pueden utilizar para TemplateTypeChecker. También se han realizado mejoras de rendimiento en compiler-cli.
Para el núcleo, se agrega una migración que busca todas las importaciones y llamadas a la asyncfunción obsoleta @angular/core/testingy las reemplaza por waitforasync.
nullahora se incluye en los tipos de .parent.
Se planifica una multitud de correcciones de errores, incluida una mejora en la escritura de conductos comunes y otra corrección para garantizar TestBedque no se instancia antes del proveedor de anulación.

Una hoja de ruta publicada para Angular , que enumera las características en desarrollo o en el futuro, cita capacidades que incluyen tipos nativos de confianza y mecanografía estricta para formularios. El lanzamiento de Angular 10.1 point, con mejoras en el compilador y el enrutador, se lanzó el 8 de septiembre. Angular 10.0 , con capacidades de herramientas y ecosistemas, llegó el 24 de junio.

### **Relacionados** <!-- omit in toc -->

[]()

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![](/assets/img/blog/.webp "")