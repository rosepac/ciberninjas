---

author: rosepac
bootstrap: true
comments: false
tags:
- 
thumbnail: /assets/img/blog/chrome-rust-vs-c.webp
feature-img: /assets/img/blog/chrome-rust-vs-c.webp
title: '▷ Chrome experimenta con ofrecer soporte para Rust y C++'
description: >-
  Los ingenieros de Chrome están experimentando con Rust. Aunque C++ es el lenguaje reinante en la base del código de Chrome y en un previsible futuro, cualquier implementación de Rust deberá encajar con C ++ y nunca del revés.
excerpt: >-
  Los ingenieros de Chrome están experimentando con Rust. Aunque C++ es el lenguaje reinante en la base del código de Chrome y en un previsible futuro, cualquier implementación de Rust deberá encajar con C ++ y nunca del revés.
canonical_URL: https://ciberninjas.com/interoperabilidad-chrome-rust/
permalink: /interoperabilidad-chrome-rust/
date: 2020-08-20 07:36:46
published: true

---

Los ingenieros de Chrome están experimentando con Rust. Aunque C++ es el lenguaje reinante en la base del código de Chrome y en un previsible futuro, cualquier implementación de Rust deberá encajar con C ++ y nunca del revés.

Esto, parece presentar, algunos desafíos de interoperabilidad entre C ++ y Rust. A los que nadie antes se ha enfrentado.

Según el equipo de ingenieros de Chrome, primero necesita resolver esos posibles problemas, antes de considerar a Rust como (casi) un ciudadano de primera clase dentro del código base de Chrome.

Si no se pueden resolver esos problemas, en el mejor de los casos, Rust estaría aislado a "nodos bajos" que no interactúan mucho con el resto del código; y si eso es todo para lo que podemos usar Rust, eso pondría en duda si los costos de agregar un lenguaje de programación adicional están justificados.

Como C++ es la norma, nos preocupa principalmente la capacidad del nuevo código de Rust para poder llamar al código C++ existente, en vez de realizar las llamadas desde C++ a Rust.

Creemos que es importante para Rust poder llamar y trabajar junto a las funciones de C++, de manera que cumpla con los siguientes criterios:

