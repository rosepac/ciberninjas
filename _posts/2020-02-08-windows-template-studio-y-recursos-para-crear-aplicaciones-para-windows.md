---

author_profile: true
title: '▷ Windows Template Studio y Otros Recursos para Crear Aplicaciones para Windows 10'
description: "Numerosas herramientas con las que vas a poder generar las mejores apps y aplicaciones para Windows 10 desde cero"
excerpt: "Numerosas herramientas con las que vas a poder generar las mejores apps y aplicaciones para Windows 10 desde cero"
published: true
comments: true
date: 2020-02-08 09:23:12
last_modified_at: 
header:
  teaser: /assets/images/apache/apache-zookeeper-ciberninjas.png
permalink: /windows-template-studio-recursos-para-aplicaciones-con-xaml-net/
canonical_URL: https://ciberninjas.com/windows-template-studio-recursos-para-aplicaciones-con-xaml-net/
classes: wide
categories:
- Windows 10
- NET
tags:
- Windows Template Studio
- Herramientas Windows
- XAML

---

![Windows Template Studio, la mejor ayuda para crear aplicaciones en Windows 10](/assets/images/blog/windows-template-studio-captura.webp "Windows Template Studio, la mejor ayuda para crear aplicaciones en Windows 10")

Windows Template Studio (WinTS) es una extensión de Visual Studio 2017 y 2019 que acelera la creación de nuevas aplicaciones de la Plataforma universal de Windows (UWP) y Windows Presentation Foundation (WPF) utilizando una experiencia basada en un asistente. El proyecto resultante es un código legible y bien formado que incorpora excelentes características de desarrollo e implementa patrones comprobados y mejores prácticas. Esparcidos por todo el código generado, tenemos enlaces Docs, Stack Overflow y blogs para proporcionar información útil. WinTS admite la creación de aplicaciones en C # o VB.Net.

