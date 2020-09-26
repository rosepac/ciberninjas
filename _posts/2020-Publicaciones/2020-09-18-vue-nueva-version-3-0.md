---

author: rosepac
bootstrap: true
comments: false
tags:
- Frameworks Multiplataforma
- Vue
thumbnail: /assets/img/blog/vue-3-ciberninjas.webp
feature-img: /assets/img/blog/vue-3-ciberninjas.webp
title: '▷ Lanzamiento de Vue 3.0 "One Piece" el framework de javascript más de moda'
description: >-
  Nuevo repositorio de Vue 3.0 (actualmente en RC), puedes contribuir al desarrollo de vuejs / vue-next creando una cuenta en GitHub.
excerpt: >-
  Nuevo repositorio de Vue 3.0 (actualmente en RC), puedes contribuir al desarrollo de vuejs / vue-next creando una cuenta en GitHub.
canonical_URL: https://ciberninjas.com/vue-3-0/
permalink: /vue-3-0/
date: 2020-09-18 17:38:32
last_modified_at: 
published: true

---

Hoy, el equipo de desarrollo de Vue ha presentado el lanzamiento oficial de Vue.js 3.0 "One Piece". Esta nueva versión principal del framework proporciona un rendimiento mejorado, tamaños de paquete más pequeños, una mejor integración de TypeScript, nuevas API para abordar casos de uso a gran escala y una base sólida para iteraciones futuras.

