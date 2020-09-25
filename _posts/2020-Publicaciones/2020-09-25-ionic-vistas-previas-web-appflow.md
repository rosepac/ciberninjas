---

author: rosepac
bootstrap: true
comments: false
tags:
- Ionic
- Frameworks Multiplataforma
thumbnail: /assets/img/blog/ionic-appflow-web-previa.webp
feature-img: /assets/img/blog/ionic-appflow-web-previa.webp
title: '▷ Las nuevas vistas previas web de Ionic con Appflow'
description: >-
  El equipo de Ionic anuncia las nuevas vistas previas web en Appflow, la forma más sencilla de compartir en qué estás trabajando con compañeros de trabajo, partes interesadas y más.
excerpt: >-
  El equipo de Ionic anuncia las nuevas vistas previas web en Appflow, la forma más sencilla de compartir en qué estás trabajando con compañeros de trabajo, partes interesadas y más.
canonical_URL: https://ciberninjas.com/vista-previa-ionic-appflow/
permalink: /vista-previa-ionic-appflow/
date: 2020-09-25 20:18:32
last_modified_at: 
published: true

---

El equipo de Ionic presenta [las nuevas vistas previas web en Appflow](https://ionicframework.com/appflow){:target="_blank" rel="nofollow,noreferrer"}, la forma más fácil de compartir en lo que estás trabajando con tus compañeros de trabajo, y otras partes interesadas.

¿No estás familiarizado con Appflow? Appflow es una solución móvil para DevOps creada por Ionic, que te facilita la creación, implementación y actualización continua de la creación de tus aplicaciones móviles en iOS, Android y la web.

Con Appflow, puedes automatizar completamente el flujo de trabajo de desarrollo de tu equipo a la hora de crear nuevas aplicaciones y en el proceso de pasar desde la idea a la producción real.

Las vistas previas web representan el siguiente paso en la visión de dar una importancia mayor a la estrategia de desarrollo web.

- [**Vistas previas web: Ciclos de retroalimentación más rápidos**](#vistas-previas-web-ciclos-de-retroalimentación-más-rápidos)
- [**Requisitos previos para activar las URL de vista previa**](#requisitos-previos-para-activar-las-url-de-vista-previa)
- [**Creando una vista previa web en Appflow**](#creando-una-vista-previa-web-en-appflow)
- [**Compartiendo tus vistas previas en la web**](#compartiendo-tus-vistas-previas-en-la-web)
- [**¿Qué pasa con las características nativas?**](#qué-pasa-con-las-características-nativas)
- [**Empiece a utilizar las vistas previas web hoy mismo**](#empiece-a-utilizar-las-vistas-previas-web-hoy-mismo)

## **Vistas previas web: Ciclos de retroalimentación más rápidos**

Gran parte del proceso de desarrollo de las aplicaciones, especialmente en las aplicaciones móviles, implica obtener el diseño perfecto junto a un ajuste ideal de la experiencia del usuario. Para hacerlo de manera efectiva, se debe poner la aplicación en manos de sus usuarios; con las capturas de pantalla y las maquetas no es suficiente.

Tradicionalmente, los desarrolladores lograban esto probando y compartiendo sus aplicaciones a través de herramientas como TestFlight; o generando binarios de aplicaciones nativas y distribuyéndolos a través de certificados empresariales de iOS. Cuando se trata de iterar rápidamente, como modificar un cambio de diseño o corregir errores, es molesto verse ralentizado por culpa de las compilaciones nativas.

Afortunadamente, cuando combinas los componentes de la interfaz de usuario de Ionic Framework y las API multiplataforma de Capacitor, puedes desarrollar y probar el 99% de tu aplicación en el navegador. También conocido como el primer enfoque web, usted crea la aplicación localmente y luego la implementa en dispositivos móviles y se implementa posteriormente en las tiendas de las aplicaciones.

Con las vistas previas de Appflow, se va un paso más lejos, ahora serás capaz de compartir tu aplicación con el resto de tu equipo a través de una URL y con un único clic.

## **Requisitos previos para activar las URL de vista previa**

Por motivos de privacidad y seguridad, todas las aplicaciones existentes en Appflow tienen las vistas previas web deshabilitadas de forma predeterminada. Para activar las URL, deberás visitar la configuración de "Vista previa web" dentro del panel de control de tu aplicación y habilitarlas.

Una vez que estén habilitados, puede crear una vista previa web para una compilación de tus aplicaciones web dentro de Appflow específica.

## **Creando una vista previa web en Appflow**

Comienza navegando a la pantalla de Commits o Build, dentro de Appflow. Selecciona la opción "Crear una nueva compilación", elije "Web" como plataforma de destino, luego cambia el destino de la vista previa web antes de hacer clic en "Compilar".

Una vez que la compilación tenga éxito, podrá hacer clic en el icono del ojo en la lista de compilaciones para ver esa vista previa web generada.

## **Compartiendo tus vistas previas en la web**

La revisión individual de las vistas previas web es útil, a la hora de realizar iteraciones rápidas, pero el poder real de las vistas previas web de Appflow se deriva de las capacidades nacidas a través de la colaboración con el resto de tu equipo.

Algunas ideas de colaboración para los equipos incluyen:

- Iniciar una revisión de UX / UI con su equipo de diseño.
- Mostrar un prototipo interactivo a su Gerente de Producto.
- Verificar que se haya corregido un error con su equipo de QA.
- Demostrar el trabajo en progreso con sus clientes o partes interesadas.

Compartir una vista previa web es fácil: Solamente debes hacer Clic en el botón "Compartir" de una vista previa web en la parte superior derecha, luego "Copiar al portapapeles" y posteriormente, cualquiera que tenga la URL copiada podrá ver la aplicación al instante.

Alternativamente, puedes escanear el código QR que se muestra en la Vista previa web con la aplicación móvil de tu cámara en un dispositivo de iOS o Android, y eso abrirá la aplicación en el navegador de tu teléfono.

Las URL de vista previa web son públicas y cualquiera que tenga el enlace puede acceder a ellas.

## **¿Qué pasa con las características nativas?**

Dado que las vistas previas web se ejecutan en un navegador web, las API nativas o los complementos no funcionarán. Como práctica recomendada, recomendamos una "programación defensiva" para manejar las diferencias entre la web y las plataformas nativas utilizando Capacitor o la API de la plataforma del Framework de Ionic.

La propiedad `isNative` del Capacitor detecta si la aplicación se está ejecutando en Android o en iOS:

{% highlight js %}
if (Capacitor.isNative) {
   // call native plugin
} else {
  // handle on the web
}
{% endhighlight %}

Alternativamente, puedes detectar la aplicación que se ejecuta en dispositivos móviles con la API de la plataforma:

{% highlight js %}
if (this.platform.is("hybrid")) {
   // call native plugin
} else {
   // handle on the web
}
{% endhighlight %}

## **Empiece a utilizar las vistas previas web hoy mismo**

Las vistas previas web representan la siguiente fase del objetivo de Appflow de Capacitar para mejorar el flujo de trabajo de los desarrolladores web a la hora de crear aplicaciones a escala. Desarrolle la mayoría de sus aplicaciones en el navegador, compártalas con las partes interesadas para obtener comentarios tempranos y luego impleméntelas en dispositivos móviles nativos cuando esté listo.

Las vistas previas web están disponibles en todos los planes de Appflow. Cree una vista previa web desde Appflow o [cree una nueva aplicación Ionic en minutos](https://ionicframework.com/start){:target="_blank" rel="nofollow,noreferrer"} ahora mismo.

### **Relacionados** <!-- omit in toc -->

[Ionic 4.0: Introducción Ionic para todos](https://ciberninjas.com/ionic-4-0-introduccion-ionic-para-todos/)

[¿Qué es Ionic? Un espectacular framework multiplataforma](https://ciberninjas.com/ionic-framework/)

[🥇 ▷ Los 14 mejores framework de desarrollo de aplicaciones](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20/)

[▷ Anuncian la beta de Ionic que incluye al framework Vue](https://ciberninjas.com/beta-ionic-vue/)

[▷ Ionic y Angular alimentan las tiendas de aplicaciones](https://ciberninjas.com/ionic-angular-alta-implementacion/)

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog oficial del Framework de Aplicaciones Multiplataforma Ionic](https://ionicframework.com/blog/announcing-web-previews-in-appflow/ "Blog oficial del Framework de Aplicaciones Multiplataforma Ionic"){:target="_blank" rel="nofollow,noreferrer"}

![Las nuevas vistas previas web de Ionic con Appflow. El equipo de Ionic anuncia las nuevas vistas previas web en Appflow, la forma más sencilla de compartir en qué estás trabajando con compañeros de trabajo, partes interesadas y más.](/assets/img/blog/ionic-appflow-web-previa.webp "Las nuevas vistas previas web de Ionic con Appflow. El equipo de Ionic anuncia las nuevas vistas previas web en Appflow, la forma más sencilla de compartir en qué estás trabajando con compañeros de trabajo, partes interesadas y más.")