---

comments: false
author: rosepac
bootstrap: true
tags:
- Cloudflare
categories:
- Servidores
thumbnail: /assets/img/blog/
title: "🚀 ▷ Cloudflare's Gen X: Servidores para un futuro acelerado"
description: >-
  ""
excerpt: >-
  ""
canonical_URL: https://ciberninjas.com//
permalink: //
date: 2020-02-24 00:32:32
last_modified_at: 
published: false

---

![](/assets/img/ "")

> *"Cada servidor puede ejecutar todos los servicios".*

Diseñamos y construimos la red de Cloudflare para poder aumentar la capacidad de forma rápida y económica; para permitir que cada servidor, en cada ciudad, ejecute todos los servicios; y para permitirnos cambiar clientes y tráfico a través de nuestra red de manera eficiente. Implementamos hardware estándar estándar y nuestros desarrolladores y clientes de productos no necesitan preocuparse por los servidores subyacentes. Nuestro software gestiona automáticamente la implementación y ejecución del código de nuestros desarrolladores y el código de nuestros clientes en toda nuestra red. Dado que gestionamos la ejecución y la priorización del código que se ejecuta en nuestra red, podemos optimizar el rendimiento de nuestros clientes de más alto nivel y aprovechar de manera efectiva la capacidad inactiva en nuestra red.

