---
author_profile: true
title: "▷ ¿Qué diferencia existe entre Inteligencia Artificial, Aprendizaje Automático y Aprendizaje Profundo?"
description: "Conocer las diferencias que existen entre AI (artificial intelligence), ML (machine learning) y DL (deep learning)"
excerpt: "Conocer las diferencias que existen entre AI (artificial intelligence), ML (machine learning) y DL (deep learning)"
published: false
comments: true
date: 2020-02-14 18:33:12
last_modified_at: 
header:
  teaser: /assets/images/lenguajes-vs/ai-vs-ml-vs-dp.webp
canonical_URL: /porque-python-es-mejor-que-php/
classes: wide
categories:
- Inteligencia Artificial
- Aprendizaje Profundo
- Aprendizaje Automático
- Comparativas
tags:
- AI
- DL
- ML

---

![Conocer las diferencias que existen entre AI (artificial intelligence), ML (machine learning) y DL (deep learning)](/assets/images/lenguajes-vs/ai-vs-ml-vs-dp.webp "Conocer las diferencias que existen entre AI (artificial intelligence), ML (machine learning) y DL (deep learning)")

## ¿Qué es la inteligencia artificial?

La inteligencia artificial es el intento de acercarse a lograr generar capacidad cognitiva dentro una máquina. El punto de referencia para la inteligencia artificial es la inteligencia humana respecto al razonamiento, el habla y la visión. A día de hoy, aún se esta bastante lejos de alcanzar algo semejante; por ahora, se debe aún seguir esperando a las creaciones venideras de un futuro próximo.

La inteligencia artificial, posee tres niveles diferenciados:

- Débil: Se dice que la inteligencia artificial es estrecha cuando la máquina puede realizar una tarea específica mejor que un humano. La mayor parte de la investigación actual se centra en este campo en la actualidad.
- General: Se dice que la inteligencia artificial alcanza el estado general cuando puede realizar cualquier tarea intelectual con el mismo nivel de precisión que un humano
- Activa: Se dice que la inteligencia artificia está activa cuando puede vencer a los humanos en muchas tareas.

Los primeros sistemas de IA utilizaron patrones de coincidencia y sistemas expertos.

## ¿Qué es el aprendizaje automático?

El aprendizaje automático es la mejor herramienta que se conoce para analizar, comprender e identificar un patrón formado por datos. Una de las ideas principales detrás del aprendizaje automático es que los ordenadores pueden ser entrenados para automatizar tareas exhaustivas e imposibles para un ser humano.

El aprendizaje automático puede tomar decisiones con una mínima intervención humana. El aprendizaje automático utiliza los datos para alimentar un algoritmo capaz de comprender la relación entre la entrada y la salida. Una vez que la máquina termina de aprender, es capaz de predecir el valor final o nuevas clases de datos resultantes.

## ¿Qué es el aprendizaje profundo?

El aprendizaje profundo es un software que imita una red neuronal del cerebro humano. Es un subconjunto del aprendizaje automático y se le denomina aprendizaje profundo porque hace uso de redes neuronales profundas. La máquina usa diferentes capas para aprender de los datos, dentro de una arquitectura formada por numerosas capas apiladas unas encima de otras. La profundidad del modelo, se ve representado por el número de capas que utilice el modelo en cuestión.

El aprendizaje profundo vendría a ser similar, al arte humano pero generado por máquinas bajo la base y uso de la inteligencia artificial.

## Cómo han crecido estas ramas tecnológicas

![Análisis del crecimiento de las preguntas sobre AI, ML y DL en los últimos años dentro de Stackoverflow](/assets/images/blog/encuesta-crecimiento.webp "Análisis del crecimiento de las preguntas sobre AI, ML y DL en los últimos años dentro de Stackoverflow")

En la gráfica anterior se puede apreciar claramente el amplio crecimiento de interes, sobre todo en las ramas de ML y DL, en los dos años anteriores al 2018. Si analizamos los dos últimos años hasta la actualidad en la Encuesta anual de la propia web: Stackoverflow.

![Porcentaje de los puestos de trabajo entre las personas que han votado dentro de la encuesta de stackoverflow de 2019](/assets/images/blog/stack-machine-learning.webp "Porcentaje de los puestos de trabajo entre las personas que han votado dentro de la encuesta de stackoverflow de 2019")

![Salarios de los puestos de trabajo entre las personas que han votado dentro de la encuesta de stackoverflow de 2019](/assets/images/blog/stack-machine-learning-salarios.webp "Salarios de los puestos de trabajo entre las personas que han votado dentro de la encuesta de stackoverflow de 2019")

Podemos comprobar como la profesión de científico de datos es una de las profesiones que más crecimiento ha tenido; y poco a poco, además, se va convirtiendo en una de los puestos de trabajo mejores pagadas entre las diferentes profesiones digitales existentes.

## Como funcionan

A continuación, vamos a intentar hacernos una idea para conocer un poco más como funcionan estos nuevos campos tecnológicos.

## El proceso del aprendizaje automático

Imagina que estás destinado a construir un programa que reconozca objetos. Para entrenar el modelo, usará un "[clasificador](https://es.wikipedia.org/wiki/Clasificador_(matem%C3%A1ticas)){:target="_blank"}" Un clasificador usa las características de un objeto para intentar identificar la clase a la que pertenece.

<!-- https://www.guru99.com/machine-learning-vs-deep-learning.html#1 -->

En el ejemplo, el clasificador será entrenado para detectar si la imagen es un:

Bicicleta
Barco
Coche
Avión
Los cuatro objetos anteriores son la clase que el clasificador debe reconocer. Para construir un clasificador, necesita tener algunos datos como entrada y asignarle una etiqueta. El algoritmo tomará estos datos, encontrará un patrón y luego lo clasificará en la clase correspondiente.

Esta tarea se llama aprendizaje supervisado. En el aprendizaje supervisado, los datos de capacitación que usted alimenta al algoritmo incluyen una etiqueta.

El entrenamiento de un algoritmo requiere seguir algunos pasos estándar:

Recopilar los datos
Entrenar al clasificador
Hacer predicciones
El primer paso es necesario, elegir los datos correctos hará que el algoritmo tenga éxito o falle. Los datos que eliges para entrenar el modelo se llaman características. En el ejemplo del objeto, las características son los píxeles de las imágenes.

Cada imagen es una fila en los datos, mientras que cada píxel es una columna. Si su imagen tiene un tamaño de 28x28, el conjunto de datos contiene 784 columnas (28x28). En la imagen a continuación, cada imagen se ha transformado en un vector de características. La etiqueta le dice a la computadora qué objeto está en la imagen.



El objetivo es utilizar estos datos de entrenamiento para clasificar el tipo de objeto. El primer paso consiste en crear las columnas de características. Luego, el segundo paso consiste en elegir un algoritmo para entrenar el modelo. Cuando finalice el entrenamiento, el modelo predecirá qué imagen corresponde a qué objeto.

Después de eso, es fácil usar el modelo para predecir nuevas imágenes. Para cada nueva imagen que ingrese al modelo, la máquina predecirá la clase a la que pertenece. Por ejemplo, una imagen completamente nueva sin etiqueta está pasando por el modelo. Para un ser humano, es trivial visualizar la imagen como un automóvil. La máquina usa su conocimiento previo para predecir también que la imagen es un automóvil.

## El proceso del aprendizaje profundo


## El proceso de la inteligencia artificial
