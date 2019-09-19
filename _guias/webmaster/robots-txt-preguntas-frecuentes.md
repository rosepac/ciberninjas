---
title: 🤖 ▷ Preguntas Frecuentes Sobre robots.txt
description: "🕷 Preguntas Frecuentes Sobre robots.txt"
excerpt: "🕷 Preguntas Frecuentes Sobre robots.txt"
published: true
comments: true
date: 2019-09-19
last_modified_at: 2019-09-19 10:40:10
permalink: /robots-txt-preguntas-frecuentes/
canonical_URL: https://ciberninjas.com/robots-txt/
# header:
#   image: "/assets/images/robots-txt-lupa-ciberninjas.webp"
#   image_description: Robots txt, la configuración de tu página para los rastreadores de los buscadores más importantes | Ciberninjas
#   caption: "**Créditos**: Edición Personal Sobre Foto de Emiliano Vittoriosi en Unsplash"
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
---

Esta es una lista con preguntas frecuentes sobre robots web. Seleccione la pregunta para ir a la página de respuestas, o seleccione en el icono del ojo después de la pregunta para mostrar la respuesta en esta página.

## Acerca de los robots WWW
### ¿Qué es un robot WWW?
Un robot es un programa que atraviesa automáticamente la estructura de hipertexto de la Web recuperando un documento y recuperando recursivamente todos los documentos a los que se hace referencia.

Tenga en cuenta que "recursivo" aquí no limita la definición a ningún algoritmo transversal específico; incluso si un robot aplica algo de heurística a la selección y el orden de los documentos para visitar y espacia las solicitudes durante un largo espacio de tiempo, sigue siendo un robot.

Los navegadores web normales no son robots, porque son operados por un humano y no recuperan automáticamente los documentos de referencia (que no sean imágenes en línea).

Los robots web a veces se denominan web wanderers, web crawlers o spiders. Estos nombres son un poco engañosos ya que dan la impresión de que el software se mueve entre sitios como un virus; En este caso, un robot simplemente visita los sitios solicitándoles documentos.


### ¿Qué es un agente?
La palabra "agente" se usa para muchos significados en informática en estos días. Específicamente:

- Agentes autónomos
Son programas que viajan entre sitios y deciden cuándo moverse y qué hacer. Estos solo pueden viajar entre servidores especiales y actualmente no están muy extendidos en Internet.

- Agentes inteligentes
Son programas que ayudan a los usuarios con cosas, como elegir un producto, o guiar a un usuario a través del llenado de formularios, o incluso ayudar a los usuarios a encontrar cosas. Estos generalmente tienen poco que ver con las redes.

- Agente de usuario
Es un nombre técnico para programas que realizan tareas de red para un usuario, como agentes de usuario web como Netscape Navigator y Microsoft Internet Explorer, y agente de usuario de correo electrónico como Qualcomm Eudora, etc.


### ¿Qué es un buscador?
Un motor de búsqueda es un programa que busca en algún conjunto de datos. En el contexto de la Web, la palabra "motor de búsqueda" se usa con mayor frecuencia para los formularios de búsqueda que buscan en bases de datos de documentos HTML recopilados por un robot.


