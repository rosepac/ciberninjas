---

author_profile: true
comments: false
classes: wide
tags:
- PHP
- Nodejs
categories:
- Lenguajes de Programación
header:
  teaser: /assets/images/blog/
title: 'PHP vs NodeJS'
description: >-
  'Breve análisis sobre .'
excerpt: >-
  'Breve análisis sobre .'
canonical_URL: https://ciberninjas.com/php-vs-nodejs/
permalink: /php-vs-nodejs/
date: 2020-05-28 09:46:32
last_modified_at: 
published: true

---

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

<!-- https://www.geeksforgeeks.org/php-vs-node-js/ -->
PHP y Node.js se utilizan para el desarrollo del lado del servidor y, por lo tanto, se han convertido en competidores entre sí. A continuación se presentan algunas diferencias basadas en diferentes parámetros para comprender los dos y tomar una decisión entre uno de los dos gigantes.

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

## **Sobre PHP**

PHP es un acrónimo de Hyptertext Preprocessor creado por Rasmus Lerdorf en 1994. PHP es un lenguaje de script de código abierto del lado del servidor diseñado específicamente para el desarrollo web. Aunque PHP es un lenguaje de script del lado del servidor, también se usa como un lenguaje de script de propósito general. Los scripts PHP tienen una extensión de .php y pueden contener Javascript, HTML, CSS e incluso texto sin formato.

## **Sobre NodeJS**

Node.js es un entorno de tiempo de ejecución Javascript de código abierto del lado del servidor creado en el motor JavaScript de Chrome (V8) . Node.js se utiliza para crear aplicaciones rápidas y escalables y es un modelo de E / S sin bloqueo controlado por eventos. Los archivos Node.js tienen la extensión .js y contienen solo Javascript.

Su autor original es Ryan Dahl y fue lanzado inicialmente el 27 de mayo de 2009. Con el nacimiento de Node.js, brinda a los usuarios la posibilidad de crear aplicaciones completamente basadas en Javascript .

## **Sintaxis y acceso a la línea de comandos**

En PHP `$ php -i` en NodeJS `$ node`

## **Ejemplo de Hola en PHP y Node.js**

Los siguientes fragmentos comparan el programa de impresión 'Hello World' en ambos idiomas:

```
// Escribir ¡Hola Ciberninjas! en PHP
echo '¡Hola Ciberninjas!';
```

```
console.log('¡Hola Ciberninjas!'); 
```

Puedes ejecutar el código de Nodejs mediante el módulo [REPL](https://nodejs.org/api/repl.html){:target="blank" rel="nofollow,noreferrer"}.
{: .notice--info}

🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/) >> [mejores regalos 2 - 🎁](/prime-day-amazon/)
{: .notice--danger}

## **PHP y NodeJS: ¿Código síncronos o asíncrono?**

El código síncrono se ejecuta línea por línea y procede a ejecutar la siguiente línea de código cuando se ha ejecutado la línea actual. El código asincróno ejecuta todo el código al mismo tiempo.

PHP es síncrono, pero hay algunas API que se comportan de forma asíncrona aparte de la parte síncrono. El problema de ser síncrono se puede entender con un simple ejemplo; supongamos que la primera línea de código tiene una función que lleva mucho tiempo ejecutar. Ahora, debido a la naturaleza síncrona, las siguientes líneas de código tienen que esperar su turno y se ejecutarán solo después de que se ejecute la función inicial. Esto hace que sea más lento y que el usuario deba esperar.

Node.js es de naturaleza asíncrona, lo que significa que el motor de JavaScript ejecuta todo el código de una vez y no espera a que regrese una función. Las líneas de código debajo de la función se ejecutarán y la función también se ejecutará y devolverá la salida una vez ejecutado todo por completo y, por lo tanto, esto va a hacer que Node.js ofrezca una ejecución mucho más rápida.

En Javascript, a veces, si es necesario encadenar muchas funciones; los programas pueden terminar en una 'bucle infinito de devoluciones de llamadas' que requieran los datos de funciones anteriores dentro de la siguiente función.

En Node.js, sin embargo, puedes resolverlo gracias a su funcionamiento asíncrono y sus funciones "Async / Await" que te permiten que un bloque de código se ejecute sincrónicamente a pesar de que en bloques anteriores existan posibles errores.

## **Interruptores de Contexto de PHP y NodeJS**

Al escribir el código final en PHP, el usuario cambia continuamente entre diferentes idiomas y sintaxis. Esto se debe a que PHP se usa predominantemente como parte de la pila LAMP que incluye MySQL (para la base de datos), PHP (para el código del lado del servidor) y Linux; y todos tienen una sintaxis diferente y se requiere un buen conocimiento de HTML, CSS y Javascript.

