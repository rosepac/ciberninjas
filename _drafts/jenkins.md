---
author_profile: false
title: 'Jenkins, sistema de integración continua CI / CD'
description: 'Jenkins, sistema de integración continua CI / CD'
excerpt: 'Jenkins, sistema de integración continua CI / CD'
comments: true
date: 2019-09-01 07:50:00 +0200
tags:
  - Integración
  - Continua
categories:
  - Conociendo
---

## &iquest;Qu&eacute; es Jenkins?

**Jenkins**&nbsp;es un servidor de integraci&oacute;n continua de c&oacute;digo abierto capaz de organizar una cadena de acciones que ayudan a lograr el proceso de integraci&oacute;n continua (y no solo) de manera automatizada.

Jenkins est&aacute; completamente escrito en Java. Jenkins es una aplicaci&oacute;n ampliamente utilizada en todo el mundo que tiene alrededor de 300k instalaciones y crece d&iacute;a a d&iacute;a.

Es una aplicaci&oacute;n basada en servidor y requiere un servidor web como Apache Tomcat. La raz&oacute;n por la que Jenkins se hizo tan popular es porque supervisa las tareas repetidas que surgen durante el desarrollo de un proyecto. Por ejemplo, si su equipo est&aacute; desarrollando un proyecto, Jenkins probar&aacute; continuamente las compilaciones de su proyecto y le mostrar&aacute; los errores en las primeras etapas de su desarrollo.

Al usar Jenkins, las compa&ntilde;&iacute;as de software pueden acelerar su proceso de desarrollo de software, ya que Jenkins puede automatizar la compilaci&oacute;n y las pruebas a un ritmo r&aacute;pido. Jenkins admite el ciclo de vida completo de desarrollo de software desde la construcci&oacute;n, prueba, documentaci&oacute;n del software, implementaci&oacute;n y otras etapas de un ciclo de vida de desarrollo de software.

## **&iquest;Qu&eacute; es la integraci&oacute;n continua?**

En la integraci&oacute;n continua despu&eacute;s de una confirmaci&oacute;n de c&oacute;digo, el software se crea y prueba de inmediato. En un proyecto grande con muchos desarrolladores, los compromisos se realizan muchas veces durante un d&iacute;a. Con cada c&oacute;digo de confirmaci&oacute;n se crea y se prueba. Si se pasa la prueba, se prueba la compilaci&oacute;n para la implementaci&oacute;n. Si la implementaci&oacute;n es exitosa, el c&oacute;digo se env&iacute;a a producci&oacute;n. Este compromiso, compilaci&oacute;n, prueba e implementaci&oacute;n es un proceso continuo y de ah&iacute; el nombre de integraci&oacute;n / implementaci&oacute;n continua.

Una tuber&iacute;a de integraci&oacute;n continua es un poderoso instrumento que consiste en un conjunto de herramientas dise&ntilde;adas para&nbsp;**alojar**&nbsp;,&nbsp;**monitorear**&nbsp;,&nbsp;**compilar**&nbsp;y&nbsp;**probar**&nbsp;c&oacute;digo, o cambios de c&oacute;digo, como:

* **Servidor de integraci&oacute;n continua**&nbsp;(Jenkins, Bamboo, CruiseControl, TeamCity y otros)
* **Herramienta de control de fuente**&nbsp;(por ejemplo, CVS, SVN, GIT, Mercurial, Perforce, ClearCase y otros)
* **Herramienta de compilaci&oacute;n**&nbsp;(Make, ANT, Maven, Ivy, Gradle y otras)
* **Marco de pruebas de automatizaci&oacute;n**&nbsp;(Selenium, Appium, TestComplete, UFT y otros)

## **&iquest;Por qu&eacute; debo realizar la integraci&oacute;n continua con Jenkins?**

Algunas personas podr&iacute;an pensar que la forma tradicional de desarrollar el software es la mejor. Comprendamos las ventajas de CI con Jenkins con el siguiente ejemplo

Imaginemos que hay alrededor de 10 desarrolladores que est&aacute;n trabajando en un repositorio compartido. Algunos desarrolladores completan su tarea en 25 d&iacute;as, mientras que otros tardan 30 d&iacute;as en completarse.

### Antes de trabajar con Jenkins

* Una vez que todos los desarrolladores hab&iacute;an completado sus tareas de codificaci&oacute;n asignadas, sol&iacute;an confirmar su c&oacute;digo al mismo tiempo. M&aacute;s tarde, Build se prueba y se implementa.

* Compilaci&oacute;n de c&oacute;digo construida, y el ciclo de prueba fue muy poco frecuente, y se realiz&oacute; una sola compilaci&oacute;n despu&eacute;s de muchos d&iacute;as.
* Dado que el c&oacute;digo se cre&oacute; de una vez, algunos desarrolladores tendr&iacute;an que esperar hasta que otros desarrolladores terminen de codificar para verificar su compilaci&oacute;n.
* No es una tarea f&aacute;cil aislar, detectar y corregir errores para m&uacute;ltiples confirmaciones.
* El proceso de creaci&oacute;n y prueba de c&oacute;digo es completamente manual, por lo que hay muchas posibilidades de falla.
* El c&oacute;digo se implementa una vez que todos los errores se corrigen y prueban.
* El ciclo de desarrollo es lento.

