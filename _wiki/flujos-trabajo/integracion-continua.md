---

title: "Integración continua"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Integración continua"
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Integración continua"
date: 2020-07-28 01:55:07
published: true
author: rosepac
bootstrap: true
layout: post
permalink: /wiki/integracion-continua/
canonical_URL: https://ciberninjas.com/wiki/integracion-continua/
feature-img: /assets/img/wiki/articulos/wiki-integracion-continua.webp
img: /assets/img/wiki/articulos/wiki-integracion-continua.webp

---

En ingeniería de software, la integración continua (CI) es la práctica de fusionar las copias de trabajo de todos los desarrolladores en una línea principal compartida varias veces al día. Grady Booch propuso por primera vez el término CI en su método de 1991, aunque no defendió la integración varias veces al día. La programación extrema (XP) adoptó el concepto de CI y defendió la integración más de una vez al día, quizás hasta decenas de veces al día.

- [**Justificación**](#justificación)
- [**Flujos de Trabajo**](#flujos-de-trabajo)
  - [**Ejecutar Pruebas Localmente**](#ejecutar-pruebas-localmente)
  - [**Compilar Código en CI**](#compilar-código-en-ci)
  - [**Ejecutar Pruebas en CI**](#ejecutar-pruebas-en-ci)
  - [**Implementar un Artefacto de CI**](#implementar-un-artefacto-de-ci)
- [**Historia de la Integración Continua**](#historia-de-la-integración-continua)
- [**Prácticas comunes de la integración continua**](#prácticas-comunes-de-la-integración-continua)
  - [**Mantener un repositorio de código**](#mantener-un-repositorio-de-código)
  - [**Automatizar la construcción**](#automatizar-la-construcción)
- [**Costos y beneficios de la Integración Continua**](#costos-y-beneficios-de-la-integración-continua)

## **Justificación**

Al embarcarse en un cambio, un desarrollador toma una copia del código base actual sobre el que trabajar. A medida que otros desarrolladores envían el código modificado al repositorio de código fuente, esta copia deja de reflejar gradualmente el código del repositorio. No solo se puede cambiar la base del código existente, sino que se puede agregar nuevo código, así como nuevas bibliotecas y otros recursos que crean dependencias y posibles conflictos.

Cuanto más tiempo continúe el desarrollo en una rama sin volver a fusionarse con la línea principal, mayor será el riesgo de múltiples conflictos de integración y fallas cuando la rama del desarrollador finalmente se vuelva a fusionar. Cuando los desarrolladores envían código al repositorio, primero deben actualizar su código para reflejar los cambios en el repositorio desde que tomaron su copia. Cuantos más cambios contenga el repositorio, más trabajo deben hacer los desarrolladores antes de enviar sus propios cambios.

Con el tiempo, el repositorio puede volverse tan diferente de las líneas de base de los desarrolladores que ingresan a lo que a veces se denomina "infierno de fusión" o "infierno de integración", donde el tiempo que se tarda en integrar supera el tiempo que se tarda en hacer sus cambios originales.

## **Flujos de Trabajo**

### **Ejecutar Pruebas Localmente**

La integración continua está diseñado para usarse en combinación con pruebas unitarias automatizadas escritas a través de las prácticas de desarrollo impulsado por pruebas.

Esto se hace ejecutando y pasando todas las pruebas unitarias en el entorno local del desarrollador antes de comprometerse con la línea principal.

Esto ayuda a evitar que el trabajo en curso de un desarrollador rompa la copia de otro desarrollador. Cuando sea necesario, las funciones parcialmente completas se pueden desactivar antes de comprometerse, por ejemplo, mediante alternancia de funciones.

### **Compilar Código en CI**

Un servidor de compilación compila el código periódicamente o incluso después de cada confirmación e informa los resultados a los desarrolladores. El uso de servidores de compilación se introdujo fuera de la comunidad de XP (programación extrema) y muchas organizaciones han adoptado CI sin adoptar todo XP.

### **Ejecutar Pruebas en CI**

Además de las pruebas unitarias automatizadas, las organizaciones que utilizan CI suelen utilizar un servidor de compilación para implementar procesos continuos de aplicación de control de calidad en general: pequeños esfuerzos, que se aplican con frecuencia. Además de ejecutar las pruebas unitarias y de integración, dichos procesos ejecutan análisis estáticos adicionales, miden y perfilan el rendimiento, extraen y dan formato a la documentación del código fuente y facilitan los procesos manuales de control de calidad.

En el popular servicio Travis CI para código abierto, solo el 58,64% de los trabajos de CI ejecutan pruebas.

Esta aplicación continua de control de calidad tiene como objetivo mejorar la calidad del software y reducir el tiempo necesario para entregarlo, reemplazando la práctica tradicional de aplicar el control de calidad después de completar todo el desarrollo.

Esto es muy similar a la idea original de integrar con más frecuencia para facilitar la integración, solo se aplica a los procesos de QA.

### **Implementar un Artefacto de CI**

Ahora, CI a menudo se entrelaza con la entrega continua o la implementación continua en lo que se denomina canalización de CI / CD. 

La "entrega continua" asegura que el software registrado en la línea principal esté siempre en un estado que se pueda implementar para los usuarios y la "implementación continua" hace que el proceso de implementación sea completamente automatizado.

## **Historia de la Integración Continua**

El primer trabajo conocido sobre integración continua fue el entorno Infuse desarrollado por GE Kaiser, DE Perry y WM Schell.

En 1994, Grady Booch usó la frase integración continua en Análisis y Diseño Orientado a Objetos con Aplicaciones (2da edición) para explicar cómo, al desarrollar usando microprocesos, "los lanzamientos internos representan una especie de integración continua del sistema, y existen para forzar el cierre del microproceso".

En 1997, Kent Beck y Ron Jeffries inventaron Extreme Programming (XP) mientras estaban en el proyecto Chrysler Comprehensive Compensation System , incluida la integración continua.

Beck publicó sobre la integración continua en 1998, enfatizando la importancia de la comunicación cara a cara sobre el soporte tecnológico.

En 1999, Beck elaboró ​​más en su primer libro completo sobre programación extrema. CruiseControl, fue una de las primeras herramientas de CI de código abierto, se lanzó en 2001.

## **Prácticas comunes de la integración continua**

Esta sección enumera las mejores prácticas sugeridas por varios autores sobre cómo lograr una integración continua y cómo automatizar esta práctica. La automatización de compilación es una práctica recomendada en sí misma.

La integración continua, la práctica de integrar frecuentemente el código nuevo o modificado con el repositorio de código existente, debe ocurrir con la frecuencia suficiente para que no quede una ventana intermedia entre la confirmación y la compilación, y de manera que no puedan surgir errores sin que los desarrolladores los noten y los corrijan de inmediato.

La práctica normal es activar estas compilaciones por cada confirmación en un repositorio, en lugar de una compilación programada periódicamente.

Los aspectos prácticos de hacer esto en un entorno de múltiples desarrolladores de confirmaciones rápidas son tales que es habitual desencadenar poco tiempo después de cada confirmación y luego iniciar una compilación cuando este temporizador expira o después de un intervalo bastante más largo desde la última compilación.

Tenga en cuenta que, dado que cada nueva confirmación restablece el temporizador utilizado para el disparo de corta duración, esta es la misma técnica utilizada en muchos algoritmos de eliminación de rebotes de botones.

De esta manera, los eventos de confirmación se "eliminan" para evitar compilaciones innecesarias entre una serie de confirmaciones rápidas. Muchas herramientas automatizadas ofrecen esta programación automáticamente.

Otro factor es la necesidad de un sistema de control de versiones que admita confirmaciones atómicas, es decir, todos los cambios de un desarrollador pueden verse como una única operación de confirmación. No tiene sentido intentar construir a partir de solo la mitad de los archivos modificados.

Para lograr estos objetivos, la integración continua se basa en los siguientes principios.

### **Mantener un repositorio de código**

Esta práctica aboga por el uso de un sistema de control de revisiones para el código fuente del proyecto, todos los artefactos necesarios para construir el proyecto deben colocarse en el repositorio.

En esta práctica y en la comunidad de control de revisiones, la convención es que el sistema debe poder compilarse a partir de una caja nueva y no requerir dependencias adicionales.

El defensor de la programación extrema, Martin Fowler, también menciona que cuando la ramificación es compatible con herramientas, su uso debe minimizarse.

En cambio, se prefiere que los cambios se integren en lugar de que se mantengan simultáneamente varias versiones del software.

La línea principal (o troncal) debe ser el lugar para la versión de trabajo del software.

### **Automatizar la construcción**

Un solo comando debe tener la capacidad de construir el sistema. Muchas herramientas de construcción, como make, existen desde hace muchos años.

Otras herramientas más recientes se utilizan con frecuencia en entornos de integración continua. La automatización de la construcción debe incluir la automatización de la integración, que a menudo incluye la implementación en un entorno similar a la producción.

En muchos casos, el script de compilación no solo compila binarios, sino que también genera documentación, páginas web, estadísticas y medios de distribución (como Debian DEB, Red Hat RPM o archivos MSI de Windows).

### **Realice la autocomprobación de la compilación** <!-- omit in toc -->

Una vez creado el código, se deben ejecutar todas las pruebas para confirmar que se comporta como los desarrolladores esperan que se comporte.

### **Compromiso diario con la base del código** <!-- omit in toc -->

Al comprometerse con regularidad, cada confirmador puede reducir el número de cambios conflictivos. Registrar el trabajo de una semana corre el riesgo de entrar en conflicto con otras funciones y puede ser muy difícil de resolver.

Los pequeños conflictos tempranos en un área del sistema hacen que los miembros del equipo se comuniquen sobre el cambio que están realizando.

Confirmar todos los cambios al menos una vez al día (una vez por función creada) generalmente se considera parte de la definición de Integración Continua.

Además, generalmente se recomienda realizar una construcción nocturna. Estos son límites inferiores; se espera que la frecuencia típica sea mucho mayor.

### **Cada confirmación (a la línea de base) debe construirse** <!-- omit in toc -->

El sistema debe crear confirmaciones con la versión de trabajo actual para verificar que se integren correctamente. Una práctica común es utilizar la integración continua automatizada, aunque esto se puede hacer manualmente.

La Integración Continua Automatizada emplea un servidor o demonio de integración continua para monitorear el sistema de control de revisiones en busca de cambios y luego ejecutar automáticamente el proceso de compilación.

### **Cada confirmación de corrección de errores debe adjuntarse a un caso de prueba** <!-- omit in toc -->

Al corregir un error, es una buena práctica impulsar un caso de prueba que reproduzca el error. Esto evita que se revierta la corrección y que vuelva a aparecer el error, lo que se conoce como regresión.

Los investigadores han propuesto automatizar esta tarea: si una confirmación de corrección de errores no contiene un caso de prueba, se puede generar a partir de las pruebas ya existentes.

### **Prueba en un clon del entorno de producción** <!-- omit in toc -->

Tener un entorno de prueba puede provocar fallas en los sistemas probados cuando se implementan en el entorno de producción porque el entorno de producción puede diferir del entorno de prueba de manera significativa.

Sin embargo, construir una réplica de un entorno de producción tiene un costo prohibitivo. En su lugar, el entorno de prueba o un entorno de preproducción independiente ("puesta en escena") debe crearse para que sea una versión escalable del entorno de producción para aliviar los costos y, al mismo tiempo, mantener la composición y los matices de la pila de tecnología.

Dentro de estos entornos de prueba, la virtualización de servicios se usa comúnmente para obtener acceso bajo demanda a dependencias (por ejemplo, API, aplicaciones de terceros, servicios, mainframes, etc.) que están más allá del control del equipo, que aún están en evolución o son demasiado complejas para configurar en un laboratorio de pruebas virtual.

### **Facilita la obtención de las últimos entregas** <!-- omit in toc -->

Hacer que las compilaciones estén fácilmente disponibles para las partes interesadas y los probadores puede reducir la cantidad de reelaboración necesaria cuando se reconstruye una función que no cumple con los requisitos.

Además, las pruebas tempranas reducen las posibilidades de que los defectos sobrevivan hasta la implementación. Encontrar errores antes puede reducir la cantidad de trabajo necesario para resolverlos.

Todos los programadores deben comenzar el día actualizando el proyecto desde el repositorio. De esa manera, todos estarán actualizados.

### **Automatizar la implementación** <!-- omit in toc -->

La mayoría de los sistemas de CI permiten la ejecución de scripts una vez finalizada la compilación. En la mayoría de las situaciones, es posible escribir un script para implementar la aplicación en un servidor de prueba en vivo que todos puedan ver.

Otro avance en esta forma de pensar es la implementación continua , que requiere que el software se implemente directamente en la producción, a menudo con automatización adicional para evitar defectos o regresiones

## **Costos y beneficios de la Integración Continua**

La integración continua está destinada a producir beneficios como:

- Los errores de integración se detectan temprano y son fáciles de rastrear debido a pequeños conjuntos de cambios. Esto ahorra tiempo y dinero durante la vida útil de un proyecto.
- Evitar el caos de último minuto en las fechas de lanzamiento, cuando todos intentan verificar sus versiones ligeramente incompatibles
- Cuando las pruebas unitarias fallan o surge un error , si los desarrolladores necesitan revertir la base de código a un estado libre de errores sin depurar , solo se pierde una pequeña cantidad de cambios (porque la integración ocurre con frecuencia)
- Disponibilidad constante de una compilación "actual" para fines de prueba, demostración o lanzamiento
- El registro frecuente de código impulsa a los desarrolladores a crear código modular y menos complejo.

Con las pruebas automatizadas continuas, se pueden obtener los siguientes beneficios:

- Hace cumplir la disciplina de las pruebas automatizadas frecuentes
- Comentarios inmediatos sobre el impacto de los cambios locales en todo el sistema
- Las métricas de software generadas a partir de pruebas automatizadas y CI (como métricas para la cobertura del código , la complejidad del código y la integridad de las funciones ) enfocan a los desarrolladores en desarrollar código funcional y de calidad, y ayudan a desarrollar el impulso en un equipo

Algunas desventajas de la integración continua pueden incluir:

- La construcción de un conjunto de pruebas automatizado requiere una cantidad considerable de trabajo, incluido un esfuerzo continuo para cubrir nuevas funciones y seguir las modificaciones intencionales del código.
- Hay algo de trabajo involucrado para configurar un sistema de compilación , y puede volverse complejo, lo que dificulta la modificación flexible.
- La integración continua no es necesariamente valiosa si el alcance del proyecto es pequeño o contiene código heredado no comprobable.
- El valor agregado depende de la calidad de las pruebas y de lo comprobable que sea realmente el código.
- Los equipos más grandes significan que se agrega código nuevo constantemente a la cola de integración, por lo que el seguimiento de las entregas (mientras se preserva la calidad) es difícil y las colas de construcción pueden ralentizar a todos.
- Con varias confirmaciones y fusiones al día, el código parcial de una función podría enviarse fácilmente y, por lo tanto, las pruebas de integración fallarán hasta que la función esté completa.
- La seguridad y la garantía de desarrollo de misión crítica (por ejemplo, DO-178C , ISO 26262 ) requieren una documentación rigurosa y una revisión en proceso que son difíciles de lograr mediante la integración continua. Este tipo de ciclo de vida a menudo requiere que se completen pasos adicionales antes del lanzamiento del producto cuando se requiere la aprobación regulatoria del producto.

**Categorías**: Integración Continua \ Desarrollo Ágil de Software \ Programación Extrema \ Proceso de Desarrollo de Software
{: .notice--success}

> **INF.**: Esta obra contiene una traducción total derivada de [Integración continua](https://en.wikipedia.org/wiki/Continuous_integration){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del  29 de Septiembre de 2020, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=Continuous_integration&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}