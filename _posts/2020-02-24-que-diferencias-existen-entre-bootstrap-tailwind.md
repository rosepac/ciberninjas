---

author_profile: true
comments: true
classes: wide
tags:
- Bootstrap
- Tailwind CSS
categories:
- Framework CSS
header:
  teaser: /assets/images/lenguajes-vs/tailwindcss-vs-bootstrap-framework.webp
title: '🎨 ▷ ¿Qué diferencias existen entre el framework de Boostrap y el framework de Tailwind CSS?'
description: >-
  Vamos a repasar las diferencias existentes entre estos dos frameworks CSS desde el punto de vista de conocer cual de los dos es más útil
excerpt: >-
  Vamos a repasar las diferencias existentes entre estos dos frameworks CSS desde el punto de vista de conocer cual de los dos es más útil
canonical_URL: https://ciberninjas.com/que-diferencias-existen-entre-bootstrap-tailwind/
permalink: /que-diferencias-existen-entre-bootstrap-tailwind/
date: 2020-02-24 17:42:32
last_modified_at: 
published: true

---

![¿Qué diferencias existen entre el framework de Boostrap y el framework de Tailwind CSS?](/assets/images/lenguajes-vs/tailwindcss-vs-bootstrap-framework.webp "¿Qué diferencias existen entre el framework de Boostrap y el framework de Tailwind CSS?")

En los últimos tiempos Tailwind CSS ha ganado mucha reputación entre los desarrolladores front end, siendo muchos, los que tras probarlo deciden seguir usándolo como framework CSS de referencia dentro de sus "stacks", pilas o cajas de utilidades; llamenlo como prefieran. En este artículo se van a explorar las diferencias entre Bootstrap y Tailwind para tratar de transmitir la mayor información posible hacía las personas que aún tengan dudas sobre que herramienta utilizar.

## Bootstrap

El framework de Bootstrap fue lanzado inicialmente el 19 de Agosto de 2011, ya hace casi 9 años. Como curiosidad, contar que fue desarrollado a lo largo de un evento denominado Hackaton por el equipo de desarrollo de Twitter y posteriormente, siguio siendo desarrollado y mantenido por Mark Otto, Jacob Thornton y otro pequeño grupo de desarrolladores.

En poco tiempo se convirtió en uno de los Frameworks CSS más populares y actualmente es el sexto proyecto más destacado en GitHub y sin lugar a dudas, podemos decir que millones de desarrolladores o al menos proyectos; lo están utilizando por todo el mundo.

## Tailwind CSS

Según la lista de contribuyentes del proyecto en Github, el proyecto fue desarrollado originalmente por Adam Wathan y su primer lanzamiento fue del 22 de octubre de 2019.

Se describe como un framework CSS de "primera utilidad" y afirman que el desarrollo, es más rápido así, con su nuevo método.

## Desarrollando con Bootstrap

Bootstrap se basa en una metodología de CSS orientada a objetos, que se ha convertido en una de las formas más populares de administrar las hojas de estilo y sus clases. Antes de OOCSS, se creaban las clases y estilos por separada para cada uno de los componentes que requieriese un aspecto diferente. Por ejemplo, si tenías 10 botones en una aplicación, se creaban 10 clases diferentes.

Con CSS orientado a objetos, en cambio, se amplia la gama de utilidad; puesto que te ofrece muchas clases diferentes para cada tamaño y estilo de cada posible botón a crear. Esto deriva en una amplia y extensa hoja de estilos estructura en "módulos" que ofrece una gran gama de posibilidades desde el inicio de un proyecto, sin la necesidad de tener que recurrir a generar varias clases constantemente para cada botón que deseas hacer más pequeño o de diferente color.

Aparte de esto, Bootstrap también está incluyendo a los preprocesadores CSS más populares; como por ejemplo: Sass. Si aún no sabes lo que es Sass, rápidamente explicado; es una pequeña fórmula con la que puedes generar el código CSS de manera más rápida, a través de funciones y variables que posteriormente se transforman en el CSS.

Por ejemplo: Si tu color primario es el rojo, en un archivo CSS normal ese mismo color se va a repetir en todas las declaraciones. Con Sass, tales propiedades pueden convertirse en variables, por lo que si desea cambiar el color rojo, simplemente puedes cambiarlo en un único punto del documento y ese cambio; servirá para toda la aplicación.

## Desarrollando con Tailwind

Tailwind CSS se definen como un framework de "primera utilidad". ¿Qué significa eso? Pues que se supone que en vez de escribir mucho CSS, escribirás muchas clases para los elementos HTML. En Tailwind CSS tienes clases para casi todo tipo de márgenes, relleno, fondos, tamaños de fuente, familias de fuentes, colores de texto, sombras, etc.

