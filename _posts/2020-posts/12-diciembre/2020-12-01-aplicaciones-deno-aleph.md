---

author: rosepac
bootstrap: true
comments: false
tags:
- Deno
- Librerías Javascript
- Aplicaciones Web
thumbnail: /assets/img/2020/js-aleph.webp
feature-img: /assets/img/2020/js-aleph.webp
title: '▷ Aplicaciones web renderizadas a través de un servidor Deno con Aleph.js'
description: >-
  Aleph.js, un framework React para crear aplicaciones renderizadas con un servidor Deno, disponible es versión alfa. Aleph hace que muchas de las funciones principales de Next.js estén disponibles en entornos Deno: como zero-config
excerpt: >-
  Aleph.js, un framework React para crear aplicaciones renderizadas con un servidor Deno, disponible es versión alfa. Aleph hace que muchas de las funciones principales de Next.js estén disponibles en entornos Deno: como zero-config
canonical_URL: https://ciberninjas.com/apps-servidor-deno-aleph/
permalink: /apps-servidor-deno-aleph/
date: 2020-12-01 02:36:32
last_modified_at: 
published: false

---

**Aleph.js, es un framework de React para crear aplicaciones renderizadas mediante [un servidor Deno](/deno-1/)**, ya abierto en una versión alfa. Aleph hace que muchas de las características principales de Next.js estén disponibles en [el entorno de Deno](/deno-1/).

**El renderizado del lado del servidor configurado desde cero, es la fórmula favorita para la generación de sitios estáticos**, sistemas de archivos y enrutamiento de APIs.

La librería de Javascript, Aleph, usa la sintaxis estándar de los Módulos de EcmaScript (ESM) `import` y no usa un paquete en desarrollo. Aleph, también proporciona un reemplazo para permitir la implementación de nuevos módulos en caliente, a través de [React Fast Refresh](https://www.npmjs.com/package/react-refresh){:target="_blank" rel="nofollow,noreferrer"}.

Aleph.js está fuertemente inspirado en Next.js, **Next se describe a sí mismo como un framework React centrado en la producción**; y al igual que Next.js, **Aleph proporciona funciones de productividad** para una mejor experiencia de desarrollador.

La versión alfa de Aleph proporciona un sistema de enrutamiento basado en páginas (con soporte para rutas dinámicas), rutas API, soporte de internacionalización basada en rutas, generación de sitios estáticos, pre-renderizado por defecto (con renderizado configurable del lado del servidor), compatibilidad con CSS y Sass.

Los desarrolladores pueden escribir una aplicación web como un conjunto de páginas y APIs, y cada página se implementará con un componente React.

A diferencia de Next.js, **Aleph trabaja con [Deno](/deno-1/), una alternativa reciente a Node.js** que busca remediar los puntos débiles percibidos dentro de Node. [Deno, que fue lanzado a principios de este año](/deno-1/), es por defecto, compatible con TypeScript.

Además, **Deno tiene un modelo de seguridad más estricto que no permite ningún acceso a archivos, redes o entornos**, excepto que se habilite explícitamente. Deno no utiliza un archivo `package.json`, ni el directorio `node_modules` ni módulos CommonJS.

En su lugar, **Deno aprovecha los módulos de EcmaScript** (ESM) (agregados al estándar de JavaScript ES2015) e importa las dependencias como una URL. La documentación de Aleph explicó las ventajas de productividad del uso de los módulos de Deno con Aleph:

> *Cada módulo, solo necesita compilarse una vez y luego almacenarse en caché en el disco. Cuando un módulo cambia, Aleph.js solo necesita volver a compilar ese único módulo; sin la necesidad de recompilar el resto con cada cambio.*

Un ejemplo de código simple de Aleph usando Deno, vendría a ser:

{% highlight js %}
import React from "https://esm.sh/react@17.0.1"
import Logo from "../components/logo.tsx"

export default function Home() {
    return (
      <div>
        <Logo />
        <h1>Hola Mundo!</h1>
      </div>
    )
}
{% endhighlight %}

Aleph admite mapas de importación a través de un archivo dedicado `import_map.json` en el directorio raíz de la aplicación. Importar mapas es una propuesta del Web Incubator Community Group (WICG) que permite resolver especificadores de importación simples.

Con los mapas de importación, Aleph puede reemplazar `import React from "react"` con `import React from "https://esm.sh/react@16.13.1"`.

Aleph.js requiere un navegador moderno para admitir los módulos ESM y las importaciones dinámicas durante el desarrollo; y por navegador moderno, me refiero a versiones igual o superiores a Chrome 61, Edge 16, Firefox 60, Safari 11 o Opera 48.

Los desarrolladores pueden usar el tiempo de ejecución de Deno para calcular datos en el momento de la compilación y pasar esos datos a una página. Algunos frameworks, como Dojo, llaman a este enfoque: Renderizado en tiempo de construcción.

Next.js proporciona los métodos `getStaticProps` y `getServerSideProps` para obtener los datos del momento de la compilación o en cada solicitud.

Los desarrolladores pueden personalizar las páginas 404, y también pueden usar los siguientes componentes personalizados <App>, <Head> o <Scripts> para controlar el inicio de la página (el diseño y los estilos globales) y personalizar el contenido de las etiquetas.

Un ejemplo de encabezado, sería el siguiente:

{% highlight js %}
import React from "https://esm.sh/react"
import { Head, Scripts } from "https://deno.land/x/aleph/mod.ts"

export default function App({ Page, pageProps }) {
  return (
    <>
      <Head>
        <title>Aleph.js</title>
      </Head>
      <Scripts>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-1234567890');
        `}</script>
      </Scripts>
      <Page {...pageProps} />
    </>
  )
}
{% endhighlight %}

Aleph todavía está en una versión alfa y su desarrollo se mantendrá activo, con planes de admitir navegadores más antiguos como IE11 una vez se lance su versión estable.

La idea es, utilizar la librería `nomodule.js` de [SystemJS](https://github.com/systemjs/systemjs#systemjs){:target="_blank" rel="nofollow,noreferrer"} para importar los módulos; y además, se están realizando trabajos relacionados con el soporte de PWA y AMP.

Los desarrolladores que lo deseen, pueden acceder al [sitio de la documentación de Aleph](https://alephjs.org/docs){:target="_blank" rel="nofollow,noreferrer"}. La librería de Aleph, se encuentra distribuida bajo código abierto distribuido y una licencia MIT. Las contribuciones y comentarios serán bienvenidos y deberán cumplir con [las pautas de contribución del proyecto Aleph](https://github.com/alephjs/aleph.js/blob/master/CONTRIBUTING.md#contributing-to-alephjs){:target="_blank" rel="nofollow,noreferrer"}.

### **Relacionados** <!-- omit in toc -->

[▷ Deno, una fuerte competencia para Node JS](https://ciberninjas.com/deno-1/)

[🛒 Los Mejores Chollos de Amazon, ¡Agrégalos a tu Lista de Deseos!](/amazon/ "Los Mejores Chollos de Amazon, Ofertas Flash, Black Monday y Amazon Prime Day"){: .btn .btn-danger .btn-lg .btn-block}{:target="_blank" rel="nofollow,noreferrer"}

![Aplicaciones web renderizadas a través de un servidor Deno con Aleph.js](/assets/img/2020/js-aleph.webp)