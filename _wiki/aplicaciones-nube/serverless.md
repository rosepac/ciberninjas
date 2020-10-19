---

title: "Computación sin Servidor"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: La Computación sin Servidor es un modelo de ejecución de computación en la nube en el que el proveedor de la nube ejecuta el servidor."
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: La Computación sin Servidor es un modelo de ejecución de computación en la nube en el que el proveedor de la nube ejecuta el servidor."
date: 2020-08-18 14:28:07
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
published: true
author: rosepac
bootstrap: true
layout: post
permalink: /wiki/serverless/
canonical_URL: https://ciberninjas.com/wiki/serverless/
feature-img: /assets/img/wiki/articulos/wiki-computacion-sin-servidor.webp
img: /assets/img/wiki/articulos/wiki-computacion-sin-servidor.webp

---

La computación sin servidor es un modelo de ejecución de computación en la nube en el que el proveedor de la nube ejecuta el servidor y administra dinámicamente la asignación de recursos de la máquina.

El precio se basa en la cantidad real de recursos consumidos por una aplicación, en lugar de en unidades de capacidad compradas previamente.

Puede ser una forma de computación útil.

La computación sin servidor puede simplificar el proceso de implementación de código en producción. Las operaciones de escalado, planificación de capacidad y mantenimiento pueden estar ocultas al desarrollador u operador.

El código sin servidor se puede usar junto con el código implementado en estilos tradicionales, como microservicios . Alternativamente, las aplicaciones se pueden escribir para que no tengan servidores y no utilicen servidores aprovisionados.

Esto no debe confundirse con modelos informáticos o de redes que no requieren un servidor real para funcionar, como peer-to-peer (P2P).

