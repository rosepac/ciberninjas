---

author: rosepac
bootstrap: true
comments: false
tags:
- Android
- Firebase
- Kotlin
- Extensiones
thumbnail: /assets/img/blog/firebase-kotlin-1.webp
feature-img: /assets/img/blog/firebase-kotlin-1.webp
title: '🚀 ▷ Lanzamiento de las extensiones de Firebase para Kotlin'
description: >-
  'Se anuncia que están disponibles las bibliotecas de KTX y se comienza a recomendar para todos los desarrolladores de Firebase que se use Kotlin en sus aplicaciones de Android.'
excerpt: >-
  'Se anuncia que están disponibles las bibliotecas de KTX y se comienza a recomendar para todos los desarrolladores de Firebase que se use Kotlin en sus aplicaciones de Android.'
canonical_URL: https://ciberninjas.com/firebase-extensiones-kotlin/
permalink: /firebase-extensiones-kotlin/
date: 2020-03-30
published: true

---

Sabemos que Kotlin es el futuro de Android y que los desarrolladores de Kotlin quieren API limpias e idiomáticas cuando usan Firebase en sus aplicaciones. Durante el año pasado, hemos lanzado las bibliotecas de extensión Firebase Kotlin (KTX) junto con nuestros SDK de Java para Android para brindar a los desarrolladores de Kotlin lo mejor de ambos mundos.

![Lanzamiento de las extensiones de Firebase para Kotlin](/assets/img/blog/firebase-kotlin-1.webp "Lanzamiento de las extensiones de Firebase para Kotlin")

> 🔥 Seguro también te interesa: [Comparación Flutter, React, Xamarin](/comparacion-flutter-react-native-xamarin/) >> [Palabras de Kotlin](/palabras-lenguajes-programacion/#nube-de-palabras-de-kotlin) [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-editores-texto/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [portátiles para programadores]() >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/)
{: .notice--danger}

**Hoy, nos complace anunciar que estas bibliotecas de KTX están fuera de Beta y se recomiendan para todos los desarrolladores de Firebase que usen Kotlin en sus aplicaciones de Android.**

¿Qué cambios nuevos presentamos hoy?

- Documentos de [referencia](https://firebase.google.com/docs/reference/kotlin/packages){:target="_blank" rel="nofollow,noreferrer"} completa para todas nuestras bibliotecas KTX.
- Los fragmentos de Kotlin en nuestra [documentación](https://firebase.google.com/docs/guides){:target="_blank" rel="nofollow,noreferrer"} ahora usarán la sintaxis de KTX.
- El código de Kotlin en nuestras [muestras](https://github.com/firebase/quickstart-android){:target="_blank" rel="nofollow,noreferrer"} ahora usará la sintaxis de KTX.

Para comenzar con nuestras bibliotecas KTX, busque el `-ktx` sufijo en la sección "Kotlin + KTX" de nuestras [bibliotecas de Android disponibles](https://firebase.google.com/support/release-notes/android). Como ejemplo, veamos cómo se ve configurar Remote Config con y sin la biblioteca KTX.

**app / build.gradle (antes)**

{% highlight js %}
implementación 'com.google.firebase: firebase-config: 19.1.2'
{% endhighlight %}

**MainActivity.kt (antes)**

{% highlight js %}
val remoteConfig = FirebaseRemoteConfig.getInstance ()

val configSettings = FirebaseRemoteConfigSettings.Builder ()
        .setMinimumFetchIntervalInSeconds (3600)
        .setFetchTimeoutInSeconds (60)
        .construir()
remoteConfig.setConfigSettingsAsync (configSettings)
{% endhighlight %}

**app / build.gradle (después)**

{% highlight js %}
// La biblioteca -ktx depende de la biblioteca firebase-config
implementación 'com.google.firebase: firebase-config-ktx: 19.1.2'
{% endhighlight %}

**MainActivity.kt (después)**

{% highlight js %}
// Nueva clase global "Firebase"
val remoteConfig = Firebase.remoteConfig

// Nueva sintaxis del generador de configuraciones
val configSettings = remoteConfigSettings {
    minimumFetchIntervalInSeconds = 3600
    fetchTimeoutInSeconds = 60
}
remoteConfig.setConfigSettingsAsync (configSettings)
{% endhighlight %}

¡Y las bibliotecas KTX que tenemos disponibles hoy son solo el comienzo, ya que estamos trabajando duro para agregar cobertura para todos los productos Firebase y agregar nuevas funciones centradas en Kotlin en un futuro cercano!

No hubiéramos podido lanzar estas bibliotecas KTX sin la ayuda de todos los entusiastas de Kotlin en la comunidad Firebase. Nos gustaría dar un agradecimiento especial a [Rosário Pereira Fernandes](https://github.com/rosariopfernandes), quien contribuyó con un código y documentación excelentes al esfuerzo de KTX.

## Licencia

**Fuente**: [Se abren las extensiones de Firebase enfocadas a Kotlin](https://firebase.googleblog.com/2020/03/firebase-kotlin-ga.html "Se abren las extensiones de Firebase enfocadas a Kotlin"){:target="_blank" rel="nofollow,noreferrer"}

### Relacionados

[▷ Qué es Flutter SDK](/que-es-flutter-y-por-que-debes-aprenderlo/)

[▷ Cómo aprender Flutter en 2020](/como-aprender-flutter/)

[▷ Wallpapers de Flutter](/wallpaper-flutter/)

[▷ Productos de Flutter](https://ciberninjas.redbubble.com){:target="_blank" rel="nofollow,noreferrer"}
