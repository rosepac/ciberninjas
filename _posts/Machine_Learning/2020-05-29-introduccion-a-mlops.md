---

author: rosepac
bootstrap: true
comments: false
tags:
- Aprendizaje Profundo
- Ciencia de Datos
- Mlops
thumbnail: /assets/img/blog/mlops-logo.webp
feature-img: /assets/img/blog/mlops-logo.webp
title: 'Introducción a MLOps'
description: >-
  MLOps (un compuesto de Machine Learning y "tecnología de la información OPERACIONES") es una nueva disciplina / enfoque / práctica para la colaboración y comunicación entre científicos de datos y tecnología de la información.
excerpt: >-
  MLOps (un compuesto de Machine Learning y "tecnología de la información OPERACIONES") es una nueva disciplina / enfoque / práctica para la colaboración y comunicación entre científicos de datos y tecnología de la información.
canonical_URL: https://ciberninjas.com/introduccion-a-mlops/
permalink: /introduccion-a-mlops/
date: 2020-06-11 10:32:32
last_modified_at: 
published: true

---

MLOps (un compuesto de aprendizaje automático y" operaciones de tecnología de la información ") es una nueva disciplina / enfoque / práctica para la colaboración y la comunicación entre los científicos de datos y los profesionales de la tecnología de la información (TI) al tiempo que automatiza y produce algoritmos de aprendizaje automático". - Nisha Talagala (2018)

El aprendizaje automático es un método de análisis de datos que automatiza la construcción de modelos analíticos. Es una rama de la inteligencia artificial basada en la idea de que los sistemas pueden aprender de los datos, identificar patrones y tomar decisiones con una mínima intervención humana.

Para integrar un sistema de aprendizaje automático en un entorno de producción, debe orquestar los pasos en su canal de aprendizaje automático y automatizar la ejecución del canal para la capacitación continua de sus modelos. Para experimentar con nuevas ideas y características, debe adoptar prácticas de CI / CD en las nuevas implementaciones de las canalizaciones.

## **La Consistencia del MLOps**

Para cualquier organización de ingeniería, no sería un gran problema ver los componentes de una versión de hace un año y volver a implementar la versión idéntica en producción. Además, la probabilidad de duplicar un modelo de aprendizaje automático de hace un año con la falta de herramientas adecuadas es más que probable. Esto significa tener la capacidad de rastrear todas las entradas: conjunto de datos, código, contenedor / tiempo de ejecución, parámetros de entrenamiento del modelo, solo por nombrar algunos.

No importa la razón, la consistencia es primordial. El camino hacia el aprendizaje automático puede verse como un enfoque paradigmático desde procesos ad-hoc hasta una forma de trabajo determinista.

## **Cooperativa**

Digamos, por ejemplo, que está trabajando en un proyecto de Python, y el trabajo que está haciendo es en una instancia EC2 aislada. Si es un miembro individual, puede salirse con la suya, pero cuando pone un modelo en producción o tiene un puñado de personas trabajando en un equipo, este plan es extremadamente frágil. La ausencia de un entorno colaborativo se vuelve especialmente problemático a medida que aumenta el número de modelos y la complejidad de los modelos.

En teoría, la colaboración comienza con tener un centro unificado donde se pueda rastrear toda la actividad, el linaje y el rendimiento del modelo. Eso no se limita a carreras de entrenamiento, cuadernos de Jupyter, búsquedas de hiperparámetros, visualizaciones, métricas estadísticas, conjuntos de datos, referencias de código y un repositorio de artefactos o repositorio de modelos, como se le llama a menudo. Agregar cosas como el control de acceso y el registro de auditoría también es un paso crítico.

Al final del día, la comprensión y la colaboración son esenciales para los equipos de aprendizaje automático.

## **Construcción de infraestructura**

A diferencia de la ingeniería de software, el aprendizaje automático en la práctica requiere una gran cantidad de energía computacional, almacenamiento y en la mayoría de los casos, grandes infraestructuras.

