---

author: rosepac
bootstrap: true
comments: false
tags:
  - Reflexión de Programación
thumbnail: /assets/img/2020-news/caracol-programando.webp
feature-img: /assets/img/2020-news/caracol-programando.webp
title: '▷ Solo has agregado dos líneas de código, ¿Por qué has tardado dos días?'
description: >-
  Puede parecer una pregunta razonable, pero deja entrever terribles suposiciones: el número de líneas de código creado, no puede ser equivalente al esfuerzo realizado o a que el código sea o no de calidad.
excerpt: >-
  Puede parecer una pregunta razonable, pero deja entrever terribles suposiciones: el número de líneas de código creado, no puede ser equivalente al esfuerzo realizado o a que el código sea o no de calidad.
canonical_URL: https://ciberninjas.com/solo-dos-lineas-para-tanto-tiempo/
permalink: /solo-dos-lineas-para-tanto-tiempo/
date: 2020-07-16 10:12:32
last_modified_at: 
published: true

---

A veces, en el mundo de la programación, puede ocurrir que tengas un encargado, supervisor o jefe encima de tí, y que le asombre porque a pesar de dedicar mucho tiempo a corregir un error en el código; solamente termines modificando muy poco contenido dentro del mismo.

Entonces, pueden terminar acosándote con preguntas del estilo de ¿Por qué has tardado tanto?, ¿Por qué has modificado tan poco?, ¿Realmente necesitabas tanto tiempo para tan poco cambio?

Y esas, podrían parecer una pregunta razonable, pero si pensamos en profundidad en ello. Se podrían extraer terribles suposiciones al realizar esas preguntas. Como por ejemplo; que el número de líneas de código equivale al esfuerzo realizado, o que el número de líneas de código equivale al valor y calidad del mismo.

> **Obviamente, nada de lo anterior es cierto.**

En resumen, la suposición de que por haber realizado pocos cambios requiere poco tiempo; equivale a la suposición de que todas las líneas de código son iguales, independientemente de cómo quién y bajo que control del trabajo se hayan realizado.

Matt Lacey, reconocido programador especializado en Xamarin y Microsoft, explica a continuación las razones reales por las que se puede tardar más tiempo de lo que una persona sin conocimientos profundos puede llegar a pensar que se debe dedicar, en la corrección de problemas que pueden parecer pequeños dentro de grandes proyectos de código.

A continuación, se citan los 7 puntos que Matt destaca y su breve reflexión final.

## **¿Por qué una solución que parece simple, ha tardado dos días en completarse?**

- **Porque el problema se informó con una descripción vaga de cómo recrearlo.** Me llevó varias horas lograr una reproducción confiable del problema. Algunos desarrolladores habrían contactado inmediatamente a la persona que informo del problema y hubieran requerido mucha más información antes de investigar. Yo intento y hago todo lo que puedo con la información proporcionada. Sé que a algunos desarrolladores no les gusta tener que corregir errores, por lo que hacen todo lo posible para evitarlo. Afirmar que no hay suficiente información en la descripción del problema, es una excelente manera de parecer que estás tratando de ayudar pero no tienes nada que hacer. Sé que informar de errores puede ser difícil y estoy agradecido por cualquier persona que lo hace. Quiero mostrar mi agradecimiento por los informes de errores, tratando de hacer todo lo posible con la información proporcionada antes de solicitar más detalles.
- **Debido a que el problema informado estaba relacionado con la funcionalidad, y yo no estoy familiarizado con ella.** La característica que tenía que ver con el problema era algo que rara vez uso y no es algo que haya usado en profundidad; y esto, termino significando que he tardado más tiempo en la resolución del problema, puesto que antes debía entender cómo usarlo y los matices de cómo interactúa el software a la hora de aparecer, ese error concreto.
- **Porque me tomé el tiempo necesario para investigar la causa real del problema, no solo para ver los síntomas.** Si algún código arroja un error, puedes envolverlo en una declaración try..catch y suprimir el error; y si no hay error, no hay problema. ¿Pero eso es correcto? Lo siento, para mí no, hacer invisible el problema no es lo mismo que solucionarlo. Hacer "tragar un error" al software, solamente puede conducir fácilmente a otros efectos secundarios inesperados; y no quiero tener que lidiar con ellos en el futuro más cercano o que otra persona encuentre problemas secundarios.
- **Porque investigué si había otras formas de llegar al mismo problema, y no solamente reproducía el mismo error que había sido informado.** Reproducir un conjunto de pasos, puede hacer que el error parezca estar en un solo lugar cuando en realidad puede ser un problema que se encuentre más arraigado. Encontrar la causa exacta de un problema y observar todas las formas de llegar al mismo, puede proporcionar información valiosa a la hora de encontrar su solución. La información de cómo se usa realmente el código, dónde podría haber otros lugares con posibles (¿otros?) problemas que podrían necesitar ser reparados, o si el código muestra inconsistencias que hace que partes se ejecute un posible error dentro de una ruta, pero no en otras.
- **Porque me tomé el tiempo para verificar si había otras partes del código que pudieran verse afectadas de manera similar.** Si un error provocó el error, el mismo error también podría haberse cometido en otra parte de la fuente principal del código; y ahora que lo conocemos, es un buen momento para verificarlo.
- **Porque cuando encontré la causa del problema, busqué la forma más sencilla de solucionarlo e intentando que tuviese un riesgo mínimo de producir efectos secundarios.** No quiero la solución más rápida posible. Quiero una solución que no pueda causar confusión u otros problemas derivados.
- **Porque probé el cambio a fondo y verifiqué que abordaba el problema para todas las rutas de código diferentes que se vieron afectadas.** No quiero dejar el trabajo de tener que probar que lo que he hecho es correcto sobre otras personas. No quiero que se encuentre un error en el futuro y que se tenga que volver a este punto del código, cuando ya se haya avanzado mentalmente hacía otros problemas del código. El cambio de contexto es costoso y frustrante, y el tener un probador dedicado a revisar el mismo cambio nuevamente es algo que quiero evitar siempre que sea posible.

No me gusta tener que arreglar errores, en gran parte porque uno se siente frustrado, intentando rehacer el resultado de algo ya realizado. La otra razón por la que no me gusta corregir errores, es porque prefiero trabajar sobre código nuevo.

## **¿Qué es peor que tener que arreglar un error?**

Si puede existir algo peor que tener que arreglar un error, eso es; tener que arreglar el mismo error dos veces.

Me tomo el tiempo suficiente como para asegurarme de que cualquier error esté totalmente solucionado, de modo que no sea necesario enfrentarlo, investigarlo, solucionarlo y probarlo; en resumen, trabajar sobre él, más de una sola vez.

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Puede parecer una pregunta razonable, pero deja entrever terribles suposiciones: el número de líneas de código creado, no puede ser equivalente al esfuerzo realizado o a que el código sea o no de calidad.](/assets/img/2020-news/caracol-programando.webp "Puede parecer una pregunta razonable, pero deja entrever terribles suposiciones: el número de líneas de código creado, no puede ser equivalente al esfuerzo realizado o a que el código sea o no de calidad.")

> **Fuente**: [Blog de Matt Lacey](https://www.mrlacey.com/2020/07/youve-only-added-two-lines-why-did-that.html){:target="_blank" rel="nofollow,noreferrer"}