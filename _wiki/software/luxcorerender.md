---

title: "LuxCoreRender"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: LuxCoreRender, es un software de renderización 3D."
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: LuxCoreRender, es un software de renderización 3D."
date: 2020-06-12 01:20:59
last_modified_at:
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
published: true
author: rosepac
bootstrap: true
layout: post
permalink: /wiki/luxcorerender/
canonical_URL: https://ciberninjas.com/wiki/luxcorerender/
feature-img: /assets/img/wiki/articulos/wiki-luxcorerender.webp
img: /assets/img/wiki/articulos/wiki-luxcorerender.webp

---

LuxCoreRender es un software de renderización 3D de código abierto y libre. LuxRender comenzó bajo la denominaciónde LuxRender en 2008 antes de cambiar su nombre a LuxCoreRender en 2017 como parte de un reinicio del proyecto. El software LuxCoreRender puede instalarse sobre Linux, Mac OS X y Microsoft Windows.

## Descripción General

LuxCoreRender presenta un sistema completo de renderización 3D basado en otros programas de modelado 3D de creación de escenas renderizadas, incluidos los modelos, los materiales, las luces y las cámaras. Este contenido se puede exportar desde la aplicación para su representación.

Luxrender posee plugins totalmente funcionales con los que exportar sus diseño hacía Blender y Daz Studio; y solamente parcialmente en el caso de que deseemos trabajar conjunto a software como Cinema 4D, Maya, SketchUp o XSI.

Luxrender también es totalmente compatible como renderizador de producción en 3DS Max. LuxCoreRender y Blender son compatibles a través del complemento BlendLuxCore. Después de abrir el archivo exportado, LuxCoreRender renderizará la escena.

Se pueden configurar varios ajustes para la configuración del procesamiento posterior a través de la interfaz gráfica de usuario y el archivo de control de la escena. Una característica importante de LuxCoreRender es que el usuario puede cambiar el equilibrio de diferentes luces mientras la imagen aún se está procesando.

## Historia

### LuxRender: Versión 1

LuxCoreRender comenzó originalmente como LuxRender en 2008 basado en PBRT, un programa de representación basada en la física. Aunque PBRT es muy capaz y está bien estructurado, se centra en el uso académico y los artistas digitales no lo pueden utilizar fácilmente.

Como PBRT tiene su licencia bajo la Licencia BSD, fue posible iniciar un nuevo programa basado en el código fuente de PBRT; desde ese punto de partida y con la bendición de los autores originales de PBRT nació definitivamente LuxRender.

En sus inicios, en septiembre de 2007, un pequeño grupo de programadores comenzó a crear el nuevo programa que se centraría sobre todo en un enfoque y uso artístico. Desde su etapa inicial, el programa ha atraído a un pequeño puñado de programadores de todo el mundo.

El 24 de junio de 2008, se anunció el primer lanzamiento oficial, y esa fue la primera versión que se considero utilizable por el público en general.

### LuxCoreRender: Versión 2

El plan para LuxRender v2.0 se definió durante el verano de 2013 y uno de los componentes principales es un nuevo motor basado en las API de C++ y Python. La antigua API de C sufría muchas limitaciones cuando se trataba de características modernas como la edición dinámica de escenas y la representación interactiva, por lo que se decidió escribir una API completamente nueva en lugar de mejorar la anterior.

LuxCore es el nombre de la nueva API de C++ / Python y ofrece todas las características mostradas por SLG (SmallLuxGPU), incluyendo una cámara dinámica, edición de texturas, materiales y objetos, y más.

Durante el invierno de 2017, LuxCoreRender v2.0 se definió como un paquete de render centrado en la API LuxCore, eliminando cualquier código antiguo relacionado con LuxRender v1.x. Se desarrolló un nuevo sitio web, foro, wiki, exportación a Blender, etc. marcando un reinicio por completo del proyecto.

### ¿Por qué el proyecto de Lux Core Render Versión 2?

