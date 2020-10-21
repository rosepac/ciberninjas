---

author: rosepac
bootstrap: true
comments: false
tags:
- React
- Actualización
thumbnail: /assets/img/blog/react-release.webp
feature-img: /assets/img/blog/react-release.webp
title: '▷ React v17.0 Release Candidate: Sin nuevas funciones'
description: >-
  Primer Release Candidate para React 17, desde hace más de 2 años sin actualizaciones importantes, que es mucho tiempo incluso para nuestros estándares.
excerpt: >-
  Primer Release Candidate para React 17, desde hace más de 2 años sin actualizaciones importantes, que es mucho tiempo incluso para nuestros estándares.
canonical_URL: https://ciberninjas.com/react-17-release/
permalink: /react-17-release/
date: 2020-08-18 10:12:12
published: true

---

El 10 de Agosto, se publico el primer Release Candidate para React 17. Habiendo pasado dos años y medio desde el último lanzamiento importante anterior de React, lo que es mucho tiempo.

En esta publicación de blog, describiremos la función de esta versión principal, qué cambios se pueden esperar de la nueva versión.

- [**Sin nuevas funciones**](#sin-nuevas-funciones)
- [**Actualizaciones graduales**](#actualizaciones-graduales)
- [**Cambios en la delegación de eventos**](#cambios-en-la-delegación-de-eventos)
- [**Más cambios e información extra**](#más-cambios-e-información-extra)

## **Sin nuevas funciones**

La versión de React 17 es inusual porque no agrega ninguna característica nueva para desarrolladores. En cambio, esta versión se centra principalmente en facilitar la actualización de React.

Estamos trabajando activamente en las nuevas funciones de React, pero no forman parte de esta versión. El lanzamiento de React 17 es una parte clave de nuestra estrategia para implementarlos sin dejar a nadie atrás.

En particular, React 17 es una versión de "trampolín" que hace que sea más seguro incrustar un árbol administrado por una versión de React dentro de un árbol administrado por una versión diferente de React.

## **Actualizaciones graduales**

Durante los últimos siete años, las actualizaciones de React han sido "todo o nada". O te quedas con una versión anterior o actualizas toda tu aplicación a una nueva versión. No hubo intermedio.

Esto ha funcionado hasta ahora, pero estamos llegando a los límites de la estrategia de actualización de "todo o nada". Algunos cambios de API, por ejemplo, la desaprobación de la API de contexto heredado, son imposibles de realizar de forma automatizada.

Aunque la mayoría de las aplicaciones escritas hoy en día nunca las usan, aún las apoyamos en React. Tenemos que elegir entre admitirlos en React indefinidamente o dejar algunas aplicaciones en una versión anterior de React. Ambas opciones no son buenas.

Por eso queríamos ofrecer otra opción.

**React 17 permite actualizaciones graduales de React**. Cuando actualiza de React 15 a 16 (o, pronto, de React 16 a 17), generalmente actualizaría toda su aplicación a la vez. Esto funciona bien para muchas aplicaciones.

Pero puede volverse cada vez más desafiante si el código base se escribió hace más de unos años y no se mantiene activamente.

Y aunque es posible usar dos versiones de React en la página, hasta React 17 esto ha sido frágil y ha causado problemas con los eventos.

Estamos solucionando muchos de esos problemas con React 17. Esto significa que cuando salgan React 18 y las próximas versiones futuras, ahora tendrá más opciones.

La primera opción será actualizar toda la aplicación a la vez, como podría haber hecho antes. Pero también tendrá la opción de actualizar su aplicación pieza por pieza.

Por ejemplo, puede decidir migrar la mayor parte de su aplicación a React 18, pero mantener un cuadro de diálogo de carga diferida o una subruta en React 17.

Esto no significa que usted tiene que hacer mejoras graduales. Para la mayoría de las aplicaciones, actualizar todo a la vez sigue siendo la mejor solución. Cargar dos versiones de React, incluso si una de ellas se carga de forma perezosa a pedido, todavía no es ideal.

Sin embargo, para aplicaciones más grandes que no se mantienen activamente, esta opción puede tener sentido considerar, y React 17 permite que esas aplicaciones no se queden atrás.

Para habilitar las actualizaciones graduales, necesitamos realizar algunos cambios en el sistema de eventos React. React 17 es una versión importante porque estos cambios potencialmente se están rompiendo.

En la práctica, solo hemos tenido que cambiar menos de veinte componentes de más de 100.000, por lo que esperamos que la mayoría de las aplicaciones puedan actualizarse a React 17 sin demasiados problemas.

## **Cambios en la delegación de eventos**

Técnicamente, siempre ha sido posible anidar aplicaciones desarrolladas con diferentes versiones de React. Sin embargo, era bastante frágil debido a cómo funcionaba el sistema de eventos React.

En los componentes de React, generalmente escribe controladores de eventos en línea:

{% highlight js %}
<button onClick={handleClick}>
{% endhighlight %}

El DOM equivalente a este código es algo como:

{% highlight js %}
myButton.addEventListener('click', handleClick);
{% endhighlight %}

Sin embargo, para la mayoría de los eventos, React no los adjunta a los nodos DOM en los que los declara. En cambio, React adjunta un controlador por tipo de evento directamente en el nodo `document`.

A esto se le llama delegación de eventos. Además de sus beneficios de rendimiento en grandes árboles de aplicaciones, también facilita la adición de nuevas funciones como la reproducción de eventos.

React ha estado delegando eventos automáticamente desde su primer lanzamiento. Cuando un evento DOM se dispara en el documento, React determina a qué componente llamar, y luego el evento React "burbujea" hacia arriba a través de sus componentes. Pero detrás de escena, el evento nativo ya ha subido al nivel de `document`, donde React instala sus controladores de eventos.

Si tiene varias versiones de React en la página, todas registran controladores de eventos en la parte superior. Esto se rompe `e.stopPropagation():` si un árbol anidado ha detenido la propagación de un evento, el árbol externo aún lo recibirá.

Esto hizo que fuera difícil anidar diferentes versiones de React. Esta preocupación no es hipotética; por ejemplo, el editor de Atom se encontró con esto hace cuatro años.

Es por eso que estamos cambiando la forma en que React adjunta eventos al DOM debajo del capó.

En React 17, React ya no adjuntará controladores de eventos en el documentnivel. En cambio, los adjuntará al contenedor DOM raíz en el que se representa su árbol de React:

{% highlight js %}
const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
{% endhighlight %}

## **Más cambios e información extra**

Si deseas leer más en profundidad sobre todos los cambios en la nueva versión de React, que próximamente saldrá a la luz. No dudes en visitar [el blog oficial](https://reactjs.org/blog/2020/08/10/react-v17-rc.html){:target="_blank" rel="nofollow,noreferrer"}

### **Relacionados** <!-- omit in toc -->

[🥇 ▷ React: ¿Cómo aprender React?](https://ciberninjas.com/react/)

[▷ 10 Herramientas de productividad para desarrolladores React](https://ciberninjas.com/herramientas-productividad-react-2020/)

[🥇 ▷ React Native: Aprende todo sobre React Native](https://ciberninjas.com/react-native/)

[🥇 Los 14 mejores framework de desarrollo de aplicaciones 2020](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog oficial de React](https://reactjs.org/blog/2020/08/10/react-v17-rc.html){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.