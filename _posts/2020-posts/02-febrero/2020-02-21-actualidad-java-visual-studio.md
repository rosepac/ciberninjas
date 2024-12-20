---

author: rosepac
bootstrap: true
comments: false
tags:
- Actualidad
- Editores de Texto
- Java
- Visual Studio Code
thumbnail: /assets/img/blog/java-visual-studio.webp
feature-img: /assets/img/blog/java-visual-studio.webp
title: '💻 ▷ Segunda actualización de Java para Visual Studio Code en 2020'
description: Mejoras y cambios insertados en el editor de texto de Visual Studio Code respecto al uso de Java y sus librerías
excerpt: Mejoras y cambios insertados en el editor de texto de Visual Studio Code respecto al uso de Java y sus librerías
canonical_URL: https://ciberninjas.com/actualidad-java-visual-studio/
permalink: /actualidad-java-visual-studio/
date: 2020-02-21 11:14:32
last_modified_at: 
published: true

---

<div class="hidden-sm-down">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
    <li class="breadcrumb-item"><a href="/programa-gratis/">Programa Gratis</a></li>
    <li class="breadcrumb-item"><a href="/java/">Aprender Java</a></li>
    <li class="breadcrumb-item active" aria-current="page">Noticias Java</li>
  </ol>
</nav>
</div>
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement":
 [
  {
   "@type": "ListItem",
   "position": 1,
   "item":
   {
    "@id": "https://ciberninjas.com/programa-gratis/",
    "name": "Programar Gratis"
    }
  },
  {
   "@type": "ListItem",
  "position": 2,
  "item":
   {
     "@id": "https://ciberninjas.com/java/",
     "name": "¿Cómo Aprender a Programar en Java 2021?"
   },
  {
   "@type": "ListItem",
   "position": 3,
   "item":
   {
    "@id": "https://ciberninjas.com/actualidad-java-visual-studio/",
    "name": "Segunda actualización de Java para Visual Studio Code en 2020"
    }
  }
 ]
}
</script>

En esta actualización, le mostraremos las nuevas formas de administrar sus dependencias y configurar el JDK múltiple.

Aprender las herramientas adicionales que se pueden aprovechar para utilizar frameworks y mejorar los tiempos de ejecución. Además, existen algunos cambios más dentro de esta actualización.

