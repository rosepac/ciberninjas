---

author: rosepac
bootstrap: true
comments: false
tags:
- 
thumbnail: /assets/img/2020/10/adobe-xd-1.webp
feature-img: /assets/img/2020/10/adobe-xd-1.webp
title: '▷ Adobe XD para Visual Studio Code: Crea y revisualiza paquetes de sistemas de diseño'
description: >-
  La nueva extensión de Adobe XD para Visual Studio Code permite a los desarrolladores mapear visualmente las fuentes de diseño creadas en XD y disponibles en las Bibliotecas Creative Cloud, al código específico de la plataforma utilizando tokens de diseño.
excerpt: >-
  La nueva extensión de Adobe XD para Visual Studio Code permite a los desarrolladores mapear visualmente las fuentes de diseño creadas en XD y disponibles en las Bibliotecas Creative Cloud, al código específico de la plataforma utilizando tokens de diseño.
canonical_URL: https://ciberninjas.com/adobe-xd-en-vsc/
permalink: /adobe-xd-en-vsc/
date: 2020-10-26 09:36:32
last_modified_at: 
published: true

---

Una nueva e impresionante **extensión de Adobe XD para Visual Studio Code**, nos permite utilizar Adobe XD sin salir del editor.

Los **sistemas de diseño son el vínculo entre diseño y el desarrollo**. Para construir un sistema exitoso, personalizado y ampliamente adoptado, tanto los diseñadores como los desarrolladores deben tener un hueco a la hora de la creación.

La **nueva extensión de Adobe XD para Visual Studio Code** permite a los desarrolladores mapear visualmente las fuentes de diseño, creadas en Adobe XD y disponibles en las Bibliotecas de Creative Cloud, al código específico de la plataforma utilizando tokens de diseño.

Los **equipos de DesignOps podrán crear paquetes de sistemas de diseño (DSP) compartibles** que contienen toda la información que los desarrolladores necesitan consumir durante la codificación, incluidos fragmentos de código y documentación.

