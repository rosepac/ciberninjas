---

author: rosepac
bootstrap: true
comments: false
tags:
- Javascript
- PHP
categories:
- Lenguajes de Programación
thumbnail: /assets/img/blog/
title: 'Diferencias entre Javascript y PHP'
description: >-
  'Breve comparativa e introducción entre los lenguajes de programación: Javascript y PHP.'
excerpt: >-
  'Breve comparativa e introducción entre los lenguajes de programación: Javascript y PHP.'
canonical_URL: https://ciberninjas.com/javascript-vs-php/
permalink: /javascript-vs-php/
date: 2020-05-27 17:32:32
last_modified_at: 
published: false

---

<!-- https://www.geeksforgeeks.org/difference-between-javascript-and-php/ -->
A veces, la mayoría de la gente suele pensar que Php es un lenguaje del lado del servidor y Javascript un lenguaje del lado del cliente, ya que solo se ejecuta (principalmente) sobre navegadores web.

Pero después de que llegaron V8, Node y otro frameworks, Javascript es capaz de hacer mucho más de lo que Php solía hacer, dado que ahora podemos manejar tanto el front-end como el back-end a través de Javascript, y por tanto ha terminado por ser un lenguaje, que ha pasado a ser considera más poderoso que Php.

Estas son algunas de las diferencias entre Javascript y Php.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Características de Javascript**

- Funciona tanto para el front-end como para el back-end.
- Javascript es asíncrono, no espera las operaciones de entrada y salida.
- Se puede ejecutar, tanto en navegadores y después de Node, también podemos ejecutarlo en línea de comandos.
- Js se puede combinar con HTMl, AJAX y XML.
- Es un lenguaje de un solo subproceso que se basa en eventos, lo que significa que nunca se bloquea y todo se ejecuta simultáneamente.

## **Características de PHP**

Php se usa principalmente para fines de back-end solamente.
Php es síncrono, espera a que se ejecuten las operaciones IO.
Php es síncrono, espera a que se ejecuten las operaciones IO.
Se puede combinar solo con HTML.
Es multiproceso, lo que significa que bloquea la Entrada / Salida para llevar a cabo múltiples tareas simultáneamente.

## **Sintaxis y programa básico de JavaScript**

Las declaraciones de JavaScript se colocan dentro de las etiquetas <script> ... </script>.
Puede colocar las etiquetas, en cualquier lugar dentro de su página web, pero normalmente se recomienda mantenerlas dentro de las etiquetas <head>. La etiqueta le dice al navegador que comience a interpretar todo el texto entre estas etiquetas como código JavaScript.

### **Ejemplo de sintaxis de Javascript**

```
<!DOCTYPE html> 
<html> 
<body> 
<h2>JavaScript</h2> 
  
<script> 
<!-- tu código de javascript aquí -->
  
document.write("Ciberninjas"); 
</script> 
  
</body> 
</html>
```

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Código #1 de Javascript**

```
<!-- To print a text five times-->
<!DOCTYPE html> 
<html> 
<body> 
<h2>Un programa simple de JavaScript</h2> 
  
<script> 
  
   var n; 
   n=5; 
     
   //JavaScript uses the var keyword to declare variables. 
   //An equal sign is used to assign values to variables. 
  
   for(var i=0; i<n; i++){ 
   document.write("Ciberninjas " +"<br>"); 
   } 
     
</script> 
</body> 
</html>  
```

### **Resultado de la ejecución del Código #1 de Javascript**

```
Un simple programa de JavaScript
Ciberninjas 
Ciberninjas 
Ciberninjas 
Ciberninjas 
Ciberninjas 
```

## **Sintaxis de PHP y creación de un programa básico**

Igual que Javascript, Php también se puede escribir en código HTML y también en los archivos de extensión .php. Pero Php requiere un servidor para ejecutarse, por lo que no podrá ver una salida del siguiente código.

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### **Instrucciones para ejecutar PHP**

Se puede instalar Xampp o cualquier otra aplicación de servidor local. Después de instalar Xampp, asigne un nombre a su archivo de código con la extensión .php y mueva su archivo Html / Php a la carpeta Htdocs dentro de la ruta en la que instalaste XAMPP.

Abre XAMPP y ejecuta el servidor Apache y la base de datos SQL correspondiente. Luego, ve al host local con la URL de su archivo (escriba localhost/NombreDeFichero.php en el navegador) y entonces podrás comprobar el resultado.

El código php comienza con <?php y termina con ?>. Esto es para poder decirle al compilador / servidor en que punto comienza y termina el lenguaje PHP.

## **Ejemplo de Sintaxis de PHP**

```
<!DOCTYPE html> 
<html> 
<body> 
  
<h1>Código PHP en HTML</h1> 
  
<?php
echo "¡Hola Ciberninjas!"; 
?>  
<!-- Echo to print on front end-->
  
</body> 
</html> 
```

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

## **Código #1 de PHP**

```
<!DOCTYPE html> 
<html> 
<body> 
<h1>PHP Code in HTML</h1> 
<?php
   
   // in php we declare variables using $ 
   $str= "GeeksForGeeks"; 
   $x = 5; 
     
   //for loop in php 
   for( $i = 0; $i<5; $i++ ) 
   { 
        echo ("GeeksForGeeks"); 
        } 
          
?>  
<!--This code will print GeeksforGeeks 5 times on front end-->
</body> 
</html> 
```

### **Resultado de ejecutar el Código #1 de PHP**

```
Ciberninjas
Ciberninjas
Ciberninjas
Ciberninjas
Ciberninjas
```

> 🔥 Quizás te interese: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

### **Relacionados** <!-- omit in toc -->

[¿Por qué Python es mejor que PHP?](https://ciberninjas.com/porque-python-es-mejor-que-php/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}
