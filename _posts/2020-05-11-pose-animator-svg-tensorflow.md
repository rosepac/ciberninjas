---

author_profile: true
comments: false
classes: wide
tags:
- Animaciones
- SVG
- Tensorflow
categories:
- Librerías
header:
  teaser: /assets/images/blog/avatar-pose-imagen.webp
title: 'Pose Animator: Una herramienta de animación SVG en tiempo real que utiliza modelos TensorFlow.js'
description: >-
  Pose Animator toma una ilustración vectorial 2D y anima sus curvas que contienen en tiempo real en función del resultado de reconocimiento de PoseNet y FaceMesh. Toma prestada la idea de la animación basada en esqueletos de los gráficos de computadora y la aplica a los caracteres vectoriales.
excerpt: >-
  Pose Animator toma una ilustración vectorial 2D y anima sus curvas que contienen en tiempo real en función del resultado de reconocimiento de PoseNet y FaceMesh. Toma prestada la idea de la animación basada en esqueletos de los gráficos de computadora y la aplica a los caracteres vectoriales.
canonical_URL: https://ciberninjas.com/pose-animator-svg-tensorflow/
permalink: /pose-animator-svg-tensorflow/
date: 2020-05-11 10:32:32
last_modified_at: 
published: true

---

![Pose Animator: Una herramienta de animación SVG en tiempo real que utiliza modelos TensorFlow.js](/assets/images/blog/avatar-pose-1.webp "Pose Animator: Una herramienta de animación SVG en tiempo real que utiliza modelos TensorFlow.js")

Pose Animator es una librería capaz de tomar una ilustración vectorial en 2D y animar las líneas de sus curvas en tiempo real en función del resultado de reconocimiento del reconocimiento realizado por las librerías PoseNet y FaceMesh; se ha tomado prestada la idea de las animaciones basadas en esqueletos creadas mediante gráficos a través de ordenador.

🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/) >> [mejores regalos 2 - 🎁](/prime-day-amazon/)
{: .notice--danger}

En la animación de esqueletos, un personaje se representa a través de dos partes: Una superficie es utilizada para dibujar el personaje y basándose en el conjunto de la jerarquía de los huesos conectados, esa idea es utilizada para poder animar la superficie.

Mediante Pose Animator, la superficie está definida por las rutas de vectores 2D en los archivos SVG de entrada. Para la estructura ósea, Pose Animator proporciona una representación de plataforma predefinida (jerarquía ósea), diseñada en base a los puntos clave de PoseNet y FaceMesh.

La postura inicial de esta estructura ósea se especifica en el archivo SVG de entrada, junto con la ilustración del personaje, mientras que las posiciones óseas en tiempo real se actualizan por el resultado de reconocimiento de los modelos ML.

## Demostraciones

### Demostración 1: [alimentación de la cámara](https://pose-animator-demo.firebaseapp.com/camera.html){:target="_blank" rel="nofollow"}

La demostración de la cámara anima un avatar 2D en tiempo real desde una transmisión de video de la cámara web.

### Demostración 2: [imagen estática](https://pose-animator-demo.firebaseapp.com/static_image.html){:target="_blank" rel="nofollow"}

La demostración de imagen estática muestra el avatar posicionado a partir de una sola imagen.

## Crea y prueba

Instale dependencias y prepare el directorio de compilación:

```
yarn
```

Para ver los archivos en busca de cambios e iniciar un servidor de desarrollo:

```
yarn watch
```

## Soporte de la plataforma

Las demostraciones son compatibles con Desktop Chrome y iOS Safari; también debería ejecutarse en Chrome en Android y potencialmente en más navegadores móviles Android, aunque todavía no se ha probado el soporte.

## Anima tu propio diseño

1. Descargue el [esqueleto SVG de muestra](https://github.com/yemount/pose-animator/blob/master/resources/samples/skeleton.svg){:target="_blank" rel="nofollow"}.

2. Cree un nuevo archivo en el editor de gráficos vectoriales de su elección. Copie el grupo llamado 'esqueleto' del archivo anterior en su archivo de trabajo. Nota:

	- No agregue, elimine ni cambie el nombre de las uniones (círculos) en este grupo. Pose Animator se basa en estos caminos nombrados para leer la posición inicial del esqueleto. La falta de articulaciones provocará errores.
	- Sin embargo, puede mover las articulaciones para incrustarlas en su ilustración. Ver paso 4.

3. Cree un nuevo grupo y asígnele el nombre 'ilustración', junto al grupo 'esqueleto'. Este es el grupo donde puede poner todos los caminos para su ilustración.

	- Acoplar todos los subgrupos para que 'ilustración' solo contenga elementos de ruta.
	- Las rutas compuestas no son compatibles en este momento.
	- La estructura del archivo de trabajo debería verse así:

	```
	    [Layer 1]
	    |---- skeleton
	    |---- illustration
	          |---- path 1
	          |---- path 2
	          |---- path 3
	```

4. Incruste el esqueleto de muestra en el grupo 'esqueleto' en su ilustración moviendo las articulaciones.

5. Exporte el archivo como un archivo SVG.

6. Abra la [demo de la cámara Pose Animator](https://pose-animator-demo.firebaseapp.com/camera.html){:target="_blank" rel="nofollow"}. Una vez que todo se carga, suelte su archivo SVG en la pestaña del navegador. Deberías poder verlo cobrar vida: D

🔥 Seguro también te interesa: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}