- [**Características de la Extensión de Adobe XD**](#características-de-la-extensión-de-adobe-xd)
- [**¿Qué es un paquete de sistema de diseño o DSP?**](#qué-es-un-paquete-de-sistema-de-diseño-o-dsp)
  - [**¿Qué formato forma un paquete DSP?**](#qué-formato-forma-un-paquete-dsp)
  - [**¿Cuál es la estructura de un paquete DSP?**](#cuál-es-la-estructura-de-un-paquete-dsp)
    - [**El archivo dsp.json**](#el-archivo-dspjson)
  - [**¿Cómo usar un paquete DSP a través de NPM?**](#cómo-usar-un-paquete-dsp-a-través-de-npm)
  - [**Uso de NPM para distribuir tu paquete DSP**](#uso-de-npm-para-distribuir-tu-paquete-dsp)
- [**DSP y herramientas públicas disponibles**](#dsp-y-herramientas-públicas-disponibles)
  - [**Adobe Spectrum DSP**](#adobe-spectrum-dsp)
    - [**¿Cómo instalar Adobe Spectrum DSP?**](#cómo-instalar-adobe-spectrum-dsp)
    - [**¿Cómo puedo utilizar el paquete Adobe Spectrum DSP?**](#cómo-puedo-utilizar-el-paquete-adobe-spectrum-dsp)
    - [**¿Qué hay en el paquete de Adobe Spectrum DSP?**](#qué-hay-en-el-paquete-de-adobe-spectrum-dsp)
    - [**¿Dónde puedo descargar Adobe Spectrum DSP?**](#dónde-puedo-descargar-adobe-spectrum-dsp)
  - [**Simplificador de Iconos DSP**](#simplificador-de-iconos-dsp)
    - [**¿Cómo descargar el paquete de Iconos en DSP?**](#cómo-descargar-el-paquete-de-iconos-en-dsp)
  - [**Bootstrap 5 DSP**](#bootstrap-5-dsp)
    - [**¿Cómo instalar el paquete de Bootstrap DSP?**](#cómo-instalar-el-paquete-de-bootstrap-dsp)
    - [**¿Cómo descargar el paquete de Bootstrap DSP?**](#cómo-descargar-el-paquete-de-bootstrap-dsp)
  - [**Drácula UI DSP**](#drácula-ui-dsp)
    - [**¿Cómo descargar Dracula UI?**](#cómo-descargar-dracula-ui)
  - [**Knapback**](#knapback)
    - [**¿Cómo instalar el paquete de Knapback?**](#cómo-instalar-el-paquete-de-knapback)
  - [**Specify**](#specify)
  - [**Material Design DSP**](#material-design-dsp)

## **Características de la Extensión de Adobe XD**

- **Introducción a los tokens de diseño**: Comprende qué son los tokens de diseño, qué hacen y cómo se compilan en un código específico de la plataforma.
- **Consumir un paquete de sistema de diseño (DSP) en VS Code**: Aprenda a cargar DSP para crear aplicaciones y sitios web, acceder a documentación, tokens de diseño y fragmentos de código, sin tener que salir de Visual Studio Code.
- **Design System Packages (DSP) Importación de activos desde bibliotecas**: Cree y administre sus DSP, visualmente. Y si importa desde las Bibliotecas Creative Cloud, obtendrá colores, estilos de caracteres y componentes XD en segundos.

## **¿Qué es un paquete de sistema de diseño o DSP?**

DSP es una nueva estructura de carpetas de formato abierto creada para ayudar a los equipos a compartir información del sistema de diseño entre herramientas.

### **¿Qué formato forma un paquete DSP?**

Un paquete de sistema de diseño (DSP) es una carpeta que contiene subcarpetas con activos y archivos JSON que representan información del sistema de diseño:

- Detalles del paquete (por ejemplo, número de versión, estado, idiomas / plataformas).
- Páginas de documentación (por ejemplo, introducción, principios).
- Tokens de diseño agnóstico como color, tamaño, personalizado (numérico, de cadena o booleano) y alias. Además de documentación en markdown y etiquetas para ayudar con la búsqueda.
- Colecciones de fichas, como fichas de tipografía (por ejemplo, familia, peso, tamaño). Así como documentación y etiquetas.
- Documentación de componentes que incluye secciones de rebajas con soporte para HTML básico (p. Ej., Img, iframe), tokens específicos de componentes, fragmentos de código y etiquetas.

### **¿Cuál es la estructura de un paquete DSP?**

Por ejemplo. Para los paquetes DSP de Adobe Spectrum. Los contenidos dentro del paquete son los siguientes:

- /assets
- /data
- /dist
- /ext
- dsp.json

#### **La carpeta de assets** <!-- omit in toc -->

Esta carpeta contiene todos los activos estáticos incluidos en el DSP, como archivos SVG o PNG.

#### **La carpeta data** <!-- omit in toc -->

Esta carpeta contiene todos los datos que componen el formato DSP. La carpeta no tiene archivos necesarios. Los ejemplos de archivos son components.json, docs.json, fonts.json y tokens.json.

#### **La carpeta dist** <!-- omit in toc -->

Esta carpeta contiene código específico de la plataforma generado por un sistema de compilación. Por ejemplo, la extensión Adobe XD para Visual Studio Code tiene Style Dictionary como su sistema de compilación. Ejemplos de carpetas creadas por un sistema de compilación son / android, / css y / styledictionary. Dist también contiene código no específico de la plataforma, como los archivos y carpetas de entrada del diccionario de estilos ( configuración y propiedades ).
<!-- https://github.com/AdobeXD/design-system-package-dsp -->

#### **La carpeta ext** <!-- omit in toc -->

Esta carpeta podría contener archivos escritos por herramientas de terceros. Sus subcarpetas deben seguir la convención de nombre de dominio inverso de "com_partner_name" (por ejemplo, para Adobe, la carpeta debe llamarse "com_adobe").

####  **El archivo dsp.json**

Este es el punto de entrada para el paquete de sistema de diseño (DSP). Incluye información, configuraciones e importaciones del paquete.

### **¿Cómo usar un paquete DSP a través de NPM?**

### **Uso de NPM para distribuir tu paquete DSP**

Si decide utilizar NPM para distribuir su paquete, agregue un archivo package.json a la carpeta raíz siguiendo [las instrucciones para publicar en NPM](https://zellwk.com/blog/publish-to-npm/ "Las instrucciones, paso a paso, con las que publicar en NPM"){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}. Un ejemplo es Adobe Spectrum DSP en npm, que se puede instalar en su proyecto con `npm install adobe-spectrum-dsp`.

Para iOS, puede explorar compartir los tokens usando [CocoaPods](https://cocoapods.org/){:target="_blank" rel="nofollow,noreferrer"}, y para Android puede explorar compartir los tokens como parte de un [Gradle](https://gradle.org/){:target="_blank" rel="nofollow,noreferrer"}.

## **DSP y herramientas públicas disponibles**

En la actualidad, ya existen, varios paquetes disponibles para su utilización y totalmente utilizables a travésde la extensión de Adobe XD para Visual Studio Code. Con el paso del tiempo, con seguridad el número de posibilidad irá aumentando con rapidez.

A continuación, vas a encontrar algunas de las herramientas, ya existentes:

### **Adobe Spectrum DSP**

> **Paquete del sistema de diseño de Adobe, que incluye fragmentos de código de React Spectrum.**

Adobe Spectrum Design System Package (DSP) beta, está basado en [espectrum.adobe.com](https://spectrum.adobe.com/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, que incluye tokens de diseño, colecciones tipográficas de tokens y componentes con fragmentos de código de [Spectrum React](https://react-spectrum.adobe.com/react-spectrum/index.html){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}.

#### **¿Cómo instalar Adobe Spectrum DSP?**

Para instalar Adobe Spectrum DSP en su proyecto, ejecute `npm install adobe-spectrum-dsp`.

#### **¿Cómo puedo utilizar el paquete Adobe Spectrum DSP?**

Utiliza la [extensión Adobe XD para VS Code](https://letsxd.com/vscode) para abrir este y otros DSP. Después de instalar Adobe Spectrum DSP con npm, abre la extensión Adobe XD para VS Code y selecciona `Load package`. Luego navega a tu carpeta `node_modules` y selecciona la carpeta `adobe-spectrum-dsp` (los DSP contienen un archivo dsp.json en el nivel raíz).

#### **¿Qué hay en el paquete de Adobe Spectrum DSP?**

Dentro del paquete vas a encontrar tokens de diseño compilados disponibles en /distAndroid, CSS, Flutter (Dart), iOS (Objective-C), iOS (Swift), JavaScript y SCSS. Además, de fragmentos de código disponibles como Spectrum CSS, Spectrum Web Components (HTML) y React Spectrum.

#### **¿Dónde puedo descargar Adobe Spectrum DSP?**

https://spectrum.adobe.com/page/spectrum-xd-plugin/

### **Simplificador de Iconos DSP**

> **1.285 iconos esenciales para interfaces móviles / web.**

Concentrate en la codificación. Inserta rápidamente 1.285 iconos en Visual Studio Code, utilizando estos paquete DSP gratuitos. Accede instantáneamente a los íconos con el teclado: Aprovecha la búsqueda instantánea, el autocompletar, y la vista previa en el propio código. ¿Y la mejor parte de todas? Es que es totalmente gratis 😄

- **Iconos esenciales para interfaces**: Después de instalar nuestro paquete DSP Streamline Symbols, obtendrá nuestros iconos altamente legibles disponibles en Visual Studio Code. ¡Simplemente comience a escribir "Streamline.." para insertarlos en una fracción de segundo!
- **Altamente legible y perfectamente elaborado**: Nuestros íconos de símbolos están diseñados en una pequeña cuadrícula de 14 píxeles, por lo que se pueden usar en un tamaño muy pequeño. Perfecto para usar en botones pequeños, menús laterales estrechos o incluso texto en línea. Diseñamos iconos desde 2010: obtendrá la calidad y la coherencia de una década de experiencia en el diseño de iconos ... ¡gratis!
- **Disponible como paquete de sistema de diseño / DSP**: Los sistemas de diseño son el vínculo entre diseño y desarrollo. Para construir un sistema exitoso, personalizado y ampliamente adoptado, tanto los diseñadores como los desarrolladores deben tener un asiento en la mesa.

La nueva extensión de Adobe XD para Visual Studio Code permite a los desarrolladores mapear visualmente las fuentes de diseño, creadas en XD y disponibles en las Bibliotecas Creative Cloud, al código específico de la plataforma utilizando tokens de diseño.

Los equipos de DesignOps podrán crear paquetes de sistemas de diseño (DSP) compartibles que contienen toda la información que los desarrolladores necesitan consumir durante la codificación, incluidos fragmentos de código y documentación.

#### **¿Cómo descargar el paquete de Iconos en DSP?**

https://www.streamlinehq.com/dsp

### **Bootstrap 5 DSP**

> **Componentes y fragmentos de código para la última biblioteca Bootstrap, creada por Foxbox Digital.**

Facilita aún más el desarrollo con Bootstrap 5 utilizando nuestro el paquete de sistema de diseño gratuito (DSP) para Visual Studio Code. Obtén acceso directo a los fragmentos de código y la documentación de Bootstrap con Intellisense directamente en el editor de VS Code.

Esto te va a permitir mantener el flujo de trabajo y concentrarte en el desarrollo, en lugar de tener que estar cambiando entre tu editor y el resto de documentos.

El paquete ofrece fragmentos de Bootstrap, HTML y React.

#### **¿Cómo instalar el paquete de Bootstrap DSP?**

Para instalar Adobe Bootstrap DSP en tu proyecto, ejecuta: `npm install @foxbox/adobe-bootstrap-dsp`.

#### **¿Cómo descargar el paquete de Bootstrap DSP?**

https://github.com/foxbox-digital/bootstrap-dsp

### **Drácula UI DSP**

> **Hermosos DSP del popular tema de primer color en modo oscuro.**

La colección de plantillas de modo oscuro Dracula, una de las extensiones más usadas del mundo para Visual Studio Code. También ha indicado ya, que está creando un paquete DSP.

Además, Drácula ofrece modos oscuros, para decenas de software diferentes.

#### **¿Cómo descargar Dracula UI?**

Desde la web oficial de la extensión, puedes encontrar las instrucciones de instalación, hasta para 100 diferentes software. Y muy pronto, también para DSP.

https://draculatheme.com/

### **Knapback**

> **Plataforma SaaS para unificar y administrar su sistema con exportación de código abierto a DSP.**

Compartir tu sistema de diseño impulsado por Knapsack nunca ha sido tan fácil. El formato Design System Package (DSP) hace que sea más fácil que nunca para los equipos compartir información del sistema de diseño entre plataformas, y la nueva y poderosa extensión XD de Adobe para VS Code permite a los ingenieros acceder al código del sistema actualizado, los activos y la documentación directamente desde dentro de su editor de código. Ahora, Knapsack permite a los equipos generar y mantener automáticamente un DSP actualizado de su sistema para que puedan hacer uso de estas asombrosas innovaciones.

Con el complemento Knapsack DSP, los ingenieros de VS Code pueden:

- Ver incrustaciones de componentes en vivo.
- Haga referencia a capturas de pantalla siempre actualizadas.
- Obtenga fragmentos de código para todos los marcos compatibles con su sistema de diseño.
- Consulte documentos pequeños sin salir de VS Code, o vea la versión completa en la experiencia web de Knapsack.
- Comparta colores, espaciado, tipografía y más con una profunda integración de tokens de diseño.
- Tenga la seguridad de que están trabajando con lo último porque Knapsack genera automáticamente un paquete de sistema de diseño siempre actualizado.

Una fuente central de verdad para tu sistema, disponible en contexto y siempre actualizada para que puedas construir sin reconstruir.

#### **¿Cómo instalar el paquete de Knapback?**

A día de hoy, deberás pedir acceso anticipado y solicitar una demostración del producto. Además, de mostrar tu interés por el mismo, para poder comprobar su funcionamiento.

### **Specify**

> **Genere y distribuya DSP de forma automática.**

Actualmente, parece estar caído. Por lo que no he podido tener acceso a realizar su revisión; más. Se supone que esu na aplicaciíon, que sirve para difundir y compartir los paquetes DSP a través de diferentes plataformas online: Como por ejemplo, Github, Visual Studio Code, Google Drive y Adobe XD.

⚡ **Actualmente caído** https://specifyapp.com/dsp

### **Material Design DSP**

> **Próximamente un DSP para Material Design, que incluye tokens y componentes.**

El equipo de ya está trabajando en la creación de un paquete DSP centrado especifícamente en Material Design, y han decidido crear una [newsletter de Material Design](https://services.google.com/fb/forms/materialdesignnewsletter/){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}  para  estar informado de las nuevas actualizaciones al respcto.

### **Relacionados** <!-- omit in toc -->

[▷ 16 Mejores Cursos Gratis de UX, UI y Prototipado Web](https://ciberninjas.com/cursos-prototipado-ux-ui/ "16 Mejores Cursos Gratis de UX, UI y Prototipado Web")

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Adobe XD para Visual Studio Code: Crea y revisualiza paquetes de sistemas de diseño](/assets/img/2020/10/adobe-xd-1.webp "Adobe XD para Visual Studio Code: Crea y revisualiza paquetes de sistemas de diseño")