---
author: rosepac
bootstrap: true
title: "Arranque Rápido para el Kernel de Linux en Camino"
description: "Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms, por Feng Tang"
excerpt: "Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms, por Feng Tang"
date: 2019-09-15 17:25:00 +0200
published: true
tags:
  - Actualidad
  - Software
  - Sistemas Operativos
  - Linux
thumbnail: 'https://fossbytes.com/wp-content/uploads/2017/01/clear-linux-steam.jpg'
feature-img: 'https://fossbytes.com/wp-content/uploads/2017/01/clear-linux-steam.jpg'
canonical_URL: https://ciberninjas.com/arranque-r%C3%A1pido-para-el-kernel-de-linux-en-camino/
permalink: /arranque-r%C3%A1pido-para-el-kernel-de-linux-en-camino/
---

El ingeniero de Intel Feng Tang habl&oacute; en la Conferencia de Plomeros de Linux de esta semana en Lisboa, Portugal, sobre c&oacute;mo el equipo de Clear Linux logr&oacute; arrancar su kernel m&aacute;s r&aacute;pido. Comenzaron con un tiempo de arranque de kernel de aproximadamente tres segundos, pero lo redujeron a solo 300 ms.

Entre las optimizaciones llevadas a cabo para acelerar realmente su tiempo de arranque se encontraban garantizar una mayor exploraci&oacute;n asíncrona del controlador, solo inicializando una peque&ntilde;a cantidad de RAM al inicio y luego, despu&eacute;s del arranque en caliente, el resto en paralelo a trav&eacute;s de systemd, sistema de archivos raíz optimizado montaje, desactivaci&oacute;n de m&oacute;dulos innecesarios del n&uacute;cleo y enfoques similares.

En el futuro, todavía est&aacute;n buscando optimizaciones para el proceso de arranque en torno a la inicializaci&oacute;n de memoria diferida en el n&uacute;cleo, los cambios de inicializaci&oacute;n de SMP, los ajustes de ACPI y las optimizaciones de espacio de usuario / systemd.

Aquellos que quieran aprender m&aacute;s sobre el arte de Intel para arrancar el kernel de Linux lo m&aacute;s r&aacute;pido posible, pero no en LPC2019, pueden ver [la plataforma de diapositivas de Feng](https://www.linuxplumbersconf.org/event/4/contributions/281/attachments/216/435/LPC_2019_kernel_fastboot_on_the_way.pdf) (PDF) con una descripci&oacute;n general de estas optimizaciones Clear Linux actuales y posibles.

[📰 Ver la Noticia Completa](https://www.phoronix.com/scan.php?page=news_item&px=Clear-Linux-Kernel-3s-to-300ms){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**\: [C&oacute;mo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms](https://www.phoronix.com/scan.php?page=news_item&amp;px=Clear-Linux-Kernel-3s-to-300ms "Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms")