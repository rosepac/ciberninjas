---

author: rosepac
bootstrap: true
comments: false
tags:
- Javascript
categories:
- Lenguajes Programación
thumbnail: /assets/img/blog/javascript-6.webp
feature-img: /assets/img/blog/javascript-6.webp
title: '🚀 ▷ Introducción a las nuevas características de Javascript 6'
description: >-
  JavaScript ES6 trae una nueva sintaxis y nuevas características increíbles para hacer que su código sea más moderno y más legible. 
excerpt: >-
  JavaScript ES6 trae una nueva sintaxis y nuevas características increíbles para hacer que su código sea más moderno y más legible. 
canonical_URL: https://ciberninjas.com/javascript-6/
permalink: /javascript-6/
date: 2020-04-28 00:32:32
last_modified_at: 
published: true

---

![Las mejores novedades de Javascript 6](/assets/img/blog/javascript-6.webp "Las mejores novedades de Javascript 6")

JavaScript ES6 trae una nueva sintaxis y nuevas características increíbles para hacer que su código sea más moderno y más legible. Le permite escribir menos código y hacer más. ES6 nos presenta muchas características excelentes.

En este artículo, exploraremos cinco de estas características de ES6 y consideraremos cómo podemos utilizarlas para mejorar nuestro código JavaScript. Estas son las características de interés:

> 🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

## **1. Literales de plantilla**

En ES6, se introdujeron literales de plantilla para abordar algunos desafíos asociados con el formato y la representación de cadenas. Con los literales de plantilla, puede crear cadenas de varias líneas con facilidad. También permite realizar sustituciones mejoradas de cadenas y un formato adecuado de cadenas aparentemente peligrosas, como las cadenas que se incrustarán en HTML.

Antes de ES6, las cadenas están delimitadas por un par de *comillas simples* ( `‘string’`) o un par de *comillas dobles* ( `“string”`). En ES6, las cadenas también se pueden delimitar mediante un par de *ticks* de *retroceso* ( `string`). Tales cadenas se llaman **literales de plantilla** .

Al igual que con los delimitadores de comillas simples y dobles, las marcas de retroceso también se pueden escapar en literales de plantilla si la cadena contiene un carácter de marca de retroceso. Para escapar de un carácter de retroceso en una plantilla literal, se debe colocar una barra diagonal () antes del carácter de retroceso. Sin embargo, tenga en cuenta que las comillas simples y dobles no necesitan escaparse en literales de plantilla.

Aquí hay un ejemplo simple:

```
const greeting = `Good morning!`;
const shortcut = ``cmd` + `shift` + `G``;

console.log(greeting); // "Good morning!"
console.log(shortcut); // "`cmd` + `shift` + `G`"
```

El uso de literales de plantilla de esta manera no es muy diferente del uso de cadenas de JavaScript regulares delimitadas por comillas. Comenzamos a obtener las ventajas reales cuando se trata de *cadenas multilínea* , *sustituciones de cadenas* y *plantillas etiquetadas* .

### Cuerdas multilínea

Antes de ES6, las cadenas en JavaScript se limitaban a una sola línea. Sin embargo, terminar una línea con una barra diagonal inversa () antes de comenzar una nueva línea hizo posible crear cadenas de varias líneas aparentes aunque las nuevas líneas no se muestren en la cadena:



```
const message = "Hello Glad, 
Your meeting is scheduled for noon today.";

console.log(message);
// Hello Glad, Your meeting is scheduled for noon today.
```

Si desea generar una nueva línea en la cadena, deberá usar la secuencia de escape de nueva línea ( `n`) antes de la nueva línea:

```
const message = "Hello Glad,n
Your meeting is scheduled for noon today.";

console.log(message);
// Hello Glad,
// Your meeting is scheduled for noon today.
```

> Con los literales de plantilla ES6, la cadena se genera con el formato intacto.

Todas las líneas nuevas y espacios en blanco en la cadena se conservan, lo que hace que las cadenas de líneas múltiples sean fáciles de crear sin ninguna sintaxis adicional. Sin embargo, dado que se conservan los espacios en blanco, se debe tener cuidado al sangrar la cadena.

Considere este ejemplo:

```
const html = (`
<html>
  <body>
    Template literals are super cool.
  </body>
</html>
`).trim();

console.log(html);
// <html>
//   <body>
//     Template literals are super cool.
//   </body>
// </html>
```

Observe que las líneas nuevas y las hendiduras se conservan en la cadena. El `trim()`método también se usa para eliminar las líneas nuevas y los espacios en blanco al comienzo y al final de la cadena html.

### Sustitución de cadenas

Los literales de plantilla también hacen que las sustituciones de cadenas sean divertidas. Antes de ES6, se confiaba mucho en la *concatenación de cadenas* para crear cadenas dinámicas.

Aquí hay un ejemplo simple:

```
const price = 24.99;

console.log("The item costs $" + price + " on the online store.");
// The item costs $24.99 on the online store.
```

Usando literales de plantilla ES6, la sustitución se puede hacer de la siguiente manera:

```
const price = 24.99;

console.log(`The item costs ${price} on the online store.`);
// The item costs $24.99 on the online store.
```

Una sustitución de cadena está delimitada por una apertura `${`y un cierre `}`y puede contener cualquier expresión válida de JavaScript en el medio.

En el ejemplo anterior, sustituimos el valor de una variable simple en el literal de la plantilla. Digamos que queremos agregar un 10% de descuento al precio de todos los artículos en la tienda.

Así es como se ve:

```
const price = 24.99;
const discount = 10;

console.log(`The item costs ${(price * (100 - discount) / 100).toFixed(2)} on the online store.`);
// The item costs $22.49 on the online store.
```

Aquí sustituimos el valor de una expresión de JavaScript que calcula el precio con descuento.

