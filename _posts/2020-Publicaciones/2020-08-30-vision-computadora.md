---

author: rosepac
bootstrap: true
comments: false
tags:
- Inteligencia Artificial
thumbnail: /assets/img/blog/vision-computadora.webp
feature-img: /assets/img/blog/vision-computadora.webp
title: '▷ ¿Qué es la visión por computadora? La inteligencia artificial conjunto a las imágenes y el vídeo'
description: >-
  Los sistemas de visión por computadora no solo son lo suficientemente buenos para ser útiles, sino que en algunos casos son más precisos que la visión humana.
excerpt: >-
  Los sistemas de visión por computadora no solo son lo suficientemente buenos para ser útiles, sino que en algunos casos son más precisos que la visión humana.
canonical_URL: https://ciberninjas.com/vision-computadora-agosto-2020/
permalink: /vision-computadora-agosto-2020/
date: 2020-08-30 11:10:32
published: true

---

Los sistemas de visión por computadora no solo son lo suficientemente buenos para ser útiles, sino que en algunos casos son más precisos que la visión humana.

La visión por computadora identifica y, a menudo, localiza objetos en imágenes y videos digitales. Dado que los organismos vivos procesan imágenes con su corteza visual, muchos investigadores han tomado la arquitectura de la corteza visual de los mamíferos como modelo para las redes neuronales diseñadas para realizar el reconocimiento de imágenes. La investigación biológica se remonta a la década de 1950.

El progreso en la visión por computadora durante los últimos 20 años ha sido absolutamente notable. Si bien aún no es perfecto, algunos sistemas de visión por computadora logran un 99% de precisión y otros funcionan correctamente en dispositivos móviles.

El gran avance en el campo de la red neuronal para la visión fue LeNet-5 de Yann LeCun de 1998 , una red neuronal convolucional de siete niveles para el reconocimiento de dígitos escritos a mano digitalizados en imágenes de 32x32 píxeles. Para analizar imágenes de mayor resolución, la red LeNet-5 debería ampliarse a más neuronas y más capas.

Los mejores modelos de clasificación de imágenes actuales pueden identificar diversos catálogos de objetos con resolución HD en color. Además de las redes neuronales profundas puras (DNN), las personas a veces usan modelos de visión híbridos, que combinan el aprendizaje profundo con algoritmos clásicos de aprendizaje automático que realizan subtareas específicas.

Otros problemas de la visión por computadora, es además de la clasificación básica de imágenes se han resuelto con aprendizaje profundo, incluida la clasificación de imágenes con localización, detección de objetos, segmentación de objetos, transferencia de estilo de imágenes, coloración de imágenes, reconstrucción de imágenes, superresolución de imágenes y síntesis de imágenes.