Echemos un vistazo a cómo el marcado de un botón primario difiere de Bootstrap y Tailwind CSS:
<!-- contenido -->
## Botón principal de Bootstrap

```
<button type="button" class="btn btn-primary">Primary</button>
```

## Botón de Tailwind CSS

```
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

  Button

</button>
```

Como se puede comprobar el etiquetado es bastante más sencillo en el caso de Bootstrap, por lo que puede parecer poco comprensible el uso de Tailwind, ya que es más simple. Intentemos ojear una situación diferente: ¿Si quisieras hacer que el botón sea un poco más pequeño en una página en particular? ¿Deseas crear una clase de dimensionamiento completamente nueva solo para ese caso exclusivo? En ese escenario, usar Tailwinds que te ofrece todas esas clases extra, seguramente te facilitaría la situación y ni siquiera tendrías que tocar el archivo .CSS.

Otra gran característica que se puede apreciar en Tailwind CSS es el hecho de que se pueden establecer estados de desplazamiento, activos y de enfoque utilizando solamente clases. Esta es una característica que Bootstrap nunca ha implementado y que quizás; si te puede ser de mucho utilidad.

Además, Tailwind también ofrece la posibilidad de crear clases como `.btn-blue` para componentes que se repiten muchas más veces a lo largo de otros archivos HTML solamente usando las clases de los componentes.

Por ejemplo:

```
<!-- Extracting component classes: -->
<button class="btn btn-blue">
  Button
</button>

<style>

  .btn {

    @apply font-bold py-2 px-4 rounded;
  }

  .btn-blue {

    @apply bg-blue-500 text-white;
  }

  .btn-blue:hover {

    @apply bg-blue-700;
  }

</style>
```

En lugar de Sass, Tailwind CSS utiliza post-css y un archivo de configuración para configurar las variables y la hojas  de estilo. Se pueden agregar, eliminar o actualizar colores, espacios, fuentes, sombras, cualquier cosa que se te ocurra.

## Conjunto base de componentes

En este caso, hay que destacar a Bootstrap, puesto que existen un mayor y más amplio de conjunto de componentes; entre los que se incluyen tarjetas, modales, acordeones, pestañas de navegación, etc. Tailwind CSS solo tiene un puñado de componentes de acuerdo con su documentación, siendo la lista completa: Alertas, Botones, Tarjetas, Formas, Rejillas Flexbox y Navegación.

Son 7 "componentes" frente a los 21 existentes en Bootstrap. Sin embargo, Tailwind CSS tiene muchas más clases de utilidad que Bootstrap y, al usarlas, puede crear cualquier tipo de componente que desees.

## Ficheros

Bootstrap tiene 4 archivos que se deben incluir en el proyecto para obtener todos los beneficios del Framework CSS por completo. Juntos suman hasta 308.25kb incluyendo jQuery, Popper.js, Bootstrap JS y el archivo CSS de Bootstrap.

En comparación, Tailwind CSS solo requiere el archivo de hoja de estilos base que asciende hasta 27kb. Es cierto que Bootstrap tiene un conjunto mucho más grande de componentes y funcionalidad, sin embargo, si no necesita ciertos componentes como modales o acordeones, tal vez Tailwind puede ser una mejor opción si deseas crear un proyecto realmente ligero.

## Comunidades

Durante estos 9 años, la comunidad de Bootstrap ha tenido tiempo suficiente para verse desarrollada de forma constante; alcanzo un número muy elevado de participantes. Siendo como es el Framework CSS más popular, tiene una gran comunidad de desarrolladores detrás, foros, herramientas, etc. Puedes encontrar innumerables hilos en Stackoverflow respondiendo a casi cualquier pregunta que puedas tener antes posibles problemas.

En el caso de Tailwind CSS, todavía existe un amplio margen de crecimiento, en cuanto a comunidad; sin embargo, está creciendo día a día y la cantidad de herramientas y sitios web relacionados también están aumentando constantemente.

## Conclusión

En conclusión, creo que decidir si elegir Tailwind CSS o Bootstrap debería basarse más en su preferencia personal con respecto a los estilos y clases de escritura. No existe una ventaja clara de rendimiento o calidad de un framework sobre el otro, excepto el hecho de que Bootstrap todavía viene con un conjunto mucho más grande de componentes.

Al final del día, te recomiendo que pruebes Tailwind CSS y veas si la primera forma de crear interfaces de usuario para la web es una forma preferida de trabajar.

### Fuente

**Fuente**\: [Themes Berg](https://themesberg.com/blog/design/tailwind-css-vs-bootstrap?ref=dailydevlinks.com ""){:target="_blank"}
{: .notice--info}
