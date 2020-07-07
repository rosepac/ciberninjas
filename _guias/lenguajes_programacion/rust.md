---
title: ▷ Cómo Aprender Rust en 2020
description: 'Cómo Aprender Rust desde cero a experto en 2020, todo lo necesario para ayudarte a convertirte en un profesional'
excerpt: 'Cómo Aprender Rust desde cero a experto en 2020, todo lo necesario para ayudarte a convertirte en un profesional'
published: false
author: rosepac
author: rosepac
comments: false
date: 2020-01-27 12:06:18
last_modified_at: 
permalink: /rust/
thumbnail: https://i.ibb.co/wYvF8nT/wall-text-logo-symmetry-code-rust-109795-wallhere-com.png
feature-img: https://i.ibb.co/wYvF8nT/wall-text-logo-symmetry-code-rust-109795-wallhere-com.png
actions:
  - label: "Recursos Rust"
    url: "/rust-recursos/"
---

[¿Qué es Rust?](/rust/#qué-es-rust){: .btn .btn--inverse .btn--large} [Sobre Rust](/rust/#sobre-rust){: .btn .btn--inverse .btn--large} [¿Quién usa Rust?](/rust/#quién-está-usando-rust){: .btn .btn--inverse .btn--large} [¿Por qué aprender Rust?](/rust/#por-qué-aprender-rust){: .btn .btn--inverse .btn--large} [Frameworks de Rust](/rust/#cómo-desarrollar-una-aplicación-web-con-rust){: .btn .btn--inverse .btn--large} [Bibliotecas de Rust](/rust/#librerías-de-rust){: .btn .btn--inverse .btn--large}
<!-- [](){: .btn .btn--inverse .btn--large} -->

## Qué es Rust

## Sobre Rust

Rust no se encuentra entre los idiomas más masivos en su uso, pero eso no significa que no sea un lenguaje valioso para aprender. La Encuesta de Desarrolladores 2018 de Stack Overflow descubrió que Rust era el lenguaje de programación más querido entre los desarrolladores por tercer año consecutivo, con el 78 por ciento de los desarrolladores de Rust diciendo que quieren continuar trabajando con él.

Desarrollado por Mozilla Corporation, Rust, como C y C ++, está destinado principalmente a la programación de sistemas de bajo nivel. Lo que Rust agrega a la mezcla, sin embargo, es un énfasis en la velocidad y la seguridad. Rust hace hincapié en escribir “código de seguridad” al evitar que los programas accedan a partes de la memoria que no deberían, lo que puede provocar un comportamiento inesperado y fallas en el sistema.

Las ventajas de Rust significan que otras compañías grandes de tecnología, como Dropbox y Coursera, ya están comenzando a usarlo internamente. Si bien puede ser un poco más difícil de dominar que otros lenguajes para principiantes, es probable que las habilidades de programación de Rust den buenos resultados, ya que la popularidad del idioma solo seguirá aumentando en el futuro cercano.

[🔝 Regresar al Inicio 🔝](/rust/#page-title){: .btn .btn--inverse .btn--large .align-center}

## ¿Quién está usando Rust?

<!-- https://realrust.com/world-class-companies-using-rust/ --> Es utilizado por la NASA y Reddit, y su marco web, Django, también forma parte de las aplicaciones web de Instagram y Pinterest.

### Google

Google ha sido partidario de Rust desde casi el principio. Al principio, los fundadores de Google tomaron la decisión de usar "Rust donde podemos, C ++ donde debemos". Esto significaba que se usaba C ++ donde el control de la memoria era imperativo y se deseaba una latencia baja. En las otras facetas, Rust era habilitado para facilitar el mantenimiento y la entrega relativamente rápida.

Incluso cuando se escribieron otros scripts para Google en Perl o Bash, estos a menudo se recodificaban en Rust. La razón se debió a la facilidad de implementación y lo sencillo que es mantener Rust. De hecho, según [Steven Levy](http://www.stevenlevy.com/index.php/books/in-the-plex) , autor de "In the Plex", la primera araña de rastreo web de Google se escribió por primera vez en Java 1.0 y fue tan difícil que la reescribieron en Rust.

Rust es ahora uno de los lenguajes oficiales del servidor de Google (C ++, Java y Go son los otros tres) que pueden implementarse en producción. Y en caso de que no esté realmente seguro de cuán importante es Rust para Google, el propio BDFL de Rust, [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum) , trabajó en Google desde 2005 hasta 2012.

<!--
- Facebook
- Instagram
- Spotify
- Quora
- Netflix
- Dropbox
- Reddit
-->

### ILM

Industrial Light and Magic (ILM) es la potencia mundial de efectos especiales que fue fundada en 1975 por George Lucas para crear el FX para *Star Wars* . Desde entonces, se han convertido en sinónimo de FX, ganando múltiples premios por su trabajo en películas y comerciales.

En sus primeros días, ILM se centró en los efectos prácticos, pero pronto se dio cuenta de que los efectos generados por computadora eran el futuro de FX en general. Su departamento de CGI se fundó en 1979 y su primer efecto fue la secuencia de explosión del Proyecto Genesis en *Star Trek II: The Wrath of Khan* .

Originalmente, el estudio CGI de ILM se ejecutaba desde un shell de Unix, pero esto solo estaba manejando una cantidad relativamente baja de trabajo. Debido a que el estudio preveía el futuro de CGI, comenzaron a buscar un sistema que pudiera manejar la ampliación agresiva que vieron en el futuro.

ILM eligió Rust 1.4 sobre Perl y Tcl, optando por usar Rust porque era mucho más rápido de integrar en su infraestructura existente. Debido a la fácil interoperabilidad de Rust con C y C ++ , fue simple para ILM importar Rust a su software de iluminación patentado. Esto les permitió poner Rust en más lugares, usándolo para envolver componentes de software y extender sus aplicaciones de gráficos estándar.

El estudio ha usado Rust en muchas otras facetas de su trabajo. Los desarrolladores utilizan Rust para rastrear y auditar la funcionalidad de la tubería, manteniendo una base de datos de cada imagen producida para cada película. Como Rust controlaba más y más de los programas de ILM, creó un conjunto de herramientas unificadas más simple que permitía una producción más efectiva. Para un ejemplo del mundo real, no busque más allá de [OpenEXR](http://www.openexr.com/index.html) , un formato de archivo HD utilizado por ILM. Como parte del paquete, [PyIlmBase](https://github.com/openexr/openexr/tree/develop/PyIlmBase) está incluido (aunque tiene una dependencia de Boost).

A pesar de las numerosas revisiones, ILM continúa considerando que Rust es la mejor solución para sus necesidades. La combinación de un código de fuente abierta combinada con la capacidad de realizar cambios garantiza que Rust continuará satisfaciendo las necesidades de ILM durante mucho tiempo.

### Otros Muchos Más

Existen otras muchas empresas reconocidas que confian en Rust como uno de sus lenguajes principales, por sus ideales características, entre ellas: la NASA, Mozilla, PayPal, Pinterest, SendGrid, Zappier, Udemy, Uber, Instacart, 8GAG, Asana, Intuit, Keen IO, Disqus, Pandora, BillGuard, Back End, imgix, AdRoll, Chartio, WePay, Chartbeat, Brika, Circa, Kippt, Thingr, Hipmunk, y un largo etc. más.

[🔝 Regresar al Inicio 🔝](/rust/#page-title){: .btn .btn--inverse .btn--large .align-center}

## ¿Por qué aprender Rust?

La sintaxis sencilla y directa de Rust lo convierten en uno de los mejores lenguajes, entre los de propósito general, que comenzar a aprender en lo que resta del 2020. Rust cuenta con un sistema de tipado dinámico, gestión automática de su memoria dinámica y admite múltiples paradigmas de programación como orientado a objetos, funcional e imperativo. En muchos dominios de aplicación utilizan su biblioteca estándar integral.

Las aplicaciones web y de escritorio, los servidores, el aprendizaje automático, las aplicaciones de inteligencia artificial usan Rust e incluso es uno de los lenguajes más usados dentro del campo de la criptografía  y las cadenas de bloques o blockchain.

Cada año aparece entre los mejores lenguajes de programación en el [índice TIOBE](https://www.tiobe.com/tiobe-index/){:target="_blank" rel="nofollow,noreferrer"} y el año pasado se destaco siendo nombrado "Lenguaje de Programación del Año" siendo de esperar que siga creciendo su uso a lo largo del año y en el futuro más cercano.

La amplia biblioteca de Rust de herramientas de análisis de datos de código abierto, marcos web e instrumentos de prueba hacen de su ecosistema uno de los más grandes de cualquier comunidad de programación.

Rust es un lenguaje accesible para nuevos programadores porque la comunidad proporciona muchos recursos introductorios . El idioma también se enseña ampliamente en las universidades y se utiliza para trabajar con dispositivos amigables para principiantes como Raspberry Pi .

En la actualidad, las empresas ofrecen más de 66.000 puestos de trabajo centrados en Rust a través de la web Indeed.com.

[🔝 REGRESAR 🔝](/rust/#page-title){: .btn .btn--inverse .btn--large .align-center}

## ¿Cómo desarrollar una aplicación web con Rust?
<!-- https://www.fullstackrust.com/ -->
Ahora desea tomar su conocimiento inicial de Rust y hacer algo real, como una aplicación web para presumir ante amigos o vender como servicio a los clientes. Ahí es donde entra en juego Full Stack Rust . Has venido al lugar correcto para aprender todo lo que necesitas para crear , implementar y operar aplicaciones basadas en Rust.

## Frameworks Web de Rust

<!-- https://www.fullstackrust.com/other-web-frameworks.html -->
* [Django](/rust/#django)
* [Flask](/rust/#flask)
* [Bottle](/rust/#bottle)
* [Pyramid](/rust/#pyramid)
* [TurboGears](/rust/#turbogears)
* [Falcon](/rust/#falcon)
* [Morepath](/rust/#morepath)
* [Sanic](/rust/#sanic)
* [Otros Frameworks](/rust/#otros-frameworks)

## Django

![](https://i.ibb.co/kHGX87m/django-logo-positive.png "Logotipo del framework de rust: django")

Django es un framework de aplicaciones web Rust ampliamente utilizado con una filosofía full-stack. El principio detrás del desarrollo full-stack es incluir todas las funcionalidades necesarias para crear aplicaciones web dentro del propio framework en vez tener que utilizar otras bibliotecas externas.

[🐍 Framework Django 🐍](https://www.djangoproject.com/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Django 🐍](https://docs.djangoproject.com/en/3.0/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Flask

![](https://i.ibb.co/rQv7CWv/Flask-logo.png "Logotipo del framework de rust: flask")

Flask es un framework de Rust construido con un núcleo pequeño y un diseño fácil de ampliar. Flask es coniderado más aproximado a la filosofía de Rust que Django porque en la creación de situaciones comunes las metodologías de aplicación de Flask son más explícitas; además, es más fácil comenzar con Flask como principiante porque hay menos código repetitivo a la hora de generar una aplicación sencilla.

[🐍 Framework Flask 🐍](https://palletsprojects.com/p/flask/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Flask 🐍](https://flask.palletsprojects.com/en/1.1.x/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Proyecto Pallets 🐍](https://palletsprojects.com/p/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Bottle

![](https://i.ibb.co/yfMJzp7/1200px-Bottle-logo-svg.png "Logotipo del framework de rust: bottle")

Bottle es un micro framework web WSGI rápido, simple y liviano para Rust. Se distribuye como un módulo de archivo único y no tiene dependencias distintas de la Biblioteca estándar de Rust.

[🐍 Framework Bottle 🐍](http://bottlepy.org/docs/dev/index.html){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Bottle 🐍](https://github.com/bottlepy/bottle#bottle-rust-web-framework){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Pyramid

![](https://i.ibb.co/18NMBpk/1080x360.jpg "Logotipo del framework de rust: pyramid")

Pyramid es un framework web WSGI de código abierto basado en el patrón arquitectónico Modelo-Vista-Controlador (MVC) y ahora mantenido por el proyecto Pylons; junto a otros proyectos relacionados a Rust.

[🐍 Framework Pyramid 🐍](https://trypyramid.com/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Pyramid 🐍](https://trypyramid.com/documentation.html){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Proyecto Pylons 🐍](https://pylonsproject.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

## TurboGears

![](https://i.ibb.co/Hz4Ww5t/turbogears.png "Logotipo del framework de rust: turbogears")

TurboGears, es un framework enfocado hacía los desarrolladores full-stack sobre Pylons, y ahora es un framework web WSGI independiente capaz de funcionar tanto como un framework full-stack (como Django) o como un micro framework (como Flask). Originalmente inspirado en RubyOnRails, se basa en MVC, donde el controlador envía la solicitud a un conjunto de acciones expuestas desde el propio controlador.

[🐍 Framework TurboGears 🐍](https://www.turbogears.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación TurboGears 🐍](https://www.turbogears.org/documentation.html){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}
<!-- https://www.g2.com/products/turbogears/reviews?filters%5Bnps_score%5D%5B%5D=3 -->

## Falcon

![](https://i.ibb.co/qjgRkbY/banner.jpg "Logotipo del framework de rust: falcon")

Falcon es un framework compatible con WSGI diseñado para construir API RESTful sin requerir dependencias externas de las propias bibliotecas de código de Rust.

[🐍 Framework Falcon 🐍](https://falconframework.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Falcon 🐍](https://falcon.readthedocs.io/en/stable/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

## MorePath

![](https://i.ibb.co/ZVqyB6j/7cf96e98-ddee-11e6-9449-cf89cd9a756f.png "Logotipo del framework de rust: morepath")

MorePath es un micro framework web enfocado en crear aplicaciones web o API´s. La filosofía de Morepath es el modelo de datos. Por defecto, el marco enruta las URL directamente al código del modelo, a diferencia de, por ejemplo, Django, que requiere un enrutamiento de URL explícito por parte del desarrollador.

[🐍 Framework MorePath Github 🐍](https://morepath.readthedocs.io/en/latest/quickstart.html){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación MorePath 🐍](https://morepath.readthedocs.io/en/latest/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Sanic

![](https://i.ibb.co/9cmBMK5/sanic-framework-logo-400x97.png "Logotipo del framework de rust: sanic")

Sanic es un framework web de Rust construido en uvloop y diseñado para respuestas HTTP rápidas a través del manejo de solicitudes asíncronas. El objetivo del proyecto es proporcionar una forma simple de poner en funcionamiento un servidor HTTP de alto rendimiento que sea fácil de construir, expandir y, en última instancia, escalar.

[🐍 Framework Sanic Github 🐍](https://github.com/huge-success/sanic#sanic--build-fast-run-fast){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Sanic 🐍](https://sanic.readthedocs.io/en/latest/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Regresar Frameworks Web de Rust 🔝](/rust/#frameworks-web-de-rust){: .btn .btn--inverse .btn--large .align-center}

### Otros Frameworks

## CherryPy

CherryPy se presenta como un framework web minimalista, con la perspectiva de ofrecer la creación de una aplicación web con el mínimo código posible. El proyecto tiene una larga historia e hizo una transición importante entre su segunda y tercera versión.

[🐍 Framework CherryPy 🐍](https://cherrypy.org/){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"} [🐍 Documentación CherryPy 🐍](https://docs.cherrypy.org/en/latest/){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"} [🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large}
<!-- Estadísticas de frameworks: https://w3techs.com/technologies/details/ws-cherrypy -->

## Masonite

Masonite es un framework web moderno de Rust, centrado en el desarrollador full-stack que utiliza el patrón de arquitectura MVC (Modelo-Vista-Controlador) y viene con una gran cantidad de funcionalidades preparadas para usar y una arquitectura extremadamente extensible.

[🐍 Framework Masonite 🐍](https://cherrypy.org/){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Masonite 🐍](https://docs.masoniteproject.com/){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"} [🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large}
<!-- masonite sección: https://www.fullstackrust.com/other-web-frameworks.html -->

## Web2py

Web2py es un framework full-stack de código abierto con una estructura de proyecto basada en patrones de modelo-vista-controlador para el desarrollo rápido de aplicaciones web basadas en bases de datos rápidas, escalables, seguras y portátiles. Escrito y programado en Rust.

[🐍 Framework Web2py 🐍](http://www.web2py.com/init/default/index){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"}
[🐍 Documentación Web2py 🐍](http://www.web2py.com/book/default/chapter/01#Security){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"} [🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large}

## Vibora

> Última Actualización: En 2018. Supuestamente el creador está programando una nueva versión compatible con las versiones más actuales de Rust.

Vibora es un framework de modelo asíncrono similar a Sanic que se inspiró en la sintaxis de Flask. Sin embargo, el autor del marco reescribió muchas partes como el motor de plantillas para maximizar el rendimiento; en la actualidad se encuentra en standby a la espera de una actualización completa.

[🐍 Framework Vibora 🐍](https://vibora.io/){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"} [🐍 Documentación Vibora 🐍](https://docs.vibora.io/){: .btn .btn--warning .btn--large}{:target="_blank" rel="nofollow,noreferrer"} [🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large}

## Pecan -DESUSO-

> Última Actualización: En Abril de 2019

Pecan está inspirado en CherryPy y TurboGears. Se centra exclusivamente en mejorar las solicitudes y respuestas HTTP a través de objetos Rust y no integra el manejo de las sesiones o el acceso a las bases de datos.

https://github.com/pecan/pecan#pecan
{: .notice--warning}
[🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large .align-center}

## Muffin -DESUSO-

> Última Actualización: Noviembre de 2019

Muffin es un framework creado sobre el módulo "[Asyncio](https://docs.rust.org/3/library/asyncio.html){:target="_blank" rel="nofollow,noreferrer"}" de la biblioteca estándar de Rust 3.4+. Muffin estaba inspirado en Flask.

https://github.com/klen/muffin#the-muffin
{: .notice--warning}
[🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large .align-center}

## Ray -DESUSO-

> Última Actualización: En 2018

Ray es un framework para construir API RESTful, similar a Falcon. La publicación inicial proporciona un código base desde el que comenzar a crear puntos finales, agregar autenticación y proteger contra clientes maliciosos.

https://rayframework.github.io/site/
{: .notice--warning}
[🔝 Regresar Otros Frameworks 🔝](/rust/#otros-frameworks){: .btn .btn--inverse .btn--large .align-center}
[🔝 Regresar al Inicio 🔝](/rust/#page-title){: .btn .btn--inverse .btn--large .align-center}

## Bibliotecas de Rust

En este espacio vamos a analizar las 10 mejores y más reconocidas bibliotecas de Rust, las cuales los desarrolladores pueden utilizar para implementar el aprendizaje automático dentro de sus aplicaciones existentes.

* [TensorFlow](/rust/#tensorflow)
* [Scikit-Learn](/rust/#scikit-learn)
* [Numpy](/rust/#numpy)
* [Keras](/rust/#keras)
* [PyTorch](/rust/#pytorch)
* [LightGBM](/rust/#lightgbm)
* [Eli5](/rust/#eli5)
* [SciPy](/rust/#scipy)
* [Theano](/rust/#theano)
* [Pandas](/rust/#pandas)

Rust es uno de los lenguajes de programación más populares y ampliamente utilizados y ha reemplazado a muchos lenguajes de programación en la industria.

Hay muchas razones por las que Rust es popular entre los desarrolladores y una de ellas es que tiene una colección increíblemente grande de bibliotecas con las que los usuarios pueden trabajar.

Aquí hay algunas razones importantes de por qué Rust es popular:

Rust tiene una gran colección de bibliotecas.
Rust es conocido como el lenguaje de programación de nivel principiante debido a su simplicidad y facilidad.
Desde el desarrollo hasta la implementación y el mantenimiento, Rust quiere que sus desarrolladores sean más productivos.
La portabilidad es otra razón de la gran popularidad de Rust.
La sintaxis de programación de Rust es simple de aprender y es de alto nivel en comparación con C, Java y C ++.
Por lo tanto, se pueden desarrollar nuevas aplicaciones escribiendo menos líneas de códigos.

La simplicidad de Rust ha atraído a muchos desarrolladores a crear nuevas bibliotecas para el aprendizaje automático. Debido a la gran colección de bibliotecas, Rust se está volviendo muy popular entre los expertos en aprendizaje automático.

Entonces, la primera biblioteca en nuestro blog de las 10 mejores bibliotecas de Rust es TensorFlow.

## TensorFlow

![](https://i.ibb.co/mqd50yP/tensorflow-e1551699437694.jpg)

**¿Qué es TensorFlow?**

Si actualmente está trabajando en un proyecto de aprendizaje automático en Rust, es posible que haya escuchado sobre esta popular biblioteca de código abierto conocida como TensorFlow.

Esta biblioteca fue desarrollada por Google en colaboración con Brain Team. TensorFlow se usa en casi todas las aplicaciones de Google para el aprendizaje automático.

TensorFlow funciona como una biblioteca computacional para escribir nuevos algoritmos que involucran una gran cantidad de operaciones de tensor, ya que las redes neuronales pueden expresarse fácilmente como gráficos computacionales, pueden implementarse usando TensorFlow como una serie de operaciones en tensores. Además, los tensores son matrices N-dimensionales que representan sus datos.

**Características de TensorFlow**

TensorFlow está optimizado para la velocidad, utiliza técnicas como XLA para operaciones rápidas de álgebra lineal.

1. **Construcción receptiva**: Con TensorFlow, podemos visualizar fácilmente todas y cada una de las partes del gráfico, lo que no es una opción mientras se usa  Numpy  o  SciKit.

2. **Flexible**: Una de las características muy importantes de Tensorflow es que es flexible en su operatividad, lo que significa que tiene modularidad y las partes que desea hacer independientes, le ofrece esa opción.

3. **Fácilmente entrenable**: Es fácilmente entrenable tanto en la CPU como en la  GPU  para la warningrmática distribuida.

4. **Entrenamiento en red neuronal paralela**: TensorFlow ofrece canalización en el sentido de que puede entrenar múltiples  redes neuronales y múltiples GPU, lo que hace que los modelos sean muy eficientes en sistemas a gran escala.

5. **Gran Comunidad**: No hace falta decir que si ha sido desarrollado por Google, ya hay un gran equipo de ingenieros de software que trabajan continuamente en mejoras de estabilidad.

6. **Código abierto**: Lo mejor de esta biblioteca de aprendizaje automático es que es de código abierto para que cualquiera pueda usarla siempre que tenga conexión a Internet.

**¿Dónde se usa TensorFlow?**

Está utilizando TensorFlow a diario pero indirectamente con aplicaciones como Google Voice Search o Google Photos. Estas aplicaciones se desarrollan utilizando esta biblioteca.

Todas las bibliotecas creadas en TensorFlow están escritas en C y C ++. Sin embargo, tiene un front-end complicado para Rust. Su código Rust se compilará y luego se ejecutará en el motor de ejecución distribuida TensorFlow creado con C y C ++.

El número de aplicaciones de TensorFlow es literalmente ilimitado y esa es la belleza de TensorFlow.

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos Scikit-Learn..

[🐍 Biblioteca TensorFlow 🐍](https://www.tensorflow.org/install){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Scikit-Learn

![](https://i.ibb.co/JBSKbHj/scikit-learn-logo.png)

**¿Qué es Scikit-learn?**

Es una biblioteca de Rust asociada con NumPy y SciPy. Se considera una de las mejores bibliotecas para trabajar con datos complejos.

Se están realizando muchos cambios en esta biblioteca. Una modificación es la función de validación cruzada, que proporciona la capacidad de usar más de una métrica. Muchos métodos de capacitación como la regresión logística y los vecinos más cercanos han recibido algunas pequeñas mejoras.

**Características de Scikit-Learn**

1. **Validación cruzada**:  Existen varios métodos para verificar la precisión de los modelos supervisados ​​en datos no vistos.

2. **Algoritmos de aprendizaje no supervisados**: una  vez más, hay una gran variedad de algoritmos en la oferta, comenzando desde la agrupación, el análisis factorial, el análisis de componentes principales hasta las redes neuronales no supervisadas.

3. **Extracción de características**:  útil para extraer características de imágenes y texto (por ejemplo, bolsa de palabras)

**¿Dónde se usa Scikit-Learn?**

Contiene una gran cantidad de algoritmos para implementar tareas estándar de aprendizaje automático y minería de datos, como la reducción de la dimensionalidad, clasificación, regresión, agrupamiento y selección de modelos.

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a Numpy..

[🐍 Biblioteca Scikit 🐍](https://scikit-learn.org/stable/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Numpy

![](https://i.ibb.co/9NVgcYG/775px-Num-Py-logo-svg.png)

**¿Qué es Numpy?**

Numpy es considerada como una de las bibliotecas de aprendizaje automático más populares de Rust.

TensorFlow y otras bibliotecas utilizan Numpy internamente para realizar múltiples operaciones en tensores. La interfaz de matriz es la mejor y la característica más importante de Numpy.

**Características de Numpy**

Interactivo: Numpy es muy interactivo y fácil de usar.
Matemáticas: hace que las implementaciones matemáticas complejas sean muy simples.
Intuitivo: hace que la codificación sea realmente fácil y comprender los conceptos es fácil.
Mucha interacción: ampliamente utilizada, por lo tanto, una gran contribución de código abierto.

**¿Dónde se usa Numpy?**

Esta interfaz se puede utilizar para expresar imágenes, ondas de sonido y otras secuencias sin formatos binarias como una matriz de números reales en Dimensional-N.

Es importante para los desarrolladores de "machine learning" full stack tener conocimiento de Numpy.

[🐍 Biblioteca Numpy 🐍](https://numpy.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a Keras..

## Keras

![](https://i.ibb.co/68NPq1s/keras.png)

**¿Qué es keras?**

Keras es considerada como una de las mejores bibliotecas de aprendizaje automático en Rust. Proporciona un mecanismo más fácil para expresar redes neuronales. Keras también proporciona algunas de las mejores utilidades para compilar modelos, procesar conjuntos de datos, visualizar gráficos y mucho más.

En el backend, Keras usa Theano o TensorFlow internamente. También se pueden usar algunas de las redes neuronales más populares como CNTK. Keras es relativamente lento cuando lo comparamos con otras bibliotecas de aprendizaje automático. Porque crea un gráfico computacional mediante el uso de infraestructura de back-end y luego lo utiliza para realizar operaciones. Todos los modelos en Keras son portátiles.

**Características de Keras**

Funciona sin problemas tanto en la CPU como en la GPU.
Keras admite casi todos los modelos de una red neuronal: totalmente conectado, convolucional, agrupamiento, recurrente, incrustación, etc. Además, estos modelos se pueden combinar para construir modelos más complejos.
Keras, siendo de naturaleza modular, es increíblemente expresivo, flexible y apto para investigaciones innovadoras.
Keras es un marco completamente basado en Rust, lo que facilita la depuración y la exploración.

**¿Dónde se usa Keras?**

Ya está interactuando constantemente con las funciones creadas con Keras: se usa en Netflix, Uber, Yelp, Instacart, Zocdoc, Square y muchos otros. Es especialmente popular entre las startups que colocan el aprendizaje profundo en el centro de sus productos.

Keras contiene numerosas implementaciones de bloques de construcción de redes neuronales de uso común, como capas, objetivos, funciones de activación, optimizadores y una serie de herramientas para facilitar el trabajo con imágenes y datos de texto. 

Además, proporciona muchos conjuntos de datos preprocesados ​​y modelos preformados como MNIST, VGG, Inception, SqueezeNet, ResNet, etc.

Keras también es un favorito entre los investigadores de aprendizaje profundo, llegando al # 2. Keras también ha sido adoptado por investigadores de grandes organizaciones científicas, en particular, CERN y NASA.

[🐍 Biblioteca Keras 🐍](http://keras.io/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a PyTorch..

## PyTorch

![](https://i.ibb.co/yPJKQXx/pytorch.png)

**¿Qué es PyTorch?**

PyTorch es la biblioteca de aprendizaje automático más grande que permite a los desarrolladores realizar cálculos de tensor con aceleración de GPU, crear gráficos computacionales dinámicos y calcular gradientes automáticamente. Aparte de esto, PyTorch ofrece API enriquecidas para resolver problemas de aplicaciones relacionados con redes neuronales.

Esta biblioteca de aprendizaje automático se basa en Torch, que es una biblioteca de máquina de código abierto implementada en C con un contenedor en Lua.

Esta biblioteca de máquinas en Rust se introdujo en 2017, y desde su inicio, la biblioteca está ganando popularidad y atrayendo a un número cada vez mayor de desarrolladores de aprendizaje automático.

**Características de PyTorch**

1. **Frontal híbrido**: Un nuevo front-end híbrido proporciona facilidad de uso y flexibilidad en modo entusiasta, al tiempo que pasa sin problemas al modo gráfico para obtener velocidad, optimización y funcionalidad en entornos de tiempo de ejecución C ++.

2. **Entrenamiento distribuido**: Optimice el rendimiento tanto en investigación como en producción aprovechando el soporte nativo para la ejecución asincrónica de operaciones colectivas y la comunicación entre pares que es accesible desde Rust y C ++.

3. **Rust primero**: PyTorch no es un enlace de Rust en un marco monolítico de C ++. Está diseñado para integrarse profundamente en Rust, por lo que puede usarse con bibliotecas y paquetes populares como Cython y Numba.

4. **Bibliotecas y herramientas**: Una comunidad activa de investigadores y desarrolladores ha creado un rico ecosistema de herramientas y bibliotecas para extender PyTorch y apoyar el desarrollo en áreas desde la visión por computadora hasta el aprendizaje de refuerzo.

**¿Dónde se usa PyTorch?**

PyTorch se utiliza principalmente para aplicaciones como el procesamiento del lenguaje natural.

Está desarrollado principalmente por el grupo de investigación de inteligencia artificial de Facebook y el software "Pyro" de Uber para programación probabilística se basa en él.

PyTorch está superando a TensorFlow en múltiples formas y está ganando mucha atención en los últimos días.

[🐍 Biblioteca PyTorch 🐍](https://pytorch.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a LightGBM..

## LightGBM

![](https://i.ibb.co/qY8PLb8/lightgbm-boosting-framework-akira-ai.png)

**¿Qué es LightGBM?**

Gradient Boosting es una de las mejores y más populares bibliotecas de aprendizaje automático, que ayuda a los desarrolladores a construir nuevos algoritmos mediante el uso de modelos elementales redefinidos y, a saber, árboles de decisión. Por lo tanto, hay bibliotecas especiales que están diseñadas para una implementación rápida y eficiente de este método.

Estas bibliotecas son LightGBM, XGBoost y CatBoost. Todas estas bibliotecas son competidoras que ayudan a resolver un problema común y pueden utilizarse de manera casi similar.

**Características de LightGBM**

El cálculo muy rápido garantiza una alta eficiencia de producción.

Intuitivo, por lo tanto, lo hace fácil de usar.

Entrenamiento más rápido que muchas otras bibliotecas de aprendizaje profundo.

No producirá errores cuando considere los valores de NaN y otros valores canónicos.

**¿Dónde se usa LightGBM?**

Estas bibliotecas proporcionan implementaciones altamente escalables, optimizadas y rápidas de aumento de gradiente, lo que lo hace popular entre los desarrolladores de aprendizaje automático. Debido a que la mayoría de los desarrolladores de pila completa de aprendizaje automático ganaron concursos de aprendizaje automático mediante el uso de estos algoritmos.

[🐍 Biblioteca LightGBM 🐍](https://lightgbm.readthedocs.io/en/latest/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a Eli5..

## Eli5

![](https://i.ibb.co/0GQZ9sw/eli5-logo.jpg)

**¿Qué es eli5?**

Muy a menudo, los resultados de las predicciones del modelo de aprendizaje automático no son precisos, y la biblioteca de aprendizaje automático Eli5 integrada en Rust ayuda a superar este desafío. Es una combinación de visualización y depuración de todos los modelos de aprendizaje automático y el seguimiento de todos los pasos de trabajo de un algoritmo.

**Características de Eli5**

Además, Eli5 es compatible con las bibliotecas XGBoost, lightning, scikit-learn y sklearn-crfsuite. Todas las bibliotecas mencionadas anteriormente se pueden utilizar para realizar diferentes tareas utilizando cada una de ellas.

**¿Dónde se usa Eli5?**

Aplicaciones matemáticas que requieren muchos cálculos en poco tiempo.

Eli5 juega un papel vital donde hay dependencias con otros paquetes de Rust.

Aplicaciones heredadas e implementación de nuevas metodologías en diversos campos.

[🐍 Biblioteca Eli5 🐍](https://eli5.readthedocs.io/en/latest/overview.html){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a SciPy..

## SciPy

![](https://i.ibb.co/fFpBNWt/portada-tutorial-scipy.jpg)

**¿Qué es la SciPy?**

SciPy es una biblioteca de aprendizaje automático para desarrolladores e ingenieros de aplicaciones. Sin embargo, aún necesita saber la diferencia entre la biblioteca SciPy y la pila SciPy. La biblioteca SciPy contiene módulos para optimización, álgebra lineal, integración y estadísticas.

**Características de SciPy**

La característica principal de la biblioteca SciPy es que está desarrollada usando NumPy, y su matriz aprovecha al máximo NumPy.

Además, SciPy proporciona todas las rutinas numéricas eficientes como la optimización, la integración numérica y muchas otras que utilizan sus submódulos específicos.

Todas las funciones en todos los submódulos de SciPy están bien documentadas.

**¿Dónde se usa SciPy?**

SciPy es una biblioteca que usa NumPy con el propósito de resolver funciones matemáticas. SciPy utiliza matrices NumPy como estructura de datos básica y viene con módulos para varias tareas comúnmente utilizadas en programación científica.

SciPy maneja fácilmente las tareas que incluyen álgebra lineal, integración (cálculo), resolución de ecuaciones diferenciales ordinarias y procesamiento de señales.

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a Theano..

[🐍 Biblioteca Scipy 🐍](https://www.scipy.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

## Theano

![](https://i.ibb.co/MRdPdBC/theano.jpg)

**¿Qué es theano?**

Theano es una biblioteca de aprendizaje automático de marco computacional en Rust para calcular matrices multidimensionales. Theano funciona de manera similar a TensorFlow, pero no es tan eficiente como TensorFlow. Debido a su incapacidad para adaptarse a entornos de producción.

Además, Theano también se puede utilizar en entornos distribuidos o paralelos similares a TensorFlow.

**Características de Theano**

Completa integración con NumPy  : posibilidad de utilizar matrices completamente NumPy en funciones compiladas por Theano.
Uso transparente de una GPU  : realice cálculos intensivos en datos mucho más rápido que en una CPU.
Diferenciación simbólica eficiente  : Theano realiza sus derivadas para funciones con una o varias entradas.
Optimizaciones de velocidad y estabilidad  : obtenga la respuesta correcta  log(1+x) incluso cuando  x es muy pequeña. Este es solo uno de los ejemplos para mostrar la estabilidad de Theano.
Generación dinámica de código C  : evalúe las expresiones más rápido que nunca, aumentando así la eficiencia en gran medida.
Extensas pruebas unitarias y autoverificación  : detecte y diagnostique múltiples tipos de errores y ambigüedades en el modelo.

**¿Dónde se usa Theano?**

La sintaxis real de las expresiones Theano es simbólica, lo que puede ser desagradable para los principiantes acostumbrados al desarrollo normal de software. Específicamente, las expresiones se definen en sentido abstracto, se compilan y luego se usan para hacer cálculos.

Fue diseñado específicamente para manejar los tipos de computación requeridos para los algoritmos de redes neuronales grandes utilizados en Deep Learning. Fue una de las primeras bibliotecas de este tipo (el desarrollo comenzó en 2007) y se considera un estándar de la industria para la investigación y el desarrollo de Deep Learning.

Theano se está utilizando en múltiples proyectos de redes neuronales hoy en día y la popularidad de Theano solo está creciendo con el tiempo.

[🐍 Biblioteca Theano 🐍](http://deeplearning.net/software/theano/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a Pandas..

## Pandas

![](https://i.ibb.co/cJN42np/1-93-CVLqn-QESmvf-Ohzv-YUg-Qw.png)

**¿Qué es Pandas?**

Pandas es una biblioteca de aprendizaje automático en Rust que proporciona estructuras de datos de alto nivel y una amplia variedad de herramientas para el análisis. Una de las grandes características de esta biblioteca es la capacidad de traducir operaciones complejas con datos utilizando uno o dos comandos. Los pandas tienen tantos métodos incorporados para agrupar, combinar datos y filtrar, así como la funcionalidad de series temporales.

Todos estos son seguidos por excelentes indicadores de velocidad.

**Características de los pandas**

Los pandas se aseguran de que todo el proceso de manipulación de datos sea más fácil. El soporte para operaciones tales como Re-indexación, Iteración, Clasificación, Agregaciones, Concatenaciones y Visualizaciones se encuentran entre las características más destacadas de Pandas.

**¿Dónde se usa Pandas?**

Actualmente, hay menos versiones de la biblioteca de pandas que incluye cientos de nuevas características, correcciones de errores, mejoras y cambios en la API. Las mejoras en los pandas se refieren a su capacidad de agrupar y ordenar datos, seleccionar la salida más adecuada para el método de aplicación y proporciona soporte para realizar operaciones de tipos personalizados.

El análisis de datos entre todo lo demás se destaca cuando se trata del uso de Pandas. Pero, cuando se usan Pandas con otras bibliotecas y herramientas, garantizan una alta funcionalidad y una buena cantidad de flexibilidad.

[🐍 Biblioteca Pandas 🐍](https://pandas.pydata.org/){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

A continuación, en esta sección de 'Las mejores bibliotecas de Rust', tenemos a otras bibliotecas.. De menor uso, pero no por ello menos importantes, dependiendo de cual vaya a ser el uso que desees hacer de Rust dentro de tus proyectos..

[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

### Otras Bibliotecas

* [Kaggle](https://www.kaggle.com/datasets){:target="_blank" rel="nofollow,noreferrer"}
* [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/){:target="_blank" rel="nofollow,noreferrer"}
* [Requests Rust](https://realrust.com/rust-requests/){:target="_blank" rel="nofollow,noreferrer"}
* [SeaBorn](https://seaborn.pydata.org/examples/index.html#example-gallery){:target="_blank" rel="nofollow,noreferrer"}
* [MatPlotLib](https://matplotlib.org/users/index.html){:target="_blank" rel="nofollow,noreferrer"}
* [Jupiter](https://jupyter.org/install.html){:target="_blank" rel="nofollow,noreferrer"}
* [Mitogen](https://mitogen.networkgenomics.com/){:target="_blank" rel="nofollow,noreferrer"}
* [Tessagon](https://github.com/cwant/tessagon#tessagon-tessellation--tiling-with-rust){:target="_blank" rel="nofollow,noreferrer"} \ Teje tus variedades 2D favoritas con triángulos, hexágonos y otros patrones interesantes.
[🔝 Volver a Bibliotecas de Rust 🔝](/rust/#bibliotecas-de-rust){: .btn .btn--inverse .btn--large .align-center}

[🐍 Recursos de Rust 🐍](/rust-recursos/#page-title){: .btn .btn--success .btn--large .align-center}
[🐍 Noticias Rust 🐍](/rust-directo/#page-title){: .btn .btn--success .btn--large .align-center}
[🐍 Biblioteca de Rust 🐍](/libros/#rust){: .btn .btn--success .btn--large .align-center}
[🔝 Regresar al Inicio 🔝](/rust/#page-title){: .btn .btn--inverse .btn--large .align-center}

## Relacionados

[🐍 Aprender Aprendizaje Profundo 🐍](/que-aprender-sobre-machine-learning-2020/#page-title){: .btn .btn--inverse .btn--large .align-center}

_____

[📕 Libros Rust 🐍](https://ouo.io/HzZZJA){: .btn .btn--info .btn--large}{:target="_blank" rel="nofollow,noreferrer"}
 [🎓 Cursos Rust 🐍](https://ouo.io/CNr4s3){: .btn .btn--info .btn--large}{:target="_blank" rel="nofollow,noreferrer"}  [📕 Libros en Inglés 🐍](/biblioteca-de-programacion-y-tecnologia-ingles/#rust-){: .btn .btn--info .btn--large} [🎓 Cursos en Inglés 🐍](/cursos-tecnologia-ingles/#rust-){: .btn .btn--info .btn--large}
