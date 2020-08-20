---

author: rosepac
bootstrap: true
comments: false
tags:
- 
thumbnail: /assets/img/blog/.webp
feature-img: /assets/img/blog/.webp
title: '▷ Los problemas abiertos del mundo de la robótica'
description: >-
  La robótica es una de esas cosas sobre las que se preguntan regularmente los periódicos de negocios; parece que la robótica de consumo es un mercado revolucionario de un billón de dólares que está perpetuamente a 20 años, más o menos como la fusión nuclear.
excerpt: >-
  La robótica es una de esas cosas sobre las que se preguntan regularmente los periódicos de negocios; parece que la robótica de consumo es un mercado revolucionario de un billón de dólares que está perpetuamente a 20 años, más o menos como la fusión nuclear.
canonical_URL: https://ciberninjas.com/problemas-del-campo-de-la-robotica/
permalink: /problemas-del-campo-de-la-robotica/
date: 2020-08-20 07:12:12
published: true

---

La robótica es una de esas cosas sobre las que los periódicos divertidos de negocios se preguntan regularmente; parece que la robótica de consumo es un mercado revolucionario de un billón de dólares que se encuentra perpetuamente a 20 años, más o menos de la fusión nuclear.

Había contemplado jugar con la robótica con la esperanza de construir algo que hiciera algo útil de ciencia ficción, como ir a buscarme una cerveza al refrigerador. Parecía una buena forma de jugar con las matemáticas, el taller de máquinas y terminar con algo genial y útil para jugar.

Para hacer esto, mi robot cámara de cervezas, tendría que navegar por mi apartamento potencialmente abarrotado hasta el refrigerador, abrir la puerta, buscar la botella de cerveza de tamaño / forma arbitraria entre las botellas de ketchup, frascos de arenque, brócoli y otros objetos irrelevantes, mover cosas fuera del camino, agarra la botella y regresa a mí.

Después de conversar con un experto de renombre mundial en vehículos autónomos; un subconjunto de la robótica, me informaron que esto no es realmente posible. Todas las acciones que describí anteriormente son problemas abiertos. Por supuesto, podría hacer una solución ridícula que lo haga parecer un comportamiento autónomo. También podría entrenar a un mono o un perro para que hicieran lo mismo, o levantarme y tomar la maldita cerveza yo mismo.

Realmente no hay listas de problemas abiertos en robótica, lo asumo porque sería una letanía deprimentemente larga. Pensé que armaría uno; uno que supongo será gratuitamente incompleto y ocasionalmente incorrecto, pero que compensa todo eso existiendo realmente.

Al igual que mi lista de problemas abiertos en física y astronomía , podría muy bien estar equivocado sobre algunos de estos, o estar atrasado, y dado que mi experiencia consiste en google y conversaciones de 5-10 años con un tipo genial entre peso muerto, pero parece que vale la pena hacerlo.

