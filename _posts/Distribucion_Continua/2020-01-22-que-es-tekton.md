---
author: rosepac
bootstrap: true
title: "▷ ¿Qué es Tekton? Novedades y Cambios"
description: "Tekton, es un recurso de canalización nativo para Kubernetes. El proyecto de tuberías de Tekton proporciona recursos de Kubernetes para declarar tuberías de integración y depuración continua."
excerpt: "Tekton, es un recurso de canalización nativo para Kubernetes. El proyecto de tuberías de Tekton proporciona recursos de Kubernetes para declarar tuberías de integración y depuración continua."
published: true
comments: false
date: 2020-01-22 19:10:12
last_modified_at: 2020-05-04 19:10:12
thumbnail: /assets/img/blog/pagina-tekton.webp
feature-img: /assets/img/blog/pagina-tekton.webp
canonical_URL: https://ciberninjas.com/que-es-tekton/
permalink: /que-es-tekton/

categories:
- Distribución Continua
tags:
- CD Fundación
- Tekton
---

![Página web oficial de Tekton: Recurso de canalización nativo para Kubernetes](/assets/img/blog/pagina-tekton.webp "Página web oficial de Tekton: Recurso de canalización nativo para Kubernetes")

<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/que-es-tekton/#qué-es-tekton"></a></li>
    <li><a href="/que-es-tekton/#quieres-comenzar-a-usar-tuberías"></a></li>
    <li><a href="/que-es-tekton/#nuevos-cambios-diciembre-2019"></a></li>
    <li><a href="/que-es-tekton/#cambios-de-api"></a></li>
    <li><a href="/que-es-tekton/#en-el-futuro"></a></li>
    <li><a href="/que-es-tekton/#control-de-versiones-de-api"></a></li>
    <li><a href="/que-es-tekton/#conclusión"></a></li>
  </ol>
</nav>
</details>

## **¿Qué es Tekton?**

Tekton, es un recurso de canalización nativo para Kubernetes. El proyecto de tuberías de Tekton proporciona recursos de Kubernetes para declarar tuberías de integración y depuración continua.

Las tuberías o "pipeline" de Tekton son nativas de la nube :

- Corre en Kubernetes
- Tener grupos de Kubernetes como un tipo de primera clase
- Use contenedores como sus bloques de construcción

Las tuberías de Tekton están desacopladas :

- One Pipeline se puede usar para implementar en cualquier clúster k8s
- Las tareas que componen una tubería se pueden ejecutar fácilmente de forma aislada
- Los recursos como los repositorios de git se pueden intercambiar fácilmente entre ejecuciones
- Las tuberías de Tekton se escriben a máquina :

