---

layout: page
author: rosepac
bootstrap: true
comments: false
thumbnail: /assets/img/paginas/fp/modulo-entorno-desarrollo/tema-desarrollo-de-software.webp
feature-img: /assets/img/paginas/fp/modulo-entorno-desarrollo/tema-desarrollo-de-software.webp
img: /assets/img/paginas/fp/modulo-entorno-desarrollo/tema-desarrollo-de-software.webp
title: '▷ Desarrollo del Software: Unidad 1 de Entornos de Desarrollo'
description: >-
  'Introducción al desarrollo del software y la instalación y uso de entornos de desarrollo.'
excerpt: >-
  'Introducción al desarrollo del software y la instalación y uso de entornos de desarrollo.'
canonical_URL: https://ciberninjas.com/recursos-daw/desarrollo-software/
permalink: /recursos-daw/desarrollo-software/
date: 2020-10-22 07:33:33
last_modified_at: 
published: true

---

<div class="hidden-sm-down">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
    <li class="breadcrumb-item"><a href="/programa-gratis/">Programa Gratis</a></li>
    <li class="breadcrumb-item"><a href="/recursos-daw/">Recursos DAW</a></li>
    <li class="breadcrumb-item"><a href="/recursos-daw/entornos-desarrollo-introduccion/">Entorno Desarrollo</a></li>
    <li class="breadcrumb-item active" aria-current="page">Desarrollo del Software</li>
  </ol>
</nav>
</div>

<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement":
 [
  {
   "@type": "ListItem",
   "position": 1,
   "item":
   {
    "@id": "https://ciberninjas.com/programa-gratis/",
    "name": "Programar Gratis"
    }
  },
  {
   "@type": "ListItem",
  "position": 2,
  "item":
   {
     "@id": "https://ciberninjas.com/recursos-daw/",
     "name": "Programar Gratis con Recursos del Ciclo Formativo de Grado Superior de Desarrollo de Aplicaciones Web"
   }
  },
  {
   "@type": "ListItem",
  "position": 2,
  "item":
   {
     "@id": "https://ciberninjas.com/recursos-daw/entorno-desarrollo-introduccion/",
     "name": "Breve descripción de en qué consiste el módulo de Entornos de Desarrollo"
   },
  {
   "@type": "ListItem",
  "position": 2,
  "item":
   {
     "@id": "https://ciberninjas.com/recursos-daw/desarrollo-software/",
     "name": "Introducción al desarrollo del software y la instalación y uso de entornos de desarrollo."
   }
  }
 ]
}
</script>

Toda aplicación informática, ya sea utilizada en un soporte convencional (como un ordenador de sobremesa o un ordenador portátil) o sea utilizada en un soporte de nueva generación (por ejemplo, dispositivos móviles como un teléfono móvil de última generación o una tableta táctil PC), ha seguido un procedimiento planificado y desarrollado detalle por detalle para su creación. Este irá desde la concepción de la idea o de la funcionalidad que deberá satisfacer esta aplicación hasta la generación de uno o varios ficheros que permitan su ejecución exitosa.

Para convertir esta concepción de una idea abstracta en un producto acabado que sea eficaz y eficiente habrá muchos más pasos, muchas tareas que hacer. Estas tareas deberán estar bien planificadas y que sigan un guión que puede tener en cuenta aspectos como:

- Analizar las necesidades que tienen las personas que utilizarán este software, escuchar como el querrán, atender a sus indicaciones ...
- Diseñar una solución que tenga en cuenta todas las necesidades antes analizadas: qué deberá hacer el software, qué interfaces gráficas tendrá y cómo serán éstas, qué datos se deberán almacenar y cómo se hará..
- Desarrollar el software que implemente todo lo analizado y diseñado anteriormente, haciéndolo de una forma lo más modular posible para facilitar el posterior mantenimiento o manipulación por parte de otros programadores.
- Llevar a cabo las pruebas pertinentes, tanto de forma individualizada para cada módulo como de forma completa, a fin de validar que el código desarrollado es correcto y que hace lo que debe hacer según lo establecido en los requerimientos.
- Implantar el software en el entorno donde los usuarios finales lo utilizarán.

Este apartado se centrará en el tercer punto, el desarrollo de software.

