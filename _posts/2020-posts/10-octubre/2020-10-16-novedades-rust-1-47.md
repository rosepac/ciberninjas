---

author: rosepac
bootstrap: true
comments: false
tags:
- 
thumbnail: /assets/img/blog/novedades-rust.webp
feature-img: /assets/img/blog/novedades-rust.webp
title: '▷ Novedades de Rust 1.47 y Cambios Históricos'
description: >-
  Rust fue diseñado para facilitar el desarrollo de software a nivel de sistema rápido y seguro. Estas son las novedades.
excerpt: >-
  Rust fue diseñado para facilitar el desarrollo de software a nivel de sistema rápido y seguro. Estas son las novedades.
canonical_URL: https://ciberninjas.com/novedades-rust-1-47/
permalink: /novedades-rust-1-47/
date: 2020-10-16 13:28:32
last_modified_at: 
published: true

---

El enfoque único del **lenguaje de programación Rust da como resultado un mejor código**, con toques diferentes de C, C++, Go y los otros lenguajes que probablemente uses.

Rust es un lenguaje en constante crecimiento, puesto que en la actualidad se está actualizando con regularidad. Casi mensualmente.

<div><span id="menu"></span></div>

- [**¿Dónde descargar la última versión de Rust?**](#dónde-descargar-la-última-versión-de-rust)
- [**Novedades de Rust 1.4x**](#novedades-de-rust-14x)
- [**Novedades de Rust 1.3x**](#novedades-de-rust-13x)
- [**Novedades de Rust 1.2x**](#novedades-de-rust-12x)

## **¿Dónde descargar la última versión de Rust?**

Si quieres comenzar a usar Rust, [descarga el instalador desde la página oficial de Rust](https://www.rust-lang.org/tools/install "Descarga el instalador desde la página oficial de Rust"){:target="_blank" rel="nofollow,noreferrer"}, luego ejecuta el programa y sigue las instrucciones en pantalla. Es posible que debas instalar las herramientas de compilación de Visual Studio C++ cuando se te solicite; y si no estás en Windows, deberás consultar "[Otros métodos de instalación de Rust](https://forge.rust-lang.org/infra/other-installation-methods.html "Métodos de instalación de Rust para Linux y Unix"){:target="_blank" rel="nofollow,noreferrer"}" .

Si ya tiene una versión anterior de Rust instalada a través de rustup, puede acceder a la última versión a través del siguiente comando:

`$ rustup update stable`

## **Novedades de Rust 1.4x**

### **Las nuevas funciones de Rust 1.47** <!-- omit in toc -->

El 8 de Octubre de 2020, se anunció la versión de Rust 1.47.0 no tiene nuevas funciones de idioma, pero mejora la biblioteca estándar. La calidad de vida y las mejoras de la cadena de herramientas, así como las estabilizaciones de la biblioteca, se incluyen en el lanzamiento. Se han publicado notas de la versión para la actualización.

Las capacidades específicas en Rust 1.47.0 incluyen:

- Una característica de "genéricos const", que afecta los rasgos en arreglos más grandes. La función aún debe estabilizarse. A Rust le ha faltado una forma de ser genérico sobre valores enteros, lo que ha causado problemas con las matrices. Esta capacidad está destinada a solucionar este problema y hacer que las matrices sean más útiles.
- Una actualización a la infraestructura del compilador LLVM 11, por lo que es la predeterminada.
- Rastreos más cortos, lo que facilita la búsqueda de problemas.
- Ahora `rustc` admite `-C control-flow-guard`, una opción que activará la capacidad de seguridad Control Flow Guard en Windows. Otras plataformas ignoran esta bandera.
- Rustdoc ahora admite el tema Ayu .
- Se estabilizaron numerosas API´s en la biblioteca estándar: Ident :: new_raw ,  Range :: is_empty ,  RangeInclusive :: is_empty ,  Resultado :: as_deref ,  Resultado :: as_deref_mut ,  Vec :: fuga ,  puntero :: offset_from ,  f32 :: TAU , y  f64 :: TAU.

### **Las nuevas funciones en 1.46** <!-- omit in toc -->

La version de Rust 1.46, anunciado el 27 de agosto de 2020, incluye las siguientes capacidades:

- Varias características del lenguaje núcleo se pueden utilizar ahora en `const fn`, incluyendo `if`, `if let`, `match`, y varios otros.
- Un atributo `#[track_caller]` diseñado para mejorar los mensajes de error cuando `unwrap` y las funciones relacionadas entran en pánico, ahora es estable.
- En un cambio a la biblioteca, ahora `std::mem::forget` es un `const fn`. También en la biblioteca, se estabilizaron dos nuevas API: Option::zip y vec::Drain::as_slice.
- Para el compilador, el destino `citylib` se puede utilizar en las plataformas Apple iOS y tvOS.
- La indexación recursiva en tuplas ya no requiere paréntesis.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Las nuevas funciones de Rust 1.45** <!-- omit in toc -->

Anunciado el 16 de julio de 2020, Rust 1.45 incluye las siguientes adiciones y mejoras:

- Se ofrece una solución para reparar algunas fallas de larga data al lanzar entre enteros y flotantes.
- La estabilización se ofrece para macros de procedimiento similares a funciones en expresiones, patrones y declaraciones. La expansión del uso de macros ayuda con el uso del marco web Rocket para Rust.
- Varios API de biblioteca han sido estabilizado, tales como `Arc::as_ptr, BTreeMap::remove_entry`, y `Span::resolved_at`. La lista completa de API se puede encontrar en el Blog de Rust.

### **Las nuevas funciones de Rust 1.43.1** <!-- omit in toc -->

Esta versión puntual se introdujo el 7 de mayo de 2020 para abordar dos regresiones introducidas en la versión estable 1.43.0. de Rust. También actualiza la versión de OpenSSL utilizada por el administrador de paquetes de Cargo. Las características incluyen:

- Rust 1.27 introdujo soporte para detectar características de CPU x86 en la biblioteca estándar, a través de la is_x86_feature_detected macro. Debido a una refactorización interna, Rust 1.43.0 impidió la detección de características que aún no se pueden usar en estable, aunque se permitió detectarlas previamente. La versión 1.43.1 corrige esta regresión.
- Se ofrece una solución para el cargo package –list comando roto . Rust 1.43 rompió el soporte para listar archivos incluidos en paquetes publicados con Cargo, cuando se ejecuta dentro de un espacio de trabajo con dependencias de ruta o versiones no publicadas.
- OpenSSL, una dependencia de Cargo, se ha actualizado a 1.1.1g. OpenSSL había publicado un aviso de seguridad, pero el equipo de Rust no pudo incluir la solución a tiempo para Rust 1.43.0. El equipo no tiene evidencia de que la vulnerabilidad pueda comprometer la seguridad de los usuarios de Cargo.

### **Las nuevas funciones de Rust 1.43** <!-- omit in toc -->

Anunciado el 23 de abril de 2020, la versión de Rust 1.43.0 se consideró una versión bastante menor, sin características importantes introducidas. Los cambios incluyen:

- Los desarrolladores pueden utilizar fragmentos `item` de artículos de interpolación en el cuerpo de `trait`, `impl` y bloques `extern`.
- Se mejoró la inferencia de tipos alrededor de primitivas, referencias y operaciones binarias.
- Para ayudar a las pruebas de integración, Cargo establecerá algunas variables de entorno nuevas para que las pruebas encuentren ejecutables.
- En la biblioteca de Rust, los desarrolladores pueden usar constantes asociadas en números flotantes y enteros directamente sin tener que importar el módulo. Además, hay un nuevo primitivemódulo que reexporta los tipos primitivos de Rust, lo cual es útil cuando se escribe una macro y los desarrolladores quieren asegurarse de que los tipos no estén sombreados.
- Se estabilizaron varias API de la biblioteca.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Las nuevas funciones de Rust 1.41** <!-- omit in toc -->

La versión 1.41.0 de Rust, anunciada el 30 de enero de 2020, contiene las siguientes funciones nuevas y mejoras:

- Las restricciones se relajan al implementar rasgos. Antes de Rust 1.41.0, la regla huérfana era innecesariamente estricta y obstruía la composición. La regla se aplicó para evitar roturas cuando una dependencia agrega un nuevo rasgo, `impl` y la esencia es que un rasgo implsolo se permitía si el rasgo o el tipo que se implementaba es local de la caja actual en lugar de una caja extranjera.
- `cargo install`, para instalar cajas binarias y herramientas CLI basadas en Rust, ahora actualizará las instalaciones existentes de la caja si se ha publicado una nueva versión.
- Para los archivos de bloqueo, que se utilizan para garantizar compilaciones coherentes, se introduce un nuevo formato para evitar conflictos de fusión innecesarios al cambiar dependencias en ramas separadas. El nuevo formato se utilizará para todos los archivos de bloqueo nuevos, mientras que los archivos de bloqueo existentes aún se basan en el formato anterior.
- Se ofrecen más garantías cuando se utiliza `Box<T>` en FFI (Interfaz de función externa). `Box<T>`, denominado caja, proporciona la forma más simple de asignación de montón de Rust. Si los desarrolladores tienen una función `extern` Rust “C”, llamada desde C, la función Rust ahora se puede usar `Box<T>` para algunos específicos T, mientras que se usa T*en C para la función correspondiente. Sin embargo, los desarrolladores por ahora deberían evitar el uso de tipos `Box<T>` para funciones definidas en C pero invocadas en Rust. En estos casos, los desarrolladores deben reflejar directamente los tipos C lo más fielmente posible.
- Se hicieron adiciones a la biblioteca, como estabilizaciones de implementaciones anteriores.
- Rust 1.41.0 será la última versión con el nivel actual de soporte del compilador para objetivos Apple de 32 bits.

### **Las nuevas funciones de Rust 1.40** <!-- omit in toc -->

La versión 1.40 de Rust, lanzada en diciembre de 2019, contenía las siguientes mejoras y cambios:

- Ahora es posible permitir que las macros generen ellas mismas macros. Esto permite una metaprogramación mucho más sofisticada usando Rust de lo que era posible anteriormente, excepto quizás mediante la generación manual de código. Ahora también es posible usar macros de procedimiento para definir tipos y usarlos en bloques `extern`. Y la nueva macro `todo!()` se puede utilizar en lugar de la más detallada `unimplemented!()`.
- Un nuevo atributo, `#[non_exhaustive]` permite decorar un tipo para indicar que podría tener más campos u otros cambios en el futuro. Esto evita que otro código anule la definición o lo use como parte de una coincidencia de patrón exhaustiva, que podría romperse inesperadamente más adelante cuando se cambie el tipo.
- El código que se habría compilado con el antiguo comprobador de préstamos, pero genera una advertencia con el nuevo comprobador de préstamos, ahora generará errores graves. Esto es tanto para fomentar la limpieza del código antiguo de Rust como para permitir que el antiguo código del comprobador de préstamos se elimine por completo.
- Se han agregado varios nuevos objetivos de compilación, como las plataformas Thumb-2 Neon (versión 7) y MIPS64 de ARM que utilizan la nueva biblioteca estándar `musl`.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

## **Novedades de Rust 1.3x**

### **Las nuevas funciones de Rust 1.38** <!-- omit in toc -->

La versión de Rust 1.38, lanzado en septiembre de 2019, contiene las siguientes características nuevas y mejoras:

- El administrador de paquetes Cargo aprovechará la compilación canalizada automáticamente con Rust 1.38. Con la compilación canalizada, el compilador no necesita dependencias completamente construidas al compilar una caja. Todo lo que se necesita son sus metadatos, como la lista de tipos de dependencias. Los metadatos se producen al principio del proceso de compilación. Algunas pruebas han mostrado aumentos de la velocidad de compilación del 10 al 20 por ciento para compilaciones optimizadas y limpias de algunos gráficos de cajas.
- Linting de algunos usos incorrectos de `mem::{unitialized, zeroed}`. Con esta versión, el compilador rustc proporcionará un lint para una clase limitada de inicializaciones incorrectas usando `mem::uninitialized` or `mem::zeroed`.
- Extensión del atributo `#[deprecated]` a macros. Este atributo ha permitido a los autores de cajas notificar a los usuarios que un artículo de su caja será obsoleto y eliminado en una versión futura.
- Los desarrolladores pueden utilizar `std::any::type_name` para obtener el nombre de un tipo.
- Estabilización de una serie de funciones que incluyen `<*const T>::cast` y `<*mutT>::cast`.

### **Las nuevas funciones de Rust 1.37** <!-- omit in toc -->

La versión de Rust 1.37, lanzado en agosto de 2019, tiene las siguientes características nuevas y mejoras:

- La capacidad de hacer referencia a enumvariantes a través de `type`. Los desarrolladores también pueden hacer referencia a variantes `enum` con `Self::Variant`.
- El comando `cargo vendor`, que antes era una caja separada, ahora está integrado en el idioma. El comando busca las dependencias del proyecto, las descomprime en el directorio vendor /  y muestra el fragmento de configuración necesario para usar el código vendido durante las compilaciones.
- El compilador `rustc` admite la optimización guiada por perfiles, una técnica de optimización para compiladores con anticipación, a través de  -C profile-generatey -C profile-use.
- Los desarrolladores pueden crear constelementos sin nombre .

### **Las nuevas funciones de Rust 1.36** <!-- omit in toc -->

La versión de Rust 1.36 del lenguaje de programación de sistemas Rust se lanzó en julio de 2019. Rust 1.36 incluye las siguientes características nuevas y mejoras:

- El rasgo Futuro , utilizado para declarar trabajo asincrónico, ahora es estable. Operaciones asincrónicas en Rust han venido juntos en trozos y piezas de varias versiones ahora, con `async` y `await` siendo los últimos importantes piezas restantes.
- La caja de asignación , utilizada para administrar la memoria, ahora es estable. Esta caja recopila todas las piezas de la biblioteca estándar de Rust que dependen de un mecanismo de asignación de memoria global, como Vec<T>. De esta forma, las cajas que no usan la biblioteca estándar aún pueden hacer uso del asignador importando alloc por separado, útil para entornos en los que desea que los tamaños de código sean lo más reducidos posible.
- Un nuevo tipo, `MaybeUninit<T>` permite definir objetos que pueden consistir en memoria no inicializada, como una matriz asignada de forma diferida. El mecanismo anterior de Rust para hacer esto era una función `mem::uninitialized`, que planteaba muchos peligros en el uso casual. `MaybeUninit<T>` proporciona una forma más segura de hacer esto que utiliza las restricciones del sistema de tipos de Rust.
- La vida útil no léxica, una característica de las ediciones recientes de Rust, se ha actualizado a ediciones anteriores. Las vidas útiles no léxicas hacen que sea menos difícil trabajar con el mecanismo de verificación de préstamos de Rust (en esencia, lo que le permite escribir una gama más amplia de programas que aún son válidos por Rust) y pueden detectar mejor los problemas que el verificador de préstamos no pudo detectar.
- Una nueva implementación para el tipo `HashMap<K, V>` que se ejecuta más rápido y usa menos memoria.
- La carga ahora puede correr completamente fuera de línea si es necesario.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Las nuevas funciones de Rust 1.35** <!-- omit in toc -->

La versión de Rust 1.35, lanzada en mayo de 2019, ofreció los siguientes cambios:

- La aplicación de las funciones `FnOnce`, `FnMut` y `Fn` los rasgos de cierre para Box `<dyn FnOnce>`, `Box<dyn FnMut>` y `Box<dyn Fn`.
- La macro `dbg!` introducida en Rust 1.32 ahora se puede llamar sin argumentos.
- Los rasgos de cierre `Fn*` ahora se implementan para `Box<dyn Fn*>`.
- Estabilizaciones de la biblioteca estándar.
- Clippy, que proporciona una colección de lints para detectar errores comunes, se agregó una linterna `drop_bounds`, que se activa al agregar un límite `T: Drop` a una función genérica.
- Se ha introducido una función `ptr::hash`, por lo que los desarrolladores pueden evitar el hash del valor apuntado de una referencia y en su lugar el hash de la dirección.
- El valor de a `RefCell` se puede reemplazar mediante un cierre. Los desarrolladores pueden mapear y reemplazar de manera más ergonómica el valor actual de la celda y recuperar el valor anterior.
- Los desarrolladores ahora pueden verificar fácilmente si existe un valor en un rango.
- Se han realizado varios cambios en el `Cargo`, como la adición de una clave `rustc-cdylib-link-arg` para los scripts de compilación para especificar los argumentos del vinculador para las cajas de cdylib.

### **Las nuevas funciones de Rust 1.34** <!-- omit in toc -->

Lanzado en abril de 2019, la versión de Rust 1.34 incluye las siguientes características nuevas y modificadas:

- Cargo, el sistema de gestión de proyectos y paquetes para Rust, ahora funciona con registros distintos a los predeterminados (Crates.io), incluidos los registros autohospedados . Tenga en cuenta que cualquier Crates alojado en Crates.io solo puede  depender de Crates también en Crates.io.
- El operador `?` utilizado para descomprimir errores y valores válidos de tipos `Result` ahora se puede utilizar en pruebas de documentación. Esto hace posible escribir ejemplos de prueba más completos junto con el código que se documenta.
- Los atributos personalizados ahora pueden aceptar flujos de tokens arbitrarios. Esto permite que los atributos personalizados en las macros de procedimiento sean más concisos y utilicen un código Rust más idiomático.
Los rasgos `TryFrom` y `TryInto` ahora pueden permitir conversiones de tipos que podrían permitir fallas.
Se han agregado muchas estabilizaciones de bibliotecas y API, como la compatibilidad con una gama más amplia de tipos de enteros atómicos (que se pueden compartir de forma segura entre subprocesos).

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Las nuevas funciones de Rust 1.33** <!-- omit in toc -->

Rust 1.33 debutó a fines de febrero de 2019 con las siguientes características nuevas:

- Ahora está disponible un nuevo concepto de idioma, llamado anclado. La fijación permite al desarrollador especificar un objeto en la memoria que se garantiza que no se moverá. El tipo de Pin y el rasgo de marcador Unpin  se utilizan para implementar esto.
- La declaración `const fn` que se utiliza para declarar funciones que se pueden llamar en expresiones constantes en tiempo de compilación, se ha ampliado para cubrir muchos más casos de uso, como enlaces `let` (incluidos los mutables), expresiones de asignación y declaraciones de expresión. En resumen, la declaración `const fn` hace más disponible el lenguaje en un contexto en tiempo de compilación.
- La sintaxis `use n as _` permite importar el valor  impl de un rasgo sin contaminar el espacio de nombres al que se importa.
- Muchos elementos de la biblioteca se han estabilizado mediante la fabricación  const.

### **Las nuevas funciones de Rust 1.32** <!-- omit in toc -->

La versión 1.32 de Rust, lanzada en enero de 2019, incluye los siguientes cambios:

- La marco `dbg`. Insertar `dbg!()` en una aplicación de Rust imprime cualquier expresión `println!` formateable `stderr`, con una cantidad mínima de texto repetitivo. Insertar declaraciones de impresión como ayuda para la depuración es una técnica de la vieja escuela, pero una alternativa confiable cuando solo necesita conocer el estado de una variable en un momento dado.
- El asignador de memoria `jemalloc` ya no es el predeterminado. Las aplicaciones de Rust ahora usan el asignador de memoria del propio sistema como predeterminado, `jemalloc` disponible a través de la caja `jemallocator`. El uso del asignador del sistema reduce el tamaño de los archivos binarios de Rust en aproximadamente 300 KB y hace que el comportamiento predeterminado de las aplicaciones de Rust en todas las plataformas sea más consistente. (Las aplicaciones Rust creadas en Microsoft Windows han utilizado el asignador del sistema de forma predeterminada desde hace algún tiempo).
- Las macros ahora tienen la capacidad de realizar coincidencias con todos los tipos de literales: cadenas, números y  char literales. Esto facilita la escritura de macros que aceptan literales como parámetros.
- Más mejoras en la forma en que funcionan las importaciones de módulos, lo que reduce aún más la cantidad de texto estándar necesario para las aplicaciones triviales.

### **Las nuevas funciones de Rust 1.31** <!-- omit in toc -->

La versión de Rust 1.31, lanzado en diciembre de 2018, marca el debut de "Rust 2018", una nueva edición del lenguaje con cambios en la sintaxis y conceptos que son potencialmente incompatibles con versiones anteriores.

Por defecto, el código compilado con Rust 1.31 usa las reglas de sintaxis de Rust anteriores, es decir, las reglas de “Rust 2015”. El código debe etiquetarse explícitamente con edition = ‘2018’para usar las nuevas reglas de Rust 2018.

Las nuevas características en Rust 1.31 que están disponibles solo en Rust 2018 incluyen:

- En Rust, el compilador tiene reglas estrictas sobre cómo los valores y las variables pueden definirse y pasarse (la "vida útil" de las variables), para evitar pérdidas de memoria o condiciones de carrera. Con Rust 1.31, se ha mejorado la precisión de las comprobaciones del compilador para esas condiciones. Anteriormente, el compilador rechazaba parte del código a pesar de que era técnicamente válido y no causaría problemas en tiempo de ejecución.
- Cambios en el sistema de módulos. Los módulos, es decir, el sistema de Rust para administrar las importaciones de código, tienen algunas reglas arcanas y contradictorias. Algunas de estas reglas se han  relajado y simplificado  en Rust 1.31 para que sea más fácil para los recién llegados dominar más el sistema de módulos en menos tiempo.
- Herramientas para desarrolladores nuevas y mejoradas. El linter de código de Rust, clippy, ahora se considera lo suficientemente estable para su uso en producción. Lo mismo ocurre con rustfmt, que formatea el código de Rust de acuerdo con la guía de estilo oficial.

Las nuevas características de Rust 1.31 que están disponibles para todas las ediciones de Rust incluyen:

- `const fn.` Utilice esta función para definir una función que se pueda utilizar en un contexto constante y permitir que se evalúe en tiempo de compilación y no en tiempo de ejecución. Una const fnfunción tiene que ser determinista; es decir, tiene que producir una constante de algún tipo.
- Sintaxis de por vida más simple. Las reglas de sintaxis para describir la vida útil de una variable requieren menos código repetitivo en algunas circunstancias comunes.

Algunas características de Rust 2018, como la vida útil no léxica, eventualmente serán retroportadas a Rust 2015 y estarán disponibles para los usuarios de Rust sin tener que optar explícitamente.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Las nuevas funciones de Rust 1.30** <!-- omit in toc -->

La versión 1.30 de Rust, lanzada el 25 de octubre de 2018, agrega algunas características nuevas:

- Las macros de procedimiento le permiten generar atributos y funciones personalizados mediante macros. Rust 1.30 también facilita la aplicación de macros al código mediante la usepalabra clave, de modo que el código que utiliza macros no tenga que estar abarrotado de tantas anotaciones.
- Se están implementando una serie de mejoras en el sistema de módulos a partir de esta versión, muchas de las cuales también involucran la usepalabra clave. El resultado es que muchos comportamientos del sistema de módulos serán menos engorrosos de aplicar correctamente, permitirán un código más claro y facilitarán el movimiento de usedeclaraciones en una base de código sin que se rompan espontáneamente.
- Rust ha hecho posible durante mucho tiempo escribir bibliotecas que no tienen dependencias en la biblioteca estándar. Ahora también es posible crear aplicaciones que no tienen dependencias de biblioteca estándar y, por lo tanto, no dependen de ninguna plataforma específica. Se ha estado trabajando en esto desde Rust 1.6.

## **Novedades de Rust 1.2x**

### **Las nuevas funciones de Rust 1.29** <!-- omit in toc -->

La versión 1.29 de Rust, publicada el 13 de septiembre de 2018, proporciona una pequeña pero útil cantidad de nuevas funciones:

- Cargo tiene un nuevo subcomando, cargo fixque aplica automáticamente al código las sugerencias generadas automáticamente por el compilador.
- Otro nuevo subcomando, `cargo clippy` proporciona muchas más advertencias sobre el código suministrado al compilador.

### **Las nuevas funciones de Rust 1.28** <!-- omit in toc -->

Lanzado a principios de agosto de 2018, las características más notables de Rust 1.28 incluyen:

- Asignadores globales. Los asignadores globales permiten a un desarrollador definir el sistema de asignación de memoria utilizado por un programa de Rust. Las estrategias de asignación de memoria personalizadas son útiles en plataformas integradas o en situaciones en las que el desarrollador necesita un control más estricto de lo habitual sobre las estrategias de diseño de memoria.
- Mejor formato de mensaje de error. El compilador de Rust ha proporcionado tradicionalmente mensajes de error detallados y explícitos, junto con sugerencias sobre cómo solucionar el problema. Rust 1.28 presenta notas más detalladas sobre por qué surgen algunas condiciones de error, como el formato de cadena no válido.
- Los tipos distintos de cero son ahora una adición estable al lenguaje. Esto proporciona una forma de garantizar que los tipos de datos, como los números enteros, utilicen al menos un byte, lo que facilita la anticipación de las asignaciones de memoria y optimiza la ubicación de los datos del programa.
- La utilidad de carga de Rust ya no le permite publicar cajas con scripts de compilación que modifican el directorio src de una aplicación. Esto evita que toda una clase de errores aparezcan durante el proceso de compilación.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Las nuevas funciones de Rust 1.27** <!-- omit in toc -->

Rust 1.27 presenta capacidades básicas de SIMD (instrucción única, datos múltiples) . El std::archmódulo sirve como puerta de entrada a instrucciones específicas de la arquitectura generalmente relacionadas con SIMD. Se std::simdplanea un módulo de nivel superior para el futuro.

Otras características nuevas en Rust 1.27 incluyen:

- La sintaxis `dyn Trait` se estabiliza, proporcionando una sintaxis para objetos de rasgo usando un contexto `dyn`. Una sintaxis de "rasgo básico" para objetos de rasgo está en desuso, porque a menudo es ambigua y confusa.
El atributo `#[must use]` ahora se puede usar en funciones. Anteriormente, solo se aplicaba a tipos, como Result<T, E>. También se han mejorado partes de la biblioteca estándar para su uso  #[must use].
- Se estabilizaron varias API nuevas en la versión, incluidas `DoubleEndedIterator: : rfindy NonNull: :cast`.
- El administrador de paquetes Cargo para Rust se ha actualizado para requerir una bandera `—target-dir` para cambiar el directorio de destino para una invocación determinada. Además, las llaves de automóviles se han añadido a `toml`, para hacer frente a los objetivos .

### **Las nuevas funciones de Rust 1.26** <!-- omit in toc -->

Publicado a mediados de mayo de 2018, los aspectos más destacados de Rust 1.26 incluyen:

- Una reducción en los tiempos de compilación, mediante una corrección que afecta a los tipos anidados.
- Soporte para enteros de 128 bits, el doble de tamaño u64y con más valores.
- Estabilizaciones de biblioteca.
- Se espera que el administrador de paquetes Cargo ofrezca una resolución más rápida de los archivos de bloqueo y requiera cargo update invocaciones manuales con  menos frecuencia. 
- La característica `impl Trait` que permite tipos abstractos en retornos o parámetros de función, ahora es estable. Se proporcionan tipos existenciales.
- Mejores enlaces `match` con el compilador haciendo referencia o desreferenciación automáticamente en match.
- Patrones de sectores básicos, que le permiten hacer coincidir sectores de forma similar a otros tipos de datos.

### **Las nuevas funciones de Rust 1.25** <!-- omit in toc -->

La versión 1.25 de Rust presenta una actualización de su infraestructura de compilador LLVM (máquina virtual de bajo nivel) que mejora la compatibilidad con el formato de código portátil WebAssembly , que a su vez está diseñado para mejorar el rendimiento de las aplicaciones web. Rust 1.25 también incluye mejoras en el administrador de paquetes Cargo y estabilizaciones de la biblioteca.

#### **Nuevas funciones de Rust de la actualización LLVM** <!-- omit in toc -->

El lenguaje de Rust se ha actualizado a LLVM 6 desde LLVM 4. Esto le permite a Rust mantenerse al tanto del back-end de WebAssembly ascendente y adquirir nuevas funciones cuando llegan.

La actualización de LLVM también corrige algunos errores de compilación relacionados con SIMD. Para el desarrollo de Internet of thigs (IoT), LLVM 6 acerca a Rust al soporte de la familia de microcontroladores AVR, aprovechada en la placa Arduino Uno.

Rust, afirma Mozilla, puede mejorar la seguridad y confiabilidad de los dispositivos de IoT y es mucho mejor en esto que los lenguajes C / C ++ comúnmente usados ​​para escribir firmware de microcontroladores. El soporte de AVR llegará pronto.

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

#### **Nuevas funciones de Rust de los cambios en la CLI de Cargo** <!-- omit in toc -->

Para la interfaz de línea de comandos de Cargo, se cargo newgenerará de forma predeterminada un binario en lugar de una biblioteca. Los desarrolladores de Rust dijeron que intentan mantener estable la CLI, pero que este cambio es importante y es poco probable que se rompa. Dijeron que cargo newacepta dos banderas:

- `—lib`, para la construcción de bibliotecas
- `—bin`, para construir binarios o ejecutables

En versiones anteriores de Cargo, los desarrolladores que no pasaban una de estas banderas usaban de forma predeterminada `—lib`. Esto se hizo porque cada binario a menudo depende de otras bibliotecas, lo que hace que el caso de la biblioteca sea más común.

Pero este comportamiento es realmente incorrecto, porque muchos binarios dependen de cada biblioteca. Además, algunos miembros de la comunidad encontraron el valor predeterminado sorprendente.

#### **Otras características nuevas en Rust 1.25** <!-- omit in toc -->

Otras características de Rust 1.25 incluyen:

- Las estabilizaciones de bibliotecas.
- `libcore` ha ganado al módulo `time`, con el tipo `Duration` que solo había estado disponible en `libstd`.
- Las comprobaciones de las dependencias de Git desde la carpeta de la base de datos de Cargo deberían ser más rápidas, debido al uso de enlaces físicos. Cargo almacena en caché los repositorios de Git en algunas ubicaciones.
- Los grupos de importaciones anidados proporcionan una nueva forma de escribir usedeclaraciones, lo que puede reducir la repetición y fomentar la claridad.
<!-- https://www.infoworld.com/article/3267624/whats-new-in-the-rust-language.html -->

[⏫ Regresar al Menú](/novedades-rust-1-47/#menu){: .btn .btn-outline-dark .btn-lg .btn-block}

### **Relacionados** <!-- omit in toc -->

[▷ Sentando las bases para el futuro de Rust](https://ciberninjas.com/rust-bases-de-futuro/)

[▷ Nueva sintaxis de ensamblaje para Rust dentro de Nightly](https://ciberninjas.com/sintaxis-rust-nightly/)

[ El lenguaje de programación Rust entra por primera vez, dentro de los 20 lenguajes más populares](https://ciberninjas.com/lenguajes-programaci%C3%B3n-ranking-rust/)

[Rust vs C++: ¿Rust reemplazará a C++ en el futuro?](https://ciberninjas.com/rust-vs-c-m%C3%A1s/)

[▷ A los desarrolladores les encanta el lenguaje de programación Rust](https://ciberninjas.com/desarrolladores-lenguaje-rust/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Novedades 2020 de Rust. Rust fue diseñado para facilitar el desarrollo de software a nivel de sistema rápido y seguro. Estas son las novedades.](/assets/img/blog/novedades-rust.webp "Novedades 2020 de Rust. Rust fue diseñado para facilitar el desarrollo de software a nivel de sistema rápido y seguro. Estas son las novedades.")