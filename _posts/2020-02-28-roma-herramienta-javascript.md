---

author_profile: true
comments: false
classes: wide
tags:
- Herramientas Javascript
- Facebook
categories:
- Javascript
header:
  teaser: /assets/images/blog/roma-tool-transparente.webp
title: '🔥 ▷ Roma: ¿La Mejor Herramienta para Javascript jamás creada?'
description: >-
  Roma, un todo en uno para Javascript.Posiblemente, la mejor herramientas jamás creada para el uso de JavaScript; incluye un conjunto de: compilador, linterna, formateador, bundler, marco de pruebas y más.
excerpt: >-
  Roma, un todo en uno para Javascript.Posiblemente, la mejor herramientas jamás creada para el uso de JavaScript; incluye un conjunto de: compilador, linterna, formateador, bundler, marco de pruebas y más.
canonical_URL: https://ciberninjas.com/roma-herramienta-javascript/
permalink: /roma-herramienta-javascript/
date: 2020-02-28 11:30:32
last_modified_at: 
published: true

---

![Roma: La herramienta perfecta para Javascript creada por el equipo del Framework React de Facebook](/assets/images/blog/roma-tool-transparente.webp "Roma: La herramienta perfecta para Javascript creada por el equipo del Framework React de Facebook")

**Roma** es una cadena de herramientas JavaScript experimental. Incluye un compilador, linter, formateador, bundler, marco de prueba y más. Su objetivo es ser una herramienta integral para todo lo relacionado con el procesamiento del código fuente de JavaScript.

**Roma** no es una colección de herramientas existentes. Todos los componentes son personalizados y no utilizan dependencias de terceros.

**Roma** es experimental y en desarrollo activo. Está abierto para contribuyentes y aquellos interesados en herramientas experimentales. **No está listo para su uso en producción. La única forma de usarlo es construir desde la fuente.**

**Roma** pretende ser un reemplazo para muchas herramientas JavaScript existentes. Sin embargo, ofreceremos integraciones para componentes en otras herramientas. Por ejemplo, usar el compilador de Roma como complemento para otro paquete.

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331101370410048" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331101370410048" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros para Aprender Javascript y más, en español 💻</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331101370410048">Martes, 3 de marzo de 2020</a></blockquote></div>

## Historia