El concepto de recursos tipificados significa que para un recurso como un `Image`, las implementaciones pueden intercambiarse fácilmente (por ejemplo, [compilar](https://github.com/GoogleContainerTools/kaniko){:target="_blank" rel="nofollow,noreferrer"} con [kaniko](https://github.com/GoogleContainerTools/kaniko){:target="_blank" rel="nofollow,noreferrer"} vs [buildkit](https://github.com/moby/buildkit){:target="_blank" rel="nofollow,noreferrer"} )

## **Quieres comenzar a usar tuberías**

- [Instalación de tuberías de Tekton](https://github.com/tektoncd/pipeline/blob/master/docs/install.md)
- ¡Comienza a trabajar desde el siguiente [tutorial!](https://github.com/tektoncd/pipeline/blob/master/docs/tutorial.md)

## **Nuevos Cambios (Diciembre 2019)**

Otras 6 semanas, otro lanzamiento de Tekton. Es de conocimiento general que el logotipo de Tekton es un gato robot, ¡pero es menos conocido que los lanzamientos llevan el nombre de robots y gatos! Cada versión de Tekton Pipelines recibe un nombre en clave de un tipo de gato seguido de un famoso robot.

El lunes 2 de diciembre, Andrea Frittoli de IBM lanzó la versión v0.9.0 , denominada "Bengal Bender". Esta versión contenía confirmaciones de 21 personas diferentes. Quería tomarme el tiempo para resaltar algunas de las nuevas características y cambios en la API, así como para señalar para qué parte del trabajo "oculto" está sentando las bases.

¡Veamos que se ha actualizado!

"Bengal Bender" incluye un conjunto sólido de características, correcciones de errores y mejoras de rendimiento. Disculpas si me perdí algo aquí, esta lista es simplemente lo que me parece más emocionante.

### **Modo de Secuencia de Cambios**

Si estuvieras en Kubecon San Diego, podrías haber salido con la impresión de que Go es el lenguaje de la nube. Y aunque eso es cierto hasta cierto punto, los buenos viejos bash y yaml también juegan un papel muy importante, especialmente cuando se trata de sistemas de "pegamento" como tuberías de entrega.

Si ha pasado mucho tiempo trabajando con contenedores, probablemente haya visto un archivo yaml con algo como esto:

```
- name: hello
  image: ubuntu
  command: ['bash']
  args:
  - -c
  - |
      set -ex
      echo "hello"
```

Esto es un montón de repeticiones complicadas solo para ejecutar un script bash simple dentro de un contenedor. Y si no está profundamente familiarizado con el funcionamiento de bash, shells, puntos de entrada y shebangs a nivel del sistema, esto es un poco opaco. También es propenso a errores sutiles y confusos. Incluso si está familiarizado con estas cosas, probablemente haya perdido el tiempo en problemas de depuración cuando el shell en su contenedor está configurado para algo a lo que no está acostumbrado, o el punto de entrada está anulado, o "bash -c" no funciona que esperas.

Esto hace que las tuberías de entrega sean más difíciles de escribir, comprender y mantener.

¡Ingrese al modo script! Inspirado por algunas ideas de [Ahmet Alp Balkan](https://twitter.com/ahmetb?lang=en){:target="_blank" rel="nofollow,noreferrer"}, [Jason Hall](https://twitter.com/imjasonh){:target="_blank" rel="nofollow,noreferrer"} formuló una propuesta para que sea mucho más fácil definir tareas que solo necesitan ejecutar un script bash simple. Así es como se ve:

```
- name: hello
  image: ubuntu
  script: |
    #!/bin/bash
    echo "hello"
```

Notarás que hay muchas menos líneas de repetitivo. Ya no es necesario especificar args, un punto de entrada o recordar la parte difícil "-c". Simplemente especifique el intérprete que desea usar y los comandos para ejecutar. ¡Esto ya nos ha permitido simplificar docenas de casos de prueba y ejemplos!

[👉 Request Correspondiente 👉](https://github.com/tektoncd/pipeline/pull/1432){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

### **Actualización de Rendimiento**

Tekton ha sufrido durante mucho tiempo un bajo rendimiento al iniciar PipelineRuns. [Christie Wilson](https://twitter.com/bobcatwilson){:target="_blank" rel="nofollow,noreferrer"} y yo hicimos una sesión de depuración / codificación la primavera pasada para tratar de mejorar esto, e identificamos el montaje de PVC como uno de los principales contribuyentes. Desafortunadamente, nuestro [intento de reparación](https://github.com/tektoncd/pipeline/pull/1007){:target="_blank" rel="nofollow,noreferrer"} no funcionó y fue necesario revertirlo.

[Scott Seaward](http://github.com/sbwsg){:target="_blank" rel="nofollow,noreferrer"} está manejando una solución más general a más largo plazo y el esfuerzo de recursos, pero decidí tomar otra puñalada en una solución a corto plazo. Los dedos cruzaron que funciona, pero las pruebas iniciales muestran mejoras de entre 5 y 20 segundos por PipelineRun.

[👉 Request Correspondiente 👉](https://github.com/tektoncd/pipeline/pull/1432){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Cambios de API**

Se han producido algunos cambios en la API a medida que comenzamos a reafirmar las cosas para una versión beta. Esperamos obtener la mayoría de estos cambios importantes en las próximas versiones para que los usuarios puedan comenzar a construir sistemas de producción sobre versiones estables.

Los cambios importantes en v0.9.0 incluyen:

### **Estandarización de rutas de salida para resúmenes de imágenes**

Actualmente, Tekton proporciona un mecanismo para almacenar los resúmenes de imágenes de contenedores creadas por Tareas. Este mecanismo era anterior al `PipelineResource`subsistema y requería que los autores de Tareas escribieran estos resúmenes en una ubicación específica en `/builder/image-outputs`. Este cambio lo mueve a la ruta estándar para los recursos de salida, en `/workspace/output/<resource-name>`.

### **Simplificación del recurso de clúster**

Cluster `PipelineResources`simplifica la implementación y el trabajo con clústeres de Kubernetes desde dentro `Tasks`. Proporcionan mecanismos para que los usuarios declaren dónde está un punto final del clúster y cómo autenticarse con él. Luego, durante la `Task`ejecución, configuran automáticamente un `.kubeconfig`archivo para que las herramientas de Kubernetes puedan encontrar ese clúster. Esta versión contenía algunos cambios para facilitar el trabajo con estos recursos de clúster.

Anteriormente, los usuarios tenían que especificar un parámetro de nombre dos veces: una vez en el nombre del recurso y otra como parámetro del recurso. El segundo parámetro ha sido eliminado.

## **En el Futuro**

### **Renovación de PipelineResources**

Se trabajó mucho para limpiar el `PipelineResource`subsistema existente , incluida la interfaz expuesta a los `PipelineResource`tipos y los tipos mismos. Obtener estos dos sólidos formará la base del mayor esfuerzo de [recursos](https://github.com/tektoncd/pipeline/issues/1673){:target="_blank" rel="nofollow,noreferrer"}, que actualmente está en marcha. Este proyecto hará que los tipos de recursos sean extensibles, permitiendo que cualquiera pueda agregar y usar sus propios tipos. Con suerte, también nos dejará con algunos componentes integrables, para que otros sistemas puedan utilizar Tekton `PipelineResources`y el próximo catálogo.

## **Control de versiones de API**

Uno de los pasos más importantes para enviar una API estable es descubrir cómo hacer cambios de una manera compatible con versiones anteriores. Ninguna API es perfecta, por lo que la capacidad de actualizar una es primordial. [Vincent Demeester](https://twitter.com/vdemeest){:target="_blank" rel="nofollow,noreferrer"} y sus colegas de Red Hat han trabajado arduamente para diseñar e implementar un sistema de versiones API que permitirá a los usuarios [actualizar las](https://github.com/tektoncd/pipeline/issues/1526){:target="_blank" rel="nofollow,noreferrer"} versiones [API de Tekton](https://github.com/tektoncd/pipeline/issues/1526){:target="_blank" rel="nofollow,noreferrer"} sin interrumpir las cargas de trabajo existentes. Esto será clave para la próxima versión beta.

## **Conclusión**

El proyecto Tekton ha sido increíble de ver crecer. Esta publicación solo detalla los cambios en el lanzamiento de Tekton Pipelines, pero también se ha realizado un trabajo increíble en los proyectos [Triggers](https://github.com/tektoncd/triggers){:target="_blank" rel="nofollow,noreferrer"} , [CLI](https://github.com/tektoncd/cli){:target="_blank" rel="nofollow,noreferrer"} y [Dashboard](https://github.com/tektoncd/dashboard){:target="_blank" rel="nofollow,noreferrer"}. Los disparadores ahora admiten la validación Github y Gitlab lista para usar. La CLI ha mejorado el soporte para crear `PipelineResources`e iniciar tareas de forma interactiva. ¡La visualización llegará pronto al Tablero! Me gustaría agradecer a todos los que han hecho de Tekton lo que es hoy.

La comunidad de Tekton ha estado trabajando arduamente para enviar las API y los componentes correctos para construir sistemas de entrega de software nativos de la nube. Si está utilizando Tekton, o está interesado en aprender más sobre Tekton, nos encantaría saber de usted. Considere unirse a [la comunidad](https://github.com/tektoncd/community){:target="_blank" rel="nofollow,noreferrer"}, convertirse en un [amigo de Tekton](https://github.com/tektoncd/friends){:target="_blank" rel="nofollow,noreferrer"} o [contribuir directamente](https://github.com/tektoncd/community/blob/master/standards.md#principles){:target="_blank" rel="nofollow,noreferrer"}. 

### **Licencia**

Este contenido se encuentra bajo licencia **[Apache 2.0](https://es.wikipedia.org/wiki/Apache_License)**.

[👉 Repositorio de Tekton 🤞](https://github.com/tektoncd){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
<!-- wiki, integración continua: https://en.wikipedia.org/wiki/Continuous_integration#CI/CD -->
<!-- - [Instalación de tuberías de Tekton](https://github.com/tektoncd/pipeline/blob/master/docs/install.md) - ¡Salta con [el tutorial!](https://github.com/tektoncd/pipeline/blob/master/docs/tutorial.md) -->

**Fuentes**: [Noticias Tekton CD Fundación](https://cd.foundation/blog/2019/12/12/whats-new-in-tekton-0-9/){:target="_blank" rel="nofollow,noreferrer"} >> [Repositorio de Github de Tekton Tuberías](https://github.com/tektoncd/pipeline#-tekton-pipelines){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}

### Relacionados

[¡Tekton Beta disponible ahora!](https://ciberninjas.com/tekton-beta/)

[Historia de entrega continua de Dailymotion con Jenkins, Jenkins X y Tekton](https://ciberninjas.com/dailymotin-jenkins-tekton/)

[▷ Se celebra la Cumbre de la Fundación CD](https://ciberninjas.com/cumbre-cd-nuevos-miembros/)