1. No es necesario utilizar la palabra clave "inseguro" a menos que se sepa que algo es menos seguro que el código normal de C++. Para un rustáceo, esto es controvertido: ¡todo en C ++ no es seguro! Pero "inseguro" debería ser un código muy malo. Si se necesita "inseguro" para todas las llamadas de C++, habrá miles de ellas y la palabra clave "inseguro" perderá su significado. Donde los objetos simplemente se pasan hacia atrás y hacia adelante entre Rust y C++, debemos evitar la palabra 'inseguro'. Debería estar restringido a parches de código Rust realmente inseguro y para código de interoperabilidad C ++ donde hay propiedad compartida u otras complejidades. Esta propiedad en particular ya está satisfecha por la maravillosa biblioteca cxx de dtolnay.
2. Sin gastos generales en el caso general. LTO y la integración entre idiomas ya resuelven esto en principio. Hay casos en los que la sobrecarga es necesaria en el límite de C++, especialmente, la verificación UTF requerida cuando las cadenas se pasan de C++ a Rust. Esto se puede solucionar manejando cadenas como & [u8] en el código Rust, hasta que la manipulación de cadenas sea realmente necesaria, por lo que no necesitamos más innovaciones aquí. Esta casilla está marcada.
3. Sin repetición ni redeclaraciones. Sin anotaciones de C ++. Idealmente, sin lista de permitidos. Si existe una API de C ++, Rust debería poder llamarla. Es así de simple. La declaración en C ++ debería ser suficiente. No debería haber necesidad de una lista de permitidos, una redeclaración en Rust o cualquier calza de Rust. Existirán raras excepciones (por ejemplo, funciones sobrecargadas) y, en algunos casos, querremos crear un contenedor Rust idiomático, pero en general, eso no debería ser necesario. Esta no es solo una preferencia estética. Nuestro código base es complejo y contaminarlo con anotaciones adicionales sería un impuesto pequeño, pero notable, sobre cómo trabajan todos.
4. Soporte de tipo amplio - con seguridad. cxx es el estado actual de la técnica para el intercambio seguro de datos entre C ++ y Rust. Nuestra biblioteca " base " expone 1768 API que son utilizadas por otras partes de Chrome. 1052 de esas funciones solo toman parámetros que son tipos que ya pueden ser compatibles con cxx. Se planean 12 más a corto plazo para cxx (por ejemplo, cortes más flexibles). Eso es ~ 60% de nuestras API, lo cual es bueno pero no excelente. Se puede admitir otro 12% si podemos pasar std :: string y tipos de cadenas similares a las API de C ++ existentes. Estos no se pueden representar en una estructura de Rust debido a un puntero interno, pero como cxx genera código tanto en el lado de C ++ como en el de Rust, debería ser posible poseer un UniquePtr <CxxString> en el lado de Rust, todavía pasarlo a una API de C ++ existente que toma un std :: string por valor. (Eso suena bastante sencillo, pero se vuelve mucho más complejo cuando se habla de estructuras que contienen std :: strings, como url :: Origin . Dicha estructura solo podría ser propiedad de UniquePtr <tipo opaco> desde el lado de Rust , lo que evitaría el acceso al campo. Se pueden imaginar soluciones, pero es necesario pensar más.) Otro ~ 20% son funciones que toman parámetros de puntero; en nuestro caso, estos son muy a menudo parámetros externos . Necesitamos ver cómo podemos identificar programáticamente aquellos que son parámetros de salida 'simples' y permitir que Rust los complete de manera segura.
La buena noticia es que esto deja solo el 8% de nuestras funciones que no pueden ser compatibles con el modelo de interoperabilidad cxx. La mayoría de estos están pasando estructuras C ++ (por valor) que tienen punteros sin procesar dentro de ellos . Esto parece en gran parte insoluble en Rust, pero son tan raros que podemos crear envoltorios idiomáticos caso por caso. Aquí hay algunas advertencias: este análisis se basa en símbolos exportados por el binario, en lugar del análisis del código fuente. En algunos casos, estas API se incluirían en funciones en línea, plantillas o macros, que este análisis ignora. También ignora los valores de retorno y el acceso directo al campo. Y, por supuesto, "base" no es el único conjunto de API que nuestro código necesitaría llamar; es probable que las funciones de nivel superior tengan argumentos más complejos en promedio
5. Ergonomía, con seguridad. A partir del código de Rust, necesitamos poder crear instancias de objetos C ++, pasar de forma segura la propiedad (no hay problemas significativos con UniquePtr de cxx aquí), llamar a métodos en ellos (tanto simples como virtuales). Para los tipos de "datos antiguos sin formato" en C ++, que contienen campos simples compatibles con cxx, necesitamos poder manipular esos campos. La mayor parte de esto ya se puede lograr con cxx (aunque necesitamos una forma de llamar a std :: make_unique desde el código de Rust para un tipo que es opaco para Rust). Necesitamos que esto sea lo suficientemente fluido como para no tener que envolver un tipo C ++ típico en un contenedor de Rust.
Hasta aquí todo bien. Pero también necesitamos: actuar (en el tiempo de compilación de Rust) sobre las #defines establecidas por nuestros encabezados de C ++ y reglas de tiempo de compilación, idear un plan para llamar a las funciones y operadores sobrecargados de C ++, llamar a macros (por ejemplo, LOG (ERROR) << "Eek"), hacer que las funciones y tipos de plantilla estén disponibles (posiblemente muy difícil, aunque bindgen hace un trabajo notablemente bueno aquí), y probablemente muchas otras cosas en las que aún no hemos pensado. Puede ser que la mejor manera de manejar algunos de estos casos sea algún código C ++ en línea dentro de Rust (como la caja cpp pero con el beneficio de la seguridad de cxx). Un desafío específico son los objetos contados por referencia.
Necesitamos que el recuento de referencias se comparta entre los árbitros del lado de Rust y Chrome. El mayor desafío aquí es cómo lidiar con la prevalencia de múltiples referencias mutables en el lado de C ++, sin la capacidad de hacer algo como RefCell ::dered_mut para garantizar incluso la seguridad del tiempo de ejecución. Puede ser que necesitemos marcar la participación con todos los objetos contados por referencias como verdaderamente 'inseguro' desde el lado de Rust. En general, pensamos que podemos vivir sin los tipos Rust heredados de los tipos C ++, pero hay una excepción: observadores virtuales puros. cxx proporciona la capacidad de pasar punteros de función de Rust a C ++ , por lo que es muy posible que creemos tipos de contenedor aquí. Idealmente, sin embargo, esto también se vuelve ergonómico y sin costuras. Se necesita más investigación aquí.
6. Lo que no necesitamos. Creemos que podemos vivir sin: tipos de C ++ autorreferenciales que se pasen por valor a Rust (a excepción de las cadenas), tipos de Rust que hereden de tipos C ++ virtuales no puros; argumentos variados, recuento de referencias "seguro". (Habrá casos en los que la ausencia de estas características resulte molesta, pero con suerte rara). Todo esto puede estar mal: todavía tenemos mucho que aprender.

