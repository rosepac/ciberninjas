---
title: "📰 💻 Arranque Rápido para el Kernel de Linux en Camino"
description: '💻 Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms, por Feng Tang'
excerpt: '💻 Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms, por Feng Tang'
date: 2019-09-15 17:25:00
published: false
categories:
- Actualidad
- Software
link: https://www.phoronix.com/scan.php?page=news_item&px=Clear-Linux-Kernel-3s-to-300ms 
tags:
- Sistemas Operativos
- Linux
header:
  overlay_image: "https://fossbytes.com/wp-content/uploads/2017/01/clear-linux-steam.jpg"
  overlay_filter: "0.2"
  image_description: "Captura de Pantalla realizada por FossBytes.com | Ciberninjas"
  caption: "**Créditos**: Foto de [FossBytes](https://fossbytes.com)"

---

El ingeniero de Intel Feng Tang habló en la Conferencia de Plomeros de Linux de esta semana en Lisboa, Portugal, sobre cómo el equipo de Clear Linux logró arrancar su kernel más rápido. Comenzaron con un tiempo de arranque de kernel de aproximadamente tres segundos, pero lo redujeron a solo 300 ms.

Entre las optimizaciones llevadas a cabo para acelerar realmente su tiempo de arranque se encontraban garantizar una mayor exploración asíncrona del controlador, solo inicializando una pequeña cantidad de RAM al inicio y luego, después del arranque en caliente, el resto en paralelo a través de systemd, sistema de archivos raíz optimizado montaje, desactivación de módulos innecesarios del núcleo y enfoques similares.

En el futuro, todavía están buscando optimizaciones para el proceso de arranque en torno a la inicialización de memoria diferida en el núcleo, los cambios de inicialización de SMP, los ajustes de ACPI y las optimizaciones de espacio de usuario / systemd.

Aquellos que quieran aprender más sobre el arte de Intel para arrancar el kernel de Linux lo más rápido posible, pero no en LPC2019, pueden ver [la plataforma de diapositivas de Feng](https://www.linuxplumbersconf.org/event/4/contributions/281/attachments/216/435/LPC_2019_kernel_fastboot_on_the_way.pdf) (PDF) con una descripción general de estas optimizaciones Clear Linux actuales y posibles.

**Fuente**: [Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms](https://www.phoronix.com/scan.php?page=news_item&px=Clear-Linux-Kernel-3s-to-300ms "Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms")
{: .notice--info}