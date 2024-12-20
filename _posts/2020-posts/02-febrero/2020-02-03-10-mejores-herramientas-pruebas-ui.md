---

author: rosepac
bootstrap: true
title: "▷ Las 11 Mejores Herramientas de Automatización de Pruebas para Interfaces de Usuario 2021"
description: "Vamos a conocer las mejores tecnologías de realización de pruebas automatizadas sobre UI: Como Selenium, Appium, Junit, CodedUI, Etc."
excerpt: "Vamos a conocer las mejores tecnologías de realización de pruebas automatizadas sobre UI: Como Selenium, Appium, Junit, CodedUI, Etc."
published: true
comments: false
date: 2020-11-06 09:15:12
last_modified_at: 
thumbnail: /assets/img/blog/ui-testing.webp
feature-img: /assets/img/blog/ui-testing.webp
permalink: /10-mejores-herramientas-pruebas-ui/
canonical_URL: https://ciberninjas.com/10-mejores-herramientas-pruebas-ui/
tags:
- Herramientas
- Interfaz de Usuario
- Testing
- Selenium
- Appium
- CodedUI
- TAST
- UFT
- Protactor
- Winium
- Katalon
- Xamarin
- MS UI
- WinAppDriver

---

¿Eres un profesional del testing y las pruebas de software? Si es así, ¿Qué herramienta de pruebas utilizas?

Como la mayoría de las personas cuando comienzan en el control de calidad. es posible que tenga que dominar solo una o dos herramientas de prueba porque estás restringido a lo que estás utilizando en la empresa.

Cualquiera que sea la razón, si usted es un profesional experimentado, puede beneficiarse de tener una visión más amplia de lo que existe en el mercado de herramientas de prueba de software a nivel empresarial.

Si usted es un recién llegado a la automatización del control de calidad, el objetivo de esta guía sería brindarle orientación para encontrar una buena herramienta que satisfaga sus necesidades de prueba.

Enumeraré las herramientas de prueba más comunes y populares, qué características las hacen populares y sus limitaciones.

![Gráfica de las herramientas de pruebas más usadas durante el 2016](/assets/img/blog/empresas-grafica.webp "Gráfica de las herramientas de pruebas más usadas durante el 2016")

La lista a continuación muestra las herramientas de automatización de UI más comunes utilizadas para las pruebas de regresión y automatización de pruebas funcionales (sin orden particular), sus descripciones y algunas características beneficiosas o perjudiciales de los mismos.

<span id="menu"><strong>Las 11 Mejores Herramientas de Automatización de Pruebas</strong></span>

