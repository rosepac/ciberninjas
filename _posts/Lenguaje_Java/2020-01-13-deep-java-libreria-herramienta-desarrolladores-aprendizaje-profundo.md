---
author: rosepac
title: "▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻 "
description: "Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación de proyectos de aprendizaje profundo"
excerpt: "Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación de proyectos de aprendizaje profundo"
published: true
comments: false
date: 2020-01-13 16:58:12
last_modified_at: 
canonical_URL: /deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/
categories:
- Aprendizaje Profundo
thumbnail: https://i.ibb.co/k0C7sKf/deepjavalibrary.png
thumbnail2: https://i.ibb.co/k0C7sKf/deepjavalibrary.png
---

En la conferencia de AWS: Invent 2019, Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la predicción con modelos de aprendizaje profundo.

![](https://i.ibb.co/k0C7sKf/deepjavalibrary.png)

Si bien Java sigue siendo el primer o segundo lenguaje de programación más popular desde finales de los 90, Python es el lenguaje más utilizado para el aprendizaje automático, con numerosos recursos y marcos de aprendizaje profundo.

DJL tiene como objetivo hacer que las herramientas de código abierto de aprendizaje profundo sean accesibles para los desarrolladores de Java, utilizando conceptos familiares y API intuitivas.

Los desarrolladores de Java pueden usar su IDE favorito con la ejecución de código basada en DJL o [Jupyter Notebook](https://jupyter.org/){:target="_blank" rel="nofollow,noreferrer"} para Java.

DJL es agnóstico de framework; abstrae las funciones de aprendizaje profundo de uso común, utilizando Java Native Access ([Java Native Apache](https://github.com/java-native-access/jna){:target="_blank" rel="nofollow,noreferrer"}) sobre los marcos de aprendizaje profundo existentes, y actualmente proporciona implementaciones para [Apache MXNet](https://mxnet.apache.org/){:target="_blank" rel="nofollow,noreferrer"} y [TensorFlow](https://www.tensorflow.org/){:target="_blank" rel="nofollow,noreferrer"}.

![](https://i.ibb.co/NVg9mBH/1deep-java-library-1578484330456.jpg "Uso de la librería de aprendizaje profundo Deep Java")
> **Fuente**: [INFOQ](https://www.infoq.com/news/2020/01/deep-java-library/){:target="_blank" rel="nofollow,noreferrer"}

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

Además, el repositorio [DJL GitHub](https://github.com/awslabs/djl){:target="_blank" rel="nofollow,noreferrer"} viene con conjuntos de datos populares, modelos pre-entrenados, ejemplos de código y tutoriales de Jupyter Notebook sobre casos de uso como clasificación de imágenes, segmentación de instancias y reconocimiento de acciones .  

Otra biblioteca de código abierto y de aprendizaje profundo para Java es Deep Learning for Java ([DL4J](https://deeplearning4j.org/){:target="_blank" rel="nofollow,noreferrer"}), que está escrita en Java y aprovecha [Apache Spark](https://spark.apache.org/){:target=""_blank} y [Hadoop](https://hadoop.apache.org/){:target="_blank" rel="nofollow,noreferrer"} para acelerar el entrenamiento.

DL4J es robusto, flexible, efectivo y un gran marco para desarrolladores de Java. Sin embargo, al  comparar DL4J con DJL y otros marcos de aprendizaje profundo, DL4J tiene la desventaja de que no puede beneficiarse de las crecientes bases de código Python de aprendizaje automático, que DJL puede, ya que es independiente del marco.

## Visión General

Deep Java Library (DJL) es una API Java de código abierto, de alto nivel y agnóstica para el aprendizaje profundo. DJL está diseñado para ser fácil de comenzar y fácil de usar para los desarrolladores de Java. DJL proporciona una experiencia de desarrollo Java nativa y funciona como cualquier otra biblioteca Java normal.

No tiene que ser experto en aprendizaje automático / aprendizaje profundo para comenzar. Puede usar su experiencia Java existente como una rampa de acceso para aprender y usar el aprendizaje automático y el aprendizaje profundo. Puede usar su IDE favorito para construir, entrenar e implementar sus modelos. DJL facilita la integración de estos modelos con sus aplicaciones Java.

Debido a que DJL es independiente del marco de aprendizaje profundo, no tiene que elegir entre marcos al crear sus proyectos. Puede cambiar marcos en cualquier momento. Para garantizar el mejor rendimiento, DJL también ofrece opciones automáticas de CPU / GPU basadas en la configuración del hardware.

[👉 Visitar Biblioteca Deep Java Librería 🤖](https://djl.ai/){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[👉 Repositorio de Github: Deep Java Librería 🤖](https://github.com/awslabs/djl#deep-java-library-djl){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[👉 Repositorio de Github: Deep Java Librería 🤖](https://github.com/awslabs/djl#getting-started){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

_____

**Fuentes**:
* [INFOQ](https://www.infoq.com/news/2020/01/deep-java-library/){:target="_blank" rel="nofollow,noreferrer"}

