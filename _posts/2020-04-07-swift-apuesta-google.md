---

author_profile: true
comments: false
classes: wide
tags:
- Swift
categories:
- Lenguajes de Programación
header:
  teaser: /assets/images/blog/swift-google.webp
title: '🥇 ▷ Swift: La apuesta de Google en la Programación Diferenciable'
description: >-
  🍏 Análisis y trabajo de desarrollo de Google en la implementación de Swift en vez de Python para el aprendizaje automático
excerpt: >-
  🍏 Análisis y trabajo de desarrollo de Google en la implementación de Swift en vez de Python para el aprendizaje automático
canonical_URL: https://ciberninjas.com/swift-apuesta-google/
permalink: /swift-apuesta-google/
date: 2020-04-07 18:16:32
last_modified_at: 
published: true
---

![Análisis y trabajo de desarrollo de Google en la implementación de Swift en vez de Python para el aprendizaje automático](/assets/images/blog/swift-google.webp "🍏 Análisis y trabajo de desarrollo de Google en la implementación de Swift en vez de Python para el aprendizaje automático")

Hace dos años, un pequeño equipo de Google comenzó a trabajar para **hacer de Swift el primer lenguaje principal** con **capacidades de programación diferenciables integradas en un lenguaje de primera clase**. El alcance y los resultados iniciales del proyecto han sido notables.

A pesar de esto, el proyecto no ha recibido mucho interés en la comunidad de aprendizaje automático y sigue siendo desconocido para la mayoría de los profesionales. Esto se puede atribuir en parte a la elección del idioma, que en gran medida se ha encontrado con confusión e indiferencia, ya que **Swift casi no tiene presencia en el ecosistema de ciencia de datos** y **se ha utilizado principalmente para crear aplicaciones iOS**.

Sin embargo, esto es lamentable, ya que incluso una mirada superficial al proyecto de Google mostrará que es una empresa ambiciosa, que **podría establecer a Swift como un jugador clave en ese campo si lo desea**. Además, aunque trabajamos principalmente con Python en Tryolabs, creemos que elegir Swift fue una excelente idea y decidimos escribir esta breve publicación para ayudar a correr la voz sobre los planes de Google.

Pero antes de entrar en Swift y lo que realmente significa el término programación diferenciable, primero debemos revisar el estado actual de la situación.

<details>
<summary><strong>MENÚ 👇</strong><span><a name="menu"></a></span></summary>
<nav class="menu">
  <ol>
    <li><a href="/swift-apuesta-google/#qué-pasa-con-python" title=""><strong>**¿Qué pasa con Python?**</strong></a></li>
  </ol>
</nav>
</details>
<br />

