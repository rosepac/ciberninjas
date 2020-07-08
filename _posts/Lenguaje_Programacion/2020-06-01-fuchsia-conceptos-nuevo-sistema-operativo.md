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

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#índice-){: .btn .btn--inverse .btn--large .align-center}

> 🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/)
{: .notice--danger}

## **Qué es Fuchsia**

Del Rosa más el Púrpura, nace el Fuchsia. Fuchsia, es un nuevo sistema operativo basado en código abierto que actualmente está desarrollado por Google.

Primero se dio a conocer al público cuando el proyecto apareció en un repositorio de git alojada en agosto de 2016 sin ningún anuncio oficial.

La documentación de la fuente oficial de Fuchsia describe las razones de su nombre, "rosa más púrpura == fuchsia: Un nuevo sistema operativo" referenciando mediante los colores a otros sistemas operativos.

El Rosa de Apple, por ser el primer microkernel orientado a objetos y el púrpura, nombre del código original del iPhone; en diferencia de los sistemas operativos anteriores de Google como Android y Chrome OS (basados en el kernel de Linux) el nuevo sistema operativo Fuchsia, se basa en un nuevo microkernel llamado Zircon, denominado así por el mineral de mismo nombre.

Fuchsia se enfoca en poder ser funcional dentro de varios dispositivos y plataformas diferentes, desde ordenadores de sobremesa hasta teléfonos inteligentes.

El 1 de julio de 2019, Google anunció la página de inicio del proyecto, fuchsia.dev, que proporciona el código fuente y la documentación para el sistema operativo recientemente anunciaod; y está, es la página principal del nuevo sistema operativo.

## **Introducción a Fuchsia**

¡Bienvenido a Fuchsia! Esta guía tiene todo lo que necesita para comenzar a usar Fuchsia.