> Los literales de plantilla son expresiones de JavaScript en sí mismas y, como tales, pueden anidarse dentro de otros literales de plantilla.

### Etiquetas de plantilla

Con las plantillas etiquetadas, incluso tiene más control sobre las sustituciones y la transformación del literal de la plantilla. **Una \*etiqueta de plantilla\* es simplemente una función que define cómo se debe transformar un literal de plantilla** .

Una función de etiqueta de plantilla puede aceptar múltiples argumentos. El primer argumento es una matriz que contiene todas las cadenas literales en la plantilla literal. Los argumentos restantes corresponden a las sustituciones en la plantilla literal. Por lo tanto, el segundo argumento corresponde con la primera sustitución, el tercer argumento corresponde con la segunda sustitución y así sucesivamente.

Aquí hay una ilustración simple. Dado el siguiente literal de plantilla:

```
`The price of ${quantity} units of the item on the online store is $${quantity * price}.`
```

El primer argumento pasado a una etiqueta de plantilla para este literal de plantilla será la matriz de cadenas literales que es la siguiente:

```
[
  'The price of ',
  ' units of the item on the online store is /figure>,
  '.'
]

```

El segundo argumento será el valor de `quantity`y el tercer argumento será el valor de `(quantity * price)`.

Avancemos y `pricing`creemos una etiqueta de plantilla llamada que podamos usar para transformar el resumen de precios. Asegurará que los valores de los precios se redondeen a 2 decimales. También asegurará que el `$`símbolo de moneda antes de convertir cualquier precio `USD`.

Aquí está la función:

```
function pricing(literals, ...replacements) {
  // Initialize the final string
  let finalString = '';

  for (let i = 0; i < replacements.length; i++) {
    // Get the current literal and replacement
    const literal = literals[i];
    const replacement = replacements[i];

    // Trim trailing whitespaces from the current literal
    const trimmed = literal.trimRight();
    const length = trimmed.length;

    // Check if current replacement is a number
    const isNumber = typeof replacement === 'number';

    // Check if current literal string ends with $
    const isPrice = /$/.test(trimmed);

    // Check if number is followed by literal that ends with $
    // and use the desired formatting
    finalString += (isNumber && isPrice)
      ? `${trimmed.substr(0, length - 1).trimRight()} USD ${replacement.toFixed(2)}`
      : `${literal}${replacement}`;
  }

  // Attach the last literal to the final string
  return finalString + literals[literals.length - 1];
}

```

Notaría en este fragmento de código que usamos un parámetro de descanso llamado `replacements`para capturar todas las sustituciones en el literal de la plantilla. *Aprenderemos más sobre los parámetros de descanso en la siguiente sección* .

Ahora que hemos creado una etiqueta de plantilla, usarla es la parte fácil.

