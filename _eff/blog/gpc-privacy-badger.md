---
title: "▷ Anuncio del control de privacidad global en Privacy Badger"
description: "Hoy, anunciamos que el próximo lanzamiento de Privacy Badger admitirá el Control de privacidad global, o GPC, de forma predeterminada."
excerpt: "Hoy, anunciamos que el próximo lanzamiento de Privacy Badger admitirá el Control de privacidad global, o GPC, de forma predeterminada."
layout: post
permalink: /eff/gpc-privacy-badger/
canonical_URL: https://ciberninjas.com/eff/gpc-privacy-badger/
date: 2020-10-19
last_modified_at:
published: true
thumbnail: "/assets/img/eff/gpc-privacy-badger.webp"
feature-img: "/assets/img/eff/gpc-privacy-badger.webp"
img: "/assets/img/eff/gpc-privacy-badger.webp"
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
---

Hoy, anunciamos que el próximo lanzamiento de Privacy Badger admitirá el Control de privacidad global, o GPC, de forma predeterminada.

La [GPC es una nueva especificación](https://ciberninjas.com/union-privacidad-web/ "DuckDuckGo, la EFF y otros: Lanzan el Control de Privacidad Global para todo Internet") que permite a los usuarios informar a las empresas que les gustaría optar por no compartir o vender sus datos.

De forma predeterminada, Privacy Badger enviará la señal GPC a todas las empresas con las que interactúe junto con la señal No rastrear (DNT).

Al igual que DNT, GPC se transmite a través de un encabezado HTTP y una nueva propiedad de Javascript, por lo que cada servidor con el que habla su navegador y cada script que ejecuta sabrá que tiene la intención de optar por que sus datos no se compartan o vendan.

En comparación con los mecanismos de exclusión voluntaria respaldados por la industria publicitaria , GPC es simple, fácil de implementar y funciona bien con las herramientas de privacidad existentes.

## **DNT frente a GPC**

Do Not Track es un estándar web propuesto más antiguo, destinado a decirles a las empresas que no desea que lo rastreen de ninguna manera. (Obtenga más información sobre lo que queremos decir con "seguimiento" aquí). Privacy Badger se creó en torno a DNT y continuará enviando una señal DNT junto con cada solicitud que realice su navegador. Privacy Badger brinda a las empresas de terceros la oportunidad de cumplir con DNT mediante la adopción de la política DNT de EFF y bloquea aquellos que parecen estar rastreando de todos modos.

Si DNT ya expresa su intención de cancelar el seguimiento, ¿por qué necesitamos GPC? Cuando se desarrolló DNT, muchos sitios web simplemente ignoraron las solicitudes de los usuarios de no ser rastreados.

Es por eso que Privacy Badger tiene que actuar como un ejecutor: los rastreadores que no quieren cumplir con sus deseos son bloqueados. En la actualidad, los usuarios de muchas jurisdicciones, incluidas California, Nevada y la Zona Económica Europea, tienen el derecho legal de optar por no participar en algunos tipos de seguimiento. Ahí es donde entra en juego GPC.

GPC es un nuevo protocolo experimental para comunicar solicitudes de exclusión voluntaria que se alinean con las leyes de privacidad. Por ejemplo, la Ley de Privacidad del Consumidor de California otorga a los residentes de California el derecho a optar por no vender sus datos.

Al enviar la señal de GPC, Privacy Badger le dice a las empresas que le gustaría ejercer sus derechos. Y mientras Privacy Badger solo aplica el cumplimiento de DNT contra dominios de terceros, GPC se aplica a todos : los sitios de origen que visita y cualquier rastreador de terceros al que puedan invitar.

GPC es una propuesta nueva y aún no se ha estandarizado, por lo que muchos sitios no la respetarán de inmediato. Con el tiempo, esperamos que GPC represente una solicitud legalmente vinculante para todas las empresas en lugares con leyes de privacidad aplicables.

## **Para detener el seguimiento, primero pregunte y luego actúe**

La CCPA y otras leyes no son perfectas y muchos de nuestros usuarios continúan viviendo en lugares sin fuertes protecciones legales. Es por eso que Privacy Badger continúa utilizando ambos enfoques de privacidad.

Solicita a los sitios web que respeten su privacidad, utilizando GPC como una solicitud oficial según las leyes aplicables y DNT para expresar lo que nuestros usuarios realmente quieren (optar por no realizar ningún seguimiento). Luego bloquea a los rastreadores conocidos, que se niegan a cumplir con DNT, para que no se carguen.

A partir de esta versión, Privacy Badger comenzará a configurar la señal GPC de forma predeterminada. Los usuarios pueden optar por no enviar esta señal, junto con DNT, en su configuración de Privacy Badger. Además, los usuarios pueden deshabilitar Privacy Badger en sitios propios individuales para dejar de enviar la señal GPC a esos sitios.

![Anuncio del control de privacidad global en Privacy Badger](/assets/img/eff/gpc-privacy-badger.webp "Anuncio del control de privacidad global en Privacy Badger")

[📢 Leer Más de la EFF](/eff/){: .btn .btn--warning .btn--large .align-center}

> **Licencia**: El contenido siguiente se encuentra bajo licencia [Creative Commons 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es) propiedad original en inglés de la [EFF](https://www.eff.org/gpc-privacy-badger) tanto texto como las imágenes. Si desea utilizarlo, en todo momento el contenido debe estar bajo la misma licencia.
> 
> **Info. Legal**: Este contenido debe dar reconocimientos a [Pablo Álvarez Corredera o Ciberninjas](https://kutt.it/ciberninjas) como creador primario del contenido en español; además de a la [EFF](https://kutt.it/eff) como creador original del mismo.