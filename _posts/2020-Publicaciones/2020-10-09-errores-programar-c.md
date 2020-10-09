---

author: rosepac
bootstrap: true
comments: false
tags:
- Programación
thumbnail: /assets/img/blog/lenguajes-logos/ciberninjas-lenguaje-c.webp
feature-img: /assets/img/blog/lenguajes-logos/ciberninjas-lenguaje-c.webp
title: '▷ 4 Errores Comunes al Programar en C y 5 Consejos para Evitarlos'
description: >-
  El asombroso poder de C a veces hace cometer pequeños errores. Esto es lo que debe tener en cuenta, para mantener tus programas C en una buena línea recta y siempre ordenados.
excerpt: >-
  El asombroso poder de C a veces hace cometer pequeños errores. Esto es lo que debe tener en cuenta, para mantener tus programas C en una buena línea recta y siempre ordenados.
canonical_URL: https://ciberninjas.com/errores-programar-c/
permalink: /errores-programar-c/
date: 2020-10-09 11:41:02
last_modified_at:
published: true

---

Pocos lenguajes de programación pueden igualar a C en cuanto a velocidad y potencia a nivel de máquina. Esta afirmación era cierta hace 50 años y sigue siendo verdad a día de hoy.

Sin embargo, hay una razón por la que los programadores acuñaron el término "gun (pistolas)" para describir todo el poder de C. Porque si no tienes mucho cuidado, con C puedes ser capaz de volarte los dedos de los pies, o los de las otras personas.