> Para usar una etiqueta de plantilla, simplemente adjunte el nombre de la etiqueta de plantilla justo antes del primer delimitador de retroceso (`` `) del literal de plantilla.

Aquí hay un ejemplo usando la `pricing`etiqueta de plantilla que acabamos de crear:

```
const price = 24.99;
const discount = 10;
const quantity = 4;

const totalPrice = quantity * price * (100 - discount) / 100;

// WITHOUT TEMPLATE TAG
console.log(`The price of ${quantity} units of the item on the online store is ${totalPrice}.`);
// The price of 4 units of the item on the online store is $89.964.

// WITH TEMPLATE TAG (pricing)
console.log(pricing`The price of ${quantity} units of the item on the online store is ${totalPrice}.`);
// The price of 4 units of the item on the online store is USD 89.96.

```

## **2. Parámetros predeterminados y de descanso**

Las funciones en JavaScript son objetos muy importantes. Es muy posible que haya encontrado la declaración:

> "Las funciones son ciudadanos de primera clase".

Esto es cierto sobre las funciones de JavaScript porque puede pasarlas en su programa como lo haría con cualquier otro valor regular.

Sin embargo, las funciones de JavaScript no han tenido ninguna mejora considerable de sintaxis hasta ES6. Con ES6, ahora tenemos algunas mejoras de sintaxis como *parámetros predeterminados* , *parámetros de descanso* , *funciones de flecha* , etc.

### **Parámetros por defecto**

Antes de ES6, básicamente no había sintaxis para establecer los valores predeterminados para los parámetros de la función. Sin embargo, hubo algunos trucos para establecer valores de reserva para parámetros de función cuando no se pasan valores en el tiempo de invocación. Aquí hay un ejemplo simple:

```
// METHOD 1: Short-circuiting
// Using the logical OR (||) operator
function convertToBase(number, base) {
  number = parseInt(number) || 0;
  base = parseInt(base) || 10;

  return number.toString(base);
}

// METHOD 2: Ternary (?:) operator
// With additional type check (safer option)
function convertToBase(number, base) {
  number = (typeof number !== "undefined") ? parseInt(number) : 0;
  base = (typeof base !== "undefined") ? parseInt(base) : 10;

  return number.toString(base);
}

```

En este fragmento, hemos podido establecer valores predeterminados para los parámetros de la función. Por lo tanto, estos parámetros se comportan como si fueran opcionales, ya que los valores de reserva se utilizan cuando no se pasan los parámetros.

En ES6, puede inicializar el parámetro de función con un valor predeterminado que se usará cuando el parámetro no se pase o se pase `undefined`. Así es como podemos reescribir nuestra `convertToBase()`función anterior con parámetros predeterminados:

```
function convertToBase(number = 0, base = 10) {
  return parseInt(number).toString(parseInt(base));
}

```

Los parámetros de funciones con nombre en ES6 tienen el mismo comportamiento que las `let`declaraciones. Los valores predeterminados en ES6 no se limitan solo a valores literales o primitivos.

> Cualquier expresión de JavaScript también se puede usar como valores predeterminados para parámetros de función.

Aquí hay un ejemplo:

```
function getDefaultNumberBase() {
  return 10;
}

function convertToBase(number = 0, base = getDefaultNumberBase()) {
  return parseInt(number).toString(parseInt(base));
}

```

Aquí, estamos utilizando el valor de retorno de `getDefaultNumberBase()`como el valor predeterminado para el `base`parámetro. Incluso puede usar el valor de un parámetro anterior al establecer el valor predeterminado para otro parámetro. Aquí hay un ejemplo:

```
function cropImage(width, height = width) {
// ...implementation
}

```

En este fragmento, el `height`parámetro se establecerá en el valor del `width`parámetro cada vez que no se pasa o no `undefined`.

Aunque puede usar valores de parámetros anteriores al establecer valores predeterminados, no puede usar variables declaradas dentro del cuerpo de la función. Esto se debe a que los parámetros predeterminados tienen su propio alcance que está separado del alcance del cuerpo de la función.

### **Parámetros de descanso**

El `arguments`objeto es el medio último para capturar todos los argumentos pasados a una función en la invocación. Esto hace posible crear funciones sobrecargadas que pueden aceptar un número variable de argumentos.

> Sin embargo, el `arguments`objeto, aunque es similar a una matriz, debe convertirse en una matriz real antes de que ciertas operaciones de la matriz puedan llevarse a cabo en él.

Aquí hay un ejemplo simple:

```
function sum() {
  // Convert arguments to array
  var args = Array.prototype.slice.call(arguments);

  // Compute sum using array reduce()
  return args.reduce(function(a, b) { return a + Number(b) }, 0);
}

```

Esta función calcula la suma de cualquier número de argumentos que se le hayan pasado. Si el argumento no es un `number`, intenta convertirlo a un número utilizando la `Number()`función global. Regresa `0`si no se pasa ningún argumento. Observe que el `arguments`objeto se convirtió primero en una matriz y se asignó a la `args`variable para usar el `reduce()`método.

En ES6, se introdujeron los *parámetros de descanso* . Un **parámetro de reposo** **es simplemente un** **parámetro de función con nombre precedido por tres puntos** ( `...`). Al parámetro rest se le asigna una matriz que contiene los argumentos restantes pasados a una función. Aquí es cómo podemos reescribir nuestra `sum()`función anterior usando un parámetro rest:

```
function sum(...args) {
  // Compute sum using array reduce()
  return args.reduce((a, b) => a + Number(b), 0);
}
```

**Hay algunas cosas que vale la pena señalar con respecto al uso de parámetros de descanso.**

1. Solo puede tener un parámetro de descanso para una función.
2. El parámetro rest, cuando está presente, debe ser el último parámetro.
3. Un parámetro de reposo no es lo mismo que el `arguments`objeto. Solo captura los argumentos restantes después de los otros parámetros nombrados, mientras que el `arguments`objeto captura todos los argumentos pasados a la función independientemente.
4. No se puede usar un parámetro rest en un establecedor literal de objetos.

### **Operador extendido**

Digamos que tenemos una matriz que contiene los puntajes de los estudiantes en una clase y queremos calcular el puntaje promedio de los estudiantes. Básicamente, primero calcularemos la suma de los puntajes y luego dividiremos la suma por el número de puntajes.

Podemos usar la `sum()`función que creamos en la sección anterior para calcular la suma de los puntajes. Sin embargo, el problema es que tenemos una serie de puntajes y la suma espera números como argumentos.

Antes de ES6, el `Function.prototype.apply()`método se puede usar para manejar casos como este. Este método toma una matriz como segundo argumento que representa los argumentos con los que se debe invocar la función.

Aquí hay un ejemplo:

```
const scores = [42, 68, 49, 83, 72, 65, 77, 74, 86, 51, 69, 47, 53, 58, 51];
const totalScore = sum.apply(null, scores);
const averageScore = totalScore / scores.length;

console.log(totalScore); // 945
console.log(averageScore); // 63

```

En ES6, se introdujo un nuevo operador conocido como el *operador spread* ( `...`). Está estrechamente relacionado con los parámetros de reposo y es muy útil para tratar con matrices y otros *iterables* . Con el operador de propagación podemos calcular lo `totalScore`siguiente:

```
const totalScore = sum(...scores);

```

> Por lo tanto, para la mayoría de los casos de uso, el operador de propagación es un buen reemplazo para el `Function.prototype.apply()`método.

## **3. Funciones de flecha**

Otra mejora de sintaxis muy importante en ES6 es la introducción de *funciones* de *flecha* . Las funciones de flecha hacen uso de una sintaxis completamente nueva y ofrecen un par de grandes ventajas cuando se utilizan de la manera más adecuada.

La sintaxis para las funciones de flecha omite la `function`palabra clave. Además, los parámetros de la función se separan del cuerpo de la función utilizando una *flecha* ( `=>`), de ahí el nombre de *las funciones de flecha* .

Aunque las funciones de flecha son más compactas y más cortas que las funciones regulares, son significativamente diferentes de las funciones regulares en algunos aspectos que definen cómo se pueden usar:

1. Las funciones de flecha no pueden usarse como constructores y no tienen prototipo. Por lo tanto, usar la `new`palabra clave con una función de flecha generalmente dará como resultado un error.
2. Las funciones de flecha no tienen `arguments`objeto, por lo tanto, los parámetros con nombre y los parámetros de reposo deben usarse para argumentos de función. Los parámetros con nombre duplicados tampoco están permitidos.
3. El `this`enlace dentro de una función de flecha no se puede modificar, y siempre apunta a la función principal más cercana que no sea una flecha.

### **Sintaxis de la función de flecha**

Las funciones de flecha pueden verse ligeramente diferentes según lo que desee lograr.

Echemos un vistazo a algunas formas:

**Sin parámetros**

Si no hay parámetros para la función de flecha, se `()`debe usar un par de paréntesis vacío ( ) antes de la flecha ( `=>`) como se muestra en el siguiente fragmento.

```
// USING REGULAR FUNCTION
const getTimestamp = function() {
  return +new Date;
}

// USING ARROW FUNCTION
const getTimestamp = () => {
  return +new Date;
}

```

Para funciones de flecha muy simples como esta que solo devuelven el valor de una expresión de JavaScript, se pueden omitir la `return`palabra clave y el par de llaves ( `{}`) que rodean el cuerpo de la función.

Por lo tanto, la función de flecha se puede reescribir así:

```
const getTimestamp = () => +new Date;

```

Sin embargo, si se devuelve un literal de objeto de la función de flecha, debe envolverse con un par de paréntesis ( `()`), de lo contrario, el motor de JavaScript ve que las llaves ( `{}`) del literal de objeto contienen el cuerpo de la función que dará como resultado la sintaxis error. Aquí hay un ejemplo:

```
// Returned object literal wrapped in parentheses
const getProfile = () => ({
  name: 'Glad Chinda',
  gender: 'Male',
  birthday: 'August 15'
});

```

**Con parámetros**

Para las funciones de flecha que toman solo un parámetro con nombre, el par de paréntesis que rodea la lista de parámetros se puede omitir como se muestra en el siguiente fragmento:

```
// Pair of parentheses is omitted
const computeSquare = num => num * num;

```

Sin embargo, hay situaciones en las que no se puede omitir el paréntesis que rodea la lista de parámetros. Estas son algunas de esas situaciones:

1. Cuando hay más de un parámetro con nombre

```
// Pair of parentheses cannot be omitted
const addNumbers = (numA, numB) => numA + numB;

```

2. Cuando hay un parámetro predeterminado, incluso si es el único parámetro

```
// The traditional function body wrapped in curly braces
// is used here to aid readability.
// Pair of parentheses cannot be omitted

const factorial = (n = 1) => {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}

```

3. Cuando hay un parámetro de reposo, incluso si es el único parámetro

```
// Pair of parentheses cannot be omitted
const range = (...numbers) => Math.max(...numbers) - Math.min(...numbers);

```

4. Cuando hay un parámetro desestructurado, incluso si es el único parámetro

```
// Pair of parentheses cannot be omitted
const extractName = ({ name = null }) => name;

console.log(extractName({
  name: 'Glad Chinda',
  role: 'author'
})); // "Glad Chinda"

```

**Cuerpo de la función tradicional**

Como se mostró anteriormente para funciones de flecha muy simples que solo devuelven el valor de una expresión de JavaScript, se pueden omitir la `return`palabra clave y el par de llaves ( `{}`) que rodean el cuerpo de la función. Sin embargo, aún puede usar el cuerpo de la función tradicional si lo desea y especialmente cuando la función tiene varias declaraciones.

```
const snakeCase = value => {
  const regex = /[A-Z][^A-Z]+/g;
  const withoutSpaces = value.trim().replace(/s+/g, '_');

  const caps = withoutSpaces.match(regex);
  const splits = withoutSpaces.split(regex);

  let finalString = splits.shift();

  for (let i = 0; i < splits.length; i++) {
    finalString += `${caps[i]}_${splits[i]}_`;
  }

  return finalString
    .toLowerCase()
    .replace(/_+/g, '_')
    .replace(/^_?(.+?)_?$/, '$1');
}

```

La función anterior intenta imitar el `snakeCase()`método de la biblioteca *Lodash* JavaScript. Aquí, tenemos que usar el cuerpo de la función tradicional envuelto en llaves ( `{}`) ya que tenemos muchas declaraciones de JavaScript dentro del cuerpo de la función.

> A diferencia de las funciones regulares, el `arguments`objeto no existe para las funciones de flecha. Sin embargo, pueden tener acceso al `arguments`objeto de una función principal sin flecha.

```
function fetchLastScore() {
  return () => {
    console.log(arguments[arguments.length - 1]);
  }
}

fetchLastScore(42, 68, 49, 83, 72)(); // 72

```

### **Expresiones de función invocadas inmediatamente (IIFE)**

Una aplicación útil de funciones en JavaScript se observa en *Expresiones de funciones invocadas inmediatamente (IIFE)* , que son ***funciones que se definen y se llaman inmediatamente sin guardar una referencia a la función\*** . Este tipo de aplicación de funciones generalmente se ve en scripts de inicialización únicos, bibliotecas de JavaScript que exponen una interfaz pública modular como *jQuery* , etc.

Usando funciones regulares de JavaScript, los IIFE generalmente toman una de estas formas:

```
// FIRST FORM:
// Wrap the function expression in parentheses
// The invocation expression comes afterwards

(function(a, b) {
  // ...function body here
})(arg1, arg2);

// SECOND FORM:
// Wrap the function expression together with
// the invocation expression in parentheses

(function(a, b) {
  // ...function body here
}(arg1, arg2));

```

La sintaxis de la función de flecha también se puede usar con IIFE siempre que la función de flecha esté entre paréntesis.

```
// IIFE: With Arrow Function
// The arrow function is called immediately with a list of arguments
// and the return value is assigned to the `compute` variable

const compute = ((...numbers) => {

  // Private members

  const length = numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  const sum = numbers.reduce((a, b) => a + Number(b), 0);

  // Expose an inteface of public methods

  return {
    sum: () => sum,
    avg: () => sum / length,
    range: () => max - min
  };

})(42, 68, 49, 83, 72, 65, 77, 74, 86, 51, 69, 47, 53, 58, 51);

// Access the exposed public methods

console.log(compute.sum()); // 945
console.log(compute.avg()); // 63
console.log(compute.range()); // 44

```

### **Funciones de devolución de llamada**

Funciones de devolución de llamada se utilizan en gran medida en los programas asíncronos y también en métodos de arreglos como `map()`, `filter()`, `forEach()`, `reduce()`, `sort()`, `find()`, `findIndex()`, etc.

> Las funciones de flecha son perfectas para usar como funciones de devolución de llamada.

En un fragmento de código anterior, vimos cómo se usaba una función de flecha `reduce()`para calcular la suma de una matriz de números. Usar la función de flecha es más compacto y ordenado. De nuevo, aquí está la comparación:

```
// WITHOUT ARROW FUNCTION
const sum = numbers.reduce(function(a, b) {
  return a + Number(b);
}, 0);

// WITH ARROW FUNCTION
const sum = numbers.reduce((a, b) => a + Number(b), 0);

```

Hagamos algo un poco más complicado para demostrar cómo usar las funciones de flecha como devoluciones de llamada de matriz puede ayudarnos a lograr más con menos código. *Imitaremos* el `flattenDeep()`método de la biblioteca *Lodash* JavaScript. Este método aplana recursivamente una matriz. Sin embargo, en nuestra implementación, aplanaremos recursivamente la matriz de argumentos pasados a la función.

Aquí está el fragmento de código para la `flattenDeep()`función:

```
const flattenDeep = (...args) => args.reduce(
  (a, b) => [].concat(a, Array.isArray(b) ? flattenDeep(...b) : b)
);

```

Así de geniales pueden ser las funciones de flecha cuando se usan como funciones de devolución de llamada, especialmente cuando se trabaja con métodos de matriz que toman funciones de devolución de llamada.

### **This y funciones de flecha**

Una fuente importante de confusión y errores en muchos programas JavaScript es la resolución de valor de `this`.

> `this` resuelve diferentes valores según el alcance y el contexto de una invocación de función.

Por ejemplo, cuando se invoca una función con la `new`palabra clave, `this`apunta a la instancia creada por el constructor, sin embargo, cuando se llama a la misma función sin la `new`palabra clave, `this`apunta al objeto global (en modo *no estricto* ) que en el entorno del navegador es el `window`objeto

Aquí hay una ilustración simple. En el siguiente fragmento de código, llamar `Person()`sin la `new`palabra clave creará accidentalmente una variable global llamada `name`porque la función está en modo *no estricto* .

```
function Person(name) {
  this.name = name;
}

var person = Person('Glad Chinda');

console.log(person); // undefined
console.log(name); // "Glad Chinda"
console.log(window.name); // "Glad Chinda"

```

Otra fuente común de confusión con los `this`oyentes de eventos DOM es.

> En los oyentes de eventos, `this`apunta al elemento DOM al que se dirige el evento.

Considere el siguiente fragmento de código:

```
function ScrollController(offset) {
  this.offsets = { offsetY: offset };
}

ScrollController.prototype.registerScrollHandler = function() {
  window.addEventListener('scroll', function(event) {
    if (window.scrollY === this.offsets.offsetY) {
      console.log(`${this.offsets.offsetY}px`);
    }
  }, false);
}

var controller = new ScrollController(100);
controller.registerScrollHandler();

```

Todo se ve bien con este fragmento de código. Sin embargo, cuando comience a desplazarse verticalmente por la ventana del navegador, verá que se registra un error en la consola. El motivo del error es que `this.offsets`es `undefined`y que están tratando de acceder a la `offsetY`propiedad de `undefined`.

La pregunta es: **¿cómo es posible que** `**this.offsets**` **sea así** `**undefined**`**?**

Se debe a que el valor `this`dentro del detector de eventos es diferente del valor `this`dentro de la función prototipo que lo encierra. `this`dentro del detector de eventos señala `window`cuál es el destino del evento y `offsets`no existe como una propiedad en `window`. Por lo tanto, `this.offsets`dentro del evento está el oyente `undefined`.

`Function.prototype.bind()`se puede usar para establecer explícitamente el `this`enlace para una función. Aquí se explica cómo se puede corregir el error configurando explícitamente el `this`enlace usando `Function.prototype.bind()`:

```
// Using .bind() on event listener to resolve the value of `this`

ScrollController.prototype.registerScrollHandler = function() {
  this.element.addEventListener('scroll', (function(event) {
    if (window.scrollY === this.offsets.offsetY) {
      console.log(`${this.offsets.offsetY}px`);
    }
  }).bind(this), false);
}

```

Aquí, envolvimos el detector de eventos con paréntesis y llamamos al `bind()`método que pasa el valor de `this`la función prototipo adjunta. Llamar `bind()`realmente devuelve una nueva función con el `this`enlace especificado . Todo funciona perfectamente ahora sin ningún error.

> Con las funciones de flecha ES6, no hay `this`enlace. Por lo tanto, las funciones de flecha utilizan el valor de `this`su ancestro de función no de flecha más cercano.

En un caso como el nuestro, en lugar de usar el `bind()`que realmente devuelve una nueva función, podemos usar una función de flecha en su lugar, ya `this`que se retiene el enlace de la función prototipo envolvente.

Aquí está:

```
// Using arrow function for event listener

ScrollController.prototype.registerScrollHandler = function() {
  this.element.addEventListener('scroll', event => {
    if (window.scrollY === this.offsets.offsetY) {
      console.log(`${this.offsets.offsetY}px`);
    }
  }, false);
}

```

## **4. Desestructuración**

La desestructuración es otra mejora muy importante para la sintaxis de JavaScript. *La desestructuración* permite acceder y asignar valores a variables locales desde estructuras complejas como matrices y objetos, sin importar cuán profundamente anidados estén esos valores en la matriz u objeto principal. Hay dos formas de desestructuración: la **desestructuración de objetos** y la **desestructuración de matrices** .

#### Desestructuración de objetos

Para ilustrar la desestructuración de objetos, digamos que tenemos un objeto de país que se parece a lo siguiente:

```
const country = {
  name: 'Nigeria',
  region: 'Africa',
  codes: {
    cca2: 'NG',
    dialcode: '+234'
  },
  cities: [
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Benin',
    'Ibadan',
    'Calabar',
    'Warri'
  ]
}

```

Queremos mostrar alguna información sobre este país a nuestros visitantes. El siguiente fragmento de código muestra una `countryInfo()`función muy básica que hace exactamente eso:

```
function countryInfo(country) {
  const name = country.name;
  const region = country.region || 'the world';
  const code2 = country.codes.cca2;
  const dialcode = country.codes.dialcode;
  const cities = country.cities;

  return (
`
COUNTRY TIPS:

${name}(${code2}) is one of the largest countries in ${region}.
There are so many important cities you can visit in ${name}
and here are some of them:

${cities.slice(0, 3).join(', ')} and ${cities.slice(3).length} others.

Phone numbers in ${name} usually begin with ${dialcode}.
`
  ).trim();
}

console.log(countryInfo(country));

// COUNTRY TIPS:
//
// Nigeria(NG) is one of the largest countries in Africa.
// There are so many important cities you can visit in Nigeria
// and here are some of them:
//
// Lagos, Abuja, Port Harcourt and 4 others.
//
// Phone numbers in Nigeria usually begin with +234.

```

En este fragmento, hemos podido extraer algunos valores del objeto país y asignarlos a variables locales en la `countryInfo()`función, lo que funcionó muy bien.

Con la desestructuración de ES6, podemos extraer estos valores y asignarlos a variables con una sintaxis más elegante, más limpia y más corta. Aquí hay una comparación entre el fragmento antiguo y la desestructuración de ES6:

```
// OLD METHOD
const name = country.name;
const region = country.region || 'the world';
const code2 = country.codes.cca2;
const dialcode = country.codes.dialcode;
const cities = country.cities;

// ES6 DESTRUCTURING
const {
  name,
  region = 'the world',
  codes: { cca2: code2, dialcode },
  cities
} = country;

```

Esta forma de desestructuración en el fragmento de código anterior se conoce como *desestructuración de objetos* , porque estamos extrayendo valores de un objeto y asignándolos a variables locales.

> Para la desestructuración de objetos, se utiliza un literal de objeto en el lado izquierdo de una expresión de asignación.

Incluso puede usar la desestructuración de objetos con parámetros de función como se muestra en el siguiente fragmento:

```
const person = {
  name: 'Glad Chinda',
  birthday: 'August 15'
}

// FUNCTION WITHOUT DESTRUCTURED PARAMETERS
function aboutPerson(person = {}) {
  const { name, birthday, age = 'just a few' } = person;

  console.log(`My name is ${name} and I'm ${age} years old. I celebrate my birthday on ${birthday} every year.`);
}

// FUNCTION WITH DESTRUCTURED PARAMETERS
function aboutPerson({ name, birthday, age = 'just a few' } = {}) {
  console.log(`My name is ${name} and I'm ${age} years old. I celebrate my birthday on ${birthday} every year.`);
}

aboutPerson(person);

// My name is Glad Chinda and I'm just a few years old. I celebrate my birthday on August 15 every year.

```

### Desestructuración de matrices

La desestructuración de matrices se utiliza para extraer valores de matrices y asignarlos a variables locales. Digamos que tenemos los valores RGB (Rojo-Verde-Azul) de un color representado como una matriz de la siguiente manera:

```
const color = [240, 80, 124];

```

Queremos mostrar los valores RGB para el color dado. Así es como se puede hacer con la desestructuración de matrices.

```
// Array Destructuring
const [red, green, blue] = color;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// R: 240, G: 80, B: 124

```

> Para la desestructuración de matrices, se usa un literal de matriz en el lado izquierdo de una expresión de asignación.

Con la desestructuración de la matriz, es posible omitir la asignación de valores que no necesita. Digamos que queremos solo el valor azul del color. Aquí es cómo podemos omitir los valores rojo y verde sin asignarlos a variables locales.

```
const [,, blue] = color;

console.log(`B: ${blue}`);
// B: 124

```

La desestructuración de matrices también se puede usar con parámetros de función de manera muy similar a la desestructuración de objetos. Sin embargo, hay otras formas en que la desestructuración de matrices se puede utilizar para resolver problemas comunes.

Un caso de uso muy importante es el **intercambio de variables** . Digamos que queremos buscar en una base de datos los registros almacenados entre dos fechas. Podríamos escribir una función simple que acepte dos `Date`objetos: `fromDate`y de la `toDate`siguiente manera:

```
function fetchDatabaseRecords(fromDate, toDate) {
// ...execute database query
}

```

Queremos asegurarnos de que `fromDate`siempre sea antes `toDate` ; por lo tanto, simplemente queremos cambiar las fechas en los casos `fromDate`posteriores `toDate`. Así es como podemos cambiar las fechas usando la desestructuración de matrices:

```
function fetchDatabaseRecords(fromDate, toDate) {
  if (fromDate > toDate) {
    // swap the dates using array destructuring
    [fromDate, toDate] = [toDate, fromDate];
  }

  // ...execute database query
}
```

> Para obtener una guía más detallada sobre la desestructuración, puede consultar [ES6 Destructuring: The Complete Guide](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f?ref=morioh.com) .

------

## **5. Clases**

Las clases son una característica que algunos desarrolladores de JavaScript siempre han deseado durante mucho tiempo, especialmente aquellas que tenían experiencia previa con otros lenguajes de programación orientados a objetos. Las mejoras de sintaxis de JavaScript ES6 finalmente incluyeron clases.

Aunque las clases ahora son parte de JavaScript, no se comportan exactamente de la misma manera que en otros lenguajes de programación clásicos. Se parecen más al azúcar sintáctico que a los métodos anteriores de simulación del comportamiento basado en la clase. Por lo tanto, todavía funcionan según el modelo de herencia prototípica de JavaScript.

Antes de ES6, las clases se simulaban utilizando *funciones de constructor* y los métodos de instancia se creaban básicamente mejorando el prototipo de la función de constructor. Por lo tanto, cuando se llama a la función constructora con la `new`palabra clave, devuelve una instancia del tipo constructor que tiene acceso a todos los métodos de su prototipo. El valor de los `this`puntos a la instancia del constructor.

Aquí hay un ejemplo:

`````
// The Rectangle constructor
function Rectangle(length, breadth) {
  this.length = length || 10;
  this.breadth = breadth || 10;
}

// An instance method
Rectangle.prototype.computeArea = function() {
  return this.length * this.breadth;
}

// Create an instance using the new keyword
var rectangle = new Rectangle(50, 20);

console.log(rectangle.computeArea()); // 1000

// rectangle is also an instance of Object
// Due to JavaScript's prototypal inheritance
console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Object); // true
`````
### **Sintaxis de clase**

Las clases son similares a las funciones de muchas maneras. Al igual que con las funciones, las clases se pueden definir usando *declaraciones de* *clase* y *expresiones de clase* usando la `class`palabra clave.

> Al igual que con las funciones, las clases son ciudadanos de primera mano y se pueden transmitir como valores alrededor de su programa.

**Sin embargo, hay un par de diferencias significativas entre clases y funciones.**

1. Las declaraciones de clase no se izan y se comportan como `let`declaraciones.
2. Los constructores de clases siempre deben llamarse con, `new`mientras que los métodos de clase no pueden llamarse con `new`.
3. El código de definición de clase siempre está en *modo estricto* .
4. Todos los métodos de clase no son enumerables.
5. Un nombre de clase no se puede modificar desde dentro de la clase.

Aquí está nuestro `Rectangle`tipo anterior reescrito usando la sintaxis de clase:

```
class Rectangle {
  // The class constructor
  constructor(length, breadth) {
    this.length = length || 10;
    this.breadth = breadth || 10;
  }

