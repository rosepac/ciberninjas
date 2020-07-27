---
author: rosepac
bootstrap: true
title: "AndOTP Aplicación de Doble Factor de Código Abierto para Android"
description: "La Mejor Aplicación \U0001F4F1 de Doble Factor de Código Abierto para Android"
excerpt: "La Mejor Aplicación \U0001F4F1 de Doble Factor de Código Abierto para Android"
date: 2019-09-15 18:47:00 +0200
tags:
  - Aplicaciones Seguridad
  - Autentificación
  - Doble Factor
thumbnail: /assets/img/blog/aplicacion-andotp.webp
feature-img: /assets/img/blog/aplicacion-andotp.webp
permalink: /andotp-aplicaci%C3%B3n-de-doble-factor-de-c%C3%B3digo-abierto-para-android/
canonical_URL: https://ciberninjas.com/andotp-aplicaci%C3%B3n-de-doble-factor-de-c%C3%B3digo-abierto-para-android/
---

Implementa contraseñas de un solo uso basadas en el tiempo (TOTP) y contraseñas de un solo uso basadas en HMAC (HOTP). Simplemente escanee el código QR e inicie sesión con el código generado de 6 dígitos.

> andOTP es una aplicación de autenticación de dos factores para Android 4.4+.

Este proyecto comenzó como una bifurcación de la gran aplicación [OTP Authenticator](https://github.com/0xbb/otp-authenticator) escrita por [Bruno Bierbaumer](https://github.com/0xbb) , que lamentablemente ha estado inactiva desde 2015. Hasta ahora, casi todos los aspectos de la aplicación se han cambiado / reescrito, por lo que el estado de la bifurcación del repositorio de Github se ha vuelto separado a [petición del usuario](https://github.com/andOTP/andOTP/issues/145) . &iexcl;Pero todo el crédito por la versión original y por comenzar este proyecto sigue en manos de Bruno\!

## **Caracteristicas de AndOTP**

* Gratis y de código abierto
* Requiere permisos mínimos
  * Acceso a la cámara para escanear códigos QR
  * Acceso al almacenamiento para la importación y exportación de la base de datos.
* Almacenamiento encriptado con dos backends:
  * Android KeyStore
  * Contraseña / PIN
* Múltiples opciones de respaldo:
  * Texto sin formato
  * Contraseña protegida
  * Cifrado OpenPGP
* Diseño de material minimalista y elegante con tres temas diferentes:
  * Ligero
  * Oscuro
  * Negro (para pantallas OLED)
* Gran usabilidad
* Compatible con Google Authenticator
* Algoritmos soportados:
  * TOTP (Contraseñas de un solo uso basadas en el tiempo) como se especifica en [RFC 6238](https://tools.ietf.org/html/rfc6238)
  * HOTP (contraseñas de un solo uso basadas en HMAC) como se especifica en [RFC 4226](https://tools.ietf.org/html/rfc4226)

## **Copias de Seguridad**

Para mantener la información de su cuenta lo más segura posible yOTP solo la almacena en archivos de datos cifrados. Una parte de la clave de cifrado utilizada para eso se almacena en el sistema Android KeyStore. La ventaja de este enfoque es que la clave se mantiene separada de los datos de las aplicaciones y, como beneficio adicional, puede respaldarse mediante criptografía de hardware (si su dispositivo lo admite).

Sin embargo, debido a esa separación, las copias de seguridad con aplicaciones de terceros como Titanium Backup no se pueden usar con andOTP. Dichas aplicaciones solo respaldan los archivos de datos cifrados y no la clave de cifrado, lo que los hace inútiles.

**&iexcl;Utilice solo las funciones de respaldo internas proporcionadas por andOTP para respaldar sus cuentas\!** **Todo lo demás dará como resultado la pérdida de datos.**

### Abrir las copias de seguridad en su PC

* [OpenPGP](http://openpgp.org/) : OpenPGP se puede usar para descifrar fácilmente las copias de seguridad cifradas con OpenPGP en su PC.
* [andOTP-decrypt](https://github.com/asmw/andOTP-decrypt) : un script de Python escrito por @asmw para descifrar copias de seguridad protegidas con contraseña en su PC (necesita más pruebas).

### Copias de Seguridad Automáticas

* BroadcastReceivers: AndOTP admite una serie de transmisiones para realizar copias de seguridad automáticas, por ejemplo. a través de Tasker. Estos se guardarán en el directorio de copia de seguridad definido.

  Estos solo funcionan cuando KeyStore se utiliza como mecanismo de cifrado

  * **org.shadowice.flocke.andotp.broadcast.PLAIN\_TEXT\_BACKUP** : realice una copia de seguridad de texto sin formato. **ADVERTENCIA** : &iexcl;Esto guardará sus tokens 2FA en el disco sin cifrar\!
  * **org.shadowice.flocke.andotp.broadcast.ENCRYPTED\_BACKUP** : realice una copia de seguridad cifrada de su base de datos 2FA utilizando la contraseña seleccionada en la configuración.

## **Migración**

Conoce las diferentes formas de migrar a andOTP desde otras aplicaciones 2FA. Para migrar sus cuentas de otras aplicaciones 2FA, tiene diferentes opciones, aquí enumeraré las que conozco.

### [android-otp-extractor](https://github.com/puddly/android-otp-extractor)

* **Lenguaje** : Python
* **Creado por** : [puddly](https://github.com/puddly)
* **Requiere** : un teléfono rooteado y acceso a una PC con ADB y Python 3.6+
* Genera
  * Códigos QR para ser escaneados por andOTP
  * El archivo JSON se importará por andOTP como copia de seguridad (con la opción `--andotp-backup`)
* Apoya
  * Autenticador de Google
  * Autenticador de Microsoft
  * Authy
  * Duo Mobile
  * FreeOTP

### [freeotp\_migrate.py](https://www.stavros.io/tips/migrate-freeotp-to-andotp/)

* **Lenguaje** : Python
* **Creado por** : [skorokithakis](https://github.com/skorokithakis) (ver [\# 66](https://github.com/flocke/andOTP/issues/66) )
* **Requiere** : acceso a una PC con ADB y Python 3, teléfono rooteado
* **Genera** : archivos JSON para importar como copia de seguridad en andOTP

### [freeotp-export](https://github.com/viljoviitanen/freeotp-export)

* **Lenguaje** : JavaScript
* **Creado por** : [viljoviitanen](https://github.com/viljoviitanen)
* **Requiere** : un teléfono rooteado **o** acceso a una PC con ADB
* **Genera** : códigos QR para ser escaneados por andOTP

### [freeotp a andotp](https://github.com/rich-murphey/freeotp-to-andotp)

* **Lenguaje** : Python
* **Creado por** : [rich-murphey](https://github.com/rich-murphey)
* **Requiere** : cargar copia de seguridad de freeotp a la computadora, convertir y descargar al teléfono
* **Genera** : un archivo de copia de seguridad andotp json.

> **Fuente del Repositorio de Github**\: [AndoTP](https://kutt.it/andotp-github "Enlace al código de la librería libre de Github del proyecto AndoTP")

[🎁 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🛒](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}