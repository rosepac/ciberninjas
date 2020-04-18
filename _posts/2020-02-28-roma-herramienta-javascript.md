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
title: '🔥 ▷ Rome, ¿La Mejor Herramienta para Javascript jamás creada?'
description: >-
  Rome, un todo en uno para Javascript. Posiblemente, la mejor herramientas jamás creada para el uso de JavaScript; incluye un conjunto de: compilador, linterna, formateador, bundler, marco de pruebas y más.
excerpt: >-
  Rome, un todo en uno para Javascript. Posiblemente, la mejor herramientas jamás creada para el uso de JavaScript; incluye un conjunto de: compilador, linterna, formateador, bundler, marco de pruebas y más.
canonical_URL: https://ciberninjas.com/roma-herramienta-javascript/
permalink: /roma-herramienta-javascript/
date: 2020-02-28 11:30:32
last_modified_at: 
published: true

---

![Rome: La herramienta perfecta para Javascript creada por el equipo del Framework React de Facebook](/assets/images/blog/roma-tool-transparente.webp "Rome: La herramienta perfecta para Javascript creada por el equipo del Framework React de Facebook")

Rome es experimental y en desarrollo activo. Está abierto para contribuyentes y aquellos interesados ​​en herramientas experimentales.

## **Historia de Rome**

- **Rome** fue iniciada por [Sebastian McKenzie](https://twitter.com/sebmck){:target="_blank"} , el autor de [Babel](https://babeljs.io/){:target="_blank"} and [Yarn](https://yarnpkg.com/){:target="_blank"}.
- **Rome** es un proyecto del equipo [React Native](https://github.com/facebook/react-native/){:target="_blank"} de Facebook.
- **Rome** recibe su nombre de proverbios como "Todos los caminos llevan a Rome", "Rome no se construyó en un día" y "Cuando en Rome, haga lo que hacen los Romenos". Esto se refiere al alcance expansivo y al deseo de conformidad en todo el proyecto. Comenzó como una bRome en la oficina.
- **Rome** tiene el logotipo de un casco espartano griego antiguo. No es muy relevante ya que no es Romeno, pero se ve más genial que una [Galea](https://en.wikipedia.org/wiki/Galea_(helmet)){:target="_blank"}.

## **Características de Rome**

- **Rome** es una cadena de herramientas JavaScript experimental. Incluye un compilador, linter, formateador, bundler, marco de prueba y más. Su objetivo es ser una herramienta integral para todo lo relacionado con el procesamiento del código fuente de JavaScript.
- **Rome** no es una colección de herramientas existentes. Todos los componentes son personalizados y no utilizan dependencias de terceros.
- **Rome** es experimental y en desarrollo activo. Está abierto para contribuyentes y aquellos interesados en herramientas experimentales. **No está listo para su uso en producción. La única forma de usarlo es construir desde la fuente.**
- **Rome** pretende ser un reemplazo para muchas herramientas JavaScript existentes. Sin embargo, ofreceremos integraciones para componentes en otras herramientas. Por ejemplo, usar el compilador de Rome como complemento para otro paquete.

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331101370410048" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331101370410048" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros para Aprender Javascript y más, en español 💻</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331101370410048">Martes, 3 de marzo de 2020</a></blockquote></div>

## **Código Base de Rome**

- **Rome** está escrito completamente en TypeScript con un uso moderado de tipos sueltos.
- **Rome** es un monorepo con [paquetes internos](https://github.com/facebookexperimental/rome/blob/master/packages/@romejs){:target="_blank"} para delinear los límites del código.
- **Rome** es [autohospedada](https://en.wikipedia.org/wiki/Self-hosting_(compilers)){:target="_blank"} y se compila con una versión antigua.
- **Rome** admite el procesamiento de [JSX](https://reactjs.org/docs/introducing-jsx.html){:target="_blank"}, así como el código anotado [Flow](https://flow.org/){:target="_blank"} y [TypeScript](https://www.typescriptlang.org/){:target="_blank"} .

## **Filosofía de Rome**

Esta lista incluye el carácter general que debe cumplir el proyecto. Esta lista no es completa. Algunos de estos son obvios pero se declaran completos.

### **Gestión del Proyecto de Rome**

- **Establecer expectativas claras.** Haga conocer la intención y las decisiones del proyecto con suficiente antelación. Nada debería ser una sorpresa.
- **Transparencia.** Sin gestión de proyectos de canal posterior. La conversación y las decisiones del proyecto se llevarán a cabo solo en foros públicos como GitHub, Rome Discord y Twitter. La única excepción a esto son las decisiones de moderación que se harán estrictamente en privado.

### Tecnicismos

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

## **Empezando con Rome**

Para configurar Rome en un proyecto, todo lo que necesita es un `rome.json`archivo.

```
$ mkdir hello-world 
$ cd hello-world 
$ echo  ' {} '  > rome.json
```

Este archivo se utiliza para configurar Rome e indica los límites de su proyecto.

Consulte [los primeros pasos](https://github.com/facebookexperimental/rome/blob/master/docs/getting-started.md){:target="_blank"} para obtener más instrucciones de uso.

## **Instalación de Rome**

###  Antes de continuar

Para instalar Rome, debe tener `node` y `npm` instalado en su sistema. Si no tiene `node` e `npm` instalado, instálelos antes de continuar.

## [Clonación y construcción](https://romejs.dev/docs/introduction/installation#cloning-and-building){:target="_blank"}

Rome no está disponible a través de `npm` y debe instalarse desde GitHub. En una carpeta de su elección, clone el `rome` repositorio:

```bash
git clone https://github.com/facebookexperimental/rome
```

Luego, navega hacia él y construye `rome`:

```bash
cd rome; ./scripts/build-release dist
```

En la compilación de Windows 10 `rome` con el siguiente comando con PowerShell 7:

```powershell
cd rome && node scripts/build-release dist
```

Ahora, instale `rome`globalmente:

```undefined
npm install -g ./dist/
```

¡Felicidades! Rome está instalada.

Cuando llegue el momento de actualizar Rome, repita el proceso anterior. `npm`sobrescribirá automáticamente su instalación existente de Rome con la nueva versión.

## **Cómo empezar a usar Rome**

Si bien Rome busca cumplir el papel de muchas herramientas en el ecosistema de JavaScript, puede integrarse en proyectos existentes y usarse tanto o tan poco como desee.

### **[Integrando Rome](https://romejs.dev/docs/introduction/getting-started#integrating-rome)**

Primero, navegue a la carpeta de su proyecto:

```bash
cd my_existing_project
```

Ahora, cree una configuración de Rome para su proyecto. Cuando se le solicite, use la configuración recomendada:

```bash
rome init
```

### **[¿Qué hicimos?](https://romejs.dev/docs/introduction/getting-started#what-did-we-do)**

La ejecución `rome init` con la configuración recomendada crea un archivo de configuración de Rome `rome.json`, que se ve así:

```json
{  "version": "^0.0.52",  "lint": {    "enabled": true  }}
```

Este archivo le dice a `rome` que debe ser al menos la versión 0.0.52 para trabajar con su proyecto, y que debe alinear su código. Si desea deshabilitar el linting o aplicar configuraciones avanzadas, consulte la documentacion con `rome init`.

### **[Ejecutando su código](https://romejs.dev/docs/introduction/getting-started#running-your-code){:target="_blank"}**


El comando `rome run` ejecutará cualquier archivo que se le pase. Use este comando con el archivo principal de su proyecto, por ejemplo:

```bash
rome run index.js
```

Rome todavía está en desarrollo activo y es posible que no pueda procesar correctamente todos los archivos fuente. Si puede ejecutar un archivo con `node` pero no con `rome`, [cree un problema](https://github.com/facebookexperimental/rome/issues/new?labels=bug&template=01_bug.md&title=){:target="_blank"}

## [Otros comandos](https://romejs.dev/docs/introduction/getting-started#other-commands)

### **[lint](https://romejs.dev/docs/introduction/getting-started#lint)**

Este comando alineará un archivo con un conjunto de pelusas predeterminadas y mostrará los diagnósticos producidos. Cuando se ejecuta sin argumentos, todos los archivos JavaScript en un proyecto están alineados. Por ejemplo:

```bash
rome lint file.js
```

### **[compile](https://romejs.dev/docs/introduction/getting-started#compile)**

Este comando compilará un archivo con un conjunto de transformaciones predeterminadas. Actualmente no hay opciones para que este comando especifique un subconjunto de transformaciones.

```undefined
rome compile file.js
```

### **[parse](https://romejs.dev/docs/introduction/getting-started#parse)**

Este comando analizará un archivo y generará un AST bastante formateado.

```
rome parse file.js
```

## Licencia

**Rome** tiene [licencia del MIT](https://github.com/facebookexperimental/rome/blob/master/LICENSE){:target="_blank"} y el proyecto se gestiona bajo el [Código de Conducta del Pacto](https://github.com/facebookexperimental/rome/blob/master/.github/CODE_OF_CONDUCT.md){:target="_blank"} del [Colaborador](https://github.com/facebookexperimental/rome/blob/master/.github/CODE_OF_CONDUCT.md){:target="_blank"}.
**Fuente**\: [Repositorio de Github](https://github.com/facebookexperimental/rome "Repositorio de Github"){:target="_blank"}
{: .notice--info}

## Relacionados

[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331101370410048" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331101370410048" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros para Aprender Javascript y más, en español 💻</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331101370410048">Martes, 3 de marzo de 2020</a></blockquote></div>