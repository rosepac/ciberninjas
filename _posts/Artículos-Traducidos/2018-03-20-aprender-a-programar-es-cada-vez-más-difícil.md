---

author: rosepac
bootstrap: true
title: 🥇 Aprender a programar es cada vez más difícil
description: Reflexión sobre la dificultad del aprendizaje de la programación en la era actual de los servicios en red y la nube, por Allen Downey
excerpt: Reflexión sobre la dificultad del aprendizaje de la programación en la era actual de los servicios en red y la nube, por Allen Downey
date: 2018-03-20 01:00:00 +0100
permalink: /aprender-a-programar-es-cada-vez-más-difícil/
canonical_URL: https://ciberninjas.com/aprender-a-programar-es-cada-vez-más-difícil/
tags:
  - Reflexión de Programación
thumbnail: /assets/img/2020-news/chico-buscando-libro-biblioteca.webp
feature-img: /assets/img/2020-news/chico-buscando-libro-biblioteca.webp

---

> En este artículo se transcribe una publicación de Allen Downey, en la que se expone su opinión sobre la dificultad de aprender a programar en la era actual, en la que existen los smarthphones como dispositivo principal y todos los servicios se basan en el mundo de la red.

He escrito varios libros que usan Python para explicar temas como Estadística Bayesiana y Procesamiento Digital de Señales. Junto con los libros, proporcionó un código que los lectores pueden descargar de GitHub.

Para trabajar con este código, los lectores deben conocer algo de Python, pero eso no es suficiente; también necesitan una computadora con Python y sus bibliotecas de soporte, deben saber cómo descargar el código de GitHub y luego deben saber cómo ejecutar el código que descargaron.

**En este punto, es donde muchos lectores encuentran problemas**

Algunos lectores me envían correos electrónicos. A menudo expresando su frustración, porque están tratando de aprender Python o Estadística Bayesiana y Procesamiento Digital de Señales.

Más NO están interesados en instalar software, ni clonar repositorios o establecer las rutas de búsqueda de Python.

En cierto sentido, su frustración está completamente justificada: no debería ser tan difícil como descargar un programa y ejecutarlo. Aunque a veces su frustración está mal dirigida, a veces culpan a Python, otras me culpan a mí. Lo que no es del todo justo.

> Me gustaría explicarte los problemas que suelen surgir y sus posibles soluciones

