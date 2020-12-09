---

author: rosepac
bootstrap: true
comments: false
tags:
- Fuchsia
categories:
- Sistema Operativo
thumbnail: /assets/img/blog/fuchsia-so.webp
feature-img: /assets/img/blog/fuchsia-so.webp
title: '¿Qué es Fuchsia y cuáles son sus conceptos más importantes?'
description: >-
  En el interior de esta guía vas a encontrar la introducción más extensa al nuevo sistema operativo de Fuchsia, así como un comienzo a su desarrollo y programación.
excerpt: >-
  En el interior de esta guía vas a encontrar la introducción más extensa al nuevo sistema operativo de Fuchsia, así como un comienzo a su desarrollo y programación.
canonical_URL: https://ciberninjas.com/sistema-operativo-fuchsia-conceptos/
permalink: /sistema-operativo-fuchsia-conceptos/
date: 2020-06-02 18:32:32
last_modified_at: 
published: true

---

En el interior de esta guía vas a encontrar la introducción más extensa al nuevo sistema operativo de Fuchsia, así como un comienzo a su desarrollo y programación.

![¿Qué es Fuchsia y cuáles son sus conceptos más importantes?](/assets/img/blog/fuchsia-so.webp)

Fuchsia se dio a conocer por primera vez al público cuando el proyecto apareció en una forma auto alojada de git en agosto de 2016 sin ningún anuncio oficial.

<span id="menu"><strong>CONOCE TODO SOBRE FUCHSIA</strong></span>

