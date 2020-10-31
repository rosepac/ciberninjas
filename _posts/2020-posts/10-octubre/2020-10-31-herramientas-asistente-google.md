---

author: rosepac
bootstrap: true
comments: false
tags:
- Casa Inteligente
- IOT
thumbnail: /assets/img/2020/10/31-asistente-google.webp
feature-img: /assets/img/2020/10/31-asistente-google.webp
title: '▷ Las nuevas herramientas y funciones para los desarrolladores del Asistente Inteligente de Google'
description: >-
  Noticias e información valiosa sobre las plataformas, las herramientas y los eventos de Google.
excerpt: >-
  Noticias e información valiosa sobre las plataformas, las herramientas y los eventos de Google.
canonical_URL: https://ciberninjas.com/herramientas-asistente-google/
permalink: /herramientas-asistente-google/
date: 2020-10-31 12:48:32
last_modified_at: 
published: true

---

Las principales marcas recurren al Asistente de Google todos los días para ayudar a sus usuarios a realizar tareas en sus teléfonos y en pantallas inteligentes, como jugar juegos, buscar recetas o verificar inversiones, simplemente usando su voz. De hecho, durante el último año, el número de acciones realizadas por desarrolladores externos se ha más que duplicado.

Queremos respaldar nuestro ecosistema de desarrolladores a medida que continúan creando las mejores experiencias para pantallas inteligentes y teléfonos Android. Es por eso que hoy en el Día del Desarrollador del Asistente de Google presentamos:

- Nuevas acciones de aplicaciones integradas: para permitir a los desarrolladores de Android integrar fácilmente el Asistente de Google con sus aplicaciones,
- Nuevas funciones de descubrimiento, como sugerencias y accesos directos, para permitir a los usuarios descubrir e interactuar fácilmente con las aplicaciones de Android.
- Nuevas herramientas y funciones para desarrolladores, como pruebas de API, voces y marcos para el desarrollo de juegos, para ayudar a crear experiencias nativas de alta calidad para pantallas inteligentes.
- Nuevas mejoras en el descubrimiento y la monetización: para ayudar a los usuarios a descubrir e interactuar con las experiencias de los desarrolladores en Assistant.

**Ahora, todos los desarrolladores de Android pueden llevar el Asistente de Google a sus aplicaciones**

Los desarrolladores de aplicaciones de Android pueden facilitar a sus usuarios la búsqueda de lo que buscan, enviándolos rápidamente a la funcionalidad clave de la aplicación, utilizando solo la voz.

