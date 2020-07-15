---

author: rosepac
bootstrap: true
comments: false
tags:
- Javalin
categories:
- Framework
thumbnail: /assets/img/blog/javalin-framework-2.webp
feature-img: /assets/img/blog/javalin-framework-2.webp
title: 'Javalin: Framework web ligero de Java y Kotlin. Cree API REST en Java o Kotlin fácilmente'
description: >-
  Javalin es un framework web liviano para Java y Kotlin diseñado para ser simple y bloqueador por defecto, admitiendo sockets web, HTTP2 y solicitudes asíncronas
excerpt: >-
  Javalin es un framework web liviano para Java y Kotlin diseñado para ser simple y bloqueador por defecto, admitiendo sockets web, HTTP2 y solicitudes asíncronas
canonical_URL: https://ciberninjas.com/javalin-framework/
permalink: /javalin-framework/
date: 2020-05-21 11:32:32
last_modified_at: 
published: true

---

Javalin comenzó como una bifurcación del framework de SparkJava, pero rápidamente se convirtió en una reescritura desde cero influenciada por el framework de JavaScript koa.js.

Javalin está construido sobre Jetty y su rendimiento es equivalente al código de Jetty sin procesar.

![Logo del framework Javalin para trabajar de forma sencilla junto a Java y Kotlin](/assets/img/blog/javalin-framework.webp "Logo del framework Javalin para trabajar de forma sencilla junto a Java y Kotlin")
- [**¿Qué es Javalin?**](#qué-es-javalin)
- [**¿Por qué usar Javalin?**](#por-qué-usar-javalin)
- [**Características de Javalin**](#características-de-javalin)
- [**Comenzando con Javalin**](#comenzando-con-javalin)

## **¿Qué es Javalin?**

Javalin es un framework web liviano para Kotlin y Java diseñado para ser simple y bloqueador de forma predeterminada, admitiendo WebSockets, HTTP2 y solicitudes asíncronas.

Además, los desarrolladores no necesitan extender ninguna clase, usar @Annotations o incluso descargar una versión diferente de Javalin para Java y otra para Kotlin.

## **¿Por qué usar Javalin?**

Comparar Javalin con algún otro framework de Java, como por ejemplo Spring, es como comparar una cuchilla de afeitar con una navaja suiza; pero Javalin hace lo que se supone que debe hacer. Si deseas agregar rápidamente un punto REST final para una demostración rápida o si solo necesitas un framework web simple sin apartados adicionales como Inyecciónes de dependencias o Mapeos relacionales de objetos, considera Javalin como una opción; puesto que es fácil de aprender y más ligero a la hora de ponerlo en marcha.

## **Características de Javalin**

Javalin ofrece una serie de muy interesantes características, que son las siguientes:

- **Simple**: A diferencia de otros frameworks web Java y Kotlin, Javalin tiene muy pocos conceptos que necesita aprender. Nunca amplías las clases y rara vez implementas interfaces.
- **Ligero**: Javalin ocupa solamente unas pocas miles de líneas de código sobre Jetty, y su rendimiento es equivalente al código de Jetty sin procesar. Debido a su tamaño, es muy fácil trabajar sobre el código fuente.
- **Interoperable**: Otros frameworks web de Java y Kotlin suelen ofrecer versiones separadas para cada idioma. Javalin se está desarrollando teniendo en cuenta la interoperabilidad, por lo que las aplicaciones se crean de la misma manera para Java y Kotlin.
- **Flexible**: Javalin está diseñado para ser simple y bloqueador, ya que este es el modelo de programación más fácil de razonar. Sin embargo, si establece un `Future` como resultado, Javalin cambia al modo asincrónico.
- **Educativo**: Visite nuestra [página de educadores](https://javalin.io/for-educators){:target="_blank" rel="nofollow noreferrer"} si está enseñando programación web y está buscando un framework web que se salga de su camino y le permita concentrarse en los conceptos centrales de su plan de estudios.
- **Integración OpenAPI**: Muchos frameworks web ligeros de Java y Kotlin no son compatibles con OpenAPI, pero Javalin tiene una integración completa, que incluye Swagger UI y redoc para mostrar los documentos generados. Obtenga más información en la página dedicada del [complemento OpenAPI](https://javalin.io/plugins/openapi){:target="_blank" rel="nofollow noreferrer"}.

[▶ Web Oficial de Javalin](https://javalin.io){: .btn .btn-primary .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

> 🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/)
{: .notice--danger}

## **Comenzando con Javalin**

Para comenzar a usar Javalin con Java, los desarrolladores solo necesitan `public static void main` y posteriormente:

```
public static void main(String[] args) {
    var app = Javalin.create().start(7000);
    app.get("/", ctx -> ctx.result("Hello World"));
}
```

Veamos un fragmento con alguna configuración:

```
var app = Javalin.create(config -> {
    config.defaultContentType = "application/json";
    config.autogenerateEtags = true;
    config.addStaticFiles("/public");
    config.asyncRequestTimeout = 10_000L;
    config.dynamicGzip = true;
    config.enforceSsl = true;
}).routes(() -> {
    path("users", () -> {
        get(UserController::getAll);
        post(UserController::create);
        path(":user-id"(() -> {
            get(UserController::getOne);
            patch(UserController::update);
            delete(UserController::delete);
        });
        ws("events", userController::webSocketEvents);
    });
}).start(port);
```

Es bastante simple validar parámetros como parámetros de ruta, parámetros de consulta y parámetros de formulario en Javalin:

```
var myQpStr = ctx.queryParam("my-qp"); // no validation, returns String or null
var myQpInt = ctx.pathParam("my-qp", Integer.class).get(); // returns an Integer or throws
var myQpInt = ctx.formParam("my-qp", Integer.class).check(i -> i > 4).get(); // Integer > 4

// validate two dependent query parameters:
var fromDate = ctx.queryParam("from", Instant.class).get();
var toDate = ctx.queryParam("to", Instant.class)
        .check(it -> it.isAfter(fromDate), "'to' has to be after 'from'")
        .get();

// validate a json body:
var myObject = ctx.bodyValidator(MyObject.class)
        .check(obj -> obj.myObjectProperty == someValue)
        .get();
```

Otra característica interesante de Javalin que existe en otros frameworks, son los controladores. Javalin trae controladores anteriores, controladores de punto final, controladores posteriores, controladores de excepciones y controladores de errores.

```
//before handlers
app.before(ctx -> {
    // runs before all requests
});
app.before("/path/*", ctx -> {
    // runs before request to /path/*
});

//endpoint handlers
app.get("/", ctx -> {
    // some code
    ctx.json(object);
});

app.get("/hello/*, ctx -> {
    // capture all request to sub-paths of /hello/
});

//after handlers
app.after(ctx -> {
    // run after all requests
});
app.after("/path/*", ctx -> {
    // runs after request to /path/*
});
```

Para manejar la autenticación / autorización, Javalin trae la interfaz funcional `AccessManager`, donde los desarrolladores pueden implementar su propio administrador de acceso como quieran.

```
// Set the access-manager that Javalin should use:
app.accessManager((handler, ctx, permittedRoles) -> {
    MyRole userRole = getUserRole(ctx);
    if (permittedRoles.contains(userRole)) {
        handler.handle(ctx);
    } else {
        ctx.status(401).result("Unauthorized");
    }
});

Role getUserRole(Context ctx) {
    // determine user role based on request
    // typically done by inspecting headers
}

enum MyRole implements Role {
    ANYONE, ROLE_ONE, ROLE_TWO, ROLE_THREE;
}

app.routes(() -> {
    get("/un-secured",   ctx -> ctx.result("Hello"),   roles(ANYONE));
    get("/secured",      ctx -> ctx.result("Hello"),   roles(ROLE_ONE));
});
```

A partir de la versión 3.0, Javalin también trae un complemento OpenAPI (Swagger). La implementación completa de la especificación OpenAPI 3.0 está disponible tanto como DSL como como anotaciones.

OpenAPI DSL:

```
val addUserDocs = document()
        .body()
        .result("400")
        .result("204")

fun addUserHandler(ctx: Context) {
    val user = ctx.body()
    UserRepository.addUser(user)
    ctx.status(204)
}
```

Anotaciones de OpenAPI:

```
@OpenApi(
    requestBody = OpenApiRequestBody(User::class),
    responses = [
        OpenApiResponse("400", Unit::class),
        OpenApiResponse("201", Unit::class)
    ]
)
fun addUserHandler(ctx: Context) {
    val user = ctx.body()
    UserRepository.createUser(user)
    ctx.status(201)
}
```

Para implementar una aplicación Javalin, los desarrolladores solo necesitan crear un jar con dependencias (usando `maven-assembly-plugin`), luego lanzar el jar con `java -jar filename.jar`. Javalin tiene un servidor integrado Jetty, por lo que no es necesario ningún servidor de aplicaciones.

Javalin también tiene una página dedicada exclusivamente a los educadores, donde enfatizan que los estudiantes pueden beneficiarse de Javalin ya que no se requiere una configuración de Servlet Container / Application Server para comenzar a codificar, puesto que ya se incluye el servidor Jetty incorporado en Javalin.

Hay una serie de tutoriales disponibles, como [Running on GraalVM](https://javalin.io/2018/09/27/javalin-graalvm-example.html){:target="_blank" rel="nofollow noreferrer"} y [Kotlin CRUD REST API](https://javalin.io/tutorials/simple-kotlin-example){:target="_blank" rel="nofollow noreferrer"}. La lista completa se puede encontrar en [la página de tutoriales](https://javalin.io/tutorials/){:target="_blank" rel="nofollow noreferrer"}.

Puede encontrar más detalles sobre Javalin en [la página de documentación](https://javalin.io/documentation){:target="_blank" rel="nofollow noreferrer"}. Los usuarios pueden descargar Javalin a través de Maven o manualmente desde [la Central de Maven](https://repo1.maven.org/maven2/io/javalin/javalin/){:target="_blank" rel="nofollow noreferrer"}.

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn-dark .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

### Relacionados <!-- omit in toc -->

[🥇 Los 14 mejores framework de desarrollo de aplicaciones web y móviles para 2020 👨‍💻](https://ciberninjas.com/mejores-sdk-multiplataforma-2019-20)

[👨‍💻 Los 10 + 10 mejores frameworks Java en 2020](https://ciberninjas.com/10-mejores-frameworks-java/)

[🚀 ▷ Lanzamiento de las extensiones de Firebase para Kotlin](https://ciberninjas.com/firebase-extensiones-kotlin/)

[💻 ▷ Segunda actualización de Java para Visual Studio Code en 2020](https://ciberninjas.com/actualidad-java-visual-studio/)

[📄 ▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java ](https://ciberninjas.com/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

[👨‍🎨 Palabras más usadas en cada lenguaje de programación](https://ciberninjas.com/palabras-lenguajes-programacion/)

[🥇 ▷ Cómo APRENDER a Programar GRATIS en 2020: Mejores libros recomendados para programadores](https://ciberninjas.com/programar/)

[🥇 ▷ Las 15 Mejores Lenguajes de Programación 👨‍💻 para Aprender en 2020](https://ciberninjas.com/15-mejores-lenguajes-programacion/)

> 🔥 Seguro también te interesa: [Cómo aprender Python en 2020](/python/), [🥇 ▷ Cómo aprender aprendizaje automático o machine learning en 2020 🤖](/que-aprender-sobre-machine-learning-2020/), [▷ Más de 200 de los mejores tutoriales de aprendizaje automático, PNL y Python](/aprendizaje-automatico-cursos-ingles/)
{: .notice--danger}