El proyecto LuxRender se estaba muriendo bajo el peso de muchos viejos códigos abandonados, y todos los desarrolladores activos tenían la fuerte sensación de que se requería un nuevo comienzo. El "núcleo" entre "Lux" y "Render" está ahí para resaltar el nuevo enfoque del proyecto.

Sin embargo, la versión 2.0 comienza con el enfoque de la continuidad, y una hoja de ruta pautada por 10 años de desarrollo y experiencia.

## Características de Lux Render Core

En este apartado vamos a citar todas las características que el software ha ido implementando a lo largo de sus diferentes versiones.

### LuxCoreRender 2.0

Las características incluidas en el proyecto de reinicio de la versión más actual LuxCoreRender 2.0+ incluyen:

- Motor de procesamiento Microkernel pure-OpenCL "Path", compatible con cualquier cantidad de GPU y CPU habilitadas para OpenCL al mismo tiempo.
- Representación de ventana interactiva, incluida la manipulación de material y objetos en tiempo real.
- Soporte de nodo material.
- Grupos de luces, lo que permite al usuario cambiar la intensidad y el color de las lámparas durante el proceso de renderizado.
- Embree el edificio acelerado de BVH.
- Una "caché de muestreo de luz directa" para acelerar escenas con muchas fuentes de luz.
- Una caché de "Iluminación global de fotones" para acelerar escenas complejas, incluido el soporte para la caché de fotones cáustica y la fusión de vértices.
- Soporte para Open Intel Image Denoiser (OIDN).
- Conversión de escenas de Blender Cycles, que incluye soporte (limitado) para la interpretación automática de materiales y texturas de Cycles.
- Propiedades avanzadas del material, incluida la dispersión de vidrio (usando la ecuación de transmisión de Cauchy), vidrio rugoso (para crear vidrio esmerilado o hielo), metal, pintura para automóviles (usando múltiples recubrimientos reflectantes) y terciopelo (para representar superficies borrosas).
- Soporte para unidades de luz con base física como lumen y candela, así como controles de ganancia y exposición tradicionales.
- Soporte para subdivisión de formas, formas de desplazamiento y desplazamiento vectorial de formas de desplazamiento.

### LuxRender 1.0

Las nuevas características incluidas en Luxrender 1.0 incluyen:

- Un integrador experimental estocástico de mapeo progresivo de fotones (SPPM).
- Trazado de ruta "híbrido bidireccional" acelerado por GPU utilizando la GPU para cálculos de intersección de rayos.
- Soporte para múltiples GPU.
- Materiales nuevos y actualizados, incluidos metal, pintura para automóviles, revestimiento brillante y materiales en capas.

### LuxRender 0.8

Las características principales de LuxRender a partir de la versión 0.8 incluyen:

