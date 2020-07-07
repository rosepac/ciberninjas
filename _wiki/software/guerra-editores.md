---

title: "Guerra de Editores"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: la Guerra de Editores, es la rivalidad entre los usuarios de los editores de texto Emacs y vi ."
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: la Guerra de Editores, es la rivalidad entre los usuarios de los editores de texto Vi y Emacs."
date: 2020-06-13 17:50:59
last_modified_at:
toc: true
toc_label: "Contenidos"
toc_icon: user-ninja
toc_sticky: true
published: true
author: rosepac
permalink: /wiki/guerra-de-editores/
canonical_URL: https://ciberninjas.com/wiki/guerra-de-editores/

---

La guerra de editores es la rivalidad entre los usuarios de los editores de texto Emacs y los editores de texto Vi (ahora generalmente Vi o más recientemente NeoVi). La rivalidad se ha convertido en una parte duradera dentro del mundo de la cultura hacker y la comunidad de software libre.

El debate entre Emacs vs Vi siempre fue una de las "guerras santas" originales llevadas a cabo en los grupos de Usenet, siempre existieron muchas guerras / discusiones de fuesgos cruzados entre los usuarios que insistían que su editor elegido era el modelo perfecto para la edición, e insultaban al otro grupo de usuario, esto ha ocurrido desde 1985.

Dentro del mundo del software libre este tipo de "guerras" son muy comunes sobre todo dentro del mundo del código fuente y se han librado batallas a lo largo del tiempo; en relación a sistemas operativos, lenguajes de programación, sistemas de control de versiones e incluso en cuanto al estilo de sangría utilizada.

## Comparación entre Emacs y Vi

Las diferencias históricas más importantes entre Vi y Emacs se presentan en la siguiente tabla.

### Características de Emacs

- Ejecución de pulsación de tecla: Los comandos de Emacs son combinaciones de teclas para las cuales se mantienen presionadas las teclas modificadoras mientras se presionan otras teclas; un comando se ejecuta una vez que está completamente escrito. Esto todavía forma un árbol de decisión de comandos, pero no uno de pulsaciones de teclas individuales. Un paquete Emacs inspirado en Vim ( undo-tree) proporciona una interfaz de usuario para el árbol.
- Uso de memoria y personalización: Emacs ejecuta muchas acciones al inicio, muchas de las cuales pueden ejecutar código de usuario arbitrario. Esto hace que Emacs tarde más en iniciarse (incluso en comparación con Vim) y requiere más memoria . Sin embargo, es altamente personalizable e incluye una gran cantidad de características, ya que es esencialmente un entorno de ejecución para un programa Lisp diseñado para edición de texto. Emacs 18 (lanzado en 1987) introdujo un modo de servidor diseñado para ejecutarse continuamente en segundo plano. Se pueden iniciar varias instancias de Emacs en modo cliente, adjuntando a este servidor y compartiendo estado. El tiempo de inicio del cliente Emacs es prácticamente instantáneo, ya que todo lo que hace es provocar el proceso existente de Emacs para volver a dibujar la pantalla.
- Entorno de Usuario: Emacs, aunque también se diseñó inicialmente para su uso en una consola, tenía compatibilidad con la GUI X11 agregada en Emacs 18, y se estableció por defecto en la versión 19. Las GUI actuales de Emacs incluyen compatibilidad total para el espaciado proporcional y la variación del tamaño de fuente. Emacs también admite imágenes incrustadas e hipertexto.
- Función / Interfaz de Navegación: Emacs usa acordes metakey. Las teclas o acordes de teclas se pueden definir como teclas de prefijo, lo que pone a Emacs en un modo en el que espera presionar teclas adicionales que constituyen un enlace de teclas. Las combinaciones de teclas pueden ser específicas del modo, personalizando aún más el estilo de interacción. Emacs proporciona una línea de comando a la que accede Mx que se puede configurar para que se complete automáticamente de varias maneras. Emacs también proporciona una defaliasmacro, que permite nombres alternativos para los comandos.
- Teclado: La expansión de uno de los backronyms de Emacs es Escape, Meta, Alt, Control, Shift, que resume claramente la mayoría de las teclas modificadoras que usa. Emacs fue desarrollado en teclados Space-cadet que tenían más modificadores de teclas que diseños modernos. Existen múltiples paquetes de emacs, como spacemacs o ergoemacs que reemplazan estas combinaciones de teclas con otras más fáciles de escribir, o el usuario puede hacer la personalización ad hoc.
- Soporte de Lenguaje y Script: Emacs tiene soporte completo para todos los sistemas de escritura compatibles con Unicode y permite que múltiples scripts se mezclen libremente.