1. **La planificación del movimiento** es un área real de investigación, con sus propias revistas, escuelas de pensamiento, expertos y conjuntos de problemas abiertos. Cosas como, "cómo llevo mi robot del punto A al punto B sin caer en un cañón, atascarse o ser capaz de lidiar con obstáculos en general" no son problemas resueltos. Incluso cosas como un modelo de dónde está el robot, con respecto al entorno: un problema totalmente abierto. Cómo saber dónde está su manipulador en el espacio y cómo llevarlo a otro lugar; problema abierto. Obviamente, los robots de búsqueda de cerveza necesitan hacer todo tipo de planificación de movimiento. Cualquier solución potencial será ad-hoc e inútil para el caso general de, digamos, buscar un tornillo de un contenedor en el taller de máquinas.
2. **Singularidades de múltiples ejes**: este problema me dejó alucinado. Imagina que tienes un brazo robótico atornillado al suelo. Quieres enseñar la estupidez de pintar un coche o algo así. Hay singularidades reales posibles en las ecuaciones de movimiento; y es más o menos un problema poco restringido. Supongo que hay soluciones para esto en este momento, pero todas tienen diferentes compensaciones. Es un problema tan abierto como la planificación de movimientos a gran escala.
3. **Ubicación y mapeo simultáneos**. SLAM para abreviar. Cuando ingresa a una habitación, su cerebro sabe exactamente dónde está su cuerpo y hace un mapa de los alrededores. Los robots lo pasan mal con esto. Hay varias soluciones al problema, pero en última instancia, la más útil es hacer un mapa realmente bueno por adelantado. Tener un mapa vago o topológico o algún tipo de previo en cuanto al entorno: todos estos son problemas completamente diferentes que parece que deberían tener una solución común, pero no es así. Si bien hay soluciones disponibles para algunos problemas, no son generalesy definitivamente no llave en mano donde habría un módulo SLAM que puede comprar para su robot. Podría programar mi robot de cerveza para que sepa todo sobre mi habitación, pero siempre habrá nuevos obstáculos (un par de zapatos, un libro) que no están en su modelo. Necesita SLAM para lidiar.
4. **El problema del robot perdido**. Si me despierto y mis amigos trasladan mi cama a otra habitación; todos nos reiremos. La mayoría de los robots no sabrán qué hacer si pierden el rastro de su ubicación. Necesitará una estrategia para lidiar con esto. Las estrategias no son generales. Es muy probable que enciendo mi robot de cerveza en diferentes posiciones y ubicaciones en la habitación, y tendrá que lidiar con eso. Ahora imagina que lo pongo en otro lugar del edificio de apartamentos.
5. **Manipulación de objetos** y retroalimentación háptica. Enormemente no hecho todavía. La mano humana es algo asombroso, y los manipuladores de robots están lejos de ser capaces de manipular con retroalimentación háptica o incluso simplemente manipular objetos del mundo real basados ​​en el reconocimiento visual. Incluso algo como levantar un objeto estacionario con un plano fácil de agarrar es un gran problema sin resolver en el que la gente publica todo el tiempo. Mi robot de cerveza podría tener un manipulador especial diseñado para agarrar un tipo específico de botella de cerveza, o muchos modelos de formas de botellas de cerveza, pero si le pido al mismo robot que me traiga una zanahoria o un tarro de mayonesa, estoy mierda sin suerte.
6. **Estimación de profundidad**. Una especie de subconjunto de manipulación de objetos; se imagina un robot con visión binocular, o incluso simplemente la capacidad de pinchar un objeto y verlo moverse es algo bastante simple de hacer. Es un problema muy abierto . La estimación de la profundidad es un problema para mi robot de búsqueda de cerveza, incluso si la cerveza está en el mismo lugar en el refrigerador cada vez (el robot no lo estará, dependiendo de su trayectoria).
7. **Estimación de posición de objetos en movimiento**. Si no puede saber qué tan lejos está un objeto, seguramente tendrá dificultades para estimar lo que está haciendo un objeto en movimiento. El teniente Data no jugará béisbol pronto. Si mi robot de cerveza tuviera un abridor de botellas de aspecto humano, necesitaría una tecnología como esta.
8. **Affordance descubrimiento** o cómo predecir qué hará un objeto con el que interactúas cuando interactúas con él. En mi ejemplo; el robot necesitaría un modelo de cómo es probable que se comporten los objetos al apartarlos al buscar en mi refrigerador una botella de cerveza.
9. **Comprensión de la escena**: éste debería ser un problema obvio. Estamos en el punto donde el reconocimiento de imágenes es útil: conduje un Audi en la autopista que podía detectar y adherirse de alguna manera a las líneas en la autopista. Estoy bastante seguro de que eventualmente habría detectado que el camión se detuvo en el medio de la carretera frente a mí, pero a pesar de este bastante trivial, "te convertirás en una pizza en la carretera", si (object_in_front) {apply_break} nivel de comprensión , no mostró evidencia de ser capaz de tanto razonamiento. Problema totalmente abierto. Señalaré que la humilde mosca doméstica no tiene problemas para entender el concepto de “mierda frente a ti; evitar ”, lo que hace que los robots y los cerebros de Audi sean muy inferiores a la mosca doméstica. Incluso dejando de lado el problema obvio. Imagínese si su robot tiene la tarea de sacarme una cerveza del refrigerador y hay una botella de ketchup oscureciendo la cerveza. El robot seraincapaz de hacer frente. Incluso con un modelo tridimensional del concepto de botella de cerveza y botella de ketchup, que es absurdamente complejo para programar el robot.

Hay algo llamado la paradoja de Moravec que he mencionado en el pasado.

