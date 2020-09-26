---

author: rosepac
bootstrap: true
comments: false
tags: [Herramientas, Linterna, Github]
thumbnail: /assets/img/blog/github-investigador.webp
feature-img: /assets/img/blog/github-investigador.webp
title: '▷ GitHub Super Linterna: Una linterna para gobernarlas a todas'
description: >-
  Configurar un nuevo repositorio con todas las linternas correctas para los diferentes tipos de código puede llevar mucho tiempo y ser tedioso. Github Super Linter es la solución perfecta para eso.
excerpt: >-
  Configurar un nuevo repositorio con todas las linternas correctas para los diferentes tipos de código puede llevar mucho tiempo y ser tedioso. Github Super Linter es la solución perfecta para eso.
canonical_URL: https://ciberninjas.com/github-super-linter/
permalink: /github-super-linter/
date: 2020-06-25 11:42:32
published: true

---

Configurar un nuevo repositorio con todas las linternas correctas para los diferentes tipos de código puede llevar mucho tiempo y ser tedioso.

Se necesitan tantas herramientas y configuraciones que a menudo se requieren más de un lintera para cubrir todos los idiomas utilizados dentro de un solo proyecto de código.

GitHub Super Linter fue construido por el equipo de ingenieros de GitHub Servicios DevOps para intentar tapar ese problema, y ahora pasa a ser de código abierto.
- [**¿Qué es la Super Linterna de Github?**](#qué-es-la-super-linterna-de-github)
- [**¿Cómo funciona la super linterna de Github?**](#cómo-funciona-la-super-linterna-de-github)
- [**Características de Github Super Lint**](#características-de-github-super-lint)
- [**Reglas predeterminadas de la super linterna de Github**](#reglas-predeterminadas-de-la-super-linterna-de-github)

## **¿Qué es la Super Linterna de Github?**

Super Linter es un repositorio de código fuente  que está empaquetado en un contenedor Docker y llamado por GitHub Actions. 

Esto permite que cualquier repositorio en GitHub.com llame al Super Linter y comience a utilizar sus beneficios.

El Super Linter admitirá actualmente muchos idiomas y más en el futuro; por ahora:

- Ansible, CSS, CoffeeScrip, Dockerfile, Golang, JavaScript, JSON, Markdown, Perl, Python3, Ruby, Shell, Terraform, TypeScript, XML, YAML y ENV.

## **¿Cómo funciona la super linterna de Github?**

Cuando hayas configurado tu repositorio para comenzar a ejecutar esta acción, cada vez que abras una solicitud de extracción, comenzarás a alinear el commit del código y regresará a través de la API de estado.

Posteriormente, se te informará si alguno de los cambios del código se realizó con éxito o si se detectaron errores, dónde están y cuáles son.

Esto te va a permitir regresar al punto del error, solucionar cualquier problema encontrado y crear un nuevo "commit" a la solicitud de extracción abierta con anterioridad.

En este punto, la "Super Linterna de Github" se ejecutará nuevamente y validará el código actualizado, repitiendo nuevamente el proceso.

Además, como una medida adicional, puedes configurar las reglas de protección de la rama para asegurarte de que el código debe pasar las pruebas a través de la linterna antes de ser fusionadas.

Existen un montón de opciones de personalización a través de banderas de control y de plantillas que pueden ayudarte a personalizar la Super Linterna dentro de tu propio repositorio individual.

Simplemente debes seguir las instrucciones detalladas en el repositorio de la Super Linter y el wiki de la Super Linterna, puedes encontrar los enalces a continuación.

Esta herramienta también puede ser útil para cualquier repositorio donde conviven múltiples tipos de código y / o documentación (monorepositorio).

[📂 Repositorio de Github Super Lintern](https://github.com/github/super-linter/){: .btn .btn--primaryx .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🔠 Wiki Super Lintern](https://github.com/github/super-linter/wiki){: .btn .btn--inverse .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Características de Github Super Lint**

Super Linter logra resolver muchos problemas a través de la automatización, ofrecienco características como las siguientes:

- Evita que el código roto se cargue en ramas maestras.
- Ayuda a establecer las mejores prácticas de codificación con varios idiomas.
- Crea pautas en el diseño y el formato del código.
- Automatiza el proceso para ayudar a simplificar las revisiones de código.
- Con estos criterios básicos, deberíamos enviar un código mejor, más limpio y más estable internamente y a nuestros clientes y socios.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Reglas predeterminadas de la super linterna de Github**

La estandarización de un conjunto de reglas en la Super Linterna ha sido un desafío interesante, ya que cada desarrollador es único en su forma de codificar.

Es por ello que permitimos que los usuarios usen las mejores reglas personalizadas para su interfaz concreta. Pero, por si no se definen un conjunto de reglas, se deben establecer unas reglas estándar por defecto para que la linterna sea capaz de funcionar.

Por eso, el conjunto de reglas para Ruby y Rails se extrae de la gema Ruby: `rubocop-github` y sigue las mismas reglas que usamos en GitHub.com.

Para otros idiomas, elegimos cuál es el valor predeterminado al instalar las linternas que más se suelen usar para cada uno de ellos, como por ejemplo: `coffeelint` o `yamllint`.

En otros casos, tratamos de encontrar un término medio que establezca unas simples bases y pueda ayudar a establecer buenas prácticas como: `Markdownlint`o `pylint`.

La hermosura de todo esto, es que, desde el primer momento se comenzará a establecer un framework de trabajo común dentro de todo el equipo, y si se necesitará realizar personalizaciones posteriores; nos ofrece una amplia gama de posibilidad de ser implementadas sin demasiado trabajo extra.

Si deseas tener acceso a diferentes plantillas de trabajo, solamente debes ir a la carpeta `TEMPLATE` del repositorio oficial.

[📁 Plantillas predefinidas para la Linterna](https://github.com/github/super-linter/tree/master/TEMPLATES
){: .btn .btn--primary .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

### **Relacionados** <!-- omit in toc -->

[🎓 Aulas de Github: La automatización de las clases de programación](https://ciberninjas.com/github-classroom/)

[🥇 ▷ Aprender Git y Github desde cero](https://ciberninjas.com/github-git-recursos/)

[🥇 Visual Studio integrado en Github: Codespaces](https://ciberninjas.com/codespace-editor-github/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Configurar un nuevo repositorio con todas las linternas correctas para los diferentes tipos de código puede llevar mucho tiempo y ser tedioso. Github Super Linter es la solución perfecta para eso.](/assets/img/blog/github-investigador.webp "Configurar un nuevo repositorio con todas las linternas correctas para los diferentes tipos de código puede llevar mucho tiempo y ser tedioso. Github Super Linter es la solución perfecta para eso.")