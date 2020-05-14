---

author_profile: true
title: '▷ Introducción a Zuul para mejorar el CI / CD'
description: "Una historia rápida de cómo y por qué Zuul está reemplazando a Jenkins en las pruebas de CI en la comunidad OpenStack"
excerpt: "Una historia rápida de cómo y por qué Zuul está reemplazando a Jenkins en las pruebas de CI en la comunidad OpenStack"
published: true
comments: false
date: 2020-02-10 10:20:12
last_modified_at: 
header:
  teaser: /assets/images/blog/ci-cd-zuul.webp
permalink: /introduccion-zuul-open-source/
canonical_URL: https://ciberninjas.com/introduccion-zuul-open-source/
classes: wide
categories:
- Distribución Continua
tags:
- Zuul
- Software CI
- Software CD

---

![](/assets/images/blog/ci-cd-zuul.webp "Las tuberías o programas para la gestión continua del código")

[Jenkins](https://jenkins.io/){:target="_blank" rel="nofollow,noreferrer"} es una maravillosa pieza de software. Como motor de ejecución y automatización, es uno de los mejores que encontrarás. Jenkins sirve como un componente clave en innumerables sistemas de integración continua (CI), y esto es un testimonio del valor de lo que su comunidad ha construido a lo largo de los años. Pero eso es lo que es: un componente. Jenkins no es un sistema de CI en sí mismo; solo funciona las cosas para ti. Lo hace realmente bien y tiene una variedad de elementos integrados y un ecosistema vibrante de complementos para ayudarlo a decirle qué ejecutar, cuándo y dónde.

CI es, en el nivel más fundamental, acerca de integrar el trabajo de múltiples flujos de desarrollo de software en un todo coherente con la mayor frecuencia y la menor fricción posible. Jenkins, por sí solo, no sabe acerca de su código fuente o cómo fusionarlo, ni sabe cómo dar retroalimentación constructiva a usted y sus colegas. Por supuesto, puede pegarlo con otro software que pueda realizar estas actividades, y así es como muchos sistemas de CI incorporan Jenkins.

Es lo que hicimos para OpenStack, también, al menos al principio.

## Si no se prueba, está roto

En 2010, se formó una comunidad de proyectos de código abierto llamada [OpenStack](https://www.openstack.org/){:target="_blank" rel="nofollow,noreferrer"}. Algunos de los desarrolladores contratados para ayudar con la infraestructura de colaboración también trabajaron en un proyecto de base de datos gratuito llamado [Drizzle](https://en.wikipedia.org/wiki/Drizzle_(database_server)){:target="_blank" rel="nofollow,noreferrer"}, y una filosofía clave dentro de esa comunidad fue la idea "si no se prueba, se rompe".

Entonces, OpenStack, el primer día, requirió que todos los cambios propuestos de su software fueran revisados y probados para detectar regresiones antes de que pudieran aprobarse para fusionarse en el tronco de cualquier repositorio de código fuente. Para hacer esto, Hudson (que luego se bifurcó para formar el proyecto Jenkins) se configuró para ejecutar pruebas que ejercitaran cada cambio.

Se instaló un complemento para interactuar con el sistema de revisión de código [Gerrit](https://www.gerritcodereview.com/){:target="_blank" rel="nofollow,noreferrer"}, que activa automáticamente los trabajos cuando se proponen nuevos cambios e informa con comentarios de revisión que indican si tuvieron éxito o fallaron. Esto puede sonar rudimentario para los estándares actuales, pero en ese momento, fue un avance revolucionario para una colaboración de código abierto. Ningún desarrollador en OpenStack fue especial a los ojos de CI, y los cambios de todos tuvieron que pasar esta creciente batería de pruebas antes de poder fusionarse, un concepto que el proyecto llamó "compuerta de proyecto".

Sin embargo, surgió una falla emergente con esta idea de activación: para garantizar que dos cambios no relacionados no alteraran una pieza de software de maneras funcionalmente incompatibles, tuvieron que probarse uno por vez en secuencia antes de que pudieran fusionarse.

OpenStack fue complicado de instalar y probar, incluso en aquel entonces, y rápidamente creció en popularidad. El aumento en el volumen de las contribuciones de los desarrolladores, junto con el aumento de la cobertura de las pruebas, significó que, durante los períodos ocupados, simplemente no había tiempo suficiente para probar cada cambio que pasó la revisión. Algunos trabajos de ejecución más larga tardaron casi una hora en completarse, por lo que el límite superior para lo que podría pasar por la puerta fue de aproximadamente dos docenas de cambios en un día. La acumulación de fusión resultante mostró que se requería una nueva solución.

## Entra Zuul

Durante una reunión de OpenStack CI en mayo de 2012, uno de los miembros del equipo de CI, James Blair, [anunció](http://eavesdrop.openstack.org/irclogs/%23openstack-meeting/%23openstack-meeting.2012-05-22.log.html#t2012-05-22T19:42:27){:target="_blank" rel="nofollow,noreferrer"} que "había estado trabajando en la ejecución especulativa de los trabajos de Jenkins". **La ejecución especulativa** es una optimización más comúnmente encontrada en las tuberías de los microprocesadores modernos.

Al igual que la analogía con el hardware del procesador, la teoría era que al predecir de manera optimista los resultados positivos de los cambios aprobados recientemente pero que aún no habían completado sus pruebas, los cambios aprobados posteriormente podrían probarse simultáneamente y luego fusionarse condicionalmente siempre que sus predecesores también pasaran las pruebas y fusionado James dijo que tenía un nombre para este programador inteligente: [Zuul](https://zuul-ci.org/){:target="_blank" rel="nofollow,noreferrer"}.

Dentro de este período de tiempo, los desafíos de tratar de realizar un mejor control de revisión para la configuración de trabajo XML de Jenkins llevaron a la creación del motor de plantillas [Jenkins Job Builder](https://jenkins-job-builder.readthedocs.io/){:target="_blank" rel="nofollow,noreferrer"} basado en YAML legible por humanos.

El éxito limitado con el complemento JClouds para Jenkins y los engorrosos intentos de usar trabajos para actualizar imágenes en la nube de esclavos Jenkins de un solo uso terminaron con la creación de [Nodepool](https://zuul-ci.org/docs/nodepool/){:target="_blank" rel="nofollow,noreferrer"} Servicio. Las capacidades limitadas de almacenamiento de registros dieron como resultado que el equipo agregara soluciones externas separadas para organizar, servir e indexar registros de trabajos y asumir el mantenimiento de un complemento de protocolo de copia segura (SCP) abandonado que reemplaza la opción FTP menos segura que Jenkins proporcionó de inmediato. El equipo de infraestructura de OpenStack estaba construyendo lentamente una flota de servicios y utilidades alrededor de Jenkins, pero comenzó a toparse con una limitación de rendimiento.

## Multiplicando Jenkins

A mediados de 2013, Nodepool reciclaba constantemente hasta 100 máquinas virtuales registradas con Jenkins como esclavas, pero esto ya no era suficiente para mantenerse al día con la creciente carga de trabajo. La contención de hilos por bloqueos globales en Jenkins frustraba todos los intentos de superar este umbral, sin importar cuánta potencia de procesador y memoria se arrojaran al servidor maestro.

El proyecto tenía ofertas para donar capacidad adicional para los esclavos de Jenkins para ayudar a aliviar el trabajo atrasado frecuente, pero esto requeriría un maestro Jenkins adicional. La división eficiente del trabajo entre múltiples maestros necesitaba un nuevo canal de comunicación para el despacho y la coordinación de los trabajos.

Los mantenedores de Zuul identificaron el protocolo del servidor de trabajo [Gearman](http://gearman.org/){:target="_blank" rel="nofollow,noreferrer"} como un ajuste ideal, por lo que equiparon a Zuul con un nuevo [geard](https://docs.opendev.org/opendev/gear/#server-example){:target="_blank" rel="nofollow,noreferrer"} servicio y Jenkins extendido con un complemento de cliente Gearman personalizado.

Ahora que los trabajos se extendieron a través de un creciente conjunto de maestros de Jenkins, ya no había un tablero único con una vista completa de la actividad laboral y los resultados. Para facilitar este nuevo mundo multimaestro, Zuul desarrolló su propia API de estado y WebUI, así como una función para emitir métricas a través de [StatsD](https://github.com/statsd/statsd){:target="_blank" rel="nofollow,noreferrer"} protocolo.

En los años siguientes, Zuul subsumió constantemente más características de CI en las que confiaban sus usuarios, mientras que el lugar de Jenkins en el sistema disminuyó en consecuencia, y se estaba convirtiendo en una responsabilidad. OpenStack tomó una decisión temprana para estandarizar el lenguaje de programación Python; esto se reflejó en el desarrollo de Zuul, sin embargo, Jenkins y sus complementos se implementaron en Java.

La configuración de Zuul se mantuvo en el mismo formato de serialización YAML que OpenStack usó para modelar sus propios trabajos de Jenkins, mientras que Jenkins mantuvo todo en XML barroco. Estas diferencias complicaron el mantenimiento continuo y condujeron a una curva de aprendizaje innecesariamente empinada para los nuevos administradores de comunidades relacionadas que habían comenzado a intentar ejecutar Zuuls.

Era el momento adecuado para otra revolución.

## El ascenso de Ansible

A principios de 2016, los mantenedores de Zuul se embarcaron en una ambiciosa revisión de un año de su creciente flota de servicios con el objetivo de eliminar a Jenkins del diseño general del sistema. En este momento, Jenkins solo servía como un conducto para ejecutar trabajos que consisten principalmente en scripts de shell en nodos esclavos a través de SSH, proporcionando transmisión en tiempo real de la salida del trabajo y copiando los artefactos resultantes en el almacenamiento a largo plazo.

[Ansible](https://www.ansible.com/){:target="_blank" rel="nofollow,noreferrer"} se descubrió que se ajustaba perfectamente a esa primera necesidad; diseñado específicamente para ejecutar comandos de forma remota a través de SSH, se escribió en Python, al igual que Zuul, y también usó YAML para definir sus tareas. Incluso tenía módulos integrados para funciones que el equipo había implementado previamente como complementos Jenkins a medida.

Ansible proporcionó una verdadera compatibilidad con múltiples nodos desde el primer momento, por lo que los mismos libros de jugadas podrían usarse para simular y realizar implementaciones de producción complejas. Un ecosistema en constante expansión de módulos de terceros llenó cualquier brecha, de la misma manera que los complementos de la comunidad de Jenkins.

Un nuevo servicio de ejecución de Zuul desempeñó el papel anterior del maestro Jenkins: actuó sobre solicitudes pendientes en el geard del planificador, las envió a través de Ansible a servidores efímeros administrados por Nodepool, luego recopiló resultados y artefactos para su publicación. También expuso la salida de compilación en progreso sobre el [protocolo](https://tools.ietf.org/html/rfc742){:target="_blank" rel="nofollow,noreferrer"} clásico [RFC 742 Name / Finger](https://tools.ietf.org/html/rfc742){:target="_blank" rel="nofollow,noreferrer"}, transmitido en tiempo real desde una extensión del módulo de salida de comandos de Ansible.

Una vez que ya no era necesario limitar los trabajos a lo que el analizador de Jenkins podía comprender, Zuul era libre de desarrollar nuevas características como definiciones de trabajo distribuidas en el repositorio, que se pueden compartir entre proyectos con herencia y manejo seguro de secretos, así como la capacidad de probar -impulsar los cambios propuestos para los propios trabajos Jenkins cumplió su propósito admirablemente, pero al menos para Zuul, su utilidad finalmente había terminado.



## Probar el futuro

A la comunidad de Zuul le gusta decir que "prueba el futuro" a través de su novedosa aplicación de ejecución especulativa. Atrás quedaron los días desgarradores de preguntarse si la mejora que desea realizar en un trabajo existente lo hará no funcional una vez que se aplique en la producción. Los equipos de revisión sobrecargados para un repositorio de trabajo central masivo son cosa del pasado.

Los trabajos se tratan como parte del software y se envían junto con el resto del código fuente, aprovechando las otras características de Zuul como las dependencias de repositorio cruzado para que su cambio a parte de un trabajo en un proyecto se pueda ejercer con un trabajo propuesto. cambio en otro proyecto. Incluso comentará sobre los cambios en su trabajo, destacando líneas específicas con problemas de sintaxis como si fuera otro revisor de código que le da consejos.

Estas eran características con las que Zuul solo había soñado antes, pero que requerían liberarse de Jenkins para poder tomar el trabajo analizando en sus propias manos. Este es el futuro de CI, y los usuarios de Zuul lo están viviendo.

A principios de 2019, la Fundación OpenStack reconoció a Zuul como un proyecto independiente, abiertamente gobernado, con su propia identidad y una floreciente comunidad. Si te gusta el CI de código abierto, considera echar un vistazo. El desarrollo de la próxima evolución de Zuul siempre está en marcha, y puede ayudarlo. Obtenga más información en [el sitio web de Zuul](https://zuul-ci.org/){:target="_blank" rel="nofollow,noreferrer"}.

**Fuente**\: [Open Source Blog](https://opensource.com/article/20/2/zuul){:target="_blank" rel="nofollow,noreferrer"} bajo una [licencia Creative Commons,](http://creativecommons.org/licenses/)
{: .notice--info}