  // An instance method
  computeArea() {
    return this.length * this.breadth;
  }
}

// Create an instance using the new keyword
const rectangle = new Rectangle(50, 20);

console.log(rectangle.computeArea()); // 1000

// rectangle is also an instance of Object
// Due to JavaScript's prototypal inheritance
console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Object); // true

console.log(typeof Rectangle); // function
console.log(typeof Rectangle.prototype.computeArea); // function
```

Aquí, usamos un `constructor()`método especial para definir la lógica del constructor de clases y también establecer todas las propiedades de la instancia. De hecho, cada vez que el `typeof`operador se usa en una clase, devuelve `“function”` , ya sea que un constructor esté explícitamente definido para la clase o no.

Observe también que el `computeArea()`método de instancia se agrega realmente al objeto prototipo de la función de constructor de clase subyacente. Esa es la razón por la que también se usa el `typeof`operador en los `Rectangle.prototype.computeArea`retornos `“function”`.

En base a estas similitudes, puede concluir que la sintaxis de la clase es principalmente azúcar sintáctica además de los métodos anteriores para crear tipos personalizados.

Veamos otro ejemplo que es un poco más complicado para demostrar el uso de expresiones de clase y pasar clases como argumentos a funciones.

```
// An anonymous class expression
// assigned to a variable
const Rectangle = class {

  // The class constructor
  constructor(length, breadth) {
    this.length = length || 10;
    this.breadth = breadth || 10;
  }

  // An instance method
  computeArea() {
    return this.length * this.breadth;
  }

}