**Roma** fue iniciada por [Sebastian McKenzie](https://twitter.com/sebmck){:target="_blank"} , el autor de [Babel](https://babeljs.io/){:target="_blank"} and [Yarn](https://yarnpkg.com/){:target="_blank"}.

**Roma** es un proyecto del equipo [React Native](https://github.com/facebook/react-native/){:target="_blank"} de Facebook.

**Roma** recibe su nombre de proverbios como "Todos los caminos llevan a Roma", "Roma no se construyó en un día" y "Cuando en Roma, haga lo que hacen los romanos". Esto se refiere al alcance expansivo y al deseo de conformidad en todo el proyecto. Comenzó como una broma en la oficina.

**Roma** tiene el logotipo de un casco espartano griego antiguo. No es muy relevante ya que no es romano, pero se ve más genial que una [Galea](https://en.wikipedia.org/wiki/Galea_(helmet)){:target="_blank"}.

## Codebase

**Roma** está escrito completamente en TypeScript con un uso moderado de tipos sueltos.

**Roma** es un monorepo con [paquetes internos](https://github.com/facebookexperimental/rome/blob/master/packages/@romejs){:target="_blank"} para delinear los límites del código.

**Roma** es [autohospedada](https://en.wikipedia.org/wiki/Self-hosting_(compilers)){:target="_blank"} y se compila con una versión antigua.

**Roma** admite el procesamiento de [JSX](https://reactjs.org/docs/introducing-jsx.html){:target="_blank"}, así como el código anotado [Flow](https://flow.org/){:target="_blank"} y [TypeScript](https://www.typescriptlang.org/){:target="_blank"} .

## Empezando

Para configurar Roma en un proyecto, todo lo que necesita es un `rome.json`archivo.

```
$ mkdir hello-world 
$ cd hello-world 
$ echo  ' {} '  > rome.json
```

Este archivo se utiliza para configurar Roma e indica los límites de su proyecto.

Consulte [Primeros pasos](https://github.com/facebookexperimental/rome/blob/master/docs/getting-started.md){:target="_blank"} para obtener más instrucciones de uso.

## Filosofía

Esta lista incluye el carácter general que debe cumplir el proyecto. Esta lista no es completa. Algunos de estos son obvios pero se declaran completos.

### Gestión de proyectos

- **Establecer expectativas claras.** Haga conocer la intención y las decisiones del proyecto con suficiente antelación. Nada debería ser una sorpresa.
- **Transparencia.** Sin gestión de proyectos de canal posterior. La conversación y las decisiones del proyecto se llevarán a cabo solo en foros públicos como GitHub, Roma Discord y Twitter. La única excepción a esto son las decisiones de moderación que se harán estrictamente en privado.

### Técnico

- **Sin dependencias externas.** Esto nos permite desarrollarnos más rápido y proporcionar una experiencia más coherente al integrar las bibliotecas internas de manera más estrecha y compartir conceptos y abstracciones. Siempre existen oportunidades para tener una mejor experiencia al tener algo especialmente diseñado.
- **Los errores deben sugerir correcciones y sugerencias cuando sea posible.** Deben inferirse y filtrarse del uso para reducir la aparición de mensajes irrelevantes e inútiles.
- **Mensajes de error únicos y específicos.** No hay mensajes de error genéricos. Esto no solo ayuda a los usuarios a comprender qué salió mal, sino que también debe proporcionar a los encargados de mantenimiento un sitio de llamadas único y la información necesaria para depurar.
- **Minimizar API.** Cuestionar la existencia de todas las opciones y banderas. ¿Son necesarios? ¿Se pueden combinar? ¿Cómo podemos reducir la ramificación de código?
- **Reduce la jerga.** No asuma que los usuarios comprenderán la terminología específica. Esforzarse por proporcionar un significado claro para expertos y principiantes. Por ejemplo, use "carácter" donde tradicionalmente usaría "token" cuando produzca errores de analizador.
- **Utilice la verbosidad al nombrar comandos y banderas.** No hay abreviaturas innecesarias y confusas.
- **Use terminología inclusiva.** Usa pronombres neutros en cuanto al género. Sin insultos capaces. No se utilizan términos que puedan considerarse insensibles.
- **Construir para clientes genéricos.** No asuma que la salida solo será consumida por un terminal y utilizando códigos ANSI. Utilice abstracciones que se puedan generalizar para ver en un IDE, navegador u otros entornos.
- **Usa tipos fuertes.** No use tipos sueltos como `any`. Donde sea posible, refine y valide la entrada. Apunta a los tipos de sonido.
- **La salida del terminal no debe ser ambigua.** Al diseñar la salida del terminal, no confíe únicamente en las señales de formato como el color. Siempre use una combinación de formato, símbolos y espaciado. Si se eliminan todos los códigos ANSI, toda la salida aún debe entenderse.

## Licencia

**Roma** tiene [licencia del MIT](https://github.com/facebookexperimental/rome/blob/master/LICENSE){:target="_blank"} y el proyecto se gestiona bajo el [Código de Conducta del Pacto](https://github.com/facebookexperimental/rome/blob/master/.github/CODE_OF_CONDUCT.md){:target="_blank"} del [Colaborador](https://github.com/facebookexperimental/rome/blob/master/.github/CODE_OF_CONDUCT.md){:target="_blank"}.
**Fuente**\: [Repositorio de Github](https://github.com/facebookexperimental/rome "Repositorio de Github"){:target="_blank"}
{: .notice--info}

## Relacionados

[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331101370410048" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331101370410048" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros para Aprender Javascript y más, en español 💻</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331101370410048">Martes, 3 de marzo de 2020</a></blockquote></div>