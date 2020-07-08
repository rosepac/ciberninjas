---

title: "IMSI"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: IMSI, Identidad Internacional del Abonado Móvil"
excerpt: "👨‍💻WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: IMSI, Identidad Internacional del Abonado Móvil"
date: 2019-10-09 23:56:07
last_modified_at: 2019-10-10 19:51:30
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
published: true
author: rosepac
bootstrap: true
layout: post
permalink: /wiki/imsi/
canonical_URL: https://ciberninjas.com/wiki/imsi/
feature-img: /assets/img/2020-news/fediverso.webp
img: /assets/img/2020-news/fediverso.webp
---

La Identidad Internacional del Abonado Móvil o IMSI es un número que identifica de forma única a cada usuario de una red celular. Se almacena como un campo de 64 bits y el dispositivo móvil lo envía a la red. También se utiliza para adquirir otros detalles del móvil en el registro de ubicación de la red (HLR) o como se copia localmente en el registro de ubicación del visitante. Para evitar que los espías identifiquen y rastreen al suscriptor mediante la interfaz de radio, el IMSI se envía bajo la menor frecuencia posible y en su lugar se envía un TMSI generado aleatoriamente.

El IMSI se usa en cualquier red móvil que se interconecte con otras redes. Para las redes GSM, UMTS y LTE, este número se aprovisionó en la tarjeta SIM y para las redes cdmaOne y CDMA2000, en el teléfono directamente o en la tarjeta R-UIM (el equivalente CDMA de la tarjeta SIM). Ambas tarjetas han sido reemplazadas por la UICC.

Un IMSI generalmente se presenta como un número de 15 dígitos, pero puede ser más corto. Por ejemplo, los antiguos IMSI de MTN Sudáfrica que todavía están en uso en el mercado tienen 14 dígitos de largo. Los primeros 3 dígitos representan el código de país móvil (MCC), seguido del código de red móvil (MNC), ya sea de 2 dígitos (estándar europeo) o de 3 dígitos (estándar norteamericano). La longitud del MNC depende del valor del MCC, y se recomienda que la longitud sea uniforme dentro de un área de MCC. Los dígitos restantes son el número de identificación de suscripción móvil (MSIN) dentro de la base de clientes de la red, generalmente de 9 a 10 dígitos de largo, dependiendo de la longitud de la MNC.

El IMSI cumple con el estándar de numeración ITU E.212.

Los IMSI a veces pueden confundirse con el ICCID, que es el identificador de la tarjeta SIM física en sí (o ahora la tarjeta SIM virtual si es una eSIM). El IMSI vive como parte del perfil (o uno de varios perfiles si la SIM y el operador admiten SIM multi-IMSI) en la SIM / ICCID.

## Análisis IMSI

El análisis IMSI es el proceso de examinar el IMSI de un suscriptor para identificar la red a la que pertenece el IMSI y si los suscriptores de esa red pueden usar una red determinada (si no son suscriptores locales, esto requiere un acuerdo de itinerancia).

Si el suscriptor no es de la red del proveedor, el IMSI debe convertirse a un título global, que luego puede usarse para acceder a los datos del suscriptor en el HLR remoto . Esto es principalmente importante para el roaming móvil internacional . Fuera de Norteamérica, el IMSI se convierte al formato de título global móvil (MGT), estándar E.214 , que es similar a un número E.164 . E.214 proporciona un método para convertir el IMSI en un número que puede usarse para enrutar a conmutadores SS7 internacionales . E.214 puede interpretarse como que implica que hay dos etapas separadas de conversión; primero determine el MCC y conviértalo al código de llamada de país E.164luego determine el MNC y conviértalo a código de red nacional para la red del operador. Pero este proceso no se utiliza en la práctica y la autoridad de numeración GSM ha declarado claramente que se utiliza un proceso de una etapa.

En Norteamérica, el IMSI se convierte directamente a un número E.212 sin modificación de su valor. Esto se puede enrutar directamente en las redes estadounidenses SS7.

Después de esta conversión, SCCP se utiliza para enviar el mensaje a su destino final. Para más detalles, consulte los Títulos Globales.

### Ejemplo Fuera del Área Mundial 1

Este ejemplo muestra la práctica real que no se describe claramente en las normas.

Regla de traducción:

* Números de coincidencia a partir de 28401 ( código de país móvil de Bulgaria + MobilTel MNC)
* Identificar esto como perteneciente a la red MobilTel-Bulgaria
* Eliminar los primeros cinco dígitos (longitud de MCC + MNC)
* Anteponer 35988 ( código de país E.164 de Bulgaria + un prefijo local búlgaro que llega a la red de MobilTel)
* Marque el número como teniendo un plan de numeración E.214.
* Enrutar mensaje en Título global a través de la red SCCP

Por lo tanto, 284011234567890 se convierte en 359881234567890 bajo el plan de numeración E.214.

Regla de traducción:

* Números de partidos que comienzan 310150 (América primero MCC + Cingular MNC)
* Eliminar los primeros seis dígitos (longitud de MCC + MNC)
* Anteponer 14054 ( código de país E.164 de América del Norte + código de red para Cingular) [ cita requerida ]
* Marque el número como teniendo un plan de numeración E.214.
* Enrutar mensaje en Título global a través de la red SCCP

Por lo tanto, 310150123456789 se convierte en 14054123456789 bajo el plan de numeración E.214.

El resultado es un Título global compatible con E.214 (el Indicador del plan de numeración se establece en 7 en el mensaje SCCP). Este número ahora se puede enviar a Global Title Analysis.

### Ejemplo Dentro del Área Mundial 1 (Ámerica del Norte) 

Regla de traducción:

* Número de partido a partir de 28401 (Bulgaria MCC + MobilTel MNC)
* Identificar esto como perteneciente a la red MobilTel-Bulgaria
* No altere los dígitos del número
* Marque el número como teniendo un plan de numeración E.212.
* Enrutar mensaje en Título global a través de la red SCCP

Por lo tanto, 284011234567890 se convierte en 284011234567890 bajo el plan de numeración E.212.

Este número tiene que convertirse en el límite de ANSI a ITU. Para más detalles, consulte los Títulos Globales.

## Identidad de la Red Doméstica

La identidad de la red doméstica (HNI) es la combinación de MCC y MNC. Este es el número que identifica completamente la red doméstica del suscriptor. Esta combinación también se conoce como PLMN.

## Enlaces externos

* [Artículo de "Perspectivas de redes celulares" en la revista Wireless Telecom](https://web.archive.org/web/20040607225011/http://www.cnp-wireless.com/ArticleArchive/Wireless Telecom/2001Q1WT.html){:target="_blank" rel="nofollow,noreferrer"}
* [Consejo de supervisión de IMSI responsable de asignar rangos de IMSI en los EE. UU.](http://www.atis.org/ATIS/IOC/iochom.htm){:target="_blank" rel="nofollow,noreferrer"}
* [Utilidad de búsqueda IMSI](https://www.numberingplans.com/?page=analysis&sub=imsinr){:target="_blank" rel="nofollow,noreferrer"}
* [Explicación de los planes de numeración GSM.](http://www.mib.net.ua/2008/03/gsm-numbering-plans-en.html){:target="_blank" rel="nofollow,noreferrer"}

**Categorías**: Identificadores Únicos \ 3GPP Estándares
{: .notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del 12 de septiembre de 2019, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=International_mobile_subscriber_identity&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}