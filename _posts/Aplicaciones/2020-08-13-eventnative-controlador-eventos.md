---

author: rosepac
bootstrap: true
comments: false
tags:
- Pruebas
# thumbnail: /assets/img/blog/telegram-apple.webp
# feature-img: /assets/img/blog/telegram-apple.webp
title: '▷ EventNative: Un servicio de recopilación de eventos de código abierto y alto rendimiento'
description: >-
  Capture todos los eventos que genera tu aplicación y transmítelos a su almacén de datos preferido con soporte actual para RedShift y BigQuery. EventNative se puede implementar con 1 clic en la infraestructura de su elección.
excerpt: >-
  Capture todos los eventos que genera tu aplicación y transmítelos a su almacén de datos preferido con soporte actual para RedShift y BigQuery. EventNative se puede implementar con 1 clic en la infraestructura de su elección.
canonical_URL: https://ciberninjas.com/eventnative-controlador-eventos/
permalink: /eventnative-controlador-eventos/
date: 2020-08-13 01:13:46
published: true

---

EventNative es un servicio de recopilación de eventos de código abierto y alto rendimiento. Capture todos los eventos que genera su aplicación y transmítalos a su almacén de datos preferido con soporte actual para RedShift y BigQuery. EventNative se puede implementar con 1 clic en la infraestructura de su elección.

La forma más rápida de comenzar es implementar con un clic desde Heroku. Para la implementación se sugiere la utilización de Docker.

## Características de EventNative

- Segmento directo y backend de Google Analytics : no es necesario modificar su código de seguimiento existente si está utilizando analytics.jso Google Analytics, simplemente agregue algunas líneas de JavaScript y listo.
- Rastreador autohospedado: ¿No desea enviar sus datos de usuario a terceros? Utilice nuestro rastreador auto alojado.
- Capturar eventos detenidos por AdBlock: dado que EventNative está alojado en su dominio, obtiene eventos para todos los usuarios; no solo aquellos sin AdBlock.
- Compatibilidad con varios destinos: admitimos Redshift , BigQuery , PostgreSQL , Snowflake ( próximamente ) y ClickHouse ( próximamente ). EventNative empuja automáticamente a todos sus destinos configurados a la vez sin gastos generales adicionales.
- Alto rendimiento y rendimiento: EventNative está escrito en Go teniendo en cuenta el rendimiento, solo está limitado por el rendimiento del disco local, ya que escribimos eventos localmente antes de enviarlos a su almacén de datos en lotes. Lea más sobre escalabilidad aquí .
- Esquema dinámico e interfaz JSON: EventNative analiza las solicitudes entrantes y ajusta el esquema subyacente automáticamente. Asignamos eventos JSON a tablas y creamos las columnas necesarias sobre la marcha.
- Enriquecimiento de datos: EventNative puede conectarse con la base de datos autohospedada de MaxMind para que la resolución geográfica determine el país, la ciudad y el código postal de un usuario a partir de su dirección IP
- Reconocimiento de usuario retrospectivo : próximamente para el destino seleccionado (BigQuery, pSQL y ClickHouse).
- SDK de aplicaciones móviles: próximamente para iOS y Android .

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Documentación**: [Documentación de EventNative](https://eventnative-docs.ksense.io/){:target="_blank" rel="nofollow,noreferrer"}
> **Fuente**: [EventNative es un servicio de recopilación de eventos de código abierto y alto rendimiento](https://github.com/ksensehq/eventnative){:target="_blank" rel="nofollow,noreferrer"}