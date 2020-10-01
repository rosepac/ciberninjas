---

author: rosepac
bootstrap: true
comments: false
tags:
- Editores de Texto
- Vim
thumbnail: /assets/img/.webp
feature-img: /assets/img/.webp
title: '▷ Vim: El editor de código perfecto para los amantes de Linux'
description: >-
  El editor perfecto y exclusivo para los usuarios de los sistemas operativos de Unix y Linux.
excerpt: >-
  El editor perfecto y exclusivo para los usuarios de los sistemas operativos de Unix y Linux.
canonical_URL: https://ciberninjas.com/vim-editor-código/
permalink: /vim-editor-código/
date: 2020-06-15
last_modified_at: 
published: false

---

Escribir palabras en inglés y escribir código son actividades muy diferentes. Al programar, pasarás más tiempo cambiando archivos, leyendo, navegando y editando código en comparación con el trabajo de redactar un trabajo o escribir un libro; por tanto, tiene sentido que haya diferentes tipos de aplicaciones para escribir texto versus código (por ejemplo, Microsoft Word versus Visual Studio Code).

Como programadores, pasamos la mayor parte de nuestro tiempo editando código, por lo que vale la pena invertir tiempo en dominar un editor que se ajuste a tus necesidades, puedes conocer muchos de [los posibles editores de código](https://ciberninjas.com/mejores-editores-texto/) más famosos, de los que ya hemos hablado con anterioridad en Ciberninjas; e incluso ya hemos analizados algunos editores específicos, si deseas [programar en Python](https://ciberninjas.com/mejores-ide-python/) o [crear tus páginas en PHP](https://ciberninjas.com/mejores-editores-php/), también existe la posibilidad de [codificar en línea](https://ciberninjas.com/codespace-editor-github/).

A continuación, vamos a conocer tres pautas principales, que debemos seguir si deseamos aprender a utilizar un nuevo editor:

- Comienza con un tutorial (por ejemplo, este artículo si tu editor elegido es VIM, más los recursos añadidos).
- Usa el editor para todo lo relacionado con la edición de texto (incluso si al comienzo te ralentiza).
- Mira y busca cada detalle a medida que avanzas: Si crees que debería haber una mejor fórmula de hacer algo, probablemente sea así.

Si sigues el método anterior y te comprometes completamente a usar tu nueva aplicación elegida para todos tus propósitos de edición, lograrás reducir la línea de tiempo del aprendizaje avanzado considerablemente.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/4IqTXUJJiJU?controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe><br />

https://www.youtube.com/watch?v=4IqTXUJJiJU

- En la primera o primeras dos horas de utilización del programa, aprenderás las funciones más básicas del editor que quieras. Como las tareas más sencillas; abrir y editar archivos, guardar / salir y navegar entre los ficheros.
- En las siguientes 20 horas, ya deberías de ser tan rápido como lo era con tu antiguo editor.

A partir de ahí. Cada hora de uso, irá en aumento de tu aprendizaje y pronto verás llegar los beneficios; poco a poco, tendrás suficiente conocimiento y rapidez mental a la hora de usar el nuevo editor y pronto se transformará en ahorro de tiempo.

Los editores de texto más modernos son herramientas muy pontentes y sofisticadas, por lo que la curva de aprendizaje es casi interminable: irás aprendiendo cada metodología y truco, a medida que vayas trabajando con la aplicación.

## ¿Qué editor de código elegir?

Los programadores tienen [fuertes opiniones](https://en.wikipedia.org/wiki/Editor_war){:target="_blank" rel="nofollow,noreferrer"} sobre cada uno de los editores de código.
<!-- https://missing.csail.mit.edu/2020/editors/ -->
¿Qué editores son populares hoy? Consulte esta [encuesta de Stack Overflow](https://insights.stackoverflow.com/survey/2019/#development-environments-and-tools){:target="_blank" rel="nofollow,noreferrer"} (puede haber algún sesgo porque los usuarios de Stack Overflow pueden no ser representativos de los programadores en general). [Visual Studio Code](https://code.visualstudio.com/){:target="_blank" rel="nofollow,noreferrer"} es el editor más popular. [Vim](https://www.vim.org/){:target="_blank" rel="nofollow,noreferrer"} es el editor basado en línea de comandos más popular.

## Empuje

Todos los instructores de esta clase usan Vim como su editor. Vim tiene una rica historia; se originó en el editor Vi (1976), y todavía se está desarrollando hoy. Vim tiene algunas ideas realmente interesantes detrás, y por esta razón, muchas herramientas admiten un modo de emulación de Vim (por ejemplo, 1,4 millones de personas han instalado la [emulación de Vim para el código VS](https://github.com/VSCodeVim/Vim) ). Probablemente valga la pena aprender a Vim incluso si finalmente termina cambiando a otro editor de texto.

No es posible enseñar toda la funcionalidad de Vim en 50 minutos, por lo que nos centraremos en explicar la filosofía de Vim, enseñarle los conceptos básicos, mostrarle algunas de las funciones más avanzadas y brindarle los recursos para dominar la herramienta. .

# Filosofía de Vim

Al programar, pasa la mayor parte de su tiempo leyendo / editando, no escribiendo. Por esta razón, Vim es un editor *modal* : tiene diferentes modos para insertar texto frente a manipularlo. Vim es programable (con Vimscript y también otros lenguajes como Python), y la interfaz de Vim es un lenguaje de programación: las pulsaciones de teclas (con nombres mnemotécnicos) son comandos, y estos comandos son componibles. Vim evita el uso del mouse, porque es demasiado lento; Vim incluso evita usar las teclas de flecha porque requiere demasiado movimiento.

El resultado final es un editor que puede coincidir con la velocidad a la que piensas.

# Edición modal

El diseño de Vim se basa en la idea de que se pasa mucho tiempo del programador leyendo, navegando y haciendo pequeñas ediciones, en lugar de escribir largas secuencias de texto. Por esta razón, Vim tiene múltiples modos de operación.

- **Normal** : para moverse por un archivo y realizar ediciones
- **Insertar** : para insertar texto
- **Reemplazar** : para reemplazar texto
- **Visual** (sin formato, línea o bloque): para seleccionar bloques de texto
- **Línea de comando** : para ejecutar un comando

Las pulsaciones de teclas tienen diferentes significados en diferentes modos de funcionamiento. Por ejemplo, la letra `x`en modo Insertar solo insertará un carácter literal 'x', pero en modo Normal, eliminará el carácter debajo del cursor, y en modo Visual, eliminará la selección.

En su configuración predeterminada, Vim muestra el modo actual en la parte inferior izquierda. El modo inicial / predeterminado es el modo Normal. Generalmente pasará la mayor parte de su tiempo entre el modo Normal y el modo Insertar.

Cambia los modos presionando ``(la tecla de escape) para cambiar de cualquier modo al modo Normal. Desde el modo Normal, ingrese el modo Insertar con `i`, el modo Reemplazar con `R`, el modo Visual con `v`, el modo Línea visual con `V`, el modo Bloque visual con ``(Ctrl-V, a veces también escrito `^V`) y el modo de línea de comandos con `:`.

Utiliza la ``clave mucho cuando usa Vim: considere reasignar Caps Lock to Escape ( [instrucciones de macOS](https://vim.fandom.com/wiki/Map_caps_lock_to_escape_in_macOS) ).

# Lo esencial

## Insertar texto

Desde el modo Normal, presione `i`para ingresar al modo Insertar. Ahora, Vim se comporta como cualquier otro editor de texto, hasta que presione ``para volver al modo Normal. Esto, junto con los conceptos básicos explicados anteriormente, es todo lo que necesita para comenzar a editar archivos usando Vim (aunque no de manera particularmente eficiente, si pasa todo su tiempo editando desde el modo Insertar).

## Tampones, pestañas y ventanas

Vim mantiene un conjunto de archivos abiertos, llamados "buffers". Una sesión de Vim tiene varias pestañas, cada una de las cuales tiene varias ventanas (paneles divididos). Cada ventana muestra un único búfer. A diferencia de otros programas con los que está familiarizado, como los navegadores web, no existe una correspondencia 1-a-1 entre buffers y ventanas; Las ventanas son meramente vistas. Un búfer dado puede estar abierto en *múltiples* ventanas, incluso dentro de la misma pestaña. Esto puede ser bastante útil, por ejemplo, para ver dos partes diferentes de un archivo al mismo tiempo.

Por defecto, Vim se abre con una sola pestaña, que contiene una sola ventana.

## Línea de comando

El modo de comando se puede ingresar escribiendo `:`en modo Normal. Su cursor saltará a la línea de comando en la parte inferior de la pantalla al presionar `:`. Este modo tiene muchas funcionalidades, que incluyen abrir, guardar y cerrar archivos, y [salir de Vim](https://twitter.com/iamdevloper/status/435555976687923200) .

- `:q` salir (cerrar ventana)

- `:w` guardar ("escribir")

- `:wq` guardar y Salir

- `:e {name of file}` abrir archivo para editar

- `:ls` mostrar buffers abiertos

- ```plaintext
	:help {topic}
	```

	 ayuda abierta

	- `:help :w`abre ayuda para el `:w`comando
	- `:help w`abre ayuda para el `w`movimiento

# La interfaz de Vim es un lenguaje de programación.

La idea más importante en Vim es que la interfaz de Vim es un lenguaje de programación. Las pulsaciones de teclas (con nombres mnemotécnicos) son comandos, y estos comandos se *componen* . Esto permite movimientos y ediciones eficientes, especialmente una vez que los comandos se convierten en memoria muscular.

## Movimiento

Debería pasar la mayor parte de su tiempo en modo Normal, utilizando comandos de movimiento para navegar por el búfer. Los movimientos en Vim también se denominan "sustantivos", porque se refieren a fragmentos de texto.

- Movimiento básico: `hjkl`(izquierda, abajo, arriba, derecha)

- Palabras: `w`(siguiente palabra), `b`(principio de la palabra), `e`(final de la palabra)

- Líneas: `0`(principio de línea), `^`(primer carácter no en blanco), `$`(final de línea)

- Pantalla: `H`(parte superior de la pantalla), `M`(centro de la pantalla), `L`(parte inferior de la pantalla)

- Desplazarse: `Ctrl-u`(arriba), `Ctrl-d`(abajo)

- Archivo: `gg`(comienzo del archivo), `G`(final del archivo)

- Números de línea: `:{number}`o `{number}G`(línea {número})

- Misceláneo: `%`(artículo correspondiente)

- Encontrar: 

	```plaintext
	f{character}
	```

	, 

	```plaintext
	t{character}
	```

	, 

	```plaintext
	F{character}
	```

	,

	```plaintext
	T{character}
	```

	- buscar / avanzar / retroceder {personaje} en la línea actual
	- `,`/ `;`para navegar partidos

- Buscar: `/{regex}`, `n`/ `N`para navegar partidos

## Selección

Modos visuales:

- Visual
- Línea visual
- Bloque visual

Puede usar teclas de movimiento para hacer una selección.

## Ediciones

Todo lo que solía hacer con el mouse, ahora lo hace con el teclado utilizando comandos de edición que se componen de comandos de movimiento. Aquí es donde la interfaz de Vim comienza a parecerse a un lenguaje de programación. Los comandos de edición de Vim también se llaman "verbos", porque los verbos actúan sobre sustantivos.

- ```plaintext
	i
	```

	 ingrese al modo Insertar

	- pero para manipular / eliminar texto, desea usar algo más que retroceso

- `o`/ `O`inserte línea debajo / arriba

- ```plaintext
	d{motion}
	```

	 eliminar {movimiento}

	- por ejemplo, `dw`es eliminar palabra, `d$`se elimina al final de la línea, `d0`se elimina al principio de la línea

- ```plaintext
	c{motion}
	```

	 cambio {movimiento}

	- por ejemplo, `cw`es cambiar palabra
	- como `d{motion}`seguido por`i`

- `x`eliminar carácter (igual que hacer `dl`)

- `s`carácter sustituto (igual a `xi`)

- Modo visual + manipulación

	- seleccionar texto, `d`borrarlo o `c`cambiarlo

- `u`deshacer, ``rehacer

- `y`copiar / "tirar" (algunos otros comandos como `d`también copiar)

- `p` pegar

- Hay mucho más que aprender: por ejemplo, `~`voltea el caso de un personaje

## Cuenta

Puede combinar sustantivos y verbos con un recuento, que realizará una acción determinada varias veces.

- `3w` mover 3 palabras hacia adelante
- `5j` mover 5 líneas hacia abajo
- `7dw` borrar 7 palabras

## Modificadores

Puede usar modificadores para cambiar el significado de un sustantivo. Algunos modificadores son `i`, que significa "interno" o "interno", y `a`, que significa "alrededor".

- `ci(` cambiar el contenido dentro del par de paréntesis actual
- `ci[` cambiar el contenido dentro del par actual de corchetes
- `da'` eliminar una cadena entre comillas simples, incluidas las comillas simples que la rodean

# Manifestación

Aquí hay una implementación rota de [fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz) :

```
def fizz_buzz(limit):
    for i in range(limit):
        if i % 3 == 0:
            print('fizz')
        if i % 5 == 0:
            print('fizz')
        if i % 3 and i % 5:
            print(i)

def main():
    fizz_buzz(10)

```

Solucionaremos los siguientes problemas:

- Principal nunca se llama
- Comienza en 0 en lugar de 1
- Imprime "efervescencia" y "zumbido" en líneas separadas para múltiplos de 15
- Imprime "fizz" para múltiplos de 5
- Utiliza un argumento codificado de 10 en lugar de tomar un argumento de línea de comando

Vea el video de la conferencia para la demostración. Compare cómo se realizan los cambios anteriores usando Vim con cómo podría hacer las mismas ediciones usando otro programa. Observe cómo se requieren muy pocas pulsaciones de teclas en Vim, lo que le permite editar a la velocidad que cree.

# Personalizando Vim

Vim se personaliza mediante un archivo de configuración de texto sin formato en `~/.vimrc` (que contiene los comandos de Vimscript). Probablemente hay muchas configuraciones básicas que desea activar.

Estamos proporcionando una configuración básica bien documentada que puede usar como punto de partida. Recomendamos usar esto porque corrige parte del peculiar comportamiento predeterminado de Vim. **Descargue nuestra configuración [aquí](https://missing.csail.mit.edu/2020/files/vimrc) y guárdela `~/.vimrc`.**

Vim es muy personalizable y vale la pena pasar tiempo explorando las opciones de personalización. Puede mirar los archivos de puntos de las personas en GitHub en busca de inspiración, por ejemplo, las configuraciones de Vim de sus instructores ( [Anish](https://github.com/anishathalye/dotfiles/blob/master/vimrc) , [Jon](https://github.com/jonhoo/configs/blob/master/editor/.config/nvim/init.vim) (usa [neovim](https://neovim.io/) ), [Jose](https://github.com/JJGO/dotfiles/blob/master/vim/.vimrc) ). También hay muchas buenas publicaciones de blog sobre este tema. Intente no copiar y pegar la configuración completa de las personas, pero léala, comprenda y tome lo que necesita.

# Extendiendo Vim

Hay toneladas de complementos para extender Vim. Al contrario de los consejos obsoletos que puede encontrar en Internet, *no* necesita usar un administrador de complementos para Vim (desde Vim 8.0). En su lugar, puede usar el sistema de administración de paquetes incorporado. Simplemente cree el directorio `~/.vim/pack/vendor/start/`y coloque complementos allí (por ejemplo, a través de `git clone`).

Estos son algunos de nuestros complementos favoritos:

- [ctrlp.vim](https://github.com/ctrlpvim/ctrlp.vim) : buscador de archivos difusos
- [ack.vim](https://github.com/mileszs/ack.vim) : búsqueda de código
- [nerdtree](https://github.com/scrooloose/nerdtree) : explorador de archivos
- [vim-easymotion](https://github.com/easymotion/vim-easymotion) : movimientos mágicos

Estamos tratando de evitar dar una lista abrumadoramente larga de complementos aquí. Puede consultar los archivos de puntos de los instructores ( [Anish](https://github.com/anishathalye/dotfiles) , [Jon](https://github.com/jonhoo/configs) , [Jose](https://github.com/JJGO/dotfiles) ) para ver qué otros complementos utilizamos. Echa un vistazo a [Vim Awesome](https://vimawesome.com/) para obtener complementos de Vim más impresionantes. También hay toneladas de publicaciones de blog sobre este tema: solo busque los "mejores complementos de Vim".

# Vim-mode en otros programas

Muchas herramientas admiten la emulación Vim. La calidad varía de buena a excelente; dependiendo de la herramienta, es posible que no sea compatible con las características más sofisticadas de Vim, pero la mayoría cubre los aspectos básicos bastante bien.

## Cáscara

Si eres un usuario de Bash, úsalo `set -o vi`. Si utiliza Zsh, `bindkey -v`. Para el pescado, `fish_vi_key_bindings`. Además, no importa qué shell uses, puedes hacerlo `export EDITOR=vim`. Esta es la variable de entorno utilizada para decidir qué editor se inicia cuando un programa desea iniciar un editor. Por ejemplo, `git` usará este editor para enviar mensajes.

## Readline

Muchos programas usan la biblioteca [GNU Readline](https://tiswww.case.edu/php/chet/readline/rltop.html) para su interfaz de línea de comandos. Readline también admite la emulación Vim (básica), que se puede habilitar agregando la siguiente línea al `~/.inputrc`archivo:

```
set editing-mode vi

```

Con esta configuración, por ejemplo, Python REPL admitirá enlaces Vim.

## Otros

Incluso hay extensiones de combinación de teclas vim para [navegadores](http://vim.wikia.com/wiki/Vim_key_bindings_for_web_browsers) web ; algunas populares son [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en) para Google Chrome y [Tridactyl](https://github.com/tridactyl/tridactyl) para Firefox. Incluso puede obtener enlaces Vim en los [cuadernos Jupyter](https://github.com/lambdalisue/jupyter-vim-binding) .

# Vim avanzado

Aquí hay algunos ejemplos para mostrarle el poder del editor. No podemos enseñarle todo este tipo de cosas, pero las aprenderá a medida que avanza. Una buena heurística: siempre que esté usando su editor y piense que "debe haber una mejor manera de hacerlo", probablemente lo haya: búsquelo en línea.

## Buscar y reemplazar

`:s`comando (sustituto) ( [documentación](http://vim.wikia.com/wiki/Search_and_replace) ).

- ```plaintext
	%s/foo/bar/g
	
	```

	- reemplazar foo con barra globalmente en el archivo

- ```plaintext
	%s/\[.*\](\(.*\))/\1/g
	
	```

	- reemplace los enlaces de Markdown con URL simples

## Múltiples ventanas

- `:sp`/ `:vsp`para dividir ventanas
- Puede tener múltiples vistas del mismo búfer.

## Macros

- `q{character}` para comenzar a grabar una macro en el registro `{character}`

- `q` para dejar de grabar

- `@{character}` reproduce la macro

- La ejecución de la macro se detiene por error

- `{number}@{character}` ejecuta una macro {número} veces

- Las macros pueden ser recursivas

	- primero borrar la macro con `q{character}q`
	- grabar la macro, con `@{character}`para invocar la macro de forma recursiva (será un no-op hasta que se complete la grabación)

- Ejemplo: convertir xml a json ( 

	archivo

	 )

	- Matriz de objetos con claves "nombre" / "correo electrónico"

	- ¿Usar un programa de Python?

	- Usa sed / regexes

		- `g/people/d`
		- `%s//{/g`
		- `%s/\(.*\)<\/name>/"name": "\1",/g`
		- ...

	- Comandos / macros de Vim

		- `Gdd`, `ggdd`eliminar primera y última línea

		- Macro para formatear un solo elemento (registro 

			```plaintext
			e
			
			```

			)

			- Ir a la linea con ``
			- `qe^r"f>s": "fq`

		- Macro para formatear a una persona

			- Ir a la linea con ``
			- `qpS{j@eA,j@ejS},q`

		- Macro para formatear a una persona e ir a la siguiente persona

			- Ir a la linea con ``
			- `qq@pjq`

		- Ejecutar macro hasta el final del archivo

			- `999@q`

		- Eliminar manualmente el último `,`y agregar `[`y `]`delimitadores

# Recursos

- `vimtutor`es un tutorial que viene instalado con Vim: si Vim está instalado, debería poder ejecutarlo `vimtutor`desde su shell
- [Vim Adventures](https://vim-adventures.com/) es un juego para aprender Vim
- [Vim Tips Wiki](http://vim.wikia.com/wiki/Vim_Tips_Wiki)
- [Vim Advent Calendar](https://vimways.org/2019/) tiene varios consejos de Vim
- [Vim Golf](http://www.vimgolf.com/) es [golf de código](https://en.wikipedia.org/wiki/Code_golf) , pero donde el lenguaje de programación es la interfaz de usuario de Vim
- [Intercambio de pila Vi / Vim](https://vi.stackexchange.com/)
- [Vim Screencasts](http://vimcasts.org/)
- [Vim práctico](https://pragprog.com/book/dnvim2/practical-vim-second-edition) (libro)


























<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/10-mejores-frameworks-java/#1-spring"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
    <li><a href="/10-mejores-frameworks-java/"></a></li>
  </ol>
</nav>
</details>
<br />

> 🔥 Quizás te interese: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

## 1. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 2. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 3. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 4. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 5. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 6. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 7. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 8. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 9. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## 10. ****

![]( "")



### **Características de **



[🔥 Descargar ](){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### Conclusión

### **Relacionados** <!-- omit in toc -->

[🥇 Los 14 mejores framework de desarrollo de aplicaciones web y móviles para 2020 👨‍💻](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20)

[👨‍💻 Los 10 + 10 mejores frameworks Java en 2020](https://ciberninjas.com/10-mejores-frameworks-java/)

[🚀 ▷ Lanzamiento de las extensiones de Firebase para Kotlin](https://ciberninjas.com/firebase-extensiones-kotlin/)

[💻 ▷ Segunda actualización de Java para Visual Studio Code en 2020](https://ciberninjas.com/actualidad-java-visual-studio/)

[📄 ▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java ](https://ciberninjas.com/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

[👨‍🎨 Palabras más usadas en cada lenguaje de programación](https://ciberninjas.com/palabras-lenguajes-programacion/)

[🥇 ▷ Cómo APRENDER a Programar GRATIS en 2020: Mejores libros recomendados para programadores](https://ciberninjas.com/programar/)

[🥇 ▷ Las 15 Mejores Lenguajes de Programación 👨‍💻 para Aprender en 2020](https://ciberninjas.com/15-mejores-lenguajes-programacion/)

> 🔥 Quizás te interese: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}