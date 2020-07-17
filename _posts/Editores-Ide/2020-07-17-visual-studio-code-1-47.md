---

author: rosepac
bootstrap: true
comments: false
tags:
- Editores de Texto
- Visual Studio Code
thumbnail: /assets/img/2020-news/vsc-ts.webp
feature-img: /assets/img/2020-news/vsc-ts.webp
title: '▷ Visual Studio Code 1.47: Ahora se desarrolla en Typescript y los nuevos cambios más importantes'
description: >-
  Visual Studio Code lanza una nueva versión, y comienza a utilizar Typescript. En concreto, la versión 1.47, vas a encontrar todos los cambios más destacados en este extenso artículo.
excerpt: >-
  Visual Studio Code lanza una nueva versión, y comienza a utilizar Typescript. En concreto, la versión 1.47, vas a encontrar todos los cambios más destacados en este extenso artículo.
canonical_URL: https://ciberninjas.com/visual-studio-code-1-47/
permalink: /visual-studio-code-1-47/
date: 2020-07-17 18:51:32
last_modified_at: 
published: true

---

Visual Studio Code lanza una nueva versión. En concreto, la versión 1.47, los cambios más destacados implementados son los siguientes:

- Mejoras de accesibilidad : Nuevas capacidades en el lector de pantalla.
- Compilaciones de Windows ARM : La versión para Windows ARM ahora está disponible en modo estable.
- Nuevo depurador de JavaScript : Depuración en el terminal, soporte de creación de perfiles.
- Vista unificada del control de origen: Todos los repositorios se muestran en una sola vista.
- Ver y ordenar cambios pendientes: Verás los archivos como un árbol o una lista, ordene por nombre, ruta o estado.
- Editar configuraciones complejas: Editar configuraciones de objetos desde el editor de configuraciones.
- Nueva extensión HexEditor: Editar archivos en formato hexadecimal desde VS Code.
- Actualizaciones de la interfaz de usuario del portátil: UX mejorado y soporte para deshacer / rehacer.
- Tutoriales de desarrollo remoto: Aprende a desarrollar sobre SSH, dentro de contenedores y en WSL.
- Instalador de Java Pack para macOS: Prepárarte para desarrollar en Java con VS Code en macOS.