- [**¿Qué es Fuchsia?**](#qué-es-fuchsia)
- [**La Historia de Fuchsia**](#la-historia-de-fuchsia)
- [**El Kernel Zircon de Fuchsia**](#el-kernel-zircon-de-fuchsia)
- [**Introducción a Fuchsia**](#introducción-a-fuchsia)
- [**Obtén el código fuente de Fuchsia**](#obtén-el-código-fuente-de-fuchsia)
- [**Configurar y construir Fuchsia**](#configurar-y-construir-fuchsia)
  - [**Establecer configuración de compilación**](#establecer-configuración-de-compilación)
    - [**Acelera la construcción con Ccache**](#acelera-la-construcción-con-ccache)
  - [**Construir Fuchsia**](#construir-fuchsia)
- [**Configurar un dispositivo Fuchsia**](#configurar-un-dispositivo-fuchsia)
  - [**Instalar Fuchsia en hardware**](#instalar-fuchsia-en-hardware)
  - [**Configurar el emulador**](#configurar-el-emulador)
    - [**Configurar la red**](#configurar-la-red)
    - [**Linux**](#linux)
    - [**Mac OS**](#mac-os)
    - [**Iniciar el emulador de Fuchsia**](#iniciar-el-emulador-de-fuchsia)
- [**Flashear procesos para un dispositivo con Fuchsia**](#flashear-procesos-para-un-dispositivo-con-fuchsia)
- [**Explorar Fuchsia**](#explorar-fuchsia)
  - [**Ejecutar comandos de shell**](#ejecutar-comandos-de-shell)
  - [**Seleccionar una pestaña**](#seleccionar-una-pestaña)
- [**Ejecutar pruebas**](#ejecutar-pruebas)
- [**Lanzar un componente gráfico**](#lanzar-un-componente-gráfico)

> 🔥 Quizás también te interese: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/)
{: .notice--danger}

## **¿Qué es Fuchsia?**

Del Rosa al Púrpura, nace el Fuchsia. Fuchsia, es un nuevo sistema operativo basado en código abierto que actualmente está desarrollado por Google. Primero se dio a conocer al público cuando el proyecto apareció en un repositorio de git alojada en agosto de 2016 sin ningún anuncio oficial.

La documentación de la fuente oficial de Fuchsia describe las razones de su nombre, "rosa más púrpura == fuchsia: Un nuevo sistema operativo" haciendo referencia a colores de otros sistemas operativos.

El Rosa de Apple, por ser el primer microkernel orientado a objetos y el púrpura, nombre del código original del iPhone; en diferencia de los sistemas operativos anteriores de Google como Android y Chrome OS (basados en el kernel de Linux).

El nuevo sistema operativo Fuchsia, se basa en un nuevo microkernel llamado Zircon, denominado así por el mineral que lleva el mismo nombre.

Fuchsia se enfoca en poder ser funcional dentro de varios dispositivos y plataformas diferentes, desde el ordenador de sobremesa hasta los teléfonos inteligentes.

El 1 de julio de 2019, Google anunció la página de inicio del proyecto, [fuchsia.dev](https://fuchsia.dev/){:target="_blank" rel="nofollow,noreferrer"}, que proporciona el código fuente y la documentación para el sistema operativo recientemente anunciada.

## **La Historia de Fuchsia**

En agosto de 2016, los medios de comunicación informaron sobre una misteriosa publicación de código base publicada en GitHub, revelando que Google estaba desarrollando un nuevo sistema operativo llamado "Fuchsia". No se hizo ningún anuncio oficial, pero la inspección del código sugirió su capacidad para ejecutarse en dispositivos universales, incluidos "sistemas de información y entretenimiento en el tablero para automóviles, dispositivos integrados como semáforos y relojes digitales, hasta teléfonos inteligentes, tabletas y PC".

El código difiere de Android y Chrome OS debido a que se basa en el kernel Zircon (anteriormente llamado Magenta) en lugar del kernel de Linux.

En mayo de 2017, Ars Technica escribió sobre la nueva interfaz de usuario de Fuchsia, una actualización de su interfaz de línea de comandos en su primera revelación en agosto, junto con un desarrollador que escribió que Fuchsia "no es una cosa de juguete, no es un proyecto del 20% , no es un vertedero de una cosa muerta que ya no nos importa".

Varios medios de comunicación escribieron sobre los vínculos aparentemente estrechos del proyecto con Android, y algunos especulan que Fuchsia podría ser un esfuerzo por "rehacer" o reemplazar Android, de forma que solucione los problemas de la plataforma de Android.

En enero de 2018, Google publicó una guía sobre cómo ejecutar Fuchsia en Pixelbook, y eso fue seguido con éxito por el reconocido blog de Ars Technica.

Se agregó un "dispositivo" Fuchsia al ecosistema de Android en enero de 2019 a través del Proyecto de [código abierto de Android (AOSP)](https://ciberninjas.com/open-gapps-aplicaciones-google-flaheables/).

Google habló sobre Fuchsia en Google I/O 2019. Hiroshi Lockheimer, vicepresidente senior de Chrome y Android, describió a Fuchsia como uno de los experimentos de Google más importantes en torno a nuevos conceptos para sistemas operativos.

El 1 de julio de 2019, Google anunció el sitio web oficial del proyecto de desarrollo que proporciona el código fuente y la documentación para el sistema operativo.

## **El Kernel Zircon de Fuchsia**

Fuchsia se basa en un nuevo núcleo de transmisión de mensajes llamado Zircon. El proyecto lo describe como un micronúcleo y no como un microkernel en diferentes partes de su documentación. El código base de Zircon se derivó del de Little Kernel (LK), un kernel en tiempo real para dispositivos integrados, destinado a un bajo consumo de recursos, para ser utilizado en una amplia variedad de dispositivos.

Little Kernel fue desarrollado por Travis Geiselbrecht, quien también fue coautor del kernel NewOS utilizado por Haiku.

Zircon está escrito principalmente en C++, con algunas partes en lenguaje ensamblador. Está compuesto por un kernel con un pequeño conjunto de servicios de usuario, controladores y bibliotecas que son todos necesarios para que el sistema arranque, se comunique con el hardware y cargue los procesos del usuario.

Zircon presenta características que incluyen, el manejo de subprocesos, la memoria virtual, la intercomunicación de procesos y la espera de cambios en el estado de los objetos.

El Kernel de Zircon parece estar muy inspirado en los kernels de Unix, pero difiere mucho de estos. Por ejemplo, no es compatible con señales similares a Unix, pero incorpora la programación dirigida a través de eventos y el patrón de observador; y la mayoría de las llamadas al sistema no bloquean el hilo principal y los recursos se representan como objetos en lugar de archivos, a diferencia de los sistemas de Unix tradicionales.

## **Introducción a Fuchsia**

¡Bienvenido a Fuchsia! Esta guía tiene todo lo que necesitas para comenzar a usar Fuchsia.

**Nota:** La fuente de código de Fuchsia incluye: [Zircon](https://fuchsia.dev/fuchsia-src/concepts/kernel){:target="_blank" rel="nofollow,noreferrer"}, la plataforma central que sustenta a Fuchsia. Para trabajar en Zircon, consulta la [Introducción a Zircon](https://fuchsia.dev/docs/development/kernel/getting_started){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<br />

## **Obtén el código fuente de Fuchsia**

Para descargar el código fuente de Fuchsia y configurar su entorno de compilación, sigue las instrucciones desde el [repositorio de código oficial](https://fuchsia.dev/fuchsia-src/get-started/get_fuchsia_source){:target="_blank" rel="nofollow,noreferrer"}.

## **Configurar y construir Fuchsia**

Para configurar y construir Fuchsia, debes [poder ejecutar el comando `fx` en la terminal](https://fuchsia.dev/fuchsia-src/development/build/fx){:target="_blank" rel="nofollow,noreferrer"}.

**Nota:** Si no ha configurado el entorno de compilación, consulta la [Configuración de variables del entorno en Fuchsia](https://fuchsia.dev/fuchsia-src/development/build/toolchain){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}

### **Establecer configuración de compilación**

Para establecer su configuración de compilación, ejecuta el siguiente comando:

{% highlight js %}
fx set core.x64
{% endhighlight %}

El comando `fx set` toma un argumento `PRODUCT.BOARD`, que define la configuración del [producto y la placa](https://fuchsia.dev/fuchsia-src/concepts/build_system/boards_and_products){:target="_blank" rel="nofollow,noreferrer"} de su compilación. Esta configuración informa al sistema de compilación qué paquetes construir para su dispositivo Fuchsia. `core` es un producto con un conjunto mínimo de características, que incluye capacidades comunes de red. `x64` se refiere a la arquitectura x64.

Consulte como [configurar una compilación](https://fuchsia.dev/docs/development/build/fx#configure-a-build){:target="_blank" rel="nofollow,noreferrer"} para obtener más opciones.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<br />

#### **Acelera la construcción con Ccache**

> **Nota:** Este paso es opcional.

Para acelerar las compilaciones del Sistema Operativo de Fuchsia, puedes usar [`ccache`](https://ccache.dev/){:target="_blank" rel="nofollow,noreferrer"} para almacenar en caché los artefactos de las compilaciones anteriores.

> Ccache (o "ccache") es un caché de compilador. ¿Qué hace Ccache? Ccache acelera la recopilación de almacenamiento en caché de compilaciones anteriores y detectar cuando la misma compilación se está haciendo de nuevo. Ccache es un software gratuito, publicado bajo la GNU General Public License versión 3 o posterior. Consulte también la página de licencias.

Si deseas utilizar `ccache` en Linux, instala el siguiente paquete:

{% highlight js %}
sudo apt-get install ccache
{% endhighlight %}

Si deseas instalar `ccache` en MacOS, consulta [el uso de CCache en Mac](https://chromium.googlesource.com/chromium/src.git/+/master/docs/ccache_mac.md){:target="_blank" rel="nofollow,noreferrer"} para obtener instrucciones de instalación.

El `ccache` se habilita automáticamente si su variable de entorno `CCACHE_DIR` se refiere a un directorio existente. Para anular el comportamiento predeterminado, pase los siguientes indicadores a `fx set`:

- Forzar el uso de ccache incluso si hay otros aceleradores disponibles:

{% highlight js %}
fx set core.x64 --ccache
{% endhighlight %}

- Deshabilitar el uso de ccache:

{% highlight js %}
fx set core.x64 --no-ccache
{% endhighlight %}

### **Construir Fuchsia**

Para la construcción de Fuchsia, ejecuta el siguiente comando:

{% highlight js %}
fx build
{% endhighlight %}

El `fx build` comando ejecuta la compilación para transformar el código fuente en paquetes y otros artefactos de compilación.

Si modifica el código fuente, vuelva a ejecutar el comando `fx build` para realizar una compilación incremental o ejecute el comando `fx -i build` para iniciar un observador, que se compila automáticamente cada vez que se actualiza el código fuente.

Consulte como [ejecutar una compilación](https://fuchsia.dev/docs/development/build/fx#execute-a-build){:target="_blank" rel="nofollow,noreferrer"} para obtener más información.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#menu){: .btn .btn--inverse .btn--large .align-center}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<br />

## **Configurar un dispositivo Fuchsia**

Para ejecutar Fuchsia en un dispositivo, instale el código de Fuchsia en el hardware o use un emulador.

### **Instalar Fuchsia en hardware**

Para que Fuchsia se ejecute en hardware, consulta como [Instalar Fuchsia en un dispositivo](https://fuchsia.dev/docs/development/hardware/paving){:target="_blank" rel="nofollow,noreferrer"}.

### **Configurar el emulador**

Si no tiene hardware compatible, puedes ejecutar Fuchsia sobre un emulador usando [FEMU](https://fuchsia.dev/fuchsia-src/concepts/emulator){:target="_blank" rel="nofollow,noreferrer"}.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#menu){: .btn .btn--inverse .btn--large .align-center}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<br />

#### **Configurar la red**

Para asegurarte de que el software efímero de Fuchsia funcione en el emulador, debe configurar una red IPv6.

#### **Linux**

Si deseas habilitar la creación de redes en FEMU, debes ejecutar los siguientes comandos:

{% highlight js %}
sudo ip tuntap add dev qemu mode tap user $USER
sudo ip link set qemu up
{% endhighlight %}

#### **Mac OS**

[Debe](http://tuntaposx.sourceforge.net/index.xhtml) instalar [TunTap](http://tuntaposx.sourceforge.net/index.xhtml) , extensiones de kernel que permiten a macOS crear interfaces de red virtuales.

Para macOS 10.9 (Mavericks) y 10.10 (Yosemite), instale TunTap usando este [paquete de instalación](http://tuntaposx.sourceforge.net/download.xhtml) .

Para macOS 10.13 (High Sierra) y versiones posteriores, haga lo siguiente:

1. Instalar [Homebrew](https://brew.sh/){:target="_blank" rel="nofollow,noreferrer"}:

{% highlight js %}
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
{% endhighlight %}

1. Instalar TunTap:

{% highlight js %}
$ brew cask install tuntap
{% endhighlight %}

La instalación de TunTap puede fallar al principio; en ese caso, puedes tratar de realizar lo siguiente:

1. Abrir las `Preferencias del Sistema`.

2. Posteriormente abrir la sección de `Privacidad y Seguridad` y seleccionar la pestaña `General`.

3. Junto al mensaje de `System software from developer "Mattias Nissler" was blocked from loading.` haz clic en **Permitir** (consulte [Carga de la extensión del kernel aprobada por](https://developer.apple.com/library/archive/technotes/tn2459/_index.html){:target="_blank" rel="nofollow,noreferrer"} el [usuario](https://developer.apple.com/library/archive/technotes/tn2459/_index.html){:target="_blank" rel="nofollow,noreferrer"} de Apple para más detalles).

4. Prueba a ejecutar el comando de instalación nuevamente:

{% highlight js %}
$ brew cask install tuntap
{% endhighlight %}

Después de instalar TunTap, ejecute el siguiente comando:

{% highlight js %}
$ sudo chown $USER /dev/tap0
{% endhighlight %}

#### **Iniciar el emulador de Fuchsia**

Para iniciar el emulador con las redes habilitadas, ejecute el siguiente comando:

{% highlight js %}
$ fx emu -N
{% endhighlight %}

**Nota:** Si necesita conectarte a Internet desde el emulador, configure el reenvío de IP y la compatibilidad con IPv4 en la interfaz TAP del emulador.
{: .notice--info}

## **Flashear procesos para un dispositivo con Fuchsia**

En una nueva terminal, flashea el dispositivo con una imagen de Fuchsia:

{% highlight js %}
$ fx serve
{% endhighlight %}

Consulta, como [servir una compilación](https://fuchsia.dev/docs/development/build/fx#serve-a-build){:target="_blank" rel="nofollow,noreferrer"} para obtener más información.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#menu){: .btn .btn--inverse .btn--large .align-center}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<br />

## **Explorar Fuchsia**

Cuando se inicia Fuchsia y muestra la solicitud `$` en el shell, ahora puede ejecutar [componentes](https://fuchsia.dev/docs/concepts/components){:target="_blank" rel="nofollow,noreferrer"}. En Fuchsia, los componentes son la unidad básica del software ejecutable.

Para ejecutar componentes en su dispositivo Fuchsia, consulte [Ejecutar un componente de ejemplo](https://fuchsia.dev/docs/development/run/run-examples){:target="_blank" rel="nofollow,noreferrer"}.

### **Ejecutar comandos de shell**

Para apagar o reiniciar Fuchsia, use los siguientes comandos `dm` en el shell:

{% highlight js %}
dm shutdown
dm reboot
{% endhighlight %}

Consulte [Conectarse a un shell de destino](https://fuchsia.dev/docs/development/build/fx#connect-to-a-target-shell){:target="_blank" rel="nofollow,noreferrer"} para obtener más información.

### **Seleccionar una pestaña**

Fuchsia muestra múltiples pestañas en el caparazón. En la parte superior de la pantalla, la pestaña seleccionada actualmente se resalta en amarillo.

Los siguientes métodos abreviados de teclado lo ayudan a navegar por el terminal:

- Alt + Tab cambia entre pestañas.
- Alt + F {1,2, ...} cambia directamente a una pestaña.
	- La pestaña cero es la consola, que muestra el inicio y el registro de componentes.
	- Las pestañas 1, 2 y 3 contienen conchas.
	- Las pestañas 4 y superiores contienen componentes que has lanzado.
- Alt + Arriba / Abajo se desplaza hacia arriba y hacia abajo por líneas.
- Shift + PgUp / PgDown se desplaza hacia arriba y hacia abajo media página.
- Ctrl + Alt + Eliminar reinicios.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#menu){: .btn .btn--inverse .btn--large .align-center}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
<br />

## **Ejecutar pruebas**

Para probar Fuchsia en su dispositivo, consulte [Ejecución de pruebas como componentes](https://fuchsia.dev/docs/development/testing/running_tests_as_components){:target="_blank" rel="nofollow,noreferrer"}.

## **Lanzar un componente gráfico**

La mayoría de los componentes gráficos en Fuchsia usan el compositor del sistema [Scenic](https://fuchsia.dev/docs/concepts/graphics/scenic/scenic){:target="_blank" rel="nofollow,noreferrer"}. Puede iniciar dichos componentes (comúnmente encontrados en `/system/apps`) usando el comando `present_view`, por ejemplo:

{% highlight js %}
present_view fuchsia-pkg://fuchsia.com/spinning_square_view#meta/spinning_square_view.cmx
{% endhighlight %}

Ver [aplicaciones de ejemplo escénicas](https://fuchsia.googlesource.com/fuchsia/+/master/src/ui/examples){:target="_blank" rel="nofollow,noreferrer"}.

Si inicia un componente que utiliza gráficos escénicos o acelerados por hardware, Fuchsia ingresa al modo de gráficos, que no muestra el shell. Para usar el shell, presione `Alt+Escape` para ingresar al modo consola. En el modo de consola, `Alt+Tab` tiene el mismo comportamiento descrito en [Seleccionar una pestaña](https://fuchsia.dev/fuchsia-src/getting_started#select-a-tab){:target="_blank" rel="nofollow,noreferrer"}. Presione `Alt+Escape` nuevamente para regresar al modo de gráficos.

### Licencia <!-- omit in toc -->

Este contenido se encuentra bajo licencia **[Apache 2.0](https://es.wikipedia.org/wiki/Apache_License "Licencia Apache 2.0")** y Creative Commons 4.0.

**Fuente**: [Conceptos del Sistema Operativo Fuchsia](https://fuchsia.dev/fuchsia-src/concepts "Conceptos del Sistema Operativo Fuchsia"){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}

> 🔥 Quizás te interese: [Cómo aprender Python 2021](/python/ "Cómo aprender Python 2021"), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning 2021](/que-aprender-sobre-machine-learning-2020/ "Cómo aprender aprendizaje automático o machine learning 2021"), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}