- [**¿Cómo funciona la visión artificial?**](#cómo-funciona-la-visión-artificial)
- [**Conjuntos de datos de entrenamiento de visión por computadora**](#conjuntos-de-datos-de-entrenamiento-de-visión-por-computadora)
- [**Aplicaciones de visión artificial**](#aplicaciones-de-visión-artificial)
- [**Frameworks y modelos de visión por computadora**](#frameworks-y-modelos-de-visión-por-computadora)

## **¿Cómo funciona la visión artificial?**

Los algoritmos de visión por computadora generalmente se basan en redes neuronales convolucionales o  CNN. Las CNN suelen utilizar capas convolucionales, agrupadas, ReLU, totalmente conectadas y de pérdida para simular una corteza visual.

La capa convolucional básicamente toma las integrales de muchas pequeñas regiones superpuestas. La capa de agrupación realiza una forma de muestreo descendente no lineal. Las capas ReLU aplican la función de activación no saturante f (x) = max (0, x).

En una capa completamente conectada, las neuronas tienen conexiones con todas las activaciones en la capa anterior. Una capa de pérdida calcula cómo el entrenamiento de la red penaliza la desviación entre las etiquetas predichas y verdaderas, utilizando una pérdida de entropía cruzada o Softmax para la clasificación.

## **Conjuntos de datos de entrenamiento de visión por computadora**

Hay muchos conjuntos de datos de imágenes públicas que son útiles para entrenar modelos de visión. El más simple y uno de los más antiguos es MNIST , que contiene 70.000 dígitos escritos a mano en 10 clases, 60K para entrenamiento y 10K para pruebas.

MNIST es un conjunto de datos fácil de modelar, incluso utilizando una computadora portátil sin hardware de aceleración. CIFAR-10 y Fashion-MNIST son conjuntos de datos similares de 10 clases. SVHN (números de casas de Street View) es un conjunto de 600K imágenes de números de casas del mundo real extraídas de Google Street View.

COCO es un conjunto de datos a mayor escala para la detección, segmentación y subtítulos de objetos, con 330.000 imágenes en 80 categorías de objetos. ImageNet contiene aproximadamente 1,5 millones de imágenes con cuadros delimitadores y etiquetas, que ilustran alrededor de 100.000 frases de WordNet . Open Images contiene aproximadamente nueve millones de URL a imágenes, con aproximadamente 5K etiquetas.

Google, Azure y AWS tienen sus propios modelos de visión entrenados con bases de datos de imágenes muy grandes. Puede usarlos tal cual o ejecutar el aprendizaje por transferencia para adaptar estos modelos a sus propios conjuntos de datos de imágenes; también puede realizar el aprendizaje por transferencia utilizando modelos basados ​​en ImageNet y Open Images.

Las ventajas de transferir el aprendizaje sobre la construcción de un modelo desde cero son que es mucho más rápido (horas en lugar de semanas) y que le brinda un modelo más preciso. Aún necesitará 1,000 imágenes por etiqueta para obtener los mejores resultados, aunque a veces puede salirse con la suya con tan solo 10 imágenes por etiqueta.

## **Aplicaciones de visión artificial**

Si bien la visión por computadora no es perfecta, a menudo es lo suficientemente buena como para ser práctica. Un buen ejemplo es la visión en los automóviles autónomos.

Waymo, anteriormente el proyecto de automóvil autónomo de Google, afirma haber realizado pruebas en siete millones de millas de vías públicas y la capacidad de navegar de manera segura en el tráfico diario. Ha habido al menos un accidente con una camioneta Waymo. No se creía que el software tuviera la culpa, según la policía.

Tesla tiene tres modelos de vehículos autónomos. En 2018, un SUV Tesla en modo de conducción autónoma se vio involucrado en un accidente fatal. El informe sobre el accidente decía que el conductor (que murió) tenía las manos fuera del volante a pesar de las múltiples advertencias de la consola, y que ni el conductor ni el software intentaron frenar para evitar chocar contra la barrera de hormigón. Desde entonces, el software se ha actualizado para requerir, en lugar de sugerir, que las manos del conductor estén en el volante.

Las tiendas de Amazon Go son tiendas de minoristas de autoservicio sin pago en las que el sistema de visión por computadora en la tienda detecta cuando los compradores recogen o devuelven artículos en existencia; Los compradores son identificados y cobrados a través de una aplicación para Android o iPhone. Cuando el software Amazon Go pierde un artículo, el comprador puede quedárselo gratis; cuando el software registra falsamente un artículo tomado, el comprador puede marcar el artículo y obtener un reembolso por ese cargo.

En el sector sanitario, existen aplicaciones de visión para clasificar determinadas características en diapositivas de patología, radiografías de tórax y otros sistemas de imágenes médicas. Algunos de estos han demostrado su valor en comparación con los profesionales humanos capacitados, algunos lo suficiente para la aprobación regulatoria. También hay un sistema en tiempo real para estimar la pérdida de sangre del paciente en un quirófano o sala de partos.

Existen aplicaciones de visión útiles para la agricultura (robots agrícolas, monitoreo de cultivos y suelos, y análisis predictivo), banca (detección de fraude, autenticación de documentos y depósitos remotos) y monitoreo industrial (pozos remotos, seguridad del sitio y actividad laboral).

También hay aplicaciones de la visión por computadora que son controvertidas o incluso obsoletas. Uno es el reconocimiento facial, que cuando lo usa el gobierno puede ser una invasión de la privacidad y que a menudo tiene un sesgo de entrenamiento que tiende a identificar erróneamente los rostros que no son blancos. Otra es la generación deepfake, que es más que un poco espeluznante cuando se usa para pornografía o la creación de engaños y otras imágenes fraudulentas.

## **Frameworks y modelos de visión por computadora**

La mayoría de los frameworks de aprendizaje profundo tienen un soporte sustancial para la visión por computadora, incluidos los frameworks basados ​​en Python TensorFlow (la opción líder para la producción), PyTorch (la opción líder para la investigación académica) y MXNet (el marco elegido por Amazon). OpenCV es una biblioteca especializada para visión por computadora que se inclina hacia aplicaciones de visión en tiempo real y aprovecha las instrucciones MMX y SSE cuando están disponibles; también tiene soporte para aceleración usando CUDA, OpenCL, OpenGL y Vulkan.

Amazon Rekognition es un servicio de análisis de imágenes y videos que puede identificar objetos, personas, texto, escenas y actividades, incluido el análisis facial y las etiquetas personalizadas. La API de Google Cloud Vision es un servicio de análisis de imágenes previamente capacitado que puede detectar objetos y rostros, leer texto impreso y escrito a mano y crear metadatos en su catálogo de imágenes. Google AutoML Vision te permite entrenar modelos de imágenes personalizados. Tanto las etiquetas personalizadas de Amazon Rekognition como Google AutoML Vision realizan el aprendizaje por transferencia.

La API de Microsoft Computer Vision puede identificar objetos de un catálogo de 10,000, con etiquetas en 25 idiomas. También devuelve cuadros delimitadores para objetos identificados. La API de Azure Face realiza detección de rostros que percibe rostros y atributos en una imagen, identificación de personas que coincide con un individuo en su repositorio privado de hasta un millón de personas y reconocimiento de emociones percibidas. Face API puede ejecutarse en la nube o en el borde en contenedores.

IBM Watson Visual Recognition puede clasificar imágenes de un modelo previamente entrenado, permitirle entrenar modelos de imágenes personalizados con aprendizaje de transferencia, realizar detección de objetos con recuento de objetos y entrenar para inspección visual. Watson Visual Recognition puede ejecutarse en la nube o en dispositivos iOS mediante Core ML.

El paquete de análisis de datos Matlab puede realizar el reconocimiento de imágenes mediante el aprendizaje automático y el aprendizaje profundo. Tiene una caja de herramientas de visión artificial opcional y se puede integrar con OpenCV.

Los modelos de visión por computadora han recorrido un largo camino desde LeNet-5, y en su mayoría son CNN. Los ejemplos incluyen AlexNet (2012), VGG16 / OxfordNet (2014), GoogLeNet / InceptionV1 (2014), Resnet50 (2015), InceptionV3 (2016) y MobileNet (2017-2018). La familia MobileNet de redes neuronales de visión se diseñó teniendo en cuenta los dispositivos móviles.

El marco de Apple Vision realiza detección de puntos de referencia de rostros y rostros, detección de texto, reconocimiento de códigos de barras, registro de imágenes y seguimiento de funciones generales. Vision también permite el uso de modelos Core ML personalizados para tareas como clasificación o detección de objetos. Funciona en iOS y macOS.

El SDK de Google Machine Learning Kit tiene capacidades similares y se ejecuta en dispositivos Android e iOS. El Kit de AA también es compatible con las API de lenguaje natural.

Como hemos visto, los sistemas de visión por computadora se han vuelto lo suficientemente buenos como para ser útiles y, en algunos casos, más precisos que la visión humana. Usando el aprendizaje por transferencia, la personalización de los modelos de visión se ha vuelto práctica para los simples mortales: la visión por computadora ya no es el dominio exclusivo de los investigadores con nivel de doctorado.

### **Relacionados** <!-- omit in toc -->
<!-- https://www.infoworld.com/article/3572553/what-is-computer-vision-ai-for-images-and-video.html#tk.rss_all -->

[▷ Python 3.9: Las mejoras y novedades](https://ciberninjas.com/python-39-2020/)

[▷ Cómo Aprender Python en 2020 🐍](https://ciberninjas.com/python/)

[🧠 ▷ Cómo Aprender Inteligencia Artificial](https://ciberninjas.com/inteligencia-artificial/)

[🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](https://ciberninjas.com/que-aprender-sobre-machine-learning-2020/)

[▷ CadQuery: Módulo Python similar a OpenSCAD](https://ciberninjas.com/biblioteca%20impresoras%203d/2020/01/28/impresiones-3d-modulo-python-cadquery.html)

[▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](https://ciberninjas.com/aprendizaje-automatico-cursos-ingles/)

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}