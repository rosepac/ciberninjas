---
layout: post
title: >
    Una base de datos expuso datos personales de 202M
    solicitantes de empleo en China
published: false
author_profile: true
comments: false
date: 2019-01-11 08:01:57
tags:
    - alterada
    - ataque
    - base
    - china
    - datos
    - expuestos
    - hacking
    - mongoDB
    - personales
categories:
    - blog
    - seguridad
permalink: >
    /una-base-de-datos-expuso-datos-personales-de-202m-solicitantes-de-empleo-en-china
---
Datos personales que pertenecen a más de 202 millones de solicitantes de empleo en China, incluida información como números de teléfono, direcciones de correo electrónico, licencias de conducir y expectativas salariales, estaban disponibles para cualquiera que supiera dónde buscar hasta hace tres años, todo ello debido a una base de datos insegura.

Eso aseguran los [hallazgos publicados por el investigador de seguridad Bob Diachenko,][1] quien ubicó una instancia de MongoDB abierta y desprotegida a fines de diciembre que contenía 202,730,434 registros &#171;muy detallados&#187;. La base de datos se indexó en los motores de búsqueda de datos [Binary Edge][2] y [Shodan][3] , y se pudo ver libremente sin contraseña ni inicio de sesión. Solo se hizo privada después de que [Diachenko publicara información][4] sobre su existencia en Twitter.

Diachenko, quien es director de investigación de riesgo cibernético en [Hacken][5] , no pudo relacionar la base de datos con un servicio específico, pero sí encontró un repositorio de GitHub de hace tres años dentro de una aplicación que incluía &#171;patrones estructurales idénticos a los utilizados en los curriculums vitae expuestos”. Los registros parecen contener datos que fueron extraídos de los documentos clasificados chinos, incluido el 58.com, web similar a la archiconocida: Craigslist.

Un portavoz de 58.com negó que los registros fueran de su página, afirmando que su servicio había sido víctima de un arañazo por parte de otros.

&#171;Hemos buscado en toda nuestra base de datos e investigado todo el almacenamiento, resultó que los datos no son filtrados por nosotros. Parece que los datos se filtran de un tercero derivado de muchos lugares web de CV &#171;, dijo un portavoz a Diachenko.

TechCrunch se contactó con 58.com pero aún no hemos recibido una respuesta.

Si bien la base de datos ahora ha sido protegida, fue potencialmente vulnerable durante tres años y ya existe evidencia de que se ha accedido regularmente. Aunque, una vez más, no está claro por quién.

&#171;Vale la pena señalar que en la base de [MongoDB][6] en el registro mostró al menos una docena de IP que podrían haber accedido a los datos antes de que se desconectara&#187;, escribió Diachenko.

Aquí hay un montón de misterio: no está claro si 58.com estaba detrás del agujero o si es un servicio rival o un raspador, pero lo más seguro es que esta vulnerabilidad es una de las más grandes encontradas en china.

* * *


   


* * *


   


* * *


  



  



  @rosepac & @twitter & @facebook & adobe stock & pixabay donativo x paypal & donativo x criptomonedas


 [1]: https://blog.hackenproof.com/industry-news/202-million-private-resumes-exposed
 [2]: https://app.binaryedge.io/
 [3]: https://www.shodan.io/
 [4]: https://twitter.com/MayhemDayOne/status/1078627070836703233
 [5]: https://hacken.io/
 [6]: https://www.mongodb.com/es