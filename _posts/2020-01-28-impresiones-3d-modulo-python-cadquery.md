---
author: rosepac
bootstrap: true
title: "▷ CadQuery: Módulo Python similar a OpenSCAD"
description: "CadQuery es un módulo Python intuitivo y fácil de usar para construir modelos CAD paramétricos en 3D."
excerpt: "CadQuery es un módulo Python intuitivo y fácil de usar para construir modelos CAD paramétricos en 3D."
published: true
comments: false
date: 2020-01-28 17:28:12
last_modified_at: 
published: true
canonical_URL: /impresiones-3d-modulo-python-cadquery/
categories:
- Biblioteca Impresoras 3D
tags:
- Módulo Python
---

## ¿Qué es CadQuery?

CadQuery es un módulo Python intuitivo y fácil de usar para construir modelos CAD paramétricos en 3D. Con CadQuery, puede escribir scripts cortos y simples que producen modelos CAD de alta calidad. Es fácil crear muchos objetos diferentes con un solo script que se puede personalizar.

CadQuery a menudo se compara con [OpenSCAD](http://www.openscad.org/) . Al igual que OpenSCAD, CadQuery es un generador de modelo paramétrico de código abierto basado en script. Sin embargo, CadQuery se destaca de muchas maneras y tiene varias ventajas clave:

1. Los scripts usan un lenguaje de programación estándar, Python, y por lo tanto pueden beneficiarse de la infraestructura asociada. Esto incluye muchas bibliotecas e IDE estándar.
2. El núcleo CAD de CadQuery OpenCascade es mucho más poderoso que CGAL. Las características compatibles de forma nativa con OCC incluyen NURBS, splines, costura de superficie, reparación de STL, importación / exportación de STEP y otras operaciones complejas, además de las operaciones CSG estándar compatibles con CGAL
3. Capacidad para importar / exportar STEP y la capacidad de comenzar con un modelo STEP, creado en un paquete CAD, y luego agregar características paramétricas. Esto es posible en OpenSCAD usando STL, pero STL es un formato con pérdida.
4. Los scripts de CadQuery requieren menos código para crear la mayoría de los objetos, porque es posible ubicar entidades en función de la posición de otras entidades, planos de trabajo, vértices, etc.
5. Los scripts de CadQuery pueden construir STL, STEP y AMF más rápido que OpenSCAD.

### Características clave

- Construya modelos 3D con guiones que estén lo más cerca posible de cómo describiría el objeto a un humano.
- Cree modelos paramétricos que los usuarios finales puedan personalizar fácilmente.
- Imprima formatos CAD de alta calidad (sin pérdidas) como STEP además de STL y AMF.
- Proporcione un formato de modelo de texto plano no patentado que pueda editarse y ejecutarse solo con un navegador web.
- Ofrezca capacidades de modelado avanzadas como filetes, extrusiones curvilíneas, curvas paramétricas y lofts.

### ¿Por qué este tenedor?

La versión original de CadQuery se creó en la API de FreeCAD. Esto fue genial porque permitió un desarrollo rápido y una capacidad multiplataforma fácil. Sin embargo, eventualmente comenzamos a alcanzar los límites de la API para algunas operaciones y selectores avanzados. Esta versión 2.0 de CadQuery se basa en Python-OCC, que es un contenedor de Python alrededor del núcleo de OpenCASCADE. Esto nos da mucho más control y flexibilidad, a expensas de cierta simplicidad y tener que manejar los aspectos multiplataforma de la implementación nosotros mismos. Creemos que esta es una compensación valiosa para permitir que CadQuery continúe creciendo y expandiéndose en el futuro.

## Empezando

Actualmente es posible usar CadQuery para sus propios proyectos de 3 maneras diferentes:

- Usando la [GUI del editor CQ](https://github.com/CadQuery/CQ-editor)
- De un [cuaderno de Jupyter](https://github.com/bernhard-42/jupyter-cadquery)
- Como una biblioteca independiente

La forma más fácil de instalar CadQuery y sus dependencias es usar conda:

```
conda install -c conda-forge -c cadquery cadquery=2
```

Para aquellos que estén interesados, el [repositorio conda-packages](https://github.com/CadQuery/conda-packages) contiene información de compilación, paquetes y modificaciones para el canal conda de CadQuery.

### CQ-editor GUI

CQ-editor es un IDE que permite a los usuarios editar scripts de modelos CadQuery en un entorno GUI. Incluye características como:

- Un depurador gráfico que le permite recorrer sus scripts.
- Un inspector de pila CadQuery.
- Exporte a varios formatos, incluidos STEP y STL, directamente desde el menú.

Las instrucciones de instalación para CQ-editor se pueden encontrar [aquí](https://github.com/CadQuery/CQ-editor#installation) .

[![Captura de pantalla del editor CQ](https://raw.githubusercontent.com/CadQuery/CQ-editor/master/screenshots/screenshot3.png)](https://raw.githubusercontent.com/CadQuery/CQ-editor/master/screenshots/screenshot3.png)

### Jupyter

CadQuery admite el portátil Jupyter de fábrica con la extensión jupyter-cadquery creada por @ bernhard-42:

- [Instalación](https://github.com/bernhard-42/jupyter-cadquery#installation)
- [Uso](https://github.com/bernhard-42/jupyter-cadquery#jupyter-cadquery)

[![Captura de pantalla de la extensión CadQuery Jupyter](https://raw.githubusercontent.com/bernhard-42/jupyter-cadquery/master/screenshots/0_intro.png)](https://raw.githubusercontent.com/bernhard-42/jupyter-cadquery/master/screenshots/0_intro.png)

### Ser único

CadQuery fue construido para ser utilizado como una biblioteca Python sin ninguna GUI. Esto lo hace ideal para casos de uso como la integración en servidores o la creación de scripts científicos y de ingeniería. Use Anaconda / Miniconda para instalar CadQuery, y luego agregue `import cadquery`a la parte superior de sus scripts Python.

```
conda install -c conda-forge -c cadquery cadquery=2
```

## Obteniendo ayuda

Puede encontrar la documentación completa de CadQuery en [cadquery.readthedocs.io](https://cadquery.readthedocs.io/) .

También tenemos un [grupo de Google](https://groups.google.com/forum/#!forum/cadquery) para facilitar la obtención de ayuda de otros usuarios de CadQuery. Queremos que se sienta bienvenido y lo alentamos a unirse al grupo y presentarse. También nos encantaría saber lo que está haciendo con CadQuery.

## Licencia

CadQuery tiene licencia bajo los términos de la [Licencia pública de Apache, versión 2.0](http://www.apache.org/licenses/LICENSE-2.0).

_____

**Fuentes**:

* [CadQuery](https://github.com/CadQuery/cadquery#what-is-cadquery){:target="_blank" rel="nofollow,noreferrer"}