Cosas como GPU y TPU. Los equipos de aprendizaje automático necesitan una infraestructura que ofrezca cargas de trabajo fáciles de programar y escalar sin necesidad de años de experiencia en redes, Kubernetes, Docker, sistemas de almacenamiento.

Algunos ejemplos de automatización de infraestructura:

- **Multi-nube**: Una plataforma de aprendizaje automático debería ser fácil de entrenar un modelo en las instalaciones y desplegarlo sin problemas en la nube pública.
- **Escala de cargas de trabajo**: A medida que aumentan las demandas computacionales, la capacitación o los modelos de ajuste que abarcan múltiples instancias de cómputo se vuelven esenciales: volúmenes de almacenamiento compartido diseñados con un host distribuido de contenedores que se ejecutan en hardware heterogéneo.

Idealmente, los equipos de aprendizaje automático deberían operar con total autonomía y poseer toda la pila; de esa manera, son mucho más ágiles. También se necesitan las demandas de los científicos de datos para que la informática y el almacenamiento se muevan más rápido en la fase de capacitación de su trabajo.

Con MLOps, la fase de capacitación es independiente de la infraestructura y escalable y minimiza la complejidad para el científico de datos.

## **Intacto**

Ahora estamos viendo que hay muy poco en cuanto a la automatización en la producción de modelos de aprendizaje automático.

CI / CD es donde se fusiona el código de un desarrollador de software para activar una serie de pasos de automatización. Abstracciones como estas son críticas para la confiabilidad de las aplicaciones y la velocidad del desarrollador.

Lamentablemente, no hay equivalente a muchas de las abstracciones en el mundo del aprendizaje automático.

## **Clausura**

En última instancia, el tiempo que lleva pasar del concepto a la producción y entregar valor comercial es un obstáculo significativo en la industria. Es por eso que necesitamos buenos MLOps diseñados para estandarizar y optimizar el ciclo de vida del aprendizaje automático en la producción.

Como práctica, DevOps garantiza que el desarrollo del software y el ciclo de vida de las operaciones de TI sea eficiente, bien documentado, escalable y fácil de solucionar. MLOps incorpora estas prácticas para ofrecer aplicaciones y servicios de aprendizaje automático a alta velocidad.

Se está haciendo un trabajo interesante en el campo de MLOps. [Google Summer of Code](/google-summer-of-code/) para el proyecto [Jenkins](/jenkins/). El proyecto involucra la interacción entre un nodo [Jenkins](/jenkins/) y un Kernel de IPython, así como también construye un plugin de [Jenkins](/jenkins/) que permitirá la integración de los núcleos de portátiles políglotas existentes para admitir cálculos similares a los de los portátiles a medida que [Jenkins](/jenkins/) construye tareas.

El objetivo es permitir que los científicos de datos definan MLOps de grado de producción a medida que [Jenkins](/jenkins/) construye, integrando tareas de compilación típicas de [Jenkins](/jenkins/) con fragmentos de código de cuaderno como pasos de compilación.

El complemento admitirá una nueva tarea de compilación, para ejecutar código a través de un 'kernel' de lenguaje apropiado, tal como lo admiten actualmente los portátiles existentes como Zeppelin y Jupyter. Puedes leer más sobre eso aquí .

Continuous Delivery Foundation está trabajando para definir los controladores generales de DevOps que se aplican a MLOps, así como definir los controladores que son exclusivos de las soluciones de aprendizaje automático que representan los requisitos de MLOps.

Puede encontrar más información sobre [la hoja de ruta aquí](/hoja-ruta-mlops/).

> 🔥 Quizás te interese: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

![MLOps (un compuesto de Machine Learning y "tecnología de la información OPERACIONES") es una nueva disciplina / enfoque / práctica para la colaboración y comunicación entre científicos de datos y tecnología de la información.](/assets/img/blog/mlops-logo.webp "MLOps (un compuesto de Machine Learning y "tecnología de la información OPERACIONES") es una nueva disciplina / enfoque / práctica para la colaboración y comunicación entre científicos de datos y tecnología de la información.")

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}