### Características de Vi

- Ejecución de pulsación de tecla: Vi retiene cada permutación de las teclas escritas. Esto crea una ruta en el árbol de decisión que identifica inequívocamente cualquier comando.
- Uso de memoria y personalización: Vi es un programa más pequeño y rápido, pero con menos capacidad de personalización. vim ha evolucionado de vi para proporcionar significativamente más funcionalidad y personalización que vi, por lo que es comparable a Emacs.  El tiempo de inicio de vi es casi instantáneo para archivos de texto pequeños, mientras que vim es casi tan rápido.
- Entorno de Usuario: Vi, al igual que emacs, originalmente se usaba exclusivamente dentro de una consola en modo texto, sin ofrecer una interfaz gráfica de usuario (GUI). Muchos derivados vi modernos, por ejemplo, MacVim y gVim, incluyen GUI. Sin embargo, el soporte para fuentes espaciadas proporcionalmente permanece ausente. También falta soporte para fuentes de diferentes tamaños en el mismo documento.
- Función / Interfaz de Navegación: Vi utiliza distintos modos de edición . En "modo de inserción", las teclas insertan caracteres en el documento. En el "modo normal" (también conocido como "modo de comando", que no debe confundirse con el "modo de línea de comandos", que permite al usuario ingresar comandos), las pulsaciones de teclas simples ejecutan comandos Vi.
- Teclado: Vi no usa la tecla `Alt` y rara vez usa la tecla `Ctrl`. El conjunto de teclas de Vi está restringido principalmente a las teclas alfanuméricas y la tecla de `Esc`. Esta es una reliquia duradera de su herencia de teletipo , pero tiene el efecto de hacer que la mayor parte de la funcionalidad de vi sea accesible sin frecuentes movimientos torpes de los dedos.
- Soporte de Lenguaje y Script: Vi tiene soporte rudimentario para otros idiomas además del inglés. Modern Vim admite Unicode si se ejecuta en un shell que admite Unicode.

## Beneficios de Emacs

- Emacs tiene una interfaz no modal
- Uno de los programas informáticos más portados. Se ejecuta en modo texto y bajo interfaces gráficas de usuario en una amplia variedad de sistemas operativos, incluyendo la mayoría de los sistemas tipo Unix ( Linux, los diversos BSD, Solaris, AIX, IRIX, macOS, etc.), MS- DOS, Microsoft Windows, AmigaOS y OpenVMS. Los sistemas Unix, tanto gratuitos como propietarios, con frecuencia proporcionan Emacs incluidos con elsistema operativo.
- La arquitectura del servidor Emacs permite que varios clientes se conecten a la misma instancia de Emacs y compartan la lista de búfer, el anillo de cierre , el historial de deshacer y otros estados.
- Sistema de ayuda en línea generalizado con combinaciones de teclas, funciones y comandos documentados sobre la marcha.
- Variante de lenguaje de programación Lisp extensible y personalizable ( Emacs Lisp ), con características que incluyen:
  - Capacidad para emular vi y vim (usando Evil, Viper o Vimpulse).
  - Un administrador de archivos potente y extensible ( dired ), depurador integrado y un amplio conjunto de herramientas de desarrollo y otras.
  - Tener cada comando como una función Emacs Lisp habilita los comandos para DWIM (Do What I Mean) respondiendo programáticamente a acciones pasadas y al estado del documento. Por ejemplo, un switch-or-split-windowcomando podría cambiar a otra ventana si existe, o crear una si es necesario. Esto reduce el número de pulsaciones de teclas y comandos que un usuario debe recordar.
  - "Un sistema operativo dentro de un sistema operativo". Emacs Lisp permite que Emacs se programe mucho más allá de las funciones de edición. Incluso una instalación base contiene varias docenas de aplicaciones, incluidos dos navegadores web, lectores de noticias, varios agentes de correo, cuatro clientes IRC , una versión de ELIZA y una variedad de juegos. Todas estas aplicaciones están disponibles en cualquier lugar donde se ejecute Emacs, con la misma interfaz de usuario y funcionalidad. A partir de la versión 24, Emacs incluye un administrador de paquetes, lo que facilita la instalación de aplicaciones adicionales que incluyen navegadores web alternativos, EMMS ( Emacs Multimedia System ) y más. También están disponibles numerosos paquetes para programación, incluidos algunos dirigidos a combinaciones específicas de idioma / biblioteca o estilos de codificación.