Un enfoque alternativo podría haber sido ejecutar varias redes fragmentadas con servidores especializados diseñados para ejecutar funciones específicas, como el [firewall](https://www.cloudflare.com/waf/) , la [protección DDoS](https://www.cloudflare.com/ddos/) o los [trabajadores](https://workers.cloudflare.com/) . Sin embargo, creemos que ese enfoque habría dado como resultado el desperdicio de recursos inactivos y nos habría dado menos flexibilidad para construir un nuevo software o adoptar el hardware más nuevo disponible. Y un solo objetivo de optimización significa que podemos proporcionar seguridad y rendimiento al mismo tiempo.

Usamos Anycast para enrutar una solicitud web al centro de datos Cloudflare más cercano (de entre [200 ciudades](https://www.cloudflare.com/network/) ), mejorando el rendimiento y maximizando el área de superficie para combatir los ataques.

Una vez que se selecciona un centro de datos, utilizamos Unimog, el sistema de equilibrio de carga personalizado de Cloudflare, para equilibrar dinámicamente las solicitudes en diversas generaciones de servidores. Cargamos el equilibrio en diferentes capas: entre ciudades, entre implementaciones físicas ubicadas en una ciudad, entre puertos de Internet externos, entre cables internos, entre servidores e incluso entre hilos lógicos de CPU dentro de un servidor.

A medida que crece la demanda, podemos escalar simplemente agregando nuevos servidores, puntos de presencia (PoP) o ciudades al conjunto global de recursos disponibles. Si algún componente del servidor tiene una falla de hardware, nuestro equipo de operaciones lo reparará por prioridad o lo eliminará del grupo. Esta arquitectura nos ha permitido no tener personal dedicado de Cloudflare en ninguna de las 200 ciudades, en lugar de depender de la ayuda para tareas físicas poco frecuentes de los ISP (o centros de datos) que alojan nuestros equipos.

### Gen X: Intel no dentro

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/AMD_EPYC-39.jpg)

Recientemente, presentamos nuestra décima generación de servidores, "Gen X", ya implementados en las principales ciudades de EE. UU., Y en proceso de envío a todo el mundo. En comparación con nuestro servidor anterior ( [Gen 9](https://blog.cloudflare.com/a-tour-inside-cloudflares-g9-servers/) ), procesa hasta un 36% más de solicitudes y cuesta mucho menos. Además, permite una disminución de ~ 50% en la tasa de fallas de caché L3 y una disminución de hasta 50% en la latencia NGINX p99, alimentada por una CPU con un TDP (potencia de diseño térmico) 25% menor por núcleo.

Notablemente, por primera vez, Intel no está adentro. No estamos utilizando su hardware para ningún componente importante del servidor, como la CPU, placa, memoria, almacenamiento, tarjeta de interfaz de red (o cualquier tipo de acelerador). Dado lo crítico que es Intel para nuestra industria, esto hasta hace poco habría sido inimaginable y contrasta con [las ](https://blog.cloudflare.com/a-tour-inside-cloudflares-g9-servers/)[generaciones ](https://blog.cloudflare.com/a-tour-inside-cloudflares-latest-generation-servers/)[anteriores](https://blog.cloudflare.com/a-tour-inside-cloudflares-g9-servers/) que hicieron un uso extensivo de su hardware.

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/AMD2.png)*Servidor Gen 9 basado en Intel*

Esta vez, AMD está adentro.

Nos impresionaron especialmente los procesadores AMD EPYC de segunda generación porque demostraron ser mucho más eficientes para las cargas de trabajo de nuestros clientes. Como el péndulo del liderazgo tecnológico oscila entre los proveedores, no nos sorprendería si eso cambia con el tiempo. Sin embargo, nos complació adaptarnos rápidamente a los componentes que tenían más sentido para nosotros.

### Calcular

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/pasted-image-0.png)

La eficiencia de la CPU es muy importante para el diseño de nuestro servidor. Dado que tenemos una gran carga de trabajo de cómputo, nuestros servidores generalmente están limitados por la CPU antes que otros componentes. La pila de software de Cloudflare escala bastante bien con núcleos adicionales. Por lo tanto, nos preocupamos más por el conteo de núcleos y la eficiencia energética que dimensiones como la velocidad del reloj.

Seleccionamos el procesador AMD EPYC 7642 en una configuración de un solo socket para Gen X. Esta CPU tiene 48 núcleos (96 hilos), una velocidad de reloj base de 2.4 GHz y un caché L3 de 256 MB. Si bien la potencia nominal (225 W) puede parecer alta, es inferior a la TDP combinada en nuestros servidores Gen 9 y preferimos el rendimiento de esta CPU sobre las variantes de menor potencia. A pesar de que AMD ofrece una opción de conteo de núcleos más alto con 64 núcleos, las ganancias de rendimiento para nuestra pila de software y uso no fueron lo suficientemente convincentes.

Hemos implementado el AMD EPYC 7642 en media docena de centros de datos Cloudflare; es considerablemente más potente que un par de [procesadores Intel de](https://blog.cloudflare.com/a-tour-inside-cloudflares-g9-servers/) doble [núcleo](https://blog.cloudflare.com/a-tour-inside-cloudflares-g9-servers/) de [alto conteo](https://blog.cloudflare.com/a-tour-inside-cloudflares-g9-servers/) (Skylake y Cascade Lake) que utilizamos en la última generación.

Los lectores de nuestro blog pueden recordar nuestra emoción por los procesadores ARM. Incluso portamos la totalidad de nuestra pila de software para ejecutar en ARM, tal como lo hace con x86, y lo hemos mantenido desde entonces, aunque requiere un poco más de trabajo para nuestros equipos de ingeniería de software. Hicimos esto antes del lanzamiento de [la CPU del servidor Centriq](https://blog.cloudflare.com/arm-takes-wing/) de [Qualcomm](https://blog.cloudflare.com/arm-takes-wing/) , que finalmente se cerró. Si bien ninguna de las CPU ARM disponibles en el mercado en este momento es interesante para nosotros, seguimos siendo optimistas sobre el lanzamiento de ofertas de conteo de núcleos altos en 2020 y más allá, y esperamos un día en que nuestros servidores sean una mezcla de x86 (Intel y AMD) y ARM.

Nuestro objetivo es reemplazar los servidores cuando las ganancias de eficiencia permitidas por los nuevos equipos superan su costo.

El rendimiento que hemos visto del procesador AMD EPYC 7642 nos ha animado a acelerar el reemplazo de múltiples generaciones de servidores basados en Intel.

Compute es nuestra mayor inversión en un servidor. Nuestras cargas de trabajo más pesadas, desde el firewall hasta los [trabajadores](https://blog.cloudflare.com/cloud-computing-without-containers/) (nuestra oferta sin servidor), a menudo requieren más cómputo que otros recursos del servidor. Además, el tamaño promedio en kilobytes de una solicitud web en nuestra red tiende a ser pequeño, influenciado en parte por la relativa popularidad de las API y las aplicaciones móviles. Nuestro enfoque para el diseño del servidor es muy diferente al de las redes tradicionales de entrega de contenido diseñadas para entregar bibliotecas de video de objetos grandes, para quienes los servidores enfocados en el almacenamiento podrían tener más sentido, y la reestructuración para ofrecer sin servidor es prohibitivamente intensiva en capital.

Nuestro servidor Gen X está diseñado intencionalmente con una ranura PCIe "vacía" para una posible tarjeta adicional, si puede realizar algunas funciones de manera más eficiente que la CPU principal. ¿Sería una GPU, FPGA, SmartNIC, ASIC personalizada, TPU o algo más? Estamos intrigados por explorar las posibilidades.

En las publicaciones de blog que se acompañan en los próximos días, nuestros ingenieros de hardware describirán cómo se desempeñó AMD 7642 en comparación con los puntos de referencia que nos interesan. Estamos agradecidos por su arduo trabajo.

## Memoria, almacenamiento y red

Como generalmente estamos limitados por la CPU, la Generación X representó una oportunidad para desarrollar componentes como RAM y SSD más lentamente que el cálculo.

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/AMD_EPYC-13.jpg)

Para la memoria, continuamos usando 256 GB de RAM, como en nuestra generación anterior, pero obtuvimos una calificación más alta a 2933 MHz. Para el almacenamiento, seguimos teniendo ~ 3TB, pero pasamos a un factor de forma de 3x1TB usando NVME flash (en lugar de SATA) con mayor IOPS disponible y mayor resistencia, lo que permite [el cifrado de disco completo usando LUKS sin penalización](https://www.usenix.org/conference/vault20/presentation/korchagin) . Para la tarjeta de red, seguimos usando Mellanox 2x25G NIC.

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/AMD_EPYC-5.jpg)

Pasamos de nuestro chasis de múltiples nodos a un factor de forma simple de 1U, diseñado para ser más liviano y menos propenso a errores durante el trabajo operativo en el centro de datos. También agregamos múltiples socios ODM nuevos para diversificar la forma en que fabricamos nuestros equipos y aprovechar el almacenamiento global adicional.

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/AMD_EPYC-7.jpg)

### Expansión de red

![img](https://blog-cloudflare-com-assets.storage.googleapis.com/2020/02/AMD_EPYC-35.jpg)

Nuestra nueva generación de servidores nos brinda la flexibilidad para continuar construyendo nuestra red aún más cerca de cada usuario en la Tierra. Estamos orgullosos del arduo trabajo de todos los equipos de ingeniería en Gen X, y estamos agradecidos por el apoyo de nuestros socios. Esté atento a más blogs sobre estos servidores en los próximos días.

**Fuente**\: []( ""){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}
