---

author: rosepac
bootstrap: true
comments: false
tags:
- Aplicaciones Multiplataforma
- Ionic
- Vue
thumbnail: /assets/img/blog/aplicaciones-vue-ionic-cn.webp
feature-img: /assets/img/blog/aplicaciones-vue-ionic-cn.webp
title: '▷ Construyendo tu primera aplicación de Ionic y Vue'
description: >-
  Luego de la noticia, en la que se habla del lanzamiento de Ionic Vue, ahora viene el primer tutorial: Creando tu primera aplicación Ionic para Ionic Vue.
excerpt: >-
  Luego de la noticia, en la que se habla del lanzamiento de Ionic Vue, ahora viene el primer tutorial: Creando tu primera aplicación Ionic para Ionic Vue.
canonical_URL: https://ciberninjas.com/primera-app-ionic-vue/
permalink: /primera-app-ionic-vue/
date: 2020-10-09 19:01:02
last_modified_at: 
published: false

---

Luego de la noticia, en la que se [lanza la Beta del lanzamiento de Ionic Vue](https://ciberninjas.com/beta-ionic-vue/ "Anuncian la beta de Ionic que incluye al framework Vue"), ahora toca el primer tutorial: "Creando tu primera aplicación Ionic para Ionic Vue.

<!-- Si ya has probado la versión de Ionic para Angular o React de los tutoriales de Build Your First App, se sentirá como en casa con esta nueva guía. -->

Lo guía va, a través de los fundamentos del desarrollo de aplicaciones Ionic mediante la creación de una aplicación real paso a paso.

Después de completar el tutorial, transformarás la aplicación de inicio Tabs en una galería de fotos interactiva que se ejecuta en la web, iOS y Android, todo desde una misma base de código:

- [**¿Qué vamos a construir?**](#qué-vamos-a-construir)
- [**Va a ser Vue-tiful**](#va-a-ser-vue-tiful)

## **¿Qué vamos a construir?**

La aplicación Photo Gallery incluye la capacidad de tomar fotos con la cámara de su dispositivo, mostrarlas en una cuadrícula y almacenarlas permanentemente en el dispositivo.

Los puntos más destacados del tutorial, incluyen:

- Una base de código basada en Vue que se ejecuta en la web, iOS y Android utilizando [componentes de](https://ionicframework.com/docs/components){:target="_blank" rel="nofollow,noreferrer"} Ionic Framework [UI](https://ionicframework.com/docs/components){:target="_blank" rel="nofollow,noreferrer"}.
- Implementado como una aplicación móvil nativa de iOS y Android usando [Capacitor](https://capacitorjs.com/){:target="_blank" rel="nofollow,noreferrer"}, el tiempo de ejecución oficial de la aplicación nativa de Ionic.
- Funcionalidad de galería de fotos impulsada por las API de [cámara de](https://capacitorjs.com/docs/apis/camera){:target="_blank" rel="nofollow,noreferrer"} condensador, [sistema de archivos](https://capacitorjs.com/docs/apis/filesystem){:target="_blank" rel="nofollow,noreferrer"} y [almacenamiento](https://capacitorjs.com/docs/apis/storage){:target="_blank" rel="nofollow,noreferrer"}.

## **Va a ser Vue-tiful**

Lo que más me gusta de este tutorial es la cobertura de los conceptos de Vue 3, como la API de composición, las referencias reactivas y los ganchos del ciclo de vida, así como las características modernas de JavaScript como la desestructuración, el operador de descanso / propagación y ESModules.

Por ejemplo, para guardar las fotos en un almacenamiento permanente, se usa la [función de reloj](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch){:target="_blank" rel="nofollow,noreferrer"} Vue 3 para ver la matriz de fotos. Siempre que se modifica la matriz (en este caso, capturando o borrando fotos), `cachePhotos` se activa la función. No solo podemos reutilizar el código, sino que también garantiza que los datos de las fotos siempre se guarden, incluso si el usuario de la aplicación cierra o cambia a una aplicación diferente:

{% highlight js %}
// Use the Capacitor Storage API to cache photos
const cachePhotos = () => {
  Storage.set({
    key: "photos",
    value: JSON.stringify(photos.value)
  });
}

// Anytime the photos array is modified, cache photo data
watch(photos, cachePhotos);
{% endhighlight %}

Entonces, en resumen: Si estás buscando un tutorial totalmente práctico para iniciarte con Vue e Ionic, este es el tutorial perfecto.

### **Relacionados** <!-- omit in toc -->

[Ionic 4.0: Introducción Ionic para todos](https://ciberninjas.com/ionic-4-0-introduccion-ionic-para-todos/)

[¿Qué es Ionic? Un espectacular framework multiplataforma](https://ciberninjas.com/ionic-framework/)

[▷ Ionic y Angular alimentan las tiendas de aplicaciones](https://ciberninjas.com/ionic-angular-alta-implementacion/)

[▷ Anuncian la beta de Ionic que incluye al framework Vue](https://ciberninjas.com/beta-ionic-vue/)

[🥇 ▷ Los 14 mejores framework de desarrollo de aplicaciones ](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog oficial de Ionic](https://ionicframework.com/blog/new-tutorial-your-first-ionic-vue-app/ "Blog oficial de Ionic"){:target="_blank" rel="nofollow,noreferrer"}

![Construyendo tu primera aplicación de Ionic y Vue](/assets/img/blog/aplicaciones-vue-ionic-cn.webp "Construyendo tu primera aplicación de Ionic y Vue")