// A class passed as argument to a function
// Notice how the class is instantiated with new
const computeArea = (Shape, ...dimensions) => {
  return (new Shape(...dimensions)).computeArea();
}

console.log(computeArea(Rectangle, 50, 20)); // 1000
```

Aquí, primero creamos una expresión de clase anónima y la asignamos a la `Rectangle`variable. A continuación, creamos una función que acepta una `Shape`clase como primer argumento y las dimensiones para crear instancias `Shape`como los argumentos restantes. El fragmento de código supone que cualquier `Shape`clase que reciba implementa el `computeArea()`método.

### **Clases Extendidas**

Al igual que con otros lenguajes de programación orientados a objetos, las clases de JavaScript tienen funcionalidades para extensiones de clase. Por lo tanto, es posible crear clases *derivadas* o *secundarias* con funcionalidad modificada a partir de una clase *primaria* .

Digamos que tenemos una `Rectangle`clase para crear rectángulos y queremos crear una `Square`clase para crear rectángulos con igual longitud y amplitud (cuadrados). Así es como podemos hacerlo:

```
class Rectangle {
  constructor(length, breadth) {
    this.length = length || 10;
    this.breadth = breadth || 10;
  }

  computeArea() {
    return this.length * this.breadth;
  }
}

// The Square class extends the Rectangle class
class Square extends Rectangle {

