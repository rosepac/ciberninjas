---

author: rosepac
bootstrap: true
comments: false
tags:
- Editores de Texto
- Integración Continua
- Github
thumbnail: /assets/img/blog/acciones-github.webp
feature-img: /assets/img/blog/acciones-github.webp
title: '▷ Conociendo las acciones de Github'
description: >-
  Las acciones de GitHub facilitan la automatización de todos sus flujos de trabajo de software. Las acciones de Github le permiten construir, probar e implementar su código directamente desde GitHub.
excerpt: >-
  Las acciones de GitHub facilitan la automatización de todos sus flujos de trabajo de software. Las acciones de Github le permiten construir, probar e implementar su código directamente desde GitHub.
canonical_URL: https://ciberninjas.com/acciones-github/
permalink: /acciones-github/
date: 2020-07-24 09:12:32
published: true

---

Las acciones de GitHub facilitan la automatización de todos tus flujos de trabajo de software. Las acciones de Github permiten construir, probar e implementar el código directamente desde GitHub.

Bien si deseas construir un contenedor, implementar un servicio web o automatizar la bienvenida de un nuevo usuario en tu proyecto de código abierto, es muy posible que exista una acción automatizada para ello.

La forma más fácil de hacerse una idea rápida sobre lo que vienen a ofrecer las acciones de Github, es pensar en Github Actions como tu propio sistema de integración continua.

Una de las mejores partes de las acciones de Github, es que puedes escribir tu propia acción y ofrecerla como código abierto para que el resto de desarrolladores la vean y puedan incluso, usarla.

