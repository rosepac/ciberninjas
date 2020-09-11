---

author: rosepac
bootstrap: true
comments: false
tags:
- Javascript
- Typescript
thumbnail: /assets/img/blog/typescript-4.webp
feature-img: /assets/img/blog/typescript-4.webp
title: '▷ TypeScript 4.0: Comienza a escribir código más limpio y transparente'
description: >-
  El superconjunto de JavaScript de código abierto de Microsoft recibe una gran actualización, lo que facilita la escritura de aplicaciones complejas para la Web.
excerpt: >-
  El superconjunto de JavaScript de código abierto de Microsoft recibe una gran actualización, lo que facilita la escritura de aplicaciones complejas para la Web.
canonical_URL: https://ciberninjas.com/typescript-codigo-limpio/
permalink: /typescript-codigo-limpio/
date: 2020-09-02 01:10:32
published: true

---

El superconjunto JavaScript de código abierto de Microsoft recibe una gran actualización, lo que facilita la escritura de aplicaciones complejas para la Web.

Probablemente no debería sorprendernos que JavaScript se haya convertido en uno de los lenguajes de programación más populares en uso en la actualidad. Es potente, flexible y fácil de aprender.

Pero todavía tiene problemas, especialmente en cuanto a cómo maneja los tipos. Es difícil escribir aplicaciones grandes y complejas en JavaScript porque es difícil validar el código antes de que se ejecute.

Es difícil usar herramientas de análisis de código en línea cuando se usa escritura dinámica, lo que reduce la efectividad de herramientas como IntelliSense de Visual Studio.

Sin tipos estáticos, es difícil recomendar JavaScript como lenguaje para crear aplicaciones a gran escala. Ciertamente, no querrá usarlo para aplicaciones como Office o para crear editores de programadores complejos.

Pero JavaScript es un lenguaje extensible con tiempos de ejecución para muchas plataformas diferentes, por lo que es un objetivo atractivo para los desarrolladores que no quieren perder tiempo escribiendo diferentes versiones de su código para diferentes entornos.

Una opción son tecnologías como transcompiladores, que permiten compilar código de otros lenguajes en JavaScript.

