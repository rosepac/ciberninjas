---

author: rosepac
bootstrap: true
comments: false
tags:
- Windows 10
categories:
- Software
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

El sistema operativo Windows 10 incorpora una serie de aplicaciones integradas: calendario, cliente de correo electrónico, reproductor de música, etc. Te gustarán algunos, otros los considerarás absolutamente inútiles. Pero deshacerse de ellos no es tan fácil si no conoce el método descrito en este artículo.

Cada versión del sistema operativo de Microsoft está equipado con un conjunto completo de software preinstalado, que, tal como lo concibieron los desarrolladores, debería permitir a los usuarios comenzar de inmediato. Sin embargo, en realidad, muy pocas personas usan estos programas para los fines previstos, y generalmente solo ocupan espacio en disco. En Windows 10, las llamadas aplicaciones universales se agregaron al conjunto tradicional de utilidades: "Calendario", "Correo", "Noticias", "Mapas", "Cámara" y otros.

Algunas de estas aplicaciones se pueden eliminar fácilmente directamente desde el menú de inicio. Para hacer esto, haga clic en "Inicio", busque el mosaico de la aplicación universal que no necesita, haga clic derecho sobre él y seleccione el elemento "Eliminar".

Pero de esta manera puede decir adiós solo a un número limitado de programas. Para eliminar el resto, debes hacer un poco de magia con la línea de comando. Aquí hay una guía paso a paso para ayudarlo a eliminar programas como 3D Builder, Cámara, Música Groove, Fotos y más de Windows 10.

1. Haga clic en el icono de búsqueda en la barra de tareas e ingrese PowerShell.

2. En los resultados de búsqueda, seleccione la línea Windows PowerShell (aplicación clásica), haga clic derecho sobre ella y luego haga clic en el elemento "Ejecutar como administrador" en el menú contextual.

3. Aparece una ventana con un cursor de línea de comando parpadeante. Para eliminar el programa universal de Windows 10, debe copiar y pegar un comando especial y luego presionar "Enter".

**Visor 3D**

```
Get-AppxPackage *3d* | Remove-AppxPackage
```

**Cámara**

```
Get-AppxPackage *camera* | Remove-AppxPackage
```

**Correo y calendario**

```
Get-AppxPackage *communi* | Remove-AppxPackage
```

**Dinero, deportes, noticias**

```
Get-AppxPackage *bing* | Remove-AppxPackage
```

**Música groove**

```
Get-AppxPackage *zune* | Remove-AppxPackage
```

**Compañero de teléfono**

```
Get-AppxPackage *phone* | Remove-AppxPackage
```

**Fotos**

```
Get-AppxPackage *photo* | Remove-AppxPackage
```

**Colección de solitario**

```
Get-AppxPackage *solit* | Remove-AppxPackage
```

**Grabadora de voz**

```
Get-AppxPackage *soundrec* | Remove-AppxPackage
```

**Xbox**

```
Get-AppxPackage *x-box* | Remove-AppxPackage
```

**Mapas**

```
Get-AppxPackage * mapas * | Remove-AppxPackage
```

**Alarmas**

```
Get-AppxPackage * alarmas * | Remove-AppxPackage
```

Puede recuperar cualquiera de los programas eliminados utilizando la tienda de aplicaciones de la Tienda Windows. Si encuentra algún problema, inicie PowerShell nuevamente e ingrese un comando que devuelva todo el conjunto de utilidades preinstaladas a su lugar.

`Get-AppXPackage | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$ ($ _. InstallLocation) \ AppXManifest.xml"}`

Si deseas seguir optimizando tu sistema operativo de Windows 10 puedes seguir leyendo, sobre como [deshabilitar aplicaciones inservibles de Windows 10](https://ciberninjas.com/8-componentes-eliminar-de-windows/).

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Windows 10 tiene una serie de aplicaciones integradas. Y deshacerse de ellos no es tan simple. Este método lo ayudará a desinstalar aplicaciones integradas en Windows 10.](/assets/img/2020-news/aplicaciones-windows.webp "Windows 10 tiene una serie de aplicaciones integradas. Y deshacerse de ellos no es tan simple. Este método lo ayudará a desinstalar aplicaciones integradas en Windows 10.")