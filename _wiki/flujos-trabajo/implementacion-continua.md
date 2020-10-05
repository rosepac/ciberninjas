---

title: "Implementación continua"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Implementación continua"
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Implementación continua"
date: 2020-07-28 01:55:07
published: true
author: rosepac
bootstrap: true
layout: post
permalink: /wiki/implementacion-continua/
canonical_URL: https://ciberninjas.com/wiki/implementacion-continua/
feature-img: /assets/img/wiki/articulos/wiki-implementacion-continua.webp
img: /assets/img/wiki/articulos/wiki-implementacion-continua.webp

---

La entrega continua (CD) es un enfoque de ingeniería de software en el que los equipos producen software en ciclos cortos, lo que garantiza que el software se pueda lanzar de manera confiable en cualquier momento y, al lanzar el software, hacerlo manualmente.

Tiene como objetivo construir, probar y lanzar software con mayor velocidad y frecuencia. El enfoque ayuda a reducir el costo, el tiempo y el riesgo de realizar cambios al permitir más actualizaciones incrementales para las aplicaciones en producción. Un proceso de implementación sencillo y repetible es importante para la entrega continua.

El CD contrasta con la implementación continua , un enfoque similar en el que el software también se produce en ciclos cortos pero a través de implementaciones automatizadas en lugar de manuales.

## **Relación con DevOps**

La entrega continua y DevOps son similares en sus significados y a menudo se combinan, pero son dos conceptos diferentes. DevOps tiene un alcance más amplio, y se centra en el cambio cultural, específicamente la colaboración de los diversos equipos involucrados en la entrega de software (desarrolladores, operaciones, aseguramiento de la calidad, gestión, etc.), así como en la automatización de los procesos. en la entrega de software.

La entrega continua, por otro lado, es un enfoque para automatizar el aspecto de la entrega y se centra en reunir diferentes procesos y ejecutarlos con mayor rapidez y frecuencia.

Por lo tanto, DevOps puede ser un producto de entrega continua y el CD fluye directamente hacia DevOps.

## **Relación con el despliegue continuo**

La entrega continua es la capacidad de entregar software que se puede implementar en cualquier momento mediante versiones manuales; esto contrasta con la implementación continua que utiliza implementaciones automatizadas.

Según Martin Fowler, el despliegue continuo requiere una entrega continua. La literatura académica diferencia entre los dos enfoques según el método de implementación; manual vs. automatizado.

## **Principios de la Implementación Continua**

Un conjunto de validaciones a través del cual una pieza de software deben pasar en su camino hacia la liberación.

El código se compila si es necesario y luego se empaqueta en un servidor de compilación cada vez que se confirma un cambio en un repositorio de control de código fuente, luego se prueba mediante una serie de técnicas diferentes (posiblemente incluyendo pruebas manuales) antes de que pueda marcarse como liberable.

Los desarrolladores acostumbrados a un ciclo de tiempo prolongado pueden necesitar cambiar su forma de pensar cuando trabajan en un entorno de CD.

Es importante comprender que cualquier confirmación de código puede ser entregada a los clientes en cualquier momento. Los patrones, como los de alternancia de funciones, pueden resultar muy útiles para la confirmación temprana de código que aún no está listo para su uso por parte de los usuarios finales.

El uso de NoSQL puede eliminar el paso de migraciones de datos y cambios de esquema, a menudo pasos manuales o excepciones a un flujo de trabajo de entrega continua.

Otras técnicas útiles para desarrollar código de forma aislada, como la ramificación de códigono son obsoletos en un mundo de CD, pero deben adaptarse para ajustarse a los principios de CD; por ejemplo, ejecutar múltiples ramas de código de larga duración puede resultar poco práctico, ya que un artefacto liberable debe construirse temprano en el proceso de CD a partir de una sola rama de código si va a pasar por todas las fases de la tubería.

## **Canal de la implementación continua**

La entrega continua se habilita a través de la canalización de implementación. El propósito de la canalización de implementación tiene tres componentes: visibilidad, retroalimentación e implementación continua:

- **Visibilidad**: Todos los aspectos del sistema de entrega, incluida la construcción, implementación, prueba y lanzamiento, son visibles para todos los miembros del equipo para promover la colaboración.
- **Retroalimentación**: Los miembros del equipo se enteran de los problemas lo antes posible cuando ocurren para poder solucionarlos lo más rápido posible.
- **Implementación continua**: A través de un proceso totalmente automatizado, puede implementar y lanzar cualquier versión del software en cualquier entorno.

## Herramientas y tipos de herramientas de implementación continua**

La entrega continua lleva la automatización desde el control de la fuente hasta la producción. Hay varias herramientas que ayudan a lograr todo o parte de este proceso.

Estas herramientas forman parte del proceso de implementación que incluye la entrega continua.

Los tipos de herramientas que ejecutan varias partes del proceso incluyen: integración continua, automatización de lanzamiento de aplicaciones, automatización de compilación, gestión del ciclo de vida de las aplicaciones.