**🔥 Seguro también te interesa**: [mejores páginas aprender hacking](https://steemit.com/hive-154806/@rosepac/12-1-mejores-paginas-web-en-las-que-aprender-hacking-etico-12-1-best-websites-to-learn-ethical-hacking){:target="_blank"} >> [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/) >> [mejores regalos 2 - 🎁](/prime-day-amazon/)
{: .notice--danger}

## **¿Qué pasa con Python?**

Con diferencia, **Python es el lenguaje más utilizado en el aprendizaje automático** y Google ya posee un montón de bibliotecas y herramientas de aprendizaje automático escritas en el mismo. Entonces, ¿Por qué elegir a Swift? ¿Qué le pasa a Python?

Para decirlo sin rodeos, **Python es lento**. Además, **Python [no](https://wiki.python.org/moin/GlobalInterpreterLock){:target="_blank"} es [ideal para el paralelismo](https://wiki.python.org/moin/GlobalInterpreterLock){:target="_blank"}**.

Para evitar estos hechos, la mayoría de los proyectos de aprendizaje automático ejecutan sus algoritmos de computación intensiva a través de bibliotecas escritas en C / C ++ / Fortran / CUDA y usan Python para ***unir las diferentes operaciones de bajo nivel***. En su mayor parte, esto ha funcionado realmente bien, pero como con todas las abstracciones, se pueden crear algunos problemas. Repasemos algunos de ellos.

### **Binarios externos**

Llamar a los binarios externos para cada operación intensiva en cómputo **limita a los desarrolladores** a trabajar en una pequeña porción del área de superficie del algoritmo. Escribir una forma personalizada de realizar convoluciones, por ejemplo, queda fuera de los límites a menos que el desarrollador esté dispuesto a pasar a un lenguaje como C.

La mayoría de los programadores eligen no hacerlo, ya sea porque **no tienen experiencia en escribir código de bajo nivel de rendimiento** o **porque saltar de un lado a otro entre el entorno de desarrollo de Python** y **un entorno de lenguaje de bajo nivel se vuelve demasiado engorroso** para justificarlo.

Esto lleva a la desafortunada situación en la que **los programadores están motivados para escribir la menor cantidad de código sofisticado que puedan** y, por defecto, **generar las operaciones a través de bibliotecas externas**. Esto es lo opuesto a lo que es deseable en un área tan dinámica como el aprendizaje automático, donde todavía no se ha avanzado tanto y se necesitan nuevas ideas.

### **Abstracciones de la biblioteca**

Hacer que su código de Python llame al código de nivel inferior no es tan fácil como asignar las funciones de Python a las funciones de C. La desafortunada realidad es que los **creadores de las bibliotecas de aprendizaje automático han tenido que tomar ciertas decisiones de desarrollo en nombre del rendimiento**, y eso ha complicado un poco las cosas. Por ejemplo, en el [modo gráfico Tensorflow](https://www.tensorflow.org/api_docs/python/tf/Graph){:target="_blank"}, que es el único modo de rendimiento en la biblioteca, su código Python generalmente no se ejecuta cuando crees que lo haría. **Python en realidad actúa como una especie de lenguaje de metaprogramación** para el gráfico subyacente de [Tensorflow](/python/#tensorflow).

El flujo de desarrollo es el siguiente: el desarrollador primero define la red usando Python, luego el backend TensorFlow usa esta definición para construir la red y compilarla en un *[blob](https://es.wikipedia.org/wiki/Binary_large_object){:target="_blank"}* cuyas partes internas el desarrollador ya no puede acceder. Después de la compilación, la red finalmente está lista para ejecutarse, y el desarrollador puede comenzar a alimentar sus datos para trabajos de capacitación / inferencia. Esta forma de trabajo hace que la depuración sea bastante difícil, ya que no puede usar Python para profundizar en lo que sucede dentro de su red mientras se ejecuta. No puedes usar algo como `pdb`. Incluso si desea realizar una buena depuración de impresión antigua, tendrá que usar `tf.print` y construir un nodo de impresión en su red, que debe conectarse a otro nodo en su red y compilarse antes de que se pueda imprimir nada.

Sin embargo, existen soluciones más directas. En **[PyTorch](/python/#pytorch){:target="_blank"}, su código se ejecuta imperativamente como se espera en Python**, y la única abstracción no transparente es que las operaciones que se ejecutan en la GPU se ejecutan de forma asincrónica. Esto generalmente no es un problema, ya que **PyTorch es inteligente al respecto y espera a que finalicen todas las llamadas asíncronas** que son dependencias de cualquier operación interactiva del usuario antes de ceder el control. Aún así, esto es algo a tener en cuenta, especialmente con cosas como la evaluación comparativa.

### **Retraso de la industria**

Todos estos problemas de usabilidad no solo hacen que sea más difícil escribir código, sino que están causando innecesariamente que la industria se **quede atrás en el aprendizaje**. Ha habido varios documentos que modifican las operaciones de bajo nivel utilizadas en redes neuronales, que introducen mejoras en la precisión de unos pocos puntos porcentuales en el proceso y que la industria aún ha tardado mucho tiempo en adoptar.

Una razón para esto es que a pesar de que estos cambios algorítmicos tienden a ser bastante simples, **los problemas de herramientas mencionados anteriormente los hacen extremadamente difíciles de implementar**. Por lo tanto, puede que no se considere que valga la pena el esfuerzo por lo que a menudo resulta en una mejora de precisión del 1%. Esto es **especialmente problemático para los pequeños proyectos de desarrollo de aprendizaje automático** que generalmente carecen de las economías en escala que se manejan sobre grandes proyectos; para justificar el pago de su implementación / integración.

Por lo tanto, las empresas tienden a ignorar estas mejoras y agregan bibliotecas como [PyTorch](/python/#pytorch) o [TensorFlow](/python/#tensorflow). Esto les ahorra los costos de implementación e integración, pero también **hace que la industria se quede atrás del avance tecnológico real en 1 o 2 años**, ya que **no se puede esperar que los encargados de la biblioteca implementen de inmediato** los resultados de cada nuevo artículo publicado.

Un ejemplo concreto de este problema, **son las [convoluciones deformables](https://arxiv.org/pdf/1703.06211.pdf){:target="_blank"} que mejoran el rendimiento de la mayoría de las redes neuronales convolucionales** (CNN). Una implementación de código abierto apareció hace aproximadamente 2 años. Sin embargo, la implementación fue engorrosa de integrar en PyTorch / TensorFlow y el algoritmo no tuvo un uso generalizado. Recientemente, PyTorch [agregó soporte](https://github.com/pytorch/vision/pull/1586){:target="_blank"} para ello pero hasta ahora no estoy al tanto de que haya una versión oficial sobre TensorFlow.

Ahora, supongamos que esto sucede para varios documentos en los que cada uno contribuye con una mejora del rendimiento del 2%; la industria podría estar **perdiendo mejoras significativas en la precisión** de *1.02 ^ n%* sin otra razón que el uso de las herramientas inadecuadas. Esto es lamentable, considerando que la *n* podría ser bastante alta.

### **Velocidad**

El uso de bibliotecas rápidas de Python puede convertirse en lento, en algunos casos. **Sí, para las CNN que ejecutan una clasificación en imágenes, usar Python, PyTorch o TensorFlow será realmente rápido**. Además, probablemente no se obtenga mucho rendimiento codificando toda su red en CUDA, ya que la mayor parte del tiempo de inferencia se dedica a grandes convoluciones que ya se están ejecutando en implementaciones bien optimizadas. Sin embargo, ese no es siempre el caso.

Las redes que consisten en muchas **operaciones pequeñas** a menudo **son las más susceptibles a sufrir bajones de rendimiento**, si no se implementan completamente en un lenguaje de bajo nivel. Como por ejemplo, en [la publicación](https://www.fast.ai/2019/03/06/fastai-swift/){:target="_blank"} de [Jeremy Howard](http://twitter.com/jeremyphoward){:target="_blank"} de [Fast](https://www.fast.ai/){:target="_blank"} en la que se promulga por el uso de Swift para el aprendizaje profundo. En la publicación, se informa sobre que a pesar de usar el gran compilador JIT de PyTorch. Todavía no podía hacer que un RNN en particular funcionara tan rápido como un versión completamente implementada en puro CUDA.

Además, Python no es un lenguaje muy bueno para casos en los que **la latencia es importante**, ni para **tareas de muy bajo nivel** como comunicarse con sensores. La fórmula con la que **las empresas deciden evitar esto es comenzar a desarrollar sus propios modelos en PyTorch o TensorFlow-Python**. De esta manera, **aprovechan la facilidad de uso de Python al experimentar y entrenar nuevos modelos**. Después de eso, [reescriben su modelo en C++](https://twitter.com/elonmusk/status/1224182478501482497){:target="_blank"} para fines de producción.

No estoy seguro de si lo reescriben por completo o si simplemente lo serializan usando la funcionalidad de rastreo de PyTorch o el modo gráfico de TensorFlow, y luego re escriben el código de Python a su alrededor en C ++. De cualquier manera, sería necesario reescribir una gran cantidad de código Python, lo que a menudo es demasiado costoso para las pequeñas empresas.

Todos estos problemas son bien conocidos. [Yann LeCun](https://twitter.com/ylecun){:target="_blank"}, ampliamente considerado uno de los padrinos del aprendizaje profundo, **ha declarado que existe la necesidad de un nuevo lenguaje de aprendizaje automático**. En un [hilo de Twitter](https://twitter.com/jeremyphoward/status/1097799892167122944){:target="_blank"}, el co creador de PyTorch, Soumith Chintala, y él discutieron sobre varios idiomas como posibles candidatos, mencionando a Julia, Swift e incluso la propuesta de mejorar Python. Por otro lado, Jeremy Howard de Fast AI parece estar decididamente en el tren de Swift.

## **Google acepta el desafío**

Por suerte para nosotros, el equipo de Google [Swift para Tensorflow](https://www.tensorflow.org/swift){:target="_blank"} (S4TF) cogio el toro por los cuernos, y lo mejor de todo; es que decidieron ser notablemente transparentes a lo largo de todo el proceso. En un [documento extremadamente completo](https://github.com/tensorflow/swift/blob/master/docs/WhySwiftForTensorFlow.md){:target="_blank"} a través de [Github](/github-git-recursos/), detallan lo que les llevó a esta decisión; explicando qué idiomas consideraron para la tarea y por qué terminaron usando Swift.

En particular, se tomaron en cuenta los siguientes lenguajes:

- **[Go](https://golang.org/){:target="_blank"}**: En el documento, afirman que Go depende demasiado del apartado dinámico que proporcionan sus interfaces y que habrían tenido que hacer grandes cambios en el idioma para implementar las características que querían. Esto va en contra de la filosofía de Go de ser simple y ocupar poco espacio. Por el contrario, los protocolos y extensiones de Swift ofrecen mucha más libertad en términos de cuán estático desea que sea su envío. Además, el lenguaje es bastante complejo (y [se](https://forums.swift.org/t/function-builders/25167){:target="_blank"} vuelve [más complejo cada día](https://forums.swift.org/t/function-builders/25167){:target="_blank"} ), por lo que hacerlo más complejo aún; no estaría dentro de las características que Google se planteaba en dedicar su tiempo de desarrollo.
- **C++ y [Rust](https://www.rust-lang.org/){:target="_blank"}**: La base de usuarios objetiva de Google son personas que están acostumbradas a trabajar en Python en su mayor parte y que están más interesadas en pasar su tiempo pensando en el modelo y los datos en lugar de pensar en cosas como el manejo cuidadoso de la asignación de memoria o propiedad. Rust y C ++ tienen un nivel de complejidad y atención a los detalles de bajo nivel que generalmente no se justifica cuando se realiza la implementación y desarrollo de la ciencia de datos / aprendizaje automático.
- **[Julia](https://julialang.org/){:target="_blank"}**: Si lees algunos [hilos](https://www.reddit.com/r/S4TF/){:target="_blank"} de [HackerNews](https://news.ycombinator.com/){:target="_blank"} o [Reddit](https://www.reddit.com/r/S4TF/){:target="_blank"} sobre S4TF, el primer comentario generalmente es: "¿Por qué no eligieron a Julia?".

En el documento mencionado anteriormente, Google menciona que Julia también parecía un lenguaje prometedor, pero en realidad no proporcionaron una razón sólida de por qué no lo eligieron. Mencionan que Swift tiene una comunidad mucho más grande que Julia, lo cual es cierto, pero las comunidades científicas y de ciencia de datos de Julia son mucho más grandes que las de Swift y estas son posiblemente las comunidades que harían más uso de S4TF. Algo a tener en cuenta es que el equipo de Google tenía más experiencia en Swift, dado que el creador de Swift: [Chris Lattner,](https://twitter.com/clattner_llvm?lang=en){:target="_blank"} comenzó el proyecto, por lo que esto probablemente jugó un papel importante en la decisión.
- **Crear un nuevo lenguaje**: Creo que lo dijeron mejor en el manifiesto: **Crear un idioma es una cantidad ridícula de trabajo**. Esto llevaría demasiado tiempo y el aprendizaje automático esta creciendo demasiado rápido como para dedicar el tiempo a ese largo proceso.

## ¿Qué tiene de bueno Swift, entonces?

En resumen, **Swift permite programar a alto nivel de casi igual manera que Python** y a su vez, **es más rápido que Python**. Un científico de datos podría usar Swift al igual que Python, mientras que alguien que trabaje en una biblioteca optimizada de **aprendizaje automático integrada en Swift podría ser más cuidadoso sobre cómo manejar su memoria**.

Proporcionar una descripción detallada del idioma es probablemente excesivo para los fines de este artículo. La [documentación oficial](https://docs.swift.org/swift-book/GuidedTour/GuidedTour.html){:target="_blank"} ya hace un trabajo mucho mejor para eso.

En cambio, a continuación, **describiré algunas puntos geniales sobre Swift** como un nuevo fanático del lenguaje que soy; todo ello, con la esperanza de que esto atraiga a las personas a probarlo.

Las siguientes secciones, **tratarán de una amplia variedad de puntos atractivos del idioma Swift**, sin ningún orden en particular, y sin prestar especial atención a su importancia en general. Después de ello, profundizaré en **el aspecto de la programación diferenciable** y en **el gran plan de Google para Swift**.

### Punto 1: A favor de Swift

**Swift es excesivamente rápido**. Esto es lo primero que probé cuando comencé a usar Swift. Escribí algunos guiones cortos para evaluar qué tan bien le iría a Python y C. Estas pruebas no son particularmente sofisticadas, para ser honesto. Simplemente llenan una matriz con enteros y luego los agregan al resto. Esto por sí mismo no es una manera muy completa de probar la rapidez de uso con el lenguaje Swift, pero yo estaba ansioso por ver si Swift podría ser tan rápido como C. No sé, si sería siempre igual de rápido o tan rápido como C. Pero..

Para la primera comparación, probé entre Swift y Python. Me tomé algunas libertades artísticas con la colocación de las llaves en Swift para que cada línea básicamente haga lo mismo en ambos casos.

```swift
import time                    | import Foundation
                               |
result = []                    | var result = [Int]()
for it in range(15):           | for it in 0..<15 {
    start = time.time()        |     let start = CFAbsoluteTimeGetCurrent()
    for _ in range(3000):      |     for _ in 0..<3000 {
        result.append(it)      |         result.append(it)}
    sum_ = sum(result)         |     let sum = result.reduce(0, +)
    end = time.time()          |     let end = CFAbsoluteTimeGetCurrent()
    print(end - start, sum_)   |     print(end - start, sum)
    result = []                |     result = []}
```

Aunque su sintaxis es muy similar en este fragmento en particular, **el script de Swift demuestra ser 25 veces más rápido que el de Python**. Cada bucle más externo en el script de Python se completa en 360 μs en promedio, frente a 14 μs para Swift. Esto es una gran mejora.

En este caso, hay otras cosas interesantes a tener en cuenta. A saber, `+` es un operador, así como una función que se pasa `reduce` (lo que explicaré más adelante), `CFAbsoluteTimeGetCurrent` revela las peculiaridades de Swift con respecto a los espacios de iOS anteriores, y el `..<` operador de rango le permite elegir si el rango es inclusivo y con que holgura.

Sin embargo, esta prueba realmente no nos dice qué tan rápido puede ser Swift. Para descubrirlo, necesitamos compararlo con C. Entonces, eso fue lo que hice, y para mi decepción, los resultados iniciales no fueron buenos. La versión [escrita en C](https://gist.github.com/joaqo/e019b00ba0dae567bf7d66ee971f7c9e){:target="_blank"} tomó un promedio de 1.5μs, que es diez veces más rápido que nuestro código Swift. ¡UH Oh!

Para ser justos, esta no es una comparación terriblemente honesta. El script Swift está utilizando una matriz dinámica, que se reasigna repetidamente a medida que aumenta de tamaño. Esto también significa que está realizando una verificación encuadrada para cada apéndice. Para corroborar esto, podemos ver su definición. Los tipos estándar rápidos como *int*, *float* y *array* no están codificados en el compilador, son estructuras definidas en la biblioteca estándar. Por lo tanto, de acuerdo con la [definición de apéndice](https://github.com/apple/swift/blob/master/stdlib/public/core/Array.swift#L1148) de la matriz, vemos que están sucediendo muchas cosas. Sabiendo esto, nivelé el campo de juego preasignando la memoria de la matriz y usando un puntero para llenar la matriz. El script resultante no es mucho más largo:

```swift
import Foundation

// Preallocating memory
var result = ContiguousArray<Int>(repeating: 0, count: 3001)
for it in 0..<15 {
    let start = CFAbsoluteTimeGetCurrent()

    // Using a buffer pointer for assignment
    result.withUnsafeMutableBufferPointer({ buffer in
        for i in 0..<3000 {
            buffer[i] = it
        }
    })
    let sum = result.reduce(0, +)
    let end = CFAbsoluteTimeGetCurrent()
    print(end - start, sum)
```

Este nuevo código toma 3 μs, por lo que ahora es la mitad de rápido que C, que ya es algo que está muy bien. Sin embargo, solo por completar, continué perfilando el código para encontrar la diferencia con la versión de C y resulta que el método `reduce` que estaba usando estaba realizando [una llaada indirecta innecesaria](https://github.com/apple/swift/blob/06f82a53b5da26b67a8fd9414d8f8877eca8a3e1/stdlib/public/core/SequenceAlgorithms.swift#L576){:target="_blank"} con el uso de una función `nextPartialResult`, que proporciona una generalización no esencial.

Después de reescribirlo utilizando un puntero, finalmente logré la misma velocidad que con C. Sin embargo, esto obviamente anula el propósito de usar Swift, ya que en este momento estamos escribiendo una versión de C. Más detallada y más grotesca. Sin embargo, es bueno saber que puedes obtener la velocidad de C si realmente la necesitas.

En resumen: **no obtendrás la velocidad C junto a mucho trabajo y Python, pero obtendrá una gran compensación entre los dos**.

### **Punto 2: A favor de Swift**

**Swift ha adoptado un enfoque interesante para las firmas funcionales**. En su forma más básica, son relativamente simples:

```swift
func greet(person: String, town: String) -> String {
    return "Hello \(person)!  Glad you could visit from \(town)."
}

greet(person: "Bill", town: "Cupertino")
```

La firma de la función consiste en los nombres de los parámetros seguidos de sus tipos. No es algo muy elegante. Lo único inusual es que Swift requiere que le proporciones los nombres de los parámetros al llamar a la función, por lo que debes escribir `person` y `town` al llamar a `greet`, como demuestra la última línea del fragmento anterior.

Las cosas se ponen más interesantes cuando introducimos algo llamado **etiquetas de argumentos** en la mezcla.

```swift
func greet(_ person: String, from town: String) -> String {
    return "Hello \(person)!  Glad you could visit from \(town)."
}

greet("Bill", from: "Cupertino")
```

Las **etiquetas de argumentos** son exactamente lo que parecen: **son etiquetas para los parámetros de su función**, y **se declaran antes de sus parámetros respectivos en la firma de la función**. En el ejemplo anterior `from` sería `town`' la etiqueta argumento, y `_` sería `person` la etiqueta argumento. Utilicé `_` para esta última etiqueta porque `_` es un caso especial en Swift que significa "que no requiere proporcionar ningún nombre de argumento al llamar a ese parámetro".

Con las etiquetas de argumento, cada parámetro obtiene 2 nombres diferentes: una etiqueta de argumento, que se usa para llamar a la función y un nombre de parámetro, que se usa dentro de la definición del cuerpo de la función. Esto puede parecer un poco arbitrario, pero hace que su código sea más fácil de leer.

Si observa la firma de la función de arriba, es casi como leer en inglés: "Salude a la persona de la ciudad" La llamada a la función es tan descriptiva: "Salude a Bill de Cupertino". Sin etiquetas de argumento, las cosas se vuelven un poco más ambiguas: "Saluden a la persona". No sabemos que representa `town`.

¿Es esa la ciudad en la que estamos ahora? ¿Es esa la ciudad en la que vamos a conocer a la persona? ¿O es el pueblo de donde es originaria la persona?

Sin etiquetas de argumento, tendríamos que leer el cuerpo de la función para saber qué está pasando, o recurrir a hacer que el nombre de la función o los nombres de los parámetros sean más largos y más descriptivos. Esto puede complicarse si tiene muchos parámetros y en mi opinión, tiende a generar un código más feo y nombres de funciones innecesariamente largos. Las etiquetas de argumento son más bonitas y escalables. Afortunadamente, son ampliamente usadas en Swift.

### **Punto 3: A favor de Swift**

Swift hace un uso extensivo de los cierres. Por lo tanto, tiene algunos atajos para hacer que su uso sea más ergonómico. Este ejemplo tomado de la documentación del lenguaje resalta cuán concisos y expresivos son esos atajos.

Por ejemplo, tomemos una matriz que queremos ordenar del revés:

```swift
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
```

Existen dos formas de realizar esto.

La primera forma de hacerlo, sería usar el método `sorted` de Swift para matrices y emplear una función personalizada que le diga cómo hacer una comparación ordenada por pares en los elementos de la matriz, así:

```swift
func backward(_ s1: String, _ s2: String) -> Bool {
    return s1 > s2
}
var reversedNames = names.sorted(by: backward)
```

La función `backward` compara dos elementos a la vez y devuelve *verdadero* si están en el orden deseado y *falso* si no lo están. El método `sorted` de la matriz espera una función como entrada para saber cómo ordenar la matriz. Como nota aparte, aquí, también podemos ver el uso de la ***etiquetas de argumento***  `by`, que es muy útil.

La segunda forma de hacerlo mediante Swift, sería realizandolo mediante cierres:

```swift
reversedNames = names.sorted(by: { s1, s2 in return s1 > s2 } )
```

El código entre `{` y `}` es un cierre que se está definiendo y pasando como argumento a `sorted` al mismo tiempo. Si nunca has oído hablar de los cierres, son solo funciones sin nombre que capturan el contexto. Una buena manera de pensar en ellos es como Python lambdas con esteroides. La palabra clave `in`en el cierre se usa para separar los argumentos del cierre y su cuerpo. Palabras clave más intuitivas, como `:`las que ya se tomaron para las definiciones de tipo de firma (los tipos de argumento de cierre se deducen automáticamente de `sorted` por lo que pueden evitarse), y todos sabemos que nombrar cosas es una de las cosas más difíciles de hacer en programación, por lo que estamos atascados con el uso de la palabra clave `in` no de forma tan intuitiva.

En cualquier caso, el código ya parece más conciso.

Sin embargo, podemos hacerlo mejor:

```swift
reversedNames = names.sorted(by: { s1, s2 in s1 > s2 } )
```

Eliminamos la declaración de devolución aquí porque, en Swift, los cierres implícitamente devuelven una sola línea.

Aún así, podemos mejorar más el código:

```swift
reversedNames = names.sorted(by: { $0 > $1 } )

```

Swift también ha nombrado implícitamente parámetros posicionales, por lo que en el caso anterior `$0` es el primer argumento, `$1` el segundo, `$2` sería el tercero, y así sucesivamente. El código ya es compacto y fácil de entender, pero aún podemos hacerlo mejor:

```swift
reversedNames = names.sorted(by: >)

```

En Swift, el operador `>` es solo una función llamada `>`. Por lo tanto, podemos pasarlo a nuestro método `sorted` haciendo que nuestro código sea extremadamente conciso y legible.

Esto también se aplica a los operadores como `+=`, `-=`, `<`, `>`, `==`, y `=`, y encontrará su [definición](https://github.com/apple/swift/blob/06f82a53b5da26b67a8fd9414d8f8877eca8a3e1/stdlib/public/core/Integers.swift#L133){:target="_blank"} en la biblioteca estándar. La diferencia entre estas funciones / operadores y funciones normales es que los primeros han sido declaradas explícitamente como los operadores que se utilizan bajo palabras claves como `infix`, `prefix` o `suffix` en la biblioteca estándar. Por ejemplo, la función `+=` se define como un operador en [esta línea](https://github.com/apple/swift/blob/1ed846d8525679d2811418a5ba29405200f6e85a/stdlib/public/core/Policy.swift#L468){:target="_blank"} de la biblioteca estándar de Swift. Y se pude comprobar que el operador se ajusta a varios protocolos diferentes como `Array` y `String` ya que muchos tipos diferentes tienen su propia implementación de la función `+=`.

De mayor interés es que podemos definir nuestros propios operadores personalizados. Un gran ejemplo de esto está en la biblioteca [GPUImage2](https://github.com/BradLarson/GPUImage2){:target="_blank"}. La biblioteca permite a los usuarios cargar una imagen, modificarla con una secuencia de transformaciones y luego generarla de alguna manera. Naturalmente, la definición de estas secuencias de transformaciones aparece repetidamente en la biblioteca, por lo que el creador de la biblioteca decidió definir un nuevo operador llamado `-->` que se usaría para encadenar estas transformaciones:

```swift
func -->(source:T, destination:T) -> T {
    source.addTarget(destination)
    return destination
}

infix operator --> : AdditionPrecedence

```

En el código anterior ligeramente simplificado, la función `-->` se declara primero y luego se define como un operador `infix`. Infix solo significa que para usar el operador, debe colocarlo entre sus dos argumentos. Esto le permite escribir un código como el siguiente:

```swift
let testImage = UIImage(named:"WID-small.jpg")!
let toonFilter = SmoothToonFilter()
let luminanceFilter = Luminance()

let filteredImage = testImage.filterWithPipeline{input, output in
    input --> toonFilter --> luminanceFilter --> output  // Interesting part
}

```

Este código es más corto y más fácil de entender que un montón de métodos encadenados o una serie de funciones `source.addTarget(...)`.

### **Punto 3: A favor de Swift**

Anteriormente, mencioné que los tipos básicos de Swift eran estructuras definidas en la biblioteca estándar y no codificadas en el compilador, ya que generalmente están en otros idiomas. Una razón por la que esto es útil es que nos permite usar una función de Swift llamada `extension` que nos permite agregar nuevas funcionalidades a cualquier tipo, incluidos los tipos básicos. Así es como esto puede ser desarrollado:

```swift
extension Double {
    var radians: Double {
        return self * (Double.pi / 180)
    }
}

360.radians // -> 6.28319

```

Aunque no es particularmente útil, este ejemplo muestra cuán extensible es el lenguaje; ya que le permite hacer cosas como escribir cualquier número en un intérprete Swift y llamar a cualquier método personalizado que desee.

### **Punto 5: A favor de Swift**

Además de tener un compilador, Swift también tiene un intérprete y soporte para [Jupyter Notebooks](https://jupyter.org/){:target="_blank"}. El intérprete es particularmente bueno para aprender el idioma, ya que le permite escribir `swift` en el símbolo del sistema y comenzar a probar el código de inmediato, de la misma manera que lo haría con Python. Por otro lado, la integración con Jupyter Notebooks es increíble para visualizar datos, realizar exploraciones de datos y escribir informes. Finalmente, cuando desee ejecutar el código de producción, puede compilarlo y aprovechar la gran optimización que proporciona [LLVM](https://llvm.org/){:target="_blank"}.

## El Plan Maestro de Google

Mencioné algunas características en los párrafos anteriores, pero hay una característica que se distingue de las demás: **El soporte de Jupyter** que es muy nuevo y de hecho fue agregado por el equipo de S4TF. Esto es notable porque nos da una idea de cuál es el estado mental de Google cuando se trabaja en este proyecto: **no solo quieren crear una biblioteca para Swift**, sino que también **quieren mejorar profundamente el lenguaje de Swift** junto con el resto de sus herramientas, y **luego construir una nueva biblioteca de Tensorflow usando esta versión mejorada del lenguaje Swift**.

Este punto se ilustra mejor al observar dónde el equipo S4TF ha pasado la mayor parte de su tiempo. La mayor parte del trabajo que han realizado ha sido en **el repositorio del compilador Swift de Apple**. Más específicamente, la mayor parte del trabajo que Google ha estado haciendo radica en **una [rama de desarrollo](https://github.com/apple/swift/tree/tensorflow){:target="_blank"} dentro del repositorio del compilador Swift**. Google está agregando **nuevas características al lenguaje Swift**, primero creándolas y probándolas en su propia rama y luego fusionándolas en la rama maestra de Apple. Esto significa que el lenguaje Swift estándar que se ejecuta en dispositivos iOS en todo el mundo eventualmente incorporará estas mejoras.

Ahora bien, **¿Cuáles son las características que Google está incorporando en Swift?**

Comencemos con la más importante.

## **¿Qué es la programación diferenciable?**

Últimamente, ha habido mucha publicidad en torno a **la programación diferenciable**. El director de inteligencia artificial de Tesla, Andrej Karpathy, a dicho que **la programación diferenciable será [el Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35){:target="_blank"}**, mientras que Yan LeCun ha dicho: “[El aprendizaje profundo está muerto. La programación diferenciable está viva"](https://www.facebook.com/yann.lecun/posts/10155003011462143){:target="_blank"}. Otros afirman que será necesario crear un conjunto completamente nuevo de nuevas herramientas; como un nuevo Git, nuevos IDE y por supuesto, nuevos lenguajes de programación. ;) ;)

Pero entonces.. **¿Qué es la programación diferenciable?**

En pocas palabras, **la programación diferenciable es un paradigma de programación en el que el programa en sí puede diferenciarse**. Esto le permite establecer un cierto objetivo que desea optimizar, hacer que su programa calcule automáticamente el gradiente de sí mismo con respecto a este objetivo y luego afinarse en la dirección de este gradiente. **Esto es exactamente lo que haces cuando entrenas una red neuronal**.

Lo más convincente de tener un programa sintonizado en sí mismo, es que nos permite crear el tipo de programas que parece que somos completamente incapaces de programar por nosotros mismos. Una forma interesante de pensar en esto es que su programa que utiliza sus gradientes para sintonizarse para una determinada tarea es [mejor en programación que usted](https://twitter.com/karpathy/status/893576281375219712){:target="_blank"}. Estos últimos años han demostrado que esto es cierto para un número cada vez mayor de casos, pero sin un final claro respecto al crecimiento de estos casos conocido.

### **Un lenguaje diferenciable**

Después de esta larga presentación, finalmente es hora de presentar la visión de Google de cómo se verá la programación diferenciable nativa en Swift:

```swift
func cube(_ x: Float) -> Float {
    return x * x * x
}

let cube𝛁 = gradient(of: cube)
cube(2)   // 8.0
cube𝛁(2)  // 12.0

```

Aquí comenzamos definiendo una función simple llamada `cube`, que devuelve el cubo de su entrada. Luego viene la parte emocionante: Creamos la función derivada de nuestra función original, simplemente recurriendo a `gradient`. Aquí no se utilizan bibliotecas o códigos externos, `gradient` es simplemente una nueva función que el equipo S4TF está introduciendo en el lenguaje Swift. Esta función aprovecha los cambios que el equipo realizó en el núcleo de Swift para calcular automáticamente las funciones de gradiente.

Esta es la gran característica nueva de Swift. Puede tomar un código Swift arbitrario y, siempre que sea diferenciable, calcular automáticamente su gradiente. El código anterior no tiene importaciones o dependencias extrañas, es simplemente Swift. Si alguna vez usó PyTorch, TensorFlow o cualquiera de las otras grandes bibliotecas de aprendizaje automático, todas son compatibles con esta característica, pero solo si está utilizando sus operaciones específicas de la biblioteca en particular. Además, trabajar con degradados en estas bibliotecas de Python no es tan simple, transparente o bien integrado como lo es con Swift.

Esta es una nueva característica principal de los lenguajes y por lo que puedo decir: **Swift es el primer idioma principal que tiene soporte nativo para ello**.

Para ilustrar mejor cómo se vería esto en el mundo real, el siguiente script es un ejemplo más completo de esta nueva característica, aplicada a un flujo de trabajo de capacitación de aprendizaje automático estándar:

```swift
struct Perceptron: @memberwise Differentiable {
    var weight: SIMD2<Float> = .random(in: -1..<1)
    var bias: Float = 0

    @differentiable
    func callAsFunction(_ input: SIMD2<Float>) -> Float {
        (weight * input).sum() + bias
    }
}

var model = Perceptron()
let andGateData: [(x: SIMD2<Float>, y: Float)] = [
    (x: [0, 0], y: 0),
    (x: [0, 1], y: 0),
    (x: [1, 0], y: 0),
    (x: [1, 1], y: 1),
]
for _ in 0..<100 {
    let (loss, 𝛁loss) = valueWithGradient(at: model) { model -> Float in
        var loss: Float = 0
        for (x, y) in andGateData {
            let ŷ = model(x)
            let error = y - ŷ
            loss = loss + error * error / 2
        }
        return loss
    }
    print(loss)
    model.weight -= 𝛁loss.weight * 0.02
    model.bias -= 𝛁loss.bias * 0.02
}

```

Una vez más, el código anterior es simple en Swift sin dependencias externas. En este fragmento, vemos que Google ha introducido dos nuevas características de Swift: `callAsFunction` y `valueWithGradient`. El primero es bastante simple, nos permite instanciar clases y estructuras y luego llamarlas como si fueran funciones. Aquí la estructura `Perceptron` se instancia como `model`, y luego se llama `model` como una función en `let ŷ = model(x)`. Cuando haces esto, ¿Se llama realmente al método `callAsFunction`? Si alguna vez ha usado modelos Keras o PyTorch, sabes que esta es una forma bastante común de manejar modelos / capas. Si bien estas dos bibliotecas de Python utilizan el método `__call__` para poner en práctica sus métodos `call` y `forward`, respectivamente, Swift no posee esas características y por lo tanto Google tuvo que añadirlas.

La otra característica nueva interesante en el script anterior es `valueWithGradient`. Esta función devuelve el valor resultante y el gradiente de una función o cierre, evaluado en un punto particular. En el caso anterior, el cierre que definimos y usamos como entrada `valueWithGradient` es en realidad nuestra función de pérdida. Esta función de pérdida toma nuestro modelo como una entrada, por lo que cuando decimos que `valueWithGradient` evaluará nuestra función en un punto particular, queremos decir que evaluará nuestra función de pérdida con nuestro modelo en una configuración de peso particular.

Después de calcular el valor y el gradiente antes mencionados, imprimimos el valor (que es nuestra pérdida) y actualizamos los pesos de nuestro modelo utilizando los gradientes. Repita esto cien veces y tenemos un modelo entrenado. Notarás que podemos acceder a `andGateData` dentro de nuestra función de pérdida, que es un ejemplo de los cierres de Swift capaces de capturar su contexto envolvente.

### **Diferenciando código externo**

Otra característica fantástica es que no solo podemos diferenciar las operaciones de Swift, sino que también **podemos diferenciar las operaciones en bibliotecas externas que no son de Swift**, si le decimos manualmente a Swift cuáles son sus derivados. Esto significa que puedes usar una biblioteca C con una implementación muy rápida de alguna operación que actualmente no está presente en Swift, importarla en su proyecto, codificar la derivada y luego usar esta operación en la red neuronal y hacer que cosas como la propagación inversa funcionen sin problemas.

Además, hacer que esto suceda es realmente simple:

```swift
import Glibc  // we import pow and log from here

func powerOf2(_ x: Float) -> Float {
    return pow(2, x)
}

@derivative(of: powerOf2)
func dPowerOf2d(_ x: Float) -> (value: Float, pullback: (Float) -> Float) {
    let d = powerOf2(x) * log(2)
    return (value: d, pullback: { v in v * d })
}

powerOf2(3),               // 8
gradient(of: powerOf2)(3)  // 5.545

```

Glibc es una biblioteca en C, por lo que el compilador Swift no sabe cuáles son las derivadas de sus operaciones. Podemos proporcionarle al compilador esta información usando `@derivative` y luego usando estas operaciones externas junto con nuestras operaciones nativas para formar redes grandes y diferenciables muy fácilmente. En el ejemplo, importamos `pow` y `log` desde Glibc y los usamos para crear una función `powerOf2` y su derivada.

La versión actual de la nueva biblioteca de TensorFlow para Swift se está construyendo con esta función. La biblioteca importa todas sus operaciones desde la API C de la biblioteca TF Eager, pero en lugar de conectarse al sistema de diferenciación automática de TensorFlow, [especifica la derivada de cada operación básica](https://github.com/tensorflow/swift-apis/blob/27c9f333960512668e805c2472e693cfc2a601c6/Sources/TensorFlow/Operators/NN.swift#L135){:target="_blank"} y permite que Swift lo maneje. Sin embargo, esto no es necesario para todas las operaciones, ya que muchas son composiciones de operaciones más básicas y por lo tanto, Swift puede inferir automáticamente en sus derivados. Sin embargo, basar la versión actual de la biblioteca en TF Eager tiene un gran inconveniente: TF Eager es realmente lento y por lo tanto, la versión creada junto a Swift también lo es. Esto parece ser un problema temporal que se está solucionando con la incorporación de [XLA](https://www.tensorflow.org/xla){:target="_blank"} (a través de x10) y [MLIR](https://blog.tensorflow.org/2019/04/mlir-new-intermediate-representation.html){:target="_blank"} .

Dicho esto, el uso de esta solución temporal permite a los desarrolladores de Google trabajar en la API Swift TensorFlow, que realmente está empezando a tomar forma. Así es como se ve un trabajo de capacitación de un modelo simple:

```swift
import TensorFlow

let hiddenSize: Int = 10
struct IrisModel: Layer {
    var layer1 = Dense<Float>(inputSize: 4, outputSize: hiddenSize, activation: relu)
    var layer2 = Dense<Float>(inputSize: hiddenSize, outputSize: hiddenSize, activation: relu)
    var layer3 = Dense<Float>(inputSize: hiddenSize, outputSize: 3)

    @differentiable
    func callAsFunction(_ input: Tensor<Float>) -> Tensor<Float> {
        return input.sequenced(through: layer1, layer2, layer3)
    }
}

var model = IrisModel()
let optimizer = SGD(for: model, learningRate: 0.01)
let (loss, grads) = valueWithGradient(at: model) { model -> Tensor<Float> in
    let logits = model(firstTrainFeatures)
    return softmaxCrossEntropy(logits: logits, labels: firstTrainLabels)
}
print("Current loss: \(loss)")

```

Como se puede ver, es muy similar al script de entrenamiento del modelo sin importación que vimos anteriormente; tiene un diseño muy parecido a PyTorch, lo cual es genial.

### **Interoperabilidad de Python**

Un problema con el que Swift tendrá que lidiar es que sus ecosistemas actuales de aprendizaje automático y ciencia de datos aún están sus inicios. Afortunadamente, Google está abordando este problema con la inclusión de la interoperabilidad de Python en Swift. La idea es hacer posible escribir código Python dentro del código Swift y de esta manera tener acceso a la gran cantidad de excelentes bibliotecas Python.

Un caso de uso típico para esto sería entrenar un modelo en Swift y usar *matplotlib* de Python para trazarlo:

```swift
import Python
print(Python.version)

let np = Python.import("numpy")
let plt = Python.import("matplotlib.pyplot")

// let time = np.arange(0, 10, 0.01)
let time = Array(stride(from: 0, through: 10, by: 0.01)).makeNumpyArray()
let amplitude = np.exp(-0.1 * time)
let position = amplitude * np.sin(3 * time)

plt.figure(figsize: [15, 10])

plt.plot(time, position)
plt.plot(time, amplitude)
plt.plot(time, -amplitude)

plt.xlabel("Time (s)")
plt.ylabel("Position (m)")
plt.title("Oscillations")

plt.show()

```

Parece una vieja versión de Python y simple con la adición de las declaraciones `let` y `var`. Este es un ejemplo de código proporcionado por Google. La única modificación que hice fue comentar una línea de Python y reescribirla en Swift, para poder ver qué tan bien interactúan entre sí. No es tan limpio como hacerlo todo en Python, ya que tuve que usar `makeNumpyArray()` y `Array()`. Más, esto funciona, lo cual es increíble.

Google logró lograr esto mediante la introducción del tipo `PythonObject`, que puede representar cualquier objeto en Python. El proyecto de **interoperabilidad de Python está contenido en una única biblioteca de Swift**, por lo que el equipo de S4TF solo necesitó hacer algunas adiciones al lenguaje Swift, como **[la adición](https://github.com/apple/swift-evolution/blob/master/proposals/0195-dynamic-member-lookup.md){:target="_blank"} de algunas mejoras para adaptarse al dinamismo extremo de Python**. Con respecto a la cantidad de Python que admite, aún no he descubierto cómo esperan administrar elementos de Python como declaraciones con `with` y estoy seguro de que también hay otros apartados sueltos que deben considerarse, pero aún así, esto es ya una característica sorprendente; por si sola.

Mientras hablaba sobre el tema de la integración de Swift con otros idiomas, uno de mis intereses iniciales en Swift fue determinar qué tan bien le iría con una tarea de visión por computadora en tiempo real. Por esta razón, terminé buscando una versión Swift de [OpenCV](https://opencv.org/){:target="_blank"} y a través del foro FastAI terminé encontrando un prometedor contenedor OpenCV llamado [SwiftCV](https://github.com/vvmnnnkv/SwiftCV){:target="_blank"}.

Sin embargo, esta biblioteca es peculiar: OpenCV está construido en C++ (y ha desaprobado su API de C) y Swift actualmente no es compatible con C++ [(aunque está por llegar)](https://forums.swift.org/t/manifesto-interoperability-between-swift-and-c/33874){:target="_blank"}.

Por lo tanto, SwiftCV ha tenido que recurrir a envolver el código de OpenCV en un subconjunto C compatible de código C ++ y luego importarlo como C. Solo después de esto podrían envolverlo en Swift.

Decidí agregar soporte de video a SwiftCV, ya que lo necesitaba y el proyecto no lo tenía en ese momento. También quería probar las capacidades de interoperabilidad C de Swift en una situación más compleja que la que describen los tutoriales. Por lo tanto, envié [esta solicitud de extracción](https://github.com/vvmnnnkv/SwiftCV/pull/5){:target="_blank"} que es un ejemplo útil e independiente de cómo se ve la interoperabilidad de Swift con C++ a través de un contenedor C.

El proceso fue indoloro, incluso para un principiante de Swift como yo, por lo que apoyamos a los desarrolladores de Swift para eso.

## **Estado actual del proyecto**

Incluso después de todos los elogios que he ofrecido al proyecto S4TF. Debo admitir que todavía no está listo para el uso general en producción. Las nuevas API [todavía están cambiando](https://github.com/apple/swift/commit/7041e2716f41113e14ad19aeaf510ea77c778cc5){:target="_blank"} y el rendimiento de la nueva biblioteca TensorFlow todavía no es excelente, y aunque su ecosistema ya va creciendo, todavía es demasiado pequeño. Además de eso, el soporte de Linux todavía es escaso, solamente Ubuntu lo soporta por ahora.

Con todo eso en mente, se está trabajando mucho para garantizar que todos estos problemas se solucionen rápidamente.

Google está trabajando arduamente para mejorar el rendimiento, incluida la reciente [incorporación de x10](https://github.com/tensorflow/swift-apis/pull/719){:target="_blank"} y los esfuerzos que se están haciendo para lograr que MLIR esté a la par. Además, hay varios proyectos destinados a replicar gran parte del ecosistema de ciencia de datos de Python en Swift que se originó en Google, como [SwiftPlot](https://github.com/KarthikRIyer/swiftplot){:target="_blank"}, el [Penguin](https://github.com/saeta/penguin){:target="_blank"} tipo Pandas y el SwiftML tipo aprendizaje de [Scikit](https://github.com/param087/swiftML){:target="_blank"}, por nombrar algunos.

Sin embargo, lo más sorprendente es que **Apple esta trabajando con Swift en la misma dirección que Google**. En [su hoja](https://forums.swift.org/t/on-the-road-to-swift-6/32862){:target="_blank"} de [ruta](https://forums.swift.org/t/on-the-road-to-swift-6/32862){:target="_blank"} para la próxima versión principal de Swift, han establecido el crecimiento del ecosistema de software de Swift en plataformas que no son de Apple como su objetivo principal. Esto se refleja en el apoyo de Apple para varios proyectos como el [Grupo de trabajo del servidor Swift](https://swift.org/server/){:target="_blank"}, la numpy como [Numerics](https://swift.org/blog/numerics/){:target="_blank"}, el kit [del servidor del lenguaje](https://github.com/apple/sourcekit-lsp){:target="_blank"} que se ejecuta en Linux, y el trabajo que se realiza enfocado en crear un puerto entre Swift y Windows.

Además, [Sylvain Gugger](https://twitter.com/guggersylvain){:target="_blank"} de Fast.ai actualmente está construyendo una [versión Swift de FastAI](https://github.com/fastai/swiftai){:target="_blank"} y Jeremy Howard ha incluido lecciones en Swift dentro de su curso en línea altamente popular. Además, comienzan a aparecer, **¡Los primeros [trabajos académicos](https://twitter.com/eaplatanios/status/1229856859408011264){:target="_blank"} creados sobre [bibliotecas basadas](https://github.com/eaplatanios/swift-rl){:target="_blank"} en [S4TF](https://github.com/eaplatanios/swift-rl){:target="_blank"}!**

## Conclusión

En mi opinión personal, aunque Swift tiene una gran posibilidad de convertirse en un lenguaje puntero en el ecosistema del aprendizaje automático, todavía existen riesgos. El mayor riesgo es que, a pesar de sus defectos, Python realmente es lo suficientemente bueno en la realización de una gran parte de las tareas necesarias dentro del aprendizaje automático.

La inercia ya existente, puede ser demasiado grande para muchas personas que ya se sienten cómodas con Python y no ven ninguna razón para cambiar a otro idioma. Además, está el tema de que Google tiene una bien merecida reputación por dejar caer grandes proyectos y [algunas](https://twitter.com/rxwei/status/1185412505775927296){:target="_blank"} - [salidas](https://twitter.com/eugene_burmako/status/1229825664032763904){:target="_blank"} -[clave](https://twitter.com/clattner_llvm/status/1221824735484362754){:target="_blank"} -  desde el proyecto S4TF están [dejando a las personas preocupadas](https://twitter.com/clattner_llvm/status/1222032740897284097){:target="_blank"}.

Habiendo proporcionado estos descargos de responsabilidad, sigo pensando que Swift es un gran lenguaje, y las nuevas incorporaciones son tan innovadoras que eventualmente encontrarán su lugar en la comunidad de aprendizaje automático. Por lo tanto, si desea contribuir a un proyecto con un enorme potencial de crecimiento, ahora es un buen momento para comenzar.

Las cosas aún no están muy establecidas, hay muchas herramientas que aún deben crearse y un pequeño proyecto personal ahora podría convertirse en un gran proyecto comunitario en el futuro a medida que el ecosistema de aprendizaje automático Swift continúe creciendo.

### Licencia

**Fuente**\: Traducción del artículo Swift: Google’s bet on differentiable programming propiedad de [Try o Labs](https://tryolabs.com/blog/2020/04/02/swift-googles-bet-on-differentiable-programming/#sign-up-form-swift "Try o Labs"){:target="_blank"}
{: .notice--info}

### Relacionados

[🥇 ▷ Swift: Nueva versión Beta 5.2](/swift-version-beta-5-2/)

[🥇 ▷ Las 15 Mejores Lenguajes de Programación 👨‍💻 para Aprender en 2020](/15-mejores-lenguajes-programacion/)

[👩‍💻 Introducción a Swift: Aprende Swift desde Cero de forma Práctica](/catalogo/introduccion-a-swift-programacion-ios/)

[👨‍💻 Aprende a Programar Swift - Programación iOS](/catalogo/aprende-a-programar-swift-programacion-ios/)

[👨‍💻 Curso de XCode y Swift con MoureDev](/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-curso-xcode-swift-mouredev)

[👨‍🎨 Palabras más usadas en cada lenguaje de programación](/palabras-lenguajes-programacion/)

[🥇 ▷ Cómo APRENDER a Programar GRATIS en 2020: Mejores libros recomendados para programadores](/programar/)