### ¿Qué tipo de robots existen?
Los robots se pueden usar para varios propósitos:
- Indexación
- Validación HTML
- Validación de enlace
- Monitoreo "Qué hay de nuevo"
- Reflejo
Vea la [lista de robots](/robots-txt/#lista-robots) activos para ver qué robot hace qué. No me preguntes, todo lo que sé es lo que está en la lista.


### Entonces, ¿qué son los robots, arañas, rastreadores web, gusanos, hormigas?
Esto solo son nombres para el mismo tipo de cosas, con connotaciones ligeramente diferentes:

- Robots
    El nombre genérico.
- Arañas
    Igual que los robots, pero suena más fresco en la prensa.
- Gusanos
    Igual que los robots, aunque técnicamente un gusano es un programa de replicación, a diferencia de un robot.
- Rastreadores web
    Igual que los robots, pero tenga en cuenta que WebCrawler es un robot específico
- WebAnts
    Robots cooperadores distribuidos.


### ¿Son los robots malos para la web?
Hay algunas razones por las cuales las personas creen que los robots son malos para la Web:
- Ciertas implementaciones de robots pueden (y han tenido en el pasado) redes y servidores sobrecargados. Esto sucede especialmente con personas que recién comienzan a escribir un robot; En estos días hay suficiente información sobre robots para evitar algunos de estos errores.
- Los robots son operados por humanos, que cometen errores en la configuración, o simplemente no consideran las implicaciones de sus acciones. Esto significa que las personas deben tener cuidado, y los autores de robots deben dificultar que las personas cometan errores con efectos negativos.
- Los robots de indexación en toda la web crean una base de datos central de documentos, que no se adapta demasiado bien a millones de documentos en millones de sitios.
Pero al mismo tiempo, la mayoría de los robots están bien diseñados, operados profesionalmente, no causan problemas y brindan un servicio valioso en ausencia de mejores soluciones ampliamente implementadas.

Entonces, no, los robots no son intrínsecamente malos, ni intrínsecamente brillantes, y necesitan una atención cuidadosa.


### ¿Hay libros de robots?
Sí, existen algunos; lo más complicado es encontrarlos en español.
<!-- Agregar Libros Sobre.. -->

- [Bots y otras bestias de Internet](https://amzn.to/2Qf1gTb)
- [Perl & LWP](https://amzn.to/2Ql4pB4) (2002)
- [Programación Web con Perl](https://amzn.to/32L6Yh4)
- [Spidering Hacks](https://amzn.to/31xNQ5X): 100 consejos y herramientas de resistencia industrial
- [Webbots, arañas y rastreadores de pantalla](https://amzn.to/32L7mw2)


### ¿Dónde puedo encontrar más información sobre robots?
Hay una página de inicio de Web robots en:

https://ciberninjas.com/robots-txt/

Por supuesto, la última versión de estas preguntas frecuentes está allí; también encontrarás muchos detalles más.


## Robots de indexación
### ¿Cómo decide un robot dónde visitar?
Esto depende del robot, cada uno usa diferentes estrategias. En general, comienzan desde una lista histórica de URL, especialmente de documentos con muchos enlaces en otros lugares, como listas de servidores, páginas "Novedades" y los sitios más populares en la Web.

La mayoría de los servicios de indexación también le permiten enviar URL manualmente, que luego serán colocadas en cola y visitadas por el robot.

A veces se utilizan otras fuentes de URL, como escáneres a través de publicaciones de USENET, listas de correo publicadas, etc.

Dados esos puntos de partida, un robot puede seleccionar URL para visitar e indexar, y analizar y usar como fuente para nuevas URL.


### ¿Cómo decide un robot de indexación qué indexar?
Si un robot de indexación conoce un documento, puede decidir analizarlo e insertarlo en su base de datos. La forma en que esto se hace depende del robot: algunos robots indexan los títulos HTML, o los primeros párrafos, o analizan todo el HTML e indexan todas las palabras, con ponderaciones que dependen de las construcciones HTML, etc. Algunos analizan la etiqueta META u otros Etiquetas ocultas

Esperamos que a medida que la Web evolucione haya más instalaciones disponibles para asociar eficientemente metadatos, como la indexación de información con un documento. Esto en la actualidad se realiza a través de los datos estructurados de Google a pesar de que no es una tecnología generalizada, ni estandar respecto a todos los bots de robots.


### ¿Cómo registro mi página con un robot?
Esto depende de la compaía creadora de cada buscador. Muchos servicios tienen un enlace a un formulario de envío de URL en su página de búsqueda, o tienen más información en sus páginas de ayuda. Por ejemplo:
- [Google](https://kutt.it/webmaster-google "Herramientas de Webmaster Gratuitas ofrecidas por el buscador Google")
- [Bing](https://kutt.it/webmaster-bing "Herramientas de Webmaster Gratuitas ofrecidas por el buscador Bing")
- [Yahoo](https://kutt.it/webmaster-yahoo "Herramientas de Webmaster Gratuitas ofrecidas por el buscador Yahoo")
- [Duck Duck Go](https://kutt.it/duckduckgo-subir-pagina "Herramientas de Webmaster Gratuitas ofrecidas por el buscador Duck Duck Go")

### ¿Cómo obtengo un mejor posicionamiento en los motores de búsqueda?
Esto se conoce como "SEO" o Optimización de motores de búsqueda. Existen muchos sitios web, foros y empresas que tienen como objetivo / afirman ayudar con eso.

Básicamente el SEO se reduce a:
- En el diseño de su sitio, use texto en lugar de imágenes y Flash para contenido importante.
- Haga que su sitio funcione con JavaScript, Java y CSS deshabilitados.
- Organice su sitio de modo que tenga páginas que se centren en un tema en particular.
- Evite marcos HTML e iframes.
- Utilice URL normales, evitando enlaces que parecen consultas de formulario (http://www.ejemplo.com/buscador?id).
- Comercialice su sitio haciendo que otros sitios relevantes enlacen con el suyo.
- No intentes engañar al sistema (rellenando tus páginas de palabras clave, o intentando apuntar a contenido específico en los motores de búsqueda, o usando granjas de enlaces).

Ver también:
- [Guía de optimización en buscadores (SEO) para principiantes](https://kutt.it/guia-seo-search-console) por Google Search Console
- [Consola de Buscadores / Search Console: Primeros Pasos](https://kutt.it/search-console-primeros-pasos)
- [Blog para Webmasters](https://kutt.it/webmaster-blog-google-rastreo-indexacion) por Google, noticias sobre indexación y rastreo de páginas web a través del buscador Google


## Para administradores de servidores
### ¿Cómo sé si me ha visitado un robot?
Puedes verificar los registros de su servidor para los sitios que recuperan muchos documentos, especialmente en poco tiempo.

Si su servidor admite el registro de agente de usuario, puede verificar las recuperaciones con valores de encabezado de agente de usuario inusuales.

Finalmente, si observa que un sitio busca repetidamente el archivo '/robots.txt' es probable que también sea un robot.


### ¡Me ha visitado un robot! ¿Ahora qué?
Si cree que ha descubierto un nuevo robot (es decir, uno que no figura en la lista de robots activos y que hace más que visitas esporádicas, envíeme un mensaje para que pueda anotarlo para futuras referencias. Pero no lo haga ¡No me cuentes sobre todos los robots que pasan!


### ¡Un robot rastrea mi sitio demasiado habitualmente!
Esto se llama "rastreo rápido" y las personas generalmente lo notan si están monitoreando o analizando un archivo de registro de acceso.

En primer lugar, compruebe si es un problema comprobando la carga de su servidor y supervisando el registro de errores de sus servidores, y las conexiones concurrentes si puede. Si tiene un servidor de rendimiento medio o alto, es muy probable que pueda hacer frente a una gran carga de incluso varias solicitudes por segundo, especialmente si las visitas son rápidas.

Sin embargo, puede tener problemas si tiene un sitio de bajo rendimiento, como su propia PC de escritorio o Mac en la que está trabajando, o ejecuta un software de servidor de bajo rendimiento, o si tiene muchas recuperaciones largas (como scripts CGI o documentos grandes ) Estos problemas se manifiestan en conexiones rechazadas, una alta carga, ralentizaciones del rendimiento o, en casos extremos, un bloqueo del sistema.

Si esto sucede, hay algunas cosas que debe hacer. Lo más importante, comience a registrar información: cuándo se dio cuenta, qué sucedió, qué dicen sus registros, qué está haciendo en respuesta, etc. Esto ayuda a investigar el problema más adelante. En segundo lugar, intente averiguar de dónde vino el robot, qué direcciones IP o dominios DNS, y vea si se mencionan en la lista de robots activos . Si puede identificar un sitio de esta manera, puede enviar un correo electrónico a la persona responsable y preguntarle qué pasa. Si esto no ayuda, pruebe su propio sitio para obtener números de teléfono o envíe un correo al administrador de correo en su dominio.

Si el robot no está en la lista, envíeme un correo electrónico con toda la información que ha recopilado, incluidas las acciones de su parte. Si no puedo ayudar, al menos puedo anotarlo para otros.


<!-- ### ¿Cómo mantengo un robot fuera de mi servidor? -->
## Normas de exclusión de robots
### ¿Por qué encuentro entradas para /robots.txt en mis archivos de registro?
robablemente provienen de robots que intentan ver si ha especificado alguna regla para ellos utilizando el Estándar para la exclusión de robots , consulte también a continuación .

Si no le importan los robots y desea evitar los mensajes en sus registros de errores, simplemente cree un archivo vacío llamado robots.txt en el nivel raíz de su servidor.

No pongas ningún lenguaje HTML o inglés "¿Quién demonios eres?" texto en él - aunque seguramente nunca será leído por nadie. 😅


### ¿Cómo evito que los robots escaneen mi sitio?
La forma rápida de evitar que los robots visiten su sitio es poner estas dos líneas en el archivo /robots.txt en su servidor:
```
User-agent: *
Disallow: /
```
Esto solo se cumplirá con robots con buen comportamiento.

Ver también:

- [¿Puedo bloquear solo robots malos?](/#puedo-bloquear-solo-robots-malos)

### ¿Dónde descubro cómo funcionan los archivos /robots.txt?
<!-- Puede leer la especificación estándar completa: /orig.html -->
El concepto básico es simple: al escribir un archivo de texto estructurado puede indicar a los robots que ciertas partes de su servidor están fuera del alcance de algunos o todos los robots. 

Se explica mejor con un ejemplo:
```
# /robots.txt file for http://webcrawler.com/
# mail webmaster@webcrawler.com for constructive criticism

User-agent: webcrawler
Disallow:

User-agent: lycra
Disallow: /

User-agent: *
Disallow: /tmp
Disallow: /logs
```
Las dos primeras líneas, que comienzan con '#', especifican un comentario

El primer párrafo especifica que el robot llamado 'webcrawler' no tiene nada prohibido: puede ir a cualquier parte.

El segundo párrafo indica que el robot llamado 'lycra' tiene todas las URL relativas que comienzan con '/' no permitido. Debido a que todas las URL relativas en un servidor comienzan con '/', esto significa que todo el sitio está cerrado.

El tercer párrafo indica que todos los demás robots no deben visitar las URL que comienzan con / tmp o / log. Tenga en cuenta que '*' es un token especial, que significa "cualquier otro agente de usuario"; no puede usar patrones comodín o expresiones regulares en las líneas Agente de usuario o No permitir.

Dos errores comunes:

Los comodines no son compatibles: en lugar de 'No permitir: / tmp / *' solo diga 'No permitir: / tmp /'.
No debe colocar más de una ruta en una línea Disallow (esto puede cambiar en una versión futura de la especificación).


### ¿Qué programa debo usar para crear /robots.txt?
Cualquier [editor de texto](/recursos/#editores-de-texto) o software que produzca un archivo de texto, será suficiente. Entre [mis recursos](/recursos) o en [Aplicaciones Escolares](/las-mejores-aplicaciones-escolares-seguimiento-tareas/#más-aplicaciones) puedes encontrar varias programas que te servirán.

- En Microsoft Windows, usa el Bloc de Notas o Wordpad (Guardar como documento de texto .txt) o incluso Microsoft Word (Guardar como texto sin formato).
- En Macintosh, usa TextEdit (Formato-> Crear texto sin formato, luego Guardar como occidental).
- En Linux, Vi, Emacs, la propia Consola.


### ¿Cómo uso /robots.txt en un host virtual?
El término "host virtual" a veces se usa para significar varias cosas diferentes:

- Un servidor web de "host virtual" utiliza el encabezado de host HTTP para distinguir las solicitudes a diferentes nombres de dominio en la misma dirección IP. En este caso, el hecho de que el dominio esté en un host compartido no hace ninguna diferencia para un robot visitante, y puede colocar un archivo /robots.txt en el directorio dedicado a su dominio.

- Un "servidor virtual" ejecuta un sistema operativo separado en una máquina virtual, como VMWare o Xen. De nuevo, para un robot que es una computadora separada.


### ¿Cómo uso /robots.txt en un host compartido?
Si comparte un host con otras personas y tiene una URL como: http://www.ejemplo.com/~NombreDeUsuario/ o http://www.ejemplo.com/NombreDeUsuario, entonces no puede tener tu propio / archivo robots.txt. Si deseas utilizar /robots.txt, tendrás que pedirselo al administrador del host.

Si desea más control, cambie de proveedor a un host virtual.


### ¿Qué pasa con un mayor desarrollo de /robots.txt?



### ¿Qué pasa si no puedo hacer un /robots.txt?
### ¿Puedo bloquear solo robots malos?
### ¿Por qué este robot ignoró mi /robots.txt?
### ¿Se puede usar un /robots.txt en un tribunal de justicia?
### ¿Seguramente enumerar archivos confidenciales es un problema?

## Acerca de las etiquetas META
    - ¿Qué es el atributo de enlace rel = "nofollow"?

## Disponibilidad
    - ¿Dónde puedo usar un robot?
    - ¿Dónde puedo conseguir un robot?
    - ¿Dónde puedo obtener el código fuente de un robot?
    - Estoy escribiendo un robot, ¿de qué debo tener cuidado?
    - He escrito un robot, ¿cómo lo enumero?