  constructor(length) {
    // super() calls the constructor of the parent class
    super(length, length);
  }

}

const square = new Square;

// Square inherits the methods and properties of Rectangle
console.log(square.length); // 10
console.log(square.breadth); // 10
console.log(square.computeArea()); // 100

// square is also an instance of Rectangle
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
```

Primero, observe el uso de la `extends`palabra clave, que indica que queremos crear una clase derivada de una clase primaria.

> La clase derivada hereda todas las propiedades y métodos en el prototipo de la clase padre, incluido el constructor.

Observe también que usamos una `super`referencia para invocar al constructor de la clase padre desde dentro del constructor de la clase derivada. Esto es muy útil cuando desea mejorar la funcionalidad de un método heredado en la clase derivada.

Por ejemplo, una llamada a `super.computeArea()`desde dentro de la `Square`clase llamará al `computeArea()`método implementado en la `Rectangle`clase.

> Se `super()`debe hacer una llamada a en el constructor de cada clase derivada y debe venir antes de que se haga referencia a ella `this`.

Esto se debe a que llamar `super()`establece el valor de `this`. Sin embargo, `super()`nunca debe usarse en una clase que no sea una clase derivada, ya que se considera un error de sintaxis.

Crear clases derivadas no se limita a extender las clases solo. Las clases derivadas generalmente se crean al extender cualquier expresión de JavaScript que se pueda usar como constructor y también tenga un prototipo, como las funciones de JavaScript. Por lo tanto, lo siguiente es posible:

```
function Person(name) {
  this.name = name || 'Glad Chinda';
}

