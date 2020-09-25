---

author: rosepac
bootstrap: true
comments: false
tags:
- Frameworks Multiplataforma
- Angular
thumbnail: /assets/img/2020-news/angular-10.webp
feature-img: /assets/img/2020-news/angular-10.webp
title: '🥇 ▷ Angular 10: Conoce todas las novedades del framework desarrollado en Typescript por Google'
description: >-
  La actualización principal del popular framework web, Angular, creado por Google ahora es lanzado como versión estable para su uso en producción.
excerpt: >-
  La actualización principal del popular framework web, Angular, creado por Google ahora es lanzado como versión estable para su uso en producción.
canonical_URL: https://ciberninjas.com/angular-10-novedades/
permalink: /angular-10-novedades/
date: 2020-06-29 17:10:32
last_modified_at: 
published: true

---

La actualización del framework Angular desarrollado por Google se centra más en las mejoras del ecosistema que en las nuevas características. Angular 10 está configurado para ser más pequeño que las versiones anteriores.

Además, las configuraciones opcionales más estrictas ofrecen una configuración de proyecto más estricta al crear un nuevo espacio de trabajo con `ng new`, via `ng new -- strict`.

Al habilitar este indicador, se inicializa un nuevo proyecto con una nueva configuración para mejorar la capacidad de mantenimiento, ayudar a detectar errores y permitir que la CLI realice optimizaciones avanzadas en una aplicación.
- [**Nuevas características de Angular 10**](#nuevas-características-de-angular-10)
- [**Mejoras de Rendimiento en Angular 10**](#mejoras-de-rendimiento-en-angular-10)
- [**Cambios rompedores**](#cambios-rompedores)
- [**¿Cómo descargar Angular 10?**](#cómo-descargar-angular-10)
- [**Cómo actualizar a Angular 10**](#cómo-actualizar-a-angular-10)
- [**Nuevos Conceptos de Angular 10**](#nuevos-conceptos-de-angular-10)
  - [**Microsintaxis**](#microsintaxis)
  - [**Expresión vinculante**](#expresión-vinculante)
  - [**Árbol de sintaxis abstracta (AST)**](#árbol-de-sintaxis-abstracta-ast)
  - [**terser**](#terser)
  - [**'UrlMatcher'**](#urlmatcher)
  - [**Bazel**](#bazel)
  - [**Servicio del lenguaje Angular**](#servicio-del-lenguaje-angular)
- [**Filosofía del nuevo compilador de Angular**](#filosofía-del-nuevo-compilador-de-angular)
  - [**La Arquitectura del transpilador TypeScript**](#la-arquitectura-del-transpilador-typescript)
  - [**Los pasos de Compilación de Angular**](#los-pasos-de-compilación-de-angular)
  - [**Los dos nuevos puntos de entrada del compilador**](#los-dos-nuevos-puntos-de-entrada-del-compilador)
    - [NGTSC](#ngtsc)
    - [Flujo de compilación de NGTSC](#flujo-de-compilación-de-ngtsc)
    - [NGCC](#ngcc)
    - [Cómo utilizar ngcc](#cómo-utilizar-ngcc)
- [**Corrección de errores**](#corrección-de-errores)
  - [**El problema de la compatibilidad del compilador**](#el-problema-de-la-compatibilidad-del-compilador)
  - [**Convertir el código anterior a Ivy**](#convertir-el-código-anterior-a-ivy)

## **Nuevas características de Angular 10**

- `**language-service**`**:** Se ha agregado una interfaz de compilador que envuelve el `ngtsc`compilador real . El `language-service`compilador específico maneja múltiples archivos de [verificación de tipos](https://github.com/angular/angular/commit/1142c37) usando la interfaz del proyecto, creando `ScriptInfo`s según sea necesario.
- `**language-service**`**:** Eliminar el autocompletado de entidades HTML. El autocompletado se está eliminando de las entidades HTML, como `&`, `<`etc., porque está fuera de la funcionalidad central de Angular LS y tiene un valor cuestionable y un costo de rendimiento.
- **Compilador:** se han agregado intervalos de nombres para lecturas de propiedades y llamadas a métodos
- **Compilador:**`ng-content` se ha agregado información de dependencia y selectores a los metadatos. Esta [característica del compilador propuesta](https://github.com/angular/angular/pull/35695) proporcionaría metadatos adicionales útiles para herramientas, como el Servicio de lenguaje angular, que ofrece la capacidad de proporcionar sugerencias para directivas / componentes definidos en bibliotecas.
- **Compilador:** [Propagación](https://github.com/angular/angular/pull/36133) del intervalo de valor correcto en una `ExpressionBinding`expresión de microsintaxis a `ParsedProperty`, que, a su vez, propagaría el intervalo a los AST de plantilla (VE e Ivy)
- `**ngcc**`**:** Permite configurar tiempos de espera de bloqueo asíncrono. Esto agrega soporte para el `ngcc.config.js`archivo para configurar las opciones `retryAttempts`y `retryDelay`para `AsyncLocker`. Una prueba de integración agrega una nueva verificación para un tiempo de espera y se utiliza `ngcc.config.js`para reducir el tiempo de espera para evitar que la prueba tarde demasiado.
- `**ngcc**`**:** Se ha implementado un [buscador de puntos de entrada](https://github.com/angular/angular/commit/f3ccd29) basado en un programa. Este buscador está diseñado para procesar solo puntos de entrada a los que puede acceder el programa definido por un archivo `tsconfig.json`. El uso de esta opción puede acelerar el procesamiento en casos en los que hay una gran cantidad de dependencias instaladas pero solo una pequeña proporción de los puntos de entrada se importan realmente a la aplicación.
- Bazel: El mapeo explícito está siendo expuesto desde el cierre a archivos en modo dev. Esta característica está dirigida a herramientas de desarrollo que tienen que traducir las entradas de compilación de producción a sus equivalentes en modo dev.
- **Localize:** se admite la fusión de varios archivos de traducción. Anteriormente, solo se podía cargar un archivo de traducción por configuración regional. Ahora los usuarios pueden especificar varios archivos por configuración regional, y las traducciones de cada uno de estos archivos se fusionarán mediante una ID de mensaje. La fusión está en un enfoque de primera victoria. Así que si usted tiene tres archivos que se fusionen - `"a.xlf”`, `"b.xmb"`y `"c.json"`- a continuación, ningún mensaje de `"a.xlf”` se utilizará en lugar de un mensaje de `"b.xmb"` o `"c.json"`... y así sucesivamente. En la práctica, esto significa que primero debe colocar los archivos en orden de importancia, con las traducciones alternativas más tarde.
- **Enrutador**: para el enrutador, el protector `CanLoad` ahora puede regresar `Urltree`. Un `CanLoad` que regrese `Urltree` cancela la navegación actual y es redirigido. Esto coincide con el comportamiento actual disponible para los `CanActivate`guardias que también se ha agregado. Esto no afecta la precarga. Un `CanLoad`guardia bloquea cualquier carga previa; cualquier ruta con un `CanLoad`guardia no se cargará previamente, y los guardias no se ejecutarán como parte de la carga previa.
- **Angular Material**: la librería de diseño de Material para Angular ahora incluye un nuevo selector de rango de fechas . Para usar el nuevo selector de rango de fechas, puede usar los componentes mat-date-range-inputy mat-date-range-picker.

## **Mejoras de Rendimiento en Angular 10**

- `**compiler-cli**`**:** Realice una comprobación de tipo de plantilla de forma incremental y divida la comprobación de tipo de plantilla de Ivy en varios archivos
- `**ngcc**`**:** Ahora se permite la notificación inmediata de un archivo de bloqueo obsoleto. Además, un `.tsconfig`archivo analizado se almacena en caché entre ejecuciones.
- `**ngcc**`**:** Reduce el tamaño del archivo de manifiesto de punto de entrada. Se conoce la ruta base para el paquete y los puntos de entrada, por lo que no es necesario almacenarlos en el archivo. Se evita almacenar matrices vacías innecesariamente. Anteriormente, incluso si un punto de entrada no necesitaba procesamiento, `**ngcc**`analizaría los archivos del punto de entrada para calcular las dependencias, lo que tomaría mucho tiempo para los módulos de nodo grande.
- `**ngcc**`:** Para mejorar el rendimiento, el cálculo de `basePaths` se ha hecho vago, por lo que el trabajo solo se realiza si es necesario `TargetedEntryPointFinder`. Anteriormente, `basePaths`se calculaba cada vez que se creaba una instancia del buscador, lo que era una pérdida de esfuerzo en el caso en que el punto de entrada objetivo ya había sido procesado.

## **Cambios rompedores**

- **Mecanografiado 3.9** ahora se presenta, con soporte para TypeScript 3.8 que se ha eliminado. TypeScript 3.6 y TypeScript 3.7 tampoco son compatibles.
- TSlib, la biblioteca de tiempo de ejecución para TypeScript que contiene funciones auxiliares, se ha actualizado a [v2.0.](https://github.com/microsoft/tslib/releases/tag/2.0.0)
- La herramienta de análisis estático TSLint para TypeScript se ha actualizado a v6.
- El formato de paquete angular ya no incluye paquetes ESM5 o FESM5, lo que ahorra tiempo de descarga e instalación cuando se ejecuta `yarn`o `npm install`para paquetes y bibliotecas angulares.
- La configuración del navegador para nuevos proyectos se ha actualizado para excluir los navegadores más antiguos y menos utilizados. El soporte está en desuso para Internet Explorer 9, Internet Explorer 10 e Internet Explorer Mobile.
- **Trabajadores del servicio:** Anteriormente, los `Vary`encabezados se tendrían en cuenta al recuperar recursos de la memoria caché, evitando por completo la recuperación de los activos en caché (debido a los `ServiceWorker`detalles de implementación) y dando lugar a un comportamiento impredecible debido a implementaciones inconsistentes / con errores en diferentes navegadores. Ahora, los `Vary`encabezados se ignoran cuando se recuperan recursos de los `ServiceWorker`cachés, lo que puede resultar en la recuperación de recursos incluso cuando sus encabezados son diferentes. Si su aplicación necesita diferenciar sus respuestas en función de los encabezados de solicitud, asegúrese de que Angular `ServiceWorker`esté configurado para evitar el almacenamiento en caché de los recursos afectado.
- **Enrutador:** cualquier resolución que regrese `EMPTY`cancelará la navegación. Si desea permitir la navegación para continuar, tendrá que actualizar los dispositivos de resolución para emitir algún valor, (es decir, `defaultIfEmpty(...)`, `of(..)`, etc).
- **Común: la** lógica se ha actualizado con respecto a los períodos de día de formato que cruzan la medianoche. Al formatear una hora con el código de formato `b`o `B`, la cadena representada no manejaba adecuadamente los períodos de días que abarcaban días. En cambio, la lógica volvía al caso predeterminado de `AM`. Esta lógica se ha actualizado para que coincida con los tiempos dentro de un período de un día que se extiende más allá de la medianoche, por lo que ahora generará la salida correcta, como `at night`en el caso del inglés. Las aplicaciones que utilizan uno `formatDate()`o `DatePipe`los códigos de formato `b`y `B`se verán afectadas por este cambio.
- **Núcleo: las** advertencias sobre elementos desconocidos ahora se registran como errores. Esto no dañará su aplicación, pero puede activar herramientas que no esperan que se registre nada `console.error`.
- **Núcleo: los** paquetes npm angulares ya no contienen comentarios JSDoc para admitir las optimizaciones avanzadas del compilador de cierre. El soporte para el Compilador de cierre en paquetes angulares ha sido experimental y no funciona desde hace bastante tiempo. A partir de TS3.9, el cierre no se puede utilizar con la emisión de JavaScript.
- **Núcleo:** genérico se ha hecho obligatorio para `ModuleWithProviders`. Se ha requerido un parámetro de tipo genérico para que el `ModuleWithProviders`patrón funcione con la compilación de Ivy y la canalización de representación, pero antes de esta confirmación, View Engine permitió que se omitiera el tipo genérico. Si un desarrollador está utilizando `ModuleWithProviders`sin un tipo genérico en el código de su aplicación, una migración de la versión 10 actualizará el código por usted.

Sin embargo, si un desarrollador está utilizando View Engine y, dependiendo de una biblioteca que omita el tipo genérico, ahora obtendrá un error de tiempo de compilación similar a:

```
error TS2314: Generic type 'ModuleWithProviders<T>' requires 1 type argument(s).
```

En este caso, `ngcc`no lo ayudará (porque es solo Ivy), y la migración solo cubre el código de la aplicación. Debe ponerse en contacto con el autor de la biblioteca para corregir su biblioteca para proporcionar un parámetro de tipo cuando utilizan esta clase. Como solución alternativa, `skipLibChecks` puede configurarse como `false` en el archivo `.tsconfig` o puede actualizar su aplicación para usar Ivy.

## **¿Cómo descargar Angular 10?**

Puedes encontrar la versión general  de Angular 10 en GitHub. Para actualizar su instalación de Angular puedes ejecutar el comando: `ng update @angular / cli @angular / core`

## **Cómo actualizar a Angular 10**

Para actualizar su instalación angular actual, puede ejecutar este comando (consulte la Guía de actualización angular aquí ):

```
ng update @ angular / cli @ angular / core
```

## **Nuevos Conceptos de Angular 10**

### **Microsintaxis**

La microsintaxis en Angular te permite configurar una directiva en una cadena compacta y amigable. El analizador de microsintaxis traduce esa cadena en atributos de `<ng-template>`. Entonces, en lugar de `<ng-template ngFor [ngForOf]="items"><div>{{item}}</div></ng-template` escribirás `<div *ngFor="let item of items">{{item}}</div>`.

### **Expresión vinculante**

Hay cuatro tipos diferentes de enlaces de datos disponibles en Angular:

- **Enlace de evento**: Ejemplo: `<button (click)="updateName()">Update button</button>`
- **Enlace de datos bidireccional**: un mecanismo donde los datos fluyen en ambos sentidos desde el componente a la vista y viceversa. El componente y la vista siempre están sincronizados, y los cambios realizados en cualquier extremo se actualizan inmediatamente en ambos sentidos. Ejemplo: `<input [(ngModel)]="name">`
- **Interpolación**: el texto que representa las variables en los componentes se coloca entre llaves dobles en la plantilla. Ejemplo: `<p>{{ name }}</p>`
- Enlace de propiedad: un enlace de propiedad es un mecanismo unidireccional que le permite establecer la propiedad de un elemento de vista. Ejemplo: `<button [disabled]="buttonDisabled"></button>`

### **Árbol de sintaxis abstracta (AST)**

AST es un acrónimo de árbol de sintaxis abstracta. Es una representación de tokens generados a partir de declaraciones y expresiones en un lenguaje de programación. Con el AST, el intérprete o el compilador pueden generar código de máquina o evaluar una instrucción. La plantilla angular AST es una versión transformada y anotada de HTML AST que hace lo siguiente:

- Convierte accesos directos de sintaxis de la plantilla de Angular, como `*ngFor` y `[name]` en sus versiones canónicas (y `bind-name`).
- Recopila referencias (atributo `#`) y variables (atributo `let-`).
- Analiza y convierte expresiones de enlace en la expresión de enlace AST utilizando las variables y referencias recopiladas.

### **terser**

**terser** es un kit de herramientas de analizador, gestor y compresor de JavaScript para ES6 +. El equipo de Angular CLI se trasladó a terser en Angular CLI 7.0 para la fase de minificación de la compilación porque `uglify-es` ya no se mantiene y `uglify-js` no es compatible con ES6 +.

### **'UrlMatcher'**

**UrlMatcher** es una función para hacer coincidir una ruta con las URL. Puede implementar un comparador de URL personalizado para `Route.matcher` cuando una combinación de `path` y `pathMatch` no es lo suficientemente expresiva.

```
type UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult;
```

La siguiente coincidencia coincide con los archivos HTML:

```
content_copyexport function htmlFiles(url: UrlSegment[]) {
  return url.length === 1 && url[0].path.endsWith('.html') ? ({consumed: url}) : null;
}
export const routes = [{ matcher: htmlFiles, component: AnyComponent }];
```

### **Bazel**

**Bazel** es un constructor para la CLI angular que fue desaprobada en la versión 10. Aquí hay algunas razones para esta desaprobación:

- El ecosistema de Bazel para la web todavía está evolucionando a un ritmo rápido.
- La introducción del compilador Angular Ivy permite nuevas formas de usar Bazel de una manera más rápida y eficiente
- La paridad de características con la CLI Angular basada en webpack es difícil de lograr sin compensaciones que no serían aceptables para muchos usuarios de Angular.

### **Servicio del lenguaje Angular**

Angular Language Service es un motor de análisis que se integra en su editor de código y le proporciona una forma de completar, rastrear referencias, errores, sugerencias y navegación dentro de las plantillas angulares.

Funciona con plantillas externas en archivos HTML separados y también con plantillas en línea. Su editor detecta automáticamente que está abriendo un archivo angular.

Luego utiliza el Servicio de idiomas de Angular para leer su tsconfig.jsonarchivo, encontrar todas las plantillas que tiene en su aplicación y luego proporcionar servicios de idiomas para cualquier plantilla que abra.

Está disponible como una extensión para Visual Studio Code, WebStorm y Sublime Text. Puede instalarlo utilizando el siguiente comando:

```
npm install --save-dev @ angular / language-service
```
`@angular/language-service`es una envoltura alrededor del servicio de lenguaje TypeScript (de manera similar a las envolturas `ngtsc` o `tsc`) y extiende el análisis de TypeScript con una comprensión específica de los conceptos angulares. Puede tender un puente entre la clase de componente en Typecript y las expresiones en las plantillas.

## **Filosofía del nuevo compilador de Angular**

Angular ofrece dos formas de compilar su aplicación:

- Just-in-Time (JIT), que compila su aplicación en el navegador en tiempo de ejecución. Este fue el valor predeterminado hasta Angular 8.
- head-of-Time (AOT), que compila su aplicación y bibliotecas en el momento de la compilación. Este ha sido el valor predeterminado desde Angular 9.

Ivy es una reescritura completa del compilador (y tiempo de ejecución) para:

- Alcanzar mejores tiempos de compilación (con una compilación más incremental)
- Alcanzar mejores tamaños de compilación (con un código generado más compatible con la sacudida del árbol)
- Desbloquear nuevas funciones potenciales (metaprogramación o componentes de orden superior, carga lenta del componente en lugar de módulos, un nuevo sistema de detección de cambios no basado en Zone.js, etc.)

View Engine es el predecesor de Ivy.

Podemos dividir el trabajo realizado en Ivy en tres categorías, como se indica en el estado de implementación:

1. `@angular/compiler-cli`: Tubería de transformador de TypeScript, que incluye dos herramientas de línea de comandos: `ngtsc`y`ngcc`
2. `@angular/compiler`: Compilador Ivy que convierte decoradores en Ivy
3. `@angular/core`: Decoradores que pueden ser convertidos por `@angular/compiler`.

Para comprender cómo está configurado el compilador, es útil comprender la arquitectura de Typecript que se encuentra debajo.

### **La Arquitectura del transpilador TypeScript**

El siguiente diagrama muestra elflujo normal del `tsc` y los pasos para transpilar un archivo `.ts` en uno `.js` ( `tsc`es de la CLI de Typecript y compila el proyecto más cercano definido por `tsconfig.json`).

![](/assets/img/2020-news/angular-10-1.webp "")

Aquí hay una breve explicación de este flujo:

- **Parse:** Analizador de descenso recursivo adicional, ajustado un poco para admitir el análisis incremental, que emite un AST. Es un árbol que ayuda a identificar qué archivos se importan en el actual.
- **Comprobador de tipo:** este paso construye una tabla de símbolos y luego realiza un análisis de tipo de cada expresión en el archivo, informando los errores que encuentra
- **Transformar:** un conjunto de **transformaciones** de AST a AST que realizan diversas tareas, como eliminar declaraciones de tipo, reducir declaraciones de módulos y clases a ES5, convertir `async`métodos a máquinas de estado, etc.
- **Imprimir:** Conversión de TS a JS.

### **Los pasos de Compilación de Angular**

El compilador angular está construido sobre la arquitectura normal de TypeScript y utiliza sus tres fases principales: creación de programas, verificación de tipos y emisión, más un paso de análisis y un paso de resolución:

- **Creación del programa:** comienza con `tsconfig.json`
- **Análisis:** revisa el código TS clase por clase, busca cosas angulares y recopila información sobre la estructura
- **Resolver:** mira todo el programa a la vez, lo comprende y toma decisiones de optimización
- **Verificación de tipos: al** igual que el compilador TypeScript simple, valida expresiones en plantillas de componentes e informa errores. Este proceso no se extiende ni modifica por `ngtsc`.
- **Emitir:** genera código angular para cada clase decorada y lo parchea. Convierte el código TypeScript a JavaScript. La operación más cara de todo el proceso.

### **Los dos nuevos puntos de entrada del compilador**

Angular ha introducido dos puntos de entrada del compilador: `ngtsc`y `ngcc`.

#### NGTSC

**NGTSC** compila código compatible con Ivy. Es un transpilador de TypeScript a JavaScript que busca decoradores angulares `@Component`y los sustituye con sus contrapartes o instrucciones específicas de tiempo de ejecución angular, como `ɵɵdefineComponent`. Es una envoltura mínima `tsc`. `ngc`funciona como `ngtsc`cuando el `angularCompilerOption` `enableIvy`indicador se establece `true`en el `tsconfig.json`archivo.

#### Flujo de compilación de NGTSC

Cuando `ngtsc`comienza a ejecutarse, primero analiza el `tsconfig.json`archivo y luego crea un archivo `ts.Program`. Deben suceder varias cosas antes de que se puedan ejecutar las transformaciones descritas anteriormente:

- Los metadatos se deben recopilar para los archivos fuente de entrada que contienen decoradores
- Los archivos de recursos enumerados en `@Component`decoradores deben resolverse de forma asíncrona. La CLI, por ejemplo, puede querer ejecutar webpack para producir la `.css`entrada a la `styleUrls`propiedad de a `@Component`.
- Los diagnósticos deben ejecutarse, lo que crea `TypeChecker`y toca todos los nodos del programa (una operación bastante costosa).

#### NGCC

**NGCC** significa compilador de compatibilidad angular. Convierte módulos pre-Ivy (estilo antiguo) en código compatible con Ivy. Procesa el código que proviene de npm y produce la versión equivalente de Ivy como si se compilara el código ngtsc. ngcctambién se puede ejecutar como parte de un cargador de código como webpack para que los paquetes se puedan node_modulestranspilar sobre la marcha.

#### Cómo utilizar ngcc

Puede ejecutar `ngcc`después de cada instalación `node_modules` agregando un script `postinstall` npm.

```
package.json

{
  "scripts": {
    "postinstall": "ngcc"
  }
}
```

Si estás utilizando Angular 8, que fue el primer paso para Ivy, y desea comenzar un nuevo proyecto con Ivy habilitado, puede usar la bandera `--enable-ivy` con el comando `ng new`:

```
ng new shiny-ivy-app --enable-ivy
```

El nuevo proyecto se configura automáticamente para Ivy. La `enableIvy`opción está configurada `true`en el archivo del proyecto : `tsconfig.app.json`.

```
"angularCompilerOptions": {
  "enableIvy": true
}
```

Y, finalmente, puede ejecutar el compilador ejecutando el ngccomando dentro de la carpeta del proyecto recién creado con `node_modules/.bin/ngc`.

Luego, puede inspeccionar el código generado dentro de la carpeta `dist/out-tsc`.

## **Corrección de errores**

- **Enrutador:**`UrlMatcher` ahora puede regresar`null`
- **Core: la** `undecorated-classes-with-decorated-fields` migración no decora clases derivadas
- **Trabajadores del servicio:** evitar que las estrategias de registro de SW afecten la estabilización de la aplicación.
- Se han realizado una serie de correcciones de errores, incluido el compilador que evita las expresiones indefinidas en una matriz holey y el núcleo que evita un error de migración cuando se importa un símbolo inexistente. También hay una solución en el núcleo para el error de alineación terser. Otra corrección de errores identifica correctamente los módulos afectados por anulaciones en TestBed.

### **El problema de la compatibilidad del compilador**

Se necesita una funcionalidad de compatibilidad para migrar gradualmente a Ivy sin interrumpir los cambios. Asegura que las bibliotecas Ivy y no Ivy puedan coexistir durante el período de migración.

No todo el código angular se compila al mismo tiempo. Las aplicaciones dependen de bibliotecas compartidas, y esas bibliotecas se publican en npm en su forma compilada y no como código fuente de TypeScript.

Incluso si una aplicación se crea utilizando ngtsc, sus dependencias pueden no haber sido.
Si una biblioteca en particular no fue compilada ngtsc, no tiene propiedades decorativas reificadas en javascript. Vincularlo con una dependencia que no se compiló de la misma manera fallará en tiempo de ejecución.

### **Convertir el código anterior a Ivy**

Dado que el código Ivy solo se puede vincular con otro código Ivy, para compilar la aplicación, todas las dependencias anteriores a Ivy de npm deben convertirse a dependencias Ivy.

Esta transformación debe suceder como un precursor para ejecutarse ngtscen la aplicación, y las futuras operaciones de compilación y vinculación deben realizarse contra esta versión transformada de las dependencias.

[🔥 Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario! 🎁](https://www.amazon.es/shop/cibercursos "Ojea las Mejores Ofertas Ninja, ¡Actualizadas a Diario!"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}