- La naturaleza no modal de las combinaciones de teclas de Emacs hace que sea práctico ser compatible con las combinaciones de teclas de todo el sistema operativo.

## Beneficios de vi

- Los comandos de edición son componibles.
- Vi tiene una interfaz modal.
- Vi carga más rápido que Emacs.
- Al estar profundamente asociado con la tradición de UNIX, se ejecuta en todos los sistemas que pueden implementar la biblioteca C estándar , incluidos UNIX, Linux, AmigaOS, DOS, Windows, Mac, BeOS, OpenVMS, IRIX, AIX, HP-UX, BSD y POSIX. sistemas.
- Extensible y personalizable a través de secuencias de comandos Vim o API para lenguajes interpretados como Python, Ruby, Perl y Lua
- Ubicuo. Esencialmente, todos los sistemas Unix y similares a Unix vienen con vi (o una variante) incorporada. Vi (y ex, pero no vim) se especifica en el estándar POSIX.
- Los entornos de rescate del sistema, los sistemas integrados (especialmente aquellos con BusyBox) y otros entornos restringidos a menudo incluyen vi, pero no emacs.

## Evolución del conflicto

En el pasado, muchos pequeños editores modelados o derivados de Vi florecieron. Esto se debió a la importancia de conservar la memoria con la cantidad comparativamente minúscula disponible en ese momento. A medida que las computadoras se han vuelto más poderosas, muchos clones vi, Vim en particular, han crecido en tamaño y complejidad de código.

Estas variantes vi de hoy, al igual que las antiguas variantes ligeras de Emacs, tienden a tener muchos de los beneficios y desventajas percibidos del lado opuesto.

Por ejemplo, Vim sin extensiones requiere aproximadamente diez veces el espacio en disco requerido por vi, y las versiones recientes de Vim pueden tener más extensiones y ejecutarse más lentamente que Emacs.

En The Art of Unix Programming, Eric S. Raymond calificó el supuesto peso ligero de Vim en comparación con Emacs "un mito compartido".

Además, con las grandes cantidades de RAM en las computadoras modernas, tanto Emacs como vi son livianos en comparación con los grandes entornos de desarrollo integrados como Eclipse, que tienden a burlarse de los usuarios de Emacs y vi por igual.

Tim O'Reilly dijo, en 1999, que el tutorial de O'Reilly Media en vi vende el doble de copias que en Emacs (pero señaló que Emacs vino con un manual gratuito).

Muchos programadores usan Emacs y vi o sus diversos retoños, incluido Linus Torvalds que usa MicroEMACS.