- [**¿Cómo utilizar las acciones de Github?**](#cómo-utilizar-las-acciones-de-github)
- [**Creando tu primera acción de Github**](#creando-tu-primera-acción-de-github)
- [**Acciones de Github seleccionadas**](#acciones-de-github-seleccionadas)

## **¿Cómo utilizar las acciones de Github?**

En todos los repositorios de Github admiten las acciones de Github. Simplemente debes abrir un repositorio en el navegador y comprobar que existe la pestaña de "Acciones/Actions" dentro del menú de pestañas de tu repositorio.

Una vez que presionamos en la pestaña de Acciones, se mostrará una página que te presenta todas las acciones existentes.

"Cree, pruebe e implemente su código. Haga que las revisiones de código, la administración de sucursales y el triaging de problemas funcionen de la manera que desee. Seleccione una plantilla de flujo de trabajo para comenzar".

Github es lo suficientemente inteligente como para recomendarte algunas acciones relevantes para cada uno de tus repositorios. Por ejemplo, si tienes un proyecto de Jekyll, el propio sistema te ofrecerá, la instalación del despliegue de Jekyll a través de Docker, para lanzar las acciones solamente tendrás que presionar sobre el botón "Set up this workflow" que verás en cada una de las acciones.

Eso va a generar un archivo `.yml` porque cada acción de Github funciona a través de un fichero de este tipo. YAML es un lenguaje de marcado ligero, quizás conozcas XML. Pues YAML es un lenguaje con una sintasis más moderna, sencilla y simple que XML.

YAML se utiliza comúnmente para generar archivos de configuración y para almacenar o transmitir datos dentro de aplicaciones. Dentro del fichero `.yml` se indicarán los pasos a seguir por la acción de Github determinada; y a partir de entonces cada vez que actualices el proyecto, los comandos se activarán automáticamente.

Entre las cientos de acciones que existen, puedes encontrar acciones para implementarAWS o Google Cloud. Las acciones de Github no están enfocadas exclusivamente hacía activar desarrollos en la nube o lanzar NodeJS exclusivamente, sino que también te ofrecen la posibilidad de cargar diferentes paquetes de lenguajes de programación o entornos de desarrollo concretos.

## **Creando tu primera acción de Github**

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/LcCSGdmVO74?rel=0" allowfullscreen></iframe>
</div>

## **Acciones de Github seleccionadas**

A continuación, os dejaré aquí, una [lista impresionante] de las mejores acciones de Github que existen basada en la [lista Awesome de Sarah Drasner](https://github.com/sdras/awesome-actions){:target="_blank" rel="nofollow,noreferrer"}.

### Recursos oficiales

- [Sitio oficial](https://github.com/features/actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Documentación oficial](https://help.github.com/en/actions){:target="_-blank" rel="nofollow,noreferrer"}
- Organización de acciones oficiales
	- [acciones / entornos virtuales: entornos](https://github.com/actions/virtual-environments){:target="_-blank" rel="nofollow,noreferrer"} virtuales de acciones de GitHub.
	- [actions / runner](https://github.com/actions/runner){:target="_-blank" rel="nofollow,noreferrer"}: el corredor para las acciones de GitHub.
- [Anuncio de blog de GitHub](https://github.blog/2018-10-17-action-demos/){:target="_-blank" rel="nofollow,noreferrer"}

### Ejemplos de flujo de trabajo

- [acciones / flujos de trabajo de inicio](https://github.com/actions/starter-workflows){:target="_-blank" rel="nofollow,noreferrer"}: gestión del flujo de [trabajo de inicio](https://github.com/actions/starter-workflows){:target="_-blank" rel="nofollow,noreferrer"} .
- [actions / example-services](https://github.com/actions/example-services){:target="_-blank" rel="nofollow,noreferrer"}: flujos de trabajo de ejemplo con contenedores de servicios.

### Acciones oficiales

#### Acciones de la herramienta de flujo de trabajo

Acciones de herramientas para su flujo de trabajo.

- [actions / checkout](https://github.com/actions/checkout){:target="_-blank" rel="nofollow,noreferrer"}: configura tu repositorio en tu flujo de trabajo.
- [actions / upload-artifact](https://github.com/actions/upload-artifact){:target="_-blank" rel="nofollow,noreferrer"}: [carga](https://github.com/actions/upload-artifact){:target="_-blank" rel="nofollow,noreferrer"} artefactos de tu flujo de trabajo.
- [actions / download-artifact](https://github.com/actions/download-artifact){:target="_-blank" rel="nofollow,noreferrer"}: descarga artefactos de tu compilación.
- [actions / cache](https://github.com/actions/cache){:target="_-blank" rel="nofollow,noreferrer"}: dependencias de caché y resultados de compilación en acciones de GitHub.
- [actions / github-script](https://github.com/actions/github-script){:target="_-blank" rel="nofollow,noreferrer"}: escriba un script para la API de GitHub y los contextos de flujo de trabajo.

#### Acciones para la automatización de GitHub

Automatice la gestión de problemas, solicitudes de extracción y lanzamientos.

- [actions / create-release](https://github.com/actions/create-release){:target="_-blank" rel="nofollow,noreferrer"}: una acción para crear lanzamientos a través de la API de lanzamiento de GitHub.
- [actions / upload-release-asset](https://github.com/actions/upload-release-asset){:target="_-blank" rel="nofollow,noreferrer"}: una acción para cargar un activo de lanzamiento a través de la API de lanzamiento de GitHub.
- [acciones / primera interacción](https://github.com/actions/first-interaction){:target="_-blank" rel="nofollow,noreferrer"}: una acción para filtrar solicitudes de extracción y problemas de contribuyentes nuevos.
- [actions / stale](https://github.com/actions/stale){:target="_-blank" rel="nofollow,noreferrer"}: marca problemas y solicitudes de extracción que no han tenido interacción reciente.
- [actions / labeler](https://github.com/actions/labeler){:target="_-blank" rel="nofollow,noreferrer"}: una acción para etiquetar automáticamente las solicitudes de extracción.
- [actions / delete-package-version](https://github.com/actions/delete-package-versions){:target="_-blank" rel="nofollow,noreferrer"}: elimina las versiones de un paquete de los paquetes de GitHub.

#### Configurar acciones

Configura tu flujo de trabajo de acciones de GitHub con una versión específica de tu lenguaje de programación.

- [actions / setup-node: Node.js](https://github.com/actions/setup-node){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-python: Python](https://github.com/actions/setup-python){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-go: Ir](https://github.com/actions/setup-go){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-haskell: Haskell (GHC y Cabal){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/actions/setup-haskell){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-java: Java](https://github.com/actions/setup-java){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-ruby: Ruby](https://github.com/actions/setup-ruby){:target="_-blank" rel="nofollow,noreferrer"}
- [acciones / setup-elixir: Elixir](https://github.com/actions/setup-elixir){:target="_-blank" rel="nofollow,noreferrer"}

### Acciones de JavaScript y TypeScript

- [actions / toolkit](https://github.com/actions/toolkit){:target="_-blank" rel="nofollow,noreferrer"}: el [kit de herramientas de](https://github.com/actions/toolkit){:target="_-blank" rel="nofollow,noreferrer"} GitHub para desarrollar acciones de GitHub.
- [actions / hello-world-javascript-action](https://github.com/actions/hello-world-javascript-action){:target="_-blank" rel="nofollow,noreferrer"}: una plantilla para demostrar cómo construir una acción de JavaScript.
- [actions / javascript-action](https://github.com/actions/javascript-action){:target="_-blank" rel="nofollow,noreferrer"}: crea una acción de JavaScript.
- [actions / typescript-action](https://github.com/actions/typescript-action){:target="_-blank" rel="nofollow,noreferrer"}: crea una acción TypeScript.
- [actions / http-client](https://github.com/actions/http-client){:target="_-blank" rel="nofollow,noreferrer"}: un cliente HTTP ligero optimizado para su uso con acciones, TypeScript con genéricos y asíncrono lo esperan.

#### Acciones de contenedores Docker

- [actions / hello-world-docker-action](https://github.com/actions/hello-world-docker-action){:target="_-blank" rel="nofollow,noreferrer"}: una plantilla para demostrar cómo construir una acción Docker.
- [actions / container-toolkit-action](https://github.com/actions/container-toolkit-action){:target="_-blank" rel="nofollow,noreferrer"}: repositorio de plantillas para crear acciones de contenedor utilizando actions / toolkit.

### Herramientas y gestión de GitHub

- [Declarativamente configurar etiquetas de GitHub](https://github.com/lannonbr/issue-label-manager-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción para sincronizar las etiquetas de GitHub de forma declarativa](https://github.com/micnncim/action-label-syncer){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregar versiones a GitHub](https://github.com/elgohr/Github-Release-Action){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar una imagen de Docker en Dockerhub](https://github.com/elgohr/Publish-Docker-Github-Action){:target="_-blank" rel="nofollow,noreferrer"}
- [Crear un problema usando contenido de un archivo](https://github.com/peter-evans/create-issue-from-file){:target="_-blank" rel="nofollow,noreferrer"}
- [Publique versiones de GitHub con activos](https://github.com/softprops/action-gh-release){:target="_-blank" rel="nofollow,noreferrer"}
- [GitHub Project Automation +](https://github.com/alex-page/github-project-automation-plus){:target="_-blank" rel="nofollow,noreferrer"}: automatice las tarjetas de proyecto GitHub con cualquier evento webhook.
- [Ejecute acciones de GitHub localmente con una interfaz web](https://github.com/phishy/wflow){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute acciones de GitHub localmente en la terminal](https://github.com/nektos/act){:target="_-blank" rel="nofollow,noreferrer"}
- [Crear y publicar APK de depuración de Android](https://github.com/ShaunLWM/action-release-debugapk){:target="_-blank" rel="nofollow,noreferrer"}
- [Generar números de compilación secuenciales para acciones de GitHub](https://github.com/einaregilsson/build-number){:target="_-blank" rel="nofollow,noreferrer"}
- [Push Git cambia al repositorio de GitHub sin dificultades de autenticación](https://github.com/ad-m/github-push-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Genera notas de lanzamiento basadas en tus eventos](https://github.com/Decathlon/release-notes-generator-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Cree una página wiki de GitHub basada en el archivo de descuento proporcionado](https://github.com/Decathlon/wiki-page-creator-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Etiquete sus solicitudes de extracción de forma automática (utilizando archivos comprometidos){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/Decathlon/pull-request-labeler-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregue etiqueta a sus solicitudes de extracción en función del nombre del equipo del autor](https://github.com/JulienKode/team-labeler-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Active manualmente sus acciones de GitHub desde una interfaz de usuario](https://www.actionspanel.app/){:target="_-blank" rel="nofollow,noreferrer"}
- [Obtenga una lista de cambios de archivos con PR / Push](https://github.com/trilom/file-changes-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Use acciones privadas en cualquier flujo de trabajo](https://github.com/InVisionApp/private-action-loader){:target="_-blank" rel="nofollow,noreferrer"}
- [Etiquete sus problemas utilizando el contenido del problema](https://github.com/damccorm/tag-ur-it){:target="_-blank" rel="nofollow,noreferrer"}
- [Revertir un lanzamiento de GitHub](https://github.com/author/action-rollback){:target="_-blank" rel="nofollow,noreferrer"}
- [Bloqueo de problemas cerrados y solicitudes de extracción después de un período de inactividad](https://github.com/dessant/lock-threads){:target="_-blank" rel="nofollow,noreferrer"}
- [Obtenga el recuento de diferencias de compromiso entre dos ramas](https://github.com/jessicalostinspace/commit-difference-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Generar notas de versión basadas en referencias de Git](https://github.com/metcalfc/changelog-generator){:target="_-blank" rel="nofollow,noreferrer"}
- [Aplicar políticas sobre repositorios y compromisos de GitHub](https://github.com/talos-systems/conform){:target="_-blank" rel="nofollow,noreferrer"}
- [Problema de etiqueta automática según la descripción del problema](https://github.com/Renato66/auto-label){:target="_-blank" rel="nofollow,noreferrer"}
- [Actualizar acciones configuradas de GitHub a las últimas versiones](https://github.com/fabasoad/ghacu){:target="_-blank" rel="nofollow,noreferrer"}

### Colección de acciones

- [Usa la Terraforma de HashiCorp](https://github.com/hashicorp/setup-terraform){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Yarn 1](https://github.com/Borales/actions-yarn){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Yarn 2](https://github.com/sergioramos/yarn-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Golang](https://github.com/cedrickring/golang-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para R y el paquete #rstats adjunto](http://maxheld.de/ghactions/){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para WordPress](https://github.com/10up/actions-wordpress/){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Composer](https://github.com/MilesChou/composer-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Flutter](https://github.com/subosito/flutter-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para PHP](https://github.com/shivammathur/setup-php){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Rust](https://github.com/actions-rs){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Android](https://github.com/Malinskiy/action-android){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Logtalk y Prolog](https://github.com/logtalk-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Deno](https://github.com/denolib/setup-deno){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Unity](https://github.com/webbertakken/unity-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Octions: acciones de GitHub para la API REST de GitHub](https://github.com/maxkomarychev/octions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Docker](https://github.com/docker/github-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para AWS](https://github.com/clowdhaus/aws-github-actions){:target="_-blank" rel="nofollow,noreferrer"}

### Acciones útiles

- [Configuración`ssh-agent`](https://github.com/webfactory/ssh-agent){:target="_-blank" rel="nofollow,noreferrer"}: se ejecuta `ssh-agent`con claves SSH adicionales para acceder a repositorios privados.
- [Insignias de acciones de GitHub para tu README](https://github.com/atrox/github-actions-badge){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para proyecto Python con poesía](https://github.com/abatilo/actions-poetry){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para proyecto Python con pyenv](https://github.com/gabrielfalcao/pyenv-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para compilar documentos de LaTeX](https://github.com/xu-cheng/latex-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Actualizar bases de datos de Maxmind](https://github.com/meetup/maxmind-updater){:target="_-blank" rel="nofollow,noreferrer"}
- [Depurar con SSH sobre tmate](https://github.com/mxschmitt/action-tmate){:target="_-blank" rel="nofollow,noreferrer"}: [depure](https://github.com/mxschmitt/action-tmate){:target="_-blank" rel="nofollow,noreferrer"} la acción directamente proporcionando una conexión SSH.
- [Desbloquear archivos git-crypt](https://github.com/sliteteam/github-action-git-crypt-unlock){:target="_-blank" rel="nofollow,noreferrer"}
- [Golang CGO cross compiler](https://github.com/crazy-max/ghaction-xgo){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute su trabajo en otra arquitectura: arm32, aarch64 y otras](https://github.com/uraimo/run-on-arch-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Generar una tabla de contenido.](https://github.com/technote-space/toc-generator){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregar automáticamente etiqueta o cesionario a un problema](https://github.com/Naturalclar/issue-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción para enviar la reacción LGTM como imagen o GIF cuando decimos lgtm](https://github.com/micnncim/action-lgtm-reaction){:target="_-blank" rel="nofollow,noreferrer"}
- [Genere números de compilación en varios ámbitos](https://github.com/zyborg/gh-action-buildnum){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar artefactos de lanzamiento de GitHub](https://github.com/skx/github-action-publish-binaries){:target="_-blank" rel="nofollow,noreferrer"}
- [Jekyll Diff Action](https://github.com/David-Byrne/jekyll-diff-action){:target="_-blank" rel="nofollow,noreferrer"}: difunde el sitio Jekyll construido después de un cambio y comenta el resultado a GitHub.
- [Bot de protección de sucursal](https://github.com/benjefferies/branch-protection-bot){:target="_-blank" rel="nofollow,noreferrer"}: deshabilite y vuelva a habilitar temporalmente la opción "Incluir administradores" en la protección de sucursal.
- [Espere los estados de confirmación](https://github.com/WyriHaximus/github-action-wait-for-status){:target="_-blank" rel="nofollow,noreferrer"}: espere hasta que todos los estados y comprobaciones sean exitosos o alguno de ellos haya fallado y configure su salida de estado en consecuencia.
- [Obtener la última etiqueta](https://github.com/WyriHaximus/github-action-get-previous-tag){:target="_-blank" rel="nofollow,noreferrer"}: obtenga la etiqueta anterior de git.
- [Crear hito](https://github.com/WyriHaximus/github-action-create-milestone){:target="_-blank" rel="nofollow,noreferrer"}: cree un nuevo hito abierto dado el título y la descripción.
- [Cerrar hito](https://github.com/WyriHaximus/github-action-close-milestone){:target="_-blank" rel="nofollow,noreferrer"}: cierra el hito dado.
- [Acción para hacer cumplir las reglas de denominación de sucursales](https://github.com/deepakputhraya/action-branch-name){:target="_-blank" rel="nofollow,noreferrer"}
- [Exponer babosa de algunas variables de GitHub](https://github.com/marketplace/actions/github-slug){:target="_-blank" rel="nofollow,noreferrer"}
- [awesome-lint como una acción de GitHub](https://github.com/max/awesome-lint){:target="_-blank" rel="nofollow,noreferrer"}
- [Editar archivo JSON](https://github.com/deef0000dragon1/json-edit-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Documentación de Build Slate](https://github.com/Decathlon/slate-builder-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Propiedades de lectura](https://github.com/christian-draeger/read-properties){:target="_-blank" rel="nofollow,noreferrer"}: lee los valores de los `.properties`archivos.
- [Propiedades de escritura](https://github.com/christian-draeger/write-properties){:target="_-blank" rel="nofollow,noreferrer"}: escriba valores en `.properties`archivos.
- [Autotag](https://github.com/butlerlogic/action-autotag){:target="_-blank" rel="nofollow,noreferrer"}: genera automáticamente una nueva etiqueta cuando `package.json`cambia la versión del archivo de manifiesto (es decir ){:target="_-blank" rel="nofollow,noreferrer"}.
- [Aplicar plantillas con Jinja2](https://github.com/cuchi/jinja2-action){:target="_-blank" rel="nofollow,noreferrer"}: utilice el motor de plantillas Jinja2 para generar archivos a partir de plantillas.
- [Tiene cambios](https://github.com/UnicornGlobal/has-changes-action){:target="_-blank" rel="nofollow,noreferrer"}: compruebe si hay cambios en el código de los pasos anteriores.
- [Acción Mind Your Language](https://github.com/tailaiw/mind-your-language-action){:target="_-blank" rel="nofollow,noreferrer"}: detecte comentarios ofensivos en problemas y solicite solicitudes, y advierta a los remitentes.
- [Convertidor YAML / JSON / XML](https://github.com/fabasoad/yaml-json-xml-converter-action){:target="_-blank" rel="nofollow,noreferrer"} - Convierte formatos de archivo YAML / JSON / XML indistintamente.
- [Detección NSFW](https://github.com/fabasoad/nsfw-detection-action){:target="_-blank" rel="nofollow,noreferrer"} - Detecta contenido NSFW en archivos comprometidos.
- [Ha cambiado la ruta](https://github.com/MarceloPrado/has-changed-path){:target="_-blank" rel="nofollow,noreferrer"}: ejecuta condicionalmente acciones basadas en rutas cambiadas.
- [Linguist](https://github.com/fabasoad/linguist-action){:target="_-blank" rel="nofollow,noreferrer"}: comprueba un repositorio y produce información sobre los idiomas utilizados en la salida.
- [Llamada de voz Twilio](https://github.com/fabasoad/twilio-voice-call-action/){:target="_-blank" rel="nofollow,noreferrer"}: realice una llamada de voz Twilio con texto definido.
- [Configurar Xcode](https://github.com/maxim-lobanov/setup-xcode){:target="_-blank" rel="nofollow,noreferrer"}: cambie entre versiones preinstaladas de Xcode para imágenes de macOS.
- [Configurar Xamarin](https://github.com/maxim-lobanov/setup-xamarin){:target="_-blank" rel="nofollow,noreferrer"}: cambie entre versiones preinstaladas de Xamarin y Mono para imágenes de macOS.
- [Memer Action](https://github.com/Bhupesh-V/memer-action){:target="_-blank" rel="nofollow,noreferrer"}: una acción de GitHub para programadores Memes xD.
- [Configurar Cocoapods](https://github.com/maxim-lobanov/setup-cocoapods){:target="_-blank" rel="nofollow,noreferrer"}: configura una versión específica de Cocoapods.
- [IP pública](https://github.com/haythem/public-ip){:target="_-blank" rel="nofollow,noreferrer"}: consulta la dirección IP pública del corredor de acciones de GitHub.
- [Acciones de GitHub para Lazarus / FPC](https://github.com/gcarreno/setup-lazarus){:target="_-blank" rel="nofollow,noreferrer"}
- [Twilio Fax](https://github.com/fabasoad/twilio-fax-action/){:target="_-blank" rel="nofollow,noreferrer"}: envía un documento por fax utilizando su cuenta Twilio.

#### Ambientes

- [Crea un envfile](https://github.com/SpicyPizza/create-envfile){:target="_-blank" rel="nofollow,noreferrer"}
- [Exportar variables de entorno global para pasos de compilación posteriores](https://github.com/zweitag/github-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Establecer mediante programación variables de entorno para usar en pasos posteriores](https://github.com/allenevans/set-env){:target="_-blank" rel="nofollow,noreferrer"}
- [Instalar entornos Conda para Python](https://github.com/goanpeca/setup-miniconda){:target="_-blank" rel="nofollow,noreferrer"}
- [Configurar NativeScript](https://github.com/hrueger/setup-nativescript){:target="_-blank" rel="nofollow,noreferrer"}
- [Crear un archivo de entorno JSON](https://github.com/schdck/create-env-json){:target="_-blank" rel="nofollow,noreferrer"}

#### Dependencias

- [Instalar dependencias NPM con almacenamiento en caché](https://github.com/bahmutov/npm-install){:target="_-blank" rel="nofollow,noreferrer"}

#### Versiones Semánticas

- [SemVers siguientes: genera](https://github.com/WyriHaximus/github-action-next-semvers){:target="_-blank" rel="nofollow,noreferrer"} la próxima versión para la versión mayor, menor y parche basada en la versión semver dada.
- [Obtenga el último SemVer y el nombre de la sucursal con una cadena de búsqueda](https://github.com/jessicalostinspace/github-action-get-regex-branch){:target="_-blank" rel="nofollow,noreferrer"}
- [Cortar rama de lanzamiento](https://github.com/jessicalostinspace/cut-release-action){:target="_-blank" rel="nofollow,noreferrer"}: corta una rama de lanzamiento dado un prefijo de rama y una versión semántica opcional.
- [Incremento de la versión](https://github.com/christian-draeger/increment-semantic-version){:target="_-blank" rel="nofollow,noreferrer"} semántica: Aumente una versión semántica determinada (SemVer){:target="_-blank" rel="nofollow,noreferrer"}, según el tipo de versión dado.

### Análisis estático

- [Analizador de código estático PHPStan Acción](https://github.com/OskarStark/phpstan-ga){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción del inspector de GraphQL](https://github.com/kamilkisiela/graphql-inspector){:target="_-blank" rel="nofollow,noreferrer"}
- [Análisis estático de PowerShell con PSScriptAnalyzer](https://github.com/devblackops/github-action-psscriptanalyzer){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute tfsec, con salida de reviewdog en el PR](https://github.com/reviewdog/action-tfsec){:target="_-blank" rel="nofollow,noreferrer"}

#### Pruebas

- [Ejecute pruebas a través de Puppeteer, la API del nodo de Chrome sin cabeza](https://github.com/ianwalter/puppeteer){:target="_-blank" rel="nofollow,noreferrer"}
- [xUnit Slack Reporter: envía un resumen de las pruebas de los informes xUnit a un canal Slack](https://github.com/ivanklee86/xunit-slack-reporter){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute pruebas de codecepción](https://github.com/joelwmale/codeception-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute pruebas de TestCafe](https://github.com/DevExpress/testcafe-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute pruebas de Unity](https://github.com/webbertakken/unity-test-runner){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute las pruebas de Cypress E2E](https://github.com/cypress-io/github-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Prueba los roles de Ansible con Molecule](https://github.com/robertdebock/molecule-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute pruebas de rendimiento con artillery.io](https://github.com/kenju/github-actions-artillery){:target="_-blank" rel="nofollow,noreferrer"}
- [Detecta pruebas escamosas con BuildPulse](https://github.com/Workshop64/buildpulse-action){:target="_-blank" rel="nofollow,noreferrer"}

#### Linternas

- [Acción de fijación de estándares de codificación PHP](https://github.com/OskarStark/php-cs-fixer-ga){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecuta Hadolint contra un Dockerfile dentro de un repositorio](https://github.com/burdzwastaken/hadolint-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute ESLint, con salida de reviewdog en el PR](https://github.com/reviewdog/action-eslint){:target="_-blank" rel="nofollow,noreferrer"}
- [Linter basado en JavaScript para archivos * .workflow](https://github.com/OmarTawfik/github-actions-js){:target="_-blank" rel="nofollow,noreferrer"}
- [Lint terraform files usando tflint, con salida de reviewdog en el PR](https://github.com/reviewdog/action-tflint){:target="_-blank" rel="nofollow,noreferrer"}
- [autopep8: Formatea automáticamente el código de Python para cumplir con la guía de estilo PEP 8](https://github.com/peter-evans/autopep8){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute `ergebnis/composer-normalize`para asegurarse de que su proyecto PHP se haya normalizado`composer.json`](https://github.com/ergebnis/composer-normalize-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute Go pelusa verifica en el evento PR](https://github.com/ArangoGutierrez/GoLinty-Action){:target="_-blank" rel="nofollow,noreferrer"}
- [Node.js: ejecuta automáticamente el script `format`y / o `lint`utilizado por el paquete](https://github.com/MarvinJWendt/run-node-formatter){:target="_-blank" rel="nofollow,noreferrer"}
- [Stylelinter: acción de GitHub que ejecuta stylelint](https://github.com/exelban/stylelint){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute stylelint, con salida de reviewdog en el PR](https://github.com/reviewdog/action-stylelint){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción PyCodeStyle: una acción de GitHub que deja un comentario en su PR con comentarios de pycodestyle (autopep8){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/ankitvgupta/pycodestyle-action){:target="_-blank" rel="nofollow,noreferrer"}
- [wemake-python-styleguide: la interfaz de Python más estricta y más obstinada de la historia, con salida opcional de revisión en el PR](https://github.com/wemake-services/wemake-python-styleguide){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute TSLint con comprobaciones de estado y anotaciones de diferencias de archivo](https://github.com/mooyoul/tslint-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [La solicitud de extracción de pelusa se compromete con commitlint](https://github.com/wagoid/commitlint-github-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute vint, con salida de reviewdog en el PR](https://github.com/reviewdog/action-vint){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute error ortográfico, con salida de reviewdog en el PR](https://github.com/reviewdog/action-misspell){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute golangci-lint, con salida de reviewdog en el PR](https://github.com/reviewdog/action-golangci-lint){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute shellcheck, con salida de reviewdog en el PR](https://github.com/reviewdog/action-shellcheck){:target="_-blank" rel="nofollow,noreferrer"}
- [Captura la escritura insensible y desconsiderada en tus documentos de rebajas](https://github.com/theashraf/alex-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute dotenv-linter: enlaza sus archivos .env como un encanto, con una salida de revisión opcional en el PR](https://github.com/wemake-services/dotenv-linter){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute dotenv-linter, con salida de reviewdog en el PR](https://github.com/mgrachev/action-dotenv-linter){:target="_-blank" rel="nofollow,noreferrer"}
- [Mostrar y corregir errores de linting para muchos lenguajes de programación](https://github.com/samuelmeuli/lint-action){:target="_-blank" rel="nofollow,noreferrer"}
- [PHP_CodeSniffer con anotaciones](https://github.com/chekalsky/phpcs-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Linter para rebajas (con preajustes){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/avto-dev/markdown-lint){:target="_-blank" rel="nofollow,noreferrer"}
- [Stylelint problem matcher para crear anotaciones](https://github.com/xt0rted/stylelint-problem-matcher){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute sqlcheck en el PR para identificar antipatrones en consultas SQL](https://github.com/yokawasa/action-sqlcheck){:target="_-blank" rel="nofollow,noreferrer"}

#### Seguridad

- [Un escáner de vulnerabilidades para sus imágenes acoplables](https://github.com/phonito/phonito-scanner-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Aprobar y fusionar automáticamente las actualizaciones de Dependabot](https://github.com/ridedott/dependabot-auto-merge-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute dlint security linter en su código de Python](https://github.com/xen0l/dlint-check){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de AWS Secrets Manager](https://github.com/say8425/aws-secrets-manager-actions){:target="_-blank" rel="nofollow,noreferrer"}: defina los secretos de AWS Secrets Manager para los valores del entorno.
- [Alinear sus documentos de política de AWS IAM para problemas de corrección y seguridad](https://github.com/xen0l/iam-lint){:target="_-blank" rel="nofollow,noreferrer"}
- [Distribuidor secreto](https://github.com/webfactory/secret-spreader){:target="_-blank" rel="nofollow,noreferrer"}: no es una acción per se, sino una herramienta para administrar los secretos de acciones en una lista de repositorios.
- [Secretos de sincronización de acción](https://github.com/google/secrets-sync-action){:target="_-blank" rel="nofollow,noreferrer"} - sincroniza Acción secretos a través de múltiples repositorios.
- [Acción de prueba de Snyk](https://github.com/snyk/actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Administre sus secretos de acciones de GitHub con una CLI simple](https://github.com/unfor19/githubsecrets){:target="_-blank" rel="nofollow,noreferrer"}
- [SecretHub](https://github.com/secrethub/actions){:target="_-blank" rel="nofollow,noreferrer"}: tenga una única fuente de verdad para sus secretos y cárguelos en las acciones de GitHub a pedido.

#### Cobertura de código

- [Escanea el código con SonarCloud](https://github.com/sonarsource/sonarcloud-github-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Envíe su cobertura de código a codecov.io](https://github.com/codecov/codecov-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicación de cobertura de código en CodeClimate](https://github.com/paambaati/codeclimate-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Actualizar repositorio ir boleta de calificaciones](https://github.com/creekorful/goreportcard-action){:target="_-blank" rel="nofollow,noreferrer"}

### Supervisión

- [Audite una página web con las pruebas de Lighthouse de Google Chrome](https://github.com/jakejarvis/lighthouse-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecuta Lighthouse y publica resultados en relaciones públicas y Slack](https://github.com/foo-software/lighthouse-check-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute Lighthouse en CI utilizando acciones de GitHub](https://github.com/treosh/lighthouse-ci-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Benchmarking continuo y visualización de Benchmark para Go](https://github.com/bobheadxi/gobenchdata){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de límite de tamaño](https://github.com/andresz1/size-limit-action){:target="_-blank" rel="nofollow,noreferrer"}: comenta la comparación de costos de su JS en PR y los rechaza si se excede el límite.
- [Comprobar bundlephobia](https://github.com/carlesnunez/check-my-bundlephobia){:target="_-blank" rel="nofollow,noreferrer"}: [comenta el](https://github.com/carlesnunez/check-my-bundlephobia){:target="_-blank" rel="nofollow,noreferrer"} tamaño del paquete nuevo y modificado de acuerdo con el sitio web bundlephobia.io y rechaza las relaciones públicas en el umbral superado.

### Solicitudes de extracción

- [Establecer revisores de solicitud de extracción en función de los asignados](https://github.com/pullreminders/assignee-to-reviewer-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Abra o actualice la solicitud de extracción en la inserción de sucursal (con selección de sucursal){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/vsoch/pull-request-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Rebasar automáticamente un PR](https://github.com/cirrus-actions/rebase){:target="_-blank" rel="nofollow,noreferrer"}
- [Solicitud de extracción de etiquetas una vez que tiene un número específico de aprobaciones](https://github.com/pullreminders/label-when-approved-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregue etiquetas a la solicitud de extracción según los patrones de archivo coincidentes](https://github.com/banyan/auto-label){:target="_-blank" rel="nofollow,noreferrer"}
- [Aprobar automáticamente las solicitudes de extracción](https://github.com/hmarr/auto-approve-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregue automáticamente revisores a la solicitud de extracción según el archivo de configuración](https://github.com/kentaro-m/auto-assign-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregue etiquetas a la solicitud de extracción según los patrones de nombre de sucursal](https://github.com/TimonVS/pr-labeler-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregue etiquetas a la solicitud de extracción según el tamaño total de la diferencia](https://github.com/pascalgn/size-label-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Combinar automáticamente las solicitudes de extracción que están listas](https://github.com/pascalgn/automerge-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Verifique que las solicitudes de extracción contengan una referencia de ticket](https://github.com/vijaykramesh/pr-lint-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Cree una solicitud de extracción para cambios en su repositorio en el espacio de trabajo de acciones](https://github.com/peter-evans/create-pull-request){:target="_-blank" rel="nofollow,noreferrer"}
- [Tirar solicitud de pelusa](https://github.com/seferov/pr-lint-action){:target="_-blank" rel="nofollow,noreferrer"}
- [ChatOps para solicitudes de extracción](https://github.com/machine-learning-apps/actions-chatops){:target="_-blank" rel="nofollow,noreferrer"}
- [Título y cuerpo del prefijo de un RP basado en el texto extraído del nombre de la sucursal](https://github.com/tzkhan/pr-update-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Bloquear confirmaciones de autosquash](https://github.com/xt0rted/block-autosquash-commits-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Golpear y etiquetar automáticamente al combinar](https://github.com/anothrNick/github-tag-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Actualice automáticamente las relaciones públicas con controles y squash anticuados y combine los que coincidan con todas las protecciones de sucursal](https://github.com/tibdex/autosquash){:target="_-blank" rel="nofollow,noreferrer"}
- [Merge Pal: actualiza y combina automáticamente las solicitudes de extracción](https://github.com/maxkomarychev/merge-pal-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Hacer cumplir la convención de nomenclatura en el título de solicitud de extracción](https://github.com/deepakputhraya/action-pr-title){:target="_-blank" rel="nofollow,noreferrer"}
- [Notificador de solicitud de extracción pegado](https://github.com/loomble/pull-request-stuck-notifier-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Nombre de solicitud de extracción de pelusa con commitlint (¡Impresionante si fusiona la calabaza!){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/JulienKode/pull-request-name-linter-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Bloquear relaciones públicas cuando las comprobaciones de las sucursales de destino fallan](https://github.com/cirrus-actions/branch-guard){:target="_-blank" rel="nofollow,noreferrer"}
- [Obtenga capturas de pantalla del sitio estático actualizadas actualizadas por Pull Request](https://github.com/ssowonny/diff-pages-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Agregar etiquetas dependiendo de si la solicitud de extracción aún está en curso](https://github.com/AlbertHernandez/working-label-action){:target="_-blank" rel="nofollow,noreferrer"}

### Páginas de GitHub

- [Implemente un sitio Zola en las páginas de GitHub](https://github.com/shalzz/zola-deploy-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Construya el sitio de contenido estático de Hugo y publíquelo en la rama gh-pages](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages){:target="_-blank" rel="nofollow,noreferrer"}
- [Cree un sitio de Jekyll, con complementos personalizados de Jekyll y secuencias de comandos de compilación, y vuelva a implementarlo en la rama Gh-Pages](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages){:target="_-blank" rel="nofollow,noreferrer"}
- [Metadatos de búsqueda de conjuntos de datos de Google](https://www.github.com/openschemas/extractors/){:target="_-blank" rel="nofollow,noreferrer"}: y otros extractores de schema.org para que los conjuntos de datos sean reconocibles desde las páginas de GitHub.
- [Acciones de GitHub para implementar en páginas de GitHub con generadores de sitios estáticos](https://github.com/peaceiris/actions-gh-pages){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción GitHub para Hexo](https://github.com/heowc/action-hexo){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente las estadísticas de Google Analytics en las páginas de GitHub](https://github.com/cristianpb/analytics-google){:target="_-blank" rel="nofollow,noreferrer"}
- [Una plataforma de blogs Jupyter Notebook desarrollada por GitHub Actions, Pages y Jekyll](https://github.com/fastai/fastpages){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementar un sitio estático en páginas de GitHub](https://github.com/appleboy/gh-pages-action){:target="_-blank" rel="nofollow,noreferrer"}: implementar en un directorio personalizado e ignorar la carpeta / archivo.

### Notificaciones y mensajes

- [Enviar una notificación de discordia](https://github.com/Ilshidur/action-discord){:target="_-blank" rel="nofollow,noreferrer"}
- [Publica un mensaje de Slack como bot](https://github.com/pullreminders/slack-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar un SMS desde GitHub Actions usando Nexmo](https://github.com/nexmo-community/nexmo-sms-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar un mensaje de Telegram](https://github.com/appleboy/telegram-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar un archivo o mensaje de texto a Discord (color personalizado, nombre de usuario o avatar){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/appleboy/discord-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Colabora en tweets usando solicitudes de extracción](https://github.com/gr2m/twitter-together){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar una notificación push a través de Push by Techulus](https://github.com/techulus/push-github-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar correo electrónico con SendGrid](https://github.com/peter-evans/sendgrid-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar una notificación push a través de Join](https://github.com/ShaunLWM/action-join){:target="_-blank" rel="nofollow,noreferrer"}
- [Nuevo verificador de versión de paquete para npm](https://github.com/MeilCli/npm-update-check-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Nuevo verificador de versión de paquete para NuGet](https://github.com/MeilCli/nuget-update-check-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Nuevo verificador de versión de paquete para Gradle](https://github.com/MeilCli/gradle-update-check-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar una notificación push a través de Pushbullet](https://github.com/ShaunLWM/action-pushbullet){:target="_-blank" rel="nofollow,noreferrer"}
- [Crear un evento de calendario de Outlook con Microsoft Graph](https://github.com/anoopt/ms-graph-create-event){:target="_-blank" rel="nofollow,noreferrer"}
- [Esté atento a los cambios en la página Wiki de GitHub y publique en Slack](https://github.com/benmatselby/gollum-page-watcher-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar un SMS usando MessageBird](https://github.com/nikitasavinov/messagebird-sms-action){:target="_-blank" rel="nofollow,noreferrer"}

### Despliegue

- [Implementar en Netlify](https://github.com/netlify/actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente una aplicación Probot usando acciones](https://probot.github.io/docs/deployment/#github-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente una lista de reproducción en Spotify](https://github.com/swinton/SpotHub){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente extensiones de código VS con vsce](https://github.com/lannonbr/vsce-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Purgue el caché de Cloudflare después de actualizar un sitio web](https://github.com/jakejarvis/cloudflare-purge-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente su configuración de DNS utilizando el Control de DNS](https://github.com/koenrh/dnscontrol-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente un tema para Shopify](https://github.com/pgrimaud/action-shopify){:target="_-blank" rel="nofollow,noreferrer"}
- [Dispare múltiples tuberías GitLab CI](https://github.com/appleboy/gitlab-ci-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Desencadenar múltiples trabajos de Jenkins](https://github.com/appleboy/jenkins-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de GitHub para Homebrew Tap](https://github.com/izumin5210/action-homebrew-tap){:target="_-blank" rel="nofollow,noreferrer"}
- [Copie archivos y artefactos a través de SSH](https://github.com/appleboy/scp-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecutando comandos ssh remotos](https://github.com/appleboy/ssh-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar un paquete de distribución de Python en PyPI](https://github.com/pypa/gh-action-pypi-publish){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementar sitio web estático en Azure Storage](https://github.com/feeloor/azure-static-website-deploy){:target="_-blank" rel="nofollow,noreferrer"}
- [Multiplataforma Chocolatey CLI para construir y publicar paquetes](https://github.com/crazy-max/ghaction-chocolatey){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente la biblioteca de pod de iOS en Cocoapods](https://github.com/michaelhenry/deploy-to-cocoapods-github-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de GitHub para TencentCloud Serverless](https://github.com/Juliiii/action-scf){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar npm (pre){:target="_-blank" rel="nofollow,noreferrer"} lanzamientos](https://github.com/epeli/npm-release/){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente un sitio estático en Surge.sh](https://github.com/yavisht/deploy-via-surge.sh-github-action-template){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción GitHub para GoReleaser, una herramienta de automatización de lanzamiento para proyectos Go](https://github.com/goreleaser/goreleaser-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de implementación de FTP, implementa un proyecto de GitHub en un servidor FTP mediante acciones de GitHub](https://github.com/SamKirkland/FTP-Deploy-Action){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar artículo en Dev.to](https://github.com/tylerauerbeck/publish-to-dev.to-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción para el lanzamiento semántico](https://github.com/cycjimmy/semantic-release-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementar una colección en Ansible Galaxy](https://github.com/artis3n/ansible_galaxy_collection){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar módulo en Puppet Forge](https://github.com/barnumbirr/action-forge-publish){:target="_-blank" rel="nofollow,noreferrer"}
- [Construye y publica aplicaciones Electron](https://github.com/samuelmeuli/action-electron-builder){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar un paquete Maven](https://github.com/samuelmeuli/action-maven-publish){:target="_-blank" rel="nofollow,noreferrer"}
- [Compilar e implementar un tema para Ghost CMS](https://github.com/TryGhost/action-deploy-theme){:target="_-blank" rel="nofollow,noreferrer"}
- [Implemente un rol Ansible en Ansible Galaxy](https://github.com/robertdebock/galaxy-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar uno o más módulos JS en un registro](https://github.com/author/action-publish){:target="_-blank" rel="nofollow,noreferrer"}
- [Publica un paquete con 2FA usando Slack](https://github.com/erezrokah/2fa-with-slack-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Serializar ejecuciones de flujo de trabajo en tuberías de implementación continua](https://github.com/softprops/turnstyle){:target="_-blank" rel="nofollow,noreferrer"}
- [Netlify Deploy GitHub Action para cada confirmación](https://github.com/nwtgck/actions-netlify){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecute Playbooks Ansible](https://github.com/arillso/action.playbook){:target="_-blank" rel="nofollow,noreferrer"}
- [Publicar un paquete de distribución de Python en Anaconda Cloud](https://github.com/fcakyon/conda-publish-action){:target="_-blank" rel="nofollow,noreferrer"}

#### Estibador

- [Actualice una descripción del repositorio de Docker Hub desde README.md](https://github.com/peter-evans/dockerhub-description){:target="_-blank" rel="nofollow,noreferrer"}
- [Publique imágenes de Docker en el Registro de paquetes de GitHub (GPR){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/machine-learning-apps/gpr-docker-publish){:target="_-blank" rel="nofollow,noreferrer"}
- [Actualice la "Descripción completa" de un repositorio en Docker Hub](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata){:target="_-blank" rel="nofollow,noreferrer"}
- [Cree y publique imágenes de Docker en cualquier registro utilizando Kaniko](https://github.com/outillage/kaniko-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Monitoree y limite el tamaño de la imagen de su ventana acoplable](https://github.com/wemake-services/docker-image-size-limit){:target="_-blank" rel="nofollow,noreferrer"}
- [Publique imágenes de Docker en el Registro de contenedores elásticos de Amazon (ECR){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/appleboy/docker-ecr-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Cree y empuje las imágenes de su ventana acoplable Almacenamiento en caché de cada etapa para reducir el tiempo de construcción](https://github.com/whoan/docker-build-with-cache-action){:target="_-blank" rel="nofollow,noreferrer"}

#### Kubernetes

- [Implemente en cualquier nube o Kubernetes usando Pulumi](https://github.com/pulumi/actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementar en Kubernetes con kubectl](https://github.com/steebchen/kubectl){:target="_-blank" rel="nofollow,noreferrer"}
- [Obtenga el archivo Kubeconfig de Google Kubernetes Engine (GKE){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/machine-learning-apps/gke-kubeconfig){:target="_-blank" rel="nofollow,noreferrer"}

#### AWS

- [Sincronizar / cargar un directorio a un bucket de AWS S3](https://github.com/jakejarvis/s3-sync-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementar código Lambda en una función existente](https://github.com/appleboy/lambda-action){:target="_-blank" rel="nofollow,noreferrer"}

#### Terraforma

- [Generar documentación de terraform](https://github.com/Dirrk/terraform-docs){:target="_-blank" rel="nofollow,noreferrer"}: utiliza terraform-docs para generar documentos para módulos de terraform.
- [Un ejemplo de uso de Terraform para validar y aplicar la administración de GitHub](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows){:target="_-blank" rel="nofollow,noreferrer"}

### Servicios externos

- [Use un archivo Jenkins](https://github.com/jonico/jenkinsfile-runner-github-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de GitHub para Firebase](https://github.com/w9jds/firebase-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de GitHub para la CLI de migración satisfactoria](https://github.com/Shy/contentful-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Pixela (a-know / pi){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/peaceiris/actions-pixela){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de GitHub para Google Cloud Platform (GCP){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/exelban/gcloud){:target="_-blank" rel="nofollow,noreferrer"}
- [Subir archivos a cualquier proveedor de servicios OpenStack Swift](https://github.com/iksaku/openstack-swift-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Acción de GitHub para enviar publicaciones de desbordamiento de pila a Slack](https://github.com/logankilpatrick/StackOverflowBot){:target="_-blank" rel="nofollow,noreferrer"}
- [Asumir el rol de AWS](https://github.com/nordcloud/aws-assume-role/){:target="_-blank" rel="nofollow,noreferrer"}
- [Generar respuesta personalizada utilizando JSONbin](https://github.com/fabasoad/jsonbin-action){:target="_-blank" rel="nofollow,noreferrer"}

### Herramientas frontend

- [Ejecutar tarea Gradle](https://github.com/MrRamych/gradle-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de compilación JS](https://github.com/elstudio/actions-js-build){:target="_-blank" rel="nofollow,noreferrer"}: ejecute tareas de compilación Grunt o Gulp y confirme los cambios de archivo.
- [Acción de GitHub para Gatsby CLI](https://github.com/jzweifel/gatsby-cli-github-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecuta una auditoría de WebPageTest e imprime los resultados como comentario de confirmación](https://github.com/JCofman/webPagetestAction){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para Hugo extendidas](https://github.com/peaceiris/actions-hugo){:target="_-blank" rel="nofollow,noreferrer"}
- [Generar imagen OG](https://github.com/BoyWithSilverWings/generate-og-image){:target="_-blank" rel="nofollow,noreferrer"}: genera imágenes de gráficos abiertos personalizables a partir de archivos Markdown.
- [Acciones de GitHub para mdBook](https://github.com/peaceiris/actions-mdbook){:target="_-blank" rel="nofollow,noreferrer"}
- [Setup Mint](https://github.com/fabasoad/setup-mint-action){:target="_-blank" rel="nofollow,noreferrer"} - Setup Mint (lenguaje de programación para escribir aplicaciones de una sola página){:target="_-blank" rel="nofollow,noreferrer"}.

### Machine Learning Ops

- [Envío de flujos de trabajo de Argo (Cloud Agnostic){:target="_-blank" rel="nofollow,noreferrer"}](https://github.com/machine-learning-apps/actions-argo){:target="_-blank" rel="nofollow,noreferrer"}
- [Enviar flujos de trabajo de Argo a GKE](https://github.com/machine-learning-apps/gke-argo){:target="_-blank" rel="nofollow,noreferrer"}
- [Consulta de resultados de seguimiento de experimentos de pesos y sesgos](https://github.com/machine-learning-apps/wandb-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecutar cuadernos Jupyter parametrizados](https://github.com/yaananth/run-notebook){:target="_-blank" rel="nofollow,noreferrer"}
- [Compilar, implementar y ejecutar tubería de Kubeflow](https://github.com/NikeNano/kubeflow-github-action){:target="_-blank" rel="nofollow,noreferrer"}

### Construir

- [run-cmake](https://github.com/lukka/run-cmake){:target="_-blank" rel="nofollow,noreferrer"}: acción multiplataforma para crear software C / C ++ con [CMake](https://cmake.org/){:target="_-blank" rel="nofollow,noreferrer"} y [Ninja](https://ninja-build.org/){:target="_-blank" rel="nofollow,noreferrer"} .
- [run-vcpkg](https://github.com/lukka/run-vcpkg){:target="_-blank" rel="nofollow,noreferrer"}: acción multiplataforma para construir e instalar dependencias C / C ++ con [vcpkg](https://github.com/microsoft/vcpkg){:target="_-blank" rel="nofollow,noreferrer"} .
- [Aplicaciones Build Go para multiplataforma](https://github.com/izumin5210/action-go-crossbuild){:target="_-blank" rel="nofollow,noreferrer"}
- [Genere ~ / .m2 / settings.xml para compilaciones de Maven](https://github.com/whelk-io/maven-settings-xml-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Ejecutar script Pascal](https://github.com/fabasoad/pascal-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Configurar Brainfuck](https://github.com/fabasoad/setup-brainfuck-action){:target="_-blank" rel="nofollow,noreferrer"} - Configurar intérprete brainfuck.
- [Publique Go Binaries en los activos de lanzamiento de GitHub](https://github.com/wangyoucao577/go-release-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Configurar COBOL](https://github.com/fabasoad/setup-cobol-action){:target="_-blank" rel="nofollow,noreferrer"}

### Base de datos

- [Configurar el esquema de Cassandra](https://github.com/fabasoad/setup-cassandra-action){:target="_-blank" rel="nofollow,noreferrer"}: ejecutar scripts desde la carpeta proporcionada en la parte superior del clúster de Cassandra.

### Localización

- [Encuentra y corrige automáticamente errores tipográficos y gramaticales en tu código](https://github.com/sobolevn/misspell-fixer-action){:target="_-blank" rel="nofollow,noreferrer"}
- [Traducción](https://github.com/fabasoad/translation-action){:target="_-blank" rel="nofollow,noreferrer"}: traduce texto de cualquier idioma a cualquier idioma.

### Hoja de trucos

- [GitHub Actions Branding Hoja de trucos](https://haya14busa.github.io/github-action-brandings/){:target="_-blank" rel="nofollow,noreferrer"}

## Tutoriales

- [Implementación continua de la aplicación Next.js con Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400){:target="_-blank" rel="nofollow,noreferrer"}
- [Convertir acciones basadas en Docker a JavaScript / TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/){:target="_-blank" rel="nofollow,noreferrer"}
- [CI de acciones de GitHub para proyectos Swift / iOS](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a){:target="_-blank" rel="nofollow,noreferrer"}
- [Trabajando con acciones de GitHub](https://jeffrafter.com/working-with-github-actions){:target="_-blank" rel="nofollow,noreferrer"}
- [Acciones de GitHub para desarrolladores de rieles](https://www.youtube.com/watch?v=gGUXydw22zw){:target="_-blank" rel="nofollow,noreferrer"}
- [Calendario de Adviento de Acciones de GitHub](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementaciones de Laravel de tiempo de inactividad cero con acciones de GitHub](https://atymic.dev/blog/github-actions-laravel-ci-cd/){:target="_-blank" rel="nofollow,noreferrer"}
- [Desarrollo de acciones de GitHub personalizadas Curso Pluralsight](https://www.pluralsight.com/courses/building-custom-github-actions/){:target="_-blank" rel="nofollow,noreferrer"}
- [Implementación continua de Django en DigitalOcean con acciones Docker y GitHub](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/){:target="_-blank" rel="nofollow,noreferrer"}
- [Configurar corredores de acciones de GitHub autoescalados y autoescalados en instancias puntuales de AWS](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners){:target="_-blank" rel="nofollow,noreferrer"}

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Windows 10 está constantemente agrega nuevas características, pero no todas son creadas por Microsoft. He encontrado 7 cambios que Windows implementó robados de Linux.](/assets/img/2020-news/caract-windows-10.webp "Windows 10 está constantemente agrega nuevas características, pero no todas son creadas por Microsoft. He encontrado 7 cambios que Windows implementó robados de Linux.")