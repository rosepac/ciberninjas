---

author: rosepac
bootstrap: true
comments: false
tags:
- Python
- Actualización
thumbnail: /assets/img/blog/29-python-3-9.webp
feature-img: /assets/img/blog/29-python-3-9.webp
title: '▷ Python 3.9: Las mejoras y novedades, de uno de los mejores lenguaje de programación para el futuro'
description: >-
  La próxima versión de Python se propone implementar lanzamientos más rápidos, mejoras del rendimiento, nuevas funciones en el uso de las cadenas, nuevos operadores de unión y API internas más consistentes y estables.
excerpt: >-
  La próxima versión de Python se propone implementar lanzamientos más rápidos, mejoras del rendimiento, nuevas funciones en el uso de las cadenas, nuevos operadores de unión y API internas más consistentes y estables.
canonical_URL: https://ciberninjas.com/python-39-2020/
permalink: /python-39-2020/
date: 2020-08-29 08:10:32
published: true

---

La próxima versión de Python se propone implementar lanzamientos más rápidos, mejoras del rendimiento, nuevas funciones en el uso de las cadenas, nuevos operadores de unión y API internas más consistentes y estables.

A principios de Mayo, la Python Software Foundation abrió el telón de la primera versión beta de Python 3.9, cuyo lanzamiento de producción está programado para Octubre.

Con el lanzamiento de la versión beta, se han establecido todos los cambios importantes para Python 3.9, lo que significa que ha llegado el momento de conocer los cambios y nuevas modificaciones para la próxima versión de Python.

A continuación, un resumen de todas las nuevas características para la nueva versión de Python 3.9.

