---
layout: post
title: Bases de Datos Avanzadas
published: false
author: rosepac
comments: true
date: 2019-02-13 08:02:32
tags:
    - acceso
    - agregación
    - agrupamiento
    - arquitecturas
    - asociación
    - bases
    - bases de datos
    - bbdd
    - booleano
    - cálculo
    - clave
    - comportamiento
    - constructores
    - datos
    - diseño
    - distribuida
    - distribuidas
    - documentos
    - especialización
    - estado
    - estructuras
    - ficheros
    - fragmentación
    - generalización
    - herencia
    - identidad
    - indexar
    - instancias
    - instantáneas
    - invertidos
    - lógico
    - lógicos
    - manejar
    - matriz
    - metadatos
    - metodología
    - modelo
    - nodos
    - normalización
    - objetos
    - operadores
    - orientada
    - pagerank
    - palabras
    - polimorfismo
    - presistencia
    - procesamiento
    - procesar
    - puntos
    - recuperación
    - recuperar
    - referencias
    - relacional
    - relaciones
    - relevancia
    - réplica
    - sgbdoo
    - sistemas
    - snapshots
    - sql
    - sri
    - tries
    - variable
    - variables
    - vectorial
    - xml
categories:
    - libros
permalink: /bases-de-datos-avanzadas
---
## En este libro podrás aprender con los apuntes teoricos de una asignatura basada en las bases de datos avanzadas, referentes a una asignatura universitaria



> Autoría: María José Aramburu Cabo e Ismael Sanz Blasco

### Introducción del Capítulo 1

Las bases de datos relacionales son, hoy en día, las más utilizadas en la mayoría de los ámbitos de aplicación. La estructura de datos básica que ofrece, la tabla relacional, es apropiada para muchas aplicaciones habituales. Sin embargo, existen casos de uso en los que presenta serios inconvenientes prácticos, generalmente si se requiere gestionar datos muy complejos o no convencionales (imágenes, documentos&#8230;), para los que las estructuras relacionales resultan muy complejas e ineficientes. Algunos ejemplos de gran importancia práctica son las bases de datos multimedia, las bases de datos científicos y los sistemas de apoyo al diseño industrial (cad/cam).

Las bases de datos orientadas a objetos intentan dar respuesta a estos problemas, incorporando las siguientes características:

Adoptan como modelo de datos el de los lenguajes orientados a objetos, permitiendo así el uso de estructuras de datos tan complejas como sea necesario, y eliminando en gran medida las barreras entre el desarrollo de aplicaciones y la gestión de datos.
  
Permiten la extensibilidad con nuevos tipos de datos complejos, permitiendo incorporar operaciones arbitrarias sobre ellos. Estas características han motivado el desarrollo de numerosos sistemas orientados a objetos, que se han establecido en nichos en los que los casos de uso mencionados son importantes. Además, la actual emergencia de aplicaciones web que requieren estructuras de datos muy flexibles está motivando un gran interés en sistemas capaces de soportarlas, como es el caso de las bases de datos orientadas a objetos.

En este capítulo estudiaremos las principales características del modelo datos orientado a objetos, así como de los sistemas basados en él. También introduciremos conceptos sobre el desarrollo y uso de estos sistemas: diseño lógico, físico y lenguajes de consulta.

### Introducción del Capítulo 2

Los Sistemas de Recuperación de Información (sri) tratan con la representación, almacenamiento y recuperación de documentos. Por definición, el objetivo general de un sri es que dada una consulta proporcionada por el usuario el sistema recupere información relevante. En los sri tradicionales cada documento se almacena en un fichero separado. Previamente, su contenido textual debe ser procesado para su indexación. Es precisamente este mecanismo de indexación el que se utiliza para procesar las consultas de los usuarios y recuperar los documentos relevantes.

Durante las últimas décadas han surgido nuevos formatos para representar documentos estructurados que permiten expresar los atributos y la organización de los documentos junto con sus contenidos. xml (Extensible Markup Language) es un formato universalmente aceptado como estándar de intercambio de datos y documentos que permite ser procesado, entre otras muchas cosas, para indexar su contenido y estructura. En este capítulo se estudian los principales modelos y técnicas que se utilizan en los sistemas de recuperación de información tradicionales y para documentos estructurados.

### Introducción Capítulo 3

En un sistema de base de datos centralizado todos los componentes del sistema residen en un único ordenador denominado servidor de base de datos. Sin embargo, muchas aplicaciones de bases de datos tienen una naturaleza distribuida. Por ejemplo, una compañía de transportes puede tener centros de logística en varias ciudades, o un banco puede tener varios centros de procesamiento de operaciones en uno o varios países. Estas aplicaciones requieren bases de datos distribuidas, conectadas a través de una red de comunicaciones y con servidores de datos en cada sede de la compañía. De esta manera, los usuarios locales pueden tener acceso directo a los datos que están en su servidor local pero, como usuarios globales, también puedan acceder a los datos almacenados en otros servidores.

Después de la expansión de Internet, las bases de datos distribuidas tradicionales han evolucionado en sistemas más abiertos pero que igualmente necesitan compartir datos y que además, no necesariamente se encuentran almacenados en una base de datos. Hoy en día, existen infinidad de aplicaciones que requieren integrar datos de naturaleza y formato muy diferente y que además se encuentran distribuidos, como pueden ser los sistemas gestores de noticias, las bibliotecas digitales, las aplicaciones de comercio electrónico o los sistemas de información médica.

Como consecuencia han surgido un gran número de arquitecturas y tecnologías cuyo objetivo es ayudar a desarrollar aplicaciones que requieran la integración de fuentes de datos heterogéneos. El rango de posibles aplicaciones es enorme y cada una tiene sus propios requisitos, por lo que debe ser independientemente analizada con el fin de poder determinar cuál es la mejor solución a los problemas de integración de datos que conlleve.

[pdfjs-viewer url=&#187;https%3A%2F%2Fmundoframework.com%2Fwp-content%2Fuploads%2F2019%2F02%2FBases-de-Datos-Avanzadas.pdf&#187; viewer\_width=100% viewer\_height=1360px fullscreen=true download=true print=true]

* * *

**Licencia**: _Bajo licencia [Creative Commons][1], señalada en la página 3 del documento._

* * *

&nbsp;

 [1]: http://creativecommons.org/licenses/by-nc-sa/2.0/legalcode