Con [App Actions](https://developers.google.com/assistant/app/overview){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, los principales desarrolladores de aplicaciones, como Yahoo Mail, Fandango y ColorNote, están creando actualmente estas experiencias naturales y atractivas para los usuarios al asignar las intenciones de sus usuarios a una funcionalidad específica dentro de sus aplicaciones.

En lugar de tener que navegar a través de cada aplicación para realizar las tareas, los usuarios pueden simplemente decir "Hola Google" y el resultado que desean, como "encontrar Motivation Mix en Spotify" usando solo su voz.

Aquí hay algunas actualizaciones que presentamos hoy en App Actions.

- [**Abra y busque rápidamente dentro las aplicaciones con intenciones comunes**](#abra-y-busque-rápidamente-dentro-las-aplicaciones-con-intenciones-comunes)
  - [**Intenciones integradas específicas verticales**](#intenciones-integradas-específicas-verticales)
  - [**Intents personalizados para resaltar experiencias de aplicaciones únicas**](#intents-personalizados-para-resaltar-experiencias-de-aplicaciones-únicas)
  - [**Sugerencias y accesos directos para mejorar la visibilidad de los usuarios**](#sugerencias-y-accesos-directos-para-mejorar-la-visibilidad-de-los-usuarios)
- [**Cree acciones conversacionales de alta calidad para pantallas inteligentes**](#cree-acciones-conversacionales-de-alta-calidad-para-pantallas-inteligentes)
- [**Nuevas herramientas y funciones para desarrolladores**](#nuevas-herramientas-y-funciones-para-desarrolladores)
  - [**Voces mejoradas**](#voces-mejoradas)
  - [**Pruebas mejoradas para ofrecer experiencias de alta calidad**](#pruebas-mejoradas-para-ofrecer-experiencias-de-alta-calidad)
  - [**Nueva herramienta de migración de Dialogflow**](#nueva-herramienta-de-migración-de-dialogflow)
  - [**Nuevo sitio para desarrolladores de juegos**](#nuevo-sitio-para-desarrolladores-de-juegos)
- [**Nuevas intenciones integradas y el centro de aprendizaje**](#nuevas-intenciones-integradas-y-el-centro-de-aprendizaje)
- [**Token de autenticación doméstica y mejora de transacciones**](#token-de-autenticación-doméstica-y-mejora-de-transacciones)
- [**Simplificar la vinculación y autenticación de cuentas**](#simplificar-la-vinculación-y-autenticación-de-cuentas)
- [**Enlaces de asistente**](#enlaces-de-asistente)

## **Abra y busque rápidamente dentro las aplicaciones con intenciones comunes**

Todos los días, la gente le pide al Asistente de Google que abra sus aplicaciones favoritas. Hoy, nos basamos en esta funcionalidad para abrir páginas específicas dentro de las aplicaciones y también buscar dentro de las aplicaciones.

A partir de ahora se puede usar la intención `GET_THING` para buscar dentro de las aplicaciones y la intención `OPEN_APP_FEATURE` para abrir páginas específicas en las aplicaciones; ofreciendo más formas de conectar fácilmente a los usuarios a su aplicación a través del Asistente.

Muchas de las principales marcas como eBay y Kroger ya están utilizando estos intentos. Si tienes la aplicación de eBay en tu teléfono Android, prueba a decir "Ok Google, busca tarjetas de béisbol en eBay" para probar el intent `GET_THING`.

Si tiene la aplicación Kroger en su teléfono Android, intente decir "Ok Google, abre Kroger Pay" para probar la intención `OPEN_APP_FEATURE`.

Es fácil implementar todas estas intenciones comunes en sus aplicaciones de Android. Para comenzar, simplemente puede declarar soporte para estas capacidades en su archivo `Actions.xml`.

Para realizar búsquedas, puede proporcionar un enlace profundo que le permitirá al Asistente pasar un término de búsqueda a su aplicación. Para abrir páginas, puede proporcionar un enlace profundo con el nombre correspondiente para que el Asistente coincida con las solicitudes de los usuarios.

### **Intenciones integradas específicas verticales**

Para una integración más profunda, ofrecemos intenciones integradas (BII) específicas para verticales que permiten que Google se encargue de todo el entendimiento del lenguaje natural (NLU) para que usted no tenga que hacerlo.

Primero pusimos a prueba las acciones de aplicaciones en algunas de las verticales de aplicaciones más populares, como finanzas, viajes compartidos, pedidos de alimentos y fitness.

Aumentando el catálogo para cubrir más de 60 intentos en 10 verticales, agregando nuevas categorías como Social, Juegos, Viajes y Local, Productividad, Compras y Comunicaciones.

Por ejemplo, Twitter y Wayfair ya han implementado estas intenciones verticales integradas. Por lo tanto, si tiene la aplicación de Twitter en su teléfono Android, intente decir "Ok Google, publique un Tweet" para ver un BII vertical social en acción.

Si tiene la aplicación Wayfair en su teléfono Android, intente decir "Ok Google, compre sillas decorativas en Wayfair" para ver un BII vertical de Shopping en acción.

Vea cómo puede comenzar con [estas intenciones integradas](https://developers.google.com/assistant/app/intents){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} o explore la creación de [intenciones personalizadas](https://developers.google.com/assistant/app/custom-intents){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}.

### **Intents personalizados para resaltar experiencias de aplicaciones únicas**

Cada aplicación es única con sus propias características y capacidades, que pueden no coincidir con la lista de intenciones integradas de App Actions disponibles. Para los casos en los que no hay una intención incorporada para la funcionalidad de su aplicación, puede crear una intención personalizada.

Al igual que los BII, las intenciones personalizadas siguen el esquema `actions.xml` y actúan como puntos de conexión entre el Asistente y sus cumplimientos definidos.

Snapchat y Walmart usan intenciones personalizadas para extender la funcionalidad de su aplicación al Asistente de Google. Por ejemplo, si tiene la aplicación Snapchat en su teléfono Android, simplemente diga "Ok Google, envía un Snap usando la lente de cara de dibujos animados" para probar su intención personalizada.

O bien, si tiene la aplicación Walmart en su teléfono Android, simplemente diga, "Hola Google, reserve un horario con Walmart" para programar su próxima recolección de comestibles.

Con intenciones más comunes, integradas y personalizadas disponibles, todos los desarrolladores de Android ahora pueden habilitar su aplicación para cumplir con las consultas del Asistente que se adaptan exactamente a lo que ofrece su aplicación.

Los desarrolladores también pueden utilizar herramientas de desarrollo conocidas, como Android Studio, y con solo unos días de trabajo, pueden integrar fácilmente sus aplicaciones de Android con el Asistente de Google.

### **Sugerencias y accesos directos para mejorar la visibilidad de los usuarios**

Estamos entusiasmados con estas nuevas mejoras en App Actions, pero también entendemos que es igualmente importante que las personas puedan descubrir sus App Actions.

Estamos diseñando nuevos puntos de contacto para ayudar a los usuarios a aprender fácilmente sobre las aplicaciones de Android que admiten Acciones de aplicaciones.

Por ejemplo, recomendaremos Acciones de aplicaciones relevantes incluso cuando el usuario no mencione explícitamente el nombre de la aplicación al mostrar sugerencias.

Si dices ampliamente "Hola Google, muéstrame Taylor Swift", destacaremos un chip de sugerencia que guiará al usuario a abrir el resultado de la búsqueda en Twitter. El Asistente de Google también sugerirá aplicaciones de forma proactiva, según los patrones de uso de las aplicaciones individuales.

Los usuarios de Android también podrán personalizar su experiencia, creando su propia forma de automatizar sus tareas más comunes con accesos directos a aplicaciones, lo que permitirá a las personas configurar frases rápidas para habilitar las funciones de la aplicación que utilizan con frecuencia.

Por ejemplo, puede crear un acceso directo de MyFitnessPal para rastrear fácilmente sus calorías a lo largo del día y personalizar la consulta para decir lo que desea, como "Ok Google, verifique mis calorías".

Con solo decir "Ok Google, atajos", pueden configurar y explorar los atajos sugeridos en la pantalla de configuración. También haremos sugerencias proactivas de accesos directos a lo largo de la experiencia móvil del Asistente, adaptadas a cómo usa su teléfono.

## **Cree acciones conversacionales de alta calidad para pantallas inteligentes**

En Junio, se han lanzado nuevas herramientas para desarrolladores como [Actions Builder](https://developers.googleblog.com/2020/06/announcing-actions-builder-actions-sdk.html){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} y [Actions SDK](https://developers.googleblog.com/2020/06/announcing-actions-builder-actions-sdk.html){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, lo que facilita el diseño y la creación de acciones conversacionales en Assistant, como juegos, para pantallas inteligentes.

Muchos socios ya han estado construyendo con estos, como Cool Games y Sony. Estamos entusiasmados de compartir nuevas actualizaciones que no solo permiten a los desarrolladores crear más experiencias nativas de Asistente de mayor calidad con nuevos marcos de desarrollo de juegos y mejores herramientas de prueba, sino que también hemos hecho que el descubrimiento de esas experiencias por parte de los usuarios sea mejor que nunca.

## **Nuevas herramientas y funciones para desarrolladores**

### **Voces mejoradas**

Se han escuchado los comentarios de que se necesitaban mejores voces para igualar la calidad de las experiencias que se brindaban desde el Asistente, y se han lanzado dos nuevas voces en inglés que aprovechan un modelo mejorado para hacer que el asistente suene más natural.

Estas voces ahora están disponibles y puede aprovecharlas en tus Acciones existentes simplemente haciendo el cambio en la Consola de Acciones.

### **Pruebas mejoradas para ofrecer experiencias de alta calidad**

La API de pruebas de acciones es una nueva forma programática de probar los recorridos críticos de sus usuarios y asegurarse de que no haya rutas de conversación interrumpidas. El uso de este marco le permite ejecutar pruebas de un extremo a otro en un entorno de vista previa aislado, ejecutar pruebas de regresión y agregar pruebas continuas a su arsenal. Esta API se lanzará pronto a disponibilidad general.

### **Nueva herramienta de migración de Dialogflow**

Para aquellos que han creado experiencias con Dialogflow, queremos que disfruten de los beneficios de la nueva plataforma sin tener que hacerlo desde cero. Es por eso que ofrecemos una [herramienta de migración](https://developers.google.com/assistant/conversational/dialogflow-to-builder){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} dentro de Actions Console que automatiza gran parte del trabajo para mover proyectos a la plataforma mejorada.

### **Nuevo sitio para desarrolladores de juegos**

Para los desarrolladores de juegos, se crea [un nuevo centro de recursos para juegos](https://developers.google.com/assistant/games){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}. Aumentar la experiencia en el diseño de juegos con código fuente completo para juegos, mejores prácticas de diseño, entrevistas con desarrolladores de juegos, herramientas y todo lo que necesita para crear juegos habilitados para voz para pantallas inteligentes.

## **Nuevas intenciones integradas y el centro de aprendizaje**

Pronto abriremos dos nuevas intenciones integradas (BII) para el registro público: educación y narración de historias. El registro de sus acciones para estas intenciones permite a los usuarios descubrirlas de una manera sencilla y natural a través de solicitudes generales al Asistente de Google. Estos nuevos BII cubren una variedad de intenciones en los dominios de educación y narración de historias y se unen a los juegos como áreas principales de inversión para el ecosistema de desarrolladores.

A continuación, las personas podrán decir "Ok Google, enséñame algo nuevo" y se les presentará un Centro de aprendizaje donde podrán explorar diferentes experiencias educativas. Para las historias, los usuarios pueden simplemente decir "Ok Google, cuéntame una historia". Los desarrolladores pronto pueden registrarse para ambos nuevos BII para que sus experiencias se enumeren en este catálogo navegable.

## **Token de autenticación doméstica y mejora de transacciones**

Una de las cosas interesantes de la pantalla inteligente es que es un dispositivo inherentemente comunitario. Por lo tanto, si ofrece una experiencia que debe disfrutarse en colaboración, necesita una forma de compartir el estado entre los miembros del hogar y entre varios dispositivos.

Digamos que está trabajando en un rompecabezas y su compañero de cuarto quiere ayudar con algunas piezas de la pantalla inteligente. Estamos introduciendo tokens de autenticación de hogares para que todos los usuarios de un hogar ahora puedan compartir este tipo de experiencias. Esta función estará disponible pronto a través de la consola de Acciones.

Finalmente, estamos mejorando el flujo de transacciones en pantallas inteligentes. Queremos que sea más fácil para usted agregar a su experiencia capacidades de monetización fluidas basadas en voz y en pantalla. Comenzamos por admitir la coincidencia de voz como una opción para la autorización de pago. Y a principios del próximo año, también lanzaremos una entrada CVC en pantalla.

## **Simplificar la vinculación y autenticación de cuentas**

Una vez que cree experiencias personalizadas y premium, debe facilitar al máximo la conexión con las cuentas existentes. Para ayudar a agilizar este proceso, estamos abriendo dos betas: Enlace con Google y App Flip, para mejorar los flujos de enlace de cuentas para permitir una autenticación simple y optimizada a través de aplicaciones.

[Link with Google](https://developers.google.com/assistant/identity/link-with-google){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} permite a cualquier persona con una aplicación de Android o iOS en la que ya haya iniciado sesión completar el flujo de vinculación con solo unos pocos clics, sin necesidad de volver a ingresar las credenciales.

[App Flip](https://developers.google.com/assistant/identity/app-flip){:target="_blank" rel="nofollow,noreferrer" hreflang="en"} te ayuda a crear una mejor experiencia de vinculación de cuentas móviles y a reducir las tasas de abandono. App Flip permite a sus usuarios vincular sin problemas sus cuentas a Google sin tener que volver a ingresar sus credenciales.

## **Enlaces de asistente**

Además de lanzar nuevos canales de descubrimiento para las Acciones de los desarrolladores, también queremos proporcionar más control sobre cómo usted y sus usuarios llegan a sus Acciones. Los enlaces de acción fueron una forma de establecer un vínculo profundo con su acción conversacional que ha sido utilizada con gran éxito por socios como Sushiro, Caixa y Giallo Zafferano.

Ahora, estamos reintroduciendo esta función como [enlaces de Asistente](https://developers.google.com/assistant/engagement/assistant-links){:target="_blank" rel="nofollow,noreferrer" hreflang="en"}, que permiten a socios como TD Ameritrade ofrecer experiencias enriquecidas de Asistente de Google en sus sitios web, así como vínculos profundos a sus integraciones de Asistente de Google desde cualquier lugar de la web.

Estamos muy entusiasmados con todos estos anuncios, tanto en App Actions como en el desarrollo de asistentes nativos. Ya sea que esté explorando nuevas formas de involucrar a sus usuarios usando la voz a través de Acciones de la aplicación, o buscando crear algo nuevo para involucrar a los usuarios en casa a través de pantallas inteligentes, esperamos que aproveche estas nuevas herramientas y funciones y comparta sus comentarios con nosotros.

### **Relacionados** <!-- omit in toc -->

[▷ ¿Qué son los grupos de desarrolladores de Google ](https://ciberninjas.com/gdg-grupos-desarrollo-google/)

[▷ ¿Qué es el programa de expertos de Google?](https://ciberninjas.com/expertos-google/)

[▷ ¿Qué es Web Vitals? Las nuevas métricas de Google](https://ciberninjas.com/web-vitals/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Las mejores marcas integran el Asistente de Google con nuevas herramientas y funciones para aplicaciones de Android y pantallas inteligentes](/assets/img/2020/10/31-asistente-google.webp)