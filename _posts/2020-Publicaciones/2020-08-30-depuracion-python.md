---

author: rosepac
bootstrap: true
published: true
comments: false
tags:
- Python
- Programación
thumbnail: /assets/img/blog/29-python-3-9.webp
feature-img: /assets/img/blog/29-python-3-9.webp
title: '▷ 5 Herramientas para verificar tu código en Python'
description: >-
  Busca estas herramientas gratuitas para asegurarte que tu código de Python cumple con los estándares de calidad del código y las convenciones de la codificación en Python.
excerpt: >-
  Busca estas herramientas gratuitas para asegurarte que tu código de Python cumple con los estándares de calidad del código y las convenciones de la codificación en Python.
canonical_URL: https://ciberninjas.com/python-5-herramientas-limpiar-codigo/
permalink: /python-5-herramientas-limpiar-codigo/
date: 2020-08-30 08:10:32

---

Busca estas herramientas gratuitas para asegurarte que tu código de Python cumple con los estándares de calidad del código y las convenciones de la codificación en Python.

En teoría, cualquier código de Python está bien siempre que sea sintácticamente correcto y se ejecute según lo previsto. En la práctica, desea adoptar un estilo coherente en todos sus proyectos, preferiblemente uno guiado por las propias recomendaciones de estilo de Python.

La buena noticia es que no tienes que hacerlo a mano. El ecosistema de Python contiene una variedad de herramientas, para garantizar que el código fuente de Python se adhiera a las convenciones de estilo.

En este artículo, vamos a conocer cinco herramientas reconocidas. Cuatro sirven más concretamente para verificar los estilos de código de Python, más otra que sirve para reformatear el código y lograr que sea consistente.