- [Representación sesgada](https://en.wikipedia.org/wiki/Biased_rendering){:target="_blank" rel="nofollow,noreferrer"} e [imparcial](https://en.wikipedia.org/wiki/Unbiased_rendering){:target="_blank" rel="nofollow,noreferrer"}: los usuarios pueden elegir entre precisión física (imparcial) y velocidad (sesgada).
- Representación [espectral](https://en.wikipedia.org/wiki/Visible_spectrum){:target="_blank" rel="nofollow,noreferrer"} completa : en lugar de bandas de color RGB discretas, se utilizan espectros completos para cálculos internos.
- Jerárquica [procedimiento](https://en.wikipedia.org/wiki/Procedural_texture){:target="_blank" rel="nofollow,noreferrer"} basado e imagen [de la textura](https://en.wikipedia.org/wiki/Texture_synthesis){:target="_blank" rel="nofollow,noreferrer"} del sistema: texturas de procedimiento y de imagen basados puede mezclarse en diversas formas, por lo que es posible la creación de materiales complejos.
- [Mapeo de desplazamiento](https://en.wikipedia.org/wiki/Displacement_mapping){:target="_blank" rel="nofollow,noreferrer"} y subdivisión: según las texturas de procedimiento o de imagen, las superficies de los objetos se pueden transformar.
- Representación en red y cooperativa: el tiempo de representación se puede reducir combinando la potencia de procesamiento de varias computadoras. [IPv6](https://en.wikipedia.org/wiki/IPv6){:target="_blank" rel="nofollow,noreferrer"} también es compatible.
- Perspectiva (incluida la [lente de desplazamiento](https://en.wikipedia.org/wiki/Shift_lens){:target="_blank" rel="nofollow,noreferrer"} ), cámaras ortográficas y de entorno.
- [Salida HDR](https://en.wikipedia.org/wiki/High_dynamic_range_rendering){:target="_blank" rel="nofollow,noreferrer"}: la [salida de](https://en.wikipedia.org/wiki/High_dynamic_range_rendering){:target="_blank" rel="nofollow,noreferrer"} renderizado se puede guardar en varios formatos de archivo, incluidos .png, .tga y .exr.
- [Instancias](https://en.wikipedia.org/wiki/Geometry_instancing){:target="_blank" rel="nofollow,noreferrer"}: la [instancia](https://en.wikipedia.org/wiki/Geometry_instancing){:target="_blank" rel="nofollow,noreferrer"} ahorra significativamente recursos del sistema, en particular el consumo de memoria al reutilizar datos de malla en objetos duplicados.
- Procesamiento posterior incorporado: mientras se procesa, puede agregar efectos procesados posteriormente como floración, deslumbramiento, aberración cromática y viñeteado.
- Desenfoque de movimiento, profundidad de campo y efectos de lente: Desenfoque de movimiento verdadero, tanto para la cámara como para objetos individuales, y efectos de lente físicamente precisos, incluida la profundidad de campo.
- Grupos de luz: al usar grupos de luz, uno puede emitir varias situaciones de luz desde una única representación, o hacer ajustes al equilibrio entre las fuentes de luz en tiempo real.
- [Mapeo de tonos](https://en.wikipedia.org/wiki/Tone_mapping){:target="_blank" rel="nofollow,noreferrer"}
- Eliminación de imagen
- Fleximage (película virtual): le permite pausar y continuar los renders. El estado actual del render puede escribirse en un archivo, de modo que cualquier sistema pueda continuar el render en un momento posterior.
- [Aceleración de GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit){:target="_blank" rel="nofollow,noreferrer"} para [trazado de ruta](https://en.wikipedia.org/wiki/Path_tracing){:target="_blank" rel="nofollow,noreferrer"} al muestrear una luz a la vez.
- Curvas de respuesta de película para emular la respuesta de color de las cámaras tradicionales (algunas curvas también son para películas en blanco y negro).
- [Representación volumétrica](https://en.wikipedia.org/wiki/Volumetric_rendering){:target="_blank" rel="nofollow,noreferrer"} utilizando volúmenes homogéneos definiendo un volumen interior y exterior.
- [Dispersión del subsuelo](https://en.wikipedia.org/wiki/Sub-surface_scattering){:target="_blank" rel="nofollow,noreferrer"}

**Desarrollador**: Jean-Philippe Grimaldi, Jean-Francois Romang, David Bucciarelli, Ricardo Lipas Augusto, Asbjorn Heid y otros.
{: .notice--primary}

**Versión Inicial**: 24 de junio de 2008 hace 11 años
{: .notice--primary}

**Lanzamiento Estable**: Versión 2.3 / 3 de marzo de 2020
{: .notice--primary}

**Repositorio**: [github .com / LuxCoreRender / LuxCore](https://github.com/LuxCoreRender/LuxCore){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--primary}

**Escrito en**: C++ y Python
{: .notice--primary}

**Tipología**: Gráficos por computadora en 3D
{: .notice--primary}

**Licencia**: Apache 2.0
{: .notice--primary}

**Sitio Web**: [https://luxcorerender.org/](https://luxcorerender.org/ "Página Web Oficial del Programa LuxCoreRender"){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--primary}

**Categorías**: Software de gráficos 3D gratis | Sistemas de renderizado | Software de renderizado 3D para Linux | Software de iluminación global
{: .notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [LuxCoreRender](https://en.wikipedia.org/wiki/LuxCoreRender){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del 23 de MAyo de 2020, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=LuxCoreRender&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}