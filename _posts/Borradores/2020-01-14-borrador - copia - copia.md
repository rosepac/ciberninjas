---
author_profile: true
title: "▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻 "
description: "Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación de proyectos de aprendizaje profundo"
excerpt: "Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación de proyectos de aprendizaje profundo"
published: false
comments: true
date: 2020-01-13 16:58:12
last_modified_at: 
canonical_URL: /deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/
categories:
- Aprendizaje Profundo
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

En la conferencia de AWS: Invent 2019, Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la predicción con modelos de aprendizaje profundo.

Si bien Java sigue siendo el primer o segundo lenguaje de programación más popular desde finales de los 90, Python es el lenguaje más utilizado para el aprendizaje automático, con numerosos recursos y marcos de aprendizaje profundo. DJL tiene como objetivo hacer que las herramientas de código abierto de aprendizaje profundo sean accesibles para los desarrolladores de Java, utilizando conceptos familiares y API intuitivas. Los desarrolladores de Java pueden usar su IDE favorito con la ejecución de código basada en DJL o [Jupyter Notebook](https://jupyter.org/){:target="_blank"} para Java.

DJL es agnóstico de framework; abstrae las funciones de aprendizaje profundo de uso común, utilizando Java Native Access ([Java Native Apache](https://github.com/java-native-access/jna){:target="_blank"}) sobre los marcos de aprendizaje profundo existentes, y actualmente proporciona implementaciones para [Apache MXNet](https://mxnet.apache.org/){:target="_blank"} y [TensorFlow](https://www.tensorflow.org/){:target="_blank"}.

![](https://i.ibb.co/NVg9mBH/1deep-java-library-1578484330456.jpg "Uso de la librería de aprendizaje profundo Deep Java")
> **Fuente**: [INFOQ](https://www.infoq.com/news/2020/01/deep-java-library/){:target="_blank"}
Las funciones comunes para entrenar un modelo se muestran en el pseudocódigo DJL de muestra a continuación:

```
// Create an empty model
Model model = Model.newInstance())
. . .
// Setup training with configurations
Trainer trainer = model.newTrainer(config))
. . .
// Use trainer to fit model with training and validation datasets
TrainingUtils.fit(trainer, epoch, trainingSet, validateSet);                   
// Save the model         
model.save(modelDir, "mlp"); 
```

Además, el repositorio [DJL GitHub](https://github.com/awslabs/djl){:target="_blank"} viene con conjuntos de datos populares, modelos pre-entrenados, ejemplos de código y tutoriales de Jupyter Notebook sobre casos de uso como clasificación de imágenes, segmentación de instancias y reconocimiento de acciones .  

Otra biblioteca de código abierto y de aprendizaje profundo para Java es Deep Learning for Java ([DL4J](https://deeplearning4j.org/){:target="_blank"}), que está escrita en Java y aprovecha [Apache Spark](https://spark.apache.org/){:target=""_blank} y [Hadoop](https://hadoop.apache.org/){:target="_blank"} para acelerar el entrenamiento. DL4J es robusto, flexible, efectivo y un gran marco para desarrolladores de Java. Sin embargo, al  comparar DL4J con DJL y otros marcos de aprendizaje profundo, DL4J tiene la desventaja de que no puede beneficiarse de las crecientes bases de código Python de aprendizaje automático, que DJL puede, ya que es independiente del marco.

Para obtener más información sobre DJL, consulte el sitio web de DJL , la especificación de API Java Doc y la página de inicio .

[👉 Visitar Biblioteca Deep Java Librería 🤖](https://djl.ai/){: .btn .btn--info .btn--large .align-center}{:target="_blank"}
[👉 Documentación Biblioteca Deep Java Librería 🤖](https://javadoc.djl.ai/){: .btn .btn--info .btn--large .align-center}{:target="_blank"}
[👉 Repositorio de Github: Deep Java Librería 🤖](https://github.com/awslabs/djl#getting-started){: .btn .btn--info .btn--large .align-center}{:target="_blank"}

_____

**Fuentes**:
* [INFOQ](https://www.infoq.com/news/2020/01/deep-java-library/){:target="_blank"}

