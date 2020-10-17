---

author: rosepac
bootstrap: true
comments: false
tags:
- Actualización
- Visual Studio Code
thumbnail: /assets/img/blog/vsc-1-1-50.webp
feature-img: /assets/img/blog/vsc-1-1-50.webp
title: '▷ Novedades de Microsoft Visual Studio Code 1.50 y Cambios Históricos'
description: >-
  Microsoft actualiza Visual Studio Code mensualmente. Infórmate de los nuevos cambios y novedades, desde aquí.
excerpt: >-
  Microsoft actualiza Visual Studio Code mensualmente. Infórmate de los nuevos cambios y novedades, desde aquí.
canonical_URL: https://ciberninjas.com/novedades-vsc-1-50/
permalink: /novedades-vsc-1-50/
date: 2020-10-16 10:28:32
last_modified_at: 
published: true

---

Visual Studio Code de Microsoft se ha convertido en una de las herramientas de desarrollo más populares. Construido a partir del framework de Electron de GitHub, **Visual Studio Code es un editor de código fuente abierto, extensible y con todas las funciones que necesitas**. VSC admite una amplia selección de lenguajes y frameworks de programación, desde los más conocidos como C, C++ y C# hasta los lenguajes más modernos como Go, Rust y Node.js.

Visual Studio Code es un editor, que puedes encontrar disponible para Windows, MacOS y Linux. Si lo deseas, puedes conocer [otros espectaculares editores de texto](https://ciberninjas.com/mejores-editores-texto/ "los mejores editores de texto gratis de 2021"), en nuestro artículo de los mejores editores de texto gratis.

<div><span id="menu"></span></div>

- [**¿Dónde descargar Visual Studio Code?**](#dónde-descargar-visual-studio-code)
- [**¿Dónde descargar extensiones de Visual Studio Studio?**](#dónde-descargar-extensiones-de-visual-studio-studio)
- [**Novedades de Visual Studio Code 1.50**](#novedades-de-visual-studio-code-150)
- [**Novedades de Visual Studio Code 1.4x**](#novedades-de-visual-studio-code-14x)
- [**Novedades de Visual Studio Code 1.3x**](#novedades-de-visual-studio-code-13x)
- [**Novedades de Visual Studio Code 1.2x**](#novedades-de-visual-studio-code-12x)

## **¿Dónde descargar Visual Studio Code?**

Si quieres descargar el editor de Visual Studio Code para Windows, MacOS y Linux, puedes ir al [sitio web Oficial de Visual Code Studio de Microsoft](https://code.visualstudio.com/ "sitio web Oficial de Visual Code Studio de Microsoft") o bien, primero conocer en profundidad [las mejores características de VSC](https://ciberninjas.com/mejores-editores-texto/#1-visual-studio-code-de-microsoft) para luego decidir, si es el editor que más te interesa o no.

Además, dependiendo del lenguaje de programación con el que vayas a programar, puedes pensar también en revisar alguno de los siguientes editores. Puesto, que quizás pueden ser una mejor opción real:

- Si tu lenguaje es Python, puedes probar alguno de [los mejores editores enfocados en la creación de código con Python](https://ciberninjas.com/mejores-ide-python/ "Los mejores editores de programación para Python 2021").
- Si tu lenguaje es PHP, puedes probar alguno de [los mejores editores enfodacos en la creación de código con PHP](https://ciberninjas.com/mejores-editores-php/ "Los mejores editores de programación para PHP 2021").

## **¿Dónde descargar extensiones de Visual Studio Studio?**

Puede descargar extensiones desde[la tienda de Extensiones de Visual Studio Code](https://marketplace.visualstudio.com/vscode "Descarga las mejores extensiones de Visual Studio Code 2021"). Aquí tienes, algunas extensiones populares:

- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools){:target="_blank" rel="nofollow,noreferrer"}
- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug){:target="_blank" rel="nofollow,noreferrer"}
- [Tomcat](https://marketplace.visualstudio.com/items?itemName=adashen.vscode-tomcat){:target="_blank" rel="nofollow,noreferrer"}
- [Maven Project Explorer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven){:target="_blank" rel="nofollow,noreferrer"}
- [Checkstyle](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-checkstyle){:target="_blank" rel="nofollow,noreferrer"}

## **Novedades de Visual Studio Code 1.50**

Las novedades de Visual Studio Code que desde Microsoft presentó el 8 de octubre de 2020:

- Las mejoras de las pestañas ancladas incluyen una nueva configuración, `editor.pinnedTabSizing`. Que permite a los desarrolladores configurar qué tan grande debe aparecer una pestaña anclada. Además, los editores ahora se pueden fijar cuando las pestañas están deshabilitadas y `tab.lastPinnedBorder` se puede asignar a un nuevo color para dibujar un borde a la parte derecha de la pestaña anterior.
- Se han introducido nuevas claves de contexto del editor, y algunas existentes pasan a estar en desuso: A `groupActiveEditorDirty` se le cambió el nombre a `activeEditorIsDirty`, `editorPinned` se renombró `activeEditorIsNotPreview` y `editorSticky` se cambió a `activeEditorIsPinned`.
- Se han agregado dos claves de contexto de recursos (relacionadas con el explorador) para los recursos: `resourceDirname` para la ruta de la carpeta del recurso, equivalente a `dirname(uri.fsPath)`, y `resourcePath`, para la ruta completa del recurso, equivalente a `uri.fsPath`.
- Agregado un editor de configuraciones más accesible.
- El desplazamiento del idioma ahora está disponible durante la depuración y el ancho y alto del desplazamiento de depuración ahora se adaptan automáticamente al tamaño del contenido del desplazamiento. Además, la Consola de depuración ahora admite el filtrado, lo que facilita la búsqueda de resultados u ocultar los resultados de registro irrelevantes. 
- La [extensión del gráfico de llama](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-js-profile-flame){:target="_blank" rel="nofollow,noreferrer"} ahora mostrará una vista en tiempo real de las métricas de rendimiento mientras se depura JavaScript.
- Una nueva configuración `opensMaximized` permite a los usuarios ajustarse a sus propias preferencias si el panel siempre se abre maximizado o no cuando se activa `Toggle Panel`.
- La extensión Microsoft C / C ++ ahora está fuera de vista previa.
- Visual Studio Code ahora está disponible para arquitecturas ARMv7 y ARM64. Los desarrolladores ahora pueden usar Visual Studio Code en Raspberry Pi, Chromebook y otros dispositivos basados en ARM.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## **Novedades de Visual Studio Code 1.4x**

### **Novedades de Visual Studio Code 1.49** <!-- omit in toc -->

Publicado el 10 de Septiembre, Visual Studio Code 1.49 añadió las siguientes características principales:

- Se ha agregado un nuevo comando, para dar formato solo a las líneas nuevas y modificadas. Además, una nueva configuración, `formatOnSaveMode` que hace que Formato y Guardar se apliquen solo a las líneas modificadas. Estos cambios se realizaron para abordar una situación en la que los comandos Formatear y Guardar y Formatear documento podrían introducir un reformateo no deseado de líneas que no han cambiado, lo que podría resultar en grandes solicitudes de extracción que son difíciles de revisar e impactar en el código que se suponía que no debería ser modificado.
- La vista de los repositorios de control de código fuente, anteriormente conocida como la vista de Proveedores de control de código fuente, se reintrodujo para permitir un control más detallado sobre qué repositorios de control de código fuente deberían estar visibles en la vista de Control de código fuente.
- Se ha mejorado el depurador de JavaScript, con Auto Attach. Ahora depurando procesos sin pasarles manualmente una bandera de `--inspect`. Para el manejo del mapa de origen, VS Code ahora procesa un seguimiento de pila para usar ubicaciones de origen. Esto ayuda al depurar aplicaciones web que usan paquetes como Webpack. En otra mejora, los desarrolladores pueden optar por detenerse cuando un punto de interrupción condicional arroja un error al alternar la configuración `debug.javascript.breakOnConditionalError`.
- La Consola de depuración ahora admite el filtrado para facilitar la búsqueda de resultados u ocultar los resultados de registro irrelevantes. También se admiten patrones de exclusión.
- Se incluye el editor con TypeScript 4.0.2, [como ya informamos desde Ciberninjas](https://ciberninjas.com/visual-studio-code-1-47/ "Visual Studio Code 1.47: Ahora se desarrolla en Typescript y los nuevos cambios más importantes").
- La etiqueta `@deprecated` de JSDoc ahora es compatible con archivos JavaScript y TypeScript.

Además de presentar Visual Studio Code 1.49, Microsoft anunció el 14 de Septiembre la disponibilidad general de la versión 1.0 de la extensión C++ para Visual Studio Code, que ofrece capacidades de edición y finalización de código IntelliSense, depuración en Linux, Windows y MacOS, y soporte para Linux en Arm y Arm64. Si lo deseas, puedes [descargar el paquete de la extensión C/C ++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack "Nueva extensión de Visual Studio Code para C++ con autocompletado de IntelliSense y depuración incluida") para incluirlo en tu VSC.

### **Novedades de Visual Studio Code 1.48** <!-- omit in toc -->

Visual Studio Code 1.48, lanzado en agosto de 2020 y con características y correcciones de julio, tiene las siguientes mejoras:

- Settings Sync, para compartir configuraciones como configuraciones, combinaciones de teclas y extensiones instaladas entre máquinas, ahora está disponible para vista previa en la versión estable.
- Las acciones de filtro de vista de extensiones ahora se muestran bajo una acción de filtro separada (botón de embudo).
- El menú Vista Git y Más acciones (…) se ha refactorizado para mejorar la organización de varios comandos. Además, al publicar en un repositorio de GitHub, los desarrolladores ahora tienen la opción de hacer público el repositorio, a diferencia del valor predeterminado anterior de privado.
- Un comando Debug: Open Link está destinado a permitir la depuración rápida de cualquier URL. 
- Una extensión de GitHub Issue Notebooks , aún en una etapa de vista previa, permite buscar problemas de GitHub y solicitudes de extracción.
- La extensión Language Support for Java ahora admite un modo ligero para trabajar rápidamente con archivos fuente Java.

### **Novedades de Visual Studio Code 1.47** <!-- omit in toc -->

Publicado en julio de 2020, Visual Studio Code 1.47 trae las siguientes nuevas capacidades y cambios:

- Visual Studio Code para Windows en ARM ahora está disponible para la versión estable.
- Un nuevo depurador de JavaScript, que se convirtió en el depurador predeterminado para JavaScript en la edición interna del editor el mes pasado, ahora es el depurador predeterminado para JavaScript en Visual Studio Code.
- La configuración de objetos no anidados se puede editar desde el editor de configuración. Los autores de extensiones pueden usar esta capacidad para aumentar la visibilidad de estas configuraciones.
- Un nuevo comando, selectAndPreserveFocuspermite a los desarrolladores seleccionar un elemento de una lista mientras mantienen el foco en esa lista. Esto es útil para seleccionar varios archivos de una lista, como el Explorador de archivos, sin tener que cambiar el foco al editor de archivos.
La searchEditor.defaultNumberOfContextLinesconfiguración se ha actualizado para tener un valor de 1 en lugar de 0, lo que significa que se mostrará una línea de contexto antes y después de cada línea de resultado en el Editor de búsqueda.
- La vista de control de código fuente ahora muestra todos los repositorios en una sola vista, lo que proporciona una mejor descripción general del estado del espacio de trabajo completo. Además, la vista de control de fuente se puede mover al panel y otras vistas se pueden mover al contenedor de la vista de control de fuente.
- El instalador de Visual Studio Code for Java Pack descarga dependencias y extensiones para el desarrollo de Java en MacOS.
- La extensión HexEditor, para la edición hexadecimal nativa, se ha mejorado con soporte de edición simple (deshacer, rehacer, editar celdas, agregar celdas) y optimización de archivos grandes, que ahora le permite abrir archivos de más de 18 megabytes.
- Las opciones de visualización y ordenación se han consolidado en un nuevo elemento de menú Ver y ordenar en el menú contextual. Además, se ha agregado soporte para ordenar los cambios en la vista de control de fuente por nombre, ruta y estado cuando se usa la opción de vista de lista.
- Para la accesibilidad, las carpetas compactas en el Explorador de archivos ahora narran correctamente el estado expandido / contraído y el nivel ARIA. Además, los lectores de pantalla pueden actualizar el desplazamiento del cursor en el editor. Como resultado, el comando "Decir todo" del lector de pantalla debería funcionar mejor cuando se detiene y se reanuda.
- Ahora se puede instalar un archivo VSIX de extensión arrastrándolo y soltándolo en la vista Extensiones.
- TypeScript 3.9.6 se incluye con el editor, mientras que se ha mejorado la compatibilidad con TypeScript 4.0 , con capacidades como mejores importaciones automáticas.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.46** <!-- omit in toc -->

Lanzado en junio de 2020, Visual Studio Code 1.46 tiene capacidades que incluyen:

- Ahora se puede agregar un repositorio de GitHub como remoto a los repositorios locales mediante el comando Git: Add Remote.
- Se han mejorado las configuraciones de depuración automática. Ahora hay una opción para guardar una configuración en un archivo JSON para abrirlo y editarlo. Ahora también es posible mostrar todas las configuraciones de depuración automática desde la vista de inicio Ejecutar y depurar.
- Si el editor detecta que un desarrollador está trabajando en un módulo JavaScript estilo CommonJS, las importaciones automáticas ahora usarán `require` en lugar de `import`.
- Las refactorizaciones para JavaScript y TypeScript, como Extract to Method y Move to New File, ahora intentan preservar el formato original del código fuente refactorizado.
- Para mejorar la accesibilidad, la barra de estado ahora admite la navegación por teclado. También hay nuevos comandos para facilitar el inicio y el final de las selecciones con el teclado: Establecer el ancla de selección (⌘K ⌘B), Seleccionar de ancla a cursor (⌘K ⌘K), Cancelar ancla de selección (Escape) e Ir a Ancla de selección.
- Se ha agregado una vista de Máquinas sincronizadas para mostrar la lista de máquinas que sincronizan las preferencias de VS Code.
- La vista de datos sincronizados se ha mejorado y los desarrolladores ahora pueden ver la máquina desde la que se sincronizan los datos. Los desarrolladores también pueden restaurar a un estado específico mediante la acción Restaurar disponible en la entrada de datos en la vista. Además, los datos en la nube se pueden restablecer mediante la acción Restablecer datos sincronizados disponible en el botón Más acción (…) en el encabezado de la vista.
- Las pestañas ahora se pueden anclar desde el menú contextual o mediante el nuevo comando, action.pinEditor(⌘K ⇧Enter). 
- Las compilaciones oficiales para Windows para ARM de 64 bits están disponibles en la página de descarga de Insiders . Estas compilaciones funcionan con Microsoft Surface Pro X.
- Se han agregado scripts `preload` de Electron para exponer ciertas API de Electron a la ventana. Este es un paso hacia una ventana completamente protegida. 
- Las funciones para un diseño flexible ahora están listas para uso general, como mover vistas entre la barra lateral y el panel y agrupar las vistas. 

### **Novedades de Visual Studio Code 1.45** <!-- omit in toc -->

Publicado en mayo de 2020, Visual Studio Code 1.45 agrega las siguientes capacidades:

- Resaltado de sintaxis más rápido, realizado a través de un enlace WebAssembly dedicado optimizado para el uso del intérprete TextMate del editor. Al evitar asignaciones de memoria en bucles internos y utilizar nuevas API, Microsoft ha podido aumentar la velocidad del resaltado de sintaxis para archivos de programación normales hasta tres veces.
- Con el estilo de token semántico, la temática semántica se puede personalizar en la configuración del usuario. La coloración semántica está disponible para TypeScript y JavaScript, con soporte para Java y C ++ en desarrollo.
- Se ha agregado soporte para la autenticación automática contra repositorios de GitHub. Los desarrolladores pueden clonar, extraer y enviar desde y hacia repositorios públicos y privados sin configurar un administrador de credenciales.
- El nuevo depurador de JavaScript, en una etapa de vista previa, se instala de forma predeterminada en la versión Insiders y se puede instalar desde Marketplace en VS Code estable. Las nuevas características incluyen la captura de perfiles de CPU de Node.js o aplicaciones de navegador haciendo clic en el botón Perfil nuevo en la vista Pila de llamadas o usando el comando Depurar: Tomar perfil de rendimiento. Auto Attach, para adjuntar automáticamente a los procesos de Node.js, ahora depura los procesos secundarios automáticamente.
- Los nuevos comandos de accesibilidad Focus Next Part y Focus Previous Part facilitan la navegación por un banco de trabajo. Los lectores de pantalla ahora pueden leer la barra de estado cuando están enfocados.
- Se han realizado mejoras en las extensiones de desarrollo remoto  (que permiten a los desarrolladores usar un contenedor, una máquina remota o un subsistema de Windows para Linux como un entorno de desarrollo con todas las funciones), incluidas recomendaciones de configuración de contenedores, compatibilidad con los motores WSL2 Docker y Podman y un nuevo devcontainer. json variables para carpetas locales y contenedor.

### **Novedades de Visual Studio Code 1.44** <!-- omit in toc -->

También conocida como la versión de marzo de 2020 (aunque se publicó en abril de 2020), Visual Studio Code 1.44 presenta las siguientes mejoras:

- Mejoras de usabilidad que incluyen una vista de diferencias más navegable y designaciones de roles más claras establecidas para los controles de la interfaz de usuario. Además, se ha ajustado el comportamiento del widget rápido.
- La vista de línea de tiempo para visualizar eventos de series de tiempo, como confirmaciones de Git y guardados de archivos, ahora está fuera del modo de vista previa, de forma predeterminada. Se ha reescrito el control Quick Open para archivos. También tiene nuevas características, como conservar las entradas al cambiar de proveedor. También hay una nueva configuración, "quickOpen.history.filterSortOrder": "recency"que le permite ordenar el historial del editor por los elementos abiertos más recientemente.
- Se ha agregado una insignia de número a la vista Extensiones para mostrar la cantidad de extensiones en el paquete.
- Visual Studio Code ahora mantendrá la pila Deshacer / Rehacer de un archivo cuando se cierre el archivo. Cuando se vuelve a abrir el archivo y el contenido no ha cambiado, se restaurará la pila Deshacer / Rehacer.
- El trabajo continúa en las  extensiones de desarrollo remoto  que permiten el uso de un contenedor, máquina remota o subsistema de Windows para Linux (WSL) como un entorno de desarrollo con todas las funciones. Entre los hitos en Visual Studio Code 1.44: Una solicitud de extracción se puede verificar directamente en un contenedor.
- Una vista previa de Settings Sync permite a los desarrolladores compartir fragmentos y el estado de la interfaz de usuario entre máquinas.
- Se presentan dos nuevos tutoriales para Python, incluido uno sobre la creación de una aplicación Python en un contenedor Docker y otro sobre el uso de bibliotecas de ciencia de datos de Python para crear un modelo de aprendizaje automático.
- La versión 1.0 de la extensión Docker de Microsoft  para Visual Studio Code ya está disponible.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.43** <!-- omit in toc -->

Lanzado en marzo de 2020, Visual Studio Code 1.43 ofrece las siguientes mejoras y cambios:

- Editores de búsqueda que muestran los resultados de la búsqueda del espacio de trabajo en un editor de tamaño completo, con resaltado de sintaxis y líneas opcionales de texto circundante.
- Soporte para el lector de pantalla Orca en Linux.
- Esquinas de hoja arrastrables, con soporte extendido a los bordes entre vistas y editores. Anteriormente, con las hojas del editor, los usuarios podían cambiar el tamaño de dos hojas ortogonales simultáneamente arrastrando la intersección entre ellas. Ahora bien, esto también funciona en los bordes entre editores y vistas.
- Compilaciones de MacOS notariadas para el editor, por lo que los usuarios ya no reciben un cuadro de diálogo de advertencia de que Visual Studio Code no se puede abrir porque Apple no puede verificar si hay software malicioso.
- Una nueva configuración minimap.sizecontrola cómo el minimapa usa el espacio vertical.
- Se ha agregado un modo de selección de columna para crear una selección de columna.
- El valor predeterminado de renderWhitespaceconfiguración se ha cambiado de nonea selection. Los caracteres de espacio en blanco ahora se representarán de forma predeterminada en el texto resaltado.
- Una refactorización de cadenas de conversión a plantilla para JavaScript y TypeScript puede convertir rápidamente concatenaciones de cadenas en cadenas de plantillas, también conocidas como literales de plantilla.
- Se proporciona una vista de jerarquía de llamadas de TypeScript / JavaScript a través de TypeScript 3.8 , que se incluye con Visual Studio Code 1.43.
- Se ofrece una vista previa de la capacidad de sincronización de configuración para compartir configuraciones y combinaciones de teclas entre máquinas.
- El trabajo continúa en las extensiones de desarrollo remoto , que permiten el uso de un contenedor, una máquina remota o un subsistema de Windows para Linux como un entorno de desarrollo con todas las funciones. Hay soporte para hosts SSH (Secure Shell) de Windows y MacOS y conexión compartida SSH.

### **Novedades de Visual Studio Code 1.42** <!-- omit in toc -->

Visual Studio Code 1.42, lanzado en febrero de 2020, incluye estas actualizaciones:

- Se puede obtener una vista previa de los cambios de cambio de nombre. Al cambiar el nombre, los desarrolladores pueden confirmar un nuevo nombre y ver el panel de vista previa de Refactor.
- Las nuevas configuraciones limitan el número de editores abiertos.
- La adición de un resaltado de fondo hace que las regiones de código plegadas sean más fáciles de descubrir.
- La entrada de la Consola de depuración ahora usa el modo de idioma del editor activo actual, lo que significa que esta entrada admite colores de sintaxis, cierre automático, sangría, cierre automático de comillas y otras capacidades de idioma. Además, la presentación de entrada y salida en la consola de depuración se ha ajustado para que sea más distinguible. VS Code muestra una flecha junto a la expresión de entrada únicamente. Una nueva configuración, console.closeOnEndcontrola si la consola de depuración se cerrará automáticamente cuando finalice la depuración.
- Las tareas declaradas en JSON ahora se admiten en el nivel de configuración de usuario.
- La versión incluida de TypeScript se ha actualizado a la versión 3.7.5, una actualización menor con correcciones de errores. Entre las correcciones de errores: IntelliSense funciona para proyectos que no están almacenados en unidades C: en Windows.
- El panel que contiene los paneles Salida, Consola de depuración, Terminal y Problemas ahora se puede mover al lado izquierdo del editor. El comando "Ver: Cambiar posición del panel" se eliminó en favor de los comandos "Ver: mover panel a la izquierda", "Ver: mover panel a la derecha" y "Ver: mover panel a la parte inferior".
- El depurador para Java ahora admite puntos de interrupción de datos , para crear puntos de interrupción que se alcanzarán cuando cambie el valor de una variable.
- El trabajo continúa en las extensiones de desarrollo remoto , para usar una máquina o contenedor remoto como un entorno de desarrollo con todas las funciones. Se destaca el soporte mejorado para servidores Windows, incluida la detección automática del sistema operativo.
- Una función de vista de línea de tiempo, ahora en un estado de vista previa inicial, proporciona una vista unificada para visualizar eventos de series de tiempo como confirmaciones de Git, guardados de archivos y ejecuciones de prueba para un recurso como un archivo o carpeta.

### **Novedades de Visual Studio Code 1.41** <!-- omit in toc -->

Visual Studio Code 1.41 se lanzó el 12 de diciembre de 2019, con las siguientes capacidades nuevas:

- Carpetas compactas, en las que las carpetas secundarias individuales del Explorador de archivos ahora se representan de forma compacta. Las carpetas secundarias individuales se comprimirán en un elemento de árbol combinado. Esto es útil para estructuras de paquetes de Java, por ejemplo.
- Se ha mejorado el soporte para abrir repositorios en contenedores Docker. Esto se ha hecho a través del trabajo en curso en las extensiones de desarrollo remoto .
- Los resultados de las búsquedas de texto completo ahora se actualizarán a medida que el desarrollador escriba.
- Al comparar dos archivos que son editables, como los del Explorador de archivos o cuando se ejecuta una búsqueda y reemplazo global, ahora se puede editar y guardar el lado izquierdo.
- Los errores y las advertencias ahora se resaltan en línea en el minimapa (descripción general del código). El color de estas decoraciones se puede cambiar con nuevos colores temáticos.
- Se agregaron filtros predefinidos adicionales al panel Problemas. Los problemas se pueden filtrar por tipo. Los desarrolladores pueden ver los problemas relacionados con el archivo activo actual.
- Una capacidad de "cursor espejo" HTML ahora le permite editar etiquetas HTML de apertura y cierre simultáneamente. Este es el control estableciendo la mirrorCursorOnMatchingTagetiqueta, activada de forma predeterminada.
- El encadenamiento opcional , que produce expresiones más cortas y sencillas al acceder a una cadena de propiedades, es compatible con JavaScript y TypeScript.
- La refactorización Extract to Interface permite a los desarrolladores extraer rápidamente un tipo en línea a una interfaz para que pueda reutilizarse.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.40** <!-- omit in toc -->

Visaul Studio Code 1.40, lanzado el 7 de noviembre de 2019, presentó estas  nuevas características :

- VS Code ahora está construido con TypeScript 3.7 y también es compatible con TypeScript 3.7 directamente. VS Code ahora también usa Electron 6.0 para su edición de escritorio.
- Se puede ejecutar una nueva versión experimental de VS Code directamente en el navegador. Requiere hacer una copia del repositorio fuente de VS Code. Use yarn web para activarlo desde allí y vea los resultados en http: // localhost: 8080 .
- La barra de actividad se ha renovado ligeramente para indicar mejor qué actividad se selecciona y para mejorar el contraste general. Los bordes de las ventanas en VS Code ahora pueden tener un tema.
- La vista Esquema y el navegador de ruta de navegación tienen nuevas configuraciones para controlar qué símbolos se muestran.
- La nueva configuración le permite controlar el tamaño de los editores cuando se dividen.
- La aceleración de hardware de GPU se puede deshabilitar en Preferencias, para sistemas que experimentan problemas con el renderizado de GPU.
- La escala del minimapa de código se puede configurar a través de la editor.minimap.scale configuración, para aquellos que usan pantallas 21: 9 o de alta resolución.
- El resaltado de los corchetes coincidentes aparece cuando se encuentra en cualquier lugar dentro de la región entre corchetes, no solo cuando tiene el cursor junto a uno de los corchetes.
- Un comando "Duplicar selección" duplica la selección o la línea actual cuando no hay nada seleccionado.
- Representación mejorada de caracteres de combinación Unicode, con el recuento de puntos de código Unicode (en lugar de solo un recuento de columnas) que se muestra en la barra de estado.
- Más opciones de control de fuentes, como la capacidad de habilitar o deshabilitar funciones de fuentes específicas.
- El tiempo de espera del editor de diferencias para calcular los cambios ahora se puede modificar de su valor predeterminado de cinco segundos. Establezca el tiempo de espera en 0 para calcular siempre los cambios, independientemente del tiempo que tarde. El editor puede mostrar o ignorar las diferencias de espacios en blanco finales en las líneas.
- Los scripts de NPM se pueden ejecutar desde una carpeta utilizando una selección del menú contextual del Explorador de archivos.
- Las tareas de ejecución lenta generan una advertencia y la detección automática de tareas se puede desactivar para mejorar el rendimiento.
- Los puntos de interrupción aparecen en la regla de descripción general del archivo, no solo en el margen a la izquierda de los números de línea en el editor de código.
- Los usuarios de TypeScript pueden cambiar la configuración de la memoria para la instancia del servidor TypeScript que VS Code ejecuta para IntelliSense.
- El terminal integrado tiene una serie de características nuevas:
  - Las combinaciones de teclas con cuerdas seleccionadas se pueden pasar directamente a VS Code en lugar de evaluarse en la terminal.
  - Si presiona Alt mientras usa la rueda del mouse, se desplazará más rápido según la  editor.fastScrollSensitivityconfiguración.
  - La acción del clic derecho se puede configurar para pegar siempre en el terminal.
- Las herramientas Git de VS Code han agregado estas nuevas características:
  - Los archivos sin seguimiento en Git ahora se pueden ocultar por completo o mostrarse en una lista separada de cambios.
  - La acción "Revelar en el Explorador" ahora está disponible para los archivos en los que se hace clic con el botón derecho en la lista de Git.
  - Las acciones de clonación de Git tienen un medidor de progreso.
- Las extensiones tienen muchas API nuevas, tokens de color para símbolos y nuevos métodos para recuperar datos de un URI externo a la extensión.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## **Novedades de Visual Studio Code 1.3x**

### **Novedades de Visual Studio Code 1.39** <!-- omit in toc -->

Visual Studio Code 1.39, publicado el 9 de octubre de 2019 y también conocido como la versión de septiembre de 2019, contiene los siguientes aspectos destacados:

- Las selecciones de texto se muestran en minimapa (esquema de código), y los desarrolladores pueden ver las regiones en la descripción general del minimapa. Además, el control deslizante del minimapa ahora se puede arrastrar con un toque.
- Una región de plegado se puede expandir con el comando Alternar plegado.
- La vista de control de código fuente se actualizó para utilizar el último widget de árbol. Los usuarios pueden alternar entre una lista y una vista de árbol con el modo de visualización de alternancia en la barra de título del control de fuente.
- Un nuevo comando permite la creación de terminales con un directorio de trabajo actual personalizado (cwd).
- La información de autocompletado y desplazamiento para los atributos HTML ARIA ahora tiene una referencia al WAI-ARIA correspondiente .
- La finalización de la propiedad CSS ahora inserta un punto y coma al final de una línea. Además, al completar las variables CSS, si la variable original es una cadena de código, VS Code ahora mostrará el elemento de finalización con su color.
- Para la depuración, VS Code ahora muestra ubicaciones de candidatos de puntos de interrupción en línea, lo que facilita la colocación de un punto de interrupción en la posición correcta.
- Cuando se muestran sesiones o hilos en la vista Pila de llamadas, las acciones de depuración ahora se muestran en línea al pasar el mouse. Esto facilitará el control del flujo de depuración al depurar varios subprocesos o sesiones.

### **Novedades de Visual Studio Code 1.38** <!-- omit in toc -->

Visual Studio Code 1.38, lanzado en septiembre de 2019, ofrece las siguientes características nuevas y mejoras:

- Se ha mejorado el proceso de creación de carpetas y archivos de nivel superior en el Explorador. Ahora hay tres formas de crear un archivo o carpeta en la raíz del Explorador de archivos, que implican desplazarse más allá del último elemento, presionar Escape para borrar el enfoque y la selección, o usar un menú contextual en la barra de desplazamiento.
- El editor de configuración muestra ahora errores para artículos de arreglo de cuerdas cuando el valor actual no establezca el esquema `minItems`, `maxItems`, `enum`, o `item.pattern`.
- El icono de cancelación de búsqueda se ha actualizado para representar mejor la acción cuando se realizan búsquedas largas.
- En el editor, los desarrolladores ahora pueden personalizar el número de líneas visibles que se mostrarán alrededor del cursor al mover el cursor hacia el principio o el final de un archivo.
- Una nueva configuración `incrementalNaming`, controla la asignación de nombres de archivos duplicados, que pueden tener los valores `simple` o `smart`.
- La búsqueda y reemplazo de texto de varias líneas ahora es compatible con el control de búsqueda del editor.
- Ahora se muestra un mensaje antes de abrir los enlaces salientes.
- Se ofrecen nuevas acciones para copiar o revertir el contenido eliminado cuando se usa el editor de diferencias en línea.
- La opción Conservar caso agregada al control Buscar / Reemplazar en la versión 1.37 ahora está disponible como el ícono AB en la búsqueda y reemplazo global. Se puede aplicar un nuevo modo de conservación de mayúsculas y minúsculas a palabras separadas por guiones.
- Se ha mejorado la compatibilidad con la extensión CSS de Less.js, con compatibilidad con funciones como funciones raíz y búsquedas de mapas.
- Desde la vista Variables, los desarrolladores ahora pueden crear puntos de interrupción de datos que se verán afectados cuando cambie el valor de la variable subyacente.
- Se incluye TypeScript 3.6.2, lo que trae mejoras de lenguaje, como generadores más estrictos.
- Los comentarios JSDoc ya no se fusionan para IntelliSense. 
- Se ofrece edición con punto y coma para JavaScript y TypeScript.
- Un comando Alternar tamaños de grupos de editores alternará entre maximizar el grupo de editores activo y nivelar los anchos del grupo de editores.
- El motor de diseño del banco de trabajo se ha reescrito para usar el mismo widget de cuadrícula que el editor. La configuración, `useExperimentalGridLayout` estará habilitada de forma predeterminada.
- Se agrega una configuración `touchbar.ignored` que puede eliminar de forma selectiva los comandos de Visual Studio Code de la barra táctil de MacOS.
- Se incluyen nuevas claves de contexto del grupo de editor.
- El modo Screencast se ha mejorado, con aspectos destacados como un límite en la longitud de la etiqueta de encuadernación de screencast y mejoras en el estilo de renderizado de los atajos de teclado.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.37** <!-- omit in toc -->

Visual Studio Code 1.37, publicado en agosto de 2019, ofrece las siguientes nuevas capacidades y mejoras:

- El editor de configuraciones ahora admite la edición de configuraciones de matriz de cadenas.
- Los desarrolladores ya no ven advertencias de archivos settings.json no compatibles o desconocidos. Las configuraciones inactivas se desvanecen de manera similar al código fuente no utilizado, con un cursor para explicar por qué. Los usuarios tampoco ven advertencias para configuraciones o extensiones que están deshabilitadas.
- En el menú contextual Archivo, el nuevo comando Revelar en el Explorador navega por un archivo en el Explorador de archivos.
- La configuración `editor.renderWhitespace` agrega soporte para la opción `selection`. Los caracteres de espacio en blanco se muestran solo en el texto seleccionado.
- El Explorador de scripts de NPM se contrae en el Explorador de archivos cuando hay un archivo package.json en la raíz del espacio de trabajo.
- Se ha mejorado la visibilidad de los resultados de búsqueda del minimapa (esquema de código).
- Los usuarios pueden preservar el caso al hacer un reemplazo en el widget Buscar del editor. Además, el estado activo del botón de alternar del widget Buscar se ha actualizado con un fondo relleno para que los desarrolladores puedan saber más fácilmente cuándo están enfocados en un alternar activo.
- Se ha mejorado la navegación para la importación de SCSS @.
- Se ha mejorado la finalización del valor de la propiedad CSS.
- Una configuración previamente experimental que dividía el servidor TypeScript que alimenta las características del lenguaje JavaScript y TypeScript de Visual Studio Code en servidores de sintaxis y semántica separados ahora está activada de forma predeterminada. Las operaciones basadas en sintaxis, como el plegado de código, deberían estar disponibles más rápidamente.
- Para la creación de extensiones, se incluye una nueva API para que las extensiones administren, lean y escriban archivos y carpetas. Esta es una alternativa al módulo del sistema de archivos fs de Node.js. El acceso a archivos de sistemas de archivos contribuidos está habilitado.
- La API TerminalRenderer propuesta introducida en 2018 ha sufrido un cambio importante y ha quedado obsoleta en favor de los terminales de extensión.
- Para el terminal integrado, una mejora de UX de búsqueda se alinea con otros emuladores de terminal, con la búsqueda comenzando desde la parte inferior del búfer y buscando hacia arriba, lo que lleva a una experiencia menos desorientada. Anteriormente, la búsqueda desde la terminal comenzaba en la parte superior de la ventana de visualización de la terminal y se buscaba hacia abajo.
- Se han mejorado los informes y diagnósticos de errores en el terminal.
- Los iconos de productos actualizados son uniformes en color, tamaño y estilo.

### **Novedades de Visual Studio Code 1.36** <!-- omit in toc -->

Visual Studio Code 1.36, publicado en julio de 2019, ofrece las siguientes nuevas capacidades y mejoras:

- Un menú contextual de la barra de estado para mostrar y ocultar entradas individuales.
- Soporte en el widget de árbol para guías de sangría, lo que hace que estas guías estén disponibles en el Explorador de archivos, la vista de búsqueda, las vistas de depuración y en otros lugares.
- Una nueva extensión nocturna de JavaScript y TypeScript utiliza la compilación nocturna de TypeScript para TypeScript IntelliSense del editor, lo que facilita la prueba de las últimas funciones de TypeScript y proporciona comentarios.
- Un instalador de código de Visual Studio para Java ayuda a los desarrolladores a configurar un entorno Java.
- Un selector de shell predeterminado mejorado está disponible para MacOS y Linux, que expone los shells registrados en el sistema leyendo / etc / shells.
- Se ofrece control para el orden de ejecución de tareas y subtareas.
- Un nuevo comando de depuración, Jump to Cursor, permite a los desarrolladores mover la ejecución del programa a una nueva ubicación sin ejecutar ningún código intermedio. Esta capacidad debuta para la extensión C # pero se agregarán más extensiones.
- Una configuración de la consola `console.wordwrap` controla si el ajuste de palabras está habilitado en la consola de depuración.
- Ahora, las carpetas se pueden copiar arrastrándolas y soltándolas desde fuera de Visual Studio Code al Explorador de archivos.
- El trabajo continúa en las extensiones de desarrollo remoto , en forma de vista previa, lo que permite a los desarrolladores utilizar un contenedor, un subsistema remoto o el subsistema de Windows para Linux como un entorno de desarrollo con todas las funciones.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.35** <!-- omit in toc -->

Visual Studio Code 1.35, que llegó en junio de 2019, tenía estas mejoras:

- Selección inteligente para JavaScript / TypeScript, utilizando el conocimiento semántico para expandir selecciones para clases, importaciones, declaraciones y tipos.
- Ir a la definición se ha mejorado con una navegación más rápida a través de múltiples definiciones.
- Las migas de pan están ahora activadas de forma predeterminada para una navegación rápida por archivos y símbolos.
- La clasificación de sugerencias para JavaScript y TypeScript se ha ajustado para priorizar las sugerencias de variables locales sobre las sugerencias de globales o importaciones automáticas.
- `merge-conflict.diffViewPosition` permite la apertura de la vista de diferencias en un nuevo grupo de editores al comparar conflictos de fusión. 
- Soporte de color verdadero, con el terminal que ahora admite programas que usan secuencias de escape de color verdadero (24 bits), lo que representa el color correcto en lugar de una aproximación.
- La actualización se envía con TypeScript 3.5.1.
- Las extensiones de desarrollo remoto están en vista previa, lo que permite a los desarrolladores utilizar un contenedor, una máquina remota o el subsistema de Windows para Linux como un entorno de desarrollo con todas las funciones. Las extensiones se ejecutan en el contexto del espacio de trabajo remoto tal como lo harían en un espacio de trabajo local.
- El icono actualizado de Visual Studio Code hace su debut.

### **Novedades de Visual Studio Code 1.34** <!-- omit in toc -->

Visual Studio Code 1.34 llegó en mayo de 2019, con estas nuevas características y mejoras:

- CodeLens, que proporciona información contextual procesable en el código fuente, ha recibido una mejora en la que las ubicaciones de CodeLens se almacenan en caché y se restauran inmediatamente después de cambiar de editor.
- Para la depuración, la nueva configuración `showSubSessionsInToolBar` controla si las subsecciones de depuración se muestran en la barra de herramientas de depuración. Cuando la configuración es falsa, el stopcomando de una subsesión detiene la sesión principal. Esta configuración predeterminada es falsa.
- Los valores de propiedad CSS con guión, como  -ms-grid ahora, vienen después de completar la cuadrícula.
- La propiedad `revealProblems` de la tarea permite a los desarrolladores mostrar automáticamente el panel Problemas. Los valores de propiedad son always, nevery onProblem.
- Para la creación de extensiones, los desarrolladores pueden depurar más de una extensión a la vez. Esto ayuda al desarrollar un conjunto de extensiones interdependientes o estrechamente acopladas.
- El tutorial "[Implementar Python en Azure Functions](https://code.visualstudio.com/docs/python/tutorial-azure-functions){:target="_blank" rel="nofollow,noreferrer"}" describe cómo crear funciones de Azure sin servidor.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.33** <!-- omit in toc -->

Microsoft lanzó Visual Studio Code 1.33 en abril de 2019 con las siguientes características nuevas y mejoras. 

- Ahora es más fácil configurar el idioma de visualización. La ejecución de los comandos Configurar idioma de visualización abrirá una lista de Selección rápida de las configuraciones regionales disponibles según las selecciones de idioma instaladas, en lugar de tener que abrir el archivo JSON. Cuando se realiza una selección, la configuración regional se actualizará y se le pedirá al usuario que reinicie Visual Studio Code.
- La vista Control de código fuente se ha alineado para comportarse como otras vistas, como las vistas Explorador de archivos y Editores abiertos. Los repositorios se pueden hacer visibles u ocultos mediante acciones del menú contextual. El orden y el tamaño se pueden conservar. La vista de control de código fuente también cambia de tamaño hasta un cierto número de proveedores de control de código fuente.
- Hay nuevas configuraciones para personalizar la pantalla IntelliSense. El entorno `suggest.filteredTypes`, por ejemplo, filtros de tipos específicos de IntelliSense, con palabras filtradas con: `{ "keyword": false }`.
- Se puede designar un formateador de documentos predeterminado.
- El comportamiento de Ir a definición se puede personalizar.
- Una refactorización "Convertir a parámetros con nombre" para TypeScript permite organizar rápidamente listas largas de parámetros de función al convertir la función para que tome un único objeto de parámetro con nombre.
- Una configuración nueva `completion.triggerPropertyValueCompletion` permite deshabilitar la finalización del valor de la propiedad.
- Se ha agregado soporte de depuración para subsecciones. Las sesiones de depuración se pueden mostrar como un árbol en la interfaz de usuario del depurador. Esta funcionalidad está disponible a través de una nueva API de extensión, lo que significa que requiere la adopción por parte de las extensiones del depurador. Solo el depurador de Node.js lo admite ahora.
- La capacidad de abrir automáticamente una URL en un navegador tan pronto como se detecte una salida de mensaje específico se ha movido fuera de la etapa de vista previa. Esta función es útil para depurar el código fuente del servidor web.
- Se ha mejorado la notificación de error de activación de la extensión cuando Visual Studio Code detecta una dependencia de extensión faltante. Se proporciona una acción para instalar la dependencia que falta.

### **Novedades de Visual Studio Code 1.32** <!-- omit in toc -->

Microsoft lanzó Visual Studio Code 1.32 en marzo de 2019. Sus nuevas características incluyen:

- Los desarrolladores pueden obtener una vista previa y aplicar colores y temas de iconos de archivos justo después de instalar una extensión que los proporcione. No es necesario recargar.
- Ahora es posible editar la cláusula `when` de una combinación de teclas en el editor de métodos abreviados de teclado.
- Se agregó la barra de comandos con las acciones Solución rápida y Revisión de problemas al cursor sobre Problemas. Se pueden aplicar soluciones rápidas desde el desplazamiento mientras que Peek Problem abre la vista de peek en el editor. Los desarrolladores pueden navegar al error o advertencia anterior y siguiente desde una vista previa del problema.
- Las extensiones pueden marcar una acción de código como "preferida" para indicar que es la solución más razonable para un problema.
- Se puede configurar el tamaño de la fuente y la familia, y la altura de la línea de la consola de depuración utilizando los ajustes incluyendo: `console.fontSize`, `debug.console.fontFamily`, y `debug.console.lineHeight`.
- HTML IntelliSense (compleciones inteligentes) se ha mejorado para los atributos ARIA (aplicaciones de Internet enriquecidas y accesibles).
- La extensión Vetur proporciona IntelliSense para Vue.js interpolaciones .
- ES6 (ECMAScript 2015) está dirigido a la nueva versión del editor. ES6 está mucho más cerca de TypeScript y produce menos código, para tiempos de carga más rápidos. (El código de Visual Studio está escrito en TypeScript). El editor ahora admite la carga dinámica de extensiones de complementos de TypeScript.
- Visual Studio Code 1.32 incluye TypeScript 3.3.3, una pequeña actualización con algunas correcciones de errores.

Microsoft advirtió que el soporte de Linux de 32 bits para Visual Studio Code terminará pronto. Se recomienda a los desarrolladores que actualicen a la versión de 64 bits.

La compañía también dijo que estaba progresando en la reducción de errores nulos estrictos en el editor.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.31** <!-- omit in toc -->

Microsoft lanzó Visual Studio Code 1.31 en febrero de 2019 con estos cambios importantes:

- Ya no es necesario volver a cargar el editor cada vez que se instala o actualiza una extensión. Las recargas interrumpieron el flujo de trabajo e interrumpirían el estado de cualquier código en ejecución dentro del editor. Tenga en cuenta que las extensiones que dependen de otras extensiones pueden requerir que se vuelva a cargar el editor, pero la mayoría de las extensiones deberían actualizarse sin problemas. Además, se encuentran disponibles muchas adiciones de creación de extensiones nuevas, como la capacidad de abrir recursos en un navegador web del sistema (por ejemplo, un archivo PDF) o la capacidad de sugerir cambios a través del sistema Quick Fixes de Visual Studio Code.
- El widget de árbol utilizado en el editor (por ejemplo, para el panel del Explorador) se ha reescrito desde cero para ser más rápido y admitir nuevas funciones, incluido el tipo para navegar dentro de un árbol, en lugar de solo poder usar el widget de búsqueda; enlaces de comandos más flexibles para extensiones que usan el widget de árbol; expandir / contraer todo manteniendo presionada la tecla Alt al abrir / cerrar los nodos del árbol; tamaños de sangría personalizables para nodos de árboles; y mucho más.
- El panel Problemas ahora muestra resultados de varias líneas en una vista expandible / contraíble. Esto es útil para errores complejos que implican mostrar código en contexto y para otros comentarios detallados.
- El terminal integrado redistribuye las líneas correctamente cuando se cambia su ancho. Anteriormente, la salida se estropeaba. Los usuarios de Windows tienen la opción de utilizar la API nativa de la consola de Windows para que el terminal resuelva muchos problemas de compatibilidad. También se ha mejorado el tipo de búsqueda en la terminal. Por ejemplo, escribir para buscar ahora encuentra todas las instancias de un término utilizado varias veces en una sola línea.
- Las configuraciones de tareas y depuración ahora pueden aceptar entradas de usuario, por ejemplo, como una forma de elegir de forma interactiva desde qué subcarpeta ejecutar las pruebas. Además, Tareas ahora se puede configurar para proporcionar resultados en una versión subdividida de la ventana de terminal integrada actual en lugar de una completamente nueva.
- Un nuevo "modo screencast" proporciona más información visual para el cursor y las pulsaciones de teclas.
- El menú Ir de la aplicación incluye opciones más utilizadas.
- El sistema de Referencias (para buscar el uso de funciones, etc.) ha agregado un historial, lo que permite búsquedas rápidas del código utilizado anteriormente.

### **Novedades de Visual Studio Code 1.30** <!-- omit in toc -->

Visual Studio Code 1.30 se lanzó a mediados de diciembre de 2018. Algunas de las principales adiciones a esta versión incluyen las siguientes:

- Las extensiones de Visual Studio Code se pueden revertir fácilmente a una versión anterior si la actual tiene errores. Puede hacerlo mediante la acción Instalar versión específica de la paleta de comandos, o seleccionando "Instalar otra versión" en el icono de engranaje junto a la extensión en la vista Extensiones.
- TypeScript 3.2.2 ahora es compatible. Con esto viene un mejor soporte para devoluciones de llamada en JavaScript y TypeScript (ahora se muestran con más contexto), manejo mejorado de cambios de nombre en ambos lenguajes (los cambios de nombre ahora funcionan en el contexto de una desestructuración) y otras características útiles de JavaScript / TypeScript.
- Los cuadros de búsqueda en la interfaz de usuario ahora aceptan entradas de varias líneas, ya sea pegadas o escritas al presionar Shift + Enter para insertar una nueva línea. Las búsquedas de coincidencias de varias líneas tampoco necesitan expresiones regulares; funcionan como están.
- La vista Buscar todas las referencias, utilizada para mostrar todos los lugares de un proyecto que hacen referencia a una variable o rutina determinada, ahora tiene un historial de búsqueda propio. Anteriormente, esto se consideraba una función de vista previa, pero ahora se promueve para su uso completo.
- La depuración ahora es más fácil de configurar para un nuevo proyecto, por ejemplo, al facilitar la especificación de variables de entrada del usuario para configuraciones de depuración. Ahora también es posible borrar consolas de depuración antiguas y depurar procesos de Node.js directamente desde el Explorador de procesos de Visual Studio Code.
- Se perfilan las extensiones con errores que cuelgan Visual Studio Code. Si una extensión no responde de forma crónica, Visual Studio Code anima al usuario a que presente un problema al desarrollador de la extensión.
- Los menús ahora tienen sugerencias de desbordamiento y sugerencias de desplazamiento, para acomodar menús potencialmente más grandes que la pantalla.
- Los fragmentos ahora pueden insertar comentarios de bloque con la sintaxis adecuada para el idioma en uso.
- Las tareas se pueden configurar para que se ejecuten automáticamente cada vez que se abre una carpeta determinada en Visual Studio Code.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## **Novedades de Visual Studio Code 1.2x**

### **Novedades de Visual Studio Code 1.29** <!-- omit in toc -->

La actualización de octubre de 2018 a Visual Studio Code, versión 1.29, agregó las siguientes características principales:

- Las búsquedas de expresiones regulares admiten el modo multilínea. Ahora puede buscar una expresión que abarque uno o más saltos de línea si incluye un literal de nueva línea ( \n) en una expresión de búsqueda. Ahora también es posible usar referencias anteriores y aserciones de anticipación en expresiones regulares, aunque primero debe establecer la opción search.usePCRE2 en "verdadero".
- La compatibilidad con MacOS ahora incluye control de modo de pantalla completa. Puede utilizar el modo de pantalla completa nativo de MacOS o la implementación del modo de pantalla completa de Visual Studio Code, que no crea un espacio de MacOS en el escritorio. Visual Studio Code también ha mejorado el soporte para MacOS Mojave Dark Mode; la temática de Visual Studio Code se asemeja más a la propia temática del modo oscuro cuando el modo oscuro está habilitado.
- Los marcos de pila en el depurador se pueden contraer para una exploración más rápida de la pila de llamadas.
- Un nuevo comando rápido, Mostrar todas las referencias, abre una nueva vista de la barra lateral que proporciona una lista navegable de referencias a una función o variable en particular.
- Hay muchas características nuevas  disponibles para los creadores de extensiones para Visual Studio Code, y los ejemplos de código en el repositorio de Microsoft  se han limpiado y se han hecho más consistentes. Además, ahora puede crear extensiones sin tener que nombrar explícitamente a un editor, lo que resulta útil si solo está creando una extensión para uso interno. 

### **Novedades de Visual Studio Code 1.28** <!-- omit in toc -->

La versión de septiembre de 2018 de Visual Studio Code, versión 1.28, proporciona mejoras en el comportamiento del editor de código, sus funciones de conveniencia y la integración de Git. Entre las mejoras más notables:

- Los fragmentos de código , una forma de guardar y reutilizar fragmentos comunes de repetición, ahora se pueden guardar como parte de un proyecto y compartir con otros. Los títulos de los fragmentos, o prefijos, ya no se limitan a una sola cadena, lo que facilita la búsqueda de un fragmento escribiendo uno de los posibles prefijos.
- Git ahora proporciona una interfaz de usuario más detallada para manejar eliminaciones en conflicto, permite restringir la longitud de un mensaje de confirmación de Git, tiene reglas de validación para los nombres de las ramas proporcionadas por medio de una expresión regular y permite aplicar el último alijo espacio de trabajo ejecutando una acción de paleta de comandos global.
- El editor ahora admite una gama más amplia de sugerencias para completar la pestaña (incluida Shift-Tab para retroceder a través de sugerencias), puede saltar automáticamente a la última ubicación de edición en un archivo mediante una combinación de teclas y permite que los archivos se guarden sin formato automático. Esto último es útil cuando se edita un archivo proporcionado por otro equipo con diferentes reglas de pelusa.
- El código TypeScript ahora se puede refactorizar rápidamente para usar comandos async / await.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.27** <!-- omit in toc -->

- La versión de agosto de 2018 de Visual Studio Code, versión 1.27, incluye muchas mejoras de UI y UX, cambios de extensión de depuración y adiciones a la edición de archivos CSS y JSON.
- El editor de configuración de usuario basado en GUI, implementado en compilaciones anteriores como una característica experimental, es ahora la forma predeterminada de editar la configuración de Visual Studio Code. Todavía es posible editar el JSON subyacente directamente, pero el editor de configuración proporciona opciones para un valor, validación de campo y otros comentarios útiles.
- Al editar archivos CSS, las finalizaciones de ruta para las @importdeclaraciones CSS, SCSS y Less ahora aparecen automáticamente, y al hacer clic en los enlaces definidos por las  declaraciones @importy url(), se accede a sus definiciones. La edición JSON ahora admite funciones disponibles en el último borrador de esquema, como la evaluación condicional de esquemas.
- Una función aportada por la extensión de depuración Node.js, la capacidad de ver todos los scripts cargados en una vista actualizada dinámicamente, ahora está disponible como una función de depuración incorporada para todos los lenguajes que pueden hacer uso de dicha metáfora.
- Las API de extensión recientemente propuestas ofrecen la capacidad de saber qué instancias de control de fuente se seleccionan e incluyen proveedores para comentarios en línea en documentos o espacios de trabajo (por ejemplo, para conversaciones similares a Gitter entre desarrolladores).
- Muchas características nuevas para la creación de extensiones, como una actualización del Protocolo del servidor de idiomas que permite que las entradas del menú se completen en función de los anuncios del servidor de idiomas.
- Personalización mejorada de las barras de título y los menús, de modo que (por ejemplo) los temas oscuros se aplican de forma coherente, la navegación con el teclado se comporta mejor en la barra de menús y la barra de menús en sí es menos intrusiva.
- La navegación de ruta de navegación dentro de los archivos editados, introducida en la última compilación, ahora respeta los temas del editor y las exclusiones de archivos.
- El menú "Tareas", ahora llamado "Terminal", ahora abarca más funciones del terminal integrado.
- Los enlaces de teclas ahora pueden ser por plataforma.
- El cierre automático de los caracteres entre corchetes en el editor ahora se puede personalizar aún más.

### **Novedades de Visual Studio Code 1.26** <!-- omit in toc -->

La versión de julio de 2018 de Visual Studio Code, versión 1.26, ofrece mejoras, incluida la navegación por rutas de navegación, para saltar a archivos y símbolos en un espacio de trabajo.

Las migas de pan muestran la ruta del archivo y, mediante extensiones, la ruta del símbolo a la posición del cursor. Los símbolos mostrados coinciden con la vista Esquema e Ir a símbolo. Los desarrolladores pueden personalizar la apariencia de las rutas de navegación.

Para comenzar a usar rutas de navegación, habilítelo seleccionando Ver> Alternar ruta de navegación a través de la ruta de navegación.

Otras capacidades en Visual Studio Code 1.26 incluyen:

- Las soluciones rápidas del panel Problemas permiten a los desarrolladores aplicar correcciones de código mientras revisan errores y advertencias.
- Los mensajes de error de TypeScript y JavaScript ahora son más claros.
- Las etiquetas JSX se cierran automáticamente cuando los desarrolladores  >escriben en un archivo TypeScript o JavaScript. Este comportamiento coincide con lo que ya se estaba haciendo con archivos HTML.
- El paquete de configuración de usuario para Windows ahora está disponible en modo estable; no se necesitan privilegios de administrador para instalarlo.
- La actualización en segundo plano es más fluida.
- La selección de columnas se admite en el terminal integrado, usando Alt-clic.
- La solución rápida Agregar importación faltante se puede aplicar a todas las importaciones faltantes en un archivo JavaScript / TypeScript. La solución solo agrega importaciones de símbolos con una única definición potencial. Si hay potencialmente varias definiciones, los desarrolladores deben corregir rápidamente el error individual y seleccionar la importación específica.
- La búsqueda de extensiones se ha simplificado al agregar complementos automáticos de IntelliSense al campo de búsqueda de extensiones.
- Los paquetes de extensión se pueden administrar como una sola unidad o por extensión individual.
- Un nuevo editor de configuración, todavía en versión beta, incluye una nueva experiencia de usuario de encabezado y descripciones de configuración representadas como rebajas.
- TypeScript 3.0.1 se envía con la versión.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.25** <!-- omit in toc -->

La versión de junio de 2018 de Visual Studio Code, versión 1.25, promueve varias características de vista previa a estables e introduce algunas nuevas funciones de diseño del editor. Las nuevas funcionalidades:

- Los editores ahora se pueden colocar horizontal y verticalmente en un formato de cuadrícula. Hay algunos cambios de comportamiento en la forma en que se abren, manipulan y cierran los editores, pero las personas que usan solo uno o dos editores a la vez no deberían notar cambios importantes.
- La vista de esquema, ahora sin vista previa, permite que el contenido de un archivo se muestre en un formato de descripción general a través de una nueva API. Por ejemplo, ahora puede mostrar las funciones, constantes y métodos de atributo de un archivo de programa en una vista de árbol. Los usuarios de IDE como Eclipse han disfrutado durante mucho tiempo de las vistas de esquema, pero hasta ahora no ha estado disponible algo equivalente en Visual Studio Code.
- Las instancias de Visual Studio Code ahora se pueden ejecutar desde un directorio autónomo, como una unidad USB o un recurso compartido de red.
- El tráfico de red hacia y desde servicios que implementan el Protocolo de servidor de idiomas (LSP) se puede inspeccionar y analizar. Esto es principalmente para aquellos que desarrollan implementaciones de LSP, como una extensión para implementar el soporte de LSP para un lenguaje dado.
- Los usuarios de Python tienen un nuevo tutorial para hacer uso del marco web Flask.

Nuevo en beta esta vez es el Editor de configuración. Normalmente, cambiar manualmente la configuración en Visual Studio Code implica editar archivos JSON que describen la configuración, un proceso tedioso y propenso a errores. El Editor de configuración proporciona una interfaz gráfica de usuario más legible y navegable para esos archivos.

### **Novedades de Visual Studio Code 1.24** <!-- omit in toc -->

La versión de mayo de 2018 de Visual Studio Code, versión 1.24, se centra en la detección de variables, la refactorización de archivos y la nueva funcionalidad de edición. Sus nuevas características incluyen:

- La capacidad de detección de variables no utilizadas atenúa estas variables en archivos JavaScript y TypeScript. Los parámetros y las importaciones también aparecen en gris. Los desarrolladores pueden utilizar una solución rápida para eliminarlos automáticamente.
- Para la refactorización de archivos, los desarrolladores pueden incorporar clases y funciones en sus propios archivos.
- Las rutas de importación en JavaScript y TypeScript se actualizan automáticamente cuando se mueve o se cambia el nombre de un archivo. La función requiere TypeScript 2.9 , que ahora viene con el editor.
- El comando Duplicar espacio de trabajo en nueva ventana hace lo que dice: Duplica el espacio de trabajo actual en otra ventana.
- IntelliSense se presta para las variables, con variables predefinidas sugieren como terminaciones dentro de los valores de cadena para jsony launch.jsonarchivos de configuración.
- Los comandos de zoom de fuente aumentan o disminuyen el tamaño de fuente del editor mientras que el resto de la interfaz de usuario se deja como está. Esta función ayuda con la programación en pareja y las presentaciones.
- El plegado con reconocimiento de sintaxis está habilitado de forma predeterminada para TypeScript y JavaScript.
- El Editor de configuración proporciona una GUI para descubrir y modificar la configuración de Visual Studio Code.
- La capacidad de la vista Esquema muestra el árbol de símbolos del editor activo actualmente.
- La función de ubicación de la barra de herramientas de depuración puede flotar, acoplar u ocultar la barra de herramientas.
- La función de diseño de cuadrícula del editor permite abrir editores vertical y horizontalmente sin límites. Esta función estará disponible en la versión beta del editor a principios de este mes.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.23** <!-- omit in toc -->

La versión de abril de 2018 de Visual Studio Code, versión 1.23, se centra en el trabajo de API para admitir los autores de extensiones. Sus características incluyen:

- Guías de sangría resaltadas para visualizar la sangría del código fuente.
- Los autores de extensiones pueden desarrollar elementos personalizados de la barra de actividades.
- La capacidad del explorador de código de NPM permite ejecutar y depurar scripts de NPM en un proyecto.
- La configuración `codeActionsOnSave` permite a los desarrolladores configurar un conjunto de acciones de código que se ejecutarán cuando se guarde un archivo.
- El editor ha mejorado la compatibilidad con Unicode.
- El filtrado de vista de problemas permite a los desarrolladores elegir archivos que mostrarán advertencias y errores.
- Para CSS, el plegado de regiones permite la creación de regiones en código CSS / SCSS / Less. Esto proporciona un útil plegado de código. Además, se ha mejorado el soporte de nuevas propiedades en CSS, con sugerencias para propiedades experimentales.
- La función Organizar importaciones de TypeScript y JavaScript está ahora en producción, ya no está en versión beta. Usé esta función para eliminar las importaciones no utilizadas y ordenar las importaciones restantes en el código fuente.
- TypeScript 2.8.3 se envía con la actualización y corrige algunos errores.
- En el entorno de trabajo, se ha mejorado el flujo de trabajo de clonación de Git
- Markdown ha agregado soporte para la búsqueda de símbolos en el espacio de trabajo.
- Para la depuración, las expresiones de puntos de registro admiten finalizaciones inteligentes y visualización de objetos estructurados.

### **Novedades de Visual Studio Code 1.22** <!-- omit in toc -->

La versión 1.22 de Visual Studio Code, lanzada en marzo de 2018, ofrece un plegado de código con sintaxis mejorado, así como un mejor soporte para archivos grandes.

Para el plegado de código consciente de la sintaxis, los rangos de plegado en HTML, las hojas de estilo Less y Scss, JSON y Markdown ahora se calculan de forma predeterminada según la sintaxis del lenguaje.

Los rangos ya no dependen de una sangría bien formada. También puede habilitar esta función para TypeScript y JavaScript a través de la configuración `”typescript.experimental.syntaxFolding”: true`.

También puede volver al plegado basado en sangría si lo desea. Microsoft también está proponiendo una nueva API para extensiones para que otros lenguajes puedan proporcionar proveedores de plegado conscientes de la sintaxis.

Las otras características nuevas de la actualización de la versión 1.22 incluyen:

- Ahora es más fácil abrir archivos grandes. Anteriormente, la apertura de archivos en el rango de 2GB o más solicitaba un relanzamiento desde la línea de comando con una bandera. Ahora, aparece una notificación que permite un reinicio rápido con más memoria disponible.
- La actualización automática en segundo plano en Windows está habilitada.
- Se han realizado mejoras en la capacidad de detección de las acciones de código sugeridas de JavaScript y TypeScript, con cambios propuestos para ayudar a mejorar el código fuente. Una sugerencia de ejemplo incluye la conversión de clases de ECMAScript 5 a ECMAScript 6 .
- La navegación de errores y advertencias a través de F8 da cuenta de todos los errores informados. En lugar de recorrer el interior de un archivo, pasa al siguiente archivo con errores y viceversa.
- La nueva función Auto Attach se ha agregado al depurador Node.js del editor, que se adjunta automáticamente a los procesos Node.js iniciados en modo de depuración desde el terminal integrado de Visual Studio Code. Los desarrolladores deben habilitar esta función.
- Se presenta un nuevo comando para navegar a los resultados de búsqueda de referencia. Activar Buscar todas las referencias en un símbolo y usar F4 y Shift-F4 Esto es útil para realizar ediciones en todos los lugares que hacen referencia a un símbolo, sin tener que mover los dedos del teclado.
- El trabajo inicial se incluye en el desarrollo de puntos de registro. Un punto de registro es una variante de un punto de interrupción que no irrumpe en el depurador pero registra un mensaje en la consola. Son útiles para inyectar registros cuando no se puede detener la depuración de servidores de producción.
- La API de extensión del editor ahora admite la creación de diagnósticos de "pistas", que son sugerencias sobre cómo mejorar un proyecto, por ejemplo, ejecutando una refactorización particular.
- El editor ahora viene con TypeScript 2.8.
- El terminal ahora tiene seguimiento de comandos, que intenta adivinar cuándo se ejecuta un comando y permite una navegación y selección "fácil" entre ellos.
- Se proporciona una versión beta del comando Organized Imports para JavaScript y TypeScript; elimina las importaciones no utilizadas y clasifica las importaciones restantes.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.21** <!-- omit in toc -->

La versión de febrero de 2018 de Visual Studio Code, versión 1.21, ofrece estas nuevas características:

- Una interfaz de usuario de notificaciones, para administrar las notificaciones.
- División de terminal integrada, en la que la terminal puede admitir varias vistas a la vez, para facilitar la gestión de la terminal.
- La capacidad de vista previa de Markdown agrega desplazamiento bidireccional.
- Mejoras en la compatibilidad con archivos grandes, en los que el búfer de texto tiene optimizaciones para archivos grandes.
- Una capacidad de diseño de editor centrado para ayudar a los desarrolladores a mantenerse enfocados en el código mientras proporciona el mayor espacio de pantalla para el editor.
- La capacidad de arrastrar archivos desde el Explorador de archivos de Windows a un espacio específico de carpetas abiertas. Los archivos también se pueden arrastrar desde el escritorio a un espacio de editores abierto.
- Finalización de ruta HTML, para facilitar la importación de archivos en HTML.
- Una vista de resultados de búsqueda horizontal beta.
- Un tutorial sobre la implementación de funciones de Azure sin servidor en la nube de Azure.

### **Novedades de Visual Studio Code 1.20** <!-- omit in toc -->

Lanzada en enero de 2018, la versión 1.20 de Visual Studio Code presenta la capacidad de ejecutar acciones en diferentes archivos simultáneamente. Otras características nuevas incluyen:

- Los desarrolladores pueden seleccionar varios archivos en la vista Explorador de archivos y Editores abiertos para ejecutar acciones en varios elementos.
- Los indicadores de error se muestran en la vista Explorador de archivos y Editores abiertos.
- El editor ahora viene con TypeScript 2.7.1 .
- Se incluye la capacidad Quick Fix para errores en JavaScript y TypeScript, y los desarrolladores pueden aplicar la misma corrección a todas las ocurrencias dentro de un archivo.
- La función de búsqueda de configuración mejorada utiliza la búsqueda en lenguaje natural para encontrar la configuración correcta.
- El soporte del submódulo Git debuta para realizar operaciones en repositorios Git anidados.
- Los archivos que necesitan privilegios de administrador se pueden guardar.
- Se pueden guardar archivos de más de 256 MB.
- Se agrega la depuración para espacios de trabajo de múltiples raíces, para administrar configuraciones entre múltiples proyectos.
- Para la creación de extensiones, se han mejorado las vistas personalizadas con adiciones a la API.
- Se pueden crear fragmentos globales; Estos son fragmentos que no tienen un alcance en un solo idioma, pero que pueden apuntar a cualquier tipo de archivo.
- Los desarrolladores pueden ampliar las vistas previas de imágenes.
- Se agrega la compatibilidad con el lector de pantalla de terminal, el primer paso para facilitar el uso del terminal a las personas con discapacidad visual.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

#### **Novedades de la extensión C / C ++ para Visual Studio Code** <!-- omit in toc -->

A finales de febrero de 2018, Microsoft puso a disposición la extensión C / C ++ para Visual Studio Code que facilita la lectura de código en Visual Studio Code. Atenúa las regiones de código inactivas, que están controladas por directivas de compilación condicional. Otras características de la extensión de la versión 0.15.0 incluyen:

- Actualizaciones para el compilador IntelliSense con más compatibilidad con C++ 17 y corrección de errores.
- Correcciones para los bloqueos de mayor impacto, que habían afectado a los proyectos de IntelliSense y Qt.
- Reparación de un proceso IntelliSense atascado durante el apagado.
- Adición de más macros para hint.
- Corrección de la ventana emergente de error que aparece con archivos que no pertenecen al espacio de trabajo cuando se usa `compile-commands`.json.
- Definición de Unicode por defecto en plataformas Windows.

#### **Novedades de la extensión Visual Studio Code Debugger para Java** <!-- omit in toc -->

Visual Studio Code ha agregado nuevo soporte para el desarrollo de Java. La versión 0.5.0 de la extensión Debugger for Java para Visual Studio Code agrega evaluación de expresiones y filtros de pasos de soporte.

Con la evaluación de expresiones, los desarrolladores pueden ver el valor de variables simples, expresiones de una sola línea y fragmentos de código corto en el contexto de ejecución.

Luego, los desarrolladores pueden monitorear y validar el cambio de un valor mientras se ejecuta el código.

Los filtros de pasos de soporte permiten a los desarrolladores configurar paquetes para filtrar en un archivo de configuración launch.json. Los filtros de pasos generalmente se usan para filtrar los tipos que los desarrolladores no quieren ver o revisar al depurar.

En la versión Debugger for Java 0.5.0, los binarios se pueden publicar en un repositorio central de Maven.

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Novedades de Visual Studio Code 1.19** <!-- omit in toc -->

Visual Studio Code 1.19, la versión de noviembre de 2017 del editor, se centra en el rendimiento del producto, las herramientas de recopilación de datos para mejorar los informes y la limpieza de problemas de GitHub.

Las características clave incluyen:

- Inicio más rápido.
- Adición de un argumento de línea de comandos que imprime información de diagnóstico en el terminal. Esta información se puede compartir con Microsoft en problemas de GitHub, con la intención de proporcionar una mejor comprensión del editor en el momento del problema.
- Nuevos diagnósticos, registro y monitoreo de extensiones.
- Encabezados con pestañas que se pueden escalar al espacio disponible.
- La capacidad de IntelliSense recuerda las opciones de sugerencias anteriores.
- La salida de un comando de terminal se puede canalizar directamente a Visual Studio Code.
- Los cambios en las imágenes se pueden ver uno al lado del otro en un repositorio de Git.
- Recetas para depurar proyectos y aplicaciones de Next.js y Meteor.

### **Novedades de Visual Studio Code 1.18** <!-- omit in toc -->

La versión de octubre de 2017 de Visual Studio Code, también conocida como versión 1.18, ofrece un inicio de Windows más rápido, soporte para manejar múltiples proyectos a través de espacios de trabajo multirraíz y mejoras en las decoraciones (sobre las cuales se construyen características como palabras destacadas) que reducen la ralentización y el uso de memoria.

- Las extensiones recomendadas se identifican mediante una insignia para distinguirlas de otras en una lista.
- La importación automática para JavaScript y TypeScript está disponible para acelerar la codificación con importaciones. Se requiere TypeScript 2.6 para esta capacidad.
- El estado de control de fuente de un archivo se muestra en el Explorador de archivos.
- El estado de Git en el Explorador de archivos muestra archivos modificados, agregados, en conflicto e ignorados con diferentes colores e insignias.
- El diseño del panel vertical permite a los desarrolladores moverse por la terminal y la consola de depuración, así como cambiar entre las vistas horizontal y vertical. Los desarrolladores también pueden acceder a paneles ocultos cuando el espacio es limitado.
- La capacidad de revisión de cambios pendientes en línea permite a los desarrolladores ver los cambios en el código fuente en el editor estándar. Esta función está habilitada en los repositorios de Git listos para usar, pero requiere soporte de otros repositorios.

### **Novedades de Visual Studio Code 1.17** <!-- omit in toc -->

La versión de septiembre de 2017 de Visual Studio Code, también conocida como la versión 1.17, llegó con muchas mejoras, incluidos marcadores de región para el soporte de plegado de código y un rendimiento mejorado del terminal integrado.

Con el plegado de código, los desarrolladores pueden ocultar regiones de código fuente utilizando iconos plegables en el margen entre los números de línea y el comienzo de una línea de código. Los marcadores de región le permiten especificar con comentarios exactamente dónde comienzan y terminan sus bloques plegables. Se han definido marcadores para TypeScript, JavaScript, C y C ++, C #, F #, PowerShell y Visual Basic.

Otra novedad en la versión 1.17 es un motor de renderizado basado en lienzo en la capacidad de terminal integrado, que mejora el renderizado de cinco a 45 veces, según la situación. “Este cambio reduce la latencia de entrada, el uso de energía y aumenta significativamente la velocidad de fotogramas del terminal”, dijo Microsoft. El terminal integrado ofrece una comodidad que puede evitar que los desarrolladores tengan que cambiar de ventana o alterar el estado de un terminal existente para realizar rápidamente una tarea de línea de comandos.

Otras mejoras en la versión de septiembre incluyen mensajes de depuración mejorados, con mensajes de salida en la consola de depuración que muestran opcionalmente la ubicación de origen. Al hacer clic en este origen, se abre el archivo fuente. La versión 1.17 ahora muestra automáticamente sugerencias de módulos y rutas para JavaScript y TypeScript.

Visual Studio Code ahora tiene una sección de proveedores de control de código fuente que proporciona una descripción general de varios repositorios activos, que pueden ser alimentados por varios proveedores de SCM. Los repositorios de Git, por ejemplo, podrían mantenerse en paralelo con los espacios de trabajo de Microsoft Team Foundation Server . Los usuarios pueden aprovechar las capacidades de Ctrl + clic o Shift-clic para seleccionar varios repositorios, que aparecen como vistas divididas.

Para los usuarios de Mac, Visual Studio Code 1.17 agrega soporte para mostrar acciones en la barra táctil de MacOS. Se han agregado acciones para navegar en el historial del editor y controlar el depurador. Además, las extensiones se pueden usar para agregar comandos a la barra táctil a través del touchBaridentificador de menú. También se ha agregado compatibilidad nativa con pestañas de ventana para MacOS Sierra.

Finalmente, Visual Studio Code ahora ofrece nueva documentación en línea para desarrolladores de Java. La depuración de Java se agregó recientemente a Visual Code a través de una extensión

[⏫ Regresar al Menú](/novedades-vsc-1-50/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Relacionados** <!-- omit in toc -->

[▷ Visual Studio Code 1.47: Ahora se desarrolla en Typescript](https://ciberninjas.com/visual-studio-code-1-47/)

[▷ Visualiza estructuras de datos en Visual Studio Code](https://ciberninjas.com/visualiza-datos-vscode/)

[▷ Segunda actualización de Java para Visual Studio Code](https://ciberninjas.com/actualidad-java-visual-studio/)

[🥇 ▷ Visual Studio integrado en Github](https://ciberninjas.com/codespace-editor-github/)

[🥇 ▷ Los Mejores Editores de Texto GRATIS](https://ciberninjas.com/mejores-editores-texto/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Novedades de Microsoft Visual Studio Code 1.50](/assets/img/blog/vsc-1-1-50.webp "Novedades de Microsoft Visual Studio Code 1.50")