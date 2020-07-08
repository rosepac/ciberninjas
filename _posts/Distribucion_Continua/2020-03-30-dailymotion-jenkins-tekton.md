---
author: rosepac
bootstrap: true
title: "Historia de entrega continua de Dailymotion con Jenkins, Jenkins X y Tekton"
description: "Descubre este recurso de organización para el trabajo de la integración continua"
excerpt: "Vas a encontrarte explicado el concepto de interoperabilidad dentro del mundo CI / CD además del equipo de trabajo sobre el desarrollo del término en sí"
published: true
comments: false
date: 2020-03-30 19:10:12
last_modified_at: 
thumbnail: /assets/img/blog/10-dailymotion.webp
feature-img: /assets/img/blog/10-dailymotion.webp
canonical_URL: https://ciberninjas.com/dailymotin-jenkins-tekton/
permalink: /dailymotin-jenkins-tekton/

categories:
- Distribución Continua
tags:
- CD Fundación
- Tekton
- Jenkins
---

En Dailymotion, alojamos y entregamos contenido de video premium a usuarios de todo el mundo. Constantemente estamos creando una gran variedad de software para impulsar el servicio, desde nuestro reproductor o sitio web de [Dailymotion](https://www.dailymotion.com/){:target="_blank" rel="nofollow,noreferrer"} hasta nuestra API GraphQL o plataforma de tecnología publicitaria.

![](/assets/img/blog/10-dailymotion.webp)

La entrega continua es una práctica central en nuestra organización, lo que nos permite impulsar nuevas funciones de forma rápida e iterativa.

Somos los primeros en adoptar Kubernetes: creamos nuestra propia plataforma híbrida , alojada tanto en las instalaciones como en la nube. Y confiamos en gran medida en Jenkins para impulsar nuestra "plataforma de lanzamiento", que es responsable de construir, probar, empaquetar e implementar todo nuestro software.

Debido a que tenemos cientos de repositorios, estamos utilizando Jenkins Shared Libraries para mantener nuestros archivos de canalización lo más pequeños posible.

Es una característica importante para nosotros, ya que garantiza un bajo costo de mantenimiento y una experiencia homogénea para todos los desarrolladores, a pesar de que están trabajando en proyectos que utilizan diferentes pilas de tecnología. Incluso construimos [Gazr](https://gazr.io/) {:target="_blank" rel="nofollow,noreferrer"}, una convención para escribir Makefiles con objetivos estándar, que es la base de nuestras tuberías Jenkins.

En 2018, migramos nuestro producto de tecnología publicitaria a Kubernetes y aprovechamos la oportunidad para configurar una instancia de Jenkins en nuestro nuevo clúster, o mejor aún, pasar a una alternativa "nativa de la nube". [Jenkins X](https://jenkins-x.io/){:target="_blank" rel="nofollow,noreferrer"} fue lanzado solo unos meses antes, y nos pareció una combinación perfecta:

- Está construido en la parte superior y para Kubernetes.
- En ese momento, en 2018, estaba usando Jenkins para ejecutar las tuberías, lo cual fue una buena noticia dada nuestra experiencia con Jenkins.
- Viene con características tales como entornos de vista previa que son un beneficio real para nosotros.
- Y utiliza la práctica de Gitops, que nos pareció muy interesante porque nos encanta el control de versiones, la revisión por pares y la automatización.

Al adoptar Jenkins X descubrimos que primero se trata de un conjunto de buenas prácticas derivadas de los mejores equipos y luego que es un conjunto de herramientas que nos permite implementar esas prácticas. Si intentas adoptar las herramientas sin comprender las prácticas, corres el riesgo de luchar contra la herramienta porque no se ajusta a tus prácticas. Entonces deberías comenzar con las prácticas.

Jenkins X se basa en las prácticas descritas en el [libro Accelerate ](https://itrevolution.com/book/accelerate/){:target="_blank" rel="nofollow,noreferrer"}, tales como microservicios y arquitectura débilmente acoplada, desarrollo basado en troncales, indicadores de características, compatibilidad con versiones anteriores, integración continua, lanzamientos frecuentes y automatizados, entrega continua, Gitops..

Comprender estas prácticas y sus beneficios es el primer paso. Después de eso, verá las limitaciones de su flujo de trabajo y herramientas actuales. Aquí es cuando puede presentar Jenkins X, su flujo de trabajo y su conjunto de herramientas.

Hemos estado usando Jenkins X desde principios de 2019 para manejar toda la construcción y entrega de nuestra plataforma de tecnología publicitaria, con grandes beneficios. La principal es la velocidad mejorada: solíamos lanzar y desplegar cada dos semanas, al final de cada sprint.

Tras la adopción de Jenkins X y su conjunto de prácticas, ahora estamos lanzando entre 10 y 15 veces por día y desplegando en producción entre 5 y 10 veces por día. Según el [Informe](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf){:target="_blank" rel="nofollow,noreferrer"} del [estado de DevOps para 2019](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf){:target="_blank" rel="nofollow,noreferrer"}, nuestro equipo de tecnología publicitaria saltó del grupo de actores medianos a algún lugar entre los grupos de artistas de alto y élite.

Pero estos beneficios no fueron gratuitos. Adoptar Jenkins X temprano significaba que teníamos que personalizarlo para evitar sus limitaciones iniciales, como la capacidad de implementar en múltiples clústeres.

Hemos detallado nuestro trabajo en una reciente publicación de blog, y recibimos el Premio de la Comunidad Jenkins "Implementación Jenkins X más innovadora" en 2019 por ello. Es importante tener en cuenta que la mayoría de los problemas que encontramos se han solucionado o se están solucionando.

El equipo de Jenkins X ha estado escuchando los comentarios de la comunidad y está realmente enfocado en mejorar su producto. El nuevo [Jenkins X Labs](https://jenkins-x.io/blog/2020/02/28/jxl-feb-20/){:target="_blank" rel="nofollow,noreferrer"} es un buen ejemplo.

A medida que crece nuestro uso de Jenkins X, estamos alcanzando cada vez más los límites de la única instancia de Jenkins implementada como parte de Jenkins X. En una plataforma donde cada componente se ha desarrollado con una mentalidad nativa de la nube, Jenkins es el único. que ha sido forzado a un entorno para el cual no fue construido. Sigue siendo un punto único de falla, con un costo de mantenimiento mucho mayor que el de los otros componentes, principalmente debido a los diversos complementos.

En 2019, el equipo Jenkins X comenzó a reemplazar a Jenkins con una combinación de Prow y Tekton. [Prow](https://github.com/kubernetes/test-infra/blob/master/prow/README.md){:target="_blank" rel="nofollow,noreferrer"} (o [Lighthouse](https://github.com/jenkins-x/lighthouse/blob/master/README.md){:target="_blank" rel="nofollow,noreferrer"} es el componente que maneja los eventos de webhook entrantes de GitHub, y lo que Jenkins X llama "ChatOps": todas las interacciones entre GitHub y la plataforma CI / CD.

[Tekton](/que-es-tekton/){:target="_blank" rel="nofollow,noreferrer"} es un motor de ejecución de tuberías. Es un proyecto nativo de la nube construido sobre Kubernetes, que aprovecha al máximo la API y las capacidades de esta plataforma. Sin punto único de falla, sin pesadillas de compatibilidad de complementos, todavía.

Desde principios de 2020, hemos comenzado un proyecto interno para actualizar nuestra configuración de Jenkins X, insertando Prow y Tekton; y hemos visto beneficios de inmediato:

- Una programación más rápida de vainas de "corredores" de tuberías, porque todos los componentes ahora son componentes nativos de Kubernetes.
- Tuberías más simples: gracias a la sintaxis YAML de Jenkins X Pipelines y a la capacidad de desacoplar fácilmente una tubería compleja en múltiples pequeñas que se ejecutan simultáneamente.
- Menor costo de mantenimiento.

Si bien reemplazar el motor de canalización de Jenkins X puede parecer un detalle de implementación, de hecho, tiene un gran impacto en los desarrolladores. Todos están acostumbrados a ver la interfaz de usuario de Jenkins como la interfaz de usuario de CI / CD: el punto de entrada principal, la forma de reiniciar manualmente las ejecuciones de canalizaciones, acceder a registros y resultados de pruebas.

Claro, hay una nueva interfaz de usuario y una API real con una CLI increíble, pero la nueva interfaz de usuario aún no está terminada, y algunas personas aún prefieren usar navegadores web y terminales.

Dejar el ecosistema Jenkins Plugins también es una decisión difícil porque algunos proyectos dependen en gran medida de unos pocos complementos. Y finalmente, con la introducción de Prow (Lighthouse), el flujo de trabajo de Github es un poco diferente, ya que las solicitudes de extracción se realizan automáticamente, en lugar de que las personas se fusionen manualmente cuando todas las revisiones y comprobaciones automáticas son verdes.

Entonces, si 2019 fue el año de Jenkins X en Dailymotion, 2020 definitivamente será el año de Tekton: nuestra plataforma de lanzamiento principal, utilizada por casi todos nuestros proyectos, excepto los de tecnología publicitaria, todavía está impulsada por Jenkins, y nos sentimos más y más más sus limitaciones en un mundo de Kubernetes.

Es por eso que planeamos reemplazar todas nuestras instancias de Jenkins con Tekton, que fue realmente construido para Kubernetes y nos permitirá escalar nuestras prácticas de Entrega Continua.

[👉 Repositorio de Tekton 🤞](https://github.com/tektoncd){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
<!-- wiki, integración continua: https://en.wikipedia.org/wiki/Continuous_integration#CI/CD -->
<!-- - [Instalación de tuberías de Tekton](https://github.com/tektoncd/pipeline/blob/master/docs/install.md) - ¡Salta con [el tutorial!](https://github.com/tektoncd/pipeline/blob/master/docs/tutorial.md) -->

**Fuentes**: [Noticias Tekton CD Fundación](https://cd.foundation/blog/2020/03/30/dailymotion-continuous-delivery-story-with-jenkins-jenkins-x-and-tekton/){:target="_blank" rel="nofollow,noreferrer"} >> [Plataforma de Kubernetes de Dailymotion](https://medium.com/dailymotion/how-we-built-our-hybrid-kubernetes-platform-d121ea9cb0bc){:target="_blank" rel="nofollow,noreferrer"} >> [APIGraphQL de Dailymotion](https://medium.com/dailymotion/tartiflette-graphql-api-engine-python-open-source-a200c5bbc477){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}