- [**4 Errores Más Comunes en C**](#4-errores-más-comunes-en-c)
  - [**1. No liberar la memoria `malloc` (o liberarla más de una vez)**](#1-no-liberar-la-memoria-malloc-o-liberarla-más-de-una-vez)
  - [**2. Leer una matriz fuera de los límites**](#2-leer-una-matriz-fuera-de-los-límites)
  - [**3. No comprobar los resultados de `malloc`**](#3-no-comprobar-los-resultados-de-malloc)
  - [**4. El uso de `void` como punteros genéricos de la memoria**](#4-el-uso-de-void-como-punteros-genéricos-de-la-memoria)
- [**5 Consejos para Evitar Errores comunes en C**](#5-consejos-para-evitar-errores-comunes-en-c)
  - [**La Estructura de programas C, para que la propiedad de la memoria se mantenga clara**](#la-estructura-de-programas-c-para-que-la-propiedad-de-la-memoria-se-mantenga-clara)
  - [**Usa las opciones del compilador de C, que te protegerán contra los problemas de memoria**](#usa-las-opciones-del-compilador-de-c-que-te-protegerán-contra-los-problemas-de-memoria)
  - [**Utiliza Cppcheck o Valgrind para analizar el código C, en busca de fugas de memoria**](#utiliza-cppcheck-o-valgrind-para-analizar-el-código-c-en-busca-de-fugas-de-memoria)
  - [**Automatiza la gestión de la memoria en C, a través de un recolector de basura**](#automatiza-la-gestión-de-la-memoria-en-c-a-través-de-un-recolector-de-basura)
- [**No utilices C, si con otro idioma es suficiente**](#no-utilices-c-si-con-otro-idioma-es-suficiente)

## **4 Errores Más Comunes en C**

Estos son cuatro de los errores más comunes que puedes cometer con C y 5 pautas que puedes tomar en cuenta, si quieres poder prevenirlos.

### **1. No liberar la memoria `malloc` (o liberarla más de una vez)**

Este es uno de los grandes errores en C, muchos de los cuales involucran la administración de la memoria. La memoria asignada (realizada con la función `malloc`) no se elimina automáticamente en C.

Es un trabajo más del programador, deshacerse de esa memoria cuando ya no se usa. Si no se liberan las solicitudes repetidas de la memoria, se terminará con una pérdida de memoria.

Además, al intentar utilizar una región de la memoria que ya ha sido liberada tu programa se bloqueará o, lo que es peor, trabajará de forma endeble y se terminará vovliendo vulnerable a un ataque mediante ese mecanismo.

Debes tener en cuenta que una pérdida de memoria solo debe describir situaciones en las que se supone que la memoria debería liberarse, pero no se ha ejecutado así.

Si un programa sigue asignando memoria, porque la memoria es realmente necesaria y realmente se está utilizando. Entonces el uso de la memoria puede ser ineficiente; pero estrictamente hablando, no es una fuga de memoria como tal.

### **2. Leer una matriz fuera de los límites**

Aquí tenemos otro de los errores más comunes y peligrosos en C. Una lectura más allá del final de una matriz puede devolver datos basura.

Una escritura más allá de los límites de una matriz podría corromper el estado del programa, bloquearlo por completo o, lo peor de todo, convertirse en un factor de ataque a través de cualquier posible malware.

Entonces, ¿Por qué la carga de comprobar los límites de una matriz se deja al programador?

En la especificación oficial de C, leer o escribir una matriz más allá de sus límites es un "comportamiento indefinido", lo que significa, que la especificación no toma en cuenta lo que se supone que debe suceder. El compilador, ni tan siquiera está configurado para lanzar errores por ello.

C ha favorecido durante mucho tiempo, el poner todo el potencial posible sobre el programador, incluso bajo su propio riesgo. Una lectura o escritura fuera de los límites, no suele ser atrapada por el compilador, a menos que se habilite específicamente a través de las opciones correctas del compilador.

Es más, es posible que se exceda el límite de una matriz en tiempo de ejecución, de forma tal, que ni tan siquiera una verificación del compilador sea capaz de evitarlo.

### **3. No comprobar los resultados de `malloc`**

Las funciones `malloc` y `calloc` (para la memoria previamente puesta a cero) son las funciones de la biblioteca de C que obtienen la memoria asignada hacía el sistema.

Si no se puede asignar memoria, generarán un error. En los días en los que, los ordenadores tenían relativamente poca memoria, existía una gran posibilidad de que una llamada a la función `malloc` no tuviera éxito.

A pesar de que los ordenadores de hoy tienen gigabytes de RAM para distribuir `malloc`, siempre existe la posibilidad de que falle, especialmente bajo alta presión de memoria o cuando se asignan grandes bloques de memoria a la vez.

Esto es especialmente cierto para los programas C que “asignan en bloque” un gran bloque de memoria del sistema operativo primero y luego lo dividen para su propio uso.

Si esa primera asignación falla porque es demasiado grande, es posible que pueda atrapar ese rechazo, reducir la asignación y ajustar la heurística de uso de memoria del programa en consecuencia. Pero si la asignación de memoria falla sin ser atrapada, todo el programa podría fallar.

### **4. El uso de `void` como punteros genéricos de la memoria**

Usar `void` para señalar a la memoria es un hábito antiguo y malo. Los punteros a la memoria deben ser siempre `char`,  `unsigned char` o  `uintptr_t`. Los conjuntos de compiladores de C modernos deben proporcionar `uintptr_t` como parte de `stdint.h`.

Cuando se etiqueta de una de estas formas, está claro que el puntero se refiere a una ubicación de memoria en abstracto en lugar de a algún tipo de objeto indefinido.

Esto es doblemente importante si estás realizando cálculos matemáticos con punteros. Con `uintptr_t` y similares, el elemento de tamaño al que se apunta y cómo se utilizará no son ambiguos. Con `void`, no tanto.

## **5 Consejos para Evitar Errores comunes en C**

¿Cómo se evitan estos errores tan comunes cuando se trabaja con memoria, matrices y punteros en C? Debes tener en cuenta estos cinco consejos.

### **La Estructura de programas C, para que la propiedad de la memoria se mantenga clara**

Si recién estás iniciando una aplicación en C, vale la pena pensar en la forma en que se asigna y libera la memoria como uno de los principios puntos de orden del programa.

Si no tienes claro dónde debe liberar memoria una asignación determinada o bajo qué circunstancias, te estarás buscando problemas. Haz un esfuerzo adicional, para que la ejecución de la memoria sea lo más clara posible; y te estarás haciendo un favor a ti mismo (y a los futuros desarrolladores).

La filosofía detrás de lenguajes como [Rust](/etiqueta/#Rust "Publicaciones sobre el lenguaje Rust, creadas en Ciberninjas"). Hace que sea imposible escribir un programa que se compile correctamente a menos que exprese claramente cómo se posee y se transfiere la memoria. C no tiene tales restricciones, pero es aconsejable adoptar esa filosofía, como guía o normal principal, siempre que sea posible.

### **Usa las opciones del compilador de C, que te protegerán contra los problemas de memoria**

Muchos de los problemas descritos en la primera mitad de este artículo se pueden marcar utilizando opciones estrictas del compilador. Las ediciones recientes de gcc, por ejemplo, proporcionan herramientas como AddressSanitizer (“ASAN”) como una opción de compilación para verificar los errores comunes en la administración de la memoria.

Debes tener cuidado, porque estas herramientas no capturan absolutamente todo. Simplemente son flotadores; pero no alcanzan el nivel de ser un salvavidas. Además, algunas de estas herramientas, como ASAN, imponen y conllevan un coste a través de un tiempo de ejecución mayor.

Por lo que, se deben evitar, en las versiones de lanzamiento oficiales.

### **Utiliza Cppcheck o Valgrind para analizar el código C, en busca de fugas de memoria**

Cuando los propios compiladores se quedan cortos, otras herramientas intervienen para llenar el vacío, especialmente cuando se trata de analizar el comportamiento del programa a la hora de la ejecución.

Cppcheck, ejecuta un análisis estático en el código fuente de C, para buscar errores comunes en la administración de la memoria y comportamientos no definidos (entre otras cosas).

Valgrind, proporciona un caché de herramientas, capaz de detectar errores de memoria y subprocesos en la ejecución de los programas C. Esto es mucho más poderoso que usar el análisis a la hora de la compilación, ya que se puede lograr información sobre el comportamiento del programa cuando está realmente funcionando.

La desventaja es, que el programa se ejecutará, mucho más lento que normalmente. Pero eso no será un gran problema mientras que solamente sea a la hora de realizar las pruebas.

Estas herramientas no son soluciones mágicas y probablemente no logren identificar todos los errores, pero funcionan como parte de una estrategia de defensa contra la mala gestión de la memoria en C.

### **Automatiza la gestión de la memoria en C, a través de un recolector de basura**

Dado que los errores de memoria son una fuente evidente de problemas en C, aquí hay una solución sencilla: No administres la memoria de C manualmente. Utiliza un recolector de basura.

Sí, esto es posible en C. Puede usar algo como el recolector de basura Boehm-Demers-Weiser para agregar una administración automática de memoria, a los programas creados con C. Para algunos programas, el uso del "recopilador de basura Boehm" puede incluso acelerar al propio software, e incluso se puede utilizar como mecanismo de detección de fugas.

La principal desventaja del "recolector de basura Boehm" es que no se puede escanear, ni liberar memoria, que use la función `malloc` predeterminada. El recolector usa su propia función de asignación, y solo funciona en la memoria que se le asigna específicamente.

## **No utilices C, si con otro idioma es suficiente**

Algunas personas escriben en C porque realmente lo disfrutan y lo encuentran fructífero. Sin embargo, en general, es mejor usar C solamente cuando sea necesario, y en las pocas situaciones en las que realmente es la opción ideal.

Si tienes un proyecto, en el que el rendimiento de ejecución se verá limitado principalmente por la Entrada / Salida o el acceso al disco, es poco probable que escribirlo en C lo haga más rápido, y probablemente solo lograrás un código más propenso a errores y difícil de escribir y mantener.

El mismo programa, perfectamente podría estar escrito en Go o Python.

Otro enfoque es usar C, solamente para las partes de la aplicación que realmente requieren un alto rendimiento, y junto a un lenguaje más confiable. Aunque sea una opción más lenta.

Nuevamente, Python se puede usar para empaquetar bibliotecas C o código C personalizado, lo que lo convierte en una buena opción para los componentes más repetitivos como el manejo de las opciones sobre la línea de comandos.

### **Relacionados** <!-- omit in toc -->

[🥇 ▷ Los 15 Mejores Lenguajes de Programación 👨‍💻 para Aprender en 2020](https://ciberninjas.com/15-mejores-lenguajes-programacion/)

[▷ ¿Qué lenguajes de programación permite utilizar el Sistema Operativo Fuchsia?](https://ciberninjas.com/politica-de-los-lenguajes-programacion-fuchsia/)

[▷ ¿Qué es un lenguaje de tipado estático?, ¿Qué es un lenguaje de tipado dinámico?](https://ciberninjas.com/lenguaje-tipado/)

[🥇 Los Mejores Cursos GRATIS de Programación Online en español 2020](https://ciberninjas.com/cursos-tecnologia/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: 4 common C programming mistakes — and 5 tips to avoid them, por [Serdar Yegulalp](https://www.infoworld.com/author/Serdar-Yegulalp/ "Serdar Yegulalp es un escritor senior en InfoWorld, que cubre el desarrollo de software y herramientas de operaciones, aprendizaje automático, contenedorización y revisiones de productos en esas categorías."){:target="_blank" rel="nofollow,noreferrer"} en Infoworld.

![4 Errores Comunes al Programar en C y 5 Consejos para Evitarlos](/assets/img/blog/lenguajes-logos/ciberninjas-lenguaje-c.webp "4 Errores Comunes al Programar en C y 5 Consejos para Evitarlos")