> "Es comparativamente fácil hacer que las computadoras muestren un rendimiento de nivel adulto en pruebas de inteligencia o jugando a las damas, y difícil o imposible darles las habilidades de un niño de un año en lo que respecta a la percepción y la movilidad"

La robótica encarna la paradoja de Moravec. Hay una especie de corolario de esto que la gente que trabaja en el minúsculo campo de la "IA real" (a diferencia de ML ding dongs que superó su puesto) solía conocer.

Esto fue antes de que los departamentos de marketing de Google y otros fraudes hicieran imposible el pensamiento objetivo sobre esto. La idea es que la inteligencia y la conciencia surgieron espontáneamente de los sistemas de control de movimiento biológico.

Creo que la idea viene de Roger Sperry , pero sea lo que sea, solía ser ampliamente conocida y al menos algo aceptada. Esos sistemas de control de movimiento biológico existen incluso a nivel microscópico; incluso criaturas unicelulares como el paramecio, o animales primitivos sin un sistema nervioso real como la hidra son capaces de resolver problemas que no podemos resolver ni siquiera en el caso general con la última supercomputadora NVIDIA.

Si bien la robótica es una vocación noble y los especialistas en robótica resuelven problemas endiabladamente difíciles, el comportamiento de los animales debería dar un gran indicio de que no lo están haciendo bien.

Los tipos como Rodney Brooks parecían aceptar esto y construyeron varios robots que aprenderían a caminar usando hardware primitivo e ideas orientadas a la retroalimentación en lugar de ideas programadas. Incluso había un nombre para esto; "Nouvelle AI".

No tengo idea de qué pasó con esas ideas; Supongo que fue demasiado difícil avanzar, aunque los primeros resultados fueron impresionantes. Ahora, el Dr. Brooks tiene un blog donde opina cosas divertidas como autos voladores y vehículos autónomos “muy pronto” están a la vuelta de la esquina .

Me arriesgaré y diré que creo que el año actual Rodney Brooks está equivocado acerca de los vehículos autónomos, pero creo que el Rodney Brooks de los 80 probablemente estaba en el camino correcto.

Tal vez fue demasiado difícil seguir el camino correcto: ese es a menudo el camino. Todos sabemos que los sistemas emergentes son muy importantes en todo tipo de fenómenos, pero no tenemos matemáticas o modelos para lidiar con ellos. Así que terminamos con mierda de caballo inútil como GPT-3.

Probablemente sea el caso de que, como mínimo, una “IA” genuina necesitaría tener una forma física y ser capaz de interactuar con su entorno. Muchas de las soluciones algorítmicas propuestas a los problemas enumerados anteriormente son problemas NP-difíciles.

Para mí, esto implica que la basura que involucra computadoras como las que usamos está mal. Aproximadamente resolvemos problemas NP-difíciles de otras formas todo el tiempo; puede hacerlo con pompas de jabón, pero el diseño de la “computadora” es muy diferente al de la máquina de von Neumann: es una máquina analógica en la que no nos importa la precisión infinita.

Puede ver algo de esto en varios modelos de computación neuromórfica propuestos: es muy obvio que nada como el descenso de gradiente estocástico o la divergencia contrastiva está sucediendo en las neuronas biológicas.

Los modelos de picos como una máquina de estado líquido están más cerca de cómo funciona un sistema nervioso primitivo, y son bastante difíciles de simular en el hardware de Von Neumann (algún NPC está a punto de lanzarme “tesis de Church Turing”: no lo hagas).

Creo que es probable que muchos problemas abiertos de robots se puedan resolver utilizando algo más parecido a un simulacro de un sistema nervioso simple que escribiendo código Python en ROS.

Pero en realidad, todo lo que sé sobre la robótica es que es bastante compleja y difícil de crear.
<!-- https://scottlocklin.wordpress.com/2020/07/29/open-problems-in-robotics/ -->

### **Relacionados** <!-- omit in toc -->

[ ▷ ¿Cuándo y dónde aparece por primera vez la palabra robots?](https://ciberninjas.com/aparicion-palabra-robot/)
[🤖 ▷ Una espectacular galería de robots históricos](https://ciberninjas.com/galeria-de-robots/)
[📰 ¿Somos Cyborgs? Según Elon Musk, ya lo somos](https://ciberninjas.com/somos-cyborgs/)

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Problemas de la robótica](https://scottlocklin.wordpress.com/2020/07/29/open-problems-in-robotics/){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.