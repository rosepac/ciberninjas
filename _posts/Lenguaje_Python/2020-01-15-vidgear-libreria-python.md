---
author_profile: false
layout: splash
title: '▷ Vidgear: Librería de Python para el procesamiento de vídeo 🐍'
description: "Librería de procesamiento de vídeo en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras"
excerpt: "Librería de procesamiento de vídeo en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras"
published: true
comments: false
date: 2020-05-20 19:10:12
classes: wide
last_modified_at: 
canonical_URL: /vidgear-libreria-python/
categories:
- Librería Python
tags:
- Python
header:
  teaser: /assets/images/blog/vidgear-libreria-python.webp
  overlay_image: /assets/images/blog/vidgear-libreria-python.webp
  overlay_filteR: 0.2
  image_description: Librería de procesamiento de vídeo en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras
  image_alt: Librería de procesamiento de vídeo en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras
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

![Vidgear, librería de procesamiento de vídeo en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras](/assets/images/blog/vidgear-libreria-python.webp "Vidgear, librería de procesamiento de vídeo en Python construida con Gears de subprocesos múltiples, cada uno con un conjunto único de características innovadoras")

VidGear es una poderosa biblioteca de procesamiento de video en Python construida con [**Gears de**](https://github.com/abhiTronix/vidgear#gears){:target="_blank" rel="nofollow noreferrer"} subprocesos múltiples, cada uno con un conjunto único de características innovadoras. Estas API proporcionan un contenedor fácil de usar, altamente extensible y multihilo alrededor de muchas bibliotecas subyacentes de última generación como *[OpenCV ➶](https://github.com/opencv/opencv){:target="_blank" rel="nofollow noreferrer"}, [FFmpeg ➶](https://www.ffmpeg.org/){:target="_blank" rel="nofollow noreferrer"}, [picamera ➶](https://github.com/waveform80/picamera){:target="_blank" rel="nofollow noreferrer"}, [pafy ➶](https://github.com/mps-youtube/pafy){:target="_blank" rel="nofollow noreferrer"}, [pyzmq ➶](https://github.com/zeromq/pyzmq){:target="_blank" rel="nofollow noreferrer"} y [python-mss ➶](https://github.com/BoboTiG/python-mss){:target="_blank" rel="nofollow noreferrer"}*.

El siguiente **diagrama de bloques funcional muestra** claramente el funcionamiento de la biblioteca VidGear:

[![Diagrama de bloques funcionales de @Vidgear](https://camo.githubusercontent.com/7eb66b31e45072cd99ee988690242b93388705db/68747470733a2f2f6162686974726f6e69782e6769746875622e696f2f696d672f766964676561722f766964676561725f66756e6374696f6e322d30312e737667)](https://camo.githubusercontent.com/7eb66b31e45072cd99ee988690242b93388705db/68747470733a2f2f6162686974726f6e69782e6769746875622e696f2f696d672f766964676561722f766964676561725f66756e6374696f6e322d30312e737667)

## **Qué es Vidgear?**

> *"VidGear es una biblioteca Python de procesamiento de video completa [ultrarrápida](https://github.com/abhiTronix/vidgear/wiki/FAQ-&-Troubleshooting#2-vidgear-is-ultrafast-but-how) , compacta, flexible y fácil de adaptar".

## **Qué hace VidGear?**

> *"VidGear puede leer, escribir, procesar, enviar y recibir cuadros de video desde varios dispositivos en tiempo real".*

## **Cuál es su propósito?**

> *"Construido con la simplicidad en mente, VidGear permite a los programadores y desarrolladores de software integrar y realizar fácilmente tareas complejas de procesamiento de video en sus aplicaciones existentes o nuevas, sin pasar por la documentación de varias bibliotecas subyacentes y usar solo unas pocas líneas de código. Beneficioso para ambos, si eres nuevo en la programación con lenguaje Python o ya eres un profesional ".*

Para obtener información más avanzada, consulte la [\*documentación de Wiki ➶\*](https://github.com/abhiTronix/vidgear/wiki) .

## Engranajes

> *VidGear está construido con varias API de subprocesos múltiples (también conocida como Gears), cada una con alguna función / mecanismo único.*

Cada una de estas API está diseñada exclusivamente para manejar / controlar diferentes transmisiones de video, transmisiones de red y codificadores de medios específicos del dispositivo. Estas API proporcionan un contenedor fácil de usar, altamente extensible y multihilo alrededor de varias bibliotecas subyacentes para explotar sus características y funciones directamente mientras proporcionan un manejo robusto de errores.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9630764103400456"
     data-ad-slot="3229974124"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Estos engranajes se pueden clasificar de la siguiente manera:

**A. Engranajes de VideoCapture:**

- [**CamGear: Apunta a**](https://github.com/abhiTronix/vidgear#camgear){:target="_blank" rel="nofollow noreferrer"} *varias cámaras IP-USB / Streams de red / YouTube-Video-URL.*
- [**PiGear: apunta a**](https://github.com/abhiTronix/vidgear#pigear){:target="_blank" rel="nofollow noreferrer"} *varios módulos de cámara Raspberry Pi.*
- [**ScreenGear:**](https://github.com/abhiTronix/vidgear#screengear){:target="_blank" rel="nofollow noreferrer"} *permite la* [**transmisión de**](https://github.com/abhiTronix/vidgear#screengear){:target="_blank" rel="nofollow noreferrer"} *pantalla ultrarrápida.*
- [**VideoGear:**](https://github.com/abhiTronix/vidgear#videogear){:target="_blank" rel="nofollow noreferrer"} *una API común con envoltura de estabilizador de video.*

**B. Equipo de VideoWriter:**

- [**WriteGear:**](https://github.com/abhiTronix/vidgear#writegear){:target="_blank" rel="nofollow noreferrer"} *maneja la codificación y compresión de video sin pérdida fácil.*

**C. Equipo de red:**

- [**NetGear: apunta a la**](https://github.com/abhiTronix/vidgear#netgear){:target="_blank" rel="nofollow noreferrer"} *transferencia de cuadros de video síncronos / asíncronos entre sistemas de interconexión a través de la red.*

## CamGear

> *CamGear puede capturar cuadros ultrarrápidos de una amplia gama de dispositivos / transmisiones, que incluye casi cualquier cámara IP / USB, formato de archivo de video multimedia ( [\*hasta 4k probado\*](https://github.com/abhiTronix/vidgear/blob/e0843720202b0921d1c26e2ce5b11fadefbec892/vidgear/tests/benchmark_tests/test_benchmark_playback.py#L65){:target="_blank" rel="nofollow noreferrer"} ), varios protocolos de transmisión de red como `http(s), rtp, rstp, rtmp, mms, etc.`, además de soporte para la transmisión en vivo de Gstreamer y YouTube URLs de video / livestreams.*

CamGear proporciona un contenedor multihilo flexible de alto nivel alrededor de la `OpenCV's` [clase VideoCapture](https://docs.opencv.org/master/d8/dfe/classcv_1_1VideoCapture.html#a57c0e81e83e60f36c83027dc2a188e80){:target="_blank" rel="nofollow noreferrer"} con acceso a casi todos sus parámetros disponibles y también emplea [`pafy`](https://github.com/mps-youtube/pafy){:target="_blank" rel="nofollow noreferrer"} API de Python para la transmisión en vivo de [YouTube](https://github.com/abhiTronix/vidgear/wiki/CamGear#2-camgear-api-with-live-youtube-piplineing-using-video-url){:target="_blank" rel="nofollow noreferrer"}.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9630764103400456"
     data-ad-slot="3229974124"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Además, CamGear se implementa exclusivamente en [**modo de cola**](https://github.com/abhiTronix/vidgear/wiki/Threaded-Queue-Mode){:target="_blank" rel="nofollow noreferrer"} enhebrada para un manejo de trama sincronizado, ultrarrápido y sin errores.

El siguiente diagrama de bloques funcional simplificado muestra el funcionamiento generalizado de la API de CamGear:

[![Diagrama de bloque funcional CamGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/CamGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/CamGear.png)

### Guía API de CamGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/CamGear#camgear-api){:target="_blank" rel="nofollow noreferrer"}

## VideoGear

> *VideoGear API proporciona un envoltorio interno especial alrededor de la clase exclusiva de* [*estabilizador de video de*](https://github.com/abhiTronix/vidgear/wiki/Stabilizer-Class){:target="_blank" rel="nofollow noreferrer"} *VidGear*.

Además, la API VideoGear puede proporcionar acceso interno a las API [CamGear](https://github.com/abhiTronix/vidgear#camgear){:target="_blank" rel="nofollow noreferrer"} y [PiGear](https://github.com/abhiTronix/vidgear#pigear){:target="_blank" rel="nofollow noreferrer"} separadas por un indicador especial. Por lo tanto, *esta API tiene el poder exclusivo para cualquier VideoStream entrante de cualquier fuente, ya sea en vivo o no, para acceder y estabilizarlo directamente con latencia mínima y requisitos de memoria.*

**A continuación se muestra una instantánea de un estabilizador de VideoGear en acción:**

[![VideoGear Stabilizer en acción!](https://github.com/abhiTronix/Imbakup/raw/master/Images/stabilizer.gif)](https://github.com/abhiTronix/Imbakup/raw/master/Images/stabilizer.gif)
*Video original cortesía de [@ SIGGRAPH2013](http://liushuaicheng.org/SIGGRAPH2013/database.html){:target="_blank" rel="nofollow noreferrer"}*

Código para generar el video estabilizado API VideoGear anterior ( *vea ejemplos de uso más detallados [aquí](https://github.com/abhiTronix/vidgear/wiki/Real-time-Video-Stabilization#usage){:target="_blank" rel="nofollow noreferrer"}* ):

```
# import required libraries
from vidgear.gears import VideoGear
import numpy as np
import cv2

# open any valid video stream with stabilization enabled(`stabilize = True`)
stream_stab = VideoGear(source = "test.mp4", stabilize = True).start()

# open same stream without stabilization for comparison
stream_org = VideoGear(source = "test.mp4").start()

# loop over
while True:

    # read stabilized frames
    frame_stab = stream_stab.read()

    # check for stabilized frame if Nonetype
    if frame_stab is None:
        break

    # read un-stabilized frame
    frame_org = stream_org.read()

    # concatenate both frames
    output_frame = np.concatenate((frame_org, frame_stab), axis=1)

    # put text over concatenated frame
    cv2.putText(
        output_frame, "Before", (10, output_frame.shape[0] - 10), cv2.FONT_HERSHEY_SIMPLEX,
        0.6, (0, 255, 0), 2,
    )
    cv2.putText(
        output_frame, "After", (output_frame.shape[1] // 2 + 10, output_frame.shape[0] - 10),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.6, (0, 255, 0), 2,
    )

    # Show output window
    cv2.imshow("Stabilized Frame", output_frame)

    # check for 'q' key if pressed
    key = cv2.waitKey(1) & 0xFF
    if key == ord("q"):
        break

# close output window
cv2.destroyAllWindows()

# safely close both video streams
stream_org.stop()
stream_stab.stop()
```

### VideoGear API Guide:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/VideoGear#videogear-api){:target="_blank" rel="nofollow noreferrer"}

## PiGear

> *PiGear es similar a CamGear, pero está hecho para admitir varios módulos de cámara Raspberry Pi: (como el [módulo de cámara OmniVision OV5647](https://github.com/techyian/MMALSharp/wiki/OmniVision-OV5647-Camera-Module){:target="_blank" rel="nofollow noreferrer"} y el [módulo de cámara ](https://github.com/techyian/MMALSharp/wiki/OmniVision-OV5647-Camera-Module){:target="_blank" rel="nofollow noreferrer"}[Sony IMX219](https://github.com/techyian/MMALSharp/wiki/Sony-IMX219-Camera-Module){:target="_blank" rel="nofollow noreferrer"}.*

PiGear proporciona una envoltura flexible de múltiples subprocesos alrededor de la biblioteca completa de Python [**picamera**](https://github.com/waveform80/picamera){:target="_blank" rel="nofollow noreferrer"} para interactuar con estos módulos correctamente, y también otorga la capacidad de explotar sus diversas características `brightness, saturation, sensor_mode, etc.`sin esfuerzo.

Lo mejor de todo es que la API de PiGear proporciona un excelente manejo de errores con características como un temporizador interno roscado que mantiene un seguimiento activo de cualquier subproceso congelado y maneja fallas de hardware / subprocesos congelados de manera robusta y, por lo tanto, saldrá de manera segura si se produce algún error.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9630764103400456"
     data-ad-slot="3229974124"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Entonces, si accidentalmente desconectó el cable del módulo de la cámara al ejecutar PiGear API en su secuencia de comandos, en lugar de entrar en posibles hilos de pánico / congelación del kernel, la API se cierra de manera segura para ahorrar recursos.

**El siguiente diagrama de bloques funcional simplificado muestra la API de PiGear:**

[![Diagrama de bloque funcional de PiGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/PiGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/PiGear.png)

### Guía de API de PiGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/PiGear#pigear-api){:target="_blank" rel="nofollow noreferrer"}

## ScreenGear

> *ScreenGear API actúa como Screen Recorder, que puede capturar fotogramas de su monitor en tiempo real, ya sea definiendo un área en la pantalla de la computadora o en pantalla completa a expensas de una latencia insignificante. También proporciona soporte aparentemente para capturar cuadros de múltiples monitores.*

ScreenGear proporciona un contenedor de subprocesos múltiples de alto nivel alrededor [**de la**](https://github.com/BoboTiG/python-mss){:target="_blank" rel="nofollow noreferrer"} API de la biblioteca python [**python-mss**](https://github.com/BoboTiG/python-mss){:target="_blank" rel="nofollow noreferrer"} y también admite una manipulación directa y flexible de parámetros internos.

**A continuación se muestra una instantánea de una API ScreenGear en acción:**

[![ScreenGear en acción!](https://github.com/abhiTronix/Imbakup/raw/master/Images/screengear.gif)](https://github.com/abhiTronix/Imbakup/raw/master/Images/screengear.gif)

Código para generar el resultado anterior:

```
# import required libraries
from vidgear.gears import PiGear
import cv2

# add various Picamera tweak parameters to dictionary
options = {"hflip": True, "exposure_mode": "auto", "iso": 800, "exposure_compensation": 15, "awb_mode": "horizon", "sensor_mode": 0}

# open pi video stream with defined parameters
stream = PiGear(resolution = (640, 480), framerate = 60, logging = True, **options).start() 

# loop over
while True:

    # read frames from stream
    frame = stream.read()

    # check for frame if Nonetype
    if frame is None:
        break


    # {do something with the frame here}


    # Show output window
    cv2.imshow("Output Frame", frame)

    # check for 'q' key if pressed
    key = cv2.waitKey(1) & 0xFF
    if key == ord("q"):
        break

# close output window
cv2.destroyAllWindows()

# safely close video stream
stream.stop()
```

### Guía de la API de ScreenGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/ScreenGear#screengear-api){:target="_blank" rel="nofollow noreferrer"}

## WriteGear

> *WriteGear maneja varias poderosas herramientas de escritura que nos brindan la libertad de hacer casi cualquier cosa imaginada con archivos multimedia.*

WriteGear API proporciona un contenedor completo, flexible y robusto en torno a [**FFmpeg**](https://www.ffmpeg.org/){:target="_blank" rel="nofollow noreferrer"}, un marco multimedia líder. Con WriteGear, podemos procesar cuadros de video en tiempo real en un formato comprimido sin pérdidas con cualquier especificación adecuada en solo unas pocas [líneas de códigos](https://github.com/abhiTronix/vidgear/wiki/Compression-Mode:-FFmpeg#1-writegear-bare-minimum-examplecompression-mode){:target="_blank" rel="nofollow noreferrer"} fáciles . Estas especificaciones incluyen la configuración de cualquier propiedad de video / audio, como `bitrate, codec, framerate, resolution, subtitles, etc.` para las tareas fáciles y complejas, como la multiplexación de video con audio en tiempo real (ver este [ejemplo wiki](https://github.com/abhiTronix/vidgear/wiki/Working-with-Audio#a-live-audio-input-to-writegear-class){:target="_blank" rel="nofollow noreferrer"} ). Lo mejor de todo, WriteGear le otorga la libertad de jugar con cualquier parámetro FFmpeg con su exclusiva función de Comando personalizado (consulte este [ejemplo wiki](https://github.com/abhiTronix/vidgear/wiki/Custom-FFmpeg-Commands-in-WriteGear-API#custom-ffmpeg-commands-in-writegear-api){:target="_blank" rel="nofollow noreferrer"} ), mientras maneja todos los errores de manera robusta.

Además de esto, WriteGear también proporciona acceso flexible a [**la API VideoWriter de OpenCV**](https://docs.opencv.org/master/dd/d9e/classcv_1_1VideoWriter.html#ad59c61d8881ba2b2da22cff5487465b5){:target="_blank" rel="nofollow noreferrer"} que proporciona algunas herramientas básicas para la codificación de cuadros de video pero sin compresión.

**WriteGear opera principalmente en los siguientes dos modos:**

- **Modo de compresión:** en este modo, WriteGear utiliza [**`FFmpeg's`**](https://www.ffmpeg.org/){:target="_blank" rel="nofollow noreferrer"} codificadores incorporados para codificar archivos multimedia sin pérdidas. Nos brinda la capacidad de explotar casi todos los parámetros disponibles disponibles dentro de FFmpeg, con tanta facilidad y flexibilidad y, al mismo tiempo, maneja de manera robusta todos los errores / advertencias de manera silenciosa. **Puede encontrar más información sobre este modo [aquí](https://github.com/abhiTronix/vidgear/wiki/Compression-Mode:-FFmpeg){:target="_blank" rel="nofollow noreferrer"}** .
- **Modo sin compresión:** en este modo, WriteGear utiliza la [**API de VideoWriter**](https://docs.opencv.org/3.4/d8/dfe/classcv_1_1VideoCapture.html){:target="_blank" rel="nofollow noreferrer"} incorporada de OpenCV básica . Similar al modo de compresión, WriteGear también admite la manipulación de todos los parámetros disponibles en la API VideoWriter de OpenCV. Pero este modo carece de la capacidad de manipular los parámetros de codificación y otras características importantes como la compresión de video, la codificación de audio, etc. **Puede obtener información sobre este modo [aquí](https://github.com/abhiTronix/vidgear/wiki/Non-Compression-Mode:-OpenCV){:target="_blank" rel="nofollow noreferrer"}** .

**El siguiente diagrama de bloques funcional muestra el funcionamiento generalizado de la API WriteGear:**

[![Diagrama de bloque funcional WriteGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/WriteGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/WriteGear.png)

### WriteGear API Guide:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/WriteGear#writegear-api){:target="_blank" rel="nofollow noreferrer"}

## NetGear

> *NetGear está diseñado exclusivamente para transferir cuadros de video de forma síncrona y asíncrona entre sistemas de interconexión a través de la red en tiempo real.*

NetGear implementa un contenedor de alto nivel alrededor de la biblioteca [**PyZmQ**](https://github.com/zeromq/pyzmq){:target="_blank" rel="nofollow noreferrer"} python que contiene enlaces python para [ZeroMQ](http://zeromq.org/){:target="_blank" rel="nofollow noreferrer"}, una biblioteca de mensajería distribuida asincrónica de alto rendimiento que tiene como objetivo ser utilizada en aplicaciones distribuidas o concurrentes. Proporciona una cola de mensajes, pero a diferencia del middleware orientado a mensajes, un sistema ZeroMQ puede ejecutarse sin un intermediario de mensajes dedicado.

NetGear proporciona un soporte perfecto para la transmisión bidireccional de datos entre el receptor (cliente) y el remitente (servidor) a través de patrones de mensajes síncronos bidireccionales como zmq.PAIR *(Patrón de par ZMQ)* y zmq.REQ / zmq.REP *(Patrón de solicitud / respuesta ZMQ)* .

NetGear también admite capacidades de compresión de codificación / decodificación de cuadros en tiempo real para optimizar el rendimiento mientras se envían los cuadros directamente a través de la red, codificando el cuadro antes de enviarlo y decodificándolo en el extremo del cliente automáticamente en tiempo real.

Por seguridad, NetGear implementa un fácil acceso a las capas de seguridad potentes, inteligentes y seguras de ZeroMQ, que permiten un cifrado fuerte de los datos y una autenticación irrompible entre el servidor y el cliente con la ayuda de certificados / claves personalizados y brinda privacidad y autenticación fáciles y estandarizadas para sistemas distribuidos a través de la red.

Lo mejor de todo es que NetGear puede manejar de manera robusta dispositivos de Servidores Múltiples a la vez, proporcionando así acceso a la Transmisión en vivo sin interrupciones de los dispositivos múltiples en una red al mismo tiempo.

**NetGear a partir de ahora admite sin problemas tres patrones de mensajería ZeroMQ:**

- [**`zmq.PAIR`**](https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/pair.html){:target="_blank" rel="nofollow noreferrer"} *(Patrón de par ZMQ)*
- [**`zmq.REQ/zmq.REP`**](https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/client_server.html){:target="_blank" rel="nofollow noreferrer"} *(Patrón de solicitud / respuesta de ZMQ)*
- [**`zmq.PUB/zmq.SUB`**](https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/pubsub.html){:target="_blank" rel="nofollow noreferrer"} *(Patrón de publicación / suscripción de ZMQ)*

**El siguiente diagrama de bloques funcional muestra el funcionamiento generalizado de la API de NetGear:**

[![Diagrama de bloque funcional de NetGear](https://github.com/abhiTronix/Imbakup/raw/master/Images/NetGear.png)](https://github.com/abhiTronix/Imbakup/raw/master/Images/NetGear.png)

### Guía de API de NetGear:

[**>>> Guía de uso**](https://github.com/abhiTronix/vidgear/wiki/NetGear#netgear-api){:target="_blank" rel="nofollow noreferrer"}

## Instalación

## Prerrequisitos:

Antes de instalar VidGear, debe verificar que se cumplan las siguientes dependencias:

- ⚠️Debe usar solo [**legados de Python compatibles**](https://github.com/abhiTronix/vidgear#supported-python-legacies){:target="_blank" rel="nofollow noreferrer"} y también [**pip**](https://pip.pypa.io/en/stable/installing/){:target="_blank" rel="nofollow noreferrer"} ya instalado y configurado.

- **`OpenCV:`**VidGear debe requerir que los binarios habilitados para Python OpenCV (3.0+) estén instalados en su máquina para sus funciones principales. Para su instalación, puede seguir estos tutoriales en línea para [Linux](https://www.pyimagesearch.com/2018/05/28/ubuntu-18-04-how-to-install-opencv/){:target="_blank" rel="nofollow noreferrer"} y [Raspberry Pi](https://www.pyimagesearch.com/2018/09/26/install-opencv-4-on-your-raspberry-pi/){:target="_blank" rel="nofollow noreferrer"}, de lo contrario, instálelo a través de pip:

  ```
    $ pip install -U opencv-python       # or install `opencv-contrib-python` similarly
  ```

- **`FFmpeg:`** VidGear debe requerir FFmpeg por sus poderosas capacidades de compresión y codificación de video. 🌟Siga esta [**página wiki de FFmpeg**](https://github.com/abhiTronix/vidgear/wiki/FFmpeg-Installation) para su instalación.🌟

- **`picamera:`**Se requiere si usa módulos de cámara Raspberry Pi ( *como el módulo de cámara OmniVision OV5647* ) con su máquina Raspberry Pi. Puede instalarlo fácilmente a través de pip:

	```
	  $ pip install picamera
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

[👉 Repositorio de Python 🐍](https://pypi.org/project/vidgear/){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[👉 Repositorio de Github: Vidgear 🐍](https://github.com/abhiTronix/vidgear#--){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[👉 Aprender Python y Más Librerías 🐍](/python/){: .btn .btn--info .btn--large .align-center}

**Fuente**: [Vidgear por Abhishek Thakur](https://github.com/abhiTronix/vidgear){:target="_blank" rel="nofollow,noreferrer"}

#### Índice <!-- omit in toc -->
- [**Qué es Vidgear?**](#qué-es-vidgear)
- [**Qué hace VidGear?**](#qué-hace-vidgear)
- [**Cuál es su propósito?**](#cuál-es-su-propósito)
- [Engranajes](#engranajes)
- [CamGear](#camgear)
  - [Guía API de CamGear:](#guía-api-de-camgear)
- [VideoGear](#videogear)
  - [VideoGear API Guide:](#videogear-api-guide)
- [PiGear](#pigear)
  - [Guía de API de PiGear:](#guía-de-api-de-pigear)
- [ScreenGear](#screengear)
  - [Guía de la API de ScreenGear:](#guía-de-la-api-de-screengear)
- [WriteGear](#writegear)
  - [WriteGear API Guide:](#writegear-api-guide)
- [NetGear](#netgear)
  - [Guía de API de NetGear:](#guía-de-api-de-netgear)
- [Instalación](#instalación)
- [Prerrequisitos:](#prerrequisitos)
- [Opciones de instalación disponibles:](#opciones-de-instalación-disponibles)
  - [Opción 1: instalación de PyPI](#opción-1-instalación-de-pypi)
  - [Opción 2: Descarga del archivo de lanzamiento](#opción-2-descarga-del-archivo-de-lanzamiento)
  - [Opción 3: clonar el repositorio](#opción-3-clonar-el-repositorio)
- [Documentación](#documentación)
- [Pruebas](#pruebas)
- [Legados de Python compatibles](#legados-de-python-compatibles)
- [Licencia](#licencia)
  - [Relacionados](#relacionados)

### Relacionados

[▷ Cómo Aprender Python en 2020 🐍](/python/)

[▷ Los Mejores Recursos para Aprender Python 🐍](/python-recursos/)

[▷ Guía de TensorFlow](/tensorflow-guia/)

[¿Por qué Python es mejor que PHP?](/porque-python-es-mejor-que-php/)

[▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python 🎓](/aprendizaje-automatico-cursos-ingles/)

[🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/)

La **Guía sobre la librería de Vidgear** fue creada el *15 de Enero de 2020* y su última edición fue realizada el *20 de Mayo de 2020*.
{: .notice--info}
