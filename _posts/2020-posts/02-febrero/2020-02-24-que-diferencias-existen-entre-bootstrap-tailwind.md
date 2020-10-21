---

author: rosepac
bootstrap: true
comments: false
tags:
- Framework CSS
- Bootstrap
- Tailwind
thumbnail: /assets/img/lenguajes-vs/tailwindcss-vs-bootstrap-framework.webp
feature-img: /assets/img/lenguajes-vs/tailwindcss-vs-bootstrap-framework.webp
title: '▷ ¿Qué diferencias hay entre Boostrap Tailwind CSS?'
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

En los últimos tiempos, la batalla entre los frameworks CSS es terrible, y Tailwind CSS ha ganado mucha reputación entre los desarrolladores front end, siendo un numeroso grupo, los que tras probarlo deciden seguir usándolo como framework CSS de referencia dentro de sus "stacks", pilas o cajas de utilidades; llámenlo como prefieran.

En este artículo se van a explorar las diferencias entre Bootstrap y Tailwind para tratar de transmitir la mayor información posible hacía las personas que aún tengan dudas sobre que herramienta utilizar.

- [**El framework Bootstrap**](#el-framework-bootstrap)
- [**El framework Tailwind CSS**](#el-framework-tailwind-css)
- [**Desarrollando con Bootstrap**](#desarrollando-con-bootstrap)
- [**Desarrollando con Tailwind**](#desarrollando-con-tailwind)
- [**Creación de un botón sencillo**](#creación-de-un-botón-sencillo)
  - [Creando un botón principal con Bootstrap](#creando-un-botón-principal-con-bootstrap)
  - [Creando un botón principal con Tailwind CSS](#creando-un-botón-principal-con-tailwind-css)
- [**Diferencias en su base de componentes**](#diferencias-en-su-base-de-componentes)
- [**Diferencias en su carga y cantidad de ficheros**](#diferencias-en-su-carga-y-cantidad-de-ficheros)
- [**Diferencias entre sus comunidades**](#diferencias-entre-sus-comunidades)
- [Conclusión](#conclusión)

## **El framework Bootstrap**

El framework de Bootstrap fue lanzado inicialmente el 19 de Agosto de 2011, ya hace casi 9 años. Como curiosidad, contar que fue desarrollado por el equipo de desarrollo de Twitter y posteriormente, siguió siendo desarrollado y mantenido por Mark Otto, Jacob Thornton y otro pequeño grupo de desarrolladores.

En poco tiempo se convirtió en uno de los Frameworks CSS más populares y actualmente es el sexto proyecto más destacado en GitHub y sin lugar a dudas, se puede decir que miles y miles de desarrolladores y millones de proyectos lo incluyen en sus proyectos.

## **El framework Tailwind CSS**

Según la lista de contribuyentes del proyecto en Github, el proyecto fue desarrollado originalmente por Adam Wathan y su primer lanzamiento fue del 22 de octubre de 2019.

Se describe como un framework CSS de "primera utilidad" y afirman que a la hora de su utilización: El desarrollo, es mucho más fluido, al implementar su "nuevo método".

## **Desarrollando con Bootstrap**

Bootstrap se basa en una metodología de CSS orientada a objetos, que se ha convertido en una de las formas más populares de administrar las hojas de estilo y sus clases. Antes de OOCSS, se creaban las clases y estilos por separado para cada uno de los componentes que requerían un aspecto diferente. Por ejemplo, si tenías 10 botones en una aplicación, se creaban 10 clases diferentes.

Con CSS orientado a objetos, en cambio, se ofrece la posibilidad de la reutilización; puesto que te ofrece muchas clases diferentes para cada tamaño y estilo de cada posible botón a crear.

Esto deriva en una amplia y extensa hoja de estilos estructura en "módulos" que ofrece una gran gama de posibilidades desde el inicio de un proyecto, sin la necesidad de tener que recurrir a generar varias clases constantemente para cada botón que deseas implementar con una leve modificación.

Aparte de esto, Bootstrap también incluye en su proyecto, a los preprocesadores CSS más populares. Como por ejemplo: SASS. Si aún no sabes lo que es SASS, así, malamente explicado: es un "pequeño truco" con el que se puede generar el código CSS de manera más rápida, a través de funciones y variables que posteriormente se transforman en el CSS.

Por ejemplo: Si tu color primario es el rojo, en un archivo CSS normal ese mismo color se va a repetir en todas las declaraciones. Con SASS, puede adjudicar esa propiedad a una variable, por lo que si una vez avanzado el proyecto deseas cambiar el color rojo, simplemente debes cambiarlo en un único punto del documento y ese cambio; se hará efectivo sobre toda la aplicación.

## **Desarrollando con Tailwind**

Desde el proyecto de Tailwind CSS se definen como un framework de "primera utilidad". ¿Qué significa esto? Pues que se supone que en vez de escribir mucho CSS, escribirás muchas clases para los elementos HTML.

En Tailwind CSS tienes clases para casi todos los tipos de márgenes, rellenos, fondos, tamaños de fuentes, familias de fuentes, colores de texto, sombras, etc.

## **Creación de un botón sencillo**

Ahora, echemos un vistazo a cómo el marcado de un botón primario difiere entre Bootstrap y Tailwind CSS:
<!-- contenido -->
### Creando un botón principal con Bootstrap

{% highlight js %}
<button type="button" class="btn btn-primary">Primary</button>
{% endhighlight %}

### Creando un botón principal con Tailwind CSS

{% highlight js %}
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

  Button

</button>
{% endhighlight %}

Como se puede comprobar el etiquetado es bastante más sencillo en el caso de Bootstrap, por lo que puede parecer poco comprensible el uso de Tailwind, ya que es más simple Bootstrap.

Ahora intentemos ojear la situación un poco más a fondo: ¿Si quisieras hacer que el botón sea un poco más pequeño en una página en particular? ¿O si deseas crear una clase de redimensionamiento completamente nueva solo para un caso exclusivo?

Dentro de ese escenario, usar Tailwinds puede ofrecer todo un abanico de clases extra y seguramente te facilitará la situación en cuestión; sin la necesidad de tocar el archivo de .CSS.

Otra gran característica que se puede apreciar en Tailwind CSS es el hecho de que se pueden establecer estados de desplazamientos, activos y de enfoque utilizando solamente clases. Esta es una característica que Bootstrap nunca ha implementado y que quizás; si te pueda ser de mucha utilidad.

Además, Tailwind también ofrece la posibilidad de crear clases como `.btn-blue` para componentes que se repitan muchas más veces a lo largo de otros archivos HTML. Partiendo únicamente de las clases de los componentes.

Por ejemplo:

{% highlight js %}
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
{% endhighlight %}

En lugar de SASS, Tailwind CSS utiliza POST-CSS y un archivo de configuración para configurar las variables y la hojas  de estilo. Se pueden agregar, eliminar o actualizar colores, espacios, fuentes, sombras, cualquier cosa que se te ocurra.

## **Diferencias en su base de componentes**

En este caso, hay que destacar a Bootstrap, puesto que existen un mayor y más amplio conjunto de componentes; entre los que se incluyen tarjetas, modales, acordeones, pestañas de navegación, etc.

Tailwind CSS solo tiene un puñado de componentes de acuerdo con su documentación, siendo la lista completa: Alertas, Botones, Tarjetas, Formas, Rejillas Flexbox y Navegación.

Son tan solo 7 "componentes" frente a los 21 que nos ofrece Bootstrap. En cambio, con Tailwind CSS tendrás el abanico de clases que citamos con anterioridad, ¿Recuerdas? Con el qué, convinándolas de forma adecuada. Serás capaz de crear cualquier tipo de componente que desees.

## **Diferencias en su carga y cantidad de ficheros**

Bootstrap tiene 4 archivos que se deben incluir en el proyecto para obtener todos los beneficios del Framework CSS por completo. Juntos suman hasta 308.25kb incluyendo jQuery, Popper.js, Bootstrap JS y el archivo CSS de Bootstrap.

En comparación, Tailwind CSS solo requiere un archivo base de .CSS que asciende a solamente 27kb. Es cierto que Bootstrap tiene un conjunto mucho más grande de componentes y funcionalidades, sin embargo, si no necesitas ciertos componentes como "modales" u acordeones, seguramente Tailwind puede ser una gran opción de cara a implementar un proyecto ligero.

## **Diferencias entre sus comunidades**

Durante estos 9 años, la comunidad de Bootstrap ha tenido tiempo suficiente para crecer de forma constante; y obviamente, en la actualidad es mu fácil encontrar personas con conocimientos sobre Bootstrap; casi en cualquier parte.

Siendo como es, el Framework CSS más popular del mundo. Siempre vas a tener un foro, herramientas, etc. Además, puedes encontrar incontables hilos en Stackoverflow respondiendo a casi cualquier pregunta que requieras ante cualquier posible problema.

En el caso de Tailwind CSS, por razones obvias -el corto tiempo de vida del proyecto- aún no existe un amplio comunidad; sin embargo, se ve que va creciendo día a día y la cantidad de herramientas y sitios web relacionados o donde se cita al framework; también van en aumento.

## Conclusión

En conclusión, la decisión de si elegir entre Tailwind CSS o Bootstrap debe basarse más en las necesidades personales de cada proyecto respecto a si existe la necesidad de usar bien un mayor número de estilos y componentes. O bien, una amplia gama mayor de clases ya, dígamos, prefabricadas.

No existe una ventaja clara de rendimiento o calidad de un framework sobre el otro, excepto el hecho de que Bootstrap todavía viene con un conjunto mucho más grande de componentes y por tanto, también pesa un pizca más.

Hasta aquí, otro días más y mejor.. Seguiré buscando artículos de interes como el presente, para pelearnos con traducirlos al español y difundir un poco más el desarrollo dentro del mundillo hispano. 🤞

### Relacionados <!-- omit in toc -->

[▷ 12+1 Mejores cursos gratis de Bootstrap](https://ciberninjas.com/cursos-bootstrap/ "Los mejores cursos gratis de Bootstrap")

[▷ 17 Mejores cursos gratis sobre CSS y preprocesadores CSS](https://ciberninjas.com/cursos-css-preprocesadores/)

[▷ Bootstrap 5: Nuevos cambios para el framework CSS](https://ciberninjas.com/bootstrap-5-alpha/)

[▷ Lanzados los iconos de Bootstrap](https://ciberninjas.com/bootstrap-iconos-version-1/)

[▷ Bootstrap 5 Iconos: Nueva versión Alpha](https://ciberninjas.com/bootstrap-iconos-alpha-5/)

> **Fuente**\: Traducción al español de [Themes Berg](https://themesberg.com/blog/design/tailwind-css-vs-bootstrap "Themes Berg"){:target="_blank" rel="nofollow,noreferrer"} 🤞

![¿Qué diferencias existen entre el framework de Boostrap y el framework de Tailwind CSS?](/assets/img/lenguajes-vs/tailwindcss-vs-bootstrap-framework.webp "¿Qué diferencias existen entre el framework de Boostrap y el framework de Tailwind CSS?")