**Nota:** La fuente Fuchsia incluye [Zircon](https://fuchsia.googlesource.com/fuchsia/+/master/zircon/README.md){:target="_blank" rel="nofollow,noreferrer"}, la plataforma central que sustenta a Fuchsia. Para trabajar en Zircon, consulte [Introducción a Zircon](https://fuchsia.dev/docs/development/kernel/getting_started){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## Obtén el código fuente de Fuchsia

Para descargar el código fuente Fuchsia y configurar su entorno de compilación, siga las instrucciones en [Obtener código fuente Fuchsia](https://fuchsia.dev/docs/development/source_code/README){:target="_blank" rel="nofollow,noreferrer"}.

## **Configurar y construir Fuchsia**

Para construir Fuchsia, debes poder ejecutar el comando `fx` en la terminal.

**Nota:** Si no ha configurado su entorno de compilación, consulte [Configuración de variables de entorno](https://fuchsia.dev/docs/development/source_code/README#set-up-environment-variables){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}

### **Establecer configuración de compilación**

Para establecer su configuración de compilación, ejecute el siguiente comando:

```
fx set core.x64
```

El comando `fx set` toma un argumento `PRODUCT.BOARD`, que define la configuración del [producto y la placa](https://fuchsia.dev/docs/concepts/build_system/boards_and_products){:target="_blank" rel="nofollow,noreferrer"} de su compilación. Esta configuración informa al sistema de compilación qué paquetes construir para su dispositivo Fuchsia. `core` es un producto con un conjunto mínimo de características, que incluye capacidades comunes de red. `x64` se refiere a la arquitectura x64.

Consulte como [configurar una compilación](https://fuchsia.dev/docs/development/build/fx#configure-a-build){:target="_blank" rel="nofollow,noreferrer"} para obtener más opciones.

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

#### **Acelera la construcción con ccache**

**Nota:** Este paso es opcional.
{: .notice--info}

Para acelerar las compilaciones Fuchsias, puedes usar [`ccache`](https://ccache.dev/){:target="_blank" rel="nofollow,noreferrer"} para almacenar en caché los artefactos de compilaciones anteriores.

Para usar `ccache` en Linux, instale el siguiente paquete:

```
sudo apt-get install ccache
```

Para macOS, consulte [Uso de CCache en Mac](https://chromium.googlesource.com/chromium/src.git/+/master/docs/ccache_mac.md){:target="_blank" rel="nofollow,noreferrer"} para obtener instrucciones de instalación.

`ccache` se habilita automáticamente si su `CCACHE_DIR` variable de entorno se refiere a un directorio existente.

Para anular el comportamiento predeterminado, pase los siguientes indicadores a `fx set`:

- Forzar el uso de ccache incluso si hay otros aceleradores disponibles:

```
fx set core.x64 --ccache
```

- Deshabilitar el uso de ccache:

```
fx set core.x64 --no-ccache
```

### **Construir Fuchsia**

Para construir Fuchsia, ejecuta el siguiente comando:

```
fx build
```

El `fx build` comando ejecuta la compilación para transformar el código fuente en paquetes y otros artefactos de compilación.

Si modifica el código fuente, vuelva a ejecutar el comando `fx build` para realizar una compilación incremental o ejecute el comando `fx -i build` para iniciar un observador, que se compila automáticamente cada vez que se actualiza el código fuente.

Consulte como [ejecutar una compilación](https://fuchsia.dev/docs/development/build/fx#execute-a-build){:target="_blank" rel="nofollow,noreferrer"} para obtener más información.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#índice-){: .btn .btn--inverse .btn--large .align-center}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Configurar un dispositivo Fuchsia**

Para ejecutar Fuchsia en un dispositivo, instale Fuchsia en hardware o use un emulador.

### **Instalar Fuchsia en hardware**

Para que Fuchsia se ejecute en hardware, consulte como [Instalar Fuchsia en un dispositivo](https://fuchsia.dev/docs/development/hardware/paving){:target="_blank" rel="nofollow,noreferrer"}.

### **Configurar el emulador**

Si no tiene hardware compatible, puedes ejecutar Fuchsia sobre un emulador usando [FEMU](https://fuchsia.dev/docs/development/run/femu){:target="_blank" rel="nofollow,noreferrer"}.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#índice-){: .btn .btn--inverse .btn--large .align-center}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

#### **Configurar la red**

Para asegurarte de que el software efímero de Fuchsia funcione en el emulador, debe configurar una red IPv6.

#### **Linux**

Si deseas habilitar la creación de redes en FEMU, debes ejecutar los siguientes comandos:

```
sudo ip tuntap add dev qemu mode tap user $USER
sudo ip link set qemu up
```

#### **Mac OS**

[Debe](http://tuntaposx.sourceforge.net/index.xhtml) instalar [TunTap](http://tuntaposx.sourceforge.net/index.xhtml) , extensiones de kernel que permiten a macOS crear interfaces de red virtuales.

Para macOS 10.9 (Mavericks) y 10.10 (Yosemite), instale TunTap usando este [paquete de instalación](http://tuntaposx.sourceforge.net/download.xhtml) .

Para macOS 10.13 (High Sierra) y versiones posteriores, haga lo siguiente:

1. Instalar [Homebrew](https://brew.sh/){:target="_blank" rel="nofollow,noreferrer"}:

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2. Instalar TunTap:

```
$ brew cask install tuntap
```

La instalación de TunTap puede fallar al principio; en ese caso, puedes tratar de realizar lo siguiente:

1. Abrir las `Preferencias del Sistema`.

2. Posteriormente abrir la sección de `Privacidad y Seguridad` y seleccionar la pestaña `General`.

3. Junto al mensaje de `System software from developer "Mattias Nissler" was blocked from loading.` haz clic en **Permitir** (consulte [Carga de la extensión del kernel aprobada por](https://developer.apple.com/library/archive/technotes/tn2459/_index.html){:target="_blank" rel="nofollow,noreferrer"} el [usuario](https://developer.apple.com/library/archive/technotes/tn2459/_index.html){:target="_blank" rel="nofollow,noreferrer"} de Apple para más detalles).

4. Prueba a ejecutar el comando de instalación nuevamente:

```
$ brew cask install tuntap
```

Después de instalar TunTap, ejecute el siguiente comando:

```
$ sudo chown $USER /dev/tap0
```

#### **Iniciar el emulador de Fuchsia**

Para iniciar el emulador con las redes habilitadas, ejecute el siguiente comando:

```
$ fx emu -N
```

**Nota:** Si necesita conectarte a Internet desde el emulador, configure el reenvío de IP y la compatibilidad con IPv4 en la interfaz TAP del emulador.
{: .notice--info}

## **Pavimentar el dispositivo con Fuchsia**

En una nueva terminal, pavimente el dispositivo con su imagen Fuchsia:

```
$ fx serve
```

Consulte [Servir una compilación](https://fuchsia.dev/docs/development/build/fx#serve-a-build){:target="_blank" rel="nofollow,noreferrer"} para obtener más información.

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#índice-){: .btn .btn--inverse .btn--large .align-center}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Explorar Fuchsia**

Cuando se inicia Fuchsia y muestra la solicitud `$` en el shell, ahora puede ejecutar [componentes](https://fuchsia.dev/docs/concepts/components){:target="_blank" rel="nofollow,noreferrer"}. En Fuchsia, los componentes son la unidad básica del software ejecutable.

Para ejecutar componentes en su dispositivo Fuchsia, consulte [Ejecutar un componente de ejemplo](https://fuchsia.dev/docs/development/run/run-examples){:target="_blank" rel="nofollow,noreferrer"}.

### **Ejecutar comandos de shell**

Para apagar o reiniciar Fuchsia, use los siguientes comandos `dm` en el shell:

```
dm shutdown
dm reboot
```

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

[🔖 Ir al Índice](/sistema-operativo-fuchsia-conceptos/#índice-){: .btn .btn--inverse .btn--large .align-center}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Ejecutar pruebas**

Para probar Fuchsia en su dispositivo, consulte [Ejecución de pruebas como componentes](https://fuchsia.dev/docs/development/testing/running_tests_as_components){:target="_blank" rel="nofollow,noreferrer"}.

## **Lanzar un componente gráfico**

La mayoría de los componentes gráficos en Fuchsia usan el compositor del sistema [Scenic](https://fuchsia.dev/docs/concepts/graphics/scenic/scenic){:target="_blank" rel="nofollow,noreferrer"}. Puede iniciar dichos componentes (comúnmente encontrados en `/system/apps`) usando el comando `present_view`, por ejemplo:

```
present_view fuchsia-pkg://fuchsia.com/spinning_square_view#meta/spinning_square_view.cmx
```

Ver [aplicaciones de ejemplo escénicas](https://fuchsia.googlesource.com/fuchsia/+/master/src/ui/examples){:target="_blank" rel="nofollow,noreferrer"}.

Si inicia un componente que utiliza gráficos escénicos o acelerados por hardware, Fuchsia ingresa al modo de gráficos, que no muestra el shell. Para usar el shell, presione `Alt+Escape` para ingresar al modo consola. En el modo de consola, `Alt+Tab` tiene el mismo comportamiento descrito en [Seleccionar una pestaña](https://fuchsia.dev/fuchsia-src/getting_started#select-a-tab){:target="_blank" rel="nofollow,noreferrer"}. Presione `Alt+Escape` nuevamente para regresar al modo de gráficos.

### Licencia

Este contenido se encuentra bajo licencia **[Apache 2.0](https://es.wikipedia.org/wiki/Apache_License "Licencia Apache 2.0")** y Creative Commons 4.0.

**Fuente**\: [Conceptos del Sistema Operativo Fuchsia](https://fuchsia.dev/fuchsia-src/concepts "Conceptos del Sistema Operativo Fuchsia"){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}

> 🔥 Seguro también te interesa: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}

### Índice <!-- omit in toc -->
- [**Qué es Fuchsia**](#qué-es-fuchsia)
- [**Introducción a Fuchsia**](#introducción-a-fuchsia)
- [Obtén el código fuente de Fuchsia](#obtén-el-código-fuente-de-fuchsia)
- [**Configurar y construir Fuchsia**](#configurar-y-construir-fuchsia)
  - [**Establecer configuración de compilación**](#establecer-configuración-de-compilación)
    - [**Acelera la construcción con ccache**](#acelera-la-construcción-con-ccache)
  - [**Construir Fuchsia**](#construir-fuchsia)
- [**Configurar un dispositivo Fuchsia**](#configurar-un-dispositivo-fuchsia)
  - [**Instalar Fuchsia en hardware**](#instalar-fuchsia-en-hardware)
  - [**Configurar el emulador**](#configurar-el-emulador)
    - [**Configurar la red**](#configurar-la-red)
    - [**Linux**](#linux)
    - [**Mac OS**](#mac-os)
    - [**Iniciar el emulador de Fuchsia**](#iniciar-el-emulador-de-fuchsia)
- [**Pavimentar el dispositivo con Fuchsia**](#pavimentar-el-dispositivo-con-fuchsia)
- [**Explorar Fuchsia**](#explorar-fuchsia)
  - [**Ejecutar comandos de shell**](#ejecutar-comandos-de-shell)
  - [**Seleccionar una pestaña**](#seleccionar-una-pestaña)
- [**Ejecutar pruebas**](#ejecutar-pruebas)
- [**Lanzar un componente gráfico**](#lanzar-un-componente-gráfico)
  - [Licencia](#licencia)

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--info .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