La versión 3.0 representa más de 2 años de esfuerzos de desarrollo, con más de [30 RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs){:target="_blank" rel="nofollow,noreferrer"}, más de 2600 confirmaciones, [628 solicitudes de extracción](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+){:target="_blank" rel="nofollow,noreferrer"} de [99 colaboradores](https://github.com/vuejs/vue-next/graphs/contributors){:target="_blank" rel="nofollow,noreferrer"}, además de una enorme cantidad de trabajo de desarrollo y documentación fuera del repositorio principal.

Nos gustaría expresar nuestro más profundo agradecimiento a los miembros de nuestro equipo por asumir este desafío, a nuestros colaboradores por las solicitudes de extracción.

A nuestros [patrocinadores](https://github.com/vuejs/vue/blob/dev/BACKERS.md){:target="_blank" rel="nofollow,noreferrer"} por el apoyo financiero, y a la comunidad en general por participar en nuestras discusiones de diseño y brindar comentarios en las epre-versiones de lanzamiento.

Vue es un proyecto independiente creado y sostenido, por y para la comunidad y sin ella, Vue 3.0 no hubiera sido posible.

- [**Llevando más lejos el concepto de "framework progresivo"**](#llevando-más-lejos-el-concepto-de-framework-progresivo)
  - [**Módulos internos en capas**](#módulos-internos-en-capas)
  - [**Nuevas API para abordar la escala**](#nuevas-api-para-abordar-la-escala)
  - [**Mejoras de rendimiento**](#mejoras-de-rendimiento)
  - [**Integración con TypeScript mejorada**](#integración-con-typescript-mejorada)
  - [**Funciones experimentales**](#funciones-experimentales)
- [**Proceso de lanzamiento por fases**](#proceso-de-lanzamiento-por-fases)
  - [Soporte de migración e IE11](#soporte-de-migración-e-ie11)
- [**Próximos pasos en el desarrollo de Vue**](#próximos-pasos-en-el-desarrollo-de-vue)
- [**Probando Vue 3.0**](#probando-vue-30)

## **Llevando más lejos el concepto de "framework progresivo"**

Vue tenía una misión simple desde su humilde comienzo: Ser un framework accesible que cualquier persona pueda aprender rápidamente. A medida que nuestra base de usuarios creció, el framework también creció en alcance para adaptarse a las demandas crecientes.

Con el tiempo, el framework Vue evolucionó hasta convertirse en lo que llamamos un framework progresivo, ósea, un framework que puede adoptarse y aprenderse gradualmente. Al mismo tiempo que proporciona apoyo continuo a medida que el usuario afronta escenarios cada vez más exigentes.

Hoy en día, con más de 1.3 millones de usuarios en todo el mundo (entre comillas), vemos que Vue se usa en una amplia gama de escenarios, desde la páginas tradicionales para implementarles una mayor interactividad, hasta sobre aplicaciones completas de una sola página con cientos de componentes.

Vue 3 quiere llevar esa flexibilidad aún más lejos.

### **Módulos internos en capas**

El núcleo de Vue 3.0 aún se puede usar a través de una simple etiqueta `<script>`, pero sus componentes internoes se han reescrito desde cero n [una colección de módulos desacoplados](https://github.com/vuejs/vue-next/tree/master/packages){:target="_blank" rel="nofollow,noreferrer"}. La nueva arquitectura proporciona una mejor capacidad de mantenimiento y permite a los usuarios finales reducir hasta la mitad el tamaño del tiempo de ejecución.

Estos módulos también exponen la API de nivel inferior que desbloquean muchos casos de uso avanzados:

- El compilador admite transformaciones AST personalizadas para personalizaciones en tiempo de compilación (p. Ej. [, I18n en tiempo de compilación](https://github.com/intlify/vue-i18n-extensions){:target="_blank" rel="nofollow,noreferrer"})
- El motor de ejecución principal proporciona una API de primera clase para crear renderizados personalizados dirigidos a diferentes destinos de renderizado (por ejemplo , [dispositivos móviles nativos](https://github.com/rigor789/nativescript-vue-next){:target="_blank" rel="nofollow,noreferrer"} , [WebGL](https://github.com/Planning-nl/vugel) o [terminales](https://github.com/ycmjason/vuminal){:target="_blank" rel="nofollow,noreferrer"}). El renderizador DOM predeterminado se crea utilizando la misma API.
- El módulo [`@vue/reactivity`](https://github.com/vuejs/vue-next/tree/master/packages/reactivity){:target="_blank" rel="nofollow,noreferrer"} exporta funciones que brindan acceso directo al sistema de reactividad de Vue y se puede usar como un paquete independiente. Se puede usar para emparejarlo con otras soluciones de plantillas (por ejemplo, [lit-html](https://github.com/yyx990803/vue-lit){:target="_blank" rel="nofollow,noreferrer"}) e incluso en escenarios sin una interfaz de usuario.

### **Nuevas API para abordar la escala**

La API basada en objetos 2.x está prácticamente intacta en Vue 3. Sin embargo, la nueva versión 3.0 también presenta una [API de composición](https://v3.vuejs.org/guide/composition-api-introduction.html){:target="_blank" rel="nofollow,noreferrer"}, un nuevo conjunto API destinado a abordar los puntos débiles del uso de Vue en aplicaciones a gran escala.

La API de composición se basa en la API de reactividad y permite la composición lógica y la reutilización de manera similar a los ganchos de React, patrones de organización de código más flexibles y una inferencia de tipos más confiable que la API basada en objetos 2.x.

La API de composición también se puede usar con Vue 2.x a través del complemento [@ vue / composicion-api](https://github.com/vuejs/composition-api){:target="_blank" rel="nofollow,noreferrer"}, y ya existen bibliotecas de utilidades de composición para las API que funcionan tanto para Vue 2 como para Vue 3 (por ejemplo , [vueuse](https://github.com/antfu/vueuse){:target="_blank" rel="nofollow,noreferrer"} , [vue-composable](https://github.com/pikax/vue-composable){:target="_blank" rel="nofollow,noreferrer"}).

### **Mejoras de rendimiento**

Vue 3 ha demostrado [mejoras de rendimiento significativas con respecto](https://docs.google.com/spreadsheets/d/1VJFx-kQ4KjJmnpDXIEaig-cVAAJtpIGLZNbv3Lr4CR0/edit?usp=sharing){:target="_blank" rel="nofollow,noreferrer"} a Vue 2 en relación al tamaño de los paquetes (hasta un 41% más ligero), en el renderizado inicial (hasta un 55% más rápido), en las actualizaciones (hasta un 133% más rápido) y en el uso de memoria ( hasta un 54% menos).

En Vue 3, hemos adoptado el enfoque de "DOM virtual": El compilador de plantillas realiza optimizaciones agresivas y genera un código de función de renderizado que eleva el contenido estático, deja pistas de tiempo de ejecución para los tipos de enlace y, lo más importante, aplana los nodos dinámicos dentro una plantilla para reducir el costo del recorrido en tiempo de ejecución.

Por lo tanto, el usuario obtiene lo mejor de ambos mundos: rendimiento optimizado por el compilador a partir de plantillas o control directo a través de funciones de renderizado manual cuando el caso de uso lo requiere.

### **Integración con TypeScript mejorada**

El código base de Vue 3 está escrito en TypeScript, con definiciones de tipos generadas, probadas y empaquetadas automáticamente para que estén siempre actualizadas. La API de composición funciona muy bien con la inferencia de tipos.

Vetur, nuestra extensión oficial de VSCode, ahora es compatible con la expresión de plantilla y la verificación de tipos de accesorios aprovechando la escritura interna mejorada de Vue 3. Ah, y la escritura de Vue 3 es [totalmente compatible con TSX](https://github.com/vuejs/vue-next/blob/master/test-dts/defineComponent.test-d.tsx){:target="_blank" rel="nofollow,noreferrer"} si esa es tu preferencia.

### **Funciones experimentales**

Hemos propuesto [dos nuevas funciones](https://github.com/vuejs/rfcs/pull/182){:target="_blank" rel="nofollow,noreferrer"} para los componentes de archivos singulares (SFC, también conocidos como archivos `.vue`):

- [`<script setup>`: Usar Composition API dentro de SFC](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md){:target="_blank" rel="nofollow,noreferrer"}
- [`<style vars`: Variables CSS controladas por estados dentro de SFC](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-style-variables.md){:target="_blank" rel="nofollow,noreferrer"}

Estas funciones ya están implementadas y disponibles en Vue 3.0, pero se proporcionan solo con el propósito de recopilar comentarios. Seguirán siendo experimentales hasta que se fusionen las RFC.

También hemos implementado un componente `suspense` actualmente no documentado, que permite esperar en dependencias asíncronas anidadas (componentes asíncronos o componentes con `async setup()`) en el procesamiento inicial o cambio de rama.

Estamos probando e iterando sobre esta función con el equipo de Nuxt.js ( [Nuxt 3 está en camino](https://nuxtjs.slides.com/atinux/state-of-nuxt-2020){:target="_blank" rel="nofollow,noreferrer"} ) y probablemente la solidifiquemos en la próxima versión 3.1.

## **Proceso de lanzamiento por fases**

El lanzamiento de Vue 3.0 marca la línea de desarroll ode Vue. Si bien algunos de los subproyectos aún pueden necesitar más trabajo para alcanzar un estado estable (específicamente la integración del enrutador y Vuex en las herramientas de desarrollo).

También recomendamos a los autores de bibliotecas que comiencen a actualizar sus proyectos para que sean compatibles con Vue 3.

Se puede consultar la [Guía de bibliotecas de Vue 3](https://v3.vuejs.org/guide/migration/introduction.html#supporting-libraries){:target="_blank" rel="nofollow,noreferrer"} para obtener detalles sobre todos los subproyectos del framework.

### Soporte de migración e IE11

Hemos retrasado la compilación de migración (la compilación de v3 cy el comportamiento compatible con v2 +) y la compilación de IE11 debido a limitaciones de tiempo.

Nuestro objetivo es centrarnos en ellas en el cuarto trimestre de 2020. Por lo tanto, los usuarios que planean migrar una aplicación v2 existente o requieren El soporte de IE11 deben tener en cuenta esas limitaciones.

## **Próximos pasos en el desarrollo de Vue**

A corto plazo después del lanzamiento, nos centraremos en:

- Construcción de la migración.
- Soporte IE11.
- Integración del enrutador y Vuex en nuevas herramientas de desarrollo.
- Más mejoras en la inferencia del tipo de plantilla en Vetur.

Por el momento, los sitios web de documentación, las sucursales de GitHub y las etiquetas npm dist para los proyectos de orientación Vue 3 y v3 seguirán estando relevados al uso del agregado de `next`.

Esto significa que `npm install vue` aún instalará Vue 2.x y `npm install vue@next` instalará Vue 3. **Estamos planeando cambiar todos los enlaces de documentos, ramas y etiquetas dist a 3.0 por defecto para finales de 2020.**

Al mismo tiempo, hemos comenzado a planificar la versión 2.7, que será la última versión menor planificada de la línea de versiones 2.x. 2.7 respaldando mejoras compatibles con la versión 3 y emitir advertencias sobre el uso de las API que se eliminan o cambian en la versión 3 para ayudar con la posible migración.

Estamos planeando trabajar en la versión 2.7 en el primer trimestre de 2021, que se convertirá directamente en LTS al momento de su lanzamiento y con una vida útil y mantenimiento de 18 meses.

## **Probando Vue 3.0**

Para obtener más información sobre Vue 3.0, consulte nuestro [nuevo sitio web de documentación](https://v3.vuejs.org/){:target="_blank" rel="nofollow,noreferrer"}. Si ya es usuario de Vue 2.x, vaya directamente a la [Guía de migración](https://v3.vuejs.org/guide/migration/introduction.html){:target="_blank" rel="nofollow,noreferrer"}.

### **Relacionados** <!-- omit in toc -->

[🥇 ▷ Los 14 mejores framework de desarrollo de aplicaciones](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20/)

[▷ Anuncian la beta de Ionic que incluye al framework Vue](https://ciberninjas.com/beta-ionic-vue/)

[▷ 22 Mejores cursos gratis de programación web y móvil](https://ciberninjas.com/cursos-programacion-web-movil/)

[Los 100 Cursos de Programación GRATIS más nuevos](https://ciberninjas.com/cursos-udemy-programaci%C3%B3n-m%C3%A1s-actuales/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog oficial del framework de Vue 3.0](https://github.com/vuejs/vue-next/releases/tag/v3.0.0 "Blog oficial del framework de Vue 3.0"){:target="_blank" rel="nofollow,noreferrer"}

![Lanzamiento de Vue 3.0 "One Piece" el framework de javascript más de moda](/assets/img/blog/vue-3-ciberninjas.webp "Lanzamiento de Vue 3.0 "One Piece" el framework de javascript más de moda")