---

author: rosepac
bootstrap: true
comments: false
tags:
- Bootstrap
- Framework CSS
thumbnail: /assets/img/blog/bootstrap-cambios-agosto.webp
feature-img: /assets/img/blog/bootstrap-cambios-agosto.webp
title: '▷ Bootstrap: Correcciones de Agosto 2020'
description: >-
  Lanzamientos de nuevos parches y correcciones de pequeños problemas en las nuevas versiones de Boostrap: 4.5.1 y 4.5.2 sigue leyendo para mayor información.
excerpt: >-
  Lanzamientos de nuevos parches y correcciones de pequeños problemas en las nuevas versiones de Boostrap: 4.5.1 y 4.5.2 sigue leyendo para mayor información.
canonical_URL: https://ciberninjas.com/bootstrap-correcciones-agosto/
permalink: /bootstrap-correcciones-agosto/
date: 2020-09-01 23:16:32
last_modified_at: 
published: true

---

Las próximas versiones de Bootstrap 4.x continuarán la tendencia de encontrarse enfocadas en la corrección de errores, mejoras de la documentación y (más añadir características que ayuden a cerrar las diferencias con la próxima versión 5.x.

El equipo de Boostrap, con las versiones 4.5.1 y 4.5.2 sacadas en Agosto. A contribuido corrigiendo algunos parches y correcciones de fallos pendientes.

- [**Cambios en el CSS**](#cambios-en-el-css)
- [**Correcciones en el sistema de cuadrículas**](#correcciones-en-el-sistema-de-cuadrículas)
- [**El futuro de Bootstrap**](#el-futuro-de-bootstrap)

## **Cambios en el CSS**

Con la versión 4.5.1 se han implementado pequeños numerosos cambios y correcciones sobre el CSS, el Javascript y en la documentación; si quieres leer sobre [los cambios exactos puedes consultar el reporte a través de Github](https://github.com/twbs/bootstrap/releases/tag/v4.5.1){:target="_blank" rel="nofollow,noreferrer"}.

## **Correcciones en el sistema de cuadrículas**

Desde la adición de los contenedores en la versión 4.4.0 hasta los ajustes de filas y columnas más recientes, desde Bootstrap han estado realizando cambios incrementales en nuestro sistema de cuadrícula.

Con los cambios de la versión 4.5.2 se revierten y restauran algunas cosas:

- Se restaura el mixin `make-container-max-widths`. El mixin no será usado por el equipo de Bootstrap, pero permanecerá en la base del código durante la versión 4.x.x Además, se ha agregado un aviso de información de desaprobación de uso.
- Se elimina `flex: 1 0 100%` de las columnas `.rows`. Al eliminar esto, se vuelve a ganar el comportamiento adecuado dentro de la cuadrícula y un comportamiento flexible; desafortunadamente, las filas se reducirán sin más cambios. Si deseas que las columnas se comporten como de costumbre, tendrás que añadir `.flex-fill` sobre `.row`.
- Igualmente. Se retira `min-width: 0` de las columnas `.col`.

## **El futuro de Bootstrap**

El equipo de Boostrap pretende anunciar la segunda versión alpha de v5 en las próximas semanas y después de esa segunda versión alfa, ya se encuentran considerando lanzar una versión alfa final; previa a la primera beta de Bootstrap 5.1.

Por si eso fuese poco, esperan seguir lanzando más parches sobre la versión estable 4.x.x y ya han lanzado [los iconos de Bootstrap](https://ciberninjas.com/bootstrap-iconos-alpha-5/). ¡Seguid atentos, a las nuevas noticias!

### **Relacionados** <!-- omit in toc -->

[▷ Bootstrap 5: Nuevos cambios para el framework CSS](https://ciberninjas.com/bootstrap-5-alpha/)

[▷ Bootstrap 5 Iconos: Nueva versión Alpha](https://ciberninjas.com/bootstrap-iconos-alpha-5/)

[▷ ¿Qué diferencias existen entre el framework de Boostrap y Tailwind?](https://ciberninjas.com/que-diferencias-existen-entre-bootstrap-tailwind/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}