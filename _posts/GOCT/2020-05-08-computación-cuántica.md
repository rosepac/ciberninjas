---

author_profile: true
comments: false
classes: wide
tags:
- Computación Nube
categories:
- GOCT
header:
  teaser: /assets/images/blog/
title: 'Computación Cuántica: Una sencilla introducción'
description: >-
  Una introducción fácil de entender a la computación cuántica. ¿Cómo es diferente de la informática convencional? ¿Será más rápido y mejor?
excerpt: >-
  Una introducción fácil de entender a la computación cuántica. ¿Cómo es diferente de la informática convencional? ¿Será más rápido y mejor?
canonical_URL: https://ciberninjas.com/computación-cuántica/
permalink: /computación-cuántica/
date: 2020-05-08 00:32:32
last_modified_at: 
published: false

---

![](/assets/images/ "")

¿Cómo puede obtener más y más de menos y menos? A medida que las computadoras más pequeñas se vuelven, más poderosas parecen volverse: hay más capacidad de descifrar números en un teléfono celular del siglo XXI de lo que habría encontrado en una computadora militar del tamaño de una habitación hace 50 años. 

Sin embargo, a pesar de estos avances sorprendentes, todavía hay muchos problemas complejos que están fuera del alcance incluso de las computadoras más poderosas del mundo, y no hay garantía de que alguna vez podamos abordarlos.

Un problema es que las unidades básicas de conmutación y memoria de las computadoras, conocidas como transistores, se están acercando al punto en que pronto serán tan pequeñas como los átomos individuales. Si queremos computadoras que sean más pequeñas y potentes que las actuales, pronto tendremos que hacer nuestra informática de una manera radicalmente diferente.

Entrar en el reino de los átomos abre nuevas y poderosas posibilidades en forma de computación cuántica, con procesadores que podrían funcionar millones de veces más rápido que los que usamos hoy en día. Suena increíble, pero el problema es que la computación cuántica es enormemente más compleja que la computación tradicional y opera en el mundo de la física cuántica de Alicia en el país de las maravillas, donde las leyes de la física "clásicas", sensatas y cotidianas ya no se aplican.

¿Qué es la computación cuántica y cómo funciona? ¡Miremos más de cerca!

🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/) >> [mejores regalos 2 - 🎁](/prime-day-amazon/)
{: .notice--danger}