Person.prototype.getGender = function() {
  return this.gender;
}

class Male extends Person {
  constructor(name) {
    super(name);
    this.gender = 'MALE';
  }
}

const me = new Male;

// Male inherits the methods and properties of Person
console.log(me.getGender()); // "MALE"

// me is also an instance of Person
console.log(me instanceof Male); // true
console.log(me instanceof Person); // true
```

### **Miembros de clases estáticas**

Hasta ahora hemos estado buscando *métodos de instancia* y *propiedades* . Hay momentos en los que necesita *métodos* o *propiedades* *estáticos* que se aplican directamente a la clase y no cambian de una instancia a otra. Antes de ES6, los miembros estáticos se pueden agregar de la siguiente manera:

```
function Lion () { 
  // constructor function 
} 

// Propiedad estática 
Lion.category = 'ANIMAL'; 

// Método estático 
Lion.animalType = function () { 
  return 'CAT'; 
} 

console.log (Lion.category); // "ANIMAL" 
console.log (Lion.animalType ()); // "GATO"
```

Con las clases ES6, la `static` palabra clave se coloca antes del nombre de un método para indicar que el método es un *método estático* . Sin embargo,  no se pueden crear *propiedades estáticas* desde dentro de la clase. Así es como podemos crear miembros estáticos:

```
class Lion { 
  // Método 
  estático static animalType () { 
    return 'CAT'; 
  } 
} 

