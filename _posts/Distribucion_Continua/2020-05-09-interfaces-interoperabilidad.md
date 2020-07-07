---

author: rosepac
title: "▷ Escalado de entrega continua y la automatización de runbooks a través de las interfaces de interoperabilidad de las herramientas"
description: "Originalmente publicado en Medium por un miembro de la comunidad, Andreas Grimmer Continuous Delivery (CD) y Runbook Automation son medios estándar para implementar, operar y administrar artefactos de software a lo largo del ciclo de vida del software ..."
excerpt: "Originalmente publicado en Medium por un miembro de la comunidad, Andreas Grimmer Continuous Delivery (CD) y Runbook Automation son medios estándar para implementar, operar y administrar artefactos de software a lo largo del ciclo de vida del software ..."
published: true
comments: false
date: 2020-05-09 19:10:12
last_modified_at: 
canonical_URL: https://ciberninjas.com/escalado-cd-interfaces-interoperabilidad/
permalink: /escalado-cd-interfaces-interoperabilidad/

categories:
- Distribución Continua
tags:
- CD Fundación
# header:
#  teaser: https://i.ibb.co/q1xYTvG/photo-1480843669328-3f7e37d196ae-ixlib-rb-1-2.jpg
# feature-img: https://i.ibb.co/q1xYTvG/photo-1480843669328-3f7e37d196ae-ixlib-rb-1-2.jpg
#   overlay_filter: 0.2
#   image_description: 'Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación en 2020'
#   image_alt: 'Amazon lanzó Deep Java Library (DJL), una biblioteca de código abierto con API de Java para simplificar la capacitación, las pruebas, la implementación y la creación en 2002'
#   caption: "Créditos: Unsplash"
# toc: false
# toc_label: "Contenidos"
# toc_icon: user-ninja
# toc_sticky: true

---

La entrega continua (CD) y la automatización de Runbook son medios estándar para implementar, operar y administrar artefactos de software a lo largo del ciclo de vida del software.

Según nuestro análisis de muchas implementaciones de canalizaciones de entrega, hemos visto que en promedio se incluyen siete o más herramientas en estos procesos, por ejemplo, control de versiones, gestión de compilación, seguimiento de problemas, pruebas, monitoreo, automatización de implementación, gestión de artefactos, gestión de incidentes, o comunicación del equipo.

Muy a menudo, estas herramientas se "pegan" mediante integraciones personalizadas y ad-hoc para formar un flujo de trabajo completo de extremo a extremo. Desafortunadamente, estas integraciones de herramientas ad-hoc personalizadas también existen en los procesos de Runbook Automation.

![img](https://cd.foundation/wp-content/uploads/sites/78/2020/04/1_H4hywi0L-tle_CbcQa2X8A.png)Los procesos generalmente integran múltiples herramientas y existen en múltiples permutaciones

## **Problema: las integraciones punto a punto son difíciles de escalar y mantener**

Este enfoque no solo es propenso a errores, sino que el mantenimiento y la solución de problemas de estas integraciones en todas sus permutaciones también requieren mucho tiempo. Hay varios factores que evitan que las organizaciones escalen esto en varios equipos:

- **Número de herramientas:** aunque la gran disponibilidad de diferentes herramientas siempre permite tener la herramienta adecuada, el número de integraciones requeridas explota.
- **Acoplamiento** ajustado **: las** integraciones de herramientas generalmente se implementan dentro de la tubería, lo que resulta en un acoplamiento apretado entre la tubería y la herramienta.
- **Programación de tuberías de copiar y pegar:** un enfoque común que vemos con frecuencia es que una tubería con una integración de herramientas de trabajo a menudo se usa como punto de partida para nuevas tuberías. Si ahora la API de una herramienta usada cambia, todas las tuberías deben ponerse al día para mantenerse compatibles y evitar vulnerabilidades.

Imaginemos una organización con cientos de canales de copiar y pegar, que contienen un código codificado para activar las pruebas de carga Hey. Ahora a esta organización le gustaría cambiar de Hey a JMeter. Por lo tanto, tendrían que cambiar **todas** sus tuberías. ¡Esto claramente no es eficiente!

## **Solución: Proporcionar interfaces de interoperabilidad estandarizadas**

Para resolver estos desafíos, proponemos la introducción de interfaces de interoperabilidad, que permiten herramientas abstractas en procesos de CD y Runbook Automation. Estas interfaces deberían desencadenar operaciones de una **manera independiente de la herramienta** .

Por ejemplo, una interfaz de prueba podría abstraer diferentes herramientas de prueba. Esta interfaz se puede usar dentro de una tubería para activar una prueba sin saber qué herramienta está ejecutando la prueba real en segundo plano.

![img](https://cd.foundation/wp-content/uploads/sites/78/2020/04/1_WtBsJ-nD33_R2o5Xjrlc6w.png)La interfaz resume las herramientas reales

Estas interfaces de interoperabilidad son importantes y esto se confirma por el hecho de que Continuous Delivery Foundation ha implementado un grupo de trabajo dedicado sobre [interoperabilidad](/que-es-la-interoperabilidad-en-la-distribucion-continua/), así como el proyecto de código abierto [Eiffel](https://eiffel-community.github.io/){:target="_blank" rel="nofollow,noreferrer"}, que proporciona un protocolo basado en eventos que permite una comunicación especialmente tecnológica para tareas de integración continua.

## **Usar eventos como interfaces de interoperabilidad**

Al implementar estas interfaces de interoperabilidad, definimos un conjunto estandarizado de eventos. Estos eventos se basan en [CloudEvents](https://cloudevents.io/){:target="_blank" rel="nofollow,noreferrer"} y nos permiten describir datos de eventos de una manera común.

El **primer objetivo** de nuestros esfuerzos de estandarización es definir un conjunto común de operaciones de automatización de CD y runbook. Identificamos las siguientes operaciones comunes (¡infórmenos si nos faltan operaciones importantes!):

- **Operaciones en procesos de CD:** implementación, prueba, evaluación, lanzamiento, reversión
- **Operaciones en procesos de Runbook Automation:** análisis de problemas, ejecución de la acción de remediación, evaluación y notificación de escalado / resolución

Para cada una de estas operaciones, se requiere una interfaz que abstraiga las herramientas que ejecutan la operación. Cuando se usan eventos, cada interfaz se puede modelar como un **tipo de evento** dedicado **.**

El **segundo objetivo** es estandarizar los **datos** dentro del evento, que las herramientas necesitan para activar la operación respectiva. Por ejemplo, una herramienta de implementación necesitaría la información del artefacto para implementarse en el evento. Por lo tanto, el evento puede contener los recursos necesarios (por ejemplo, un gráfico Helm para k8s) o un URI para estos recursos.

Ya definimos un primer conjunto de eventos [https://github.com/keptn/spec](https://github.com/keptn/spec){:target="_blank" rel="nofollow,noreferrer"}, que está específicamente diseñado para [Keptn](https://keptn.sh/){:target="_blank" rel="nofollow,noreferrer"}, un proyecto de código abierto que implementa un plano de control para la entrega continua y operaciones automatizadas. Sabemos que estos eventos están actualmente demasiado adaptados para Keptn y herramientas individuales. Así que por favor