❗️Las plantillas WPF todavía están en desarrollo y estarán disponibles a partir de la versión 3.6. Puede obtener una vista previa utilizando nuestra versión del Studio en Modo Oscuro. Encuentre más instrucciones sobre [cómo instalar dev-nightly](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/getting-started-extension.md#nightly--pre-release-feeds-for-windows-template -estudio){:target="_blank"} ❗️

## Caracteristicas

Windows Template Studio se acerca a la creación de aplicaciones UWP y WPF utilizando los siguientes seis conjuntos de atributos:

### **Tipo de proyecto**

Primero, ¿cómo desea que se comporte la navegación de la interfaz de usuario de su aplicación?

- **UWP** : *[blanco](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/projectTypes/blank.md){:target="_blank"}* , *[panel de navegación](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/projectTypes/navigationpane.md){:target="_blank"}* , *[panel de exploración horizontal](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/projectTypes/horizontalnavigationpane.md){:target="_blank"}* , y una *[barra de menús](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/projectTypes/menubar.md){:target="_blank"}* .
- **WPF** : en *[blanco](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/projectTypes/blank.md){:target="_blank"}* , *[panel de navegación](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/projectTypes/navigationpane.md){:target="_blank"}* , *[barra de menú](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/projectTypes/menubar.md){:target="_blank"}* y una *[cinta de opciones](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/projectTypes/ribbon.md){:target="_blank"}* .

### **Patrón de diseño de la aplicación**

A continuación, ¿qué patrón de codificación desea usar en su proyecto?

- **UWP** : *[Code Behind](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/frameworks/codebehind.md){:target="_blank"}* , *[MVVM Basic](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/frameworks/mvvmbasic.md){:target="_blank"}* , *[MVVMLight](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/frameworks/mvvmlight.md){:target="_blank"}* , *[Caliburn.Micro](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/frameworks/caliburnmicro.md){:target="_blank"}* y *[Prism](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/frameworks/prism.md){:target="_blank"}* .
- **WPF** : *[MVVM Basic](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/frameworks/mvvmbasic.md){:target="_blank"}* , *[MVVMLight](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/frameworks/mvvmlight.md){:target="_blank"}* y *[Prism](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/frameworks/prism.md){:target="_blank"}* .

### **Páginas de la aplicación**

Para acelerar la creación de aplicaciones, proporcionamos una serie de plantillas de páginas de aplicaciones que puede usar para agregar páginas de IU comunes a su nueva aplicación. Actualmente incluimos todo, desde una *página en blanco* , hasta diseños comunes ( *por ejemplo, maestro / detalle, vista web* ), hasta páginas que implementan patrones comunes ( *por ejemplo, configuraciones de aplicaciones* ). Use el asistente para agregar tantas páginas como necesite, proporcionando un nombre para cada una, y las generaremos para usted.

### **Caracteristicas**

Especifique qué capacidades desea usar en su aplicación, y crearemos el framework para las características en su aplicación, etiquetando `TODO`elementos. Aquí puede agregar funciones que permiten que su aplicación interactúe con el almacenamiento, las notificaciones, el diseño de temas, etc.

### **Servicios**

Conéctese a los servicios de datos, configure servicios conectados a la nube para su aplicación y aplique las reglas con la extensión [XAML Styler](https://github.com/Xavalon/XamlStyler){:target="_blank"}.

### **Pruebas automatizadas**

Por último, puede incluir proyectos de prueba para que su aplicación ejecute pruebas unitarias o use la automatización de pruebas de IU tipo Selenium.

Después de seleccionar los elementos deseados en su aplicación, puede extender el código generado en [UWP](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/getting-started-endusers.md){:target="_blank"} o [WPF](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/getting-started-endusers.md){:target="_blank"}.

## Documentación

- [Instalar la extensión](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/getting-started-extension.md){:target="_blank"}
- [Comprender los conceptos centrales](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/concepts.md){:target="_blank"}
- [Usando WinTS para construir aplicaciones para UWP](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/UWP/getting-started-endusers.md){:target="_blank"}
- [Usando WinTS para construir aplicaciones WPF](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/WPF/getting-started-endusers.md){:target="_blank"}
- [Trabajando en WinTS](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/getting-started-developers.md){:target="_blank"}

## Problemas conocidos

- No puede tener versiones en paralelo (nocturno / prelanzamiento / lanzamiento) de Windows Template Studio VSPackage en una sola instancia de Visual Studio.

## Comentarios, solicitudes y hoja de ruta

Utilice los [problemas de GitHub](https://github.com/Microsoft/WindowsTemplateStudio/issues){:target="_blank"} para comentarios, preguntas o comentarios.

Si tiene solicitudes de funciones específicas o desea votar sobre lo que otros recomiendan, vaya a la sección de [problemas de GitHub](https://github.com/Microsoft/WindowsTemplateStudio/issues){:target="_blank"} también. Nos encantaría ver lo que estás pensando.

Esto es lo que estamos pensando actualmente en nuestra [hoja de ruta](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/docs/roadmap.md){:target="_blank"}.

## Principios

1. Las plantillas generadas se mantendrán simples.
2. Las plantillas generadas son un punto de partida, no una aplicación completa.
3. Las plantillas generadas deben poder compilarse y ejecutarse una vez generadas.
4. Las plantillas generadas deberían funcionar en todas las familias de dispositivos.
5. Las plantillas deben tener comentarios para ayudar a los desarrolladores. Esto incluye enlaces a páginas de registro para claves, MSDN, blogs y procedimientos. Toda la orientación proporcionada debe validarse desde el creador del framework / SDK / biblioteca.
6. Todas las funciones de UWP serán compatibles con las dos actualizaciones más recientes de RTM de Windows 10. Esas versiones compatibles son Windows 10 November 2019 Update (versión 1909) y Windows 10 May 2019 Update (versión 1903).
7. Las plantillas lanzadas en producción intentarán adherirse al lenguaje de diseño utilizado en la versión actual de Windows 10.
8. El código debe seguir el [estilo de codificación de .NET Core](https://github.com/dotnet/corefx/blob/master/Documentation/coding-guidelines/coding-style.md){:target="_blank"}.

Este proyecto ha adoptado el código de conducta definido por el Pacto Colaborador para aclarar el comportamiento esperado en nuestra comunidad. Para obtener más información, consulte el [Código de conducta de .NET Foundation](https://dotnetfoundation.org/code-of-conduct){:target="_blank"}.

## Fundación .NET

Este proyecto es apoyado por la [Fundación .NET](https://dotnetfoundation.org/){:target="_blank"}.

## Proyectos que nos gustan y colaboramos

- [Web Template Studio](https://github.com/Microsoft/WebTemplateStudio){:target="_blank"}
- [Kit de herramientas rápido de Xaml](https://github.com/Microsoft/Rapid-XAML-Toolkit){:target="_blank"}
- [Kit de herramientas de la comunidad de Windows](https://github.com/Microsoft/WindowsCommunityToolkit){:target="_blank"}
- [Editor de temas XAML fluido](https://github.com/Microsoft/fluent-xaml-theme-editor){:target="_blank"}
- [XAML Styler](https://github.com/Xavalon/XamlStyler){:target="_blank"}

## Marcos y bibliotecas en código generado no creado por nuestro equipo

### Frameworks

## [Caliburn.Micro](https://github.com/Caliburn-Micro/Caliburn.Micro){:target="_blank"}

![Captura de pantalla de la página de Caliburn Micro](/assets/images/blog/caliburn-micro-captura.webp "Captura de pantalla de la página de Caliburn Micro")

Un framework pequeño pero potente, diseñado para crear aplicaciones en todas las plataformas XAML. Su fuerte es el soporte para patrones MV * que te permitirá construir soluciones rápidamente, sin la necesidad de sacrificar la calidad del código o la capacidad de las pruebas.

### Características

* Vincula las propiedades del modelo de vista a tu vista
* Aplica métodos entre su vista y el modelo de vista automáticamente con parámetros y métodos de protección
* Desacoplar modelos de vista con patrones de composición integrados y agregación de eventos
* Funciona en todas partes que Xaml funciona

### Cómo empezar con Caliburn Micro

La forma más rápida de comenzar es bajar el último paquete de [Nuget](https://www.nuget.org/packages/Caliburn.Micro){:target="_blank"} y explorar la [documentación](https://caliburnmicro.com/documentation){:target="_blank"}. Si tiene problemas, consulte nuestra sección de [soporte](https://caliburnmicro.com/support){:target="_blank"}

[📖 Página de Caliburn Micro](https://caliburnmicro.com/){: .btn .btn--inverse .btn--large .align-center}{:target="_blank"}

## [MVVMLight](https://github.com/lbugnion/mvvmlight){:target="_blank"}

![MVVM Light](/assets/images/blog/mvvm-light-toolkit.webp "Captura de la página de pantalla MVVM Light")


### Introducción

El objetivo principal del kit de herramientas es acelerar la creación y el desarrollo de aplicaciones MVVM en Windows Universal, WPF, Silverlight, Xamarin.iOS, Xamarin.Android y Xamarin.Forms.

El MVVM Light Toolkit le ayuda a separar su Vista de su Modelo, lo que crea aplicaciones más limpias y fáciles de mantener y ampliar . También crea aplicaciones comprobables y le permite tener una capa de interfaz de usuario mucho más delgada (que es más difícil de probar automáticamente).

Este kit de herramientas pone un énfasis especial en la capacidad de designación de la aplicación creada (es decir, la capacidad de abrir y editar la interfaz de usuario en Blend), incluida la creación de datos en tiempo de diseño para permitir a los usuarios de Blend "ver algo" cuando trabajan con controles de datos.

### Instalación

Aquí [se describe el](http://www.mvvmlight.net/installing/){:target="_blank"} procedimiento de instalación de MVVM Light Toolkit (para el paquete completo) . Para crear una nueva aplicación MVVM Light, [consulte este artículo](http://www.mvvmlight.net/creating/){:target="_blank"}. Si prefiere usar Nuget para agregar MVVM Light a una aplicación existente, [consulte esta página](http://www.mvvmlight.net/installing/nuget/){:target="_blank"}. Para ver las últimas notas de la versión, [consulte esta página](http://www.mvvmlight.net/installing/changes){:target="_blank"}.

[📖 Página de MVVM](http://www.mvvmlight.net/){: .btn .btn--inverse .btn--large .align-center}{:target="_blank"}
[📖 Documentación de MVVM](http://www.mvvmlight.net/doc/){: .btn .btn--inverse .btn--large .align-center}{:target="_blank"}

## [Prism](https://github.com/PrismLibrary/Prism){:target="_blank"}

![]()

Prism es un framework para construir aplicaciones XAML acopladas, mantenibles y comprobables en WPF, Windows 10 UWP y Xamarin Forms.

Prism es un framework de trabajo para construir aplicaciones XAML libremente acopladas, mantenibles y comprobables en WPF y Xamarin Forms. Hay versiones separadas disponibles para cada plataforma y se desarrollarán en líneas de tiempo independientes. Prism proporciona una implementación de una colección de patrones de diseño que son útiles para escribir aplicaciones XAML bien estructuradas y mantenibles, que incluyen MVVM, inyección de dependencia, comandos, EventAggregator y otros. La funcionalidad principal de Prism es una base de código compartida compatible con .NET Standard 2.0, .Net Core 3 y .NET Framework 4.5. Las cosas que deben ser específicas de la plataforma se implementan en las bibliotecas respectivas para la plataforma de destino. Prism también proporciona una gran integración de estos patrones con la plataforma objetivo. Por ejemplo,

Prism 7 es una versión de código abierto de la guía Prism producida originalmente por los patrones y prácticas de Microsoft . Los miembros del equipo central eran parte del equipo de P&P que desarrolló Prism 1 a 5, y el esfuerzo ahora se ha entregado a la comunidad de código abierto para mantenerlo vivo y próspero para apoyar a la comunidad .NET. Hay miles de empresas que han adoptado versiones anteriores de Prism, y esperamos que continúen avanzando junto con nosotros a medida que continuamos evolucionando y mejorando el framework para mantener el ritmo de las capacidades y requisitos actuales de la plataforma.

### Bibliotecas

## [Microsoft AppCenter SDK](https://github.com/Microsoft/AppCenter-SDK-DotNet){:target="_blank"}

Repositorio de desarrollo para App Center SDK para plataformas .NET, incluido Xamarin. App Center es su solución de integración, entrega y aprendizaje continuo para aplicaciones iOS, Android y Windows. Obtenga ciclos de lanzamiento más rápidos, aplicaciones de mayor calidad y las ideas para crear lo que los usuarios desean.

App Center SDK usa una arquitectura modular para que pueda usar cualquiera o todos los siguientes servicios: App Center Analytics, App Center Crashes, App Center Distribute y App Center Push.

## [SDK de servicios de Microsoft Store](https://marketplace.visualstudio.com/items?itemName=AdMediator.MicrosoftStoreServicesSDK){:target="_blank"}

Use el SDK de Microsoft Store Services para agregar funciones a sus aplicaciones de la Plataforma universal de Windows (UWP) que lo ayuden a interactuar con sus clientes. Todas las API de este SDK son exclusivas de las aplicaciones UWP para Windows 10. La versión actual del SDK incluye API para las siguientes funciones:

• [Cree pruebas A / B](https://msdn.microsoft.com/windows/uwp/monetize/run-app-experiments-with-a-b-testing){:target="_blank"} que pueda ejecutar y administrar en Dev Center.
• [Inicie Feedback Hub](https://msdn.microsoft.com/windows/uwp/monetize/launch-feedback-hub-from-your-app){:target="_blank"} para que los clientes puedan enviar comentarios y votos a favor que usted pueda revisar en Dev Center.
• [Envíe notificaciones push específicas](https://msdn.microsoft.com/windows/uwp/publish/send-push-notifications-to-your-apps-customers){:target="_blank"} a sus clientes desde Dev Center.

Para obtener más información sobre el uso de este SDK, [consulte la documentación](https://msdn.microsoft.com/windows/uwp/monetize/monetize-your-app-with-the-microsoft-store-engagement-and-monetization-sdk){:target="_blank"}. Para preguntas y respuestas, y discusiones generales sobre las API, consulte el [foro del marco de trabajo en MSDN](https://aka.ms/store-efw-forum){:target="_blank"}.

## [Microsoft Win2D](https://github.com/Microsoft/Win2D){:target="_blank"}

Win2D es una API de Windows Runtime fácil de usar para el procesamiento de gráficos 2D en modo inmediato con aceleración de GPU. Está disponible para desarrolladores de C #, C ++ y VB que escriben aplicaciones para la Plataforma Universal de Windows (UWP). Utiliza el poder de Direct2D y se integra a la perfección con XAML y CoreWindow.

### Donde conseguirlo

- [Paquete NuGet](http://www.nuget.org/packages/Win2D.uwp){:target="_blank"}
- [Código fuente](http://github.com/Microsoft/Win2D){:target="_blank"}

### Cómo usarlo

- [Documentación](http://microsoft.github.io/Win2D){:target="_blank"}
- [Código de muestra](http://github.com/Microsoft/Win2D-samples){:target="_blank"} : *también disponible en la [tienda](https://www.microsoft.com/store/apps/9NBLGGGXWT9F){:target="_blank"}*

## [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json){:target="_blank"}

![Json NET framework de alto rendimiento popular para NET](/assets/images/blog/json-net-captura-ciberninjas.webp "Json NET framework de alto rendimiento popular para NET")

* Serialice y deserialice cualquier objeto .NET con el potente serializador JSON de Json.NET.
* LINQ to JSON. Cree, analice, consulte y modifique JSON utilizando los objetos JObject, JArray y JValue de Json.NET.
* Consultas JSON con una sintaxis similar a XPath. Obtenga más información sobre JSON Path aquí .
* Alto rendimiento: 50% más rápido que DataContractJsonSerializer y 250% más rápido que JavaScriptSerializer.
* Fácil de usar: Json.NET hace que lo simple sea fácil y lo complejo posible.
* Soporte XML: Si lo necesita, Json.NET admite la conversión entre XML y JSON.
* Código abierto: Json.NET es un software de código abierto y es completamente [gratuito para uso comercial](https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md){:target="_blank"}.

* [Página principal](https://www.newtonsoft.com/json)
* [Documentación](https://www.newtonsoft.com/json/help)
* [Paquete NuGet](https://www.nuget.org/packages/Newtonsoft.Json)

## [Telerik UI para UWP](https://github.com/telerik/UI-For-UWP){:target="_blank"}

![Framework Telerik ui para uwp](../assets/images/blog/telerik-ui-uwp.webp "Framework Telerik ui para uwp")

Esta es una versión de código abierto de Telerik UI para Universal Windows Platform (UWP) de Progress. El proyecto es apoyado por la comunidad en [Stack Overflow](https://stackoverflow.com/questions/tagged/telerik+uwp){:target="_blank"}. El soporte comercial está disponible en [telerik.com/uwp](http://www.telerik.com/uwp){:target="_blank"} donde encontrará una prueba comercial compatible y opciones de precios. Visite [telerik.com](http://www.telerik.com/){:target="_blank"} para obtener herramientas de interfaz de usuario para ASP.NET, WPF, WinForms o JavaScript.

## [Mensajería de Windows Azure administrada](https://www.nuget.org/packages/WindowsAzure.Messaging.Managed){:target="_blank"}

Úselo con el registro del cliente de Windows Azure Service Bus y Notification Hubs (para aplicaciones de la Tienda Windows y Windows Phone 8). Agrega Microsoft.WindowsAzure.Messaging.Managed.dll a su proyecto.

Este paquete es para desarrollar aplicaciones de Windows Store y Windows Phone 8 con C # (administrado).

* web del paquete de nuget: https://www.nuget.org/packages/WindowsAzure.Messaging.Managed

## [Kit de herramientas de la comunidad de Windows](https://github.com/Microsoft/WindowsCommunityToolkit){:target="_blank"}

Windows Community Toolkit es una colección de funciones auxiliares, controles personalizados y servicios de aplicaciones. Simplifica y demuestra patrones comunes de desarrollador al crear experiencias para Windows 10.

Toda la documentación para el kit de herramientas está alojada en [Microsoft Docs](https://docs.microsoft.com/windows/communitytoolkit/) . Toda la documentación de la API se puede encontrar en el [.NET API Browser](https://docs.microsoft.com/dotnet/api/?view=win-comm-toolkit-dotnet-stable).

## Licencia

Este código se distribuye bajo los términos y condiciones de la [licencia MIT](https://github.com/microsoft/WindowsTemplateStudio/blob/dev/LICENSE.md){:target="_blank"}.

**Fuente**\: [Github](https://github.com/Microsoft/WindowsTemplateStudio/){:target="_blank"}
{: .notice--info}