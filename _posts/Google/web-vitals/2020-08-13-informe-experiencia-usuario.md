---

author: rosepac
bootstrap: true
comments: false
tags:
- Desarrollador Web
thumbnail: /assets/img/wall-web-dev.webp
feature-img: /assets/img/wall-web-dev.webp
title: '▷ ¿Qué es el informe de experiencia del usuario de Chrome?'
description: >-
  Conoce a fondo lo que es el informe de UI de los usuarios del navegador.
excerpt: >-
  Conoce a fondo lo que es el informe de UI de los usuarios del navegador.
canonical_URL: https://ciberninjas.com/informe-experiencia-usuario/
permalink: /informe-experiencia-usuario/
date: 2020-08-13 08:18:14
last_modified_at: 
published: true

---

El Informe de experiencia del usuario de Chrome proporciona métricas de experiencia del usuario sobre cómo los usuarios de Chrome en el mundo real experimentan los destinos populares en la Web.

## **La metodología del informa de experiencia de los usuarios de Google**

El Informe de la experiencia del usuario de Chrome se basa en la medición real del usuario de métricas clave de la experiencia del usuario en la web pública, agregadas a los usuarios que han optado por sincronizar su historial de navegación, no han configurado una frase de contraseña de sincronización y tienen habilitados los informes de estadísticas de uso . Los datos resultantes están disponibles a través de:

- PageSpeed ​​Insights, que proporciona métricas de experiencia de usuario a nivel de URL para URL populares que son conocidas por los rastreadores web de Google.
- Proyecto público de Google BigQuery , que agrega métricas de experiencia del usuario por origen, para todos los orígenes que son conocidos por los rastreadores web de Google, y se divide en varias dimensiones que se describen a continuación.

## **Las métricas del informa de experiencia de Google**

Las métricas proporcionadas por el Informe público de experiencia del usuario de Chrome alojado en Google BigQuery funcionan con API de plataforma web estándar expuestas por navegadores modernos y agregadas a la resolución de origen. Propietarios de sitios que desean un análisis más detallado (resolución a nivel de URL) y una perspectiva del rendimiento de su sitio y pueden usar las mismas API para recopilar datos detallados de medición de usuarios reales (RUM) para sus propios orígenes.

> Nota: Actualmente, el Informe de experiencia del usuario de Chrome se centra en el rendimiento de carga. Con el tiempo, esperamos agregar más métricas y dimensiones, tanto para brindar más información sobre la carga como otros factores críticos que más afectan la experiencia del usuario.

Para obtener orientación sobre qué métricas rastrear y optimizar, y las mejores prácticas sobre cómo interpretar los datos de medición del usuario real, consulte nuestra documentación de rendimiento centrada en el usuario.

## **Primera pintura**

Definido por Paint Timing API y disponible en Chrome M60 +.

> “First Paint informa el momento en que el navegador se renderizó por primera vez después de la navegación. Esto excluye la pintura de fondo predeterminada, pero incluye la pintura de fondo no predeterminada. Este es el primer momento clave que preocupa a los desarrolladores en la carga de la página: cuando el navegador ha comenzado a representar la página ".

## **Primera pintura con contenido**

Definido por Paint Timing API y disponible en Chrome M60 +.

> “First Contentful Paint informa el momento en que el navegador procesó por primera vez cualquier texto, imagen (incluidas las imágenes de fondo), lienzo no blanco o SVG. Esto incluye texto con fuentes web pendientes. Esta es la primera vez que los usuarios pueden comenzar a consumir contenido de la página ".

## **DOMContentLoaded**

Definido por la especificación HTML :

> "DOMContentLoaded informa el momento en el que el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los subtramas terminen de cargarse". - MDN .

## **onload**

Definido por la especificación HTML.

> "El evento de carga se activa cuando la página y sus recursos dependientes han terminado de cargarse". - MDN .

## **Retardo de la primera entrada**

"First Input Delay (FID) es una métrica importante centrada en el usuario para medir la capacidad de respuesta de la carga porque cuantifica la experiencia que sienten los usuarios cuando intentan interactuar con páginas que no responden; un FID bajo ayuda a garantizar que la página sea utilizable". - web.dev/fid/

## Pintura con contenido más grande

"Largest Contentful Paint (LCP) es una métrica importante centrada en el usuario para medir la velocidad de carga percibida porque marca el punto en la línea de tiempo de carga de la página cuando el contenido principal de la página probablemente se haya cargado; un LCP rápido ayuda a asegurar al usuario que la página está útil." - web.dev/lcp/

## **Cambio de diseño acumulativo**

> "Cumulative Layout Shift (CLS) es una métrica importante centrada en el usuario para medir la estabilidad visual porque ayuda a cuantificar la frecuencia con la que los usuarios experimentan cambios de diseño inesperados; un CLS bajo ayuda a garantizar que la página sea agradable". - web.dev/cls/

## **Tiempo hasta el primer byte**

“El tiempo hasta el primer byte (TTFB) es una medida que se utiliza como indicación de la capacidad de respuesta de un servidor web u otro recurso de red. TTFB mide la duración desde que el usuario o cliente realiza una solicitud HTTP hasta el primer byte de la página que recibe el navegador del cliente. Este tiempo se compone del tiempo de conexión del socket, el tiempo necesario para enviar la solicitud HTTP y el tiempo necesario para obtener el primer byte de la página ". - Wikipedia

## **Permisos de notificación**

Definido por la API de notificaciones y explicado por MDN.

> “La API de notificaciones permite que las páginas web controlen la visualización de las notificaciones del sistema al usuario final. Estos están fuera de la ventana de contexto de navegación de nivel superior, por lo que se pueden mostrar incluso cuando el usuario ha cambiado de pestaña o se ha movido a una aplicación diferente. La API está diseñada para ser compatible con los sistemas de notificación existentes en diferentes plataformas ". - MDN

<!-- https://developers.google.com/web/tools/chrome-user-experience-report -->

### **Relacionados** <!-- omit in toc -->

[▷ ¿Qué es Web Vitals? Las nuevas métricas esenciales para Google](https://ciberninjas.com/web-vitals/)

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}