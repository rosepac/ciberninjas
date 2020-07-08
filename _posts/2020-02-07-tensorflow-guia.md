---

author: rosepac
bootstrap: true
title: "▷ Guía de TensorFlow: La biblioteca de software de código abierto para el aprendizaje automático"
description: >-
  🤖 TensorFlow es una biblioteca de software de código abierto desarrollada por Google para el cálculo numérico con gráficos de flujo de datos. Esta guía TensorFlow cubre por qué la biblioteca es importante, cómo usarla y más.
excerpt: >-
  🤖 TensorFlow es una biblioteca de software de código abierto desarrollada por Google para el cálculo numérico con gráficos de flujo de datos. Esta guía TensorFlow cubre por qué la biblioteca es importante, cómo usarla y más.
published: true
comments: false
date: 2020-03-13 13:08:12
last_modified_at: 
thumbnail: /assets/img/frameworks-ai/tensorflow-ciberninjas.png
feature-img: /assets/img/frameworks-ai/tensorflow-ciberninjas.png
permalink: /tensorflow-guia/
canonical_URL: https://ciberninjas.com/tensorflow-guia/
tags:
- TensorFlow
categories:
- Aprendizaje Automático

---

TensorFlow fue originalmente un proyecto de investigación de aprendizaje profundo del equipo de Google Brain que desde entonces se ha convertido, en colaboración con 50 equipos más de Google, en una nueva biblioteca de código abierto implementada en todo el ecosistema de Google, incluido Google Assistant, Google Photos, Gmail , en su buscador y más.

![](/assets/img/frameworks-ai/tensorflow-ciberninjas.png "Logotipo de la biblioteca de código abierto Tensorflow para la Inteligencia Artificial")

Con TensorFlow en su lugar, Google puede aplicar el aprendizaje profundo en numerosas áreas utilizando tareas de percepción y comprensión del lenguaje.

Esta guía es una manera fácil de ponerse al día con TensorFlow. Actualizaremos esta guía periódicamente cuando se publiquen noticias y actualizaciones sobre TensorFlow.

> 🔥 Seguro también te interesa: [cómo aprender aprendizaje automático](/que-aprender-sobre-machine-learning-2020/) >> [diferencia entre AI, ML e DS](/diferencias-entre-ai-ml-dl/) >> [aprender inteligencia artificial](/11-aprendizajes-principiantes-inteligencia-artificial/) >> [guía de tensorflow](/tensorflow-guia/) >> [mejores tutoriales de pnl, aprendizaje automático y python](/aprendizaje-automatico-cursos-ingles/) >> [cómo aprender python](/python/) >> [aprender a programar](/programar/)
{: .notice--danger}