- [**Python cambia a un ciclo de lanzamiento anual**](#python-cambia-a-un-ciclo-de-lanzamiento-anual)
- [**Python se vuelve más rápido por defecto**](#python-se-vuelve-más-rápido-por-defecto)
- [**Más funciones de diccionario y cadenas de Python**](#más-funciones-de-diccionario-y-cadenas-de-python)
- [**Nuevas operaciones de tipo Python**](#nuevas-operaciones-de-tipo-python)
- [**Mejoras en los componentes internos de Python**](#mejoras-en-los-componentes-internos-de-python)

## **Python cambia a un ciclo de lanzamiento anual**

Hasta la actualidad, Python se ha desarrollado y lanzado con una cadencia de dieciocho meses. PEP 602 propuso que el equipo de desarrollo de Python adopte un ciclo de lanzamiento anual, y esa propuesta ha sido aceptada.

Un ciclo de lanzamiento anual significa menos funciones en cada lanzamiento, pero también significa comentarios, opiniones y aportes más rápidos sobre las características de prueba.

Menos cambios potencialmente importantes en cada lanzamiento y, por lo tanto, más incentivos para que los usuarios y los administradores de las distribuciónes de Linux actualicen Python con más frecuencia.

También significa que las nuevas funciones propuestas al final de cada ciclo de desarrollo no tardarán tanto en incorporarse a las futuruas nuevas versiones.

La nueva línea de tiempo significa que Python 3.9 se lanzará en Octubre de 2020 y Python 3.10, que oficialmente comenzó su desarrollo pre-alfa el 19 de Mayo de 2020, y entrará en su fase de desarrollo alfa cuando se abrá oficialmente la versión Python 3.9 y su versión final, verá la luz en Octubre de 2021.

Las futuras versiones de Python, seguirán este mismo patrón.

## **Python se vuelve más rápido por defecto**

Cada revisión de Python disfruta de mejoras de rendimiento con respecto a la versión anterior. Python 3.9 incluye dos grandes mejoras que aumentan el rendimiento sin requerir ningún cambio en el código existente.

La primera mejora implica un mayor uso del `vectorcall protocol` introducido en Python 3.8.

**Vectorcall protocol** acelera muchas de las llamadas a funciones comunes minimizando o eliminando los objetos temporales creados para las llamadas.

En Python 3.9, varios componentes integrados de Python -`range, tuple, set, frozenset, list, dict`- se utilizan internamente a través del protocolo de llamada rápida `vectorcall` que es capaz de acelerar la ejecución de las llamadas.

El segundo gran potenciador del rendimiento, es el logro de conseguir un análisis más eficiente del código fuente de Python.

El nuevo analizador del tiempo de ejecución de CPython no fue diseñado para abordar los problemas del rendimiento, sino para tratar las inconsistencias internas del analizador original.

Sin embargo, como beneficio adicional, se logra realizar un análisis más rápido, especialmente ante grandes volúmenes de código.

## **Más funciones de diccionario y cadenas de Python**

Python facilita la manipulación de tipos de datos comunes, y Python 3.9 amplía esta facilidad con nuevas funciones para cadenas y diccionarios.

Para las cadenas, existen nuevos métodos para eliminar prefijos y sufijos, operaciones que durante mucho tiempo han requerido mucho trabajo manual para llevarlas a cabo.

Para los diccionarios, ahora hay operadores de unión, otro para fusionar dos diccionarios en uno nuevo y otro para actualizar el contenido de un diccionario con otro diccionario.

## **Nuevas operaciones de tipo Python**

En las últimas versiones, Python ha ampliado el soporte ante las sugerencias de tipos.

Esto es principalmente por el bien de las "linternas" y los verificadores de código, los tipos no se aplican en tiempo de ejecución en CPython y no hay planes para hacer de Python un [lenguaje de tipado estático](https://ciberninjas.com/lenguaje-tipado/).

Pero la sugerencia de tipos es una herramienta poderosa para garantizar la coherencia en grandes bases de código, por lo que el código de Python aún puede beneficiarse de tener sugerencias de tipo.

Dos nuevas funciones para las sugerencias de tipo y las anotaciones de tipo se abrirán paso en Python 3.9. En una, las sugerencias de tipo para el contenido de las colecciones , por ejemplo, listas y diccionarios, ahora están disponibles en Python de forma nativa.

Esto significa que, por ejemplo, puede describir una lista como `list [int]` para una lista de números enteros sin necesidad de que la biblioteca `typing` lo haga.

La segunda adición a los mecanismos de tipado de Python es la función flexible y las anotaciones variables.

Esto permite el uso del tipo `Annotated` para describir un tipo utilizando metadatos que se pueden examinar antes de tiempo (con herramientas de las linteras) o en tiempo de ejecución. Por ejemplo, podría usarse `Annotated [int, ctype("char")]` para describir un número entero que debería considerarse como un chartipo en C.

Por defecto, Python no haría nada con dicha anotación, pero podría ser usado por las linternas del código.

## **Mejoras en los componentes internos de Python**

Limpiar, refinar y modernizar los componentes internos de Python es una iniciativa en curso para los desarrolladores de Python, y Python 3.9 incluye un par de cambios en ese sentido.

El primero es un rediseño de la forma en que los módulos interactúan con la maquinaria de importación. Los módulos de extensión de Python, escritos en C, ahora pueden usar un nuevo mecanismo de carga que los hace comportarse más como módulos normales de Python cuando se importan.

Varios módulos de la biblioteca estándar de Python recientes apoyan este comportamiento: `_abc, audioop, _bz2, _codecs, _contextvars, _crypt, _functools, _json, _locale, operator, resource, time, _weakref`. El nuevo mecanismo de carga no solo permite que los módulos de extensión sean manejados de manera más flexible por Python, sino que también habilita nuevas capacidades como comportamientos parar generar enlaces avanzados.

La segunda iniciativa dedicada a la limpieza, es un ABI interno estable para CPython.

Históricamente, cada revisión principal de Python ha sido incompatible con ABI y sus versiones anteriores, lo que requiere que se recompilen módulos de extensión para cada nueva versión.

De ahora en adelante, cualquier módulo de extensión que use la ABI estable funcionará en las versiones de Python. Con Python 3.9, los siguientes módulos de la biblioteca estándar utilizan una versión estable ABI: `audioop, ast, grp, _hashlib, pwd, _posixsubprocess, random, select, struct, termios, zlib`.
<!-- https://www.infoworld.com/article/3543885/python-39-whats-new-and-better.html -->

### **Relacionados** <!-- omit in toc -->

[▷ Cómo Aprender Python en 2020 🐍](https://ciberninjas.com/python/)

[▷ Los Mejores Recursos para Aprender Python 🐍](https://ciberninjas.com/python-recursos/)

[Diccionario de Python](https://ciberninjas.com/glosario/completo-tecnologias-python/)

[🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](https://ciberninjas.com/que-aprender-sobre-machine-learning-2020/)

[▷ ¿Qué diferencia existe entre Inteligencia Artificial, Aprendizaje Automático y Aprendizaje Profundo?](https://ciberninjas.com/diferencias-entre-ai-ml-dl/)

[▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](https://ciberninjas.com/aprendizaje-automatico-cursos-ingles/)

[▷ 11 Fórmulas de comenzar el proceso de aprender programación de Inteligencia Artificial](https://ciberninjas.com/11-aprendizajes-principiantes-inteligencia-artificial/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}