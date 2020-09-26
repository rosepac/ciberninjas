---

author: rosepac
bootstrap: true
comments: false
tags:
- Python
- Electrónica
thumbnail: /assets/img/blog/16-renderizar-musica-javascript.webp
feature-img: /assets/img/blog/16-renderizar-musica-javascript.webp
title: '▷ ZzFXM: Un pequeño renderizador de música JavaScript'
description: >-
  ZzFXM genera pistas de música estéreo a partir de patrones de notas y datos de instrumentos musicales. Las muestras de instrumentos se crean utilizando una versión modificada, del minúsculo generador de sonido ZzFX de Frank Force.
excerpt: >-
  ZzFXM genera pistas de música estéreo a partir de patrones de notas y datos de instrumentos musicales. Las muestras de instrumentos se crean utilizando una versión modificada, del minúsculo generador de sonido ZzFX de Frank Force.
canonical_URL: https://ciberninjas.com/micropython-miniplaca-con-python/
permalink: /micropython-miniplaca-con-python/
date: 2020-08-18 09:12:12
published: true

---

<!-- https://micropython.org/ -> Creo que esto es bueno para alguien que comienza con microcontroladores (similar al Arduino)  

Para la creación rápida de prototipos de aplicaciones GUI, LVGL tiene enlaces de micropython: https://github.com/lvgl/lv_micropython

La aplicación más genial de Python en uC que he visto recientemente está en el espacio del teclado mecánico personalizado:
https://github.com/makerdiary/python-keyboard

Seeedstudio proporciona ArduPy para su terminal Wio, que puede generar bibliotecas de micropython desde Arduino C Libs. Por lo tanto, puede escribir código Arduino con micropython en el dispositivo. Como IDE, proporcionan complementos para MS VisualStudo Code.
https://wiki.seeedstudio.com/ArduPy/

Echa un vistazo a uiflow de M5Stack. Es un IDE web que usa micropython para ESP32. Puede utilizar los sensores de arboleda M5stack. El IDE genera código Python que se puede utilizar en cualquier implementación de MicroPython (ESP8266, EPS32, Raspi, CircuitPython, Micro: Bit, lo que sea) y las bibliotecas de Python son todas de código abierto.
https://flow.m5stack.com/



 () buscar tambien Pycopy -->
<!-- TinyGo ( https://github.com/tinygo-org/tinygo ) es el equivalente en Golang de esto para cualquiera que quiera un lenguaje más eficiente (que Python) y simple de usar.
respuesta

	
lloeki Hace 20 horas [-]

De manera similar, hay mruby que está bastante simplificado, aunque no estoy seguro de los requisitos exactos (esos requisitos de micropython son bastante impresionantes)
https://mruby.org/ 


Ya lo hace! (Siempre que el destino admita LLVM)
https://rust-embedded.github.io/book/

 No quiero Python en Arduino, quiero Rust: https://github.com/avr-rust/ruduino
Qué hermoso sería eso; un administrador de paquetes asombroso (Cargo), tipos fuertes, un rendimiento increíblemente rápido, memoria segura y errores menos extraños que son difíciles de depurar en un sistema integrado.


Es un poco más limitado para el rendimiento, pero tal vez Starlark es lo que estás buscando. https://github.com/bazelbuild/starlark
respuesta




-->














ZzFXM: Un pequeño renderizador de música JavaScript, que genera pistas de música estéreo a partir de patrones de notas y datos de instrumentos musicales. Las muestras de instrumentos se crean utilizando una versión modificada, del minúsculo generador de sonido ZzFX de Frank Force.

ZzfxM fue desarrollado para crear música para producciones de tamaño limitado (es decir, juegos js13k). El formato de la canción se basa libremente en el formato MOD del rastreador, utilizando secuencias de patrones repetidos para crear canciones largas a partir de pequeños fragmentos de datos musicales. Las canciones son muy comprimibles. Una vez comprimidos en gzip, son pequeños, por lo general, unos cientos de bytes.

## **Tocando una canción**

Las muestras de audio se compilan pasando datos de instrumentos, patrones y secuencias a zzfxM(). La función devuelve un par de matrices que contienen datos de muestra para los canales estéreo izquierdo y derecho. Para reproducir la canción renderizada, llame zzfxP()usando los datos de muestra generados. La zzfxMfunción devuelve un AudioBufferSourceNode , que puede usar para controlar la canción (detenerla, hacer un bucle, etc.).

## **Componiendo una canción**

ZzFXM no viene con herramientas de creación de canciones. Sin embargo, el repositorio contiene un convertidor de canciones para que pueda usar herramientas establecidas, como MilkyTracker o el [Bassoon Tracker](https://www.stef.be/bassoontracker/){:target ="_blank" rel="nofollow,noreferrer"} basado en navegador para componer sus canciones (en formato MK MOD) y luego convertirlas a ZzFXM.

Una vez convertidos los datos de la canción, solo necesita crear y asignar sus instrumentos. Todas las canciones de ejemplo de esta página se crearon con este método.

También puede renunciar a las herramientas de autoría y generar canciones de forma procedimental. Consulte el archivo README para obtener detalles sobre el formato de la canción.

### **Relacionados** <!-- omit in toc -->

[▷ Análisis y Memoria 2020: Los mejores proyectos de Javascript](https://ciberninjas.com/librer%C3%ADas%20javascript/2020/01/13/memoria-mejores-proyectos-javascript.html)

[▷ TensorFlow.js una biblioteca para añadir aprendizaje automático a través de JavaScript](https://ciberninjas.com/tensorflow-javascript/)

[🔥 ▷ Rome, ¿La Mejor Herramienta para Javascript jamás creada?](https://ciberninjas.com/roma-herramienta-javascript/)

[La historia y el legado de jQuery](https://ciberninjas.com/la-historia-y-el-legado-de-jquery/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Página de ZzFXM](https://keithclark.github.io/ZzFXM/){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.