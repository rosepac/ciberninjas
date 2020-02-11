---
layout: post
title: >
    El programa de autenticación USB Type-C se inicia para
    protegerse contra los ataques de hardware
published: false
author_profile: true
comments: true
date: 2019-01-13 12:01:20
tags:
    - autentificación
    - cables
    - dispositivos
    - hardware
    - protección
    - software
    - tipo C
    - usb
categories:
    - blog
    - hardware
    - seguridad
permalink: >
    /el-programa-de-autenticacion-usb-type-c-se-inicia-para-protegerse-contra-los-ataques-de-hardware
---
La disponibilidad generalizada de hardware malicioso de bajo costo ha llevado a muchos a simplemente deshabilitar los puertos no utilizados. A través de la adición de la autenticación criptográfica a los dispositivos USB tipo C, se ofrece un nivel de protección mucho mayor.

Los administradores de sistemas han tenido que tomar precauciones adicionales durante los últimos años para evitar el abuso de los puertos USB en los dispositivos. Hoy en día, el Foro de implementadores de USB ha lanzado oficialmente el [Programa de autenticación de tipo C de USB][1] que establece estándares para mejorar la seguridad.

> Explotar dispositivos USB y el protocolo en sí se ha vuelto demasiado fácil en los últimos años. 

Cuando se enchufa un cable USB, actualmente no hay una buena manera de determinar si hay algo malicioso en su interior. Las modificaciones de hardware a los cables permiten que se realicen algunos ataques extremadamente sigilosos que podrían ocultarse a simple vista.

Para los cargadores USB que negocian la entrega de energía con dispositivos conectados, todavía existe un alto riesgo de que una persona maliciosa falsifique los parámetros. Esto podría causar que un dispositivo se dañe físicamente al solicitar un voltaje que no se puede aceptar de manera segura.

Poder supervisar un posible espionaje dentro de nuestros dispositivos USB, Mundo Framework por @rosepac

Bajo el programa de autenticación de USB-IF, los OEM podrán certificar que sus productos USB Tipo-C están protegidos contra la mayoría de los métodos de ataque actuales. Los dispositivos certificados utilizarán el cifrado de 128 bits para la autenticación y verificar que no se hayan realizado modificaciones. DigiCert será el proveedor de infraestructura de clave pública y el administrador de los participantes del programa de CA.

Las políticas de software en los dispositivos de tipo C podrán restringir las funciones de USB según el estado de la certificación. Por ejemplo, sería posible solo permitir la carga de teléfonos en terminales públicos que pasan una verificación de validación.

En este momento, la participación en el programa de autenticación es opcional para los OEM. Sin embargo, no sería sorprendente que los fabricantes de hardware que trabajan en industrias sensibles acepten y adopten rápidamente la norma.

Sea como sea, podemos estar seguros de que todos los cargadores de teléfonos que ya están en las tiendas no agregarán ninguna protección adicional.

* * *


   


* * *


   


* * *


  



  



  @rosepac & @twitter & @facebook & adobe stock & pixabay donativo x paypal & donativo x criptomonedas


 [1]: https://www.businesswire.com/news/home/20190102005063/en/USB-IF-Launches-USB-Type-C%E2%84%A2-Authentication-Program/?feedref=JjAwJuNHiystnCoBq_hl-bsjWlVyeNLyq_m2tvaHJJaCbS9GfOaU05M3U1TVIJEgj_R0p0VFN6GsXdq8PYoIcFEYGffXvFUnUBNNmxNkJdnQqLx557vS7ZRxiEolcr-hVDp-2-rCtDK_aRLJhTuAhA==