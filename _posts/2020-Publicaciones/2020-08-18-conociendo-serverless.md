---

author: rosepac
bootstrap: true
comments: false
tags:
- Aplicaciones Multiplataforma
thumbnail: /assets/img/blog/18-conociendo-serverless.webp
feature-img: /assets/img/blog/18-conociendo-serverless.webp
title: '▷ Conociendo la computación Serverless o sin servidor'
description: >-
  La nueva tecnología serverless o sin servidor está realizando grandes cambios en la forma en la que trabaja, implementa, diseña y ejecuta las aplicaciones.
excerpt: >-
  La nueva tecnología serverless o sin servidor está realizando grandes cambios en la forma en la que trabaja, implementa, diseña y ejecuta las aplicaciones.
canonical_URL: https://ciberninjas.com/conociendo-serverless/
permalink: /conociendo-serverless/
date: 2020-08-18 12:12:12
published: true

---
<!-- La mayoría de los proveedores sin servidor ofrecen servicios de almacenamiento y bases de datos a sus clientes, y muchos también tienen plataformas de función como servicio (FaaS) , como Cloudflare Workers . Estas plataformas pueden ejecutar fragmentos de código en el borde sin almacenar ningún dato. -->

La nueva **tecnología serverless** o **sin servidor** está realizando grandes cambios en la forma en la que trabaja, implementa, diseña y ejecuta las aplicaciones.

Se estima que al pasar a la tecnología sin servidor, puedes ahorrar entre un 60% y un 80% de los costos de infraestructuras y mantenimiento.

En los primeros días de la web, cualquiera que quisiera crear una aplicación web tenía que poseer el hardware físico necesario para ejecutar un servidor, lo cual es una tarea complicada y costosa.

Luego vino la nube, donde se podían alquilar de forma remota cantidades fijas de servidores o cantidades de espacio de servidor. Los desarrolladores y las empresas que alquilan estas unidades fijas de espacio de servidor generalmente compran en exceso para asegurarse de que un pico en el tráfico o la actividad no exceda sus límites mensuales y rompa sus aplicaciones.

Esto significaba que gran parte del espacio del servidor por el que se pagaba se desperdiciaba. Los proveedores de la nube han introducido modelos de escalado automático para abordar el problema, pero incluso con el escalado automático, un pico de actividad no deseado, como un ataque DDoS, podría terminar siendo muy costoso.

La computación sin servidor permite a los desarrolladores comprar servicios de backend con un sistema flexible de "pago por uso", lo que significa que los desarrolladores solo tienen que pagar por los servicios que utilizan. Esto es como cambiar de un plan de datos de teléfono celular con un límite fijo mensual a uno que solo cobra por cada byte de datos que realmente se usa.

El término 'sin servidor' es algo engañoso, ya que todavía hay servidores que brindan estos servicios de backend, pero todos los problemas de infraestructura y espacio del servidor son manejados por el proveedor. Sin servidor significa que los desarrolladores pueden hacer su trabajo sin tener que preocuparse por los servidores en absoluto.

