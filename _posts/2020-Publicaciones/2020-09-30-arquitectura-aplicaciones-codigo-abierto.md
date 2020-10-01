---

author: rosepac
bootstrap: true
comments: false
tags:
- Arquitectura
- Código Abierto
thumbnail: /assets/img/blog/30-arquitectura-software-libre.webp
feature-img: /assets/img/blog/30-arquitectura-software-libre.webp
title: '▷ La arquitectura de las Aplicaciones de Código Abierto: 4 Libros Completos Gratis'
description: >-
  Los autores de cuatro docenas de aplicaciones de código abierto explican cómo está estructurado su software y por qué.
excerpt: >-
  Los autores de cuatro docenas de aplicaciones de código abierto explican cómo está estructurado su software y por qué.
canonical_URL: https://ciberninjas.com/arquitectura-apps-codigo-abierto/
permalink: /arquitectura-apps-codigo-abierto/
date: 2020-09-30 17:02:32
last_modified_at: 
published: true

---

Los arquitectos observan miles de edificios durante su formación y estudian las críticas de esos edificios escritas por maestros. Al contrario, la mayoría de los desarrolladores de software sólo llegan a conocer bien un puñado de programas grandes (por lo general, programas que ellos mismos escribieron).

Nunca estudian los grandes programas de la historia. Como resultado, repiten los errores de los demás en lugar de basarse en los éxitos de los demás.

El objetivo de los autores de estos libros, es precisamente cambiar eso. En ellos, los programadores de cuatro docenas de aplicaciones de código abierto explican cómo está estructurado su software y por qué.

**¿Cuáles son los componentes principales de cada programa? ¿Cómo interactúan? ¿Qué aprendieron sus constructores durante su desarrollo?**

Al responder a estas preguntas, los colaboradores de estos libros brindan información única sobre cómo piensan.

**Si eres un desarrollador junior y deseas saber cómo piensan tus compañeros más experimentados**, estos libros son el lugar perfecto para comenzar, a pesar de que pueda ser un contenido algo desactualizado.

**Si eres un desarrollador intermedio o senior y desea ver cómo sus compañeros han resuelto problemas complejos de diseño**, estos libros también pueden ayudarte.

-----

El contenido se encuentra en inglés, en principio, es bastante entendible mediante la traducción automática; aunque pueda haber alguna parte un poco extraterrestre. Lo que yo he revisado, me ha parecido bastante entendible.