- [**1. Selenium**](#1-selenium)
  - [**Pros de Selenium**](#pros-de-selenium)
- [**2. Protactor**](#2-protactor)
- [**3. Appium**](#3-appium)
- [**4. Winium**](#4-winium)
- [**5. TAST**](#5-tast)
  - [**Pros de TAST**](#pros-de-tast)
- [**6. WinAppDriver**](#6-winappdriver)
- [**7. MS UI**](#7-ms-ui)
- [**8. Test Complete**](#8-test-complete)
  - [**Pros de Test Complete**](#pros-de-test-complete)
- [**9. Katalon Studio**](#9-katalon-studio)
  - [**Pros de Katalon**](#pros-de-katalon)
- [**10. Micro Focus UFT**](#10-micro-focus-uft)
  - [**Pros de UFT**](#pros-de-uft)
- [**11. Xamarin Test Studio**](#11-xamarin-test-studio)
- [**Derivados de Selenium**](#derivados-de-selenium)
  - [Selendroid](#selendroid)
  - [Robotium](#robotium)
- [**Otras Alternativas**](#otras-alternativas)
  - [Tosca UI](#tosca-ui)
  - [Rational Quality Manager de IBM](#rational-quality-manager-de-ibm)

## **1. Selenium**

![Selenium logotipo visto en Ciberninjas](https://i.ibb.co/pznq8Sz/selenium-logo-large.png "Selenium logotipo")

Selenium ha existido desde 2004, pero no puede compararse como producto similar a UFT hasta 2008-2010. Se ha convertido progresivamente en el estándar de la industria desde entonces debido a su flexibilidad para ser utilizado en varios IDE de terceros y al uso de algunos de los lenguajes de programación modernos más populares. Es compatible con la mayoría de los navegadores web y sistemas operativos, pero no se puede usar para pruebas de escritorio.

Selenium WebDriver es el componente principal de esta oferta, pero también existe Selenium IDE que ayuda a grabar y reproducir scripts en una vista declarativa más fácil de usar y Selenium Remote Control and Grid que permite la ejecución remota de múltiples pruebas en paralelo.

### **Pros de Selenium**

* Admite lenguajes de programación OOP modernos como C #, Groovy, Java, Perl, PHP, Python, Ruby y Scala.
* Se puede usar desde IDE de terceros como Visual Studio, Eclipse.
* Es de código abierto y puede encontrar muchos sabores, bibliotecas y proyectos derivados para ayudarlo a automatizar casi cualquier tecnología.
* Ejecución de prueba remota.
* Server Hub que permite la ejecución remota de pruebas de múltiples pruebas en paralelo.
* No estoy seguro de si es un Pro o Con pero: en cuanto a la integración de ALM, se integra bien con Jira, Jenkins e incluso VS Team Services, sin embargo, esta integración no es tan sencilla como otras alternativas in-stack (CodedUI con VSTS o UTC con Quality Center )
* Se ejecuta en Windows, Linux y Mac.

### **Contras de Selenium** <!-- omit in toc -->

* En comparación con UFT e incluso CodedUi, requiere habilidades para instalar, usar e integrar con otras herramientas.
* Selenium tiene un IDE (un complemento de navegador solo para Firefox) que supuestamente ayuda a grabar acciones, editar y reproducir, pero se sabe que no es confiable y se anunció que será obsoleto. Aparte de eso, no tiene un IDE real para ayudarlo a grabar o editar scripts de manera visual / declarativa. Los probadores tienen que escribir manualmente scripts de prueba desde su propio IDE (Visual Studio, Eclipse, etc.) y, por lo tanto, Selenium requiere más habilidades de programación. Tampoco hay una función de informe o corredor de prueba, se basa en el corredor de su IDE. El repositorio de objetos UI debe implementarse manualmente.
* Las pruebas de selenio son de alguna manera más inestables en comparación con otras herramientas de prueba, lo que dificulta a los desarrolladores crear scripts automáticos sólidos. Sin embargo, las buenas pruebas mantenibles se pueden lograr con buenas prácticas de desarrollo.
* Al igual que con otras ofertas de código abierto, la herramienta es compatible con las comunidades y no con una empresa, por lo que es posible que los errores no se solucionen de inmediato.
* En general, requiere más habilidades de programación que UFT e incluso CodedUi (porque CodedUI tiene algunas características IDE que lo ayudan a editar scripts).

[⬇ Descargar Selenium](https://www.seleniumhq.org/projects/webdriver/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar Selenium"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **2. Protactor**

![Protactor logotipo oficial, visto en Ciberninjas](https://i.ibb.co/7pSZtd7/0-6-Ibx8-TM6-Ei8vq-Z3n.jpg "Protactor logotipo oficial, visto en Ciberninjas")

Protractor es un framework de pruebas de extremo a extremo para aplicaciones Angular y AngularJS, se basa y se ejecuta sobre Selenium. Está diseñado específicamente para identificar elementos web de JavaScript y AngularJS, ya que Selenium tiene problemas con estos elementos y sus atributos personalizados.

Además, Protactor, también gestiona las esperas automáticamente, algo que la aplicación de Selenium también tiene dificultades para hacer con Angular JS.

Debes de tener en cuenta, que Protector es un proyecto comunitario en evolución, la mayoría de la documentación existente es obsoleta, por lo que debes resolver los problemas por ti mismo la mayor parte de las veces.

[⬇ Instalar Protactor](http://www.protractortest.org/#/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar e instalar Protactor"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **3. Appium**

![Appium logotipo oficial, visto en Ciberninjas](https://i.ibb.co/ftdby62/Appium-Logo.jpg "Appium logotipo oficial, visto en Ciberninjas")

Appium es una herramienta de automatización de interfaz de usuario basada en Selenium para aplicaciones móviles, nativas o híbridas en iOS y Android.

Este es un proyecto bastante desarrollado que tiene su propio IDE que incluye un emulador, un inspector de elementos de la interfaz de usuario, etc., aún necesitaría escribir y editar sus scripts en su propio IDE (VS, Eclipse, etc.).

Es compatible con Selenium Grid, por lo que es posible la ejecución de pruebas paralelas en hosts remotos.

A tener en cuenta, que la automatización de la interfaz de usuario móvil tiene una configuración inicial más compleja, debe poder instalar y configurar los SDK del sistema operativo móvil, descargar y configurar emuladores de dispositivos, desarrollo en iOS, poder aprovisionar el código, etc. Esto es cierto para todas las pruebas móviles no solo para Appium (por ejemplo, la prueba de interfaz de usuario Xamarin tienen los mismos obstáculos iniciales).

[⬇ Descargar Appium](http://appium.io/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Appium"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **4. Winium**

![Winium logotipo ofificial, visto en Ciberninjas](https://i.ibb.co/f0cnbHf/windows-phone-and-desktop-test-automation-london-september-2015-1-638.jpg "Winium logotipo ofificial, visto en Ciberninjas")

Winium también basado en Selenium es un framework de automatización de interfaz de usuario diseñado para probar aplicaciones de escritorio en Windows.

Al igual que Selenium, es de código abierto, compatible con la comunidad (que tiene sus propios pros y contras como se indicó anteriormente).

Es compatible con WinForms, WPF, aplicaciones universales (Tienda Windows) e incluso aplicaciones Silverlight. Una limitación principal es que solo admite trabajar sobre Windows 10.

A tener en cuenta:

Winium es un proyecto reciente y no es tan maduro como otras ofertas de automatización de la interfaz de usuario de escritorio, la gente se queja de tener problemas con la API y tener que recurrir a una solución híbrida (por ejemplo, mezclarla con CodedUI).

[⬇ Descargar Winium](https://github.com/2gis/Winium.Desktop#winium-for-desktop){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Winium"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **5. TAST**

![Logotipo del Framework Tast, herramienta de automatización de pruebas de origen español](/assets/img/2020/tast-logo.webp)

El framework TAST (Test Automation System Tool) es una herramienta completa de automatización de pruebas, creada por la empresa española SIPSA en 2018.

SIPSA, se centra en proporcionar los mejores servicios posibles a aquellas empresas que buscan agilizar y automatizar, cada uno de los procesos necesarios a la hora de testear una aplicación o software.

Bajo la búsqueda de explotar al máximo el potencial de los diagramas de secuencia / UML, desde SIPSA nos ofrecen una aplicación creada alrededor del uso de esos diagramas.

Logrando así, una corta y sencilla curva de aprendizaje de la herramienta, en todos aquellos desarrolladores que ya estén familiarizados con los diagramas de UML (que deberían de ser tod@s).

TAST ofrece entre otros servicios, una perfecta integración de Selenium, Selenium Grid y Appium, de forma interna. Además, de la posibilidad, de poder integrar JIRA, ALM, TestRail o TestLink.

### **Pros de TAST**

- Disponible y funcional en cualquier sistema operativo (Windows, Linux, MacOS).
- Una rápida curva de aprendizaje.
- Acepta la realización de pruebas de extremo a extremo.
- Integración con otras herramientas de gestión de pruebas.

[⬇ Probar TAST](https://www.sipsa.net/en/tast/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Consulta y pide presupuesto para probar TAST"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **6. WinAppDriver**

WinAppDriver es un framework de prueba desarrollado por Microsoft como un proyecto de código abierto, es una implementación de Appium que es principalmente un framework de aplicación móvil, basado en Selenium. Por lo tanto, WinAppDriver es un framework de automatización similar a Selenium. Este proyecto combina lo mejor de dos mundos, por un lado encapsula la mayor parte de la tecnología de la ahora obsoleta CodedUI y la fusiona con la flexibilidad, facilidad de uso y adopción de Selenium.

Al igual que Selenium, WinAppDriver es un conjunto de bibliotecas que se pueden integrar en cualquier Test Runner que admita Appium. Por ejemplo, los scripts de WinAppDriver se pueden desarrollar y ejecutar con MSTest de Visual Studio.

A diferencia de la automatización de la interfaz de usuario web, cuando se trabaja con aplicaciones de escritorio, hay más variaciones en las tecnologías que podrían haberse utilizado para desarrollar la aplicación que está probando. Esto tiene un impacto en la capacidad del conjunto de herramientas para identificar y realizar acciones en un elemento de IU dado:

* **UWP** : plataforma universal de Windows, también conocida como aplicaciones universales o aplicaciones modernas, es la última tecnología de aplicaciones de escritorio de Microsoft. Está basado en XAML. Solo se ejecuta en máquinas con Windows 10
* **WPF** : también basado en XAML, mucho más maduro, se ejecuta en cualquier versión de Windows y existe desde 2006.
* **WinForms:** una de las tecnologías más antiguas, que ahora se encuentra principalmente en aplicaciones heredadas.
* **MFC / Windows clásico:** MFC es una biblioteca de interfaz de usuario normalmente emparejada con aplicaciones Win32. Esta opción normalmente se elige cuando se necesita más eficiencia con el manejo de C ++ de bajo nivel o cuando se admiten plataformas que no son de Microsoft.

UI Automation (UIA) y Microsoft Active Accessibility (MSAA) son dos tecnologías de accesibilidad de nivel inferior que se utilizan para proporcionar acceso a los elementos de la interfaz de usuario. MSAA ahora es una biblioteca heredada, mientras que UIA es más nueva y más capaz. UIA es un framework de accesibilidad, no un framework de prueba y no está destinado a ser utilizado como tal.

Ambas tecnologías están ahora bajo el capó de WinAppDriver, por lo que WinAppDriver es totalmente compatible con las tecnologías de escritorio enumeradas anteriormente (UWP, WPF, Winforms y MFC).

[⬇ Descargar WinAppDriver](https://github.com/microsoft/WinAppDriver/releases/tag/v1.1){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar WinAppDriver"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **7. MS UI**

Microsoft Automatización Framework UIA es un framework de accesibilidad para fines de desarrollo. Es un componente que forma parte del framework CodedUI del que ya hemos hablado con anterioridad, pero centrado en aplicaciones de escritorio heredadas. A veces es más fácil usar directamente UIA sobre el patrón de accesibilidad apropiado para impulsar acciones sobre los controles de UI.

[⬇ Descargar MS UI](https://docs.microsoft.com/en-us/dotnet/framework/ui-automation/ui-automation-overview){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Microsoft UI"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **8. Test Complete**

![](https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_aa958c68dd4c7f2b4af6f65ef6ad8bb7/testcomplete.png)

TestComplete es una herramienta de automatización de interfaz de usuario patentada por SmartBear, ha existido desde principios de la década del 2000, como QTF tiene un precio muy caro pero se hizo cada vez más popular en comparación con él porque no se necesitaban habilidades de programación (aunque al igual que UFT necesita habilidades de programación para scripts avanzados) y por ser compatible con una mayor gama de lenguajes y tecnologías de programación.

### **Pros de Test Complete**

* Admite secuencias de comandos con VB, Python, C #, Delphi, Angular, Ruby y PHP.
* Soporte de pruebas web, móvil y de escritorio.
* Requiere menos o ninguna habilidad de programación para casos de prueba simples. Tiene una curva de aprendizaje menos pronunciada en comparación con otras ofertas.
* Tiene su propia interfaz de usuario con características sólidas Tiene buena documentación, compatible y actualizada regularmente.

### **Contras de Test Complete** <!-- omit in toc -->

* Solo funciona con Windows. No existe soporte para otros sistemas operativos.
* Como se comenta con anterioridad, el precio.

[⬇ Descargar Test Complete](https://smartbear.com/product/testcomplete/overview/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Test Complete"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **9. Katalon Studio**

![](https://i.ibb.co/VHg6WqX/maxresdefault.jpg)

Relativamente, este es un recién llegado puesto que existe desde tan solo desde 2015. Admite una amplia gama de tecnologías, y ha sido capaz de comenzar a grandes empresas desde su aparición; ahora solamente es utilizable ante licencias de alto costo. No requiere habilidades de programación para casos de prueba simples.

### **Pros de Katalon**

* Tiene su propia interfaz de usuario que permite la grabación y edición de guiones en una vista declarativa sin habilidades de programación. Pero también tiene una vista de secuencias de comandos para que los programadores trabajen en secuencias de comandos más avanzadas.
* Todas las funciones unificadas en el mismo paquete de IU: Informes, Editor, Test Runner, etc.

### **Contras de Katalon** <!-- omit in toc -->

* A pesar de estar entre los software más baratos de los de su clase, aún puede ser un alto costo complicado de afrontar, en el caso de pequeñas Startups o empresas que apenas comienzan en el sector.

[⬇ Descargar Katalon Studio](https://www.katalon.com/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Katalon Studio"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **10. Micro Focus UFT**

![United Functional Testing logotipo visto en Ciberninjas](https://i.ibb.co/jbR343M/Micro-Focus-2017-Brand-Cutdown-AMC-01.jpg "United Functional Testing logotipo")

Quick Test Professional (QTP) ahora llamado United Functional Testing (UFT) fue creado originalmente por Mercury Interactive en los años 90 y se convirtió en el estándar de facto de la industria en ese entonces. Mercury fue adquirido por HP en 2006 y más tarde HP vendió su división de software a Micro Focus en 2016.

Por lo tanto, ahora se llama Micro-Focus UFT y sigue siendo una de las herramientas más utilizadas. Sin embargo, ha perdido su posición de líder ante Selenium en los últimos años.

UFT usa VBScript como lenguaje de script, es compatible con Web y Desktop y tiene protocolos que facilitan el script de algunas aplicaciones CRM / ERP como SAP y Oracle.

### **Pros de UFT**

* Ha existido por mucho tiempo, es la oferta más madura.
* Reporta mucho mejor que cualquier otro competidor.
* Sus protocolos complementarios aceleran la automatización del software de gestión empresarial de uso común.
* Fácil de instalar, está todo en un paquete: IDE, corredor de pruebas, Informes, integración, etc.
* Se integra con Quality Center para la gestión de pruebas / errores y es parte de la pila de herramientas HP / Micro-focus ALM.
* Para casos de prueba simples, es más fácil de aprender y usar incluso sin habilidades de programación debido a su vista de palabras clave. Para necesidades más complejas, deberá realizar un script con VBScript.
* Cubre algunos nichos que otros no, como las secuencias de comandos basadas en imágenes para las pruebas del protocolo Citrix.
* UFT hace bien cosas como repositorio de objetos, grabación y reproducción de guiones e informes.

### **Contras de UFT** <!-- omit in toc -->

* Precio. Su modelo de costos basado en protocolos y renovaciones frecuentes hace que sus licencias sean mucho más caras en comparación con cualquier otra oferta.
* Navegador limitado y versiones de navegador compatibles. Solo Windows
* Basado en tecnología antigua: VBScript, que es un lenguaje que no es OOP. ActiveX, etc.
* Originalmente no se diseñó para la ejecución remota o en paralelo múltiple. Es posible ahora, pero aún no es un proceso sencillo.

[⬇ Descargar UFT](https://software.microfocus.com/en-us/products/unified-functional-automated-testing/overview){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Micro Focus UFT"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **11. Xamarin Test Studio**

![](https://i.ibb.co/dt6r3nh/1423206991-xamarin-studioe-mac-01.png)

Xamarin como una de las ofertas para UI Automation, ya sea porque Xamarin es relativamente nuevo o porque se cambió de nombre cuando fue adquirido por Microsoft. Realmente espero que esto cambie en el futuro. Estas son las razones por las que me gustan Xamarin y Xamarin Tests Studio:

Xamarin es una tecnología de desarrollo multiplataforma que le permite entregar aplicaciones iOS, Android y Windows. Xamarin proporciona un framework de integración donde puede tener su código de capa de presentación para cada plataforma que admita y una única capa lógica y de datos con Xamarin que funcionaría para todas las plataformas. Esto facilita el mantenimiento. También Xamarin está completamente integrado en Visual Studio para Windows y Mac.

Xamarin Test Studio, ahora llamado Visual Studio App Center, proporciona una integración continua con su proyecto móvil, se integra con VSTS, lo que permite la planificación de requisitos, compilaciones automatizadas, implementaciones, entrega continua a tiendas, etc.

Las pruebas de Xamarin son pruebas de automatización de la interfaz de usuario que le permiten realizar pruebas funcionales y la regresión de su aplicación móvil (iOS, Android o Windows), las crea en Visual Studio en un proyecto de prueba de Xamarin.

Obtiene algunas funciones que le ayudan a grabar y editar scripts, como un emulador e inspector, y puede ejecutar las pruebas localmente en su estación de trabajo o puede usar Xamarin Test Cloud, que ahora también forma parte del Visual Studio App Center.

Visual Studio App Center le permite ejecutar múltiples pruebas de interfaz de usuario de Xamarin en paralelo en cientos de dispositivos y configuraciones en Test Cloud. Estos no son emuladores, son dispositivos reales.

Además, no tiene que ser Xamarin UI Tests, también puede ser Appium o Expresso.

VS App Center tiene algunas características interesantes, como informes, paneles, seguimiento de requisitos, conjuntos de cambios, compilaciones, implementaciones, etc.

[⬇ Descargar Xamarin](https://www.visualstudio.com/app-center/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Xamarin"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **Derivados de Selenium**

Hay muchos otros proyectos basados en Selenium que son populares, como por ejemplo: Selendroid y Robotium.

### Selendroid

![](https://i.ibb.co/y0RPLwT/C0-NG4-Yd-Uo-AAvg-X.jpg)

Versión de Selenium específicamente desarrollada para Android. Con Slendroid podrás probar la automatización para tus aplicaciones de Android nativas o híbridas y la web móvil con Selendroid.

[⬇ Descargar Selendroid](http://selendroid.io/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Selendroid"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

### Robotium

![](https://i.ibb.co/FgnCPV8/Some-Of-The-Best-Options-For-Mobile-Test-Automation5.png)

Robotium es un framework de automatización de pruebas de Android que tiene soporte completo para aplicaciones nativas e híbridas. Robotium facilita la escritura de pruebas de IU de caja negra automáticas potentes y robustas para aplicaciones de Android. Con el soporte de Robotium, los desarrolladores de casos de prueba pueden escribir escenarios de prueba de aceptación de funciones, sistemas y usuarios, abarcando múltiples actividades de Android.

[⬇ Descargar Robotium](https://www.visualstudio.com/app-center/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar Robotium"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

## **Otras Alternativas**

### Tosca UI

Tricentis Tosca es la única solución de prueba que proporciona automatización de pruebas basada en modos. Admite las tecnologías más utilizadas en desarrollo de software y aplicaciones empresariales para realizar todas las pruebas necesarias de extremo a extremo.

Algunas características clave que aprenderá incluyen:

* Pruebas automatizadas y manuales
* Pruebas de rendimiento basadas en el navegador
* El soporte más completo para tecnologías y interfaces de usuario de SAP

[⬇ Descargar Tosca UI](https://www.tricentis.com/resource-assets/tosca-automate-ui/){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

### Rational Quality Manager de IBM

![](https://i.ibb.co/RCM1dLD/maxresdefault-1200x675.jpg)

Rational Quality Manager es una herramienta colaborativa basada en la web que ofrece funciones integrales de planificación de pruebas, construcción de pruebas y administración de artefactos de prueba durante todo el ciclo de vida de desarrollo del software.

[⬇ Descargar RQM](https://www.ibm.com/support/knowledgecenter/SSYMRC_6.0.2/com.ibm.rational.test.qm.doc/topics/c_qm_top.html){: .btn .btn-outline-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer" role="button" aria-label="Descargar y probar RQM"} [🔝 Regresar al Menú](/10-mejores-herramientas-pruebas-ui/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}{:role="button" aria-label="Regresar al Menú de Herramientas de Automatización"}

> **Fuente**: [Comunidad Microsoft](https://techcommunity.microsoft.com/t5/testingspot-blog/what-are-the-best-ui-test-automation-tools/ba-p/367781){:target="_blank" rel="nofollow,noreferrer"} + Edición Propia.

![Las 10 mejores herramientas de automatización de pruebas de interfaz de usuario o ui que existen en 2021](/assets/img/blog/ui-testing.webp "Las 10 mejores herramientas de automatización de pruebas de interfaz de usuario o ui que existen en 2021")