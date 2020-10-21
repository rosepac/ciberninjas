---

author: rosepac
bootstrap: true
comments: false
tags:
- Lenguajes de Programación
- Reason
thumbnail: /assets/img/blog/11-reason.webp
feature-img: /assets/img/blog/11-reason.webp
title: '👨‍💻 ▷ Reason te permite escribir código seguro de tipo simple, rápido y de calidad mientras aprovecha los ecosistemas JavaScript y OCaml'
description: >-
  Reason no es un lenguaje nuevo; Es una nueva sintaxis y cadena de herramientas impulsada por el lenguaje probado en batalla, OCaml . La razón le da a OCaml una sintaxis familiar orientada a los programadores de JavaScript, y atiende al flujo de trabajo existente de NPM / Yarn que la gente ya conoce.
excerpt: >-
  Reason no es un lenguaje nuevo; Es una nueva sintaxis y cadena de herramientas impulsada por el lenguaje probado en batalla, OCaml . La razón le da a OCaml una sintaxis familiar orientada a los programadores de JavaScript, y atiende al flujo de trabajo existente de NPM / Yarn que la gente ya conoce.
canonical_URL: https://ciberninjas.com/reason/
permalink: /reason/
date: 2020-05-11 11:15:32
last_modified_at: 
published: true

---