* [**¿Qué es TensorFlow?**](/tensorflow-guia/#qué-es-tensorflow)

Google tiene la infraestructura de aprendizaje automático más grande del mundo, y con TensorFlow, Google ahora tiene la capacidad de compartir eso. TensorFlow es una biblioteca de herramientas de código abierto que permite a los desarrolladores de software aplicar el aprendizaje profundo a sus productos.

* [**¿Por qué importa TensorFlow?**](/tensorflow-guia/#por-qué-importa-tensorflow)

La IA se ha vuelto crucial para la evolución de cómo los usuarios interactúan con los servicios y dispositivos. Tener un conjunto de bibliotecas tan poderoso disponible puede permitir a los desarrolladores incluir esta poderosa evolución de aprendizaje profundo en sus productos.

* [**¿A quién afecta TensorFlow?**](/tensorflow-guia/#a-quién-afecta-tensorflow)

TensorFlow tendrá un efecto duradero en los desarrolladores y usuarios. Dado que la biblioteca se convirtió en código abierto, está disponible para todos los desarrolladores, lo que significa que sus productos se pueden mejorar significativamente para brindar un mayor nivel de inteligencia y precisión a sus productos.

* [**¿Cuándo se lanzó TensorFlow?**](/tensorflow-guia/#cuándo-se-lanzó-tensorflow)

TensorFlow se lanzó originalmente el 9 de noviembre de 2015, y la versión estable se puso a disposición el 15 de febrero de 2017. Google ahora está implementando el alfa de TensorFlow 2.0, que, según Google, es más simple y más intuitivo de usar.

* [**¿Cómo empiezo a usar TensorFlow?**](/tensorflow-guia/#cómo-empiezo-a-usar-tensorflow)

Los desarrolladores pueden descargar el código fuente desde el repositorio TensorFlow GitHub. Los usuarios ya están viendo sus efectos en el ecosistema de Google.

**Saber Más**: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--primary}

## ¿Qué es TensorFlow?

Cuando tienes una foto de la Torre Eiffel, Google Photos puede identificar la imagen. Esto es posible gracias al aprendizaje profundo y desarrollos como TensorFlow. Antes de TensorFlow había una división entre los investigadores del aprendizaje automático y los que desarrollaban productos reales; esa división hizo difícil para los desarrolladores incluir el aprendizaje profundo en su software. Con TensorFlow, esa división se ha ido.

TensorFlow ofrece un conjunto de módulos (que proporcionan API de Python y C / C ++) que permiten construir y ejecutar cálculos de TensorFlow, que luego se expresan en gráficos de flujo de datos con estado. Estos gráficos hacen posible que aplicaciones como Google Photos sean increíblemente precisas para reconocer ubicaciones en imágenes basadas en puntos de referencia populares.

En 2011, Google desarrolló un producto llamado DistBelief que funcionó en el modelo de refuerzo positivo. La máquina recibiría una foto de un gato y se le preguntaría si era una foto de un gato. Si la máquina adivinó correctamente, se lo dijo. Una suposición incorrecta llevaría a un ajuste para poder reconocer mejor la imagen.

TensorFlow mejora este concepto al ordenar las capas de datos llamadas nodos. Bucear más profundo en las capas permitiría preguntas más complejas sobre una imagen. Por ejemplo, una pregunta de la primera capa podría simplemente requerir que la máquina reconozca una forma redonda. En capas más profundas, se le puede pedir a la máquina que reconozca el ojo de un gato. El proceso de flujo (desde la entrada, a través de las capas de datos, hasta la salida) se llama tensor ... de ahí el nombre TensorFlow.

Google está en proceso de implementar TensorFlow 2.0, que incluye las siguientes mejoras:

* Ayuda a que los componentes API se integren mejor con [tf.keras](https://www.tensorflow.org/api_docs/python/tf/keras){:target="_blank" rel="nofollow,noreferrer"} (una interfaz de alto nivel para redes neuronales que se ejecuta sobre múltiples backends).
* Incluye la versión 1.0 de [TensorFlow.js](https://www.tensorflow.org/js){:target="_blank" rel="nofollow,noreferrer"}, que permite el uso de modelos JavaScript estándar, puede volver a capacitar los modelos JS existentes y permite la construcción y capacitación de modelos directamente en JavaScript.
* Incluye [TensorFlow Federated](https://www.tensorflow.org/federated){:target="_blank" rel="nofollow,noreferrer"}, que es un framework de código abierto para experimentar con el aprendizaje automático (y otros cálculos) utilizando datos descentralizados.
* Incluye [TF Privacy](https://github.com/tensorflow/privacy){:target="_blank" rel="nofollow,noreferrer"}, una biblioteca para entrenar modelos de aprendizaje automático con un enfoque en la privacidad para los datos de entrenamiento.
* Presenta una [ejecución entusiasta](https://www.tensorflow.org/guide/eager){:target="_blank" rel="nofollow,noreferrer"}, que es un entorno de programación imperativo que evalúa las operaciones de inmediato, sin crear gráficos antes de devolver valores concretos.
* Utiliza [tf.function](https://www.tensorflow.org/alpha/tutorials/eager/tf_function){:target="_blank" rel="nofollow,noreferrer"}, que le permite transformar un subconjunto de sintaxis de Python en gráficos portátiles de alto rendimiento y mejora el rendimiento y la capacidad de implementación de una ejecución ansiosa.
* La experimentación avanzada será posible con nuevas extensiones de [Tensores irregulares](https://www.tensorflow.org/guide/ragged_tensors){:target="_blank" rel="nofollow,noreferrer"} (el equivalente TensorFlow de listas anidadas de longitud variable), [TensorFlow Probability](https://www.tensorflow.org/probability){:target="_blank" rel="nofollow,noreferrer"} (una biblioteca de Python construida en TensorFlow que facilita la combinación de modelos probabilísticos y aprendizaje profundo) y [Tensor2Tensor](https://github.com/tensorflow/tensor2tensor){:target="_blank" rel="nofollow,noreferrer"} (una biblioteca de modelos de aprendizaje profundo y conjuntos de datos).
* Una herramienta de conversión que actualiza automáticamente el código de TensorFlow 1.x Python para que pueda usarse con las API compatibles con TensorFlow 2.0 (y marca los casos en los que dicho código no se puede convertir automáticamente).

## ¿Por qué importa TensorFlow?

El aprendizaje automático es la salsa secreta para la innovación del mañana. El aprendizaje automático, también llamado aprendizaje profundo, se considera una clase de algoritmos que:

* Use muchas capas de unidades de procesamiento no lineales para la extracción y transformación de características; y
* se basan en el aprendizaje de múltiples niveles de características o representaciones de los datos; y
* Aprender múltiples niveles de representación correspondientes a diferentes niveles de abstracción.

Gracias al aprendizaje automático, el software y los dispositivos siguen siendo más inteligentes. Con los exigentes consumidores actuales y el auge de los grandes datos, esta evolución se ha convertido en equivalente al éxito de un desarrollador y su producto. Y debido a que TensorFlow se hizo de código abierto, significa que cualquiera puede hacer uso de este increíble salto que Google ha dado vida. De hecho, TensorFlow es el primer framework serio para el aprendizaje profundo disponible a través de la [licencia Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0){:target="_blank" rel="nofollow,noreferrer"}.

Con desarrolladores y compañías capaces de usar las bibliotecas TensorFlow, cada vez más aplicaciones y dispositivos se volverán más inteligentes, más rápidos y más confiables. TensorFlow podrá clasificar un gran número de imágenes a una velocidad sin precedentes.

Debido a que Google hizo de código abierto TensorFlow, las bibliotecas pueden ser a la vez mejorado y ampliado a otros idiomas, tales como [Java](https://www.java.com/){:target="_blank" rel="nofollow,noreferrer"}, [Lua](https://www.lua.org/){:target="_blank" rel="nofollow,noreferrer"}, y [R](https://www.r-project.org/about.html){:target="_blank" rel="nofollow,noreferrer"}. Este movimiento lleva el aprendizaje automático (algo que hasta ahora solo estaba disponible para los institutos de investigación) a todos los desarrolladores, para que puedan enseñar a sus sistemas y software a reconocer imágenes o traducir el habla.

## ¿A quién afecta TensorFlow?

TensorFlow no solo hace posible que los desarrolladores incluyan el botín de aprendizaje profundo en sus productos, sino que hace que los dispositivos y el software sean significativamente más inteligentes y fáciles de usar. En nuestro mundo moderno, móvil y conectado 24/7, eso significa que todos están afectados. Los diseñadores de software, desarrolladores, pequeñas empresas, empresas y consumidores se ven afectados por el resultado final del aprendizaje profundo. El hecho de que Google haya creado una biblioteca de software que mejora dramáticamente el aprendizaje profundo es una gran victoria para todos.

## ¿Cuándo se lanzó TensorFlow?

TensorFlow se lanzó originalmente el 9 de noviembre de 2015, y la versión estable se puso a disposición el 15 de febrero de 2017. [TensorFlow 2.0 alpha ya](https://www.tensorflow.org/alpha){:target="_blank" rel="nofollow,noreferrer"} está disponible, y la vista previa pública estará disponible próximamente. Puede obtener más información sobre el alfa TensorFlow 2.0 en la [guía](https://www.tensorflow.org/alpha/tutorials/quickstart/beginner){:target="_blank" rel="nofollow,noreferrer"} oficial [Comenzar con TensorFlow](https://www.tensorflow.org/alpha/tutorials/quickstart/beginner){:target="_blank" rel="nofollow,noreferrer"} .

Las [bibliotecas](https://github.com/jtoy/awesome-tensorflow#libraries){:target="_blank" rel="nofollow,noreferrer"} , las [API](https://www.tensorflow.org/api_docs/){:target="_blank" rel="nofollow,noreferrer"} y [las guías de desarrollo](https://www.tensorflow.org/get_started/get_started){:target="_blank" rel="nofollow,noreferrer"} están disponibles ahora, por lo que los desarrolladores pueden comenzar a incluir TensorFlow en sus productos. Los usuarios ya están viendo los resultados de TensorFlow en Google Photos, Gmail, Google Search, Google Assistant y más.

## Competidores de TensorFlow

TensorFlow no está solo en el campo de aprendizaje profundo; de hecho, hay varias otras empresas con frameworks de aprendizaje automático, incluidas las siguientes [bibliotecas de Python](/python/#bibliotecas-de-python) como [Theano](/python/#theano), [Keras](/python/#keras), [Pandas](/python/#pandas), etc. Entre algunas otras librerías aún no citadas como por ejemplo [Torch](https://github.com/torch/torch7){:target="_blank" rel="nofollow,noreferrer"}, [Caffe](https://github.com/BVLC/caffe){:target="_blank" rel="nofollow,noreferrer"}, [neon](https://github.com/NervanaSystems/neon){:target="_blank" rel="nofollow,noreferrer"} o [H2O.ai](https://www.h2o.ai/){:target="_blank" rel="nofollow,noreferrer"}

## ¿Cómo empiezo a usar TensorFlow?

Lo primero que debe hacer cualquier desarrollador es leer la [guía de inicio de TensorFlow](https://www.tensorflow.org/get_started/get_started){:target="_blank" rel="nofollow,noreferrer"}, que incluye un tutorial básico de TensorFlow. Si es nuevo en el aprendizaje automático, asegúrese de consultar las siguientes guías:

* [MNIST para principiantes de ML](https://www.tensorflow.org/get_started/mnist/beginners){:target="_blank" rel="nofollow,noreferrer"}
* [MNIST profundo para expertos](https://www.tensorflow.org/get_started/mnist/pros){:target="_blank" rel="nofollow,noreferrer"}

Los desarrolladores pueden [instalar TensorFlow](https://www.tensorflow.org/install/){:target="_blank" rel="nofollow,noreferrer"} en Linux, Mac y Windows (o incluso instalar desde la fuente), o consultar sus diversas herramientas desde la [página](https://github.com/tensorflow){:target="_blank" rel="nofollow,noreferrer"} oficial de [TensorFlow GitHub](https://github.com/tensorflow){:target="_blank" rel="nofollow,noreferrer"}.

Finalmente, los desarrolladores pueden aprovechar todas las guías de TensorFlow:

* [TensorFlow Mechanics 101](https://www.tensorflow.org/get_started/mnist/mechanics){:target="_blank" rel="nofollow,noreferrer"}
* [tf.contrib.learn Inicio rápido](https://www.tensorflow.org/get_started/tflearn){:target="_blank" rel="nofollow,noreferrer"}
* [Creación de funciones de entrada con tf.contrib.learn](https://www.tensorflow.org/get_started/input_fn){:target="_blank" rel="nofollow,noreferrer"}
* [TensorBoard: Visualizando el aprendizaje](https://www.tensorflow.org/get_started/summaries_and_tensorboard){:target="_blank" rel="nofollow,noreferrer"}
* [TensorBoard: visualización de incrustación](https://www.tensorflow.org/get_started/embedding_viz){:target="_blank" rel="nofollow,noreferrer"}
* [TensorBoard: visualización de gráficos](https://www.tensorflow.org/get_started/graph_viz){:target="_blank" rel="nofollow,noreferrer"}
* [Conceptos básicos de registro y monitoreo con tf.contrib.learn](https://www.tensorflow.org/get_started/monitors){:target="_blank" rel="nofollow,noreferrer"}

## Relacionados

* [Curso de Tensorflow con Anaconda](/tensorflow-con-jap-software/) 
* [Crea un Chatbot con Tensorflow](/chatbot-tensorflow-con-jap-software/) 
* [▷ 11 Fórmulas de comenzar el proceso de aprender programación de Inteligencia Artificial para principiantes](/11-aprendizajes-principiantes-inteligencia-artificial/)
* [▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

**Fuente**\: [Tech Republic](https://www.techrepublic.com/article/tensorflow-googles-open-source-software-library-for-machine-learning-the-smart-persons-guide/){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}