## **Arquitectura para la entrega continua**

Para practicar la entrega continua de manera efectiva, las aplicaciones de software deben cumplir con un conjunto de requisitos arquitectónicamente significativos (ASR), como la capacidad de implementación, la modificabilidad y la capacidad de prueba.

Estos ASR requieren una alta prioridad y no se pueden negociar a la ligera.

Los microservicios se utilizan a menudo en la arquitectura para la entrega continua.

El uso de microservicios puede aumentar la capacidad de implementación y modificabilidad de un sistema de software. Las mejoras de implementación observadas incluyen: independencia de implementación, tiempo de implementación más corto, procedimientos de implementación más simples y sin tiempo de inactividad.

Las mejoras de modificabilidad observadas incluyen: tiempo de ciclo más corto para pequeños cambios funcionales incrementales, cambios de selección de tecnología más fáciles, cambios de atributos de calidad incrementales y actualizaciones más fáciles de idiomas y bibliotecas.

## **Implementación y uso de la implementación continua**

El [libro de implementación continua](https://amzn.to/3lrzduP){:target="_blank" rel="nofollow,noreferrer"} escrito por Jez Humble y David Farley popularizó el término, sin embargo, desde su creación, la definición ha seguido avanzando y ahora tiene un significado más desarrollado.

Actualmente, las empresas están implementando estos principios de entrega continua y mejores prácticas. La diferencia en los dominios, por ejemplo, sigue siendo significativa y afecta la implementación y el uso.

Las empresas conocidas que tienen este enfoque incluyen Yahoo!, Amazon, Facebook, Google, Paddy Power y Wells Fargo.

## **Beneficios y obstáculos de la implementación continua**

Se han informado varios beneficios de la entrega continua:

- Tiempo de comercialización acelerado: CD permite que una organización entregue el valor comercial inherente a las nuevas versiones de software a los clientes más rápidamente. Esta capacidad ayuda a la empresa a mantenerse un paso por delante de la competencia.
- Creación del producto adecuado: los lanzamientos frecuentes permiten a los equipos de desarrollo de aplicaciones obtener comentarios de los usuarios más rápidamente. Esto les permite trabajar solo en las funciones útiles. Si descubren que una función no es útil, no dedican más esfuerzo a ella. Esto les ayuda a crear el producto adecuado.
- Productividad y eficiencia mejoradas: ahorros de tiempo significativos para desarrolladores, probadores, ingenieros de operaciones, etc. a través de la automatización.
- Lanzamientos confiables: los riesgos asociados con un lanzamiento han disminuido significativamente y el proceso de lanzamiento se ha vuelto más confiable. Con CD, el proceso de implementación y los scripts se prueban repetidamente antes de la implementación en producción. Por lo tanto, ya se han descubierto la mayoría de los errores en el proceso de implementación y los scripts. Con versiones más frecuentes, el número de cambios de código en cada versión disminuye. Esto facilita la búsqueda y solución de cualquier problema que se produzca, reduciendo el tiempo en el que tienen un impacto.
- Calidad del producto mejorada: la cantidad de errores abiertos e incidentes de producción ha disminuido significativamente.
- Mayor satisfacción del cliente: se logra un mayor nivel de satisfacción del cliente.

A su vez, se han encontrado perjuicios:

- Preferencias del cliente: algunos clientes no quieren actualizaciones continuas de sus sistemas. Esto es especialmente cierto en las etapas críticas de sus operaciones.
- Restricciones de dominio: en algunos dominios, como telecomunicaciones y médico, las regulaciones requieren pruebas exhaustivas antes de que se permita que las nuevas versiones entren en la fase de operaciones.
- Falta de automatización de pruebas: la falta de automatización de pruebas conduce a la falta de confianza del desarrollador y puede impedir el uso de la entrega continua.
- Diferencias en los entornos: los diferentes entornos utilizados en el desarrollo, las pruebas y la producción pueden provocar que problemas no detectados pasen al entorno de producción.
- Pruebas que necesitan un oráculo humano: no todos los atributos de calidad se pueden verificar con la automatización. Estos atributos requieren humanos en el ciclo, lo que ralentiza el proceso de entrega.

Chen Lianping, [planteó y desarrolló otros ocho desafíos de adopción](https://reader.elsevier.com/reader/sd/pii/S0164121217300353?token=580871EEA061055991D37BC5E62059C8EE71890CFCE7BF45BB0251776B7F4629A40239B4553C71D2F5B1B61D76B4B672){:target="_blank" rel="nofollow,noreferrer"}. Estos desafíos se encuentran en las áreas de estructura organizativa, procesos, herramientas, infraestructura, sistemas heredados, arquitectura para CD, pruebas continuas de requisitos no funcionales y optimización de la ejecución de pruebas.

**Categorías**: Lanzamiento de Software \ Diseño de Software \ Proceso de Desarrollo de Software
{: .notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [Integración continua](https://en.wikipedia.org/wiki/Continuous_delivery){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del  29 de Septiembre de 2020, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=Continuous_delivery&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}