- [**TypeScript: una alternativa fuertemente tipada a JavaScript**](#typescript-una-alternativa-fuertemente-tipada-a-javascript)
- [**Empezando con TypeScript 4.0**](#empezando-con-typescript-40)
- [**Trabajar con tipos en matrices y tuplas**](#trabajar-con-tipos-en-matrices-y-tuplas)
- [**Mejor código con mejores funciones del editor**](#mejor-código-con-mejores-funciones-del-editor)

## **TypeScript: una alternativa fuertemente tipada a JavaScript**

Ese es el enfoque adoptado por el lenguaje TypeScript de Microsoft. Desarrollado como un superconjunto de JavaScript fuertemente tipado, está diseñado para construir sobre JavaScript para entregar un lenguaje que podría usarse para esos proyectos de desarrollo a gran escala.

Lo que ayuda a administrar los cientos y miles de variables en su código y permite el análisis de código en línea. y herramientas de depuración para ayudarlo a escribir código correctamente.

Puedes agregar código JavaScript existente a una aplicación TypeScript y se ejecutará sin necesidad de ningún cambio, lo que hace que sea relativamente fácil iniciar el proceso de conversión de código escrito dinámico a la escritura estática estricta de TypeScript.

Hace casi ocho años, Microsoft lanzó la primera compilación pública, 0.8.1, de TypeScript, en noviembre de 2012. Desde entonces, se ha utilizado en muchas aplicaciones web a gran escala y en muchas aplicaciones que se ejecutan en el tiempo de ejecución multiplataforma de Electron.

Probablemente haya usado uno sin darse cuenta, tal vez leyendo su correo electrónico en Outlook.com o trabajando en algún código en Visual Studio Code.

Uno de los proyectos de código abierto más grandes de Microsoft, ha liderado el camino para el código abierto de .NET y gran parte del modelo abierto de diseño y desarrollo que se utiliza actualmente en toda la empresa.

Ahora se ha lanzado la última versión, la Versión 4.0, con un número importante de mejoras y nuevas funciones.

## **Empezando con TypeScript 4.0**

La filosofía de Microsoft con TypeScript ha sido evitar cambios importantes, por lo que las aplicaciones TypeScript existentes se pueden transpilar con las nuevas herramientas de TypeScript.

Typescript solamente requiere actualizar usando NuGet o NPM para usarlo en cualquier entorno de desarrollo que admita instalarlo. Microsoft ofrece una [integración perfecta para Visual Studio](https://ciberninjas.com/visual-studio-code-1-47/) con un complemento de TypeScript 4.0 en Visual Studio Marketplace que agrega soporte para la depuración en el editor y un compilador de línea de comandos.

Si usa Visual Studio Code, obtendrá automáticamente compatibilidad con la versión más reciente en una próxima actualización, ya que se envía con una versión estable reciente.

Si deseas el nuevo TypeScript de inmediato, puedes descargar una compilación interna de Visual Studio Code, cambiar a la compilación nocturna de TypeScript desde la línea de comandos de Code o agregar un número de versión de TypeScript actualizado a su código y cambiar la versión del espacio de trabajo en utilizar.

Este último enfoque podría ser su mejor opción, ya que le permite mantener el código TypeScript 4.0 separado de otras versiones que podría necesitar mantener antes de actualizar.

Es posible que debas descargar una definición de servidor de idioma actualizada utilizando NPM y actualizar la configuración de usuario de TypeScript si desea que TypeScript 4.0 sea su valor predeterminado.

Aunque la escritura estática sigue siendo la innovación clave en TypeScript, el equipo de desarrollo ha ido mucho más allá, utilizando el lenguaje para ser pionero en nuevas funciones y admitir funciones de ECMAScript que pueden no haberse agregado todavía a JavaScript.

Como resultado, TypeScript 4.0 es una gran versión, que agrega soporte para nuevos tipos de datos, con un enfoque en tuplas.

## **Trabajar con tipos en matrices y tuplas**

Un problema en las versiones anteriores de TypeScript era trabajar con concatenaciones de matrices. Una función simple de JavaScript para concatenar dos matrices daría lugar a muchas sobrecargas, lo que haría que el código fuera difícil de leer y depurar.

Si deseaba asegurarse de que los tipos fueran correctos, necesitaba hacer mucho trabajo. TypeScript 4.0 facilita mucho las cosas, ya que ya no es necesario especificar los tipos de cada elemento en una matriz o tupla; en su lugar, puede utilizar genéricos para definir funciones.

Esto le permite operar en las matrices o tuplas subyacentes sin conocer sus tipos. El código resultante es más fácil de leer y todavía se escribe estrictamente bajo el capó, utilizando los tipos que ha usado para definir sus variables o matrices.

Las funciones escritas de esta manera se vuelven más portátiles, ya que no tienen que personalizarse para cada operación específica. Otras nuevas funciones de tupla ayudan a admitir la inferencia de tipos que pueden no estar completamente definidos, lo que nuevamente facilita la escritura de funciones portátiles que funcionan en cualquier matriz o tupla.

Otra característica nueva ayuda a mejorar la legibilidad del código, ya que TypeScript 4.0 agrega soporte para etiquetar elementos de tupla. Debe etiquetar todos los elementos y, si no están etiquetados, obtendrá un error.

Los elementos etiquetados no afectan el código subyacente que produce TypeScript, pero facilitan la documentación y el uso de herramientas del editor para ayudar a encontrar errores. Le ayudan a comprender lo que sucede en las matrices, lo que hace que un conjunto de tuplas etiquetadas se parezca mucho más a una lista de parámetros familiar.

Los cambios en la forma en que TypeScript administra las tuplas son probablemente los más importantes, ya que trabajar con matrices es un requisito común en las aplicaciones empresariales a gran escala.

No son los únicos cambios. Otros mejoran la forma en que TypeScript infiere los tipos en las clases o agregan nuevas funciones de ECMAScript al lenguaje, admitiendo nuevos operadores de asignación para simplificar su código.

## **Mejor código con mejores funciones del editor**

TypeScript mejorado no solo mejora su código, también mejora la compatibilidad con JavaScript en la familia de IDE de Visual Studio, con nuevas herramientas para refactorizar su código en ambos lenguajes.

La integración con JSDoc brinda a sus editores herramientas cuando el código está obsoleto, mostrando lo que debe cambiarse para estar listo para futuras versiones. Otros cambios hacen que el análisis del código en los servidores de idiomas sea más eficiente.

Lo que hace que los editores sean más receptivos al brindarle lo que el equipo de TypeScript llama una "experiencia semántica parcial", lo que le permite comenzar a codificar mientras se analizan todos sus archivos y se enumeran las dependencias.

Al analizar inicialmente solo los archivos cargados actualmente, puede comenzar a trabajar en segundos mientras el resto de su proyecto se analiza en segundo plano.

Hay algunos cambios importantes en TypeScript 4.0: por ejemplo, ya no puede usar propiedades para anular los descriptores de acceso en sus clases base. En versiones anteriores, solo obtendría un error si lo hizo en circunstancias específicas.

Ahora TypeScript trata esto como un error en todos los casos. Otros cambios incluyen requerir operandos opcionales para el operador de eliminación y desaprobar las funciones de fábrica de nodos más antiguas de TypeScript en favor de una nueva API. 

Estos solo deberían requerir cambios menores en su código, aclarando un puñado de inconsistencias y ayudando a reducir el riesgo de errores y errores.

Hay mucho que me gusta en TypeScript 4.0. Es una actualización fácil de versiones anteriores y, como se compila en JavaScript, no necesita realizar cambios en sus objetivos de tiempo de ejecución. Todo lo que necesita es un nuevo conjunto de servidores de idiomas para su entorno de desarrollo y un nuevo compilador.

El soporte mejorado para matrices complejas debería permitirle crear aplicaciones que funcionen bien con matrices de datos mixtas, evitando sobrecargas y haciendo que su código sea mucho más fácil de leer y comprender.

Tener tipos estáticos en tuplas y matrices debería reducir los errores, pero el beneficio real de TypeScript 4.0 proviene de simplificar lo que habría sido un código complejo en una estructura que facilita la búsqueda y corrección de errores.

### **Relacionados** <!-- omit in toc -->
<!-- https://www.infoworld.com/article/3572553/what-is-computer-vision-ai-for-images-and-video.html#tk.rss_all -->

[▷ Visual Studio Code 1.47: Ahora se desarrolla en Typescript](https://ciberninjas.com/visual-studio-code-1-47/)

[▷ Cómo Aprender Python en 2020 🐍](https://ciberninjas.com/python/)

[🧠 ▷ Cómo Aprender Inteligencia Artificial](https://ciberninjas.com/inteligencia-artificial/)

[🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](https://ciberninjas.com/que-aprender-sobre-machine-learning-2020/)

[▷ CadQuery: Módulo Python similar a OpenSCAD](https://ciberninjas.com/biblioteca%20impresoras%203d/2020/01/28/impresiones-3d-modulo-python-cadquery.html)

[▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](https://ciberninjas.com/aprendizaje-automatico-cursos-ingles/)

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![TypeScript 4.0: Comienza a escribir código más limpio y transparente](/assets/img/blog/typescript-4.webp "TypeScript 4.0: Comienza a escribir código más limpio y transparente")