También en 1999, el creador vi Bill Joydijo que vi fue "escrito para un mundo que ya no existe" y afirmó que Emacs fue escrito en máquinas mucho más capaces con pantallas más rápidas para que pudieran tener "comandos divertidos con la pantalla brillante y todo eso, y mientras tanto, yo" estoy sentado en casa en una especie de vivienda excedente de la Segunda Guerra Mundial en Berkeley con un módem y una terminal que apenas puede sacar el cursor de la línea de fondo ".

Además de Emacs y vi workalikes, pico y su clon gratuito y de código abierto nano y otros editores de texto como ne a menudo tienen sus propios defensores de terceros en las guerras de editores, aunque no en la medida de Emacs y vi.

A partir de 2020 , tanto Emacs como vi pueden reclamar estar entre los programas de aplicaciones más longevos de todos los tiempos, además de ser los dos editores de texto más utilizados en Linux y Unix.

Muchos sistemas operativos, especialmente derivados de Linux y BSD , agrupan varios editores de texto con el sistema operativo para satisfacer la demanda del usuario.

Por ejemplo, una instalación predeterminada de macOS contiene Emacs, ed, nano, TextEdit y Vim. Con frecuencia, en algún momento de la discusión, alguien señalará que ed es el editor de texto estándar.

## Humor

La Iglesia de Emacs, formada por Emacs y el creador del Proyecto GNU Richard Stallman, es una religión parodia. Si bien se refiere a vi como el "editor de la bestia" (vi-vi-vi es 6-6-6 en números romanos), no se opone al uso de vi; más bien, se llama anatema de software propietario . ("Usar una versión gratuita de vi no es un pecado sino una penitencia.")

La Iglesia de Emacs tiene su propio grupo de noticias, alt.religion.emacs, que tiene publicaciones que pretenden apoyar este sistema de creencias.

Stallman se ha referido a sí mismo como St I GNU -cius , un santo en la Iglesia de Emacs.

Los partidarios de vi han creado un Culto de vi opuesto , argumentado por los usuarios de línea dura de Emacs como un intento de "imitar a sus mejores".

Con respecto a la naturaleza modal de vi (un punto común de frustración para los nuevos usuarios) algunos usuarios de Emacs bromean diciendo que vi tiene dos modos: "pitido repetido" y "romper todo".

Los usuarios de vi disfrutan bromeando que las secuencias de teclas de Emacs inducen el síndrome del túnel carpiano , o mencionan una de las muchas expansiones satíricas del acrónimo EMACS, como "Escape Meta Alt Control Shift" (un golpe en la dependencia de Emacs de las teclas modificadoras) o "Ocho megabytes e intercambio constante " (en un momento en que era una gran cantidad de memoria) o "EMACS hace que cualquier computadora sea lenta" (un acrónimo recursivocomo los que usa Stallman) o "Eventualmente Munches All Computer Storage", en referencia a los altos requisitos de recursos del sistema de Emacs.

GNU EMACS se ha expandido a "Generalmente no utilizado, excepto por informáticos de mediana edad", haciendo referencia a sus fanáticos más ardientes, y su uso decreciente entre los programadores más jóvenes en comparación con editores más orientados gráficamente como TextMate. La distribución de Emacs incluye la lista completa.

Como un golpe en el arrastramiento de Emacs , se sabe que los defensores de vi describen a Emacs como "un gran sistema operativo, que carece de un editor decente". Se sabe que los defensores de Emacs responden que el editor es realmente muy bueno, pero el sistema operativo podría mejorar (refiriéndose a la famosa falta de concurrencia de Emacs).

Un juego entre usuarios de UNIX, ya sea para probar la profundidad de la comprensión del editor por parte de un usuario de Emacs o para burlarse de la complejidad de Emacs, implicó predecir qué sucedería si un usuario mantuviera presionada una tecla modificadora (como Ctrl o Alt) y escribiera su nombre propio. Este humor del juego se originó con usuarios del antiguo editor TECO, que era la base de implementación, a través de macros, del Emacs original.