- [**Gestión de dependencias**](#gestión-de-dependencias)
  - [Maven](#maven)
- [**Otros proyectos**](#otros-proyectos)
  - [Incluir bibliotecas](#incluir-bibliotecas)
  - [Excluir algunas bibliotecas](#excluir-algunas-bibliotecas)
  - [Adjuntar los ficheros `jar ` del código fuente](#adjuntar-los-ficheros-jar--del-código-fuente)
- [**Configurar el tiempo de ejecución de JDK en local**](#configurar-el-tiempo-de-ejecución-de-jdk-en-local)
- [**Extensiones para Java Frameworks y Runtimes más populares**](#extensiones-para-java-frameworks-y-runtimes-más-populares)
- [**Más Mejoras**](#más-mejoras)

## **Gestión de dependencias**

Ya sea que use o no una herramienta de compilación, Java Dependency Viewer ahora proporciona una manera mejor de manejar sus dependencias.

### Maven

Si está utilizando Maven, ahora es muy conveniente agregar dependencias para su proyecto Maven a través del explorador de dependencias de Java haciendo clic en el  botón + como se muestra a continuación.

![](/assets/img/blog/vsc-captura-maven.webp)

## **Otros proyectos**

Si no estas utilizando ninguna herramienta de compilación como Maven o Gradle, y deseas hacer referencia a dependencias binarias dentro del sistema de archivos local, la ejecución es muy similar a la situación anterior.

![](/assets/img/blog/vsc-manage_dependencies.webp)

Se ha incluido un nuevo espacio predeterminado denominado `java.project.referencedLibaries` . A continuación se muestra cómo se puede acceder a personalizar este espacio, desde la propia configuración del programa.

### Incluir bibliotecas

Las bibliotecas a las que se hace referencia se describen utilizando un conjunto de patrones globales:

{% highlight js %}
1
2
3
4
"java.project.referencedLibraries": [ 
    "library/**/*.jar", 
    "/home/username/lib/foo.jar" 
]
{% endhighlight %}

De esta forma, todos los archivos `.jar`  de la carpeta de  `library` de dentro del espacio de trabajo y `foo.jar` en la ruta absoluta especificada se agregan a las dependencias externas del proyecto.

VS Code reconoce las bibliotecas a las que se hace referencia y el proyecto se actualizará una vez que haya un cambio en estos archivos de dependencias.

Por defecto, VS Code hará referencia a todos los archivos jar dentro del directorio `lib` que se encuentra en espacio de trabajo, usando la ruta  `lib/**/*.jar`.

### Excluir algunas bibliotecas

Si deseas excluir algunas bibliotecas del proyecto, simplemente expande `java.project.referencedLibraries` del patrón completo que aparecen en `include-exclude-sources`  y proporciona el siguiente pedazo de código dentro de los campos excluidos `exclude` field:

{% highlight js %}
"java.project.referencedLibraries": { 
    "include": [ 
        "library/**/*.jar", 
        "/home/username/lib/foo.jar" 
    ], 
    "exclude": [ 
        "library/sources/**" 
    ] 
}
{% endhighlight %}

De esta forma, cualquier fichero jar dentro de la carpeta incluida en la ruta de `library/sources` se ignora de las dependencias externas del proyecto.

### Adjuntar los ficheros `jar ` del código fuente

Por defecto, una referencia a `{binary}.jar` intentará buscar `{binary}-sources.jar` dentro del mismo directorio y adjuntarlo como fuente si se encuentra una coincidencia.

Si desea especificar manualmente un jar como archivo adjunto de origen, puede proporcionar un mapa clave-valor en el campo `sources` dentro del fichero:

{% highlight js %}
"java.project.referencedLibraries": { 
    "include": [ 
        "library/**/*.jar", 
        "/home/username/lib/foo.jar" 
    ], 
    "exclude": [ 
        "library/sources/**" 
    ], 
    "sources": { 
        "library/bar.jar": "library/sources/bar-src.jar" 
    } 
}
{% endhighlight %}

De esta manera, `bar-src.jar` se adjunta a `bar.jar` como su fuente de código.

## **Configurar el tiempo de ejecución de JDK en local**

A medida que Java evoluciona, muchos desarrolladores de Java necesitan lidiar con múltiples tiempos de ejecución de Java. Ahora admitimos una nueva asignación de preferencias `java.configuration.runtimes`para entornos de ejecución Java.

VS Code detectará el tiempo de ejecución requerido para su proyecto y elegirá el tiempo configurado. A continuación, como ejemplo:

{% highlight js %}
"java.configuration.runtimes": [
        {
            "name": "JavaSE-1.8",
            "path": "/usr/local/jdk1.8.0_201"
        },
        {
            "name": "JavaSE-11",
            "path": "/usr/local/jdk-11.0.3",
            "sources" : "/usr/local/jdk-11.0.3/lib/src.zip",
            "javadoc" : "https://docs.oracle.com/en/java/javase/11/docs/api",
            "default":  true
        },
        {
            "name": "JavaSE-12",
            "path": "/usr/local/jdk-12.0.2"
        },
        {
            "name": "JavaSE-13",
            "path": "/usr/local/jdk-13"
        }
    ]
{% endhighlight %}

El nombre del tiempo de ejecución debe ser uno de los siguientes: “J2SE-1.5”, “JavaSE-1.6”, “JavaSE-1.7”, “JavaSE-1.8”, “JavaSE-9”, “JavaSE-10”, “JavaSE-11”, “ JavaSE-12 "," JavaSE-13 ".

Actualizaremos la lista con cada versión compatible de JDK.

## **Extensiones para Java Frameworks y Runtimes más populares**

Si estas trabajando con algunos de los Frameworks de Java más populares, como Spring Boot o MicroProfile, Visual Studio Code también será capaz de ayudarte, desde ahora en adelante.

A continuación se presentan los nuevos cambios disponibles a través de las siguientes extensiones:

1. [Spring Boot Tools](https://marketplace.visualstudio.com/items/Pivotal.vscode-spring-boot){:target="_blank" rel="nofollow,noreferrer"} ahora informa fallas en la conexión en el modo emergente.
2. El recientemente lanzado [MicroProfile Extension Pack](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.vscode-microprofile-pack){:target="_blank" rel="nofollow,noreferrer"} ahora incluye [MicroProfile Starter](https://marketplace.visualstudio.com/items?itemName=MicroProfile-Community.mp-starter-vscode-ext) para que pueda generar rápidamente un proyecto MicroProfile Maven junto con herramientas de desarrollo para tiempos de ejecución como [Open Liberty](https://marketplace.visualstudio.com/items?itemName=Open-Liberty.liberty-dev-vscode-ext){:target="_blank" rel="nofollow,noreferrer"} y [Quarkus](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus){:target="_blank" rel="nofollow,noreferrer"} con muchas características nuevas.
3. Si está trabajando con cualquier servidor Red Hat y productos de tiempo de ejecución como Wildfly o JBoss, consulte [Conector del servidor](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-server-connector){:target="_blank" rel="nofollow,noreferrer"} que le permite iniciar, detener e implementar en cualquiera de ellos.

## **Más Mejoras**

Las últimas actualizaciones también traen muchas otras mejoras para la experiencia de Java en Visual Studio Code.

1. Nuevas acciones de código
	- Eliminar el `final` modificador.
	- Asignar declaración a la nueva variable / campo.
	- Eliminar interfaces redundantes.
	- Agregue etiquetas de casos faltantes en las declaraciones de cambio.
2. `java.import.gradle.offline.enabled` Preferencia añadida
3. Exponer propuestas de finalización completa a extensiones de terceros. Esto habilitará otras extensiones como IntelliCode para proporcionarle una mejor experiencia IntelliSense sin afectar el rendimiento de finalización.
4. Visor de dependencia de Java
	- agregar `Collapse All` todo el  soporte
	- Admite el menú contextual del botón derecho para ver nodos
5. Maven
	- Soporte para depurar comandos favoritos.
	- Agregue acceso directo para ver la salida cuando se produce un error.
	- Soporte para buscar el binario local de Maven si no se encuentra.
6.  Depurador
	- Proporcione el menú contextual para continuar / pausar todos / otros hilos.

### **Relacionados** <!-- omit in toc -->

[▷ Editores de Texto](/categoria/#editor-de-texto)
  * [Eclipse Theia](/wiki/eclipse-theia)
[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2021](/programar/)
[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2021](/15-mejores-lenguajes-programacion/)
[▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

> **Fuente**\: [Desarrolladores de Visual Studio Code - Microsoft](https://devblogs.microsoft.com/java/java-on-visual-studio-code-update-february-2020/ "Desarrolladores de Visual Studio Code - Microsoft"){:target="_blank" rel="nofollow,noreferrer"}

![Visual Studio Code, el mejor editor de texto para utilizar a la hora de programar en Java](/assets/img/blog/java-visual-studio.webp "Visual Studio Code, el mejor editor de texto para utilizar a la hora de programar en Java")