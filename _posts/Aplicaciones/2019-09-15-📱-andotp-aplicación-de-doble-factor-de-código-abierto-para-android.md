---
title: "\U0001F4F1 andOTP Aplicación de Doble Factor de Código Abierto para Android"
description: "\U0001F510 La Mejor Aplicación \U0001F4F1 de Doble Factor de Código Abierto para Android"
excerpt: "\U0001F510 La Mejor Aplicación \U0001F4F1 de Doble Factor de Código Abierto para Android"
date: 2019-09-15 18:47:00 +0200
categories:
  - Actualidad
  - Aplicaciones
  - Seguridadtags:
  - Autentificación
  - Doble Factor
thumbnail: /assets/img/aplicacion-andotp.webp
feature-img: /assets/img/aplicacion-andotp.webp
toc: true
toc_label: Contenidos
toc_icon: user-ninja
toc_sticky: true
---

> andOTP es una aplicaci&oacute;n de autenticaci&oacute;n de dos factores para Android 4.4+.

Implementa contrase&ntilde;as de un solo uso basadas en el tiempo (TOTP) y contrase&ntilde;as de un solo uso basadas en HMAC (HOTP). Simplemente escanee el c&oacute;digo QR e inicie sesi&oacute;n con el c&oacute;digo generado de 6 d&iacute;gitos.