- [**¿De qué trata la tecnología sin servidor?**](#de-qué-trata-la-tecnología-sin-servidor)
- [**¿Qué son los servicios backend? ¿Cuál es la diferencia entre frontend y backend?**](#qué-son-los-servicios-backend-cuál-es-la-diferencia-entre-frontend-y-backend)
- [**¿Qué tipo de servicios de backend puede proporcionar la informática sin servidor?**](#qué-tipo-de-servicios-de-backend-puede-proporcionar-la-informática-sin-servidor)
- [**Beneficios de la tecnología Serverless**](#beneficios-de-la-tecnología-serverless)
- [**El desafío de pasarse a la tecnología Serverless**](#el-desafío-de-pasarse-a-la-tecnología-serverless)

## **¿De qué trata la tecnología sin servidor?**

La computación sin servidor es un método para proporcionar servicios de backend según se utilizan. Una arquitectura sin servidor permite a los usuarios escribir e implementar código sin la molestia de preocuparse por la infraestructura subyacente.

A una empresa que obtiene servicios de backend de un proveedor sin servidor se le cobra en función de su cálculo y no tiene que reservar ni pagar una cantidad fija de ancho de banda o una cantidad de servidores, ya que el servicio se escala automáticamente.

Tenga en cuenta que, aunque se denominan sin servidor, los servidores físicos todavía se utilizan, pero los desarrolladores no necesitan ser conscientes de ellos.

## **¿Qué son los servicios backend? ¿Cuál es la diferencia entre frontend y backend?**

El desarrollo de aplicaciones generalmente se divide en dos dominios: el frontend y el backend. La interfaz es la parte de la aplicación que los usuarios ven e interactúan, como el diseño visual. El backend es la parte que el usuario no ve; esto incluye el servidor donde se encuentran los archivos de la aplicación y la base de datos donde se conservan los datos del usuario y la lógica empresarial.

Por ejemplo, imaginemos un sitio web que vende entradas para conciertos. Cuando un usuario escribe una solicitud en la ventana del navegador, el navegador envía una solicitud al servidor backend, que responde con los datos del sitio web.

A continuación, el usuario verá la interfaz del sitio web, que incluirá texto, imágenes y campos de formulario para que el usuario los complete. Luego, el usuario puede interactuar con uno de los campos del formulario en la interfaz para buscar su acto musical favorito.

Cuando el usuario hace clic en 'enviar', esto activará otra solicitud al backend. El código de backend verifica su base de datos para ver si existe un artista con este nombre y, de ser así, cuándo jugarán a continuación y cuántas entradas están disponibles.

El backend luego pasará esos datos a la interfaz, y la interfaz mostrará los resultados de una manera que tenga sentido para el usuario. 

## **¿Qué tipo de servicios de backend puede proporcionar la informática sin servidor?**

La mayoría de los proveedores sin servidor ofrecen servicios de almacenamiento y bases de datos a sus clientes, y muchos también tienen plataformas de función como servicio (FaaS), como Cloudflare Workers . Estas plataformas pueden ejecutar fragmentos de código en el borde sin almacenar ningún dato.

## **Beneficios de la tecnología Serverless**

Los beneficios que aporta la tecnología sin servidor:

- Ahorro de un alto costo por un gran uso del servidor.
- Olvídate de la gestión del servidor: Los servidores siguen ahí, pero su proveedor de nube los extrae y los administra. Ya no son su problema, lo mismo ocurre con los balanceadores de carga, el escalado automático y muchas otras operaciones.
- Deja de pagar por cosas que no usas: Paga por ejecución de función y no por hora. Ya no necesita sobreaprovisionar y pagar en exceso por la infraestructura. Especialmente en preparación para esos períodos de máxima demanda.
- Construye cosas más rápido: Debido a que todo lo que necesita hacer es implementar su código, no perderá tiempo en poner en marcha y configurar servidores. Como resultado, iterará y lanzará productos más rápido.
- No más dolores de cabeza ante la necesidad de escalar: Las funciones sin servidor se activan en milisegundos en el momento en que aumenta la demanda. Las funciones recién creadas están inmediatamente listas para manejar nuevas solicitudes. Y tú, simplemente siéntate y relájate.

## **El desafío de pasarse a la tecnología Serverless**

Desafortunadamente, la transición a sin servidor no viene sin una serie de desafíos que deberá superar. Una encuesta realizada en más de 1500 empresas, que se estaban moviendo a la tecnología sin servidor, nos ha mostrado cuáles son los mayores desafíos por los que una organización aún no ha adoptado la tecnología sin servidor o los desafíos que enfrentan después de la adopción:

- Miedo a lo desconocido: Las reglas del juego son diferentes cuando se trata de infraestructura sin servidor. La forma en que diseña, codifica e implementa sus aplicaciones cambia y hay muchos nuevos desafíos ocultos en el camino que pueden descarrilar su proyecto.
- Preocupaciones de seguridad: ¿Cómo se asegura algo que no comprende? Al no tener una arquitectura determinista desde el primer día para su aplicación, el equipo de seguridad tendrá dificultades para implementar las medidas adecuadas.
- Educar al personal actual: ¿El trabajo de su equipo es crear aplicaciones o ejecutar aulas? ¿Cómo puede empezar a aprender acerca de la tecnología sin servidor y luego escalar ese conocimiento?
- Dependencia de un proveedor: Los servicios sin servidor tienden a ser muy complicados. Es posible que a algunos no les importe eso, pero para algunos es un requisito la nube múltiple, entonces, ¿cómo protegerse del bloqueo del proveedor?
- Es difícil de probar y depurar: La observabilidad y las pruebas dentro de las aplicaciones sin servidor es todo un desafío en sí mismo. En parte, puede resolver esto con herramientas de terceros, pero integrarlas en sus procesos y aplicaciones existentes puede ser difícil.
<!-- https://www.cloudflare.com/learning/serverless/what-is-serverless/ -->

### **Relacionados** <!-- omit in toc -->

[▷ Webiny Framework: Crea aplicaciones web sin servidor](https://ciberninjas.com/webiny-aplicaciones-sin-servidor/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](https://www.amazon.es/shop/cibercursos "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> **Fuente**: [Blog oficial de React](https://reactjs.org/blog/2020/08/10/react-v17-rc.html){:target="_blank" rel="nofollow,noreferrer"} por Kathryn Whitenton de NNGroup.