// Propiedad estática 
Lion.category = 'ANIMAL'; 

console.log (Lion.category); // "ANIMAL" 
console.log (Lion.animalType ()); // "GATO"
```

> Los miembros de clase estática también son heredados por las clases derivadas. Pueden ser anulados por la clase derivada de la misma manera que los métodos y propiedades de instancia.

Aquí hay un ejemplo simple:

```
class Lion { 
  // Método 
  estático static animalType () { 
    return 'CAT'; 
  } 
} 

// Propiedad estática 
Lion.category = 'ANIMAL'; 

// Clase de 
clase Leona derivada Leona extiende León { 

  // Anular método 
  estático static animalType () { 
    return `$ {super.animalType ()} :: LION`; 
  } 

} 

console.log (Lioness.category); // "ANIMAL" 
console.log (Lioness.animalType ()); // "GATO :: LEÓN"
```

## **Más características de Javascript 6**

Hay un par de características de clase más que vale la pena considerar, una de las cuales son las ***propiedades de acceso\*** . Pueden ser muy útiles en casos donde necesita tener propiedades en el prototipo de clase.

Aquí hay un ejemplo simple:

```
clase Persona { 
  constructor (nombre, apellido) { 
    this.firstname = nombre || 'Alegre'; 
    this.lastname = apellido || 'Chinda'; 
  } 

  get fullname () { 
    return `$ {this.firstname} $ {this.lastname}`; 
  } 

  set fullname (value) { 
    const [nombre, apellido] = value.split (''); 
    if (nombre) this.firstname = nombre; 
    if (apellido) this.lastname = apellido; 
  } 
} 

const me = nueva persona; 
console.log (me.fullname); // "Glad Chinda" 

me.fullname = "Jamie"; 
console.log (me.fullname); // "Jamie Chinda" 

me.fullname = "John Doe (Junior)"; 
console.log (yo. nombre completo); // "John Doe"
```

Otra buena característica de las clases que es muy similar a los literales de objetos es la capacidad de usar ***nombres calculados\*** para los miembros de la clase. Estos nombres calculados también se pueden usar para propiedades de acceso.

> Los nombres computados son generalmente expresiones JavaScript envueltas entre un par de *corchetes* ([]).

Aquí hay un ejemplo simple:

```
prefijo const = 'calcular'; 

class Square { 
  constructor (length) { 
    this.length = length || 10; 
  } 

  // Un método de clase calculada 
  [`$ {prefijo} $ {Square.prototype.constructor.name} Area`] () { 
    return this.length * this.length; 
  } 
} 

const square = nuevo cuadrado; 
console.log (square.computeSquareArea ()); // 100
```

### Conclusión

Aunque este ha sido un artículo bastante largo para seguir, creo firmemente que la mayoría de nosotros debe haber aprendido algunas maneras en que podemos mejorar nuestro código usando algunas nuevas funciones de JavaScript ES6.

> 🔥 Seguro también te interesa: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}

### **Relacionados** <!-- omit in toc -->

[▷ Cómo Aprender Javascript en 2020 👨‍🚀](/javascript/)

[▷ Los Mejores Recursos para Aprender Javascript 👨‍🚀](/javascript-recursos/)

[▷ Análisis y Memoria 2020: Los mejores proyectos de Javascript 👨‍💻](/memoria-mejores-proyectos-javascript/)

[🔥 ▷ Rome, ¿La Mejor Herramienta para Javascript jamás creada?](/roma-herramienta-javascript/)

[▷ Editores de Texto](/categoria/#editor-de-texto)
  * [Eclipse Theia](/wiki/eclipse-theia)
  * 
[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)

[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)

[▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331109157075936" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331109157075936" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros con los que aprender a programar en Java y con Android, en Español</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331109157075936">Martes, 3 de marzo de 2020</a></blockquote></div>