Los [mejores editores de código de Python](https://ciberninjas.com/mejores-ide-python/) como por ejemplo, el IDE de Python PyCharm o Visual Studio Code ademiten estas herramientas de forma nativa o a través de una extensión, por lo que puedes integrarlas fácilmente en tu flujo de trabajo de desarrollo.

- [**Pycodestyle**](#pycodestyle)
- [**Autopep8**](#autopep8)
- [**Flake8**](#flake8)
- [**PyLint**](#pylint)
- [**Black**](#black)

## **Pycodestyle**

PEP 8 es el documento que detalla las convenciones de codificación de Python, desde si se deben usar tabulaciones o espacios al sangrar (use cuatro espacios, problema resuelto) hasta cómo nombrar variables y objetos.

Pycodestyle es el módulo de Python que verifica el código de Python con las recomendaciones de PEP 8 y ​​entrega un informe sobre dónde el código analizado está fuera de las especificaciones.

Pycodestyle no proporciona soluciones automáticas para problemas; eso depende de ti. Pero Pycodestyle es altamente configurable, lo que le permite suprimir tipos específicos de errores o analizar solo archivos específicos en un árbol de origen.

Casi todos los IDE con soporte para Python también son compatibles con Pycodestyle, por lo que es la opción fácil para la compatibilidad universal, si no la funcionalidad.

Muchos linters de código Python pueden funcionar como módulos en Python, y Pycodestyle no es una excepción. Puede usarlo para verificar código mediante programación, por ejemplo, como parte de un conjunto de pruebas.

Ideal para la verificación básica de conformidad con PEP 8.

[🔥 Instala Pycodestyle](https://pypi.org/project/pep8/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Autopep8**

Autopep8 continúa donde Pycodestyle lo deja. Utiliza Pycodestyle para determinar qué cambios deben realizarse y luego reformatea el código para que se ajuste a las sugerencias proporcionadas. Los archivos existentes se pueden reformatear en su lugar o escribir en archivos nuevos.

Autopep8 también corrige una serie de otros problemas que pueden aparecer, como limpiar el código convertido de Python 2 a Python 3 o archivos que tienen marcadores de final de línea mixtos. Y Autoprep8 se puede utilizar mediante programación para reformatear el código suministrado como cadenas.

[🔥 Instala Autopep8](https://github.com/hhatto/autopep8){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Flake8**

Flake8 incluye varias herramientas de codificación y estilo de código Python en un solo paquete. Junto con  PyFlakes, que usa la verificación de sintaxis para detectar errores básicos, y Pycodestyle, que discutimos anteriormente.

Flake8 proporciona una herramienta adicional para verificar la "complejidad ciclomática" de un proyecto, es decir, el número de rutas de código independientes que se encuentran en el programa.

Al final de cada análisis, Flake8 entrega una métrica percentil para la calidad general del código analizado, una práctica forma de tener una idea rápida de qué partes de una base de código son más problemáticas.

Flake8 también tiene un sistema de complementos, por lo que el linting se puede combinar con confirmaciones de Git u otras acciones automatizadas, por ejemplo, para enviar código problemático a un reformateador.

Es ideal para evaluar la calidad general del código, y recibir recomendaciones específicas de posibles mejoras.

[🔥 Instala Flake8](https://flake8.pycqa.org/en/latest/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **PyLint**

Pylint es probablemente la linterna de Python más utilizado y compatible que existe. Como las demás, busca errores y desviaciones de los estándares de codificación en el código Python y ofrece cambios sobre cómo corregir esos errores.

Pylint también es posiblemente el más completo de los verificadores de código, en el sentido de que puede advertirte acerca de una gran cantidad de problemas con su código, algunos de los cuales podrían ni siquiera ser relevantes en su contexto particular.

Los resultados pueden ser detallados, pero también pueden adaptarse a las peculiaridades de un proyecto en particular.

Pylint busca cinco clases de problemas progresivamente más problemáticos. Las "convenciones" son violaciones de PEP 8 u otras reglas de coherencia en Python. Los "refactores" indican olores de código, errores comunes o código que podría modificarse para que sea más eficiente o menos confuso, como importaciones cíclicas o archivos con demasiadas líneas similares que podrían condensarse en una función común.

Las "advertencias" son problemas específicos de Python, como código inalcanzable (todo lo que está después de una  return en una función) o clases a las que les falta un método ` __init__`.

Los “errores” son errores de código reales, como variables indefinidas, y los problemas “fatales” son aquellos que impiden que Pylint se ejecute.

Una vez más, lo que hace que Pylint sea más útil y más pesado es la cantidad de comentarios que brinda. La buena noticia es que para aquellos que quieran ajustarlo, la verbosidad y granularidad de Pylint se puede modificar por proyecto o incluso por archivo.

Además, puede recurrir a una variedad de complementos de Pylint que agregan tipos específicos de comprobaciones, como para el código que es demasiado complejo (largas cadenas de mensajes de correo electrónico, if, etc.) o para los elementos integrados obsoletos.

Lo mejor para:  control de calidad de código de sopa a nueces, suponiendo que no le importe modificar su configuración para evitar la sobrecarga.

[🔥 Instala PyLint](https://www.pylint.org/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Black**

Black no es una herramienta de análisis de código o linterna, sino una herramienta para imponer el estilo como una forma de garantizar una mejor calidad del código. Por esa razón, se adapta cómodamente a las otras herramientas descritas aquí, ya que es una forma de evitar preventivamente muchos errores de estilo básicos.

Black se describe como “el formateador de código inflexible”, inflexible porque no tiene opciones configurables excepto la longitud de la línea.

Black reformatea el código Python en un estilo singular, coherente y legible, basándose en reglas internas para manejar problemas complicados como expresiones multilínea, por lo que incluso esas se reformatean de forma coherente.

Una de las ventajas del uso de Black es que resuelve todas las disputas sobre el formato, por lo que elimina el "derrame de bicicletas" y también hace que la salida de linter sea menos ruidosa.

No tiene que discutir sobre cómo formatear el código de un proyecto, ni siquiera hacerlo manualmente. Simplemente use Black y termine con él; incluso puede configurar muchos IDE para formatear automáticamente el código con Black.

Otra ventaja que se alega es que hace que las git confirmaciones sean  más limpias, ya que reduce la cantidad de cambios que se realizan en un archivo determinado.

Ideal para: Convertir bases de código en una conformidad estilística básica en masa .

[🔥 Instala Black](https://github.com/psf/black){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Relacionados** <!-- omit in toc -->

[▷ Cómo Aprender Python en 2020 🐍](https://ciberninjas.com/python/)

[▷ Los Mejores Recursos para Aprender Python 🐍](https://ciberninjas.com/python-recursos/)

[Diccionario de Python](https://ciberninjas.com/glosario/completo-tecnologias-python/)

[🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](https://ciberninjas.com/que-aprender-sobre-machine-learning-2020/)

[▷ ¿Qué diferencia existe entre Inteligencia Artificial, Aprendizaje Automático y Aprendizaje Profundo?](https://ciberninjas.com/diferencias-entre-ai-ml-dl/)

[▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](https://ciberninjas.com/aprendizaje-automatico-cursos-ingles/)

[▷ 11 Fórmulas de comenzar el proceso de aprender programación de Inteligencia Artificial](https://ciberninjas.com/11-aprendizajes-principiantes-inteligencia-artificial/)

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}