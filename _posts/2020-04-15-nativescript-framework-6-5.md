---
title: "▷ Novedades de NativeScript 6.5"
description: "Vamos a conocer los cambios que nos ofrece la nueva versión del Framework NativeScript. Respecto a sus componentes y nuevas características de cara al futuro."
excerpt: "Vamos a conocer los cambios que nos ofrece la nueva versión del Framework NativeScript. Respecto a sus componentes y nuevas características de cara al futuro."
date: 2020-04-15 14:01:00 +0100
canonical_URL: https://ciberninjas.com/nativescript-framework-6-5/
permalink: /nativescript-framework-6-5/
published: true
tags:
  - Framework Multiplataforma
  - NativeScript
  - Kotlin
thumbnail: /assets/img/blog/nativescript-app-1.webp
feature-img: /assets/img/blog/nativescript-app-1.webp
---

¡Bienvenido a otro lanzamiento del framework de desarrollo de aplicaciones multiplataforma NativeScript! La versión 6.5 de NativeScript ofrece algunos importantes cambios.

![](/assets/img/blog/nativescript-app-1.webp "Novedades de NativeScript 6.5")

Antes de nada debemos actualizar nuestra versión de NativeScript, a la nueva versión 6.5:

```
**npm** install -g nativescript
```

<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/nativescript-framework-6-5/#1-creación-dinámica-de-pestañas-y-navegación-inferior" title="Creación dinámica de pestañas y navegación inferior"><strong>Creación dinámica de pestañas y navegación inferior</strong></a></li>
    <li><a href="/nativescript-framework-6-5/#2-nuevas-propiedades-de-estilo-en-tabstrip" title="Nuevas propiedades de estilo en TabStrip"><strong>Nuevas propiedades de estilo en TabStrip</strong></a></li>
    <li><a href="/nativescript-framework-6-5/#3-opciones-avanzadas-de-estilo-en-pestañas-de-ios" title="Opciones avanzadas de estilo en pestañas de iOS"><strong>Opciones avanzadas de estilo en pestañas de iOS</strong></a></li>
    <li><a href="/nativescript-framework-6-5/#4-doubletapgestureeventdata" title="DoubleTapGestureEventData"><strong>DoubleTapGestureEventData</strong></a></li>
    <li><a href="/nativescript-framework-6-5/#5-soporte-experimental-de-kotlinjs" title="Soporte experimental de KotlinJS"><strong>Soporte experimental de KotlinJS</strong></a></li>
  </ol>
</nav>
</details>

