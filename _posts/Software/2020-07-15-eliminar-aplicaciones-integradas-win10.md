---

author: rosepac
bootstrap: true
comments: false
tags:
- Software
- Windows
- Optimizar Windows
thumbnail: /assets/img/2020-news/aplicaciones-windows.webp
feature-img: /assets/img/2020-news/aplicaciones-windows.webp
title: '▷ Cómo eliminar aplicaciones integradas en Windows 10'
description: >-
  Windows 10 tiene una serie de aplicaciones integradas. Y deshacerse de ellos no es tan simple. Este método lo ayudará a desinstalar aplicaciones integradas en Windows 10.
excerpt: >-
  Windows 10 tiene una serie de aplicaciones integradas. Y deshacerse de ellos no es tan simple. Este método lo ayudará a desinstalar aplicaciones integradas en Windows 10.
canonical_URL: https://ciberninjas.com/eliminar-aplicaciones-integradas-win10/
permalink: /eliminar-aplicaciones-integradas-win10/
date: 2020-07-15 09:12:32
last_modified_at: 
published: true

---

El sistema operativo Windows 10 incorpora una serie de aplicaciones integradas: calendario, cliente de correo electrónico, reproductor de música, etc. Te gustarán algunos, pero otras las considerarás absolutamente inútiles; pero a veces no es fácil deshacerse de ellas.

En este artículo vas a conocer la fórmula adecuada de como desinstalarlas sin problemas.

Como ya sabes, cada versión del sistema operativo de Microsoft está equipado con un conjunto completo de software preinstalado, tal y como lo concibieron los desarrolladores, deberían ser aplicaciones que permitan a los usuarios realizar las actividades mínimas necesarias de inmediato.

Sin embargo, en realidad, muy pocas personas usan estos programas para los fines para las que fueron diseñadas y generalmente solamente ocupan espacio del disco, las llamadas aplicaciones universales se agregaron al conjunto tradicional de utilidades de un usuario "normal" enfocado en la ofimática: como el calendario, el correo, las noticias", los mapas, la cámara y muchas más.

Algunas de estas aplicaciones se pueden eliminar fácilmente directamente desde el menú de inicio; para hacerlo, solamente haz Clic en "Inicio", busca el icono de la aplicación universal que no necesitas y haz Clic sobre el botón derecho del icono; para posteriormente, presionar la opción de "Eliminar".

Más, a través de estos pasos, solamente podrás deshacerte de un número limitado de programas. Si deseas eliminar el resto, debes hacer un poco de magia a través de la línea de comando. A continuación, vamos a ver paso a paso, como eliminar los programas de 3D Builder, la Cámara, la app de música Groove, la app de fotos y algunas otras aplicaciones de Windows 10.

1. Haz Clic en el icono de búsqueda en la barra de tareas y busca la consola de PowerShell.

2. En los resultados de búsqueda, selecciona la aplicación de Windows PowerShell y haz Clic -botón derecho- sobre ella y luego haz Clic en la opción de "Ejecutar como administrador" en el menú contextual.

3. Aparecerá una ventana con un cursor de línea de comandos parpadeando, para eliminar cada aplicación universal de Windows 10, debes copiar y pegar los comandos que se especifican a continuación y luego presionar "Enter".

**Visor 3D**

`Get-AppxPackage *3d* | Remove-AppxPackage`

**Cámara**

`Get-AppxPackage *camera* | Remove-AppxPackage`

**Correo y calendario**

`Get-AppxPackage *communi* | Remove-AppxPackage`

**Dinero, deportes, noticias**

`Get-AppxPackage *bing* | Remove-AppxPackage`

**Música groove**

`Get-AppxPackage *zune* | Remove-AppxPackage`

**Compañero de teléfono**

`Get-AppxPackage *phone* | Remove-AppxPackage`

**Fotos**

`Get-AppxPackage *photo* | Remove-AppxPackage`

**Colección de solitario**

`Get-AppxPackage *solit* | Remove-AppxPackage`

**Grabadora de voz**

`Get-AppxPackage *soundrec* | Remove-AppxPackage`

**Xbox**

`Get-AppxPackage *x-box* | Remove-AppxPackage`

**Mapas**

`Get-AppxPackage * maps* | Remove-AppxPackage`

**Alarmas**

`Get-AppxPackage * alarms* | Remove-AppxPackage`

Si lo deseas, puedes recuperar cualquiera de los programas eliminados utilizando la tienda de aplicaciones de Windows. Si encuentras algún problema, puedes iniciar nuevamente la consola de PowerShell e ingresar el comando siguiente que devolverá todas las utilidades preinstaladas a tu sistema operativo. El comando es el siguiente:

`Get-AppXPackage | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$ ($ _. InstallLocation) \ AppXManifest.xml"}`

Si deseas seguir optimizando tu sistema operativo de Windows 10 puedes seguir leyendo, sobre como [deshabilitar aplicaciones inservibles](https://ciberninjas.com/8-componentes-eliminar-de-windows/). de Windows 10.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Windows 10 tiene una serie de aplicaciones integradas. Y deshacerse de ellos no es tan simple. Este método lo ayudará a desinstalar aplicaciones integradas en Windows 10.](/assets/img/2020-news/aplicaciones-windows.webp "Windows 10 tiene una serie de aplicaciones integradas. Y deshacerse de ellos no es tan simple. Este método lo ayudará a desinstalar aplicaciones integradas en Windows 10.")