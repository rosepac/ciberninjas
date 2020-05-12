---

author_profile: true
comments: false
classes: wide
tags:
- Apache Avro
categories:
- Apache Hadoop
header:
  teaser: /assets/images/blog/
title: '🚀 ▷ ¿Qué es Apache Avro para Apache Haddop?'
description: >-
  ''
excerpt: >-
  ''
canonical_URL: https://ciberninjas.com/que-es-apache-avro/
permalink: /que-es-apache-avro/
date: 2020-02-25 00:32:32
last_modified_at: 
published: false

---

![](/assets/images/ "")

## ¿Qué es avro?

Avro es un sistema de serialización de datos y [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) como protobuff y thrift. Se basa en un sistema basado en esquemas. Este esquema está en JSON, lo cual es una ventaja ya que la mayoría de los idiomas ya tienen bibliotecas JSON. Avro fue desarrollado originalmente por [Doug Cutting](https://twitter.com/cutting) para proporcionar servicios de serialización e intercambio de datos para hadoop. Desde entonces, ha evolucionado para servir a otras tecnologías además del hadoop.

Teóricamente, Avro se puede utilizar en cualquier lenguaje, pero tiene API para PHP, Java, Perl, Python, C, C ++, C #, Go, Haskell y Ruby.

## Donde brilla Avro

Comparando Avro con sistemas similares (protobuff, ahorro, paquete de mensajes), estas son las áreas en las que difiere:

- *Escritura dinámica:*

	La serialización y la deserialización se pueden realizar sin generación de código. La generación de código también está disponible para idiomas tipados estáticamente como una optimización opcional.

- *Evolución del esquema:*

	Avro requiere esquemas cuando los datos se escriben o leen. Lo más interesante es que puede usar diferentes esquemas para la serialización y deserialización, y Avro manejará los campos faltantes / extra / modificados.

- *Datos sin etiquetar:*

	Otros sistemas de serialización, como los datos de etiqueta de protobuff, pero que proporcionan un esquema con datos binarios permiten que cada dato se escriba sin la sobrecarga. El resultado es una codificación de datos más compacta y un procesamiento de datos más rápido.

## Por qué necesita Avro (o las bibliotecas de serialización en general):

- Ahorras espacio de almacenamiento. [Uber](https://eng.uber.com/trip-data-squeeze/) redujo drásticamente sus necesidades de almacenamiento al implementar la serialización y compresión de datos.
- Reduce significativamente la cantidad de tiempo dedicado al procesamiento de datos.
- Se traduce en menos dinero ahorrado en el aprovisionamiento de hardware.

## Tipos de datos en Avro

Avro admite una variedad de tipos de datos. Estos tipos pueden ser primitivos, complejos o lógicos.

### Tipos primitivos:

1. *nulo:* sin valor
2. *booleano:* un valor binario
3. *int:* entero con signo de 32 bits
4. *largo:* entero con signo de 64 bits
5. *flotante:* número de coma flotante IEEE 754 de precisión simple (32 bits)
6. *double:* número de coma flotante IEEE 754 de doble precisión (64 bits)
7. *bytes:* secuencia de bytes sin signo de 8 bits
8. *cadena:* secuencia de caracteres Unicode

### Tipos complejos:

Avro también proporciona tipos de datos complejos que son principalmente una combinación de tipos primitivos. Los tipos complejos son:

1. #### *Registros:*

	Un registro es una colección de múltiples tipos. Un registro es equivalente a un objeto JSON o un diccionario en python.

	```
	{
	    "type":"record",
	    "name":"Point",
	    "fields":[
	        {
	            "name":"x",
	            "type":"int"
	        },
	        {
	            "name":"y",
	            "type":"int"
	        }
	    ]
	}
	```

2. #### *Enum:*

	Una enumeración es una lista de elementos en una colección.

	```
	{
	    "type":"enum",
	    "name":"Suit",
	    "symbols":[
	        "SPADES",
	        "HEARTS",
	        "DIAMONDS",
	        "CLUBS"
	    ]
	}
	```

3. #### *Matrices:*

	```
	{ " type " : " array ", " items " : " int " }
	```

4. #### *Mapas:*

	Se supone que las claves del mapa son cadenas. P.ej :

	```
	{"type": "map", "values": "long"}
	```

5. #### *Sindicatos:*

	Las uniones se representan utilizando matrices JSON.

	`["null", "string"]` declara un esquema que puede ser nulo o una cadena.

6. #### *Fijo:*

	Este tipo de datos se usa para declarar un campo de tamaño fijo que se puede usar para almacenar datos binarios. Tiene nombre de campo y datos como atributos. Nombre contiene el nombre del campo y el tamaño contiene el tamaño del campo.

## Definiendo un esquema

Como se indicó, los esquemas Avro se definen con JSON. El esquema es una representación de los datos a serializar en tipos de datos avro.

Crear un esquema para este objeto

```
{
    "products":[
        {
            "id":1,
            "name":"A green door",
            "price":12.50,
            "tags":[
                "home",
                "green"
            ]
        },
        {
            "id":1,
            "name":"A green door",
            "price":12.50,
            "tags":[
                "home",
                "green"
            ]
        },
        {
            "id":1,
            "name":"A green door",
            "price":12.50,
            "tags":[
                "home",
                "green"
            ]
        }
    ]
}
```

Lo que daría como resultado:

```
{
    "namespace":"com.idarlington.avro",
    "type":"record",
    "name":"stream",
    "fields":[
        {
            "name":"products",
            "type":{
                "type":"array",
                "items":{
                    "name":"product",
                    "type":"record",
                    "fields":[
                        {
                            "name":"id",
                            "type":"integer"
                        },
                        {
                            "name":"name",
                            "type":"string"
                        },
                        {
                            "name":"price",
                            "type":"float"
                        },
                        {
                            "name":"tags",
                            "type":{
                                "type":"array",
                                "items":"string"
                            }
                        }
                    ]
                }
            }
        }
    ]
}
```

Para validar y probar su esquema avro, puede verificar [esto](http://sh6.tarantool.org/) .

## Licencia

Este contenido se encuentra bajo licencia **[Apache 2.0](https://es.wikipedia.org/wiki/Apache_License "Licencia Apache 2.0")**.

**Apache Avro Repositorio**: https://avro.apache.org/releases.html Actualizado el 12 de Febrero de 2020.

**Fuente**\: [](http://idarlington.github.io/2017/Getting-started-avro/ ""){:target="_blank" rel="nofollow"}
{: .notice--info}

## Relacionados

[▷ Editores de Texto](/categoria/#editor-de-texto)
  * [Eclipse Theia](/wiki/eclipse-theia)
[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)
[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)
[▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331109157075936" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331109157075936" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros con los que aprender a programar en Java y con Android, en Español</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331109157075936">Martes, 3 de marzo de 2020</a></blockquote></div>