Reason compila a JavaScript gracias a nuestro proyecto asociado, [BuckleScript](https://bucklescript.github.io/){:target="_blank" rel="nofollow,noreferrer"}, que compila OCaml / Reason en JavaScript legible con interoperabilidad fluida. La razón también se compila para un ensamblaje rápido y básico, gracias a OCaml.

![Reason no es un lenguaje nuevo; Es una nueva sintaxis y cadena de herramientas impulsada por el lenguaje probado en batalla, OCaml . La razón le da a OCaml una sintaxis familiar orientada a los programadores de JavaScript, y atiende al flujo de trabajo existente de NPM / Yarn que la gente ya conoce.](/assets/img/blog/11-reason.webp "Reason no es un lenguaje nuevo; Es una nueva sintaxis y cadena de herramientas impulsada por el lenguaje probado en batalla, OCaml . La razón le da a OCaml una sintaxis familiar orientada a los programadores de JavaScript, y atiende al flujo de trabajo existente de NPM / Yarn que la gente ya conoce.")
- [**¿Qué es Reason?**](#qué-es-reason)
- [**¿Por qué Reason?**](#por-qué-reason)
- [**¿Por qué OCaml como lenguaje de respaldo?**](#por-qué-ocaml-como-lenguaje-de-respaldo)
- [**¿Reason no es para ti?**](#reason-no-es-para-ti)

## **¿Qué es Reason?**

Reason no es un lenguaje nuevo. Es una nueva sintaxis y cadena de herramientas impulsada por el lenguaje probado en batalla, OCaml . La razón le da a OCaml una sintaxis familiar orientada a los programadores de JavaScript, y atiende al flujo de trabajo existente de NPM / Yarn que la gente ya conoce.

En ese sentido, Reason se puede considerar como un primo de JavaScript sólido, estáticamente tipado, más rápido y más simple, menos los problemas históricos, más las características de ES2030 que puede usar hoy, ¡y con acceso tanto al ecosistema JS como al OCaml!

> 🔥 Quizás te interese: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

## **¿Por qué Reason?**

Reason no trata de hacer que los usuarios aprendan un nuevo lenguaje, si no todo lo contrario. Intenta aprovechar lo mejor de otros, para ofrecer algo mejor.

La semántica de tiempo de ejecución central de OCaml (cómo se comporta en tiempo de ejecución) se asigna directamente a JavaScript *. Si se omiten algunas esquinas de JavaScript y se agregan algunas características interesantes, se puede compilar en JS bastante legible y usar directamente el 80% del ecosistema y las herramientas de JavaScript. Además de eso, puede usar el mismo lenguaje para compilar en ensamblado barebone, iOS, Android e incluso en microcontroladores.

Sin embargo, no está claro qué características de JS hay que remodelar, a fin de adaptarlo al molde de un lenguaje diseñado en torno a la semántica rápida y el tipeo de sonido. Pero podemos trabajar hacia atrás , desde un lenguaje que ha sido diseñado desde cero en torno al rendimiento y la seguridad, y hacer algunos ajustes para que se vea y actúe un poco más como lo mejor del lenguaje web familiar que hemos llegado a conocer.

Todas estas decisiones hicieron que, para casos de uso comunes, la curva de aprendizaje de Reason no sea realmente más alta que aprender JS + un sistema de tipo gradual; a cambio, obtienes:

- Un sistema de tipo sólido como una roca. Los tipos OCaml tienen una cobertura del 100% (cada línea de código), inferencia (los tipos se pueden deducir y no se requiere que se escriban manualmente) y la solidez (una vez que se compila, se garantiza que los tipos son precisos).
- Un enfoque en la simplicidad y el pragmatismo . La razón permite el efecto secundario, la mutación y los objetos para familiaridad e interoperabilidad, al tiempo que mantiene el resto del lenguaje puro, inmutable y funcional.
- Un enfoque en el rendimiento y el tamaño . Reason se utiliza para compilar a JavaScript utilizando el sistema de compilación bsb, que finaliza las compilaciones incrementales en menos de 100 ms. El resultado resultante también es pequeño .
- Aprendizaje incremental y conversión de base de código . Aproveche los beneficios de un archivo completamente escrito desde el primer día. Si todo lo demás falla, pegue algunos fragmentos de JavaScript sin procesar directamente en su archivo Reason .
- Gran ecosistema y herramientas. Use su editor favorito, su paquete NPM favorito y cualquiera otra herramienta de su pila existente favorita.

## **¿Por qué OCaml como lenguaje de respaldo?**

Muchos idiomas de respaldo satisfarían los puntos de la sección anterior; Sin embargo, los puntos a continuación son características importantes del lenguaje OCaml que lo hacen particularmente adecuado como base para Reason.

- La capacidad de compilar en código nativo . El tiempo de inicio nativo (ensamblaje) de OCaml es en milisegundos de un solo dígito . La gente ya está comenzando a usar el Motivo de los casos de uso nativo hoy; Mientras tanto, nos estamos centrando en la adopción a través de una gran compatibilidad con JavaScript.
- Efectos secundarios, mutación y otras escotillas de escape . Estos no suelen ser los puntos de venta brillantes de un idioma; pero poder hacer un puente hacia una parte de una base de código sin una complicada interoperabilidad / reescritura es crucial para nosotros en Facebook. El valor predeterminado de OCaml es el código inmutable y funcional, pero tener las escotillas de escape hace que la adopción inicial a veces sea simplemente posible.
- Implementación de cuestiones de pulido . OCaml ha sido refinado durante dos décadas y mejora cada año.
- El lenguaje para escribir React. [ReasonReact](https://reasonml.github.io/reason-react/){:target="_blank" rel="nofollow,noreferrer"} demuestra cuán naturalmente los patrones React juegan con las fortalezas de OCaml / Reason, y ReactJS se inspiró en la filosofía funcional, pero pragmática, de la familia de idiomas ML (como se describe en la charla React To The Future de jordwalke ).

## **¿Reason no es para ti?**

Aquí hay algunas alternativas que comparten algunos conceptos / linajes similares con Reason / OCaml, pero a menudo con un enfoque diferente:

- [OCaml](http://ocaml.org/){:target="_blank" rel="nofollow,noreferrer"}. Reason es una sintaxis y una cadena de herramientas construida sobre el lenguaje OCaml. OCaml y Reason inter operan entre sí con OCaml. Puede compilar OCaml simple con BuckleScript, y [Js_of_ocaml también](http://ocsigen.org/js_of_ocaml/) puede funcionar con Reason.
- [Óxido](http://rust-lang.org/){:target="_blank" rel="nofollow,noreferrer"}. Inspirado en la familia de idiomas ML, pero no en la recolección de basura. Tiene un excelente soporte de paralelismo.
- [Elm](http://elm-lang.org/){:target="_blank" rel="nofollow,noreferrer"}. Otro gran idioma en la familia ML. Se centra en la creación de aplicaciones web. Vea la charla ampliamente elogiada sobre Elm, [Let's Be Mainstream](https://www.youtube.com/watch?v=oYk8CKH7OhE) .
- [Purescript](http://www.purescript.org/){:target="_blank" rel="nofollow,noreferrer"}. Inspirado por Haskell, compila el JavaScript.
- [Fábula](http://fable.io/){:target="_blank" rel="nofollow,noreferrer"}. Basado en F #, que está estrechamente relacionado con OCaml.
- [ClojureScript](https://clojurescript.org/){:target="_blank" rel="nofollow,noreferrer"}. Lenguaje escrito dinámicamente que prioriza la simplicidad y la gran interoperabilidad también. No parece tener mucho en común con ReasonML. Comparte algunas raíces funcionales con la familia de idiomas ML.
- [Swift](https://www.apple.com/swift/){:target="_blank" rel="nofollow,noreferrer"}. Lenguaje creado por Apple, e interopera bien con Objective-C. Utiliza la colección contada de referencia (pero sin interrupción automática del ciclo).
- [Haxe](https://haxe.org/){:target="_blank" rel="nofollow,noreferrer"}. Compila básicamente cualquier cosa con un enfoque en el desarrollo de juegos.

[⏩ Web Oficial de Reason](https://reasonml.github.io/ "Página web de la nueva sintaxis de lenguaje Javscript y OCaml: Reason"){: .btn .btn--inverse .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[⏩ Documentación Reason](https://reasonml.github.io/docs/en/what-and-why "Reason documentación"){: .btn .btn--inverse .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

> 🔥 Quizás te interese: [Cómo aprender Python 2021](/python/ "Cómo aprender Python 2021"), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning 2021](/que-aprender-sobre-machine-learning-2020/ "Cómo aprender aprendizaje automático o machine learning 2021"), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}

### **Relacionados** <!-- omit in toc --> <!-- Omit in toc -->

[🥇 ▷ Los Mejores EDITORES de TEXTO para programar en 2021](https://ciberninjas.com/mejores-editores-texto/)

[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2021](/programar/)

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2021](/15-mejores-lenguajes-programacion/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331109157075936" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331109157075936" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros con los que aprender a programar en Java y con Android, en Español</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331109157075936">Martes, 3 de marzo de 2020</a></blockquote></div>