> 🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [recomendaciones Ciberninjas](https://kutt.it/cibercursos-recomienda)
{: .notice--danger}

A continuación, intentaremos revisar los cambios más importantes de esta nueva versión, uno a uno..

## **1. Creación dinámica de pestañas y navegación inferior**

Los componentes `Tabs`y `BottomNavigation` se introdujeron como componentes beta en NativeScript 6.1. Con esta versión, ambos componentes están ampliando aún más su funcionalidad al proporcionar medios para crearlos mediante la programación del propio código.

Para admitir la creación dinámica de los componentes, se introdujeron dos nuevas propiedades como parte del subcomponentes  `TabStrip`. El primero es el `iconSource` que se usa para crear mediante programación el ícono `TabStrip` (que admite un archivo de recursos vía `res://`, un archivo local vía `~/` y una fuente de ícono vía `font://`). Se llama a la segunda propiedad `iconClass` y su propósito es establecer la clase CSS que se aplicará al icono (imprescindible si desea utilizar una fuente de icono con `font://`).

Ejemplo para la creación dinámica de `Tabs`:

`````
let tabs = new Tabs();
let myTabStrip = new TabStrip();

let tabStripItem1 = new TabStripItem();
tabStripItem1.title = "Tab 1";
tabStripItem1.iconSource = `font://${String.fromCharCode(0xf053)}`;
tabStripItem1.iconClass = "fas"; // e.g., Font Awesome
let tabStripItem2 = new TabStripItem();
tabStripItem2.title = "Tab 2";
tabStripItem2.iconSource = `font://${String.fromCharCode(0xf070)}`;
tabStripItem2.iconClass = "fas"; // e.g., Font Awesome

myTabStrip.items = [tabStripItem1, tabStripItem2];

let tabContentItem1 = new TabContentItem();
tabContentItem1.content = createContent("Content 1");
let tabContentItem2 = new TabContentItem();
tabContentItem2.content = createContent("Content 2");

let contentItems = [tabContentItem1, tabContentItem2];   

tabs.tabStrip = myTabStrip;

// Note: The number of content items must be equal to the number of strip items
tabs.items = contentItems; 
`````

## **2. Nuevas propiedades de estilo en TabStrip**

Estamos presentando dos nuevas propiedades para el componente `TabStrip`: **selectedItemColor** y **unSelectedItemColor**. La razón para introducir estas propiedades es tener la capacidad de modificar fácilmente el color del icono `TabStrip` y el texto de los elementos. Hacer esto también sigue las **Pautas de diseño de materiales** para que el icono y el color del texto sean los mismos.

Usar estas nuevas propiedades es bastante fácil. Supongamos que tenemos u componente simple `Tabs` y queremos hacer el selector rojo `selectedItemColor` o el selector en verde `unSelectedItemColor`:

`````
<Tabs selectedIndex="1">
    <TabStrip selectedItemColor="red" unSelectedItemColor="green">
            ...
    </TabStrip>
</Tabs>
`````
Cuando creemos nuestra aplicación, observaremos que el icono y el texto tendrán los colores especificados establecidos a través del framework.

## **3. Opciones avanzadas de estilo en pestañas de iOS**

Antes de la versión 6.5, el componente `Tabs` tenía las posibilidades de estilo limitadas bajo el soporte de iOS. Ahora las opciones de estilo en iOS se amplían enormemente al proporcionar una propiedad para la alineación de la tira de pestañas y también al proporcionar nuevas opciones para aplicar un estilo CSS extendido.

Para cambiar la alineación de `TabStrip`, establezca la propiedad **iOSTabBarItemsAlignment** del componente **Tabs**.

`````
<!-- justify is now the defealt value for iOSTabBarItemsAlignment property -->
<Tabs iOSTabBarItemsAlignment="justify">
`````

La nueva propiedad admite los siguientes valores: 

- **leading**: los elementos de la pestaña están alineados a la izquierda.
- **justified**: la tira de pestañas se divide por igual para todos los elementos de pestañas.
- **center**: los elementos de las pestañas están alineados en el centro.
- **centerSelected**: los elementos de la pestaña se mueven para hacer que la pestaña seleccionada esté en el centro.

La propiedad anterior ahora proporcionan medios para cambiar la `font`, `background-color`, `color`, y `TextTransform`. Tenga en cuenta que hay algunas limitaciones:

- Los tabbar de iOS `MDCTabBar` sólo admiten dos estilos de los elementos de barra de pestañas - `normal` y `selected`, lo que significa que no se puede tener diferentes estilos de dos elementos con el mismo estado normal.
- Los valores `TextTransform` admitidos para `TabStrip` son `none`, `initial`y `uppercase`.
- Si `iOSTabBarItemsAlignment` está configurado en algo diferente a `justify` y se desea establecer el fondo del elemento seleccionado, puede lograrlo configurando el estilo `:active` del elemento `TabStrip`, pero el indicador de selección de resaltado no se mostrará en ese caso.

## **4. DoubleTapGestureEventData**

Este es un cambio impulsado por la comunidad (¡gracias a [MCurran16](https://github.com/MCurran16){:target="_blank" rel="nofollow,noreferrer"}!) Se han extendido los datos de eventos de doble clic que hasta ahora eran de tipo genérico (`GestureEventData`). El recién introducido `DoubleTapGestureEventData` amplía los datos comunes al proporcionar dos métodos para acceder a las coordenadas del evento de doble toque desencadenado. Los métodos son `getX()` y `getY()` que como te puedes imaginar, devolverán las coordenadas X e Y para la interacción actual. Los valores están en píxeles del dispositivo según el sistema de coordenadas de la plataforma específico.

## **5. Soporte experimental de KotlinJS**

Con esta versión, continuamos apoyando a Kotlin, pero esta vez en el lado frontal del desarrollo de aplicaciones. Estamos presentando soporte *experimental* para escribir aplicaciones [NativeScript](https://kotlinlang.org/docs/reference/js-overview.html){:target="_blank" rel="nofollow,noreferrer"} con [KotlinJS](https://kotlinlang.org/docs/reference/js-overview.html){:target="_blank" rel="nofollow,noreferrer"}.

Debemos decir que esto es altamente experimental y está sujeto a cambios pero, sin embargo, estaríamos felices de que la comunidad eche un vistazo a la [muestra HelloWorld con KotlinJS](https://github.com/NativeScript/template-hello-world-kt){:target="_blank" rel="nofollow,noreferrer"}. Por favor, siga las instrucciones en el archivo `README.md` para usarlo. Pronto más documentación adicional.

**Fuente**\: [NativeScript Blog Oficial](https://www.nativescript.org/blog/whats-new-in-nativescript-6-5 "Novedades de NativeScript 6.5: What´s new in nativescript 6.5") traducci&oacute;n al castellano por [Pablo &Aacute;lvarez Corredera](https://t.me/ciberninjas) bajo permiso del autor.
{: .notice--info}

### **Relacionados** <!-- omit in toc -->

[🥇 Los 14 Mejores Framework de Desarrollo de Aplicaciones Web y Móviles para 2020 👨‍💻](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20)

[🎨 ▷ ¿Qué diferencias existen entre el framework de Boostrap y el framework de Tailwind CSS?](https://ciberninjas.com/que-diferencias-existen-entre-bootstrap-tailwind/))

[▷ Angular 9: Nueva versión del Framework Javascript](https://ciberninjas.com/angular-version-9-liberado/)

[🚀 Ionic: ¿Qué es Ionic?](https://ciberninjas.com/ionic-framework/)

[▷ Comparación entre 3 de los frameworks web más de moda en 2020: Flutter, React Native y Xamarin](https://ciberninjas.com/comparacion-flutter-react-native-xamarin/)

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/programar/)

[👩‍💻 Aprender a Programar es Cada Vez Más Difícil](/aprender-a-programar-es-cada-vez-más-difícil/ "👩‍💻 Aprender a Programar es Cada Vez Más Difícil")