- [**Tiempos de ejecución sin servidor**](#tiempos-de-ejecución-sin-servidor)
- [**Bases de datos sin servidor**](#bases-de-datos-sin-servidor)
- [**Las ventajas de la computación sin servidor**](#las-ventajas-de-la-computación-sin-servidor)
  - [**El Costo de la Computación sin Servidor**](#el-costo-de-la-computación-sin-servidor)
  - [**Elasticidad versus Escalabilidad**](#elasticidad-versus-escalabilidad)
  - [**La Productividad de la Computación sin Servidor**](#la-productividad-de-la-computación-sin-servidor)
- [**Las desventajas de la Computación sin Servidor**](#las-desventajas-de-la-computación-sin-servidor)
  - [**El rendimiento**](#el-rendimiento)
  - [**La limitación de recursos**](#la-limitación-de-recursos)
  - [**La necesidad de supervisión y depuración**](#la-necesidad-de-supervisión-y-depuración)
  - [**La seguridad**](#la-seguridad)
  - [**La privacidad**](#la-privacidad)
  - [**Estándares**](#estándares)
  - [**El bloqueo al vendedor**](#el-bloqueo-al-vendedor)

## **Tiempos de ejecución sin servidor**

La mayoría, pero no todos, los proveedores sin servidor ofrecen tiempos de ejecución de cómputo, también conocidos como plataformas de función como servicio (FaaS), que ejecutan la lógica de la aplicación pero no almacenan datos.

La primera plataforma de ejecución de código de "pago por uso" fue Zimki, lanzada en 2006, pero no tuvo éxito comercial.

En 2008, Google lanzó Google App Engine , que incluía facturación medida para aplicaciones que usaban un marco Python personalizado, pero no podían ejecutar código arbitrario.

PiCloud, lanzado en 2010, ofreció soporte FaaS para Python.

Kubeless y Fission son dos plataformas FaaS de código abierto que se ejecutan con Kubernetes.

AWS Lambda, presentado por Amazon en 2014, fue el primer proveedor de infraestructura de nube pública con una oferta informática abstracta sin servidor.

Es compatible con una serie de herramientas sin servidor de AWS adicionales, como AWS Serverless Application Model (AWS SAM), Amazon CloudWatch , y otras.

Google Cloud Platform ofrece Google Cloud Functions desde 2016.

IBM ofrece IBM Cloud Functions en el IBM Cloud público desde 2016.

Microsoft Azure ofrece Azure Functions, que se ofrecen tanto en la nube pública de Azure como en las instalaciones a través de Azure Stack. 

## **Bases de datos sin servidor**

En los últimos años han surgido varias bases de datos sin servidor . Estos sistemas extienden el modelo de ejecución sin servidor al RDBMS , eliminando la necesidad de aprovisionar o escalar hardware de base de datos virtual o físico.

Nutanix ofrece una solución llamada Era que convierte un RDBMS existente como Oracle , MariaDB , PostgreSQL o Microsoft SQL Server en un servicio sin servidor.

Amazon Aurora ofrece una versión sin servidor de sus bases de datos, basada en MySQL y PostgreSQL, que proporciona configuraciones de escalado automático bajo demanda.

Azure Data Lake es un servicio de análisis y almacenamiento de datos altamente escalable. El servicio está alojado en Azure , la nube pública de Microsoft.

Azure Data Lake Analytics proporciona una infraestructura distribuida que puede asignar o desasignar recursos de forma dinámica para que los clientes paguen solo por los servicios que usan.

Firebase, también propiedad de Google, incluye una base de datos jerárquica y está disponible a través de planes fijos y de pago por uso.

## **Las ventajas de la computación sin servidor**

LAs mayores ventajas de la computación sin servidor, son: La reducción de costos, la ganancia de elasticidad contra la posibilidad de escalar y el aumento de la productividad.

### **El Costo de la Computación sin Servidor**

La computación sin servidor puede ser más rentable que alquilar o comprar una cantidad fija de servidores, que generalmente implica períodos significativos de subutilización o tiempo de inactividad.

Incluso puede ser más rentable que el aprovisionamiento de un grupo de autoescalado , debido al bin-empaquetado más eficiente de los recursos de la máquina subyacente.

Esto se puede describir como computación de pago por uso o código básico, ya que se le cobra basándose únicamente en el tiempo y la memoria asignados para ejecutar su código; sin tarifas asociadas por tiempo de inactividad.

Los beneficios de costos inmediatos están relacionados con la falta de costos de sistemas operativos, que incluyen: licencias, instalación, dependencias, mantenimiento, soporte y parches.

### **Elasticidad versus Escalabilidad**

Una arquitectura sin servidor significa que los desarrolladores y operadores no necesitan perder tiempo configurando y ajustando políticas o sistemas de autoescalado; el proveedor de la nube es responsable de escalar la capacidad a la demanda.

Como dice Google: "desde el prototipo hasta la producción y la escala planetaria".

Dado que los sistemas nativos de la nube se escalan tanto hacia abajo como hacia arriba, estos sistemas se conocen como elásticos en lugar de escalables.

Los pequeños equipos de desarrolladores pueden ejecutar el código por sí mismos sin depender de equipos de ingenieros de infraestructura y soporte; más desarrolladores se están volviendo expertos en DevOps y las distinciones entre ser un desarrollador de software o un ingeniero de hardware se están difuminando.

### **La Productividad de la Computación sin Servidor**

Con la función como servicio , las unidades de código expuestas al mundo exterior son funciones simples impulsadas por eventos . Esto significa que, por lo general, el programador no tiene que preocuparse por el multiproceso o el manejo directo de las solicitudes HTTP en su código, lo que simplifica la tarea de desarrollo de software de back-end.

## **Las desventajas de la Computación sin Servidor**

Entre las posibles desventajas de la computación sin servidor se encuentran, un posible peor rendimiento, una limitación de recursos, la necesidad de supervisión y depuración.

Además como otros aspectos preocupantes podemos encontrar, la preocupación de la seguridad y la privacidad. Los estándares. O el posible bloqueo al vendedor.

### **El rendimiento**

El código sin servidor que se utiliza con poca frecuencia puede sufrir una mayor latencia de respuesta que el código que se ejecuta continuamente en un servidor dedicado, máquina virtual o contenedor.

Esto se debe a que, a diferencia del ajuste de escala automático, el proveedor de la nube normalmente "reduce" el código sin servidor por completo cuando no está en uso.

Esto significa que si el tiempo de ejecución (por ejemplo, el tiempo de ejecución de Java ) requiere una cantidad significativa de tiempo para iniciarse, creará una latencia adicional.

### **La limitación de recursos**

La computación sin servidor no es adecuada para algunas cargas de trabajo de computación, como la computación de alto rendimiento, debido a los límites de recursos impuestos por los proveedores de la nube y también porque probablemente sería más barato aprovisionar en masa la cantidad de servidores que se cree que se requieren en cualquier momento dado.

### **La necesidad de supervisión y depuración**

El diagnóstico de problemas de rendimiento o uso excesivo de recursos con código sin servidor puede ser más difícil que con el código de servidor tradicional, porque aunque las funciones completas se pueden cronometrar, normalmente no hay capacidad para profundizar en más detalles adjuntando perfiladores , depuradores o herramientas APM.

Además, el entorno en el que se ejecuta el código no suele ser de código abierto , por lo que sus características de rendimiento no se pueden replicar con precisión en un entorno local.

### **La seguridad**

La tecnología sin servidor a veces se considera erróneamente más segura que las arquitecturas tradicionales.

Si bien esto es cierto hasta cierto punto porque el proveedor de la nube se ocupa de las vulnerabilidades del sistema operativo, la superficie de ataque total es significativamente mayor, ya que hay muchos más componentes en la aplicación en comparación con las arquitecturas tradicionales y cada componente es un punto de entrada a la aplicación sin servidor.

Además, las soluciones de seguridad que solían tener los clientes para proteger sus cargas de trabajo en la nube se vuelven irrelevantes, ya que los clientes no pueden controlar e instalar nada en el punto final ni en el nivel de la red , como un sistema de detección / prevención de intrusiones (IDS / IPS). 

Esto se ve intensificado por las propiedades de monocultivo de toda la red de servidores (se puede aplicar una sola falla a nivel mundial).

Según Protego, la "solución para proteger las aplicaciones sin servidor es una asociación cercana entre los desarrolladores, DevOps y AppSec, también conocido como DevSecOps.

Encuentre el equilibrio donde los desarrolladores no poseen seguridad, pero tampoco están exentos de responsabilidad. Tome medidas para convertirlo en un problema de todos.

Cree equipos multifuncionales y trabaje para lograr una estrecha integración entre los especialistas en seguridad y los equipos de desarrollo.

Colabore para que su organización pueda resolver los riesgos de seguridad a la velocidad de la tecnología sin servidor ".

### **La privacidad**

Muchos entornos de funciones sin servidor se basan en entornos de nube pública patentados. Aquí, se deben considerar algunas implicaciones de privacidad, como los recursos compartidos y el acceso de empleados externos.

Sin embargo, la informática sin servidor también se puede realizar en un entorno de nube privada o incluso en las instalaciones, utilizando, por ejemplo, la plataforma Kubernetes.

Esto brinda a las empresas un control total sobre los mecanismos de privacidad, al igual que con el alojamiento en las configuraciones de servidor tradicionales.

### **Estándares**

La informática sin servidor está cubierta por la International Data Center Authority (IDCA) en su marco AE360.

Sin embargo, la parte relacionada con la portabilidad puede ser un problema al mover la lógica empresarial de una nube pública a otra para la que se creó la solución Docker.

Cloud Native Computing Foundation (CNCF) también está trabajando en el desarrollo de una especificación con Oracle.

### **El bloqueo al vendedor**

La informática sin servidor se proporciona como un servicio de terceros.

Las aplicaciones y el software que se ejecutan en el entorno sin servidor están bloqueados de forma predeterminada para un proveedor de nube específico.

Por lo tanto, sin servidor puede causar varios problemas durante la migración.

**Categorías**: Computación sin Servidor \ Computación en la Nube
{: .notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del 11 de Agosto de 2020, publicada por [sus editores](https://en.wikipedia.org/wiki/Serverless_computing){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}