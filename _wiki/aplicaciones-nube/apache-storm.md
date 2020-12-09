---

title: "Storm (Procesador de Eventos)"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Apache Storm es un Framework de cálculo distribuido y tolerante a fallas en tiempo real."
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Apache Storm es un Framework de cálculo distribuido y tolerante a fallas en tiempo real."
date: 2019-10-09 23:28:07
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
published: true
author: rosepac
bootstrap: true
layout: post
permalink: /wiki/apache-storm/
canonical_URL: https://ciberninjas.com/wiki/apache-storm/
feature-img: /assets/img/wiki/articulos/wiki-aplicacion-apache-storm.webp
img: /assets/img/wiki/articulos/wiki-aplicacion-apache-storm.webp

---

Apache Storm es un framework de cálculo de procesamiento de flujo distribuido escrito principalmente en el lenguaje de programación Clojure. Originalmente creado por Nathan Marz y el equipo de BackType, el proyecto fue de código abierto después de ser adquirido por Twitter.

Utiliza "spouts" y "bolts" creados a medida para definir las fuentes de información y las manipulaciones para permitir el procesamiento por lotes y distribuido de datos de transmisión. El lanzamiento inicial fue el 17 de septiembre de 2011.

Una aplicación Storm está diseñada como una "topología" en forma de un gráfico acíclico dirigido (DAG) con boquillas y tornillos que actúan como los vértices del gráfico. Los bordes del gráfico se denominan flujos y datos directos de un nodo a otro. En conjunto, la topología actúa como una tubería de transformación de datos.

En un nivel superficial, la estructura de topología general es similar a un trabajo de MapReduce , con la principal diferencia de que los datos se procesan en tiempo real en lugar de en lotes individuales. Además, las topologías de Storm se ejecutan indefinidamente hasta que se eliminan, mientras que un DAG de trabajo MapReduce finalmente debe finalizar.

Storm se convirtió en un proyecto de nivel superior de Apache en septiembre de 2014 y anteriormente estaba en incubación desde septiembre de 2013.

- [**Desarrollo de Storm**](#desarrollo-de-storm)
- [**Arquitectura de Apache Storm**](#arquitectura-de-apache-storm)
- [**Plataforma de Pares**](#plataforma-de-pares)
- [**Enlaces Externos de Storm**](#enlaces-externos-de-storm)

## **Desarrollo de Storm**

Apache Storm está desarrollado bajo la licencia de Apache , lo que lo pone a disposición de la mayoría de las empresas. Git se usa para el control de versiones y Atlassian JIRA para el seguimiento de problemas, bajo el programa Apache Incubator.

Su versión actual es la 2.1.0, lanzada el 6 de septiembre de 2019,

## **Arquitectura de Apache Storm**

El clúster de Apache Storm comprende los siguientes componentes críticos:

* **Nodos**: hay dos tipos de nodos: nodos maestros y nodos de trabajo. Un **Master Node** ejecuta un demonio **Nimbus** que asigna tareas a las máquinas y monitorea sus actuaciones. Por otro lado, un nodo de trabajo ejecuta el demonio llamado Supervisor, que asigna las tareas a otros nodos de trabajo y los opera según la necesidad. Como Storm no puede monitorear el estado y la salud del clúster, implementa ZooKeeper para resolver este problema que conecta a Nimbus con los Supervisores.
* **Componentes**: Storm tiene tres componentes críticos: **Su Topología**, **Corriente** y **Canal**. La topología es una red compuesta por la Corriente y el Canal. La Corriente es una tubería ilimitada de tuplas y el Canal es la fuente de los flujos de datos que convierte los datos en la tupla de flujos y los envía a los tornillos para ser procesados.

## **Plataforma de Pares**

Storm no es más que una de las docenas de motores de procesamiento de flujo. Para obtener una lista más completa, consulte Procesamiento de flujo . Twitter anunció Heron el 2 de junio de 2015, que es compatible a través de su API con Storm. Hay otros motores de transmisión de datos comparables, como Spark Streaming y Flink.

## **Enlaces Externos de Storm**

* [Página Web Oficial del Proyecto](https://kutt.it/apache-storm "Página web oficial del proyecto Apache Storm"){:target="_blank" rel="nofollow,noreferrer"}

**Desarrollador**: Backtype, Twitter
{: .notice--primary}

**Licencia**: [Apache 2.0](https://es.wikipedia.org/wiki/Apache_License "Licencia de Apache 2.0"){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--primary}

**Escrito en**: Clojure y Java
{: .notice--primary}

**Sitio Web**: [https://storm.apache.org](https://storm.apache.org "Página web oficial del proyecto Apache Storm"){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--primary}

**Categorías**: Aplicaciones Nube \ Computación Paralela \ Infraestructuras Nube
{: .notice--success}

> **INF.**: Esta obra contiene una traducción total derivada de [Storm - Procesador de Eventos](https://en.wikipedia.org/wiki/Storm_(event_processor)){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del 12 de Septiembre de 2019, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=Storm_(event_processor)&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}