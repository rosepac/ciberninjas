---
author: rosepac
bootstrap: true
title: '🥇 ▷ Screwdriver: Una plataforma de construcción escalable para entrega continua'
description: "La plataforma de compilación de código abierto surgió de la búsqueda de Yahoo para encontrar una plataforma CI / CD para satisfacer sus crecientes requisitos de desarrollador."
excerpt: "La plataforma de compilación de código abierto surgió de la búsqueda de Yahoo para encontrar una plataforma CI / CD para satisfacer sus crecientes requisitos de desarrollador."
published: true
comments: false
date: 2020-05-09 10:20:12
last_modified_at: 
thumbnail: /assets/img/blog/10-captura-destornillador.webp
feature-img: /assets/img/blog/10-captura-destornillador.webp
permalink: /screwdriver-plataforma-escalable-entrega-continua/
canonical_URL: https://ciberninjas.com/screwdriver-plataforma-escalable-entrega-continua/
tags:
- Distribución Continua
- Screwdriver
- Software CD
---

En 2012, después de experimentar limitaciones de rendimiento y escala con la solución CI / CD que estábamos usando, mi equipo de Yahoo comenzó a buscar otra plataforma. No encontramos una solución que satisfaga nuestras necesidades de rápido crecimiento del desarrollador, por lo que creamos Screwdriver.

Es el producto de nuestro viaje de CI / CD a escala, lecciones aprendidas en el camino y enormes cantidades de comentarios de nuestros desarrolladores internos. Después de ver el valor agregado de Screwdriver, decidimos abrirlo en 2016 para compartir nuestra solución con la comunidad global de DevOps.

[Screwdriver](http://screwdriver.cd/){:target="_blank" rel="nofollow,noreferrer"} es una plataforma de construcción diseñada para entrega continua a escala. Admite una lista en expansión de servicios de código fuente, motores de ejecución y bases de datos, ya que no está vinculada a ninguna plataforma informática específica. Screwdriver tiene una API completamente documentada y una creciente comunidad de código abierto. Una demostración de Screwdriver está [disponible aquí](https://cd.screwdriver.cd/){:target="_blank" rel="nofollow,noreferrer"}.

![](/assets/img/blog/10-captura-destornillador.webp "Las tuberías o programas para la gestión continua del código")

- [**Screwdriver es altamente personalizable**](#screwdriver-es-altamente-personalizable)
- [**Tubería como código**](#tubería-como-código)
- [**Compartir las mejores prácticas a través de plantillas y comandos**](#compartir-las-mejores-prácticas-a-través-de-plantillas-y-comandos)
- [**Seguridad**](#seguridad)
- [**Empezando**](#empezando)

## **Screwdriver es altamente personalizable**

La arquitectura del Screwdriver le permite utilizar componentes conectables debajo del capó para intercambiar piezas que se adapten a su infraestructura. Un administrador de clúster de Screwdriver puede intercambiar Postgres o MySQL por el almacén de datos o usar GitHub, GitLab, Bitbucket o una combinación de ellos para la administración del control de fuente (SCM).

También puede seleccionar dinámicamente un motor ejecutor en función de las necesidades de cada canal de compilación. Como ejemplo, puede enviar compilaciones de Golang al ejecutor de Kubernetes mientras sus compilaciones de iOS se ejecutan en una granja de ejecución de Jenkins.

## **Tubería como código**

Con Screwdriver, usted define su flujo de trabajo de entrega en un [simple archivo YAML](https://docs.screwdriver.cd/user-guide/configuration/){:target="_blank" rel="nofollow,noreferrer"}. El Screwdriver admite funciones avanzadas de flujo de trabajo como:

- **[Filtrado de sucursales](https://docs.screwdriver.cd/user-guide/configuration/workflow#branch-filtering)**{:target="_blank" rel="nofollow,noreferrer"}: crea flujos de trabajo con trabajos específicos de sucursales.
- **[Paralelo y unirse](https://docs.screwdriver.cd/user-guide/configuration/workflow#parallel-and-join)**{:target="_blank" rel="nofollow,noreferrer"}: flujo de trabajo donde los trabajos se despliegan de un solo trabajo y luego se despliegan en otro trabajo. Crea múltiples flujos de trabajo paralelos para una tubería.
- **[Activadores remotos](https://docs.screwdriver.cd/user-guide/configuration/workflow#remote-triggers)**{:target="_blank" rel="nofollow,noreferrer"}: construye tuberías interconectadas. Activa un flujo de trabajo para crear una aplicación cuando se ha creado una de sus bibliotecas dependientes.
- **[Bloqueado por](https://docs.screwdriver.cd/user-guide/configuration/workflow#blocked-by)**{:target="_blank" rel="nofollow,noreferrer"}: evita que las compilaciones se ejecuten simultáneamente. Bloquea la ejecución de un trabajo de implementación cuando un trabajo de prueba ya está en progreso.
- **[Trabajos independientes y canalizaciones](https://docs.screwdriver.cd/user-guide/configuration/workflow#detached-jobs-and-pipelines)**{:target="_blank" rel="nofollow,noreferrer"}: define trabajos que no están vinculados a ningún cambio de SCM. Estos pueden iniciarse manualmente y utilizarán un [metaconjunto](https://docs.screwdriver.cd/user-guide/metadata){:target="_blank" rel="nofollow,noreferrer"} de un evento pasado.

## **Compartir las mejores prácticas a través de plantillas y comandos**

Screwdriver permite a los usuarios expertos definir [plantillas](https://docs.screwdriver.cd/user-guide/templates){:target="_blank" rel="nofollow,noreferrer"}, que definen trabajos reutilizables. Por ejemplo, si le apasiona cómo deberían crearse, probarse e implementarse las aplicaciones de Golang, puede crear una plantilla para Golang que todos los usuarios del clúster Screwdriver puedan incluir en su [configuración YAML de canalización](https://docs.screwdriver.cd/user-guide/templates#using-a-template){:target="_blank" rel="nofollow,noreferrer"}.

Las plantillas permiten a una organización encapsular el mejor comportamiento sobre cómo se debe construir y desplegar una aplicación. Las plantillas de ejemplo están [disponibles para navegar](https://cd.screwdriver.cd/templates){:target="_blank" rel="nofollow,noreferrer"} en la instancia de Screwdriver de código abierto.

Una plantilla es para un trabajo lo que un comando compartido es para un paso. Las plantillas permiten a los usuarios compartir configuraciones de trabajo comunes, mientras que los comandos compartidos les permiten a los usuarios compartir pasos de compilación comunes.

Por ejemplo, un paso para compilar un paquete RPM o configurar Docker en su entorno de compilación se puede empaquetar como un comando compartido. Los comandos de ejemplo están [disponibles para navegar](https://cd.screwdriver.cd/templates){:target="_blank" rel="nofollow,noreferrer"} en la instancia de Screwdriver de código abierto.

## **Seguridad**

Los pasos de compilación conectables permiten a los administradores del clúster configurar un entorno de compilación con credenciales de autorización, como la autoridad de certificación SSH.

La gestión secreta incorporada permite a los usuarios almacenar secretos de compilación de forma segura.

El Screwdriver también proporciona un ejecutor basado en VM para proporcionar un mayor aislamiento de compilación. Los tokens de acceso permiten interacciones programáticas de ámbito de usuario o de canalización con la API de Screwdriver.

## **Empezando**

Comience a explorar Screwdriver hoy ejecutando el siguiente comando en su terminal para abrir un clúster localmente.

```
python <(curl -L https://git.io/screwdriver-box)
```

Este comando ejecutará un script que creará un archivo Docker Compose localmente, completo con las credenciales de OAuth utilizando un token web JSON generado y un ID de cliente OAuth y un secreto proporcionados por el usuario.

Si elige hacerlo, Docker luego extraerá la API de Screwdriver, la IU y las imágenes de la tienda de registros para mostrar una instancia completa de Screwdriver localmente para que pueda jugar. Todos los datos escritos en una base de datos se almacenarán en un directorio **/ data**.

**Fuente**\: [Open Source Blog](https://opensource.com/article/19/3/screwdriver-cicd){:target="_blank" rel="nofollow,noreferrer"} bajo una [licencia Creative Commons,](http://creativecommons.org/licenses/)
{: .notice--info}