El problema fundamental es que la barrera entre el uso de una computadora y la programación de una computadora es cada vez mayor. Cuando tuve un Commodore 64 (en 1982, creo) esta barrera era inexistente. Al encender la computadora, cargaba y ejecutaba un entorno de desarrollo de software (SDE). Para hacer algo, tenía que escribir al menos una línea de código, incluso si todo lo que hacía era otro programa (como [Archon](https://es.wikipedia.org/wiki/Archon:_The_Light_and_the_Dark){:target="_blank" rel="nofollow,noreferrer"}).

Desde entonces, tres cambios han hecho que sea cada vez más difícil para los usuarios convertirse en programadores.

- **1. Los minoristas de computadoras dejaron de instalar entornos de desarrollo de forma predeterminada**

Como resultado de esto, cualquier persona que desee aprender a programar debe comenzar instalando un SDE, y esa es una barrera más grande de lo que cabría esperar.

Muchos usuarios nunca han instalado nada, no saben cómo hacerlo o no pueden hacerlo. Instalar el software ahora es más fácil de lo que solía ser, pero sigue siendo un proceso propenso a errores y puede ser frustrante. Si alguien solo quiere aprender a programar, no debería verse forzado a aprender cómo administrar el sistema primero.

- **2. Las Interfaces de Usuario pasan de Interfaces por Comandos (CLI) a Interfaces Gráficas (GUI)**

Las GUI generalmente son más fáciles de usar, pero ocultan información de los usuarios sobre lo que realmente está sucediendo. Cuando los usuarios realmente no necesitan saber, ocultar información puede ser algo bueno. El problema es que las GUI ocultan mucha información que los programadores necesitan saber. Entonces, cuando un usuario decide convertirse en programador, de repente se enfrenta a toda la información que se les ha ocultado. Si alguien solo quiere aprender a programar, no debería tener que aprender conceptos del sistema operativo.

- **3. La Computación en la Nube**

Nos ha llevado a ala ocultación de la información a un nivel completamente nuevo. Las personas que usan aplicaciones web a menudo tienen solo una vaga idea de dónde están almacenados sus datos y qué aplicaciones pueden usar para acceder a ellos.

Muchos usuarios, especialmente en dispositivos móviles, no distinguen entre sistemas operativos, aplicaciones, navegadores web y aplicaciones web. Cuando cargan y descargan datos, a menudo se sienten confundidos acerca de dónde provienen y hacia dónde se dirigen. Cuando instalan algo, a menudo están confundidos acerca de qué se está instalando.

- [**Opciones que te van a facilitar aprender a programar**](#opciones-que-te-van-a-facilitar-aprender-a-programar)
  - [1. Regresar al futuro](#1-regresar-al-futuro)
  - [2. Afrontar el Sufrimiento](#2-afrontar-el-sufrimiento)
  - [3. Dilatar el Sufrimiento](#3-dilatar-el-sufrimiento)
  - [4. Abrazar al futuro, por Nick Coghlan](#4-abrazar-al-futuro-por-nick-coghlan)
- [**Una metodología personalizada**](#una-metodología-personalizada)

## **Opciones que te van a facilitar aprender a programar**

Bueno.. ¿Y qué podemos hacer al respecto? Aquí hay algunas opciones (a las que se les ha aplicado algunos nombres amigables).

> ***Para alguien que creció con un Commodore 64, aprender a programar era bastante difícil; para alguien que crece con un dispositivo móvil conectado a la nube, es más difícil aún.***

### 1. Regresar al futuro

Una opción es crear computadoras, como mi Commodore 64, que rompan la barrera entre usar y programar una computadora. Parte de la motivación para Raspberry Pi, [según Eben Upton](https://www.youtube.com/watch?v=6xFzVuxldqs){:target="_blank" rel="nofollow,noreferrer"} es recrear el tipo de entorno que convierte a los usuarios en programadores.

### 2. Afrontar el Sufrimiento

Otra opción es enseñar a los estudiantes a configurar y usar un entorno de desarrollo de software antes de que comiencen a programar (o al mismo tiempo)

### 3. Dilatar el Sufrimiento

Una tercera opción es utilizar los recursos de la nube para que los estudiantes comiencen a programar de inmediato y posponer la creación de sus propios entornos.

### 4. Abrazar al futuro, por Nick Coghlan

La última opción, sería que los principiantes comiencen sobre entornos de desarrollo basados ​​en la nube y permanezcan allí para siempre.

## **Una metodología personalizada**

En unas de mis clases **“Afrontamos el Sufrimiento”** haciendo que los estudiantes aprendan a usar la interfaz de línea de comandos de UNIX al mismo tiempo que están aprendiendo C. Los estudiantes en esa clase ya saben cómo programar y tienen profesores en vivo para ayudar. Para los principiantes, y especialmente para las personas que trabajan por su cuenta, recomiendo dilatar el sufrimiento.

Estas son algunas de las herramientas que he usado:

* Tutoriales interactivos que ejecutan código en un navegador, como esta adaptación de "[Cómo pensar como un informático](http://interactivepython.org/runestone/static/thinkcspy/index.html){:target="_blank" rel="nofollow,noreferrer"}".
* Entornos de desarrollo completos que se ejecutan en un navegador, como [PythonAnywhere](https://www.pythonanywhere.com){:target="_blank" rel="nofollow,noreferrer"}.
* Máquinas virtuales que ya contienen entornos de desarrollo completos, que los usuarios pueden descargar y ejecutar (siempre que tengan, o puedan instalar, el software que ejecuta la máquina virtual).
* Servicios como Binder que ejecuta entornos de desarrollo en servidores remotos, lo que permite a los usuarios conectarse mediante el navegador.

En varios proyectos míos, he usado todas estas herramientas. Además de la versión interactiva de “ *Cómo pensar..*“, también existe esta [versión interactiva de Think Java](https://books.trinket.io/thinkjava){:target="_blank" rel="nofollow,noreferrer"}, adaptada y alojada por [Trinket](https://trinket.io){:target="_blank" rel="nofollow,noreferrer"}. En Think Python , animo a los lectores a utilizar PythonAnywhere durante al menos los primeros cuatro capítulos, y luego les doy instrucciones para hacer [la transición a una instalación local](http://www.allendowney.com/wp/books/think-python-2e){:target="_blank" rel="nofollow,noreferrer"}.

A pesar de que he utilizado máquinas virtuales para algunas de mis clases en el pasado, pero recientemente he usado más servicios en línea, como el servicio de [Think DSP](http://greenteapress.com/wp/think-dsp){:target="_blank" rel="nofollow,noreferrer"}, alojado por O’Reilly Media . Y los repositorios de todos mis libros están configurados para ejecutarse bajo [Binder](https://mybinder.readthedocs.io/en/latest){:target="_blank" rel="nofollow,noreferrer"}.

Estas opciones ayudan a las personas a comenzar, pero tienen limitaciones, tarde o temprano; los estudiantes querrán o necesitarán instalar un entorno de desarrollo en sus propias computadoras; pero si separamos el aprendizaje del uso de los programas del aprendizaje de instalación del software; sus posibilidades de éxito serán mayores.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Relacionados** <!-- omit in toc -->

Si deseas leer otros artículos interesantes similares, puedes ojear el resto de [🏷 reflexiones de programación](https://ciberninjas.com/etiqueta/#Reflexiones+de+Programaci%C3%B3n) publicadas.

Pronto, espero, seguir publicando más artículos similares 💪

![Reflexión sobre la dificultad del aprendizaje de la programación en la era actual de los servicios en red y la nube, por Allen Downey](/assets/img/2020-news/chico-buscando-libro-biblioteca.webp "Reflexión sobre la dificultad del aprendizaje de la programación en la era actual de los servicios en red y la nube, por Allen Downey")

> **Fuente**: [Programar es Cada Vez Más Difícil](http://allendowney.blogspot.com.es/2018/02/learning-to-program-is-getting-harder.html "Aprender a Programar es Cada Vez Más Difícil por Allen Downey") traducción al castellano por [Pablo álvarez Corredera](https://kutt.it/ciberninjast) bajo permiso del autor.