El contenido de estos libros se encuentra bajo licencia  [Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/legalcode){:target="_blank" rel="nofollow,noreferrer"}, y se encuentran [disponible para su compra en inglés](http://aosabook.org/en/buy.html#fh){:target="_blank" rel="nofollow,noreferrer"} tanto en papel como en PDF.

Lo más importante, es, que cualquier beneficio derivado de su venta será donado a [Amnistía Internacional](http://amnesty.org/){:target="_blank" rel="nofollow,noreferrer"}. Por ello, está página no contendra anuncios, ¡Qué lo disfruten! 🤗

-----

A continuación, un índice completo del contenido de los cuatros libros:

- [**Introducción: La arquitectura de las Aplicaciones de Código Abierto I**](#introducción-la-arquitectura-de-las-aplicaciones-de-código-abierto-i)
- [**Libro: La arquitectura de las Aplicaciones de Código Abierto I**](#libro-la-arquitectura-de-las-aplicaciones-de-código-abierto-i)
- [**Introducción: La arquitectura de las Aplicaciones de Código Abierto II**](#introducción-la-arquitectura-de-las-aplicaciones-de-código-abierto-ii)
- [**Libro: La arquitectura de las Aplicaciones de Código Abierto II**](#libro-la-arquitectura-de-las-aplicaciones-de-código-abierto-ii)
- [**Introducción: El rendimiento de las Aplicaciones de Código Abierto**](#introducción-el-rendimiento-de-las-aplicaciones-de-código-abierto)
- [**Libro: El rendimiento de las aplicaciones de código abierto**](#libro-el-rendimiento-de-las-aplicaciones-de-código-abierto)
- [**Introducción 500 Líneas o Menos**](#introducción-500-líneas-o-menos)
- [**Libro: 500 Líneas o Menos**](#libro-500-líneas-o-menos)

## **Introducción: La arquitectura de las Aplicaciones de Código Abierto I**

La carpintería es un oficio exigente y las personas pueden pasar toda su vida aprendiendo cómo hacerlo bien. Pero la carpintería no es arquitectura: si nos alejamos de los tableros de madera y las juntas de inglete, los edificios en su conjunto deben diseñarse, y hacer eso es tanto un arte como un oficio o una ciencia.

La programación también es un oficio exigente, y las personas pueden pasar toda su vida aprendiendo cómo hacerlo bien. Pero la programación no es una arquitectura de software. Muchos programadores pasan años pensando (o luchando con) problemas de diseño más importantes:

¿Debería ser extensible esta aplicación? Si es así, ¿debería hacerse proporcionando una interfaz de scripting, a través de algún tipo de mecanismo de complemento, o de alguna otra manera? ¿Qué debería hacer el cliente, qué debería dejarse en manos del servidor? ¿Es "cliente-servidor" una forma útil de pensar en esta aplicación?

No se trata de cuestiones de programación, como tampoco de dónde poner las escaleras es una cuestión de carpintería.

La arquitectura de construcción y la arquitectura de software tienen mucho en común, pero hay una diferencia crucial. Mientras que los arquitectos estudian miles de edificios en su formación y durante sus carreras, la mayoría de los desarrolladores de software solo llegan a conocer bien un puñado de programas grandes.

Y la mayoría de las veces, esos son programas que ellos mismos escribieron. Nunca llegan a ver los grandes programas de la historia ni a leer críticas de los diseños de esos programas escritas por practicantes experimentados. Como resultado, repiten los errores de los demás en lugar de basarse en los éxitos de los demás.

Este libro es nuestro intento de cambiar eso. Cada capítulo describe la arquitectura de una aplicación de código abierto: cómo está estructurada, cómo interactúan sus partes, por qué está construida de esa manera y qué lecciones se han aprendido que se pueden aplicar a otros grandes problemas de diseño.

Las descripciones están escritas por las personas que mejor conocen el software, personas con años o décadas de experiencia en el diseño y rediseño de aplicaciones complejas. Las aplicaciones en sí varían en escala, desde simples programas de dibujo y hojas de cálculo basadas en web hasta conjuntos de herramientas de compilación y paquetes de visualización de varios millones de líneas.

Algunos tienen solo unos pocos años, mientras que otros se acercan a su trigésimo aniversario. Lo que tienen en común es que sus creadores han pensado mucho en su diseño y están dispuestos a compartir esos pensamientos contigo.

## **Libro: La arquitectura de las Aplicaciones de Código Abierto I**

|                                                     |                                                              |                                                              |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [ Introducción](/arquitectura-apps-colaboradores/){:target="_blank" rel="nofollow,noreferrer"} | [Amy Brown](/arquitectura-apps-colaboradores/#brown-amy){:target="_blank" rel="nofollow,noreferrer"} y [Greg Wilson](/arquitectura-apps-colaboradores/#wilson-greg){:target="_blank" rel="nofollow,noreferrer"} |                                                              |
| 1.                                                  | [Asterisco](http://aosabook.org/en/asterisk.html){:target="_blank" rel="nofollow,noreferrer"}            | [Russell Bryant](/arquitectura-apps-colaboradores/#bryant-russell){:target="_blank" rel="nofollow,noreferrer"} |
| 2.                                                  | [Audacia](http://aosabook.org/en/audacity.html){:target="_blank" rel="nofollow,noreferrer"}              | [James Crook](/arquitectura-apps-colaboradores/#crook-james){:target="_blank" rel="nofollow,noreferrer"} |
| 3.                                                  | [El caparazón de Bourne-Again](http://aosabook.org/en/bash.html){:target="_blank" rel="nofollow,noreferrer"} | [Chet Ramey](/arquitectura-apps-colaboradores/#ramey-chet){:target="_blank" rel="nofollow,noreferrer"}  |
| 4.                                                  | [Berkeley DB](http://aosabook.org/en/bdb.html){:target="_blank" rel="nofollow,noreferrer"}               | [Margo Seltzer](/arquitectura-apps-colaboradores/#seltzer-margo){:target="_blank" rel="nofollow,noreferrer"} y [Keith Bostic](/arquitectura-apps-colaboradores/#bostic-keith){:target="_blank" rel="nofollow,noreferrer"} |
| 5.                                                  | [CMake](http://aosabook.org/en/cmake.html){:target="_blank" rel="nofollow,noreferrer"}                   | [Bill Hoffman](/arquitectura-apps-colaboradores/#hoffman-bill){:target="_blank" rel="nofollow,noreferrer"} y [Kenneth Martin](/arquitectura-apps-colaboradores/#martin-kenneth){:target="_blank" rel="nofollow,noreferrer"} |
| 6.                                                  | [Eclipse](http://aosabook.org/en/eclipse.html){:target="_blank" rel="nofollow,noreferrer"}               | [Kim Moir](/arquitectura-apps-colaboradores/#moir-kim){:target="_blank" rel="nofollow,noreferrer"}      |
| 7.                                                  | [Grafito](http://aosabook.org/en/graphite.html){:target="_blank" rel="nofollow,noreferrer"}              | [Chris Davis](/arquitectura-apps-colaboradores/#davis-chris){:target="_blank" rel="nofollow,noreferrer"} |
| 8.                                                  | [El sistema de archivos distribuido de Hadoop](http://aosabook.org/en/hdfs.html){:target="_blank" rel="nofollow,noreferrer"} | [Robert Chansler](/arquitectura-apps-colaboradores/#chansler-robert){:target="_blank" rel="nofollow,noreferrer"} , [Hairong Kuang](/arquitectura-apps-colaboradores/#kuang-hairong){:target="_blank" rel="nofollow,noreferrer"} , [Sanjay Radia](/arquitectura-apps-colaboradores/#radia-sanjay){:target="_blank" rel="nofollow,noreferrer"} , [Konstantin Shvachko](/arquitectura-apps-colaboradores/#shvachko-konstantin){:target="_blank" rel="nofollow,noreferrer"} y [Suresh Srinivas](/arquitectura-apps-colaboradores/#srinivas-suresh){:target="_blank" rel="nofollow,noreferrer"} |
| 9.                                                  | [Integración continua](http://aosabook.org/en/integration.html){:target="_blank" rel="nofollow,noreferrer"} | [C. Titus Brown](/arquitectura-apps-colaboradores/#brown-titus){:target="_blank" rel="nofollow,noreferrer"} y [Rosangela Canino-Koning](/arquitectura-apps-colaboradores/#canino-koning-rosangela){:target="_blank" rel="nofollow,noreferrer"} |
| 10.                                                 | [Jitsi](http://aosabook.org/en/jitsi.html){:target="_blank" rel="nofollow,noreferrer"}                   | [Emil Ivov](/arquitectura-apps-colaboradores/#ivov-emil){:target="_blank" rel="nofollow,noreferrer"}    |
| 11.                                                 | [LLVM](http://aosabook.org/en/llvm.html){:target="_blank" rel="nofollow,noreferrer"}                     | [Chris Lattner](/arquitectura-apps-colaboradores/#lattner-chris){:target="_blank" rel="nofollow,noreferrer"} |
| 12.                                                 | [Mercurial](http://aosabook.org/en/mercurial.html){:target="_blank" rel="nofollow,noreferrer"}           | [Dirkjan Ochtman](/arquitectura-apps-colaboradores/#ochtman-dirkjan){:target="_blank" rel="nofollow,noreferrer"} |
| 13.                                                 | [El ecosistema NoSQL](http://aosabook.org/en/nosql.html){:target="_blank" rel="nofollow,noreferrer"}     | [Adam Marcus](/arquitectura-apps-colaboradores/#marcus-adam){:target="_blank" rel="nofollow,noreferrer"} |
| 14.                                                 | [Embalaje de Python](http://aosabook.org/en/packaging.html){:target="_blank" rel="nofollow,noreferrer"}  | [Tarek Ziadé](/arquitectura-apps-colaboradores/#ziade-tarek){:target="_blank" rel="nofollow,noreferrer"} |
| 15.                                                 | [Riak y Erlang / OTP](http://aosabook.org/en/riak.html){:target="_blank" rel="nofollow,noreferrer"}      | [Francesco Cesarini](/arquitectura-apps-colaboradores/#cesarini-francesco){:target="_blank" rel="nofollow,noreferrer"} , [Andy Gross](/arquitectura-apps-colaboradores/#gross-andy){:target="_blank" rel="nofollow,noreferrer"} y [Justin Sheehy](/arquitectura-apps-colaboradores/#sheehy-justin){:target="_blank" rel="nofollow,noreferrer"} |
| dieciséis.                                          | [Selenium WebDriver](http://aosabook.org/en/selenium.html){:target="_blank" rel="nofollow,noreferrer"}   | [Simon Stewart](/arquitectura-apps-colaboradores/#stewart-simon){:target="_blank" rel="nofollow,noreferrer"} |
| 17.                                                 | [Enviar correo](http://aosabook.org/en/sendmail.html){:target="_blank" rel="nofollow,noreferrer"}        | [Eric Allman](/arquitectura-apps-colaboradores/#allman-eric){:target="_blank" rel="nofollow,noreferrer"} |
| 18.                                                 | [SnowFlock](http://aosabook.org/en/snowflock.html){:target="_blank" rel="nofollow,noreferrer"}           | [Roy Bryant](/arquitectura-apps-colaboradores/#bryant-roy){:target="_blank" rel="nofollow,noreferrer"} y [Andrés Lagar-Cavilla](/arquitectura-apps-colaboradores/#lagar-cavilla-andres){:target="_blank" rel="nofollow,noreferrer"} |
| 19.                                                 | [SocialCalc](http://aosabook.org/en/socialcalc.html){:target="_blank" rel="nofollow,noreferrer"}         | [Audrey Tang](/arquitectura-apps-colaboradores/#tang-audrey){:target="_blank" rel="nofollow,noreferrer"} |
| 20.                                                 | [Telepatía](http://aosabook.org/en/telepathy.html){:target="_blank" rel="nofollow,noreferrer"}           | [Danielle Madeley](/arquitectura-apps-colaboradores/#madeley-danielle){:target="_blank" rel="nofollow,noreferrer"} |
| 21.                                                 | [Mil pasec](http://aosabook.org/en/thousandparsec.html){:target="_blank" rel="nofollow,noreferrer"}      | [Alan Laudicina](/arquitectura-apps-colaboradores/#laudicina-alan){:target="_blank" rel="nofollow,noreferrer"} y [Aaron Mavrinac](/arquitectura-apps-colaboradores/#mavrinac-aaron){:target="_blank" rel="nofollow,noreferrer"} |
| 22.                                                 | [Violeta](http://aosabook.org/en/violet.html){:target="_blank" rel="nofollow,noreferrer"}                | [Cay Horstmann](/arquitectura-apps-colaboradores/#horstmann-cay){:target="_blank" rel="nofollow,noreferrer"} |
| 23.                                                 | [VisTrails](http://aosabook.org/en/vistrails.html){:target="_blank" rel="nofollow,noreferrer"}           | [Juliana Freire](/arquitectura-apps-colaboradores/#freire-juliana){:target="_blank" rel="nofollow,noreferrer"} , [David Koop](/arquitectura-apps-colaboradores/#koop-david){:target="_blank" rel="nofollow,noreferrer"} , [Emanuele Santos](/arquitectura-apps-colaboradores/#santos-emanuele){:target="_blank" rel="nofollow,noreferrer"} , [Carlos Scheidegger](/arquitectura-apps-colaboradores/#scheidegger-carlos){:target="_blank" rel="nofollow,noreferrer"} , [Claudio Silva](/arquitectura-apps-colaboradores/#silva-claudio){:target="_blank" rel="nofollow,noreferrer"} y [Huy T. Vo](/arquitectura-apps-colaboradores/#vo-huy){:target="_blank" rel="nofollow,noreferrer"} |
| 24.                                                 | [VTK](http://aosabook.org/en/vtk.html){:target="_blank" rel="nofollow,noreferrer"}                       | [Berk Geveci](/arquitectura-apps-colaboradores/#geveci-berk){:target="_blank" rel="nofollow,noreferrer"} y [Will Schroeder](/arquitectura-apps-colaboradores/#schroeder-will){:target="_blank" rel="nofollow,noreferrer"} |
| 25.                                                 | [Batalla por Wesnoth](http://aosabook.org/en/wesnoth.html){:target="_blank" rel="nofollow,noreferrer"}   | [Richard Shimooka](/arquitectura-apps-colaboradores/#shimooka-richard){:target="_blank" rel="nofollow,noreferrer"} y [David White](/arquitectura-apps-colaboradores/#white-david){:target="_blank" rel="nofollow,noreferrer"} |
|                                                     | [Bibliografía](http://aosabook.org/en/bib1.html){:target="_blank" rel="nofollow,noreferrer"}             |                                                              |


## **Introducción: La arquitectura de las Aplicaciones de Código Abierto II**

En la introducción al Volumen II de esta serie, escribimos:

La arquitectura de construcción y la arquitectura de software tienen mucho en común, pero hay una diferencia crucial. Mientras que los arquitectos estudian miles de edificios en su formación y durante sus carreras, la mayoría de los desarrolladores de software solo llegan a conocer bien un puñado de programas grandes ... Como resultado, repiten los errores de los demás en lugar de aprovechar los éxitos de los demás ... intente cambiar eso.

En el año transcurrido desde que apareció ese libro, más de dos docenas de personas han trabajado duro para crear la secuela que tienes en tus manos. Lo han hecho porque creen, como nosotros, que el diseño de software puede y debe enseñarse con el ejemplo, que la mejor manera de aprender a pensar como un experto es estudiar cómo piensan los expertos.

Desde servidores web y compiladores a través de sistemas de administración de registros médicos hasta la infraestructura que usa Mozilla para sacar a Firefox por la puerta, hay lecciones a nuestro alrededor. Esperamos que al recopilar algunos de ellos en este libro, podamos ayudarlo a convertirse en un mejor desarrollador.

> - ***Amy Brown y Greg Wilson***

## **Libro: La arquitectura de las Aplicaciones de Código Abierto II**

| [ Introducción](/arquitectura-apps-colaboradores/){:target="_blank" rel="nofollow,noreferrer"} | [Amy Brown](/arquitectura-apps-colaboradores/#brown-amy){:target="_blank" rel="nofollow,noreferrer"} y [Greg Wilson](/arquitectura-apps-colaboradores/#wilson-greg){:target="_blank" rel="nofollow,noreferrer"} |                                                              |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1.                                                  | [Arquitectura web escalable y sistemas distribuidos](http://aosabook.org/en/distsys.html){:target="_blank" rel="nofollow,noreferrer"} | [Kate Matsudaira](/arquitectura-apps-colaboradores/#kate-matsudaira){:target="_blank" rel="nofollow,noreferrer"} |
| 2.                                                  | [Ingeniería de lanzamiento de Firefox](http://aosabook.org/en/ffreleng.html){:target="_blank" rel="nofollow,noreferrer"} | [Chris AtLee](/arquitectura-apps-colaboradores/#chris-atlee){:target="_blank" rel="nofollow,noreferrer"} , [Lukas Blakk](/arquitectura-apps-colaboradores/#blakk-lukas){:target="_blank" rel="nofollow,noreferrer"} , [John O'Duinn](/arquitectura-apps-colaboradores/#oduinn-john){:target="_blank" rel="nofollow,noreferrer"} y [Armen Zambrano Gasparnian](/arquitectura-apps-colaboradores/#zambrano-gasparnian-armen){:target="_blank" rel="nofollow,noreferrer"} |
| 3.                                                  | [FreeRTOS](http://aosabook.org/en/freertos.html){:target="_blank" rel="nofollow,noreferrer"}             | [Christopher Svec](/arquitectura-apps-colaboradores/#svec-christopher){:target="_blank" rel="nofollow,noreferrer"} |
| 4.                                                  | [GDB](http://aosabook.org/en/gdb.html){:target="_blank" rel="nofollow,noreferrer"}                       | [Stan Shebs](/arquitectura-apps-colaboradores/#stan-shebs){:target="_blank" rel="nofollow,noreferrer"}  |
| 5.                                                  | [El compilador de Glasgow Haskell](http://aosabook.org/en/ghc.html){:target="_blank" rel="nofollow,noreferrer"} | [Simon Marlow](/arquitectura-apps-colaboradores/#simon-marlow){:target="_blank" rel="nofollow,noreferrer"} y [Simon Peyton-Jones](/arquitectura-apps-colaboradores/#peyton-jones-simon){:target="_blank" rel="nofollow,noreferrer"} |
| 6.                                                  | [Git](http://aosabook.org/en/git.html){:target="_blank" rel="nofollow,noreferrer"}                       | [Susan Potter](/arquitectura-apps-colaboradores/#susan-potter){:target="_blank" rel="nofollow,noreferrer"} |
| 7.                                                  | [GPSD](http://aosabook.org/en/gpsd.html){:target="_blank" rel="nofollow,noreferrer"}                     | [Eric Raymond](/arquitectura-apps-colaboradores/#eric-raymond){:target="_blank" rel="nofollow,noreferrer"} |
| 8.                                                  | [Dynamic Language Runtime y Iron Languages](http://aosabook.org/en/ironlang.html){:target="_blank" rel="nofollow,noreferrer"} | [Jeff Hardy](/arquitectura-apps-colaboradores/#jeff-hardy){:target="_blank" rel="nofollow,noreferrer"}  |
| 9.                                                  | [ITK](http://aosabook.org/en/itk.html){:target="_blank" rel="nofollow,noreferrer"}                       | [Luis Ibáñez](/arquitectura-apps-colaboradores/#luis-ibanez){:target="_blank" rel="nofollow,noreferrer"} y [Brad King](/arquitectura-apps-colaboradores/#king-brad){:target="_blank" rel="nofollow,noreferrer"} |
| 10.                                                 | [GNU Mailman](http://aosabook.org/en/mailman.html){:target="_blank" rel="nofollow,noreferrer"}           | [Barry Varsovia](/arquitectura-apps-colaboradores/#barry-warsaw){:target="_blank" rel="nofollow,noreferrer"} |
| 11.                                                 | [matplotlib](http://aosabook.org/en/matplotlib.html){:target="_blank" rel="nofollow,noreferrer"}         | [John Hunter](/arquitectura-apps-colaboradores/#john-hunter){:target="_blank" rel="nofollow,noreferrer"} y [Michael Droettboom](http://aosabook.org/en/index.html#droettboom-michael){:target="_blank" rel="nofollow,noreferrer"} |
| 12.                                                 | [MediaWiki](http://aosabook.org/en/mediawiki.html){:target="_blank" rel="nofollow,noreferrer"}           | [Sumana Harihareswara](/arquitectura-apps-colaboradores/#sumana-harihareswara){:target="_blank" rel="nofollow,noreferrer"} y [Guillaume Paumier](/arquitectura-apps-colaboradores/#paumier-guillaume){:target="_blank" rel="nofollow,noreferrer"} |
| 13.                                                 | [Moodle](http://aosabook.org/en/moodle.html){:target="_blank" rel="nofollow,noreferrer"}                 | [Tim Hunt](/arquitectura-apps-colaboradores/#tim-hunt){:target="_blank" rel="nofollow,noreferrer"}      |
| 14.                                                 | [nginx](http://aosabook.org/en/nginx.html){:target="_blank" rel="nofollow,noreferrer"}                   | [Andrey Alexeev](/arquitectura-apps-colaboradores/#andrey-alexeev){:target="_blank" rel="nofollow,noreferrer"} |
| 15.                                                 | [MPI abierto](http://aosabook.org/en/openmpi.html){:target="_blank" rel="nofollow,noreferrer"}           | [Jeff Squyres](/arquitectura-apps-colaboradores/#jeff-squyres){:target="_blank" rel="nofollow,noreferrer"} |
| dieciséis.                                          | [OSCAR](http://aosabook.org/en/oscar.html){:target="_blank" rel="nofollow,noreferrer"}                   | [Jennifer Ruttan](/arquitectura-apps-colaboradores/#jennifer-ruttan){:target="_blank" rel="nofollow,noreferrer"} |
| 17.                                                 | [Processing.js](http://aosabook.org/en/pjs.html){:target="_blank" rel="nofollow,noreferrer"}             | [Mike Kamermans](/arquitectura-apps-colaboradores/#mike-kamermans){:target="_blank" rel="nofollow,noreferrer"} |
| 18.                                                 | [Marioneta](http://aosabook.org/en/puppet.html){:target="_blank" rel="nofollow,noreferrer"}              | [Luke Kanies](/arquitectura-apps-colaboradores/#luke-kanies){:target="_blank" rel="nofollow,noreferrer"} |
| 19.                                                 | [PyPy](http://aosabook.org/en/pypy.html){:target="_blank" rel="nofollow,noreferrer"}                     | [Benjamin Peterson](/arquitectura-apps-colaboradores/#peterson-Benjamin){:target="_blank" rel="nofollow,noreferrer"} |
| 20.                                                 | [SQLAlchemy](http://aosabook.org/en/sqlalchemy.html){:target="_blank" rel="nofollow,noreferrer"}         | [Michael Bayer](/arquitectura-apps-colaboradores/#michael-bayer){:target="_blank" rel="nofollow,noreferrer"} |
| 21.                                                 | [Retorcido](http://aosabook.org/en/twisted.html){:target="_blank" rel="nofollow,noreferrer"}             | [Jessica McKellar](/arquitectura-apps-colaboradores/#jessica-mckellar){:target="_blank" rel="nofollow,noreferrer"} |
| 22.                                                 | [Yesod](http://aosabook.org/en/yesod.html){:target="_blank" rel="nofollow,noreferrer"}                   | [Michael Snoyman](/arquitectura-apps-colaboradores/#snoyman-michael){:target="_blank" rel="nofollow,noreferrer"} |
| 23.                                                 | [Yocto](http://aosabook.org/en/yocto.html){:target="_blank" rel="nofollow,noreferrer"}                   | [Elizabeth Flanagan](/arquitectura-apps-colaboradores/#elizabeth-flanagan){:target="_blank" rel="nofollow,noreferrer"} |
| 24.                                                 | [ZeroMQ](http://aosabook.org/en/zeromq.html){:target="_blank" rel="nofollow,noreferrer"}                 | [Martín Sústrik](/arquitectura-apps-colaboradores/#martin-sustrik){:target="_blank" rel="nofollow,noreferrer"} |
|                                                     | [Bibliografía](http://aosabook.org/en/bib2.html){:target="_blank" rel="nofollow,noreferrer"}             |                                                              |


## **Introducción: El rendimiento de las Aplicaciones de Código Abierto**

Es un lugar común decir que el hardware de las computadoras es ahora tan rápido que la mayoría de los desarrolladores no tienen que preocuparse por el rendimiento. De hecho, Douglas Crockford se negó a escribir un capítulo para este libro por esa razón:

> Si tuviera que escribir un capítulo, sería sobre anti-desempeño: la mayor parte del esfuerzo invertido en la búsqueda del desempeño es en vano. No creo que eso sea lo que estás buscando.

Donald Knuth hizo lo mismo hace treinta años:

> Deberíamos olvidarnos de las pequeñas eficiencias, digamos alrededor del 97% del tiempo: la optimización prematura es la raíz de todos los males.

Pero entre los dispositivos móviles con potencia y memoria limitada, y los proyectos de análisis de datos que necesitan terabytes de proceso, un número creciente de desarrolladores *no* necesitan para hacer su código más rápido, sus estructuras de datos más pequeños, y sus tiempos de respuesta más cortos.

Sin embargo, aunque cientos de libros de texto explican los conceptos básicos de los sistemas operativos, las redes, los gráficos por computadora y las bases de datos, pocos (si los hay) explican cómo encontrar y arreglar cosas en aplicaciones reales que son simplemente demasiado lentas.

Esta colección de casos de estudio es nuestro intento de llenar ese vacío. Cada capítulo está escrito por desarrolladores reales que han tenido que hacer que un sistema existente sea más rápido o que han tenido que diseñar algo para que sea rápido en primer lugar.

Cubren muchos tipos diferentes de software y objetivos de rendimiento; lo que tienen en común es una comprensión detallada de lo que sucede realmente, cuándo y cómo encajan las diferentes partes de las aplicaciones grandes.

Nuestra esperanza es que este libro, al igual que su predecesor, *La arquitectura de aplicaciones de código abierto, lo* ayudará a convertirse en un mejor desarrollador al permitirle mirar por encima de los hombros de estos expertos.

> - ***Tavish Armstrong***

## **Libro: El rendimiento de las aplicaciones de código abierto**

| [ Introducción](/arquitectura-apps-colaboradores/){:target="_blank" rel="nofollow,noreferrer"} | [Tavish Armstrong](/arquitectura-apps-colaboradores/#tavish-armstrong){:target="_blank" rel="nofollow,noreferrer"} |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1                                                            | [Redes de alto rendimiento en Chrome](http://aosabook.org/en/posa/high-performance-networking-in-chrome.html){:target="_blank" rel="nofollow,noreferrer"} | [Ilya Grigorik](/arquitectura-apps-colaboradores/#ilya-grigorik){:target="_blank" rel="nofollow,noreferrer"} |
| 2                                                            | [De SocialCalc a EtherCalc](http://aosabook.org/en/posa/from-socialcalc-to-ethercalc.html){:target="_blank" rel="nofollow,noreferrer"} | [Audrey Tang](/arquitectura-apps-colaboradores/#audrey-tang){:target="_blank" rel="nofollow,noreferrer"} |
| 3                                                            | [Ninja](http://aosabook.org/en/posa/ninja.html){:target="_blank" rel="nofollow,noreferrer"}              | [Evan Martín](/arquitectura-apps-colaboradores/#evan-martin){:target="_blank" rel="nofollow,noreferrer"} |
| 4                                                            | [Analizar XML a la velocidad de la luz](http://aosabook.org/en/posa/parsing-xml-at-the-speed-of-light.html){:target="_blank" rel="nofollow,noreferrer"} | [Arseny Kapoulkine](/arquitectura-apps-colaboradores/#arseny-kapoulkine){:target="_blank" rel="nofollow,noreferrer"} |
| 5                                                            | [MemShrink](http://aosabook.org/en/posa/memshrink.html){:target="_blank" rel="nofollow,noreferrer"}      | [Kyle Huey](/arquitectura-apps-colaboradores/#kyle-huey){:target="_blank" rel="nofollow,noreferrer"} |
| 6                                                            | [Aplicación de patrones de principios de optimización a herramientas de implementación y configuración de componentes](http://aosabook.org/en/posa/applying-optimization-principle-patterns-to-component-deployment-and-configuration-tools.html){:target="_blank" rel="nofollow,noreferrer"} | [Doug C. Schmidt](/arquitectura-apps-colaboradores/#schmidt-doug){:target="_blank" rel="nofollow,noreferrer"} , [William R. Otte](/arquitectura-apps-colaboradores/#william-otte){:target="_blank" rel="nofollow,noreferrer"} y [Aniruddha Gokhale](/arquitectura-apps-colaboradores/#gokhale-aniruddha){:target="_blank" rel="nofollow,noreferrer"} |
| 7                                                            | [Infinispan](http://aosabook.org/en/posa/infinispan.html){:target="_blank" rel="nofollow,noreferrer"}    | [Manik Surtani](/arquitectura-apps-colaboradores/#manik-surtani){:target="_blank" rel="nofollow,noreferrer"} |
| 8                                                            | [Talos](http://aosabook.org/en/posa/talos.html){:target="_blank" rel="nofollow,noreferrer"}              | [Clint Talbert](/arquitectura-apps-colaboradores/#clint-talbert){:target="_blank" rel="nofollow,noreferrer"} y [Joel Maher](/arquitectura-apps-colaboradores/#maher-joel){:target="_blank" rel="nofollow,noreferrer"} |
| 9                                                            | [Zotónico](http://aosabook.org/en/posa/zotonic.html){:target="_blank" rel="nofollow,noreferrer"}         | [Arjan Scherpenisse](/arquitectura-apps-colaboradores/#arjan-scherpenisse){:target="_blank" rel="nofollow,noreferrer"} y [Marc Worrell](/arquitectura-apps-colaboradores/#worrel-marc){:target="_blank" rel="nofollow,noreferrer"} |
| 10                                                           | [Secretos del rendimiento de la red móvil](http://aosabook.org/en/posa/secrets-of-mobile-network-performance.html){:target="_blank" rel="nofollow,noreferrer"} | [Bryce Howard](/arquitectura-apps-colaboradores/#bryce-howard){:target="_blank" rel="nofollow,noreferrer"} |
| 11                                                           | [Deformación](http://aosabook.org/en/posa/warp.html){:target="_blank" rel="nofollow,noreferrer"}         | [Kazu Yamamoto](/arquitectura-apps-colaboradores/#kazu-yamamoto){:target="_blank" rel="nofollow,noreferrer"} , [Michael Snoyman](/arquitectura-apps-colaboradores/#michael-snoyman){:target="_blank" rel="nofollow,noreferrer"} y [Andreas Voellmy](/arquitectura-apps-colaboradores/#andreas-voellmy){:target="_blank" rel="nofollow,noreferrer"} |
| 12                                                           | [Trabajando con Big Data en Bioinformática](http://aosabook.org/en/posa/working-with-big-data-in-bioinformatics.html){:target="_blank" rel="nofollow,noreferrer"} | [Eric McDonald](/arquitectura-apps-colaboradores/#eric-mcdonald){:target="_blank" rel="nofollow,noreferrer"} y [C. Titus Brown](/arquitectura-apps-colaboradores/#titus-brown){:target="_blank" rel="nofollow,noreferrer"} |

## **Introducción 500 Líneas o Menos**

Este es el cuarto volumen de la serie Arquitectura de aplicaciones de código abierto , y el primero en no incluir las palabras "aplicaciones de código abierto" en ninguna parte del título.

Los primeros tres volúmenes de la serie trataban de grandes problemas que los grandes programas tenían que resolver. Para un ingeniero que está al principio de su carrera, puede ser un desafío comprender y desarrollar programas que sean mucho más grandes que unos pocos miles de líneas de código, por lo que, si bien puede ser interesante leer sobre problemas importantes, también pueden ser un desafío. para aprender.

500 líneas o menos se centra en las decisiones de diseño que los programadores toman en lo pequeño cuando están construyendo algo nuevo. Los programas sobre los que leerá en este libro se escribieron desde cero para este propósito (aunque varios de ellos se inspiraron en proyectos más grandes en los que los autores habían trabajado anteriormente).

Antes de leer cada capítulo, le recomendamos que primero piense en cómo podría resolver el problema. ¿Qué consideraciones de diseño o limitaciones crees que el autor va a considerar importantes? ¿Qué abstracciones esperas ver? ¿Cómo cree que se va a descomponer el problema? Luego, al leer el capítulo, intente identificar qué le sorprendió. Esperamos que aprenda más haciendo esto que simplemente leyendo cada capítulo de principio a fin.

Escribir un programa útil en menos de 500 líneas de código fuente --- sin recurrir a trucos baratos --- es un ejercicio desafiante en sí mismo; escribir uno para que se lea con fines pedagógicos cuando se traduce nítidamente en un libro impreso es aún más difícil. Como tal, los editores ocasionalmente se han tomado libertades con algunos de los formatos de fuente al portarlos al libro. La fuente original de cada capítulo se puede encontrar en el codesubdirectorio de su carpeta de proyecto.

Esperamos que las experiencias de los autores de este libro le ayuden a salir de su zona de confort en su propia práctica de programación.

> - ***Michael DiBernardo***

## **Libro: 500 Líneas o Menos**

| [Introducción](http://aosabook.org/en/500L/introduction.html){:target="_blank" rel="nofollow,noreferrer"} | [Michael DiBernardo](/arquitectura-apps-colaboradores/#michael-dibernardo)                                           |                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------- |
| 1                                                            | [Blockcode: un conjunto de herramientas de programación visual](http://aosabook.org/en/500L/blockcode-a-visual-programming-toolkit.html){:target="_blank" rel="nofollow,noreferrer"} | [Dethe Elza](/arquitectura-apps-colaboradores/#dethe-elza)                                            |
| 2                                                            | [Un sistema de integración continua](http://aosabook.org/en/500L/a-continuous-integration-system.html){:target="_blank" rel="nofollow,noreferrer"} | [Malini Das](/arquitectura-apps-colaboradores/#malini-das)                                            |
| 3                                                            | [Agrupación por consenso](http://aosabook.org/en/500L/clustering-by-consensus.html){:target="_blank" rel="nofollow,noreferrer"} | [Dustin J. Mitchell](/arquitectura-apps-colaboradores/#dustin-mitchell)                                    |
| 4                                                            | [Contingente: un sistema de construcción completamente dinámico](http://aosabook.org/en/500L/contingent-a-fully-dynamic-build-system.html){:target="_blank" rel="nofollow,noreferrer"} | [Brandon Rhodes y Daniel Rocco](/arquitectura-apps-colaboradores/#brandon-rhodes-daniel-rocco)                         |
| 5                                                            | [Un rastreador web con asyncio Coroutines](http://aosabook.org/en/500L/a-web-crawler-with-asyncio-coroutines.html){:target="_blank" rel="nofollow,noreferrer"} | [A. Jesse Jiryu Davis y Guido van Rossum](/arquitectura-apps-colaboradores/#jesse-jiryu)               |
| 6                                                            | [Dagoba: una base de datos de gráficos en memoria](http://aosabook.org/en/500L/dagoba-an-in-memory-graph-database.html){:target="_blank" rel="nofollow,noreferrer"} | [Dann Toliver](/arquitectura-apps-colaboradores/#dann-toliver)                                          |
| 7                                                            | [DBDB: Base de datos de camas para perros](http://aosabook.org/en/500L/dbdb-dog-bed-database.html){:target="_blank" rel="nofollow,noreferrer"} | [Taavi Burns](/arquitectura-apps-colaboradores/#taavi-burns)                                           |
| 8                                                            | [Un marco web basado en eventos](http://aosabook.org/en/500L/an-event-driven-web-framework.html){:target="_blank" rel="nofollow,noreferrer"} | [Leo Zovic](/arquitectura-apps-colaboradores/#leo-zovic)                                             |
| 9                                                            | [Un programador de Flow Shop](http://aosabook.org/en/500L/a-flow-shop-scheduler.html){:target="_blank" rel="nofollow,noreferrer"} | [Dr. Christian Muise](/arquitectura-apps-colaboradores/#christian-muise)                                   |
| 10                                                           | [Una base de datos inspirada en la arqueología](http://aosabook.org/en/500L/an-archaeology-inspired-database.html){:target="_blank" rel="nofollow,noreferrer"} | [Yoav Rubin](/arquitectura-apps-colaboradores/#yoav-rubin)                                            |
| 11                                                           | [Hacer sus propios filtros de imagen](http://aosabook.org/en/500L/making-your-own-image-filters.html){:target="_blank" rel="nofollow,noreferrer"} | [Cate Huston](/arquitectura-apps-colaboradores/#cate-huston)                                           |
| 12                                                           | [Un intérprete de Python escrito en Python](http://aosabook.org/en/500L/a-python-interpreter-written-in-python.html){:target="_blank" rel="nofollow,noreferrer"} | [Allison Kaptur](/arquitectura-apps-colaboradores/#allison-kaptur)                                        |
| 13                                                           | [Un modelador 3D](http://aosabook.org/en/500L/a-3d-modeller.html){:target="_blank" rel="nofollow,noreferrer"} | [Erick Dransch](/arquitectura-apps-colaboradores/#erick-dransch)                                         |
| 14                                                           | [Un modelo de objeto simple](http://aosabook.org/en/500L/a-simple-object-model.html){:target="_blank" rel="nofollow,noreferrer"} | [Carl Friedrich Bolz](/arquitectura-apps-colaboradores/#carl-friedrich)                                   |
| 15                                                           | [Reconocimiento óptico de caracteres (OCR){:target="_blank" rel="nofollow,noreferrer"}](http://aosabook.org/en/500L/optical-character-recognition-ocr.html){:target="_blank" rel="nofollow,noreferrer"} | [Marina Samuel](/arquitectura-apps-colaboradores/#marina-samuel)                                         |
| 16                                                    | [Un podómetro en el mundo real](http://aosabook.org/en/500L/a-pedometer-in-the-real-world.html){:target="_blank" rel="nofollow,noreferrer"} | [Dessy Daskalov](/arquitectura-apps-colaboradores/#dessy-daskalov)                                        |
| 17                                                           | [La política del mismo origen](http://aosabook.org/en/500L/the-same-origin-policy.html){:target="_blank" rel="nofollow,noreferrer"} | Eunsuk Kang, Santiago Perez De Rosso y Daniel Jackson |
| 18                                                           | [Un muestreador de rechazo](http://aosabook.org/en/500L/a-rejection-sampler.html){:target="_blank" rel="nofollow,noreferrer"} | [Jessica B. Hamrick](/arquitectura-apps-colaboradores/jessica-hamrick)                                    |
| 19                                                           | [Hoja de cálculo web](http://aosabook.org/en/500L/web-spreadsheet.html){:target="_blank" rel="nofollow,noreferrer"} | [Audrey Tang](/arquitectura-apps-colaboradores/audrey-tang)                                           |
| 20                                                           | [Análisis estático](http://aosabook.org/en/500L/static-analysis.html){:target="_blank" rel="nofollow,noreferrer"} | [Leah Hanson](/arquitectura-apps-colaboradores/#leah-hanson)                                           |
| 21                                                           | [Un motor de plantillas](http://aosabook.org/en/500L/a-template-engine.html){:target="_blank" rel="nofollow,noreferrer"} | [Ned Batchelder](/arquitectura-apps-colaboradores/#ned-batchelder)                                        |
| 22                                                           | [Un servidor web simple](http://aosabook.org/en/500L/a-simple-web-server.html){:target="_blank" rel="nofollow,noreferrer"} | [Greg Wilson](/arquitectura-apps-colaboradores/#greg-wilson)                                          |

### **Relacionados** <!-- omit in toc -->

[▷ 11 Mejores cursos gratis de linux y software libre](https://ciberninjas.com/cursos-linux-software-libre/ "11 Mejores cursos gratis de linux y software libre")

[▷ ¿Qué es la Free Software Foundation?](https://ciberninjas.com/que-es-free-software-foundation/ "¿Qué es la Free Software Foundation?")

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){:target="_blank" rel="nofollow,noreferrer"}{: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [AOSA BOOK](http://aosabook.org/en/index.html "AOSA BOOK"){:target="_blank" rel="nofollow,noreferrer"}{:target="_blank" rel="nofollow,noreferrer"}

![La arquitectura de las Aplicaciones de Código Abierto: 4 Libros Completos Gratis](/assets/img/blog/30-arquitectura-software-libre.webp "La arquitectura de las Aplicaciones de Código Abierto: 4 Libros Completos Gratis"){:target="_blank" rel="nofollow,noreferrer"}