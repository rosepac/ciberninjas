---
author_profile: true
title: '▷ Vidgear: Librería de Python para el procesamiento de vídeo 🐍'
description: "Librería de procesamiento de video en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras"
excerpt: "Librería de procesamiento de video en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras"
published: true
comments: false
date: 2020-01-15 19:10:12
last_modified_at: 
canonical_URL: /vidgear-libreria-python/
categories:
- Librería Python
tags:
- Python
header:
  teaser: https://i.ibb.co/cFYs4Vd/vidgear-libreria-python.png
# header:
#  teaser: https://i.ibb.co/q1xYTvG/photo-1480843669328-3f7e37d196ae-ixlib-rb-1-2.jpg
#   overlay_image: https://i.ibb.co/q1xYTvG/photo-1480843669328-3f7e37d196ae-ixlib-rb-1-2.jpg
#   overlay_filter: 0.2
#   image_description: 'Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación en 2020'
#   image_alt: 'Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación en 2002'
#   caption: "Créditos: Unsplash"
# toc: false
# toc_label: "Contenidos"
# toc_icon: user-ninja
# toc_sticky: true
---

![](https://i.ibb.co/cFYs4Vd/vidgear-libreria-python.png)

VidGear es una poderosa biblioteca de procesamiento de video en Python construida con [**Gears de**](https://github.com/abhiTronix/vidgear#gears) subprocesos múltiples, cada uno con un conjunto único de características innovadoras. Estas API proporcionan un contenedor fácil de usar, altamente extensible y multihilo alrededor de muchas bibliotecas subyacentes de última generación como *[OpenCV ➶](https://github.com/opencv/opencv) , [FFmpeg ➶](https://www.ffmpeg.org/) , [picamera ➶](https://github.com/waveform80/picamera) , [pafy ➶](https://github.com/mps-youtube/pafy) , [pyzmq ➶](https://github.com/zeromq/pyzmq) y [python-mss ➶](https://github.com/BoboTiG/python-mss)*

El siguiente **diagrama de bloques funcional muestra** claramente el funcionamiento de la biblioteca VidGear:

[![Diagrama de bloques funcionales de @Vidgear](https://camo.githubusercontent.com/7eb66b31e45072cd99ee988690242b93388705db/68747470733a2f2f6162686974726f6e69782e6769746875622e696f2f696d672f766964676561722f766964676561725f66756e6374696f6e322d30312e737667)](https://camo.githubusercontent.com/7eb66b31e45072cd99ee988690242b93388705db/68747470733a2f2f6162686974726f6e69782e6769746875622e696f2f696d672f766964676561722f766964676561725f66756e6374696f6e322d30312e737667)

# Tabla de contenido

[**TL; DR**](https://github.com/abhiTronix/vidgear#tldr)

[**Engranajes: ¿Qué son estos?**](https://github.com/abhiTronix/vidgear#gears)

- [**CamGear**](https://github.com/abhiTronix/vidgear#camgear)
- [**PiGear**](https://github.com/abhiTronix/vidgear#pigear)
- [**VideoGear**](https://github.com/abhiTronix/vidgear#videogear)
- [**ScreenGear**](https://github.com/abhiTronix/vidgear#screengear)
- [**WriteGear**](https://github.com/abhiTronix/vidgear#writegear)
- [**NetGear**](https://github.com/abhiTronix/vidgear#netgear)

[**Instalación**](https://github.com/abhiTronix/vidgear#installation)

- [**Prerrequisitos**](https://github.com/abhiTronix/vidgear#prerequisites)
- [**1 - Instalación de PyPI**](https://github.com/abhiTronix/vidgear#option-1-pypi-install)
- [**2 - Descarga del archivo de lanzamiento**](https://github.com/abhiTronix/vidgear#option-2-release-archive-download)
- [**3 - Clon Repo**](https://github.com/abhiTronix/vidgear#option-3-clone-the-repo)

[**Nuevo lanzamiento SneekPeak: v0.1.6**](https://github.com/abhiTronix/vidgear#new-release-sneekpeak--vidgear-016)

[**Documentación**](https://github.com/abhiTronix/vidgear#documentation)

**Para desarrolladores / contribuyentes**

- [**Pruebas**](https://github.com/abhiTronix/vidgear#testing)
- [**Contribuyendo**](https://github.com/abhiTronix/vidgear#contributing)

**Información adicional**

- [**Legados de Python compatibles**](https://github.com/abhiTronix/vidgear#supported-python-legacies)
- [**Registro de cambios**](https://github.com/abhiTronix/vidgear#changelog)
- [**Citando**](https://github.com/abhiTronix/vidgear#citing)
- [**Licencia**](https://github.com/abhiTronix/vidgear#license)

## TL; DR

#### ¿Qué es vidgear?

> ***"VidGear es una biblioteca Python de procesamiento de video completa [ultrarrápida](https://github.com/abhiTronix/vidgear/wiki/FAQ-&-Troubleshooting#2-vidgear-is-ultrafast-but-how) , compacta, flexible y fácil de adaptar".***

#### ¿Qué hace?

> ***"VidGear puede leer, escribir, procesar, enviar y recibir cuadros de video desde varios dispositivos en tiempo real".***

#### ¿Cual es su propósito?

> ***"Construido con la simplicidad en mente, VidGear permite a los programadores y desarrolladores de software integrar y realizar fácilmente tareas complejas de procesamiento de video en sus aplicaciones existentes o nuevas, sin pasar por la documentación de varias bibliotecas subyacentes y usar solo unas pocas líneas de código. Beneficioso para ambos, si eres nuevo en la programación con lenguaje Python o ya eres un profesional ".***

**Para obtener información más avanzada, consulte la [\*documentación de Wiki ➶\*](https://github.com/abhiTronix/vidgear/wiki) .**

## Engranajes

> **VidGear está construido con varias \**API de\** subprocesos \**múltiples\** \*(también conocidas como Gears),\* cada una con alguna función / mecanismo único.**

Cada una de estas API está diseñada exclusivamente para manejar / controlar diferentes transmisiones de video, transmisiones de red y codificadores de medios específicos del dispositivo. Estas API proporcionan un contenedor fácil de usar, altamente extensible y multihilo alrededor de varias bibliotecas subyacentes para explotar sus características y funciones directamente mientras proporcionan un manejo robusto de errores.

**Estos engranajes se pueden clasificar de la siguiente manera:**

**A. Engranajes de VideoCapture:**

- [**CamGear: Apunta a**](https://github.com/abhiTronix/vidgear#camgear) *varias cámaras IP-USB / Streams de red / YouTube-Video-URL.*
- [**PiGear: apunta a**](https://github.com/abhiTronix/vidgear#pigear) *varios módulos de cámara Raspberry Pi.*
- [**ScreenGear:**](https://github.com/abhiTronix/vidgear#screengear) *permite la* [**transmisión de**](https://github.com/abhiTronix/vidgear#screengear) *pantalla ultrarrápida.*
- [**VideoGear:**](https://github.com/abhiTronix/vidgear#videogear) *una API común con envoltura de estabilizador de video.*

**B. Equipo de VideoWriter:**

- [**WriteGear:**](https://github.com/abhiTronix/vidgear#writegear) *maneja la codificación y compresión de video sin pérdida fácil.*

**C. Equipo de red:**

- [**NetGear: apunta a la**](https://github.com/abhiTronix/vidgear#netgear) *transferencia de cuadros de video síncronos / asíncronos entre sistemas de interconexión a través de la red.*

## CamGear

> *CamGear puede capturar cuadros ultrarrápidos de una amplia gama de dispositivos / transmisiones, que incluye casi cualquier cámara IP / USB, formato de archivo de video multimedia ( [\*hasta 4k probado\*](https://github.com/abhiTronix/vidgear/blob/e0843720202b0921d1c26e2ce5b11fadefbec892/vidgear/tests/benchmark_tests/test_benchmark_playback.py#L65) ), varios protocolos de transmisión de red como `http(s), rtp, rstp, rtmp, mms, etc.`, además de soporte para la transmisión en vivo de Gstreamer y YouTube URLs de video / livestreams.*

CamGear proporciona un contenedor multihilo flexible de alto nivel alrededor de la `OpenCV's` [clase VideoCapture](https://docs.opencv.org/master/d8/dfe/classcv_1_1VideoCapture.html#a57c0e81e83e60f36c83027dc2a188e80) con acceso a casi todos sus parámetros disponibles y también emplea [`pafy`](https://github.com/mps-youtube/pafy)API de Python para la transmisión en vivo de [YouTube](https://github.com/abhiTronix/vidgear/wiki/CamGear#2-camgear-api-with-live-youtube-piplineing-using-video-url) . Además, CamGear se implementa exclusivamente en [**modo de cola**](https://github.com/abhiTronix/vidgear/wiki/Threaded-Queue-Mode) enhebrada para un manejo de trama sincronizado, ultrarrápido y sin errores.

**El siguiente diagrama de bloques funcional simplificado muestra el funcionamiento generalizado de la API de CamGear:**

[![Diagrama de bloque funcional CamGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/CamGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/CamGear.png)

### Guía API de CamGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/CamGear#camgear-api)

 

## VideoGear

> *VideoGear API proporciona un envoltorio interno especial alrededor de la clase exclusiva de [**estabilizador de video de**](https://github.com/abhiTronix/vidgear/wiki/Stabilizer-Class) VidGear .*

Además, la API VideoGear puede proporcionar acceso interno a las API [CamGear](https://github.com/abhiTronix/vidgear#camgear) y [PiGear](https://github.com/abhiTronix/vidgear#pigear) separadas por un indicador especial. Por lo tanto, *esta API tiene el poder exclusivo para cualquier VideoStream entrante de cualquier fuente, ya sea en vivo o no, para acceder y estabilizarlo directamente con latencia mínima y requisitos de memoria.*

**A continuación se muestra una instantánea de un estabilizador de VideoGear en acción:**

[![VideoGear Stabilizer en acción!](https://github.com/abhiTronix/Imbakup/raw/master/Images/stabilizer.gif)](https://github.com/abhiTronix/Imbakup/raw/master/Images/stabilizer.gif)
*Video original cortesía de [@ SIGGRAPH2013](http://liushuaicheng.org/SIGGRAPH2013/database.html)*

Código para generar el video estabilizado API VideoGear anterior ( *vea ejemplos de uso más detallados [aquí](https://github.com/abhiTronix/vidgear/wiki/Real-time-Video-Stabilization#usage)* ):

```
# importar bibliotecas 
de vidgear.gears importar VideoGear
 import numpy como np
 import cv2

stream_stab = VideoGear ( source = ' test.mp4 ' , stabilize  =  True ) .start () # Para abrir cualquier transmisión de video válida con el indicador `estabilizar` establecido en True. 
stream_org = VideoGear ( source = ' test.mp4 ' ) .start () # abre la misma secuencia sin estabilización para la comparación

# bucle infinito 
mientras es  verdadero :
  
  frame_stab = stream_stab.read ()
   # leer marcos estabilizados

  # comprueba si frame es None 
  si frame_stab es  None :
     # if True rompe el 
    salto de bucle infinito
  
  # leer el marco original 
  frame_org = stream_org.read ()

  # Concatenate ambos marcos 
  output_frame = np.concatenate ((frame_org, frame_stab), eje = 1 )

  # put text 
  cv2.putText (output_frame, " Before " , ( 10 , output_frame.shape [ 0 ] -  10 ), cv2. FONT_HERSHEY_SIMPLEX , 0.6 , ( 0 , 255 , 0 ), 2 )
  cv2.putText (output_frame, " After " , (output_frame.shape [ 1 ] // 2 + 10 , frame.shape [ 0 ] -  10 ), cv2. FONT_HERSHEY_SIMPLEX , 0.6 , ( 0 , 255 , 0 ), 2 )
  
  cv2.imshow ( " Marco estabilizado " , marco_salida)
   # Mostrar ventana de salida

  key = cv2.waitKey ( 1 ) &  0x FF 
  # verifique 'q' presione la
   tecla if key ==  ord ( " q " ):
     # if 'q' presionó la tecla break 
    break

cv2.destroyAllWindows ()
# cerrar ventana de salida
stream_org.stop ()
stream_stab.stop ()
# cierra de forma segura las transmisiones de video.
```

### VideoGear API Guide:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/VideoGear#videogear-api)

## PiGear

> *PiGear es similar a CamGear, pero está hecho para admitir varios módulos de cámara Raspberry Pi \*(como el [módulo de cámara OmniVision OV5647](https://github.com/techyian/MMALSharp/wiki/OmniVision-OV5647-Camera-Module) y el [módulo de cámara ](https://github.com/techyian/MMALSharp/wiki/OmniVision-OV5647-Camera-Module)[Sony IMX219](https://github.com/techyian/MMALSharp/wiki/Sony-IMX219-Camera-Module) )\* .*

PiGear proporciona una envoltura flexible de múltiples subprocesos alrededor de la biblioteca completa de Python [**picamera**](https://github.com/waveform80/picamera) para interactuar con estos módulos correctamente, y también otorga la capacidad de explotar sus diversas características `brightness, saturation, sensor_mode, etc.`sin esfuerzo.

Lo mejor de todo es que la API de PiGear proporciona un excelente manejo de errores con características como un temporizador interno roscado que mantiene un seguimiento activo de cualquier subproceso congelado y maneja fallas de hardware / subprocesos congelados de manera robusta y, por lo tanto, saldrá de manera segura si se produce algún error. Entonces, si accidentalmente desconectó el cable del módulo de la cámara al ejecutar PiGear API en su secuencia de comandos, en lugar de entrar en posibles hilos de pánico / congelación del kernel, la API se cierra de manera segura para ahorrar recursos.

**El siguiente diagrama de bloques funcional simplificado muestra la API de PiGear:**

[![Diagrama de bloque funcional de PiGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/PiGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/PiGear.png)

### Guía de API de PiGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/PiGear#pigear-api)

 

## ScreenGear

> *ScreenGear API actúa como Screen Recorder, que puede capturar fotogramas de su monitor en tiempo real, ya sea definiendo un área en la pantalla de la computadora o en pantalla completa a expensas de una latencia insignificante. También proporciona soporte aparentemente para capturar cuadros de múltiples monitores.*

ScreenGear proporciona un contenedor de subprocesos múltiples de alto nivel alrededor [**de la**](https://github.com/BoboTiG/python-mss) API de la biblioteca python [**python-mss**](https://github.com/BoboTiG/python-mss) y también admite una manipulación directa y flexible de parámetros internos.

**A continuación se muestra una instantánea de una API ScreenGear en acción:**

[![ScreenGear en acción!](https://github.com/abhiTronix/Imbakup/raw/master/Images/screengear.gif)](https://github.com/abhiTronix/Imbakup/raw/master/Images/screengear.gif)

Código para generar el resultado anterior:

```
# importar bibliotecas 
de vidgear.gears import ScreenGear
 import cv2

stream = ScreenGear (). start ()

# bucle infinito 
mientras es  verdadero :
  
  frame = stream.read ()
   # marcos de lectura

  # comprobar si el cuadro es Ninguno 
  si el cuadro es  Ninguno :
     # si Verdadero romper el 
    salto de bucle infinito
  
  cv2.imshow ( " Marco de salida " , marco)
   # Mostrar ventana de salida

  key = cv2.waitKey ( 1 ) &  0x FF 
  # verifique 'q' presione la
   tecla if key ==  ord ( " q " ):
     # if 'q' presionó la tecla break 
    break

cv2.destroyAllWindows ()
# cerrar ventana de salida

stream.stop ()
# cerrar de forma segura la transmisión de video.
```

### Guía de la API de ScreenGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/ScreenGear#screengear-api)

## WriteGear

> *WriteGear maneja varias poderosas herramientas de escritura que nos brindan la libertad de hacer casi cualquier cosa imaginada con archivos multimedia.*

WriteGear API proporciona un contenedor completo, flexible y robusto en torno a [**FFmpeg**](https://www.ffmpeg.org/) , un marco multimedia líder. Con WriteGear, podemos procesar cuadros de video en tiempo real en un formato comprimido sin pérdidas con cualquier especificación adecuada en solo unas pocas [líneas de códigos](https://github.com/abhiTronix/vidgear/wiki/Compression-Mode:-FFmpeg#1-writegear-bare-minimum-examplecompression-mode) fáciles . Estas especificaciones incluyen la configuración de cualquier propiedad de video / audio, como `bitrate, codec, framerate, resolution, subtitles, etc.`tareas fáciles y complejas, como la multiplexación de video con audio en tiempo real (ver este [ejemplo wiki](https://github.com/abhiTronix/vidgear/wiki/Working-with-Audio#a-live-audio-input-to-writegear-class) ). Lo mejor de todo, WriteGear le otorga la libertad de jugar con cualquier parámetro FFmpeg con su exclusiva función de Comando personalizado (consulte este [ejemplo wiki](https://github.com/abhiTronix/vidgear/wiki/Custom-FFmpeg-Commands-in-WriteGear-API#custom-ffmpeg-commands-in-writegear-api) ), mientras maneja todos los errores de manera robusta.

Además de esto, WriteGear también proporciona acceso flexible a [**la API VideoWriter de OpenCV**](https://docs.opencv.org/master/dd/d9e/classcv_1_1VideoWriter.html#ad59c61d8881ba2b2da22cff5487465b5) que proporciona algunas herramientas básicas para la codificación de cuadros de video pero sin compresión.

**WriteGear opera principalmente en los siguientes dos modos:**

- **Modo de compresión:** en este modo, WriteGear utiliza [**`FFmpeg's`**](https://www.ffmpeg.org/)codificadores incorporados para codificar archivos multimedia sin pérdidas. Nos brinda la capacidad de explotar casi todos los parámetros disponibles disponibles dentro de FFmpeg, con tanta facilidad y flexibilidad y, al mismo tiempo, maneja de manera robusta todos los errores / advertencias de manera silenciosa. **Puede encontrar más información sobre este modo [aquí](https://github.com/abhiTronix/vidgear/wiki/Compression-Mode:-FFmpeg)** .
- **Modo sin compresión:** en este modo, WriteGear utiliza la [**API de VideoWriter**](https://docs.opencv.org/3.4/d8/dfe/classcv_1_1VideoCapture.html) incorporada de OpenCV básica . Similar al modo de compresión, WriteGear también admite la manipulación de todos los parámetros disponibles en la API VideoWriter de OpenCV. Pero este modo carece de la capacidad de manipular los parámetros de codificación y otras características importantes como la compresión de video, la codificación de audio, etc. **Puede obtener información sobre este modo [aquí](https://github.com/abhiTronix/vidgear/wiki/Non-Compression-Mode:-OpenCV)** .

**El siguiente diagrama de bloques funcional muestra el funcionamiento generalizado de la API WriteGear:**

[![Diagrama de bloque funcional WriteGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/WriteGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/WriteGear.png)

### WriteGear API Guide:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/WriteGear#writegear-api)

## NetGear

> *NetGear está diseñado exclusivamente para transferir cuadros de video de forma síncrona y asíncrona entre sistemas de interconexión a través de la red en tiempo real.*

NetGear implementa un contenedor de alto nivel alrededor de la biblioteca [**PyZmQ**](https://github.com/zeromq/pyzmq) python que contiene enlaces python para [ZeroMQ](http://zeromq.org/) , una biblioteca de mensajería distribuida asincrónica de alto rendimiento que tiene como objetivo ser utilizada en aplicaciones distribuidas o concurrentes. Proporciona una cola de mensajes, pero a diferencia del middleware orientado a mensajes, un sistema ZeroMQ puede ejecutarse sin un intermediario de mensajes dedicado.

NetGear proporciona un soporte perfecto para la transmisión bidireccional de datos entre el receptor (cliente) y el remitente (servidor) a través de patrones de mensajes síncronos bidireccionales como zmq.PAIR *(Patrón de par ZMQ)* y zmq.REQ / zmq.REP *(Patrón de solicitud / respuesta ZMQ)* .

NetGear también admite capacidades de compresión de codificación / decodificación de cuadros en tiempo real para optimizar el rendimiento mientras se envían los cuadros directamente a través de la red, codificando el cuadro antes de enviarlo y decodificándolo en el extremo del cliente automáticamente en tiempo real.

Por seguridad, NetGear implementa un fácil acceso a las capas de seguridad potentes, inteligentes y seguras de ZeroMQ, que permiten un cifrado fuerte de los datos y una autenticación irrompible entre el servidor y el cliente con la ayuda de certificados / claves personalizados y brinda privacidad y autenticación fáciles y estandarizadas para sistemas distribuidos a través de la red.

Lo mejor de todo es que NetGear puede manejar de manera robusta dispositivos de Servidores Múltiples a la vez, proporcionando así acceso a la Transmisión en vivo sin interrupciones de los dispositivos múltiples en una red al mismo tiempo.

**NetGear a partir de ahora admite sin problemas tres patrones de mensajería ZeroMQ:**

- [**`zmq.PAIR`**](https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/pair.html) *(Patrón de par ZMQ)*
- [**`zmq.REQ/zmq.REP`**](https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/client_server.html) *(Patrón de solicitud / respuesta de ZMQ)*
- [**`zmq.PUB/zmq.SUB`**](https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/pubsub.html) *(Patrón de publicación / suscripción de ZMQ)*

**El siguiente diagrama de bloques funcional muestra el funcionamiento generalizado de la API de NetGear:**

[![Diagrama de bloque funcional de NetGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/NetGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/NetGear.png)

### Guía de API de NetGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/NetGear#netgear-api)

## Instalación

## Prerrequisitos:

Antes de instalar VidGear, debe verificar que se cumplan las siguientes dependencias:

- ⚠️Debe usar solo [**legados de Python compatibles**](https://github.com/abhiTronix/vidgear#supported-python-legacies) y también [**pip**](https://pip.pypa.io/en/stable/installing/) ya instalado y configurado.

- **`OpenCV:`**VidGear debe requerir que los binarios habilitados para Python OpenCV (3.0+) estén instalados en su máquina para sus funciones principales. Para su instalación, puede seguir estos tutoriales en línea para [Linux](https://www.pyimagesearch.com/2018/05/28/ubuntu-18-04-how-to-install-opencv/) y [Raspberry Pi](https://www.pyimagesearch.com/2018/09/26/install-opencv-4-on-your-raspberry-pi/) , de lo contrario, instálelo a través de pip:

	```
	  pip3 install -U opencv-python        # o instala opencv-contrib-python de manera similar
	```

- **`FFmpeg:`** VidGear debe requerir FFmpeg por sus poderosas capacidades de compresión y codificación de video. 🌟Siga esta [**página wiki de FFmpeg**](https://github.com/abhiTronix/vidgear/wiki/FFmpeg-Installation) para su instalación.🌟

- **`picamera:`**Se requiere si usa módulos de cámara Raspberry Pi ( *como el módulo de cámara OmniVision OV5647* ) con su máquina Raspberry Pi. Puede instalarlo fácilmente a través de pip:

	```
	  pip3 instalar picamera
	```

	Además, asegúrese de habilitar la configuración específica de hardware de Raspberry Pi antes de usar esta biblioteca.

- **`mss:`**Se requiere para usar Screen Casting. Instalarlo a través de pip:

	```
	  pip3 instalar mss
	```

- **`pyzmq:`**Se requiere para transferir cuadros de video en vivo a través del *sistema de mensajería ZeroMQ a* través de la red. Instalarlo a través de pip:

	```
	  pip3 instalar pyzmq
	```

- **`pafy:`**Se requiere para las capacidades de transmisión directa de videos de YouTube. Ambas [`pafy`](https://github.com/mps-youtube/pafy)y las últimas bibliotecas [`youtube-dl`](https://github.com/ytdl-org/youtube-dl/)( *como backend de pafy* ) deben instalarse a través de pip de la siguiente manera:

	```
	  pip3 instalar pafy
	  pip3 install -U youtube-dl
	```

 

## Opciones de instalación disponibles:

### Opción 1: instalación de PyPI

> La mejor opción para instalar VidGear **rápidamente** .

```
  pip3 instalar vidgear
```

### Opción 2: Descarga del archivo de lanzamiento

> La mejor opción si desea un **archivo comprimido** .

Las versiones de VidGear están disponibles para descargar como paquetes en la [última versión](https://github.com/abhiTronix/vidgear/releases/latest) .

### Opción 3: clonar el repositorio

> La mejor opción para probar los **últimos parches ( \*quizás experimentales\* ), solicitudes de extracción** o **contribuir** al desarrollo.

Puede clonar la `testing`rama de este repositorio para el desarrollo y, por lo tanto, puede instalar de la siguiente manera:

```
git clone https://github.com/abhiTronix/vidgear.git
  cd vidgear
 prueba de pago git
 instalación de sudo pip3 .
```

## Documentación

La documentación completa para todas las clases y funciones de VidGear se puede encontrar en el siguiente enlace:

- [Documentación Wiki - Inglés](https://github.com/abhiTronix/vidgear/wiki)

## Pruebas

- **Requisitos previos: las** pruebas de VidGear requieren algunas *dependencias y datos adicionales* que se pueden descargar manualmente de la siguiente manera:

	- **Clonar e instalar [rama de pruebas](https://github.com/abhiTronix/vidgear#option-3-clone-the-repo)**

	- **Descargue algunas bibliotecas de Python adicionales:**

		```
		 pip3 instala seis
		 pip3 instalar pytest
		```

	- **Descargar el conjunto de datos de prueba:** para realizar pruebas, se requiere un *conjunto de datos de prueba* adicional, que se puede descargar *(al directorio temporal)* ejecutando el [*script bash de la*](https://github.com/abhiTronix/vidgear/blob/testing/scripts/bash/prepare_dataset.sh) siguiente manera:

		```
		 chmod + x scripts / bash / prepare_dataset.sh
		 .scripts / bash / prepare_dataset.sh                # para Windows, use `scripts / bash / prepare_dataset.sh`
		```

- **Ejecutar pruebas:** luego se pueden ejecutar varias pruebas de VidGear con `pytest`( *en la carpeta raíz de VidGear* ) como se muestra a continuación:

	```
	pytest -sv                                    # -sv para resultados detallados.
	```

## Legados de Python compatibles

- **Python 3+ solo son legados compatibles para instalar Vidgear v0.1.6 y superior.**
- **⚠️El soporte heredado de Python 2.7 [cayó en v0.1.6](https://github.com/abhiTronix/vidgear/issues/29) .**

## Licencia

Esta biblioteca tiene licencia bajo la licencia **[Apache 2.0](https://github.com/abhiTronix/vidgear/blob/master/LICENSE)** .

[👉 Repositorio de Python 🐍](https://pypi.org/project/vidgear/){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow"}
[👉 Repositorio de Github: Vidgear 🐍](https://github.com/abhiTronix/vidgear#--){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow"}
[👉 Aprender Python y Más Librerías 🐍](/python/){: .btn .btn--info .btn--large .align-center}

_____

**Fuente**: [Vidgear por Abhishek Thakur](https://github.com/abhiTronix/vidgear){:target="_blank" rel="nofollow"}
