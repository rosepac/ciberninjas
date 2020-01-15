---

title: "Ptrace"
description: "📖 👨‍💻  WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Ptrace"
excerpt: "📖 👨‍💻  WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Ptrace"
date: 2020-01-15 01:55:07
published: true
author_profile: false
permalink: /wiki/ptrace
canonical_URL: https://ciberninjas.com/wiki/ptrace

---

Ptrace es una llamada al sistema que se encuentra en Unix y en varios sistemas operativos similares a Unix . Al usar ptrace (el nombre es una abreviatura de "traza de proceso") un proceso puede controlar a otro, permitiendo que el controlador inspeccione y manipule el estado interno de su objetivo. Los depuradores y otras herramientas de análisis de código utilizan ptrace , principalmente como ayuda para el desarrollo de software.

## Usos

Ptrace es utilizado por los depuradores (como gdb y dbx), mediante herramientas de rastreo como strace y ltrace, y mediante herramientas de cobertura de código. Ptrace también es utilizado por programas especializados para parchear programas en ejecución, para evitar errores no corregidos o para superar características de seguridad. Se puede utilizar además como un sandbox y como un simulador de entorno de tiempo de ejecución (como emular el acceso de root para software no root).

Al conectarse a otro proceso utilizando la llamada ptrace, una herramienta tiene un control extenso sobre el funcionamiento de su objetivo. Esto incluye la manipulación de sus descriptores de archivo , memoria y registros . Puede avanzar un paso por el código del objetivo, puede observar e interceptar llamadas del sistema y sus resultados, y puede manipular los manejadores de señal del objetivo y recibir y enviar señales en su nombre. La capacidad de escribir en la memoria del objetivo permite no solo cambiar su almacén de datos, sino también el propio segmento de código de la aplicación , lo que permite que el controlador instale puntos de interrupción y aplique el código de ejecución del objetivo.

Como la capacidad de inspeccionar y alterar otro proceso es muy poderosa, ptrace solo puede conectarse a procesos a los que el propietario puede enviar señales (generalmente solo sus propios procesos); la cuenta de superusuario puede rastrear casi cualquier proceso (excepto init en los núcleos anteriores a 2.6.26). En los sistemas Linux que cuentan con seguridad basada en capacidades , la capacidad de trazar está aún más limitada por la capacidad CAP_SYS_PTRACE o por el módulo de seguridad YAMA Linux. En FreeBSD , está limitado por las cárceles de FreeBSD y las políticas de control de acceso obligatorio.

## Limitaciones

Las comunicaciones entre el controlador y el objetivo se realizan utilizando llamadas repetidas de ptrace, pasando un pequeño bloque de memoria de tamaño fijo entre los dos (se necesitan dos cambios de contexto por llamada); Esto es extremadamente ineficiente cuando se accede a grandes cantidades de memoria del objetivo, ya que esto solo se puede hacer en bloques de tamaño de palabra (con una llamada de seguimiento para cada palabra).

Por esta razón, la octava edición de Unix introdujo procfs , que permite a los procesos permitidos el acceso directo a la memoria de otro proceso, seguido de 4.4BSD, y Solaris, BSD y AIX heredaron el uso de / proc para el soporte del depurador. y principalmente copiado por Linux. Algunos, como Solaris, han eliminado ptrace como una llamada al sistema, reteniéndola como una llamada a la biblioteca que reinterpreta las llamadas a ptrace en términos de los procesos de la plataforma. Dichos sistemas utilizan ioctls en el descriptor de archivo del archivo abierto / proc para emitir comandos al proceso controlado. FreeBSD , por otro lado, extendió el sitio para eliminar los problemas mencionados y declaró que los procedimientos eran obsoletos debido a sus problemas de diseño inherentes. 

Ptrace solo proporciona la interfaz más básica necesaria para admitir depuradores y herramientas similares. Los programas que lo utilizan deben tener un conocimiento profundo de los detalles del sistema operativo y la arquitectura, incluido el diseño de la pila, la interfaz binaria de la aplicación , el mecanismo de llamada del sistema , el cambio de nombre , el formato de los datos de depuración y son responsables de comprender y desarmar el código de la máquina . Además, los programas que inyectan código ejecutable en el proceso de destino o (como gdb) permiten al usuario ingresar comandos que se ejecutan en el contexto del destino deben generar y cargar ese código por sí mismos, generalmente sin la ayuda del cargador de programas .

## Soporte

### Unix y BSD

Ptrace  se implementó por primera vez en la Versión 6 de Unix, y estuvo presente en las ramas SVr4 y 4.3BSD de Unix. Ptrace está disponible como una llamada al sistema en IRIX, IBM AIX, NetBSD, FreeBSD, OpenBSD, y Linux. Ptrace se implementa como una llamada a la biblioteca en Solaris, construida en el sistema de archivos procfs del kernel de Solaris; Sun señala que ptrace en Solaris está destinado a la compatibilidad, y recomienda que las nuevas implementaciones usen la interfaz más rica que proporciona el proceso. UnixWare también presenta un seguimiento limitado pero, al igual que Sun, SCO recomienda que los implementadores usen las funciones de procfs subyacentes. HP-UX admitió ptrace hasta la versión 11i v3 (se desaprobó a favor de ttrace , una llamada similar específica del sistema operativo, en 11i v1).

### MacOS

De Apple Mac OS X también implementa PTRACE como una llamada al sistema. La versión de Apple agrega una opción especial PT_DENY_ATTACH: si un proceso invoca esta opción en sí mismo, los intentos posteriores de seguir el proceso fallarán. Apple usa esta función para limitar el uso de depuradores en programas que manipulan contenido DRM , incluido iTunes. PT_DENY_ATTACH en también deshabilita la capacidad de DTrace para monitorear el proceso. Los depuradores en OS X generalmente usan una combinación de ptrace y Mach VM y API de hilo. Ptrace (nuevamente con PT_DENY_ATTACH) está disponible para desarrolladores para el iPhone de Apple.

### Linux

Linux también brinda a los procesos la capacidad de evitar que otros procesos se unan a ellos. Los procesos pueden llamar a prctl syscall y borrar su indicador PR_SET_DUMPABLE ; en núcleos posteriores, esto evita que los procesos que no son de raíz tracen el proceso de llamada; El agente de autenticación OpenSSH utiliza este mecanismo para evitar el secuestro de sesión ssh a través de ptrace. Las versiones posteriores de Ubuntu se entregan con un kernel de Linux configurado para evitar que ptrace se agregue a procesos que no sean el padre del proceso rastreado; esto permite que gdb y strace continúen funcionando cuando se ejecuta un proceso de destino, pero evita que se unan a un proceso de ejecución no relacionado. El control de esta función se realiza a través de la configuración / proc / sys / kernel / yama / ptrace_scope. En los sistemas donde esta función está habilitada, los comandos como " gdb --attach " y " strace -p " no funcionarán.

### Android

Para algunos teléfonos Android con un cargador de arranque bloqueado, ptrace se usa para obtener control sobre el proceso de inicio para habilitar un 'segundo arranque' y reemplazar los archivos del sistema.

**Categorías**: [Depuración](/wiki/categoria/depuracion)
{:.notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [Ptrace](https://en.wikipedia.org/wiki/Ptrace){:target="_blank"} de la Wikipedia en inglés, versión del 1 de Noviembre de 2019, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=Ptrace&action=history){:target="_blank"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank"}.
{: .notice--info}