Este proyecto comenz&oacute; como una bifurcaci&oacute;n de la gran aplicaci&oacute;n [OTP Authenticator](https://github.com/0xbb/otp-authenticator) escrita por [Bruno Bierbaumer](https://github.com/0xbb) , que lamentablemente ha estado inactiva desde 2015. Hasta ahora, casi todos los aspectos de la aplicaci&oacute;n se han cambiado / reescrito, por lo que el estado de la bifurcaci&oacute;n del repositorio de Github se ha vuelto separado a [petici&oacute;n del usuario](https://github.com/andOTP/andOTP/issues/145) . &iexcl;Pero todo el cr&eacute;dito por la versi&oacute;n original y por comenzar este proyecto sigue en manos de Bruno\!

## Se Busca Ayudante \*

Actualmente no tengo mucho tiempo para dedicarme al desarrollo y al PTP, por lo que cualquier contribuci&oacute;n siempre es bienvenida. No se preocupe, a&uacute;n continuar&eacute; desarroll&aacute;ndome y el TOT solo disminuir&aacute; la velocidad incre&iacute;ble que ten&iacute;a al principio.

## Caracteristicas

* Gratis y de c&oacute;digo abierto
* Requiere permisos m&iacute;nimos
  * Acceso a la c&aacute;mara para escanear c&oacute;digos QR
  * Acceso al almacenamiento para la importaci&oacute;n y exportaci&oacute;n de la base de datos.
* Almacenamiento encriptado con dos backends:
  * Android KeyStore
  * Contrase&ntilde;a / PIN
* M&uacute;ltiples opciones de respaldo:
  * Texto sin formato
  * Contrase&ntilde;a protegida
  * Cifrado OpenPGP
* Dise&ntilde;o de material minimalista y elegante con tres temas diferentes:
  * Ligero
  * Oscuro
  * Negro (para pantallas OLED)
* Gran usabilidad
* Compatible con Google Authenticator
* Algoritmos soportados:
  * TOTP (Contrase&ntilde;as de un solo uso basadas en el tiempo) como se especifica en [RFC 6238](https://tools.ietf.org/html/rfc6238)
  * HOTP (contrase&ntilde;as de un solo uso basadas en HMAC) como se especifica en [RFC 4226](https://tools.ietf.org/html/rfc4226)

## Copias de Seguridad

Para mantener la informaci&oacute;n de su cuenta lo m&aacute;s segura posible yOTP solo la almacena en archivos de datos cifrados. Una parte de la clave de cifrado utilizada para eso se almacena en el sistema Android KeyStore. La ventaja de este enfoque es que la clave se mantiene separada de los datos de las aplicaciones y, como beneficio adicional, puede respaldarse mediante criptograf&iacute;a de hardware (si su dispositivo lo admite).

Sin embargo, debido a esa separaci&oacute;n, las copias de seguridad con aplicaciones de terceros como Titanium Backup no se pueden usar con andOTP. Dichas aplicaciones solo respaldan los archivos de datos cifrados y no la clave de cifrado, lo que los hace in&uacute;tiles.

**&iexcl;Utilice solo las funciones de respaldo internas proporcionadas por andOTP para respaldar sus cuentas\!** **Todo lo dem&aacute;s dar&aacute; como resultado la p&eacute;rdida de datos.**

### Abrir las copias de seguridad en su PC

* [OpenPGP](http://openpgp.org/) : OpenPGP se puede usar para descifrar f&aacute;cilmente las copias de seguridad cifradas con OpenPGP en su PC.
* [andOTP-decrypt](https://github.com/asmw/andOTP-decrypt) : un script de Python escrito por @asmw para descifrar copias de seguridad protegidas con contrase&ntilde;a en su PC (necesita m&aacute;s pruebas).

### Copias de Seguridad Autom&aacute;ticas

* BroadcastReceivers: AndOTP admite una serie de transmisiones para realizar copias de seguridad autom&aacute;ticas, por ejemplo. a trav&eacute;s de Tasker. Estos se guardar&aacute;n en el directorio de copia de seguridad definido.

  Estos solo funcionan cuando KeyStore se utiliza como mecanismo de cifrado

  * **org.shadowice.flocke.andotp.broadcast.PLAIN\_TEXT\_BACKUP** : realice una copia de seguridad de texto sin formato. **ADVERTENCIA** : &iexcl;Esto guardar&aacute; sus tokens 2FA en el disco sin cifrar\!
  * **org.shadowice.flocke.andotp.broadcast.ENCRYPTED\_BACKUP** : realice una copia de seguridad cifrada de su base de datos 2FA utilizando la contrase&ntilde;a seleccionada en la configuraci&oacute;n.

## Migraci&oacute;n

Conoce las diferentes formas de migrar a andOTP desde otras aplicaciones 2FA. Para migrar sus cuentas de otras aplicaciones 2FA, tiene diferentes opciones, aqu&iacute; enumerar&eacute; las que conozco.

### [android-otp-extractor](https://github.com/puddly/android-otp-extractor)

* **Lenguaje** : Python
* **Creado por** : [puddly](https://github.com/puddly)
* **Requiere** : un tel&eacute;fono rooteado y acceso a una PC con ADB y Python 3.6+
* Genera
  * C&oacute;digos QR para ser escaneados por andOTP
  * El archivo JSON se importar&aacute; por andOTP como copia de seguridad (con la `--andotp-backup`opci&oacute;n)
* Apoya
  * Autenticador de Google
  * Autenticador de Microsoft
  * Authy
  * Duo Mobile
  * FreeOTP

### [freeotp\_migrate.py](https://www.stavros.io/tips/migrate-freeotp-to-andotp/)

* **Lenguaje** : Python
* **Creado por** : [skorokithakis](https://github.com/skorokithakis) (ver [\# 66](https://github.com/flocke/andOTP/issues/66) )
* **Requiere** : acceso a una PC con ADB y Python 3, tel&eacute;fono rooteado
* **Genera** : archivos JSON para importar como copia de seguridad en andOTP

### [freeotp-export](https://github.com/viljoviitanen/freeotp-export)

* **Lenguaje** : JavaScript
* **Creado por** : [viljoviitanen](https://github.com/viljoviitanen)
* **Requiere** : un tel&eacute;fono rooteado **o** acceso a una PC con ADB
* **Genera** : c&oacute;digos QR para ser escaneados por andOTP

### [freeotp a andotp](https://github.com/rich-murphey/freeotp-to-andotp)

* **Lenguaje** : Python
* **Creado por** : [rich-murphey](https://github.com/rich-murphey)
* **Requiere** : cargar copia de seguridad de freeotp a la computadora, convertir y descargar al tel&eacute;fono
* **Genera** : un archivo de copia de seguridad andotp json.

**Github**\: [ANDOTP](https://kutt.it/andotp-github "Enlace al código de la librería libre de Github del proyecto ANDOTP")
{: .notice--info}