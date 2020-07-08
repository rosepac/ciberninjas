---

author: rosepac
bootstrap: true
comments: false
tags:
- Bootstrap
- Iconos
categories:
- Framework CSS
thumbnail: /assets/img/2020-news/donb-iconos.webp
feature-img: /assets/img/2020-news/donb-iconos.webp
title: '▷ Bootstrap 5 Iconos: Nueva versión Alpha'
description: >-
  Sale a la luz la quinta y última versión alfa de Bootstrap Iconos. Después de la versión alfa de hoy, llegará una versión final, definitiva y estable.
excerpt: >-
  Sale a la luz la quinta y última versión alfa de Bootstrap Iconos. Después de la versión alfa de hoy, llegará una versión final, definitiva y estable.
canonical_URL: https://ciberninjas.com/bootstrap-iconos-alpha-5/
permalink: /bootstrap-iconos-alpha-5/
date: 2020-07-02 13:01:32
last_modified_at: 
published: true

---

La nueva versión de los iconos de Bootstrap 5 agregará casi 300 iconos nuevos, haciendo que el número final resultante de iconos incluidos en la librería sobrepase los 1.000 iconos. Se añadirán nuevos iconos de calendario para utilizar a la hora de agregar eventos y rangos de fechas, también un amplio conjunto de nuevos íconos de teléfonos y de nuevos dispositivos e íconos dedicados a representar elementos de hardware, docenas de nuevas insignias y muchos elementos más.

![Sale a la luz la quinta y última versión alfa de Bootstrap Iconos. Después de la versión alfa de hoy, llegará una versión final, definitiva y estable.](/assets/img/2020-news/donb-iconos.webp "Sale a la luz la quinta y última versión alfa de Bootstrap Iconos. Después de la versión alfa de hoy, llegará una versión final, definitiva y estable.")

Luego de las anteriores versiones de Boostrap 5 Alpha, no solamente se incluirán nuevos iconos, sino que también se incluirán docenas de correcciones y mejoras en los iconos de Bootstrap ya existentes.

Se han mejorado las rutas para reducir el tamaño de los archivos de iconos. Además, se ha actualizado la secuencia de comandos para el procesamiento de los iconos, lo que en futuras actualizaciones, permitirá crear íconos de varias dimensiones en vez de un único tamaño de 16x16 predeterminado.
<!-- https://w3bits.com/svg-sprites/ -->

Se ha gregado un nuevo sprite `bootstrap-icons.svg`. Para aquellos nuevos en los sprites SVG, un sprite te permite cargar un solo fragmento de forma activa desde una imagen, sin la necesidad de cargar todo el svg por completo.

> **¿Qué es sprite svg?** Un sprite consiste básicamente en incluir varios gráficos diferentes dentro de una misma imagen, que a la hora de verse representada, hace que se muestre una única parte de la imagen a través de indicarlo de la forma adecuada a través de los elementos CSS e incluso Javascript.
{: .notice--info}

Lo siguiente, es una muestra de cómo funcionarán los iconos de Bootstrap una vez importados:

```
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#heart-fill"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#toggles"/>
</svg>
<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="bootstrap-icons.svg#shop"/>
</svg>
```

La característica más importante que llegará en la versión estable de los iconos de Bootstrap, serán las fuentes web de iconos. Si bien las fuentes de iconos son excelentes por varias razones a la hora de la implementación, debes de tener en cuenta de que no son la opción más accesible para los usuarios.

Los iconos cargados a través de archivos SVG proporcionan más opciones de estilos y control, y le permiten ser accesibles mediante roles `aria` y elementos de <title>.

Desde Bootstrap prometen seguir trabajando para mejorar la implementacion de los iconos cada vez e intentar minimizar el código necesario para el uso de los mismos.

Solamente nos queda, ¡Esperar a la versión de los iconos estables de Bootstrap!

[🔎 Prueba todos los Iconos de Bootstrap](https://icons.getbootstrap.com/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[📋 Código de los Iconos en Github](https://github.com/twbs/icons/releases/tag/v1.0.0-alpha5){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🎁 Visita la Tienda de Ciberninjas 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}