## **El plan del equipo de Chrome para Rust**

Creemos que la parte más difícil de esto es imaginar una forma segura de pasar tipos entre Rust y C++. Eso requiere un código de corrección generado automáticamente en el lado de Rust y C ++. Eso ya lo ha logrado cxx con excelentes propiedades de seguridad emergente. Y ese es nuestro modelo básico.

Pero no queremos especificar una sección cxx :: bridge para cada API. Por lo tanto, necesitamos que cxx :: bridge se genere con una herramienta similar a bindgen .

No creemos que sean necesarios cambios en el idioma de Rust . Algunos tipos de C ++ no pueden ser propiedad de valor en Rust, por ejemplo, std :: string con su puntero autorreferencial, pero creemos que se puede lograr una buena interoperabilidad de C ++ incluso si Rust solo puede poseer dichos objetos por puntero. ¡Podemos estar equivocados aquí también!

Por ahora, la inversión de Chrome en Rust seguirá siendo una investigación de antecedentes (principalmente dirigida a la creación de prototipos de estas herramientas y técnicas). Si nos convencemos de que este tipo de interoperabilidad es posible, revisaremos el uso generalizado de Rust en Chrome, y en ese momento planeamos trabajar duro para lograrlo con soluciones sólidas de calidad de producción.
<!-- https://alexene.dev/2020/08/17/webassembly-without-the-browser-part-1.html , https://news.ycombinator.com/item?id=24180303 -->

### **Relacionados** <!-- omit in toc -->

[▷ Sentando las bases para el futuro de Rust](https://ciberninjas.com/rust-bases-de-futuro/)

[▷ A los desarrolladores les encanta el lenguaje de programación Rust](https://ciberninjas.com/desarrolladores-lenguaje-rust/)

[El lenguaje de programación Rust entra por primera vez, entre los más populares](https://ciberninjas.com/lenguajes-programaci%C3%B3n-ranking-rust/)

[▷ Bevy: Un motor de videojuegos construido en Rust](https://ciberninjas.com/bevy-motor-videojuegos-rust/)

[▷ Nueva sintaxis de ensamblaje para Rust dentro de Nightly](https://ciberninjas.com/sintaxis-rust-nightly/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![](/assets/img/blog/chrome-rust-vs-c.webp)

> **Fuente**: [Blog de Chromium](https://www.chromium.org/Home/chromium-security/memory-safety/rust-and-c-interoperability){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.