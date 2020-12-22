---

author: rosepac
bootstrap: true
comments: false
tags:
- Frameworks Multiplataforma
- Angular
thumbnail: /assets/img/2020-news/angular-10.webp
feature-img: /assets/img/2020-news/angular-10.webp
title: '🥇 ▷ Angular 11: Conociendo las próximas novedades del framework'
description: >-
  La actualización principal del popular framework web, Angular, creado por Google ahora es lanzado como versión estable para su uso en producción.
excerpt: >-
  La actualización principal del popular framework web, Angular, creado por Google ahora es lanzado como versión estable para su uso en producción.
canonical_URL: https://ciberninjas.com/angular-11-novedades/
permalink: /angular-11-novedades/
date: 2020-11-29 23:58:32
last_modified_at: 
published: true

---

Una nueva actualización de Angular, fue lanzada la primera quincena de este Noviembre 2020: Angular 11 llega con nuevos e interesantes cambios. Si bien, en Junio, hablamos del [lanzamiento de Angular 10](https://ciberninjas.com/angular-10-novedades/); en Noviembre, ya recibimos una nueva actualización del framework de Angular.
<!-- https://www.infoworld.com/article/3584372/whats-new-in-angular-11.html -->

> ***Traducción***: *Esto es un contenido informativo extraído del blog [Oficial de Angular en Medium](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7), escrito por Mark Techson.*

![Nueva versión de Angular: Angular 11 llega con nuevos cambios novedosos de cara al futuro](/assets/img/2020-news/angular-10.webp)

La versión 11.0.0 llega con excelentes actualizaciones para los desarrolladores de Angular, incluido el framework, la CLI y los componentes del Framework Angular.

A continuación vamos a conocer más sobre los nuevos cambios:

- [Actualizaciones sobre la operación Byelog](#actualizaciones-sobre-la-operación-byelog)
- [Inserción automática de fuentes](#inserción-automática-de-fuentes)
- [Arneses de prueba de componentes](#arneses-de-prueba-de-componentes)
- [Informes y registro mejorados](#informes-y-registro-mejorados)
- [Vista previa actualizada del servicio de idiomas](#vista-previa-actualizada-del-servicio-de-idiomas)
- [Soporte actualizado de reemplazo de módulo en caliente (HMR)](#soporte-actualizado-de-reemplazo-de-módulo-en-caliente-hmr)
- [Compilaciones más rápidas](#compilaciones-más-rápidas)
- [Soporte Experimental Webpack 5](#soporte-experimental-webpack-5)
- [Linting](#linting)
- [Limpieza interna](#limpieza-interna)
- [Mapa vial](#mapa-vial)
- [Cómo actualizar para obtener la versión 11](#cómo-actualizar-para-obtener-la-versión-11)

**Nuevos Cambios en Angular 11**

## Actualizaciones sobre la operación Byelog

Cuando compartimos [la Hoja de ruta de Angular](https://angular.io/guide/roadmap){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, uno de los elementos fue la Operación Byelog, en la que nos comprometimos a realizar un esfuerzo de ingeniería significativo hacia la clasificación de problemas y relaciones públicas hasta que tengamos una comprensión clara de las necesidades de la comunidad en general. ¡Ahora podemos informar que el objetivo original está completo! Hemos clasificado todos los problemas en los tres monorepos y continuaremos con esto como un esfuerzo continuo a medida que se informen nuevos problemas.

Este es nuestro compromiso: en el futuro, todos los problemas nuevos informados se evaluarán en un plazo de 2 semanas.

En el proceso, resolvimos algunos [problemas](https://github.com/angular/angular/issues/18469){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} [populares](https://github.com/angular/angular/issues/12842){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} en el [enrutador](https://github.com/angular/angular/issues/13011){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} y los [formularios](https://github.com/angular/angular/issues/14542){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} .

Además, ¡cerramos el [*tercer número más popular*](https://github.com/angular/angular/issues/11405){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}*!*

Ahora, estamos planeando los próximos pasos para apoyar a la comunidad Angular. Continuaremos evaluando y solucionando problemas, y trabajaremos para mejorar nuestros procesos para aceptar contribuciones de la comunidad.

## Inserción automática de fuentes

Para hacer que sus aplicaciones sean aún más rápidas al acelerar su [primera pintura con contenido](https://web.dev/first-contentful-paint/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, estamos introduciendo la inserción automática de fuentes. Durante el tiempo de compilación, Angular CLI descargará y las fuentes en línea que se utilizan y vinculan en la aplicación. Habilitamos esto de forma predeterminada en las aplicaciones creadas con la versión 11. ¡Todo lo que necesita hacer para aprovechar esta optimización es actualizar tu aplicación!

## Arneses de prueba de componentes

En Angular v9 presentamos los arneses de prueba de componentes. Proporcionan una superficie API robusta y legible para ayudar a probar los componentes de Angular Material. Ofrece a los desarrolladores una forma de interactuar con los componentes de Angular Material utilizando la API compatible durante las pruebas.

¡Lanzando con la versión 11, tenemos arneses para todos los componentes! Ahora los desarrolladores pueden crear conjuntos de pruebas más robustos.

También hemos incluido mejoras de rendimiento y nuevas API. La función *paralela* facilita el trabajo con acciones asincrónicas en sus pruebas al permitir a los desarrolladores ejecutar múltiples interacciones asincrónicas con componentes en paralelo. La función *manualChangeDetection* brinda a los desarrolladores acceso a un control más detallado de la detección de cambios al deshabilitar la detección automática de cambios en las pruebas unitarias.

Para obtener más detalles y ejemplos de estas API y otras características nuevas, asegúrese de consultar la [documentación de](http://material.angular.io/cdk/test-harnesses/overview){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} los arneses de prueba de [materiales angulares](http://material.angular.io/cdk/test-harnesses/overview){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}.

## Informes y registro mejorados

Hemos realizado cambios en los informes de la fase de construcción para que sean aún más útiles durante el desarrollo. Estamos incorporando nuevas actualizaciones de salida de CLI para facilitar la lectura de registros e informes.

## Vista previa actualizada del servicio de idiomas

Angular Language Service proporciona herramientas útiles para que el desarrollo con Angular sea productivo y divertido. La versión actual del servicio de idiomas se basa en View Engine y hoy damos un adelanto del servicio de idiomas basado en Ivy. El servicio de idiomas actualizado proporciona una experiencia más potente y precisa para los desarrolladores.

Ahora, el servicio de lenguaje podrá inferir correctamente tipos genéricos en plantillas de la misma manera que lo hace el compilador de TypeScript. Por ejemplo, en la captura de pantalla siguiente, podemos inferir que el iterable es de tipo cadena.

Esta nueva y poderosa actualización aún está en desarrollo, pero queríamos compartir una actualización mientras seguimos preparándola para un lanzamiento completo en una próxima versión.

## Soporte actualizado de reemplazo de módulo en caliente (HMR)

Angular ha ofrecido soporte para HMR, pero habilitarlo requería cambios de configuración y código, lo que lo hace menos que ideal para incluirlo rápidamente en proyectos de Angular. En la versión 11, actualizamos la CLI para permitir habilitar HMR al iniciar una aplicación con ng serve. Para comenzar, ejecute el siguiente comando:

`ng serve --hmr`

Una vez que se inicia el servidor local, la consola mostrará un mensaje confirmando que HMR está activo:

> *AVISO: El reemplazo de módulo en caliente (HMR) está habilitado para el servidor de desarrollo.*
<!-- https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7 -->

Consulta [https://webpack.js.org/guides/hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} para obtener información sobre cómo trabajar con HMR para webpack.

Ahora, durante el desarrollo, los últimos cambios en componentes, plantillas y estilos se actualizarán instantáneamente en la aplicación en ejecución. Todo sin necesidad de actualizar la página completa. Los datos escritos en formularios se conservan, así como la posición de desplazamiento, lo que aumenta la productividad del desarrollador.

## Compilaciones más rápidas

Estamos brindando un ciclo de desarrollo y compilación más rápido al realizar actualizaciones en algunas áreas clave.

- Al instalar dependencias, el proceso de actualización de ngcc ahora es de 2 a 4 veces más rápido.
- Compilación más rápida con TypeScript v4.0.

## Soporte Experimental Webpack 5

Ahora, los equipos pueden suscribirse al paquete web v5. Actualmente, puede experimentar con la [federación de módulos](https://webpack.js.org/concepts/module-federation/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}. En el futuro, webpack v5 despejará el camino para:

- Compilaciones más rápidas con almacenamiento en caché de disco persistente
- Paquetes más pequeños gracias a [cjs tree-shaking](https://webpack.js.org/guides/tree-shaking/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}

El soporte es experimental y está en desarrollo, por lo que no recomendamos optar por los usos de producción.

¿Quieres probar el paquete web 5? Para habilitarlo en su proyecto, agregue la siguiente sección a su archivo package.json:

{% highlight js %}
"resolutions": {
     "webpack": "5.4.0"
}
{% endhighlight %}

Actualmente, deberá usar **hilo** para probar esto, ya que npm aún no admite la propiedad resolution.

## Linting

En versiones anteriores de Angular, enviamos una implementación predeterminada para linting (TSLint). Ahora, TSLint está en desuso por los creadores del proyecto que recomiendan la migración a ESLint. [James Henry,](https://twitter.com/mrjameshenry){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} junto con otras personas de la comunidad de código abierto, desarrolló una solución de terceros y una ruta de migración a través de [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, [angular-eslint](https://github.com/angular-eslint/angular-eslint){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} y [tslint-to-eslint-config](https://github.com/typescript-eslint/tslint-to-eslint-config){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}. Hemos estado colaborando estrechamente para garantizar una transición sin problemas de los desarrolladores de Angular a la pila de linting compatible.

Estamos desaprobando el uso de TSLint y Codelyzer en la versión 11. Esto significa que en versiones futuras la implementación predeterminada para linting proyectos Angular no estará disponible.

Dirígete a la [página oficial del proyecto](https://github.com/angular-eslint/angular-eslint#migrating-from-codelyzer-and-tslint){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} para obtener una guía para incorporar angular-eslint en un proyecto y migrar desde TSLint.

## Limpieza interna

En esta actualización, eliminaremos la compatibilidad con IE9 / IE10 e IE mobile. IE11 es la única versión de IE que [aún es compatible](https://angular.io/guide/browser-support){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} con Angular. También [eliminamos las API obsoletas](https://angular.io/guide/deprecations){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} y agregamos algunas a la lista de obsolescencia. Asegúrese de verificar esto para asegurarse de que está utilizando las API más recientes y siguiendo nuestras mejores prácticas recomendadas.

## Mapa vial

También actualizamos la [hoja](https://angular.io/guide/roadmap){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} de [ruta](https://angular.io/guide/roadmap){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} para mantenerlo informado sobre nuestras prioridades actuales. Algunos de los anuncios en esta publicación son actualizaciones sobre proyectos en progreso de la hoja de ruta. Esto refleja nuestro enfoque para implementar esfuerzos mayores de manera incremental y permite a los desarrolladores proporcionar comentarios tempranos para que podamos incorporarlos en la versión final.

Colaboramos con [Lukas Ruebbelke](https://twitter.com/simpulton){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} de la comunidad Angular para actualizar el contenido de algunos de los proyectos para reflejar mejor el valor que brindan a los desarrolladores.

## Cómo actualizar para obtener la versión 11

Cuando esté listo para ejecutar este comando para actualizar Angular y CLI:

{% highlight js %}
ng update @angular/cli @angular/core
{% endhighlight %}

Dirígete a [update.angular.io](https://update.angular.io/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} para encontrar información detallada y orientación sobre la actualización. Siempre recomendamos actualizar una versión principal a la vez para tener la mejor experiencia de actualización.

Esperamos que disfrute de esta actualización de funciones y asegúrese de hacernos saber lo que piensa aquí o en [Twitter](https://twitter.com/angular){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}.

### **Relacionados** <!-- omit in toc -->

[🥇 ▷ Angular 10: Conoce todas las novedades del framework Angular](https://ciberninjas.com/angular-10-novedades/)
[🥇 ▷ Los Cursos con los Mejores Profesionales de Angular](/cursos-udemy-ofertas/#angular)
[🥇 ▷ Los Mejores Cursos Gratis de Angular](/cursos-programacion-web-movil/#los-mejores-cursos-gratis-de-angular-framework)
[🥇 ▷ Los Mejores Libros de Angular](/biblioteca-de-programacion-y-tecnologia/#libros-gratis-de-angular)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario!"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}