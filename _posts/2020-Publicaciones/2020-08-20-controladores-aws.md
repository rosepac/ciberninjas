---

author: rosepac
bootstrap: true
comments: false
tags:
- Almacenamiento Nube
- Kubernetes
- AWS
thumbnail: /assets/img/blog/20-aws-kubernetes.webp
feature-img: /assets/img/blog/20-aws-kubernetes.webp
title: '▷ Controladores de Amazon Web Services desde el contenedor de Kubernetes (ACK)'
description: >-
  Los controladores de AWS para Kubernetes (ACK) es una nueva herramienta que le permite administrar directamente los servicios de AWS desde Kubernetes.
excerpt: >-
  Los controladores de AWS para Kubernetes (ACK) es una nueva herramienta que le permite administrar directamente los servicios de AWS desde Kubernetes.
canonical_URL: https://ciberninjas.com/aws-controladores-kubernetes/
permalink: /aws-controladores-kubernetes/
date: 2020-08-20 09:05:12
published: true

---

Los controladores de AWS para Kubernetes (ACK) son una nueva herramienta que permite administrar directamente los servicios de AWS desde Kubernetes. ACK simplifica la creación de aplicaciones de Kubernetes escalables y de alta disponibilidad que utilizan los servicios de Amazon Web Services.

Hoy, ACK está disponible como una vista previa para los desarrolladores en GitHub.

En esta publicación, vamos a dar una breve introducción a la historia del proyecto Aws Controllers for Kubernetes, le mostraremos cómo funciona ACK y cómo puede comenzar a usar ACK.

## **¿Cómo empezo el proyecto de ACK?**

A finales de 2018, Chris Hein presentó AWS Service Operator como un proyecto personal experimental. Revisamos los comentarios de la comunidad y las partes interesadas internas y decidimos relanzarlo como un proyecto de código abierto de primer nivel.

En este proceso, cambiamos el nombre del proyecto a AWS Controllers for Kubernetes (ACK). Los principios cambios que se presentaron fueron:

- ACK es un proyecto impulsado por la comunidad, basado en un modelo de gobernanza que define roles y responsabilidades.
- ACK está optimizado para uso en producción con una cobertura de prueba completa que incluye conjuntos de pruebas de rendimiento y escalabilidad.
- ACK se esfuerza por ser la única base de código que expone los servicios de AWS a través de un operador de Kubernetes.

Durante el año pasado, el proyecto ha evolucionado significativamente el diseño del proyecto inicial, continuando con la discusión entre las partes interesadas internas y se revisaron los proyectos relacionados. Con un reconocimiento especial en este contexto al proyecto Crossplane, que hace un trabajo increíble para los casos de uso en la nube y se convirtió merecidamente en un proyecto de CNCF mientras tanto.

El nuevo proyecto ACK continúa el espíritu del AWS Service Operator original, pero con algunas actualizaciones:

- Los recursos de la nube de AWS se administran directamente a través de las API de AWS en lugar de CloudFormation. Esto permite que Kubernetes sea la única "fuente de la verdad" para un estado deseado de recursos.
- El código para los controladores y las definiciones de recursos personalizados se genera automáticamente desde el AWS Go SDK, con la edición y aprobación humana. Esto nos permite respaldar más servicios con menos trabajo manual y mantener el proyecto actualizado con las últimas innovaciones.
- Este es un proyecto oficial creado y mantenido por el equipo de AWS Kubernetes. Planeamos seguir invirtiendo en este proyecto junto con nuestros colegas de AWS.

## **¿Cómo funciona ACK?**

El objetivo de ACK es proporcionar una interfaz de Kubernetes coherente para AWS, independientemente de la API de servicio de AWS. Un ejemplo de esto es garantizar que los nombres de campo y los identificadores estén normalizados y que las etiquetas se manejen de la misma manera en todos los recursos de AWS.

![](/assets/img/blog/amazon-aks-1.webp)

Como se muestra arriba, desde un nivel alto, el flujo de trabajo ACK es el siguiente:

1. El equipo del proyecto, genera y mantiene una colección de artefactos (binarios, imágenes de contenedores, gráficos de Helm, etc.). Estos artefactos se derivan automáticamente de las API de servicios de AWS y representan la lógica empresarial de cómo administrar los recursos de AWS desde Kubernetes.
2. Como administrador de un clúster, selecciona uno o más controladores ACK que desea instalar y configurar para un clúster del que es responsable.
3. Como desarrollador de aplicaciones, crea recursos personalizados (Kubernetes) que representan los recursos de AWS.
4. El controlador ACK respectivo (instalado en el paso 2) administra dichos recursos personalizados y con él los recursos AWS subyacentes. Según el recurso personalizado definido en el paso 3., el controlador crea, actualiza o elimina los recursos de AWS subyacentes mediante las API de AWS.

Echemos ahora un vistazo más de cerca al flujo de trabajo, usando un ejemplo concreto.

## **1. Generación de artefactos**

La generación de artefactos crea los componentes de código necesarios que le permiten administrar los servicios de AWS mediante Kubernetes. Adoptamos un enfoque de varias fases, lo que produjo tiempos de ejecución híbridos personalizados + controlador:

- Primero, consumimos información del modelo de una fuente canónica de la verdad sobre los servicios de AWS. Nos decidimos por la fuente de la verdad como los archivos modelo del aws/aws-sdk-gorepositorio. Los SDK de AWS se actualizan periódicamente con todos los cambios de API, por lo que esta es una fuente de información precisa y sigue de cerca la disponibilidad de la API del servicio. En esta fase, generamos archivos que contienen código que expone los tipos Go para objetos e interfaces que se encuentran allí.
- Después de generar las definiciones de tipo de API de Kubernetes para los recursos de nivel superior expuestos por la API de AWS, necesitamos generar las implementaciones de interfaz que permitan que esos recursos de nivel superior y las definiciones de tipo sean utilizados por el paquete de tiempo de ejecución de Kubernetes.
- A continuación, generamos los archivos de configuración de definición de recursos personalizados (CRD), uno para cada recurso de nivel superior identificado en los pasos anteriores. Luego, generamos la implementación del controlador ACK para el servicio de destino. Junto con estas implementaciones del controlador en Go, esta pasos también da salida a un conjunto de manifiestos Kubernetes para el Deployment y la ClusterRoleBinding de la Role para el siguiente paso.
- Finalmente, generamos los manifiestos de Kubernetes para un Kubernetes Rolepara los Kubernetes que Deploymentejecutan los respectivos controladores de servicio ACK. Siguiendo el principio de privilegios mínimos, este Roledebe estar equipado con los permisos exactos para leer y escribir recursos personalizados del Kindque administra dicho controlador de servicio.

Los artefactos anteriores (código Go, imágenes de contenedor, manifiestos de Kubernetes para CRD, roles, implementaciones, etc.) representan la lógica empresarial de cómo administrar los recursos de AWS desde Kubernetes y son responsabilidad de los equipos de servicio de AWS crear y mantener junto con la entrada. de la comunidad.

## **2. Instalación de controladores y recursos personalizados**

Para utilizar ACK en un clúster, instale los controladores de servicio de AWS deseados, teniendo en cuenta que:

- Usted establece los permisos respectivos de Control de acceso basado en roles ( RBAC ) de Kubernetes para los recursos personalizados de ACK. Tenga en cuenta que cada controlador de servicio ACK se ejecuta en su propio pod y puede y debe hacer cumplir los controles de IAM existentes, incluidos los límites de permisos o las políticas de control de servicio para definir quién tiene acceso a qué recursos, definiéndolos de manera transitiva a través de RBAC.
- Asocia un ID de cuenta de AWS a un espacio de nombres de Kubernetes. En consecuencia, eso significa que cada recurso personalizado de ACK debe tener un espacio de nombres (no recursos personalizados de todo el clúster).

Según el modelo de responsabilidad compartida de AWS , en el contexto de la administración del clúster, usted es responsable de actualizar periódicamente los controladores de servicio ACK y de aplicar los parches de seguridad a medida que estén disponibles.

## **3. Inicio de recursos de AWS desde Kubernetes**

Como desarrollador de aplicaciones, crea un recurso personalizado con espacio de nombres en uno de sus clústeres habilitados para ACK. Por ejemplo, digamos que desea que ACK cree un repositorio de Amazon Elastic Container Registry (ECR), definiría y luego aplicaría algo como:

{% highlight js %}
apiVersion: "ecr.services.k8s.aws/v1alpha1"
kind: Repository
metadata:
    name: "my-ecr-repo"
spec:
    repositoryName: "encrypted-repo-managed-by-ack"
    encryptionConfiguration:
        encryptionType: AES256
    tags:
    - key: "is-encrypted"
      value: "true"
{% endhighlight %}

## **4. Gestión de recursos de AWS desde Kubernetes**

Los controladores de servicio ACK instalados por los administradores del clúster pueden crear, actualizar o eliminar recursos de AWS, según la intención encontrada en el recurso personalizado definido en el paso anterior, por los desarrolladores.

Esto significa que en un clúster de destino habilitado para ACK, se creará el recurso de AWS respectivo (en nuestro caso de ejemplo, el repositorio de ECR), y usted tendrá acceso a él, una vez que aplique el recurso personalizado.

Centrémonos un poco más en la creación y administración de recursos de AWS desde Kubernetes, ya que así es como la mayoría de los usuarios interactuarán con ACK. En nuestro ejemplo, crearemos un bucket de S3 a partir de nuestro clúster.

## **¿Cómo implementar todo esto?**

Si deseas un tutorial más concreto del paso a paso y funcionamiento de ACK, puedes [visital el blog de Amazon](https://aws.amazon.com/es/blogs/containers/aws-controllers-for-kubernetes-ack/){:target="_blank" rel="nofollow,noreferrer"}.
<!-- https://alexene.dev/2020/08/17/webassembly-without-the-browser-part-1.html , https://news.ycombinator.com/item?id=24180303 -->

### **Relacionados** <!-- omit in toc -->

[▷ ¿Qué es Kubernetes?: Aprendiendo desde cero](https://ciberninjas.com/qu%C3%A9-es-kubernetes/)

[‍▷ Guía de Contenedores y Entornos en la Nube](https://ciberninjas.com/entornos-nube/)

[▷ ¿Qué es Tekton? Novedades y Cambios](https://ciberninjas.com/que-es-tekton/)

[Historia de entrega continua de Dailymotion](https://ciberninjas.com/dailymotin-jenkins-tekton/)

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![](/assets/img/blog/20-aws-kubernetes.webp)

> **Fuente**: [Blog Oficial de Amazon](https://aws.amazon.com/es/blogs/containers/aws-controllers-for-kubernetes-ack/){:target="_blank" rel="nofollow,noreferrer"}.