- [**Accesibilidad**](#accesibilidad)
- [**Mesa de Trabajo**](#mesa-de-trabajo)
  - [Edita la configuración de objetos desde el editor de configuraciones](#edita-la-configuración-de-objetos-desde-el-editor-de-configuraciones)
  - [Seleccione y mantenga el foco en una vista de lista](#seleccione-y-mantenga-el-foco-en-una-vista-de-lista)
  - [Windows ARM estable](#windows-arm-estable)
  - [Instala VSIX arrastrando y soltando](#instala-vsix-arrastrando-y-soltando)
  - [Nuevos argumentos aplicados al editor de búsquedas](#nuevos-argumentos-aplicados-al-editor-de-búsquedas)
  - [Nuevo contexto del editor de búsqueda predeterminado](#nuevo-contexto-del-editor-de-búsqueda-predeterminado)
  - [Desplazamiento horizontal dinámico](#desplazamiento-horizontal-dinámico)
- [**Cambios en el Editor**](#cambios-en-el-editor)
  - [Cambios en la función de reemplazar, entre mayúsculas y minúsculas](#cambios-en-la-función-de-reemplazar-entre-mayúsculas-y-minúsculas)
- [**Depuración**](#depuración)
  - [Nuevo depurador de JavaScript](#nuevo-depurador-de-javascript)
  - [Depuración de un solo archivo](#depuración-de-un-solo-archivo)
  - [Vista llamadas menos abarrotada](#vista-llamadas-menos-abarrotada)
- [**Tareas**](#tareas)
  - [pnpm package manager support](#pnpm-package-manager-support)
- [**Control de Código**](#control-de-código)
  - [Vista única](#vista-única)
  - [Ver y ordenar](#ver-y-ordenar)
  - [Git: Restaurar mensaje de squash](#git-restaurar-mensaje-de-squash)
- [**Lenguajes**](#lenguajes)
  - [TypeScript 3.9.6](#typescript-396)
- [**Soporte de Navegador**](#soporte-de-navegador)
  - [Soporte de carga de archivos grandes](#soporte-de-carga-de-archivos-grandes)
  - [Hacia el soporte de codificación de archivos de texto](#hacia-el-soporte-de-codificación-de-archivos-de-texto)
- [**Funciones de vista previa**](#funciones-de-vista-previa)
  - [Sincronización de la configuración](#sincronización-de-la-configuración)
  - [Soporte TypeScript 4.0](#soporte-typescript-40)
  - [Soporte parcial de IntelliSense mientras se cargan grandes proyectos JavaScript o TypeScript](#soporte-parcial-de-intellisense-mientras-se-cargan-grandes-proyectos-javascript-o-typescript)
  - [Deshacer / Rehacer para código Acción](#deshacer--rehacer-para-código-acción)
- [**Extensión de Notebooks o Cuadernos**](#extensión-de-notebooks-o-cuadernos)
  - [UX Actualizado](#ux-actualizado)
  - [Soporte de salida en caliente para notebook](#soporte-de-salida-en-caliente-para-notebook)
  - [Mejora de deshacer / rehacer](#mejora-de-deshacer--rehacer)
  - [Crear cuaderno sin título](#crear-cuaderno-sin-título)
  - [Fichas de color del cuaderno](#fichas-de-color-del-cuaderno)
  - [Guía de extensión para Notebook](#guía-de-extensión-para-notebook)
- [**Desarrollo Remoto**](#desarrollo-remoto)
- [**Cuentas Azure**](#cuentas-azure)
- [**Solicitudes y problemas de extracción de GitHub**](#solicitudes-y-problemas-de-extracción-de-github)
- [**Hex Editor**](#hex-editor)
- [**Insignias de flujo de trabajo de GitHub**](#insignias-de-flujo-de-trabajo-de-github)
- [**Habilitación de la API propuesta a través de argv.json**](#habilitación-de-la-api-propuesta-a-través-de-argvjson)
- [**Nuevos iconos codicon**](#nuevos-iconos-codicon)
- [**Protocolo de servidor de idiomas**](#protocolo-de-servidor-de-idiomas)
- [**Extensiones de API propuestas**](#extensiones-de-api-propuestas)
- [**Proveedor de enlace del terminal**](#proveedor-de-enlace-del-terminal)
- [**Nueva API para ejecutar sin depurar**](#nueva-api-para-ejecutar-sin-depurar)
- [**Nueva API para reducir el desorden en la vista CALLSTACK**](#nueva-api-para-reducir-el-desorden-en-la-vista-callstack)
- [**Usando TypeScript 4.0 para construir el código VS**](#usando-typescript-40-para-construir-el-código-vs)
- [**Herramientas CMake para C ++**](#herramientas-cmake-para-c-)
- [**Instalador de Java Pack para macOS**](#instalador-de-java-pack-para-macos)

## **Accesibilidad**

- Las carpetas compactas en el Explorador de archivos ahora narran correctamente el estado expandido / contraído y el nivel ARIA.
- Los lectores de pantalla ahora pueden actualizar el desplazamiento del cursor en el editor. Como resultado, el comando "Say All" del lector de pantalla debería funcionar mejor cuando se detiene y se reanuda.
- El lector de pantalla volverá a leer correctamente los mismos mensajes en vivo de ARIA.

## **Mesa de Trabajo**

### Edita la configuración de objetos desde el editor de configuraciones

Antes, el editor de configuración solo podía usarse para editar la configuración de tipos primitivos, como cadenas y booleanos, y era necesario editar directamente el fichero `settings.json` para la configuración de tipos más complicados. Ahora, puedes editar la configuración de objetos no anidados desde el editor de Configuración. Los autores de extensiones pueden usar esta funcionalidad para aumentar la visibilidad de este tipo de configuraciones.

### Seleccione y mantenga el foco en una vista de lista

Hay un nuevo comando, `list.selectAndPreserveFocus` que te permite seleccionar un elemento de una lista, mientras mantienes el foco en esa lista. Esto puede ser útil si deseas seleccionar varios archivos de una lista, como en el Explorador de archivos, sin tener que enfocar el editor de archivos.

El comando no está vinculado a ningún método abreviado de teclado de forma predeterminada, pero puede agregar su propia combinación de teclas si lo deseas, agregando:

{% highlight js %}
{
  "key": "ctrl+o",
  "command": "list.selectAndPreserveFocus"
}
{% endhighlight %}

### Windows ARM estable

¡Visual Studio Code ya está disponible en una versión estable para Windows ARM!

### Instala VSIX arrastrando y soltando

VS Code ahora admite la instalación de los archivos de las extensiones VSIX, simplemente arrastrando y soltando sobre cualquier parte del editor.

### Nuevos argumentos aplicados al editor de búsquedas

Hay dos nuevos argumentos agregados a los comandos del editor de búsqueda (`search.action.openNewEditor` y `search.action.openNewEditorToSide`) para permitir que las combinaciones de teclas se configuren cómo debe comportarse un nuevo editor de búsqueda:

- `triggerSearch`: Funciona si una búsqueda se ejecuta automáticamente cuando se abre un editor de búsqueda. Su valor predeterminado es verdadero.
- `focusResults`: Funciona al poner el foco en los resultados de una búsqueda o en la entrada de la consulta. El valor predeterminado es verdadero.

Por ejemplo, la siguiente combinación de teclas ejecuta la búsqueda cuando se abre el editor de búsqueda, pero deja el foco en el control de consultas de búsqueda.

{% highlight js %}
{
  "key": "ctrl+o",
  "command": "search.action.openNewEditor",
  "args": { "query": "VS Code", "triggerSearch": true, "focusResults": false }
}
{% endhighlight %}

### Nuevo contexto del editor de búsqueda predeterminado

La configuración `search.searchEditor.defaultNumberOfContextLines` se ha actualizado para que tenga un valor predeterminado de 1 en lugar de 0, lo que significa que se mostrará una línea de contexto antes y después de cada línea de resultados en el editor de búsqueda. Para volver al comportamiento anterior, vuelva a establecer el valor en 0.

### Desplazamiento horizontal dinámico

La configuración `workbench.list.horizontalScrolling` previamente existente, ahora se puede alternar en tiempo de ejecución sin obligarte a volver a cargar a la mesa de trabajo.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Cambios en el Editor**

### Cambios en la función de reemplazar, entre mayúsculas y minúsculas

VS Code ahora admite cambiar coincidencias de expresiones regulares mientras se realiza una búsqueda / desde la opción de reemplazo del editor. Esto se hace con los modificadores \u\U\l\L, donde \u y \l servirán para pasar de mayúsculas a minúsculas con un solo carácter, e \U y \L servirán para pasar de Mayúsculas a Minúsculas.

Los modificadores también se pueden apilar, por ejemplo ` \u\u\u$1` para indicar que quieres los primeros tres caracteres del grupo en mayúsculas, o con `\l\U$1` para indicar que el primer carácter sea en minúsculas y el resto en mayúsculas, al reemplazar.

Actualmente, esto solo se admite en el control Buscar del Editor y no en la búsqueda global y reemplazo de todos los archivos de un proyecto.

## **Depuración**

### Nuevo depurador de JavaScript

Nuestro nuevo depurador de JavaScript, después de introducir el depurador predeterminado en *Insiders* el mes pasado, ahora es el depurador predeterminado para JavaScript (Node.js y Chrome) de VS Code el que va a recibir mejoras. Si omitiste la sección de "Características de vista previa" de los últimos registros de cambios de Visual Studio Code, puedes ponerte al día con la sección de novedades del [archivo README del depurador](https://github.com/microsoft/vscode-js-debug#whats-new){:target="_blank" rel="nofollow,noreferrer"}.

### Depuración de un solo archivo

Hasta hoy, el depurador de Visual Studio Code no tenía una forma estándar de que un archivo en el editor se pudiese depurar fácilmente con realizar solamente un Clic, sobre un botón. Algunas extensiones de depuración permitian hacerlo, por lo general con una configuración de depuración que te indicaba **"Debug file in editor"**.

Sin embargo, los usuarios aún tenían que seleccionar la configuración correcta en el menú desplegable de la configuración de depuración antes de poder usar la tecla F5 para ejecutarla.

Otras extensiones de depuración implementan una estrategia alternativa para F5: existe el fichero launch.json, con la que al pulsar F5 se intentará depurar el archivo actualmente abierto en el editor activo.

Dado que ambos enfoques no son fácilmente detectables, algunas extensiones de depuración (por ejemplo, Python) han comenzado a agregar un botón de Ejecutar sobre el área del título del editor.

Como no hemos encontrado un mejor enfoque y este método puede implementarse sin necesidad de nuevas API, escribimos algunas pautas sobre cómo implementarlo de manera estándar.

### Vista llamadas menos abarrotada

Hemos comenzado a hacer que CALL STACK sea menos concurrido para casos comunes: la vista CALL STACK ahora admite ocultar nodos de sesión de depuración que existen por razones técnicas, pero no proporcionan mucho valor a los usuarios.

La primera extensión de depuración que ha optado por esta función es el nuevo depurador de JavaScript, que podría eliminar una sesión de depuración principal siempre que haya una sola sesión secundaria.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Tareas**

### pnpm package manager support

pnpm ahora es una opción válida para la npm.packageManagerconfiguración, junto con npmy yarn, para ejecutar sus scripts.

## **Control de Código**

La vista de control de las ramas del código, se han consolidado en una vista única.

### Vista única

Todos los repositorios se representan en una sola vista, para que puedas obtener una mejor visión general del estado del espacio de trabajo completo. Además, la vista de control de origen ahora se puede mover al panel y otras vistas se pueden mover al contenedor de la vista de control de origen.

### Ver y ordenar

Hemos agregado soporte para ordenar sus cambios en la vista de control de las ramas por nombre, ruta (predeterminado) y estado al usar la opción de vista de lista. Hemos consolidado las opciones de vista (lista frente a árbol) y las opciones de clasificación en un nuevo elemento del menú Ver y ordenar en el menú contextual.

### Git: Restaurar mensaje de squash

Similar al comando `git merge` habitual, la vista SCM ahora restaurará la entrada SCM con el mensaje predeterminado si el usuario está en medio de un comando `git merge --squash`.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Lenguajes**

### TypeScript 3.9.6

VS Code ahora agrupa TypeScript 3.9.6. Esta actualización menor corrige algunos errores, incluido uno que podría causar que el servidor TypeScript se bloquee en ciertos patrones de código fuente.

## **Soporte de Navegador**

### Soporte de carga de archivos grandes

Ahora puedes cargar archivos y carpetas grandes en la versión web de Visual Studio Code y el progreso se informará con precisión para que pueda rastrear el número de bytes que se han cargado, así como la velocidad de carga.

### Hacia el soporte de codificación de archivos de texto

Se ha dedicado mucho trabajo a la compatibilidad total con las codificaciones de texto en el navegador para leer y escribir archivos. Confiamos en dos bibliotecas que ahora son compatibles con los navegadores para aprovechar el paquete web:

- `iconv-lite` para leer y escribir codificaciones
- `jschardet` para adivinar codificaciones de contenido textual

Este trabajo continuará en julio y seguramente estará disponible en breve.

## **Funciones de vista previa**

Las funciones de vista previa no están listas para su lanzamiento, pero son lo suficientemente funcionales como para usar. Agradecemos sus comentarios iniciales mientras que se encuentra en desarrollo.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### Sincronización de la configuración

Hemos estado trabajando los últimos meses para admitir la sincronización de las preferencias de Visual Studio Code en todas las máquinas y esta función está disponible para una vista previa en la versión Insiders.

Ahora puedes deshabilitar la sincronización en otra máquina mediante la acción *Desactivar la sincronización* del menú contextual de *Preferencias* en la entrada de la máquina en la vista de **Máquinas sincronizadas**.

### Soporte TypeScript 4.0

Esta iteración, hemos continuado mejorando nuestro soporte para TypeScript 4.0 . Algunos puntos destacados incluyen:

- Resalte las llamadas a símbolos obsoletos en el editor con tachado.
- Explicar las razones por las que no se puede aplicar una refactorización determinada.
- Importaciones automáticas mejoradas.

Puede probar estas características hoy instalando [la extensión TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next){:target="_blank" rel="nofollow,noreferrer"}.

### Soporte parcial de IntelliSense mientras se cargan grandes proyectos JavaScript o TypeScript

La versión beta de TypeScript 4.0 también trae una nueva característica que debería ayudar a reducir el tiempo que pasa esperando mientras se carga un gran proyecto JavaScript o TypeScript. Para explicar cómo funciona esto, primero necesitamos cubrir un poco de información sobre cómo funcionan las versiones actuales de TypeScript.

Cuando abres un archivo JavaScript o TypeScript en VS Code, el servicio de lenguaje TypeScript determina a qué proyecto pertenece ese archivo y luego carga el proyecto asociado. A veces, este proyecto puede ser bastante grande, como con la base de código VS Code central, que consta de muchos miles de archivos TypeScript.

Mientras se carga un proyecto, VS Code puede manejar operaciones de sintaxis básicas, como obtener el esquema del documento y habilitar el plegado del código, pero actualmente no puede proporcionar IntelliSense u otras características de lenguaje más avanzadas porque dependen de comprender todo el proyecto.

Para proporcionar importaciones automáticas, por ejemplo, el servicio de lenguaje TypeScript necesita conocer todos los símbolos exportados en un proyecto.

Los cambios en TypeScript 4.0 hacen posible que VS Code proporcione IntelliSense y otras características de lenguaje más avanzadas mientras se carga un gran proyecto. La advertencia es que el IntelliSense que podemos proporcionar se limita a consultar el archivo actual en lugar de todo el proyecto. Esto significa que las funciones como sugerencias e Ir a definición funcionarán, pero solo mostraremos sugerencias del archivo actual y solo puede ejecutar Ir a definición para saltar a otro símbolo en el archivo actual.

Si trabaja con grandes proyectos de JavaScript y TypeScript, estamos interesados ​​en escuchar sus comentarios sobre esta nueva característica. Puede probarlo hoy usando la extensión nocturna TypeScript . Esperamos que le permita comenzar a trabajar con su código casi instantáneamente hasta que IntelliSense, más completo y completo, esté disponible.

### Deshacer / Rehacer para código Acción

Estamos trabajando para poder deshacer y rehacer acciones de código y refactorizaciones. Un ejemplo destacado es la refactorización de cambio de nombre de clase Java, que realiza un cambio de texto y renombra el archivo en el disco. Esto ahora se puede deshacer, pero aún requiere desencadenar deshacer dos veces. Estén atentos a medida que mejoramos esto y proporcione comentarios anticipados.

## **Extensión de Notebooks o Cuadernos**

El equipo de VS Code continúa con el soporte nativo para Notebooks. Para ayudar con el desarrollo, hemos creado una extensión de Cuadernos de problemas GitHub, que le permite buscar problemas de GitHub y solicitudes de extracción. Esta extensión todavía está en versión preliminar y requiere el uso de VS Code Insiders , pero permite experimentar los Portátiles de primera mano y agradecemos sus comentarios.

### UX Actualizado

Hemos actualizado el aspecto visual de las celdas de Notebook para un diseño más compacto. También hemos agregado contornos de sombra a las celdas seleccionadas para que el estado de selección sea más obvio.

### Soporte de salida en caliente para notebook

Hemos agregado compatibilidad con Hot Exit en Notebooks para permitir que las extensiones manejen las copias de seguridad y la restauración. Sus cambios locales no guardados ahora pueden ser serializados por extensiones y restaurados cuando se reabre el espacio de trabajo.

### Mejora de deshacer / rehacer

Agregamos soporte para extensiones para contribuir a las pilas Deshacer / Rehacer. Las extensiones ahora pueden controlar qué operaciones se pueden deshacer. Por ejemplo, en un Cuaderno de problemas de GitHub, puede seleccionar el botón Bloquear para que el contenido de la celda sea de solo lectura y también deshacer / rehacer esta operación a través de los comandos normales Deshacer / Rehacer.

### Crear cuaderno sin título

Extendimos el comando Nuevo archivo ( Ctrl + N ) para admitir la creación de nuevos archivos de Notebook sin título. Por ejemplo, puede utilizar la combinación de teclas a continuación para crear rápidamente un Cuaderno de problemas de GitHub y ejecutar consultas.

### Fichas de color del cuaderno

También hemos agregado los siguientes tokens de color para portátiles:

- `notebook.cellBorderColor`: El color del borde para las celdas de Notebook
- `notebook.cellHoverBackground`: El color de fondo de una celda cuando la celda está suspendida
- `notebook.cellInsertionIndicator`: El color del indicador de inserción de celda del portátil
- `notebook.focusedCellBackground`: El color de fondo de una celda cuando la celda está enfocada
- `notebook.focusedCellBorder`: El color del borde superior e inferior de la celda cuando la celda está enfocada
- `notebook.focusedCellShadow`: El color de la sombra de la celda cuando las celdas están enfocadas
- `notebook.focusedEditorBorder`: El color del borde del editor de celdas de Notebook

### Guía de extensión para Notebook

Si está interesado en crear extensiones de Notebook para VS Code, hay una nueva guía que detalla la [API de Notebook](https://code.visualstudio.com/api/extension-guides/notebook){:target="_blank" rel="nofollow,noreferrer"}. Aprenderá sobre la API, así como los detalles de la infraestructura de VS Code Notebook y las mejores prácticas de desarrollo de extensiones de Notebook.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Desarrollo Remoto**

El trabajo continúa en las extensiones de Desarrollo remoto , que le permiten utilizar un contenedor, una máquina remota o el Subsistema de Windows para Linux (WSL) como un entorno de desarrollo con todas las funciones.

Las características destacadas en 1.47 incluyen:

- Remoto - SSH: el servidor remoto puede escuchar en un socket en lugar de un puerto.
- Remoto - Contenedores: se le solicita que abra el repositorio en un volumen.
- Remoto - Contenedores y WSL: consulte la publicación reciente del blog Uso de contenedores remotos en WSL 2 .

## **Cuentas Azure**

La versión más reciente de la extensión de cuenta de Azure ahora expone un objeto de credenciales que se puede usar con el SDK de Azure más reciente .

## **Solicitudes y problemas de extracción de GitHub**

El trabajo continúa en la extensión GitHub Pull Requests and Issues , que le permite trabajar, crear y administrar solicitudes y problemas de extracción. Algunas actualizaciones para esta versión incluyen:

- Markdown se sitúa en la vista Problemas.
- Sugerencias de etiquetas en el nuevo editor de problemas.
- Desplácese por soporte para problemas formateados como GH-123.

## **Hex Editor**

La extensión HexEditor continúa mejorando para proporcionar una experiencia de edición hexadecimal nativa dentro de VS Code. Las principales actualizaciones de la extensión de esta versión incluyen soporte de edición simple (que permite a los usuarios deshacer, rehacer, editar celdas hexadecimales existentes y agregar nuevas celdas al final del documento) y optimización de archivos grandes que permite a los usuarios abrir archivos de más de 18 megabytes, que anteriormente no era posible.

## **Insignias de flujo de trabajo de GitHub**

Ahora puede agregar [insignias de flujo de trabajo de GitHub](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#adding-a-workflow-status-badge-to-your-repository){:target="_blank" rel="nofollow,noreferrer"} a la lista de insignias de una extensión publicada, ya que github.comse agregó a la lista de fuentes de Insignias aprobadas .

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Habilitación de la API propuesta a través de argv.json**

El campo `enable-proposed-api` ahora es compatible con `argv.json`. Esto permite a los autores de extensiones ejecutar su extensión API propuesta en compilaciones lanzadas para la alimentación a largo plazo, sin necesidad de abrir VS Code a través de la línea de comando y pasar el indicador CLI `--enable-proposed-api`.

## **Nuevos iconos codicon**

Hemos agregado los siguientes íconos nuevos a nuestra biblioteca de codicon:

- debug-alt-small
- vm-connect

## **Protocolo de servidor de idiomas**

La compatibilidad con tokens semánticos y la resolución diferida de ediciones de texto adicionales en elementos de finalización se ha agregado a la próxima especificación 3.16.

## **Extensiones de API propuestas**

Cada hito viene con nuevas API propuestas y los autores de extensiones pueden probarlas. Como siempre, queremos sus comentarios. Esto es lo que debe hacer para probar una API propuesta

- Debe usar Insiders porque las API propuestas cambian con frecuencia.
- Debe tener esta línea en el package.jsonarchivo de su extensión: "enableProposedApi": true.
- Copie la última versión del archivo `vscode.proposed.d.ts` en la ubicación de origen de su proyecto.

Ten en cuenta que no puede publicar una extensión que use una API propuesta. Puede haber cambios importantes en la próxima versión y nunca queremos romper las extensiones existentes.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Proveedor de enlace del terminal**

Sobre la base del nuevo sistema de enlaces del terminal agregado en la versión anterior , esta nueva propuesta window.registerLinkProviderpermite que una extensión adjunte enlaces al terminal, incluida una etiqueta de información sobre herramientas que se muestra al pasar el mouse.

Esto contrasta con la API "manejadora de enlaces" propuesta anteriormente (ahora en desuso) , que permitiría que su extensión maneje posiblemente el enlace en cuestión, y si no lo hace, habría una cadena de reserva. Este nuevo modelo donde los enlaces definitivamente serán manejados encaja mejor con la visión en mente donde los enlaces podrían tener una lista de posibles acciones.

## **Nueva API para ejecutar sin depurar**

La función "Ejecutar sin depuración" de VS Code es una variante de depuración donde una configuración de depuración existente se reutiliza para ejecutar un programa en lugar de depurarla. Una consecuencia de este modo de ejecución es que el programa no ingresa al depurador, ni por alcanzar puntos de interrupción ni por ningún otro motivo.

En este hito, proporcionamos la API de extensión oficial para "Ejecutar sin depuración": noDebugse ha agregado una nueva propiedad a DebugSessionOptionsla debug.startDebuggingfunción. noDebugcontrola si la sesión a punto de comenzar debe ejecutarse con o sin depuración. Cuando noDebugfalta la propiedad, se utiliza el valor de la sesión principal (si hay una). Si no hay sesión principal, se asume el valor 'falso' para una noDebugpropiedad faltante .

Tenga en cuenta: Anteriormente, era posible agregar una noDebugbandera a una configuración de inicio para lograr el mismo efecto. Esta API no oficial ahora está en desuso (pero aún es compatible) y sugerimos que las extensiones pasen a la nueva API.

## **Nueva API para reducir el desorden en la vista CALLSTACK**

Con la llegada de sofisticadas extensiones de depuración y configuraciones de depuración, se muestran más sesiones de depuración en la vista de árbol CALL STACK y las hace parecer abarrotadas. En la mayoría de los casos, las sesiones de depuración son útiles para los usuarios y necesitan tener un control total sobre ellas. En otros casos, algunas sesiones de depuración son solo artefactos de implementación o un mecanismo de agrupación para un conjunto de sesiones secundarias.

Para hacer que la vista CALL STACK sea menos concurrida en casos comunes, hemos introducido una función para ocultar un nodo de sesión de depuración principal si solo tiene una sesión secundaria individual. Esta característica se llama "modo compacto" y está disponible a través de una nueva compactpropiedad opcional en DebugSessionOptionsla debug.startDebuggingfunción.

Si compactes cierto, el padre de la sesión de depuración recién creada se ocultará en la vista CALL STACK siempre que solo tenga un hijo secundario. Si compactes falso o falta, el nodo principal permanece visible (que es el comportamiento actual).

## **Usando TypeScript 4.0 para construir el código VS**

VS Code ahora se crea utilizando una versión nocturna de TypeScript 4.0. Esta nueva versión de TypeScript nos ayudó a detectar algunos errores potenciales en los accesores y también nos ayuda a probar la próxima versión de TypeScript.

## **Herramientas CMake para C ++**

Nuevo tutorial para desarrollar aplicaciones C ++ con CMake y la extensión CMake Tools.

## **Instalador de Java Pack para macOS**

El instalador de Visual Studio Code para Java Pack descarga las dependencias y extensiones necesarias para el desarrollo de Java en Visual Studio Code en macOS.

### **Relacionados** <!-- omit in toc -->

[🥇 Visual Studio integrado en Github](https://ciberninjas.com/codespace-editor-github/)

[▷ Los Mejores EDITORES de TEXTO para programar en 2020 GRATIS](https://ciberninjas.com/mejores-editores-texto/)

[▷ Codelobster IDE: Editor de PHP, HTML, CSS, JavaScript](https://ciberninjas.com/zeetlr-editor-markdown/)

[▷ Qué es Markdown y sus 7 mejores editores de texto](https://ciberninjas.com/editores-markdown/)

[11 Mejores editores de código Python](https://ciberninjas.com/mejores-ide-python/)

[▷ Zettlr: Editor de Markdown hecho a medida para el Siglo XXI](https://ciberninjas.com/zeetlr-editor-markdown/)

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog Oficial de Visual Studio Code](https://code.visualstudio.com/updates/v1_47){:target="_blank" rel="nofollow,noreferrer"}

![Visual Studio Code lanza una nueva versión, y comienza a utilizar Typescript. En concreto, la versión 1.47, vas a encontrar todos los cambios más destacados en este extenso artículo.](/assets/img/2020-news/caract-windows-10.webp "Visual Studio Code lanza una nueva versión, y comienza a utilizar Typescript. En concreto, la versión 1.47, vas a encontrar todos los cambios más destacados en este extenso artículo.")