Debido a la secuencia de caracteres poco intuitiva para salir de vi (": q!"), Los hackers bromean sobre un método propuesto para crear una secuencia de caracteres pseudoaleatoria al hacer que un usuario no esté familiarizado con vi sentado frente a un editor abierto y les pida que salgan del programa.

### Notas

1. Hoy en día, ambos editores proporcionan formas fáciles de implementar las combinaciones de teclas de los demás. En Emacs, las combinaciones de teclas de Vim se implementan a través del modo Evil, mientras que en Vim, las combinaciones de teclas de Emacs se implementan a través del paquete Vimacs. Aunque las combinaciones de teclas de Vim son populares por su ergonomía, la tecla posiblemente más ergonómica en un teclado, es decir, la barra espaciadora no se usa en Vim. Se implementó una alternativa popular a las formas de navegación Emacs y Vim a través de Spacemacs, que es una configuración popular de Emacs que aprovecha la barra espaciadora para funcionar como la tecla principal para el control y la navegación. La idea de Spacemacs también se ha trasladado a Vim a través de Spacevim.
2. A partir de 2013, vim tiene 1731 kLOC de código (1142 en C + 506 stock distro vimScript + 83 relacionado con makefile), mientras que GNU Emacs tiene 1623 (solo 299 en C + 1270 stock distro Emacs Lisp + 54 relacionado con makefile). Hay muchos paquetes opcionales de Emacs Lisp (y Vimscript) disponibles; los números aquí se refieren solo al código que realmente se incluye en la descarga principal del editor respectivo.
3. Emacs también tiene algo llamado "modos"; sin embargo, en Emacs generalmente se refieren a estados de interacción a largo plazo que se aplican durante todo el tiempo que se trabaja con un archivo o conjunto de datos dado, que no es la definición de interfaz modal per se.

## Enlaces Externos

- [Resultados de un experimento que](http://www.textfiles.com/programming/vivsemacs.txt){:target="_blank" rel="nofollow,noreferrer"} compara Vi y Emacs
- [Comparar pulsaciones de teclas](http://danzig.jct.ac.il/unix_class/emacs-vi-Commands.html){:target="_blank" rel="nofollow,noreferrer"} por tarea
- [Humor sobre Vi, Emacs y sus comparaciones.](http://www.softpanorama.org/Editors/humor.shtml){:target="_blank" rel="nofollow,noreferrer"}
- [Resultados del Sucks-Rules-O-Meter para Vi y Emacs](https://web.archive.org/web/20041009204831/http://www.tarunz.org/~vassilii/srom/){:target="_blank" rel="nofollow,noreferrer"} de los comentarios realizados en la Web
- [Emacs ofrece la funcionalidad Vi](http://www.emacswiki.org/emacs/ViKeys){:target="_blank" rel="nofollow,noreferrer"}, del wiki de Emacs
- [Emacs Vs Vi](http://c2.com/cgi/wiki?EmacsVsVi){:target="_blank" rel="nofollow,noreferrer"}, de [WikiWikiWeb](https://en.wikipedia.org/wiki/WikiWikiWeb){:target="_blank" rel="nofollow,noreferrer"}
- [El tamaño correcto para un editor que](http://www.catb.org/~esr/writings/taoup/html/ch13s03.html){:target="_blank" rel="nofollow,noreferrer"} discute vi y Emacs en términos relativamente modernos

**Categorías**: Editores de Texto
{: .notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [Editor War](https://en.wikipedia.org/wiki/Editor_war){:target="_blank" rel="nofollow,noreferrer"} de la Wikipedia en inglés, versión del 1 de Junio de 2020, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=Editor_war&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo la Licencia Libre de [GNU](http://www.gnu.org/licenses/licenses.html#GPL){:target="_blank" rel="nofollow,noreferrer"} [(es)](https://es.wikipedia.org/wiki/Wikipedia:Traducci%C3%B3n_no_oficial_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU){:target="_blank" rel="nofollow,noreferrer"} y licencia [CC BY 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.es){:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}