- [1. **¿Qué es la informática convencional?**](#1-%c2%bfqu%c3%a9-es-la-inform%c3%a1tica-convencional)
- [2. **¿Qué es la computación cuántica?**](#2-%c2%bfqu%c3%a9-es-la-computaci%c3%b3n-cu%c3%a1ntica)
- [3. **Quantum + computing = computación cuántica**](#3-quantum--computing--computaci%c3%b3n-cu%c3%a1ntica)
- [4. **¿Cómo sería una computadora cuántica en realidad?**](#4-%c2%bfc%c3%b3mo-ser%c3%ada-una-computadora-cu%c3%a1ntica-en-realidad)
- [5. **¿Qué pueden hacer las computadoras cuánticas que las computadoras comunes no pueden hacer?**](#5-%c2%bfqu%c3%a9-pueden-hacer-las-computadoras-cu%c3%a1nticas-que-las-computadoras-comunes-no-pueden-hacer)
- [6. **¿Por qué es tan difícil hacer una computadora cuántica?**](#6-%c2%bfpor-qu%c3%a9-es-tan-dif%c3%adcil-hacer-una-computadora-cu%c3%a1ntica)
- [7. **¿A qué distancia están las computadoras cuánticas?**](#7-%c2%bfa-qu%c3%a9-distancia-est%c3%a1n-las-computadoras-cu%c3%a1nticas)
  - [Relacionados](#relacionados)

## 1. **¿Qué es la informática convencional?**

Probablemente piense en una computadora como un pequeño dispositivo ordenado que se encuentra en su regazo y le permite enviar correos electrónicos, comprar en línea, chatear con sus amigos o jugar juegos, pero es mucho más y mucho menos que eso.

Es más, porque es una máquina completamente de uso general: puede hacer que haga prácticamente cualquier cosa que desee. Es menos, porque en su interior es poco más que una calculadora extremadamente básica , siguiendo un conjunto de instrucciones preestablecidas llamado programa . Al igual que el Mago de Oz, las cosas increíbles que ves frente a ti ocultan algunas cosas bastante mundanas debajo de las sábanas.

Las computadoras convencionales tienen dos trucos que hacen muy bien: pueden almacenar números en la memoria y pueden procesar números almacenados con operaciones matemáticas simples (como sumar y restar). Pueden hacer cosas más complejas al unir las operaciones simples en una serie llamada algoritmo (la multiplicación se puede hacer como una serie de adiciones, por ejemplo).

Los dos trucos clave de una computadora (almacenamiento y procesamiento) se logran mediante interruptores llamados transistores, que son como versiones microscópicas de los interruptores que tiene en la pared para encender y apagar las luces. Un transistor puede estar encendido o apagado, al igual que una luz puede estar encendida o apagada.

Si está activado, podemos usar un transistor para almacenar un número uno (1); si está apagado, almacena un número cero (0). Se pueden usar cadenas largas de unos y ceros para almacenar cualquier número, letra o símbolo usando un código basado en binario (por lo que las computadoras almacenan una letra A mayúscula como 1000001 y una minúscula como 01100001). Cada uno de los ceros o unos se denomina dígito binario (o bit ) y, con una cadena de ocho bits, puede almacenar 255 caracteres diferentes (como AZ, az, 0-9 y los símbolos más comunes).

Las computadoras calculan usando circuitos llamados puertas lógicas, que están hechos de varios transistores conectados entre sí. Las puertas lógicas comparan patrones de bits, almacenados en memorias temporales llamadas registros, y luego los convierten en nuevos patrones de bits, y ese es el equivalente informático de lo que nuestros cerebros humanos llamarían suma, resta o multiplicación. En términos físicos, el algoritmo que realiza un cálculo particular toma la forma de un circuito electrónico hecho a partir de una serie de puertas lógicas, con la salida de una puerta como entrada a la siguiente.

El problema con las computadoras convencionales es que dependen de los transistores convencionales. Esto podría no parecer un problema si observa el sorprendente progreso logrado en la electrónica en las últimas décadas. Cuando se inventó el transistor, en 1947, el interruptor que reemplazó (que se llamaba tubo de vacío) era casi tan grande como uno de sus pulgares.

¡Ahora, un microprocesador de última generación (computadora de un solo chip) empaqueta cientos de millones (y hasta 30 mil millones ) de transistores en un chip de silicio del tamaño de su uña! Chips como estos, que se llaman circuitos integrados, son una increíble hazaña de miniaturización. En la década de 1960, el cofundador de Intel, Gordon Moore, se dio cuenta de que el poder de las computadoras se duplica aproximadamente 18 meses, y lo ha estado haciendo desde entonces. Esta tendencia aparentemente inquebrantable se conoce como la Ley de Moore .

Suena increíble, y lo es, pero se pierde el punto. Cuanta más información necesite almacenar, más ceros y binarios binarios, y transistores, necesitará hacerlo. Dado que la mayoría de las computadoras convencionales solo pueden hacer una cosa a la vez, cuanto más complejo sea el problema que desea que resuelvan, más pasos deberán tomar y más tiempo deberán hacerlo. Algunos problemas informáticos son tan complejos que necesitan más potencia y tiempo informáticos que los que cualquier máquina moderna podría suministrar razonablemente; los informáticos llaman a esos problemas intratables .

A medida que avanza la Ley de Moore, la cantidad de problemas intratables disminuye: las computadoras se vuelven más potentes y podemos hacer más con ellas. El problema es que los transistores son tan pequeños como podemos hacerlos: estamos llegando al punto en que las leyes de la física parecen detener la Ley de Moore. Desafortunadamente, todavía hay problemas informáticos enormemente difíciles que no podemos abordar porque incluso las computadoras más poderosas los encuentran intratables. Esa es una de las razones por las cuales la gente ahora se está interesando en la computación cuántica.

## 2. **¿Qué es la computación cuántica?**

La teoría cuántica es la rama de la física que se ocupa del mundo de los átomos y las partículas más pequeñas (subatómicas) dentro de ellos. Se podría pensar que los átomos se comportan de la misma manera que cualquier otra cosa en el mundo, en su propia pequeña forma, pero eso no es cierto: en la escala atómica, las reglas cambian y las leyes "clásicas" de la física que damos por sentado en nuestro día a día mundo ya no se aplica automáticamente.

Como dijo Richard P. Feynman , uno de los más grandes físicos del siglo XX: "Las cosas a muy pequeña escala se comportan como nada de lo que tengas una experiencia directa ... o como algo que hayas visto". ( Seis piezas fáciles , p116.)

Si has estudiado la luz , es posible que ya sepas un poco sobre la teoría cuántica. Es posible que sepa que un rayo de luz a veces se comporta como si estuviera hecho de partículas (como un flujo constante de balas de cañón), y a veces como si fueran ondas de energía que se agitan en el espacio (un poco como las olas en el mar). Eso se llama dualidad onda-partícula y es una de las ideas que nos llega de la teoría cuántica.

Es difícil comprender que algo puede ser dos cosas a la vez, una partícula y una ola, porque es totalmente ajeno a nuestra experiencia cotidiana: un automóvil no es simultáneamente una bicicleta y un autobús. En la teoría cuántica, sin embargo, ese es el tipo de locura que puede suceder.El gato de Schrödinger . Brevemente, en el extraño mundo de la teoría cuántica, ¡podemos imaginar una situación en la que algo como un gato podría estar vivo y muerto al mismo tiempo!

¿Qué tiene que ver todo esto con las computadoras? Supongamos que seguimos presionando la Ley de Moore: sigamos haciendo que los transistores sean más pequeños hasta que lleguen al punto en que obedezcan no las leyes ordinarias de la física (como los transistores de estilo antiguo) sino las leyes más extrañas de la mecánica cuántica. La pregunta es si las computadoras diseñadas de esta manera pueden hacer cosas que nuestras computadoras convencionales no pueden hacer. Si podemos predecir matemáticamente que podrían hacerlo, ¿podemos hacer que funcionen así en la práctica?

La gente ha estado haciendo esas preguntas durante varias décadas. Entre los primeros estaban los físicos de investigación de IBM Rolf Landauer y Charles H. Bennett. Landauer abrió la puerta a la computación cuántica en la década de 1960 cuando propuso que la información es una entidad física que podría manipularse de acuerdo con las leyes de la física.

Una consecuencia importante de esto es que las computadoras desperdician energía manipulando los bits dentro de ellas (lo que es en parte por qué las computadoras usan tanta energía y se calientan tanto, aunque parecen no estar haciendo mucho).

En la década de 1970, basándose en el trabajo de Landauer, Bennett mostró cómo una computadora podría sortear este problema trabajando de manera "reversible", lo que implica que una computadora cuántica podría realizar cálculos masivamente complejos sin usar cantidades masivas de energía.

En 1981 El físico Paul Benioff, del Laboratorio Nacional de Argonne, trató de imaginar una máquina básica que funcionaría de manera similar a una computadora ordinaria, pero de acuerdo con los principios de la física cuántica.

Al año siguiente, Richard Feynman esbozó aproximadamente cómo una máquina que usa principios cuánticos podría realizar cálculos básicos. Unos años más tarde, David Deutsch de la Universidad de Oxford (una de las principales luces en computación cuántica) describió la base teórica de una computadora cuántica con más detalle.

¿Cómo imaginaron estos grandes científicos que las computadoras cuánticas podrían funcionar? s David Deutsch (una de las principales luces en computación cuántica) describió la base teórica de una computadora cuántica con más detalle.

¿Cómo imaginaron estos grandes científicos que las computadoras cuánticas podrían funcionar? s David Deutsch (una de las principales luces en computación cuántica) describió la base teórica de una computadora cuántica con más detalle. ¿Cómo imaginaron estos grandes científicos que las computadoras cuánticas podrían funcionar?

## 3. **Quantum + computing = computación cuántica**

Las características clave de una computadora ordinaria (bits, registros, puertas lógicas, algoritmos, etc.) tienen características análogas en una computadora cuántica. En lugar de bits, una computadora cuántica tiene bits cuánticos o qubits , que funcionan de una manera particularmente intrigante. 

Cuando un bit puede almacenar un cero o un 1, un qubit puede almacenar un cero, uno, cero y uno, o un número infinito de valores intermedios, y estar en múltiples estados (almacenar múltiples valores) al mismo tiempo! Si eso suena confuso, piense que la luz es una partícula y una ola al mismo tiempo, que el gato de Schrödinger está vivo y muerto, o que un automóvil es una bicicleta y un autobús.

Una manera más amable de pensar en la tienda de números de qubits es a través del concepto físico de superposición (donde dos ondas se suman para hacer una tercera que contiene los dos originales). Si toca algo como una flauta, la tubería se llena con una onda estacionaria: una onda compuesta por una frecuencia fundamental (la nota básica que está tocando) y muchos armónicos o armónicos (múltiplos de frecuencia más alta de la fundamental).

La onda dentro de la tubería contiene todas estas ondas simultáneamente: se suman para formar una onda combinada que las incluye a todas. Los Qubits usan superposición para representar múltiples estados (múltiples valores numéricos) simultáneamente de una manera similar.

Así como una computadora cuántica puede almacenar múltiples números a la vez, también puede procesarlos simultáneamente. En lugar de trabajar en serie (haciendo una serie de cosas de una en una en una secuencia), puede funcionar en paralelo (haciendo varias cosas al mismo tiempo).

Solo cuando intenta averiguar en qué estado se encuentra realmente en un momento dado (midiéndolo, en otras palabras) se "colapsa" en uno de sus posibles estados, y eso le da la respuesta a su problema. Las estimaciones sugieren que la capacidad de una computadora cuántica para trabajar en paralelo la haría millones de veces más rápida que cualquier computadora convencional ... ¡si tan solo pudiéramos construirla! Entonces, ¿cómo haríamos eso?

## 4. **¿Cómo sería una computadora cuántica en realidad?**

En realidad, los qubits tendrían que ser almacenados por átomos , iones (átomos con demasiados o muy pocos electrones), o incluso cosas más pequeñas como electrones y fotones (paquetes de energía), por lo que una computadora cuántica sería casi como una mesa. versión del tipo de experimentos de física de partículas que realizan en Fermilab o CERN.

Ahora no estarías compitiendo con partículas alrededor de bucles gigantes y aplastándolas juntas, pero necesitarías mecanismos para contener átomos, iones o partículas subatómicas, para ponerlas en ciertos estados (para que puedas almacenar información), golpeándolos en otros estados (para que pueda hacer que procesen la información) y descubrir cuáles son sus estados después de que se hayan realizado operaciones particulares.

En la práctica, hay muchas formas posibles de contener átomos y cambiar sus estados utilizando rayos láser , campos electromagnéticos , ondas de radio y una variedad de otras técnicas. Un método es hacer qubits usando puntos cuánticos, que son partículas de semiconductores nanoscópicamente pequeñas dentro de las cuales se pueden controlar portadores de carga individuales, electrones y agujeros (electrones faltantes).

Otro método hace qubits de lo que se llaman trampas de iones: agrega o quita electrones de un átomo para formar un ion, lo mantiene estable en una especie de foco láser (por lo que está bloqueado en su lugar como un conejo nanoscópico bailando en un faro muy brillante), y luego lo cambia a diferentes estados con pulsos láser En otra técnica, los qubits son fotones dentro de cavidades ópticas (espacios entre espejos extremadamente pequeños).

No te preocupes si no entiendes; No mucha gente lo hace. Dado que todo el campo de la computación cuántica sigue siendo en gran parte abstracto y teórico, lo único que realmente necesitamos saber es que los qubits son almacenados por átomos u otras partículas de escala cuántica que pueden existir en diferentes estados y pueden cambiarse entre ellos.

## 5. **¿Qué pueden hacer las computadoras cuánticas que las computadoras comunes no pueden hacer?**

Aunque la gente a menudo asume que las computadoras cuánticas deben ser automáticamente mejores que las convencionales, eso no es seguro. Hasta ahora, casi lo único que sabemos con certeza que una computadora cuántica podría hacer mejor que una normal es la factorización: encontrar dos números primos desconocidos que, cuando se multiplican entre sí, dan un tercer número conocido.

En 1994, mientras trabajaba en los Laboratorios Bell, el matemático Peter Shor demostró un algoritmo que una computadora cuántica podría seguir para encontrar los "factores primos" de un gran número, lo que aceleraría enormemente el problema.

El algoritmo de Shor realmente despertó el interés en la computación cuántica porque prácticamente todas las computadoras modernas (y todos los sitios web seguros, de compras en línea y bancarios) usan claves públicastecnología de encriptación basada en la imposibilidad virtual de encontrar factores primos rápidamente (en otras palabras, es esencialmente un problema informático "intratable").

Si las computadoras cuánticas pudieran factorizar grandes números rápidamente, la seguridad en línea de hoy podría volverse obsoleta de golpe. Pero lo que sucede se da vuelta, y algunos investigadores creen que la tecnología cuántica conducirá a formas de cifrado mucho más fuertes. (En 2017, los investigadores chinos demostraron por primera vez cómo se podría utilizar el cifrado cuántico para hacer una llamada de video muy segura de Beijing a Viena).

¿Eso significa que las computadoras cuánticas son mejores que las convencionales? No exactamente.

Aparte del algoritmo de Shor, y un método de búsqueda llamado algoritmo de Grover , apenas se han descubierto otros algoritmos que se realizarían mejor con métodos cuánticos. Dado el tiempo y la potencia de computación suficientes, las computadoras convencionales aún deberían ser capaces de resolver cualquier problema que las computadoras cuánticas pudieran resolver, eventualmente.

En otras palabras, queda por demostrar que las computadoras cuánticas son generalmente superiores a las convencionales, especialmente dadas las dificultades de construirlas. Quién sabe cómo las computadoras convencionales podrían avanzar en los próximos 50 años, lo que podría hacer que la idea de las computadoras cuánticas sea irrelevante, e incluso absurda.

## 6. **¿Por qué es tan difícil hacer una computadora cuántica?**

Tenemos décadas de experiencia en la construcción de computadoras ordinarias basadas en transistores con arquitecturas convencionales; construir máquinas cuánticas significa reinventar la idea de una computadora de abajo hacia arriba.

Primero, están las dificultades prácticas de hacer qubits, controlarlos con mucha precisión y tener suficientes para hacer cosas realmente útiles. Luego, hay una gran dificultad con los errores inherentes a un sistema cuántico ("ruido", como se lo denomina técnicamente), lo que compromete seriamente cualquier cálculo que pueda hacer una computadora cuántica

 Hay formas de evitar esto ("corrección de error cuántico"), pero introducen mucha más complejidad. También está la cuestión fundamental de cómo ingresar y sacar datos de una computadora cuántica, que es, en sí mismo, un problema informático complejo. Algunas críticascree que estos problemas son insuperables; otros reconocen los problemas pero argumentan que la misión es demasiado importante para abandonarla.

## 7. **¿A qué distancia están las computadoras cuánticas?**

Tres décadas después de que se propusieron por primera vez, las computadoras cuánticas siguen siendo en gran medida teóricas. Aun así, ha habido un progreso alentador hacia la realización de una máquina cuántica. Hubo dos avances impresionantes en 2000. 

Primero, Isaac Chuang (ahora profesor del MIT, pero luego trabajando en el Centro de Investigación Almaden de IBM) usó cinco átomos de flúor para hacer una computadora cuántica cruda de cinco qubits.

El mismo año, los investigadores del Laboratorio Nacional de Los Alamos descubrieron cómo hacer una máquina de siete qubits utilizando una gota de líquido.

Cinco años después, los investigadores de la Universidad de Innsbruck agregaron un qubit adicional y produjeron la primera computadora cuántica que podía manipular un qubyte (ocho qubits).

Estos fueron primeros pasos tentativos pero importantes. En los próximos años, los investigadores anunciaron experimentos más ambiciosos, agregando progresivamente un mayor número de qubits. Para 2011, una compañía canadiense pionera llamada D-Wave Systems anunció en Nature que había producido una máquina de 128 qubits.

El anuncio resultó muy controvertido y hubo mucho debate sobre si las máquinas de la compañía realmente habían demostrado un comportamiento cuántico. Tres años más tarde, Google anunció que estaba contratando a un equipo de académicos (incluido el físico John Martinis de la Universidad de California en Santa Bárbara) para desarrollar sus propias computadoras cuánticas basadas en el enfoque de D-Wave.

En marzo de 2015, el equipo de Google anuncióestaban "un paso más cerca de la computación cuántica", habiendo desarrollado una nueva forma para que los qubits detectaran y protegieran contra errores.

En 2016, Isaac Chuang del MIT y científicos de la Universidad de Innsbruck presentaron una computadora cuántica con trampa de iones de cinco qubits que podía calcular los factores de 15; algún día, una versión ampliada de esta máquina podría evolucionar hacia el buster de cifrado totalmente prometido.

No hay duda de que estos son avances muy importantes. y los signos son cada vez más alentadores de que la tecnología cuántica eventualmente generará una revolución informática. En diciembre de 2017, Microsoft presentó un kit completo de desarrollo cuántico, que incluye un nuevo lenguaje informático, Q #, desarrollado específicamente para aplicaciones cuánticas.

A principios de 2018, D-wave anunció planes para comenzar a implementar la energía cuántica en una plataforma de computación en la nube . Unas semanas más tarde, Google anunció Bristlecone, un procesador cuántico basado en una matriz de 72 qubits que, algún día, podría formar la piedra angular de una computadora cuántica que podría abordar problemas del mundo real.

En octubre de 2019, Google anunció que había alcanzado otro hito: el logro de la "supremacía cuántica" (el punto en el que una computadora cuántica puede vencer a una máquina convencional en una tarea informática típica), aunque no todos estaban convencidos; IBM, por ejemplo, impugnó el reclamo.

Una cosa está fuera de discusión: ¡la computación cuántica es muy emocionante! Aun así, es temprano para todo el campo, y la mayoría de los investigadores están de acuerdo en que es poco probable que veamos computadoras cuánticas prácticas apareciendo durante algunos años, y más probablemente varias décadas. 

La conclusión a la que llegó un influyente informe de las Academias Nacionales de Ciencias, Medicina e Ingeniería en diciembre de 2018 fue que "todavía es demasiado pronto para poder predecir el horizonte temporal de una computadora cuántica práctica" y que "quedan muchos desafíos técnicos por resolver" antes de alcanzar este hito ".

🔥 Seguro también te interesa: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}

### Relacionados

[▷ Editores de Texto](/categoria/#editor-de-texto)
  * [Eclipse Theia](/wiki/eclipse-theia)
[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)
[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)
[▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331109157075936" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331109157075936" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros con los que aprender a programar en Java y con Android, en Español</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331109157075936">Martes, 3 de marzo de 2020</a></blockquote></div>