### Despu&eacute;s de trabajar con Jenkins

* El c&oacute;digo se crea y prueba tan pronto como el desarrollador lo confirma. Jenkin compilar&aacute; y probar&aacute; el c&oacute;digo muchas veces durante el d&iacute;a.
* Si la compilaci&oacute;n es exitosa, Jenkins desplegar&aacute; la fuente en el servidor de prueba y notificar&aacute; al equipo de implementaci&oacute;n.
* Si la compilaci&oacute;n falla, Jenkins notificar&aacute; los errores al equipo de desarrolladores.
* El c&oacute;digo se crea inmediatamente despu&eacute;s de que cualquiera de los desarrolladores se compromete.
* Dado que el c&oacute;digo se construye despu&eacute;s de cada confirmaci&oacute;n de un solo desarrollador, es f&aacute;cil detectar qu&eacute; c&oacute;digo caus&oacute; que fallara la compilaci&oacute;n.
* Proceso automatizado de construcci&oacute;n y prueba que ahorra tiempo y reduce defectos.
* El c&oacute;digo se implementa despu&eacute;s de cada compilaci&oacute;n y prueba exitosas.
* El ciclo de desarrollo es r&aacute;pido. Las nuevas funciones est&aacute;n m&aacute;s disponibles para los usuarios. Aumenta las ganancias.

## **Complementos de Jenkins**

Por defecto, Jenkins viene con un conjunto limitado de caracter&iacute;sticas. Si desea integrar su instalaci&oacute;n de Jenkins con herramientas de control de versiones como Git, entonces necesita instalar complementos relacionados con Git. De hecho, para la integraci&oacute;n con herramientas como Maven, Amazon EC2, debe instalar los complementos respectivos en su Jenkins.

## **Ventajas de usar Jenkins**

* Jenkins est&aacute; siendo administrada por la comunidad, que es muy abierta. Todos los meses, celebran reuniones p&uacute;blicas y reciben aportes del p&uacute;blico para el desarrollo del proyecto Jenkins.
* Hasta ahora, alrededor de 280 entradas est&aacute;n cerradas, y el proyecto publica un lanzamiento estable cada tres meses.
* A medida que la tecnolog&iacute;a crece, tambi&eacute;n lo hace Jenkins. Hasta ahora, Jenkins tiene alrededor de 320 complementos publicados en su base de datos de complementos. Con los complementos, Jenkins se vuelve a&uacute;n m&aacute;s potente y rico en funciones.
* Jenkins tambi&eacute;n admite arquitectura basada en la nube para que pueda implementar Jenkins en plataformas basadas en la nube.
* La raz&oacute;n por la que Jenkins se hizo popular es que fue creado por un desarrollador para desarrolladores.

## **Desventajas de usar Jenkins**

Aunque Jenkins es una herramienta muy poderosa, tiene sus defectos.

* Su interfaz est&aacute; desactualizada y no es f&aacute;cil de usar en comparaci&oacute;n con las tendencias actuales de la interfaz de usuario.
* Aunque Jenkins es amado por muchos desarrolladores, no es tan f&aacute;cil mantenerlo porque Jenkins se ejecuta en un servidor y requiere algunas habilidades como administrador del servidor para monitorear su actividad.
* Una de las razones por las cuales muchas personas no implementan Jenkins se debe a su dificultad para instalar y configurar Jenkins.
* Las integraciones continuas se rompen regularmente debido a algunos peque&ntilde;os cambios de configuraci&oacute;n. La integraci&oacute;n continua se detendr&aacute; y, por lo tanto, requiere cierta atenci&oacute;n del desarrollador.

## **Historia de Jenkins**

* Kohsuke Kawaguchi, un desarrollador de Java, que trabaja en SUN Microsystems, estaba cansado de construir el c&oacute;digo y corregir errores repetidamente. En 2004, cre&oacute; un servidor de automatizaci&oacute;n llamado Hudson que automatiza la tarea de compilaci&oacute;n y prueba.
* En 2011, Oracle, propietario de Sun Microsystems, tuvo una disputa con la comunidad de c&oacute;digo abierto de Hudson, por lo que bifurc&oacute; a Hudson y lo renombr&oacute; como Jenkins.
* Tanto Hudson como Jenkins continuaron operando de manera independiente. Pero en poco tiempo, Jenkins adquiri&oacute; muchos proyectos y contribuyentes, mientras que Hudson se qued&oacute; con solo 32 proyectos. Con el tiempo, Jenkins se hizo m&aacute;s popular y Hudson ya no se mantiene.

## Recursos

