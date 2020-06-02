---
title: "\U0001F4F0 \U0001F4BB Arranque Rápido para el Kernel de Linux en Camino"
description: "\U0001F4BB Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms, por Feng Tang"
excerpt: "\U0001F4BB Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms, por Feng Tang"
date: 2019-09-15 17:25:00 +0200
published: true
categories:
  - Actualidad
  - Software
link: >-
  https://www.phoronix.com/scan.php?page=news_item&px=Clear-Linux-Kernel-3s-to-300ms
tags:
  - Sistemas Operativos
  - Linux
header:
  overlay_image: 'https://fossbytes.com/wp-content/uploads/2017/01/clear-linux-steam.jpg'
  overlay_filter: '0.2'
  image_description: Captura de Pantalla realizada por FossBytes.com | Ciberninjas
  caption: '**Créditos**: Foto de [FossBytes](https://fossbytes.com)'
---

El ingeniero de Intel Feng Tang habl&oacute; en la Conferencia de Plomeros de Linux de esta semana en Lisboa, Portugal, sobre c&oacute;mo el equipo de Clear Linux logr&oacute; arrancar su kernel m&aacute;s r&aacute;pido. Comenzaron con un tiempo de arranque de kernel de aproximadamente tres segundos, pero lo redujeron a solo 300 ms.

Entre las optimizaciones llevadas a cabo para acelerar realmente su tiempo de arranque se encontraban garantizar una mayor exploraci&oacute;n as&iacute;ncrona del controlador, solo inicializando una peque&ntilde;a cantidad de RAM al inicio y luego, despu&eacute;s del arranque en caliente, el resto en paralelo a trav&eacute;s de systemd, sistema de archivos ra&iacute;z optimizado montaje, desactivaci&oacute;n de m&oacute;dulos innecesarios del n&uacute;cleo y enfoques similares.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9630764103400456"
     data-ad-slot="3229974124"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

En el futuro, todav&iacute;a est&aacute;n buscando optimizaciones para el proceso de arranque en torno a la inicializaci&oacute;n de memoria diferida en el n&uacute;cleo, los cambios de inicializaci&oacute;n de SMP, los ajustes de ACPI y las optimizaciones de espacio de usuario / systemd.

Aquellos que quieran aprender m&aacute;s sobre el arte de Intel para arrancar el kernel de Linux lo m&aacute;s r&aacute;pido posible, pero no en LPC2019, pueden ver [la plataforma de diapositivas de Feng](https://www.linuxplumbersconf.org/event/4/contributions/281/attachments/216/435/LPC_2019_kernel_fastboot_on_the_way.pdf) (PDF) con una descripci&oacute;n general de estas optimizaciones Clear Linux actuales y posibles.

**Fuente**\: [C&oacute;mo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms](https://www.phoronix.com/scan.php?page=news_item&amp;px=Clear-Linux-Kernel-3s-to-300ms "Cómo el equipo Clear Linux de Intel redujo el tiempo de arranque del kernel de 3 segundos a 300 ms")
{: .notice--info}

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9630764103400456"
     data-ad-slot="3229974124"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}