Dado que Node.js está escrito en JavaScript, hace que los lados del lado del servidor y del lado del cliente estén basados ​​en JavaScript, por lo que no hay necesidad de cambiar entre los idiomas. La pila de Javascript (MEAN o MERN) es mejor porque el único lenguaje de codificación y sintaxis utilizada está basado siempre en Javascript.

## **Módulos de PHP y NodeJS**

PHP utiliza tecnologías de instalación de módulos como PEAR (un sistema de paquetes veterano) o Composer.

- PEAR es un framework y sistema de distribución para componentes PHP reutilizables.
- Composer es una herramienta para la gestión de dependencias en PHP que permite a los usuarios declarar las bibliotecas de las que depende el proyecto y las administrará (instalará / actualizará) para facilitar esos pasos al usuario.

Node.js viene incluido con un sistema de administración de paquetes llamado NPM (Node Package Manager) y es fácil de usar y publicar a través de comandos.

## **Frameworks de PHP y NodeJS**

PHP es un lenguaje de scripting del lado del servidor muy popular y tiene muchos frameworks que ayudan y facilitan el desarrollo del back-end. Algunos de ellos son: Laravel, Symfony, CodeIgniter, Cakephp, Yi,, Zend, Falcon, Drupal, etc. Estos frameworks ayudan en el desarrollo de aplicaciones web ágiles, robustas y seguras.

NodeJS, nos permite asociarlo junto a frameworks como Express o los frameworks Meteor y Derby; que quizás sea los más populares. Además, nuevos frameworks siguen apareciendo constantemente como por ejemplo: koa.js, hapi, total.js, sails.js, etc.

## **Bases de Datos para PHP y NodeJS**

PHP se usa en colaboración con bases de datos relacionales / tradicionales como MySQL, MariaDB, PostgreSQL, etc. Sin embargo, también hay formas de usar sistemas de bases de datos NoSQL con PHP, pero no son muy populares.

Node.js funciona perfectamente con bases de datos NoSQL (no solo SQL) como MongoDB, CouchDB y sistemas de bases de datos gráficas como Neo4j. Existen paquetes NPM para casi todas las bases de datos dentro de los repositorios de paquetes de npm.

Puntos negativos de PHP respecto a los sistemas de bases de datos. Las bases de datos MySQL son especialmente propensos a ataques por inyecciones SQL, scripting cruzado (XSS) y otros.

Puntos negativos de Node.js respecto a los sistemas de bases de datos. Aunque no son tan comunes, los ataques de inyección NoSQL son una vulnerabilidad documentada; pero en comparación con las inyecciones SQL, son insignificantes. La razón principal de esto es que son software más nuevos y sus diseños de código es tal, que son inherentemente resistentes a tales ataques.

## **Servidores Web para PHP y Node.js**

Para las versiones anteriores a 5.4, los servidores LAMP y XAMPP (acrónimo de Cross -platform, A pache, M ariaDB, P HP) tuvieron que configurarse.
Pero a partir de la v5.4, PHP viene con un servidor de desarrollo incorporado que puede usarse.

Nodejs fue desarrollado para las aplicaciones de red. Se entrega con algunos módulos centrales como http, DNS, sistema de archivos, etc., que ayudan a desarrollar servidores web personalizados. Algunos frameworks realmente populares para alimentar a Node.js y ejecutarlo junto a un servidor web son Express.js, koa.js y Sails.js, que pueden configurarse utilizando tan solamente 4 líneas de código como máximo.

El servidor web PHP se proporcionó para ayudar al desarrollo de aplicaciones y no se puede utilizar de manera eficiente como un servidor web completo.

En Node.js, los servidores web propios se pueden codificar. Estos servidores tienen el potencial de una gran escalabilidad si se configuran y supervisan correctamente.

## **Dominios de Aplicación de PHP y NodeJS**

### **Dominios de aplicación de PHP**

- Es utilizado en el desarrollo de aplicaciones intensivas en CPU como aplicaciones de meteorología y aplicaciones científicas.
- LAMP stack se usa en el desarrollo de API.
- Los CMS (Content Managemtn Systems) como WordPress, Drupal también usan PHP, lo que permite su uso en la creación de blogs, sitios web, sitios de comercio electrónico, etc.

PHP debe usarse en aplicaciones en las que el cliente no tiene que interactuar con el servidor una y otra vez y Node.js debe usarse para las aplicaciones que requieren mucha interacción entre el cliente y el servidor.

### **Dominios de aplicación de Node.js**

- Nodejs es ideal para desarrollar soluciones del lado del servidor altamente escalables debido a su E / S sin bloqueo y su modelo basado en eventos.
- Es usado masivamente en aplicaciones en tiempo real como aplicaciones de chat, blogs, aplicaciones de transmisión de video.
- Se utiliza en el desarrollo de aplicaciones de una sola página, como carteras de currículums, sitios web estáticos, etc.

#### Relacionados

[¿Por qué Python es mejor que PHP?](https://ciberninjas.com/porque-python-es-mejor-que-php/)

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}