- [**1. Concepto de programa informático**](#1-concepto-de-programa-informático)
- [**2. Código fuente, código objeto y código excutable: máquinas virtuales**](#2-código-fuente-código-objeto-y-código-excutable-máquinas-virtuales)
  - [**2.1. Máquina virtual**](#21-máquina-virtual)
  - [**2.2. La máquina virtual Java**](#22-la-máquina-virtual-java)
- [**3. Tipos de lenguajes de programación**](#3-tipos-de-lenguajes-de-programación)
  - [**3.1. Características de los lenguajes de primera y segunda generación**](#31-características-de-los-lenguajes-de-primera-y-segunda-generación)
    - [**3.1.1. Los Compiladores**](#311-los-compiladores)
    - [**3.1.2. Los intérpretes**](#312-los-intérpretes)
    - [**3.1.3. Los compiladores ante intérpretes**](#313-los-compiladores-ante-intérpretes)
  - [**3.2. Características de los lenguajes de tercera, cuarta y quinta generación**](#32-características-de-los-lenguajes-de-tercera-cuarta-y-quinta-generación)
- [**4. Paradigmas de programación**](#4-paradigmas-de-programación)
- [**5. Características de los lenguajes más difundidos**](#5-características-de-los-lenguajes-más-difundidos)
  - [**5.1 Características de la programación estructurada**](#51-características-de-la-programación-estructurada)
    - [**5.1.1. Claridad**](#511-claridad)
    - [**5.1.2. Teorema de la estructura**](#512-teorema-de-la-estructura)
    - [**5.1.3. Diseño descendente**](#513-diseño-descendente)
    - [**5.1.4. Programación modular***](#514-programación-modular)
    - [**5.1.5. Tipos abstractos de datos**](#515-tipos-abstractos-de-datos)
  - [**5.2 Características de la programación orientada a objetos**](#52-características-de-la-programación-orientada-a-objetos)
    - [**5.2.1. Abstracción**](#521-abstracción)
    - [**5.2.2. Encapsulación**](#522-encapsulación)
    - [**5.2.3. Modularidad**](#523-modularidad)
    - [**5.2.4. Jerarquía**](#524-jerarquía)
    - [**5.2.5. El Polimorfismo**](#525-el-polimorfismo)
- [**6. Fases del desarrollo de los sistemas de información**](#6-fases-del-desarrollo-de-los-sistemas-de-información)
  - [**6.1. Estudio de viabilidad del sistema**](#61-estudio-de-viabilidad-del-sistema)
  - [**6.2. Análisis del sistema de información**](#62-análisis-del-sistema-de-información)
  - [**6.3. Diseño del sistema de información**](#63-diseño-del-sistema-de-información)
  - [**6.4. Construcción del sistema de información**](#64-construcción-del-sistema-de-información)
  - [**6.5. Implantación y aceptación del sistema**](#65-implantación-y-aceptación-del-sistema)

## **1. Concepto de programa informático**

Un primer paso para poder empezar a analizar cómo hay que hacer un programa informático es tener claro qué es un programa y qué significa este concepto. En contraste con otros términos usados en informática, es posible referirse a un "programa" en el lenguaje coloquial sin tener que estar hablando necesariamente de ordenadores. Se podría estar refiriéndose al programa de un ciclo de conferencias o de cine. Pero, aunque no se trata de un contexto informático, este uso ya aporta una idea general de su significado.

> <i class="fas fa-star"></i> *Un programa infomatico es un conjunto de eventos ordenados de manera que se suceden de forma secuencial en el tiempo, uno tras otro.*

Otro uso habitual, ahora sí vinculado al contexto de las máquinas y los autómatas, podría ser referirse al programa de una lavadora o de un robot de cocina. En este caso, sin embargo, lo que se sucede son un conjunto, no tanto de eventos, sino de órdenes que el electrodoméstico sigue ordenadamente. Una vez seleccionado el programa que queremos, el electrodoméstico hace todas las tareas correspondientes de manera autónoma.

Por ejemplo, el programa de un robot de cocina para hacer una crema de zanahoria sería:

1. Espera que introduzca las zanahorias bien limpiadas, una patata y especias al gusto.
2. Gira durante 1 minuto, avanzando progresivamente hasta la velocidad 5.
3. Espera que introduzca leche y sal.
4. Gira durante 30 segundos a velocidad 7.
5. Gira durante 10 minutos a velocidad 3 mientras cuece a una temperatura de 90 grados.
6. Se detiene. La crema de zanahoria está lista!

Este conjunto de comandos no es arbitrario, sino que sirve para llevar a cabo una tarea de cierta complejidad que no se puede hacer de una sola vez. Se debe hacer paso por paso. Todas las órdenes están vinculadas entre sí para llegar a alcanzar este objetivo y, sobre todo, es muy importante la disposición en que se llevan a cabo.

Entrando ya, ahora sí, en el mundo de los ordenadores, la forma en que se estructuran las tareas que deben ser ejecutadas es similar a los programas de electrodomésticos anteriormente citados. En este caso, sin embargo, en lugar de transformar ingredientes (o lavar ropa sucia, si se tratase de una lavadora), lo que la computadora transforma es información o datos.

> <i class="fas fa-star"></i> *Un **programa informático** no es más que una serie de órdenes que se llevan a cabo secuencialmente, aplicadas sobre un conjunto de datos.*

Qué datos procesa un programa informático? Bueno, esto dependerá del tipo de programa:

- Un editor procesa los datos de un documento de texto.
- Una hoja de cálculo procesa datos numéricos ubicadas en un fichero.
- Un videojuego procesa los datos que hacen referencia a la forma y ubicación de enemigos y jugadores, las interfaces gráficas donde se encontrará el jugador, los puntos conseguidos ...
- Un navegador web procesa las órdenes del usuario y los datos que recibe desde un servidor ubicado en internet.
- Un reproductor de vídeo procesa los fotogramas almacenados en un archivo y el audio relacionado.

Por lo tanto, la tarea de un programador informático es escoger qué órdenes constituirán un programa de ordenador, en qué orden se deben llevar a cabo y sobre qué datos hay que aplicarlas para que el programa lleve a cabo la tarea que debe resolver.

> <i class="fas fa-spell-check"></i> ***Ejecutar un programa***
> 
> *Por "ejecutar un programa" se entiende hacer que el ordenador siga todas sus órdenes, desde la primera hasta la última.*

La dificultad de todo ello será más o menos grande dependiendo de la complejidad misma de lo que es necesario que el programa haga. No es lo mismo establecer qué debe hacer el ordenador para resolver una multiplicación de tres números que para procesar textos o visualizar páginas en Internet.

Por otra parte, una vez hecho el programa, cada vez que se ejecute, el ordenador cumplirá todas las órdenes del programa.

De hecho, un ordenador es incapaz de hacer absolutamente nada por sí mismo, siempre hay que decirle qué debe hacer. Y eso se le llama mediante la ejecución de programas. Aunque desde el punto de vista del usuario puede parecer que cuando se pone en marcha un ordenador este funciona sin ejecutar ningún programa concreto, hay que tener en cuenta que su sistema operativo es un programa que está siempre en ejecución.

## **2. Código fuente, código objeto y código excutable: máquinas virtuales**

Para crear un programa lo que se hará será crear un archivo y escribir a un fichero cuyo serie de instrucciones que se quiere que el ordenador ejecute.

> <i class="fas fa-spell-check"></i> ***Editores de texto simples***
> 
> *Un editor de texto simple es aquel que permite escribir sólo texto sin formato. Son ejemplos el Bloc de Notas (Windows), Gedit o Emacs (Unix).*

Estas instrucciones deberán seguir unas pautas determinadas en función del lenguaje de programación elegido. Además, deberían seguir un orden determinado que dará sentido al programa escrito. Para empezar bastará con un editor de texto simple.

> <i class="fas fa-star"></i> *Una vez se ha terminado de escribir el programa, el conjunto de archivos de texto resultantes, donde se encuentran las instrucciones, se dice que contienen el código fuente . Este código fuente puede ser desde un nivel muy alto, muy cerca del lenguaje humano, hasta un nivel más bajo, más cercano al código de las máquinas, como el código ensamblador.*

> <i class="fas fa-info"></i> En el apartado "Tipos de lenguajes de programación" se describen las características de los lenguajes máquina, ensamblador, de alto nivel y de propósito específico.

La tendencia actual es hacer uso de lenguajes de alto nivel, es decir, cercanos al lenguaje humano. Pero esto hace aparecer un problema, y es que los archivos de código fuente no contienen el lenguaje máquina que entenderá el ordenador. Por lo tanto, resultan incomprensibles para el procesador. Para poder generar código máquina hay que hacer un proceso de traducción desde los mnemotécnicos que contiene cada archivo a las secuencias binarias que entiende el procesador.

> <i class="fas fa-paperclip"></i> *El código objeto de las instrucciones tiene este aspecto: 10101001000001101100110 10100101011100001110111*.

El proceso llamado **compilación** es la traducción del código fuente de los archivos del programa en archivos en formato binario que contienen las instrucciones en un formato que el procesador puede entender. El contenido de estos archivos se denomina **código objeto**. 

> <i class="fas fa-star"></i> *El* ***código objeto*** *es el código fuente traducido (por el compilador) a código máquina, pero este código aún no puede ser ejecutado por el ordenador.*

El programa que hace este proceso se denomina **compilador**.

> <i class="fas fa-star"></i> *El* ***código ejecutable*** *es la traducción completa en código máquina, llevada a cabo por el enlazador (en inglés, linker). El código ejecutable es interpretado directamente por el ordenador.*

El **enlazador** es el encargado de insertar el código objeto las funciones de las librerías que son necesarias para el programa y de llevar a cabo el proceso de montaje generando un archivo ejecutable.

Una **librería** es un colección de código predefinido que facilita la tarea del programador a la hora de codificar un programa.

A continuación, en la Figura. 1, se muestra un resumen ordenado de todos los conceptos definidos.

> 👷‍♂️ IMAGEN POR AGREGAR 👨‍🎨
<!-- https://yandex.com/images/search?text=proceso%20de%20transformaci%C3%B3n%20de%20un%20c%C3%B3digo%20fuente -->

El código fuente desarrollado por los programadores se convertirá en código objeto con la ayuda del compilador. Este ayudará a localizar los errores de sintaxis o de compilación que se encuentren en el código fuente. Con el enlazador, que recogerá el código objeto y las librerías, se generará el código ejecutable.

### **2.1. Máquina virtual**

El concepto de máquina virtual surge con el objetivo de facilitar el desarrollo de compiladores que generan código para diferentes procesadores.

La **compilación** consta de dos fases:

- La primera parte del código fuente en un lenguaje intermedio obteniendo un programa equivalente con un menor nivel de abstracción que el original y que no puede ser directamente ejecutado.
- La segunda fase traduce el lenguaje intermedio a un lenguaje comprensible para la máquina.

Llegado este punto se podría plantear la pregunta: ¿por qué dividir la compilación en dos fases? El objetivo es que el código de la primera fase, el código intermedio, sea común para cualquier procesador, y que el código generado en la segunda fase sea el específico para cada procesador. De hecho, la traducción del lenguaje intermedio al lenguaje máquina no se suele hacer mediante compilación sino mediante un intérprete, tal como se muestra en la Figura 2.

> 👷‍♂️ IMAGEN POR AGREGAR 👨‍🎨
<!-- https://yandex.com/images/search?text=virtual%20machine%20process -->

### **2.2. La máquina virtual Java**

La máquina virtual Java (JVM) es el entorno en el que se ejecutan los programas Java. Es un programa nativo, es decir, ejecutable en una plataforma específica, que es capaz de interpretar y ejecutar instrucciones expresadas en un código de bytes o (el bytecode de Java) que es generado por el compilador del lenguaje Java.

> <i class="fas fa-spell-check"></i> ***Código de bytes***
>
> *El código de bytes no es un lenguaje de alto nivel, sino un verdadero código máquina de bajo nivel, viable incluso como lenguaje de entrada para un microprocesador físico.*

La máquina virtual Java es una pieza fundamental de la tecnología Java. Se sitúa en un nivel superior al hardware sobre el que se desea ejecutar la aplicación y actúa como un puente entre el código de bytes a ejecutar y el sistema. Así, cuando un programador escribe una aplicación Java, lo hace pensando en la JVM encargada de ejecutar la aplicación y no hay ningún motivo para pensar en las características de la plataforma física sobre la que se debe ejecutar la aplicación . La JVM será la encargada, al ejecutar la aplicación, de convertir el código de bytes a código nativo de la plataforma física.

La gran ventaja de la JVM es que posibilita la portabilidad de la aplicación a diferentes plataformas y, así, un programa Java escrito en un sistema operativo Windows se puede ejecutar en otros sistemas operativos (Linux, Solaris y Apple OS X) con el único requerimiento de disponer de la JVM para el sistema correspondiente.

El concepto de máquina virtual Java se usa en dos ámbitos: por un lado, para hacer referencia al conjunto de especificaciones que debe cumplir cualquier implementación de la JVM; por otra parte, para hacer referencia a las diversas implementaciones de la máquina virtual Java existentes y de las que hay que utilizar alguna para ejecutar las aplicaciones Java.

> <i class="fas fa-info"></i> *En los materiales web se puede encontrar una explicación, paso a paso, de cómo descargar e instalar la máquina virtual Java.*

La empresa Sun Microsystems es la propietaria de la marca registrada Java, y esta se utiliza para certificar las implementaciones de la JVM que se ajustan y son totalmente compatibles con las especificaciones de la JVM.

En el prefacio de las que se dice: "Esperamos que esta especificación documente suficientemente la máquina virtual de Java para hacer posibles implementaciones desde cero. Sun proporciona tests que verifican que las implementaciones de la máquina virtual Java operan correctamente."

## **3. Tipos de lenguajes de programación**

Establecido el concepto de programa informático y los conceptos de código fuente, código objeto y código ejecutable (así como el de máquina virtual), hay ahora establecer las diferencias entre los diversos tipos de código fuente existentes, a través de los cuales se llega a obtener un programa informático.

> <i class="fas fa-star"></i> *Un* ***lenguaje de programación*** *es un lenguaje que permite establecer una comunicación entre el hombre y la máquina. El lenguaje de programación identificará el código fuente, que el programador desarrollará para indicar a la máquina, una vez este código se haya convertido en código ejecutable, qué pasos debe dar.*

Durante los últimos años ha existido una evolución constante en los lenguajes de programación. Se ha establecido una creciente evolución en la que se van incorporando elementos que permiten crear programas cada vez más sólidos y eficientes. Esto facilita mucho la tarea del programador para el desarrollo del software, su mantenimiento y la adaptación. Hoy en día, existen, incluso, lenguajes de programación que permiten la creación de aplicaciones informáticas a personas sin conocimientos técnicos de informática, por el hecho de existir una creación prácticamente automática del código a partir de unas preguntas.

Los diferentes tipos de lenguajes son:

- Lenguaje de primera generación o lenguaje máquina.
- Lenguajes de segunda generación o lenguajes de ensamblador.
- Lenguajes de tercera generación o lenguajes de alto nivel.
- Lenguajes de cuarta generación o lenguajes de propósito específico.
- Lenguajes de quinta generación.

> <i class="fas fa-star"></i> *El primer tipo de lenguaje que se desarrolló es el llamado* ***lenguaje de primera generación o lenguaje máquina***. *Es el único lenguaje que entiende el ordenador directamente*.

Su estructura está totalmente adaptada a los circuitos impresos de ordenadores o procesadores electrónicos y muy alejada de la forma de expresión y análisis de los problemas propios de los humanos (las instrucciones se expresan en código binario). Esto hace que la programación en este lenguaje resulte tediosa y complicada, ya que se requiere un conocimiento profundo de la arquitectura física del ordenador. Además, se valorará que el código máquina hace posible que el programador utilice la totalidad de recursos del hardware, con lo cual se pueden obtener programas muy eficientes.

{% highlight js %}
10110000 01100001 Esta línea contiene una instrucción que mueve un valor al registro del procesador.
{% endhighlight %}

Actualmente, debido a la complejidad del desarrollo de este tipo de lenguaje, está prácticamente en desuso. Sólo se utilizará en procesadores muchos concretos o para funcionalidades muy específicas.

> <i class="fas fa-star"></i> *El segundo tipo de lenguaje de programación son los* ***lenguajes de segunda generación o lenguajes de ensamblador***. *Se trata del primer lenguaje de programación que utiliza códigos mnemotécnicos para indicar a la máquina las operaciones que debe llevar a cabo. Estas operaciones, muy básicas, han sido diseñadas a partir del conocimiento de la estructura interna de la propia máquina.*

Cada instrucción en lenguaje ensamblador corresponde a una instrucción en lenguaje máquina. Estos tipos de lenguajes dependen totalmente del procesador que utilice la máquina, por eso se dice que están orientados a las máquinas.

En la Figura. 3 se muestra un esquema del funcionamiento de los lenguajes de segunda generación. A partir del código escrito en lenguaje ensamblador, el programa traductor (ensamblador) lo convierte en código de primera generación, que será interpretado por la máquina.

<!-- https://yandex.com/images/search?text=funcionamiento%20de%20lenguaje%20de%20segunda%20generacion -->
En general se utiliza este tipo de lenguajes para programar controladores ( drivers ) o aplicaciones de tiempo real, ya que requiere un uso muy eficiente de la velocidad y de la memoria.

### **3.1. Características de los lenguajes de primera y segunda generación**

Como ventajas de los lenguajes de primera y segunda generación se pueden establecer:

- Permiten escribir programas muy optimizados que aprovechan al máximo el hardware ( *hardware* ) disponible.
- Permiten al programador especificar exactamente qué instrucciones quiere que se ejecuten.

Los inconvenientes son los siguientes:

- Los programas escritos en lenguajes de bajo nivel están completamente ligados al hardware donde se ejecutarán y no se pueden trasladar fácilmente a otros sistemas con un hardware diferente.
- Hay que conocer a fondo la arquitectura del sistema y del procesador para escribir buenos programas.
- No permiten expresar de forma directa conceptos habituales a nivel de algoritmo.
- Son difíciles de codificar, documentar y mantener.

> <i class="fas fa-star"></i> *El siguiente grupo de* ***lenguajes se conoce como lenguajes de tercera generación o lenguajes de alto nivel***. *Estos lenguajes, más evolucionados, utilizan palabras y frases relativamente fáciles de entender y proporcionan también facilidades para expresar alteraciones del flujo de control de una forma bastante sencilla e intuitiva.*

Los lenguajes de tercera generación o de alto nivel se utilizan cuando se quiere desarrollar aplicaciones grandes y complejas, donde se prioriza el hecho de facilitar y comprender cómo hacer las cosas (lenguaje humano) por encima del rendimiento del software o de su uso de la memoria.

Los esfuerzos encaminados a hacer la tarea de programación independiente de la máquina donde se ejecutarán dieron como resultado la aparición de los lenguajes de programación de alto nivel.

Los lenguajes de alto nivel son normalmente fáciles de aprender porque están formados por elementos de lenguajes naturales, como el inglés. A continuación se muestra un ejemplo de algoritmo implementado en un lenguaje de alto nivel, concretamente en Basic. Este algoritmo calcula el factorial de un número dado a la función como parámetro. Se puede observar como es fácilmente comprensible con un mínimo conocimiento del inglés.

> <i class="fas fa-paperclip"></i> *En Basic, el lenguaje de alto nivel más conocido, las órdenes como IF comptador = 10 THEN STOPpueden utilizarse para pedir a la computadora que pare si la variable contador es igual a diez.*

{% highlight js %}
'------------------------------------------
'Función Factorial
'-----------------------------------------
Public Function Factorial (num As Integer) As String
Dim y As Integer
    For i = 1 To num - 1
    num = num * y
    Factorial = num
  Next
End Function
{% endhighlight %}

Como consecuencia de este alejamiento de la máquina y acercamiento a las personas, los programas escritos en lenguajes de programación de tercera generación no pueden ser interpretados directamente por el ordenador, sino que es necesario llevar a cabo previamente su traducción a lenguaje máquina . Hay dos tipos de traductores: los compiladores y los intérpretes.

#### **3.1.1. Los Compiladores**

Los compiladores son programas que traducen el programa escrito con un lenguaje de alto nivel al lenguaje máquina. El compilador detectará los posibles errores del programa fuente para conseguir un programa ejecutable depurado.

Algunos ejemplos de códigos de programación que deberán pasar por un compilador son: Pascal, C, C ++, .NET, ...

En la Figura .4 se puede ver, en un esquema, la función del compilador entre los dos lenguajes.

<!-- https://yandex.com/images/search?text=pasos%20del%20codigo%20compilado -->

El procedimiento que deberá seguir un programador es el siguiente:

- Crear el código fuente.
- Crear el código ejecutable en uso de compiladores y enlazadores.
- El código ejecutable depende de cada sistema operativo. Para cada sistema hay un compilador, es decir, si se quiere ejecutar el código con otro sistema operativo debe recompilar el código fuente.
- El programa resultante se ejecuta directamente desde el sistema operativo.

En la Figura. 5 se puede observar un esquema que representa la dependencia del sistema operativo a la hora de elegir y utilizar compilador.

<!-- https://yandex.com/images/search?text=codigo%20compilado%20por%20so -->

#### **3.1.2. Los intérpretes**

El intérprete también es un programa que traduce el código de alto nivel al lenguaje máquina, pero, a diferencia del compilador, lo hace en tiempo de ejecución. Es decir, no se hace un proceso previo de traducción de todo el programa fuente a código de bytes, sino que se va traduciendo y ejecutando instrucción por instrucción.

Algunos ejemplos de códigos de programación que deberán pasar por un intérprete son: JavaScript, PHP, ASP..

Algunas características de los lenguajes interpretados son:

- El código interpretado no es ejecutado directamente por el sistema operativo, sino que hace uso de un intérprete.
- Cada sistema tiene su propio intérprete.

#### **3.1.3. Los compiladores ante intérpretes**

El intérprete es notablemente más lento que el compilador, ya que lleva a cabo la traducción al tiempo que la ejecución. Además, esta traducción se hace siempre que se ejecuta el programa, mientras que el compilador sólo la lleva a cabo una vez. La ventaja de los intérpretes es que hacen que los programas sean más portables. Así, un programa compilado en un ordenador con sistema operativo Windows no funcionará en un Macintosh, o en un ordenador con sistema operativo Linux, a menos que se vuelva a compilar el programa fuente en el nuevo sistema.

### **3.2. Características de los lenguajes de tercera, cuarta y quinta generación**

Los lenguajes de tercera generación son aquellos que son capaces de contener y ejecutar, en una sola instrucción, el equivalente a varias instrucciones de un lenguaje de segunda generación.

Las ventajas de los lenguajes de tercera generación son:

- El código de los programas es mucho más sencillo y comprensible.
- Son independientes del hardware (no hacen ninguna referencia). Por este motivo es posible "llevar" el programa entre diferentes ordenadores / arquitecturas / sistemas operativos (siempre que en el sistema de destino exista un compilador para este lenguaje de alto nivel).
- Es más fácil y rápido escribir los programas y más fácil mantenerlos.

Los inconvenientes de los lenguajes de tercera generación son:

- Su ejecución en un ordenador puede resultar más lenta que el mismo programa escrito en lenguaje de bajo nivel, aunque esto depende mucho de la calidad del compilador que haga la traducción.

Ejemplos de lenguajes de programación de tercera generación: C, C ++, Java, Pascal..

> <i class="fas fa-star"></i> *Los* ***lenguajes de cuarta generación o lenguajes de propósito específico***. *Aportan un nivel muy alto de abstracción en la programación, permitiendo desarrollar aplicaciones sofisticadas en un espacio corto de tiempo, muy inferior al necesario para los lenguajes de 3ª generación.*

> <i class="fas fa-paperclip"></i> *IDE son las siglas en inglés de Integrated Development Environment, es decir, Entorno Integrado de Desarrollo.*

Se automatizan ciertos aspectos que antes había que hacer a mano. Incluyen herramientas orientadas al desarrollo de aplicaciones (IDE) que permiten definir y gestionar bases de datos, realizar informes (p. Ejemplo: Oracle reports), consultas (p. Ej .: informix 4GL), módulos ..., escribiendo muy pocas líneas de código o ninguna.

Permiten la creación de prototipos de una aplicación rápidamente. Los prototipos permiten tener una idea del aspecto y del funcionamiento de la aplicación antes de que el código esté terminado. Esto facilita la obtención de un programa que reúna las necesidades y expectativas del cliente.

- Mayor abstracción.
- Menor esfuerzo de programación.
- Menor coste de desarrollo del software.
- Basados en generación de código a partir de especificaciones de nivel muy alto.
- Se pueden llevar a cabo aplicaciones sin ser un experto en el lenguaje.
- Suelen tener un conjunto de instrucciones limitado.
- Son específicos del producto que les ofrece.

Estos lenguajes de programación de cuarta generación están orientados, básicamente, a las aplicaciones de negocio y el manejo de bases de datos.

Algunos ejemplos de lenguajes de cuarta generación son Visual Basic, Visual Basic .NET, ABAP de SAP, FileMaker, PHP, ASP, 4D..

En la figura .6 se puede ver el entorno de trabajo y un ejemplo de código fuente de FileMaker.

<!-- agregar imagen -->
> <i class="fas fa-paperclip"></i> *Los* ***lenguajes de quinta generación*** *son lenguajes específicos para el tratamiento de problemas relacionados con la inteligencia artificial y los sistemas expertos.*

En lugar de ejecutar sólo un conjunto de comandos, el objetivo de estos sistemas es "pensar" y anticipar las necesidades de los usuarios. Estos sistemas se encuentran todavía en desarrollo. Se trataría del paradigma lógico.

Algunos ejemplos de lenguajes de quinta generación son Lisp o Prolog.

## **4. Paradigmas de programación**

Es difícil establecer una clasificación general de los lenguajes de programación, ya que existe un gran número de lenguajes y, a veces, diferentes versiones de un mismo lenguaje. Esto provocará que en cualquier clasificación que se haga un mismo lenguaje pertenezca a más de uno de los grupos establecidos. Una clasificación muy extendida, atendiendo a la forma de trabajar de los programas ya la filosofía con que fueron concebidos, es la siguiente:

- Paradigma imperativo / estructurado.
- Paradigma de objetos.
- Paradigma funcional.
- Paradigma lógico.

> <i class="fas fa-star"></i> *El* ***paradigma imperativo / estructurado*** *debe su nombre al papel dominante que ejercen las sentencias imperativas, es decir aquellas que indican llevar a cabo una determinada operación que modifica los datos guardados en memoria.*

Algunos de los lenguajes imperativos son C, Basic, Pascal, Cobol ...

La técnica seguida en la programación imperativa es la **programación estructurada** . La idea es que cualquier programa, por complejo y grande que sea, puede ser representado mediante tres tipos de estructuras de control:

- Secuencia.
- Selección.
- Iteración.

Por otra parte, también se propone desarrollar el programa con la técnica de diseño descendente (*top-down*). Es decir, modular el programa creando porciones más pequeñas de programas con tareas específicas, que se subdividen en otros subprogramas, cada vez más pequeños. La idea es que estos subprogramas típicamente llamados funciones o procedimientos deben resolver un único objetivo o tarea.

Imaginemos que tenemos que hacer una aplicación que registre los datos básicos del personal de una escuela, datos como pueden ser el nombre, el DNI, y que calcule el salario de los profesores así como el de los administrativos, donde el salario de los administrativos es el sueldo base ( `SOU_BASE`) * 10 mientras que el salario de los profesores es el sueldo base ( `SOU_BASE`) + número de horas impartidas ( `numHores`) * 12.

{% highlight js %}
const float SOU_BASE = 1.000;

struct Administrativo
{
    string nombre;
    string DNI;
    float Salario;
}

struct Profesor
{
    string nombre;
    string DNI;
    int numHores;
    float salario;
}

void AssignarSalariAdministratiu (Administrativo administratiu1)
{
    administratiu1. salario = SOU_BASE * 10;
}

void AssignarSalariProfessor (Profesor profesor1)
{
    profesor1. salario = SOU_BASE + (numHores * 12);
}
{% endhighlight %}

> <i class="fas fa-star"></i> *El* ***paradigma de objetos***, *típicamente conocido como Programación Orientada a Objetos (POO, o OOP en inglés), es un paradigma de construcción de programas basado en una abstracción del mundo real. En un programa orientado a objetos, la abstracción no son procedimientos ni funciones sino los objetos. Estos objetos son una representación directa de algo del mundo real, como un libro, una persona, un pedido, un empleado*..

Algunos de los lenguajes de programación orientada a objetos son C ++, Java, C #..

Un objeto es una combinación de datos (llamadas atributos) y métodos (funciones y procedimientos) que nos permiten interactuar con él. En este tipo de programación, por lo tanto, los programas son conjuntos de objetos que interactúan entre ellos a través de mensajes (llamadas a métodos).

La programación orientada a objetos se basa en la integración de 5 conceptos: abstracción, encapsulación, modularidad, jerarquía y polimorfismo, que es necesario comprender y seguir de manera absolutamente rigurosa. No seguir sistemáticamente, omitirlos puntualmente por prisa u otras razones hace perder todo el valor y los beneficios que nos aporta la orientación a objetos.

{% highlight js %}
class Trabajador {
   private:
      string nombre;
      string DNI;
   protected:
      static const float SOU_BASE = 1.000; 
   public:
      string GetNom () {return this.nom;}
      void SetNom (string n) {this.nom = n;}
      string GetDNI () {return this.DNI;}
      void SetDNI (string dni) {this.DNI = dni;}
      virtual float salario () = 0;
}

class Administrativo: public Trabajador {
   public:
      float Salario () {return SOU_BASE * 10};
}

class Profesor: public Trabajador {
   private:
      int numHores;
   public:
      float Salario () {return SOU_BASE + (numHores * 15);}
}
{% endhighlight %}

> *El* ***paradigma funcional*** *está basado en un modelo matemático. La idea es que el resultado de un cálculo es la entrada del siguiente, y así sucesivamente hasta que una composición produzca el resultado deseado.*

Los creadores de los primeros lenguajes funcionales pretendían convertirlos en lenguajes de uso universal para el procesamiento de datos en todo tipo de aplicaciones, pero, con el paso del tiempo, se ha utilizado principalmente en ámbitos de investigación científica y aplicaciones matemáticas .

Uno de los lenguajes más típicos del paradigma funcional es el Lisp. Véase un ejemplo de programación del factorial con este lenguaje:

{% highlight js %}
> (Defun factorial (n)
(If (= n 0)
1
(* N (factorial (- n 1)))))
FACTORIAL
> (Factorial 3)
6
{% endhighlight %}

> <i class="fas fa-star"></i> *El* ***paradigma lógico*** *tiene como característica principal la aplicación de las reglas de la lógica para inferir conclusiones a partir de datos.*

Un programa lógico contiene una base de conocimiento sobre la que se llevan a cabo consultas. La base de conocimiento está formada por hechos, que representan la información del sistema expresada como relaciones entre los datos y reglas lógicas que permiten deducir consecuencias a partir de combinaciones entre los hechos y, en general, otras reglas.

Uno de los lenguajes más típicos del paradigma lógico es el Prolog.

{% highlight js %}
Ejemplo de desarrollo práctico del paradigma lógico

Determinaremos si debemos prescribir al paciente estar en casa reposando saber que se cumplen los siguientes hechos: malestar y 39º de temperatura corporal.

Reglas de la base de conocimiento:

- R1: Si fiebre, entonces estar en casa en reposo.
- R2: Si malestar, entonces ponerse termómetro.
- R3: Si termómetro marca una temperatura> 37º, entonces fiebre.
- R4: Si diarrea, entonces dieta.

Si seguimos un razonamiento de encadenamiento hacia adelante, el procedimiento sería:

```
Indicar el motor de inferencia, los hechos: malestar y termómetro marca 39.

<Code> Base de hechos = {malestar, termómetro marca 39º}
```

El sistema identifica las reglas aplicables: R2 y R3. El algoritmo se inicia aplicando la regla R2, incorporando en la base de hechos "ponerse el termómetro".

```
Base de hechos = {malestar, termómetro marca 39º, ponerse termómetro}
```

Como no se ha solucionado el problema, continúa con la siguiente regla R3, añadiendo a la base de hechos "fiebre".

```
Base de hechos = {malestar, termómetro marca 39º, ponerse termómetro, fiebre}
```

Como no se ha solucionado el problema, vuelve a identificar un subconjunto de reglas aplicables, excepto las ya utilizadas. El sistema identifica las reglas aplicables: R1, incorporando a la base de hechos "estar en casa en reposo".
{% endhighlight %}

El paradigma es ampliamente utilizado en las aplicaciones que tienen que ver con la Inteligencia Artificial, particularmente en el campo de sistemas expertos y procesamiento del lenguaje humano. Un sistema experto es un programa que imita el comportamiento de un experto humano. Por lo tanto contiene información (es decir una base de conocimientos) y una herramienta para comprender las preguntas y encontrar la respuesta correcta examinando la base de datos (un motor de inferencia).

También es útil en problemas combinatorios o que requieran una gran cantidad o amplitud de soluciones alternativas, de acuerdo con la naturaleza del mecanismo de vuelta atrás (backtracking).

## **5. Características de los lenguajes más difundidos**

Existen muchos lenguajes de programación diferentes, hasta el punto de que muchas tecnologías tienen su lenguaje propio. Cada uno de estos lenguajes tiene una serie de particularidades que lo hacen diferente del resto.

Los lenguajes de programación más difundidos son aquellos que más se utilizan en cada uno de los diferentes ámbitos de la informática. En el ámbito educativo, por ejemplo, se considera un lenguaje de programación muy difundido aquel que se utiliza en muchas universidades o centros educativos para la docencia de la iniciación a la programación.

Los lenguajes de programación más difundidos correspondientes a diferentes ámbitos, a diferentes tecnologías o diferentes tipos de programación tienen una serie de características en común que son las que marcan las similitudes entre ellos.

### **5.1 Características de la programación estructurada**

La programación estructurada fue desarrollada por el neerlandés Edsger W. Dijkstra y se basa en el denominado teorema de la estructura. Para ello utiliza únicamente tres estructuras: secuencia, selección e iteración, siendo innecesario el uso de la instrucción o instrucciones de transferencia incondicional ( `GOTO`, `EXIT FUNCTION`, `EXIT SUB`o múltiples `RETURN`).

De esta forma las características de la programación estructurada son la claridad, el teorema de la estructura y el diseño descendente.

#### **5.1.1. Claridad**

Deberá haber suficiente información al código para que el programa pueda ser entendido y verificado: comentarios, nombres de variables comprensibles y procedimientos comprensibles.

Todo programa estructurado puede ser leído desde el principio al fin sin interrupciones en la secuencia normal de lectura.

#### **5.1.2. Teorema de la estructura**

Demuestra que todo programa se puede escribir utilizando únicamente las tres estructuras básicas de control:

- Secuencia: Instrucciones ejecutadas sucesivamente, una tras otra. En la figura .7 se puede observar un ejemplo de la estructura básica de secuencia, donde primero se ejecutará la sentencia A y, posteriormente, la B.
<!-- ejemplo de secuencia (sentencia a -> sentencia b) -->

- Selección: La instrucción condicional con doble alternativa, de la forma "si condición, entonces sentencias, sino SentènciaB". En la figura .8 se puede observar un esquema que ejemplifica la estructura básica de selección.
<!-- ejemplo de seleccion (sentencia a -> sentencia b) -->
- Iteración: el bucle condicional "mientras condición, haz sentencias", que ejecuta las instrucciones repetidamente mientras la condición se cumpla. En la figura .9 se puede observar un esquema que ejemplifica la estructura básica de iteración.

<!-- imagen https://ioc.xtec.cat/materials/FP/Materials/IC_S_INF/INF_IC_S_M05/web/html/WebContent/u1/a1/continguts.html -->

#### **5.1.3. Diseño descendente**

El diseño descendente es una técnica que se basa en el concepto de "divide y vencerás" para resolver un problema en el ámbito de la programación. Se trata de la resolución del problema a lo largo de diferentes niveles de abstracción partiendo de un nivel más abstracto y finalizando en un nivel de detalle.

En la figura .10 se puede observar un ejemplo del diseño descendente. A partir del problema1 obtienen varios subproblemas (subproblema 1.1, subproblema 1.2 y subproblema 1.3). La resolución de estos subproblemas será mucho más sencilla que la del problema original por cuanto se ha reducido considerablemente el alcance y el tamaño. De forma iterativa se puede observar como estos subproblemas se vuelven a dividir, a su vez, en otros subproblemas.

<!-- figura 10 -->

La visión moderna de la programación estructurada introduce las características de programación modular y tipos abstractos de datos (TAD).

#### **5.1.4. Programación modular***

La realización de un programa sin seguir una técnica de programación modular produce a menudo un conjunto enorme de sentencias la ejecución de las que es compleja de seguir, y de entender, con lo cual se hace casi imposible la depuración de errores y la introducción de mejoras. Incluso, puede darse el caso de tener que abandonar el código preexistente porque resulta más fácil empezar de nuevo.

Cuando se habla de programación modular, nos referimos a la división de un programa en partes más manejables e independientes. Una regla práctica para lograr este propósito es establecer que cada segmento del programa no exceda, en longitud, de un palmo de codificación.

En la mayoría de lenguajes, los módulos se traducen en:

- Procedimientos: son subprogramas que llevan a cabo una tarea determinada y devuelven 0 o más de un valor. Se utilizan para estructurar un programa y mejorar su claridad.
- Funciones: son subprogramas que llevan a cabo una determinada tarea y devuelven un único resultado o valor. Se utilizan para crear operaciones nuevas que no ofrece el lenguaje.

#### **5.1.5. Tipos abstractos de datos**

En programación, el tipo de datos de una variable es el conjunto de valores que la variable puede asumir. Por ejemplo, una variable de tipo booleano puede adoptar sólo dos valores posibles: vertadero fals. Además, hay un conjunto limitado pero bien definido de operaciones que tienen sentido sobre los valores de un tipo de datos; así, operaciones típicas sobre el tipo booleano son ANDo OR.

Los lenguajes de programación asumen un número determinado de tipos de datos, que puede variar de un lenguaje a otro; así, en Pascal tenemos los enteros , los reales , los booleanos , los caracteres ... Estos tipos de datos son llamados tipos de datos básicos en el contexto de los lenguajes de programación.

Hasta hace unos años, toda la programación se basaba en este concepto de tipo y no eran pocos los problemas que aparecían, ligados muy especialmente a la complejidad de los datos que se tenían que definir. Apareció la posibilidad de poder definir tipos abstractos de datos , donde el programador puede definir un nuevo tipo de datos y sus posibles operaciones.

*Ejemplo de implementación de un tipo abstracto de datos implementado en el lenguaje C*

### **5.2 Características de la programación orientada a objetos**

Uno de los conceptos importantes introducidos por la programación estructurada es la abstracción de funcionalidades a través de funciones y procedimientos. Esta abstracción permite a un programador utilizar una función o procedimiento conociendo sólo que hace, pero desconociendo el detalle de cómo lo hace.

Este hecho, sin embargo, tiene varios inconvenientes:

- Las funciones y procedimientos comparten datos del programa, lo que provoca que cambios en uno de ellos afecten al resto.
- Al momento de diseñar una aplicación es muy difícil prever detalladamente qué funciones y procedimientos necesitaremos.
- La reutilización del código es difícil y acaba consistiendo a copiar y pegar determinados trozos de código, y retocarlos. Esto es especialmente habitual cuando el código no es modular.

La orientación a objetos, concebido en los años setenta y ochenta pero extendida a partir de los noventa, permitió superar estas limitaciones.

> <i class="fas fa-star"></i> *La* **orientación a objetos** *(en adelante, OO) es un paradigma de construcción de programas basado en una abstracción del mundo real.*

> <i class="fas fa-star"></i> *Un objeto es una combinación de datos (llamadas atributos) y métodos (funciones y procedimientos) que nos permiten interactuar con él. En OO, pues, los programas son conjuntos de objetos que interactúan entre ellos a través de mensajes (llamadas a métodos).*

Los lenguajes de POO (programación orientada a objetos) son aquellos que implementan más o menos fielmente el paradigma OO. La programación orientada a objetos se basa en la integración de 5 conceptos: abstracción, encapsulación, modularidad, jerarquía y polimorfismo, que es necesario comprender y seguir de manera absolutamente rigurosa. No seguirlos sistemáticamente o omitirlos puntualmente, por prisa u otras razones, hace perder todo el valor y los beneficios que aporta la orientación a objetos.

#### **5.2.1. Abstracción**

Es el proceso en el que se separan las propiedades más importantes de un objeto de las que no lo son. Es decir, por medio de la abstracción se definen las características esenciales de un objeto del mundo real, los atributos y comportamientos que lo definen como tal, para luego modelar en un objeto de software. En el proceso de abstracción no debe ser preocupante la implementación de cada método o atributo, basta definirlos.

En la tecnología orientada a objetos la herramienta principal para soportar la abstracción es la clase . Se puede definir una clase como una descripción genérica de un grupo de objetos que comparten características comunes, las cuales son especificadas en sus atributos y comportamientos.

#### **5.2.2. Encapsulación**

Permite a los objetos elegir qué información es publicada y qué información es escondida en el resto de los objetos. Por eso los objetos suelen presentar sus métodos como interfaces públicas y sus atributos como datos privados o protegidas, siendo inaccesibles desde otros objetos. Las características que se pueden otorgar son:

- Público: cualquier clase puede acceder a cualquier atributo o método declarado como público y utilizarlo.
- Protegido: cualquier clase heredada puede acceder a cualquier atributo o método declarado como protegido a la clase madre y utilizarlo.
- Privado: ninguna clase no puede acceder a un atributo o método declarado como privado y utilizarlo.

#### **5.2.3. Modularidad**

Permite modificar las características de cada una de las clases que definen un objeto, de forma independiente del resto de clases en la aplicación. En otras palabras, si una aplicación se puede dividir en módulos separados, normalmente clases, y estos módulos se pueden compilar y modificar sin afectar a los demás, entonces esta aplicación ha sido implementada en un lenguaje de programación que soporta la modularidad.

#### **5.2.4. Jerarquía**

Permite la ordenación de las abstracciones. Las dos jerarquías más importantes de un sistema complejo son la herencia y la agregación.

La herencia también se puede ver como una forma de compartir código, por lo que cuando se utiliza la herencia para definir una nueva clase sólo tiene que añadir lo que sea diferente, es decir, reaprovecha los métodos y variables , y especializa el comportamiento.

Por ejemplo, se puede identificar una clase *padre* llamada treballador y dos clases hijas, es decir dos subtipos de trabajadores, administratiuy professor.

<!-- figura 11 -->
En la figura .11 se puede observar la representación en forma de diagrama del ejemplo explicado anteriormente: las clases administratiuy professorque heredan de la clase treballador.

La agregación es un objeto que está formado de la combinación de otros objetos o componentes. Así, un ordenador se compone de una CPU, una pantalla, un teclado y un ratón, y estos componentes no tienen sentido sin el ordenador. En la figura .12 se puede observar un ejemplo de agregación en que la clase ordinador está compuesta por las otras cuatro clases.

<!-- imagen 12 -->
#### **5.2.5. El Polimorfismo**

Es una característica que permite dar diferentes formas a un método, ya sea en la definición como en la implementación.

La sobrecarga ( *overload* ) de métodos consiste en implementar varias veces un mismo método pero con parámetros diferentes, de modo que, en invocarlo, el compilador decide cuál de los métodos se debe ejecutar, en función de los parámetros de la llamada.

Un ejemplo de método sobrecargado es aquel que calcula el salario de un trabajador en una empresa. En función de la posición que ocupa el trabajador tendrá más o menos conceptos a su nómina (más o menos incentivos, por ejemplo).

El mismo método, que podríamos llamar *CàlculSalari* quedará implementado de forma diferente en función de si se calcula el salario de un operario (con menos conceptos en su nómina, lo que provoca que el método reciba menos variables) o si se calcula el salario de un directivo.

La sobreescritura ( *override* ) de métodos consiste en reimplementaba un método heredado de una superclase exactamente con la misma definición (incluyendo nombre de método, parámetros y valor de retorno).

Un ejemplo de sobrecarga de métodos podría ser el del método `Area()`. A partir de una clase `Figura`que contiene el método `Area()`, existe una clase derivada para algunos tipos de figuras (por ejemplo, `Rectangle`o `Quadrat`).

La implementación del método `Area()`será diferente en cada una de las clases derivadas; éstas pueden implementarse de forma diferente (en función de cómo se calcule en cada caso el área de la figura) o definirse de forma diferente.

## **6. Fases del desarrollo de los sistemas de información**

Una aplicación informática necesitará muchas pequeñas acciones (y no tan pequeñas) para ser creada. Se han desarrollado muchas metodologías que ofrecen un acompañamiento a lo largo de este desarrollo, proporcionando pautas, indicaciones, métodos y documentos para ayudar, sobre todo, los jefes de proyecto más inexpertos.

Dentro de estas metodologías hay Métrica v3.0. Ha sido desarrollada por el Ministerio de Administraciones Públicas. Se trata de una metodología para la planificación, desarrollo y mantenimiento de los sistemas de información de una organización. Para el desarrollo de software hay que fijarse en la parte que hace referencia al desarrollo de los sistemas de información (SI), dentro de la metodología Métrica. Divide el desarrollo en 5 fases, que se siguen de forma secuencial.

También es importante tener claramente identificados los roles de los componentes del equipo de proyecto que participarán en el desarrollo de la aplicación informática. A Métrica estos perfiles son:

- Partes interesadas ( *stakeholders* )
- Jefe de Proyecto
- consultores
- analistas
- Desarrolladores

En la Figura 13, podéis observar las cinco fases principales de la metodología Métrica v3.0.

<!-- figura 13 -->
### **6.1. Estudio de viabilidad del sistema**

El propósito de este proceso es analizar un conjunto concreto de necesidades, con la idea de proponer una solución a corto plazo. Los criterios con los que se hace esta propuesta no serán estratégicos sino tácticos y relacionados con aspectos económicos, técnicos, legales y operativos.

> <i class="fas fa-star"></i> *Los* ***resultados*** *del estudio de viabilidad del sistema constituirán la base para tomar la decisión de seguir adelante o abandonar el proyecto.*

### **6.2. Análisis del sistema de información**

> <i class="fas fa-star"></i> *El propósito de este proceso es conseguir la* ***especificación detallada*** *del sistema de información, por medio de un catálogo de requisitos y de una serie de modelos que cubran las necesidades de información de los usuarios para los que se desarrollará el sistema de información y que serán la entrada para el proceso de diseño del sistema de información.*

En primer lugar, se describe el sistema de información, a partir de la información obtenida en el estudio de viabilidad. Se delimita su alcance, se genera un catálogo de requisitos generales y se describe el sistema mediante unos modelos iniciales de alto nivel.

Se recogen de forma detallada los requisitos funcionales que el sistema de información debe cubrir. Además, se identifican los requisitos no funcionales del sistema, es decir, las facilidades que debe proporcionar el sistema, y las restricciones a las que estará sometido, en cuanto a rendimiento, frecuencia de tratamiento, seguridad ...

Normalmente, para efectuar el análisis se suele elaborar los modelos de casos de uso y de clases , en desarrollos orientados a objetos, y de datos y procesos en desarrollos estructurados. Por otro lado, se aconseja llevar a cabo una definición de interfaces de usuario, ya que facilitará la comunicación con los usuarios clave.

### **6.3. Diseño del sistema de información**

> <i class="fas fa-star"></i> *El* ***propósito del diseño*** *es obtener la definición de la arquitectura del sistema y del entorno tecnológico que le apoyará, junto con la especificación detallada de los componentes del sistema de información. A partir de esta información, se generan todas las especificaciones de construcción relativas al propio sistema, así como la especificación técnica del plan de pruebas, la definición de los requisitos de implantación y el diseño de los procedimientos de migración y carga inicial.*

En el diseño se generan las especificaciones necesarias para la construcción del sistema de información, como por ejemplo:

- Los componentes del sistema (módulos o clases, según el caso) y de las estructuras de datos.
- Los procedimientos de migración y sus componentes asociados.
- La definición y revisión del plan de pruebas, y el diseño de las verificaciones de los niveles de prueba establecidos.
- El catálogo de excepciones, que permite establecer un conjunto de verificaciones relacionadas con el propio diseño o con la arquitectura del sistema.
- La especificación de los requisitos de implantación.

### **6.4. Construcción del sistema de información**

> <i class="fas fa-star"></i> ***La construcción del sistema de información*** *tiene como objetivo final la construcción y la prueba de los diferentes componentes del sistema de información, a partir de su conjunto de especificaciones lógicas y físicas, obtenido en la fase de diseño. Se desarrollan los procedimientos de operación y de seguridad, y se elaboran los manuales de usuario final y de explotación, estos últimos cuando proceda.*

Para conseguir este objetivo, se recoge la información elaborada durante la fase de diseño, se prepara el entorno de construcción, se genera el código de cada uno de los componentes del sistema de información y se van llevando a cabo, a medida que se vaya finalizando la construcción, las pruebas unitarias de cada uno de ellos y las de integración entre subsistemas. Si fuera necesario efectuar una migración de datos, es en este proceso donde se lleva a cabo la construcción de los componentes de migración y de los procedimientos de migración y carga inicial de datos.

### **6.5. Implantación y aceptación del sistema**

> <i class="fas fa-star"></i> *Este proceso tiene como objetivo principal* ***la entrega y la aceptación*** *del sistema en su totalidad, que puede comprender varios sistemas de información desarrollados de manera independiente, y un segundo objetivo, que es llevar a cabo las actividades oportunas para el paso a producción del sistema.*

Una vez revisada la estrategia de implantación, se establece el plan de implantación y se detalla el equipo que lo llevará a cabo.

Para el inicio de este proceso se toman como punto de partida los componentes del sistema probados de forma unitaria e integrados en el proceso de construcción, así como la documentación asociada.

El sistema debe someterse a las pruebas de implantación con la participación del usuario de operación. La responsabilidad, entre otros aspectos, es comprobar el comportamiento del sistema bajo las condiciones más extremas. El sistema también será sometido a las pruebas de aceptación, que serán llevadas a cabo por el usuario final.

En este proceso se elabora el plan de mantenimiento del sistema, por lo que el responsable del mantenimiento conozca el sistema antes de que éste pase a producción.

También se establece el acuerdo de nivel de servicio requerido una vez que se inicie la producción. El acuerdo de nivel de servicio se refiere a servicios de gestión de operaciones, de apoyo a usuarios y el nivel con el que se prestarán estos servicios.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){:.btn.btn-danger.btn-lg.btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Contenido traducido** a 11 de Octubre de 2020, por [Pablo Álvarez Corredera](https://ciberninjas.com/quien-soy/).
> **Licencia**: [CCO](https://creativecommons.org/licenses/by-nc-sa/3.0/es/deed.ca "Licencia CCO"){:target="_blank" rel="nofollow,noreferrer"} creado inicialmente por el Instituto Abierto de Cataluña.