* [Jenkins X](https://jenkins-x.io/){: target="_blank"}&nbsp;: una soluci&oacute;n guiada de integraci&oacute;n continua / entrega continua para aplicaciones nativas de la nube modernas con Jenkins en Kubernetes. Obtenga m&aacute;s informaci&oacute;n sobre&nbsp;[Jenkins X en las publicaciones de blog de James Strachan](https://jenkins.io/blog/2018/03/19/introducing-jenkins-x/){: target="_blank"}&nbsp;, l&iacute;der del proyecto, y Kohsuke Kawaguchi, fundador del proyecto Jenkins.
* Sitio web del proyecto&nbsp;[Jenkins X](https://jenkins-x.io/){: target="_blank"}&nbsp;
* [Jenkins Essentials](https://github.com/jenkinsci/jep/blob/master/jep/301/README.adoc){: target="_blank"}&nbsp;: un desaf&iacute;o de Kohsuke a la comunidad para hacer que Jenkins se pueda descargar, instalar y usar en cinco minutos.
  * [Visi&oacute;n general](https://jenkins.io/blog/2018/04/06/jenkins-essentials/){: target="_blank"}
  * [Presentando Jenkins Essentials](https://jenkins.io/blog/2018/03/20/evolving-mission-of-jenkins/){: target="_blank"}&nbsp;
* [Blue Ocean UX gr&aacute;fico](https://jenkins.io/projects/blueocean/){: target="_blank"}&nbsp;: una experiencia de usuario intuitiva para Jenkins que hace que la entrega continua sea accesible para todos los usuarios.
  * [Serie de videos Blue Ocean](https://www.youtube.com/playlist?list=PLvBBnHmZuNQLQR4QykYaq83XzbrFOob7v){: target="_blank"}&nbsp;
* [Tuber&iacute;a declarativa](https://jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline){: target="_blank"}&nbsp;: una sintaxis declarativa simple, para definir las tuber&iacute;as de entrega como c&oacute;digo.
  * Lea el blog: &nbsp;*[Anuncio de disponibilidad general de tuber&iacute;a declarativa](https://www.cloudbees.com/blog/announcing-general-availability-declarative-pipeline)*&nbsp;
* *[Jenkins Pipeline](https://jenkins.io/solutions/pipeline/){: target="_blank"}*&nbsp;: canalizaci&oacute;n como c&oacute;digo, un potente lenguaje de secuencias de comandos que le permite crear y administrar su entrega de software utilizando las mejores pr&aacute;cticas de desarrollo.
  * Gu&iacute;a t&eacute;cnica:&nbsp;*[Jenkins Pipeline con complementos](https://www.cloudbees.com/resource/whitepaper/jenkins-pipeline-plugins)*
  * Libro blanco:&nbsp;*[uso del complemento de canalizaci&oacute;n para acelerar la entrega continua](https://www.cloudbees.com/resource/whitepaper/using-pipeline-plugin-accelerate-continuous-delivery)*
  * [Serie de videos&nbsp;*Jenkins Minute*](https://www.youtube.com/playlist?list=PLvBBnHmZuNQJsTCaXs91HRrmso7RNSl-L){: target="_blank"}&nbsp;: vea la serie de videos de tutoriales cortos sobre el uso de Jenkins Pipeline
  * Publicaci&oacute;n en blog:&nbsp;*[Las 10 mejores pr&aacute;cticas para el complemento de canalizaci&oacute;n de Jenkins](https://www.cloudbees.com/blog/top-10-best-practices-jenkins-pipeline-plugin)*
{: .notice--info}

### **Recursos adicionales**

* [Blog de la comunidad de Jenkins](https://jenkins.io/node/){: target="_blank"}
* [Recursos de Jenkins comisariados por la comunidad](https://hackr.io/tutorials/learn-jenkins){: target="_blank"}
* [P&aacute;ginas Wiki del proyecto Jenkins](https://wiki.jenkins.io/display/JENKINS/Home){: target="_blank"}
* [Jenkins Subreddit](https://www.reddit.com/r/jenkinsci/){: target="_blank"}
* [Tutorial de Jenkins](https://www.edureka.co/blog/jenkins-tutorial/){: target="_blank"}
* [C&oacute;mo encontrar la comunidad](https://wiki.jenkins.io/display/JENKINS/Where+to+find+us){: target="_blank"}
* [Jenkins IRC](https://jenkins.io/chat/){: target="_blank"}
* [Jenkins World](https://www.cloudbees.com/jenkinsworld)&nbsp;: la conferencia anual para la comunidad de Jenkins y DevOps
* [Jenkins World 2017 grabaciones](https://www.youtube.com/playlist?list=PLvBBnHmZuNQLqgKDFmGnUClw68qsQ9Hq5){: target="_blank"}
* [Desbordamiento de pila](https://stackoverflow.com/search?q=Jenkins){: target="_blank"}
* [Toma una clase de entrenamiento de Jenkins](https://www.cloudbees.com/jenkins/training)
* Obtenga la certificaci&oacute;n:&nbsp;[convi&eacute;rtase en ingeniero certificado de Jenkins](https://www.cloudbees.com/jenkins/jenkins-certification)
* [Sigue el proyecto Jenkins en Twitter](https://twitter.com/JenkinsCI){: target="_blank"}
* Libro: &nbsp;*[Jenkins: la gu&iacute;a definitiva: integraci&oacute;n continua para las masas](https://www.amazon.com/Jenkins-Definitive-Continuous-Integration-Masses/dp/1449305350){: target="_blank"}*