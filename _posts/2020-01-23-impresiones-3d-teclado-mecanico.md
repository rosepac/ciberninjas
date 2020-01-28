---
author_profile: true
title: "▷ KeyV2: Biblioteca de teclas mecánicas paramétricas"
description: "Esta biblioteca es una biblioteca de construcción de teclados y teclados para teclados mecánicos, escrita en openSCAD."
excerpt: "Esta biblioteca es una biblioteca de construcción de teclados y teclados para teclados mecánicos, escrita en openSCAD."
published: true
comments: true
date: 2020-01-28 17:20:12
last_modified_at: 
published: true
canonical_URL: /impresiones-3d-teclado-mecanico/
classes: wide
categories:
- Biblioteca Impresoras 3D
tags:
- Teclado Mecánico
- Teclas

---

Esta biblioteca es una biblioteca de construcción de teclados y teclas para teclados mecánicos, escrita en openSCAD.

Enlaces relevantes:

- Thingiverse: https://www.thingiverse.com/thing:2783650
- Shapeways: https://www.shapeways.com/designer/rsheldiii/creations

## Cómo comenzar

#### Personalizador de Thingiverse

La forma más fácil (aunque no la mejor) de ejecutar este programa es iniciarlo en [el Personalizador de Thingiverse](https://www.thingiverse.com/apps/customizer/run?thing_id=2783650){:target="_blank"}. Se proporcionan explicaciones de cada opción, así como algunas variables predeterminadas. ¡Gira las variables para ver cómo cambia la tecla!

El personalizador no siempre se mantiene actualizado, por lo que recomiendo las siguientes opciones.

#### Personalizador OpenSCAD

Si descubre que el Personalizador de Thingiverse está agotando el tiempo de espera, pero no está técnicamente inclinado a comenzar a programar en OpenSCAD, puede buscar [el funcionamiento del personalizador de OpenSCAD](https://github.com/rsheldiii/KeyV2/wiki/Getting-the-OpenSCAD-Customizer-working){:target="_blank"}.

#### OpenSCAD Proper

Si tiene alguna inclinación técnica, esta es definitivamente la forma recomendada de ejecutar el código. ¡No es muy difícil!

Primero, necesitará OpenSCAD: http://www.openscad.org/downloads.html . Recomiendo instalar la instantánea de desarrollo, ya que generalmente admiten más funciones y son relativamente estables. Las instantáneas de desarrollo se enumeran en su propia sección en la página de descargas.

Después de instalar openSCAD, debe descargar el código y ejecutarlo. ejecutar `git clone https://github.com/rsheldiii/openSCAD-projects.git`si tiene git, o descargar [este zip](https://github.com/rsheldiii/openSCAD-projects/archive/master.zip){:target="_blank"} y extraer el directorio debería hacerlo. ¡Entonces todo lo que necesita hacer es abrir `keys.scad`con openSCAD y listo! Es posible editar este proyecto con un editor externo marcando Design => 'Automatic Reload and Preview' en OpenSCAD.

Todos los ejemplos a continuación suponen que está ejecutando la biblioteca en su computadora con OpenSCAD.

## Resumen de alto nivel

Esta biblioteca admite conmutadores Cherry y Alps, y tiene perfiles de teclas predefinidos para SA, DSA, DCS, G20, Hi-Pro y (alguna forma de) tapas de teclas OEM. `keys.scad`es el punto de entrada para todo menos para el uso más técnico. Los perfiles de teclas preprogramados se pueden encontrar en el `key_profiles`directorio.

Cada tecla comienza con la configuración predeterminada (provista en `settings.scad`) que se anula en cada llamada de función. La clave más simple que puede hacer sería:

```
key();
```

[![una llave de cereza estándar de pantano](https://github.com/rsheldiii/KeyV2/raw/master/assets/example1.JPG)](https://github.com/rsheldiii/KeyV2/blob/master/assets/example1.JPG)

que es una tecla DCS estándar de la fila 5 de pantano (fila de número / función). Para cambiar cómo se genera la clave, puede modificar la configuración directamente o agregar funciones modificadoras predefinidas de esta manera:

```
// directly modified setting
$stem_inset = 1;
// settings changed through modifier function
sa_row(2) 2u() key();
```

¡Puede encadenar tantas funciones modificadoras como desee!

[![una llave de cereza SA fila 2 de 2 unidades](https://github.com/rsheldiii/KeyV2/raw/master/assets/example2.JPG)](https://github.com/rsheldiii/KeyV2/blob/master/assets/example2.JPG)

## Funciones modificadoras

Hay una gran cantidad de funciones de soporte para personalizar sus teclas. Puede agregar un borde para imprimir más fácilmente el tallo `brimmed_stem_support`, hacer teclas de 2x2 con `2u() 2uh()`, agregar leyendas, rotar tallos y más. Todas estas funciones manipulan la configuración disponible para usted [`settings.scad`](https://github.com/rsheldiii/KeyV2/blob/master/src/settings.scad){:target="_blank"}, aunque [algunas de ellas](https://github.com/rsheldiii/KeyV2/blob/master/src/key_transformations.scad#L128){:target="_blank"} son bastante complejas.

Estas funciones modificadoras se pueden encontrar [`key_profiles/`](https://github.com/rsheldiii/KeyV2/blob/master/src/key_profiles){:target="_blank"} para diferentes perfiles de [`key_types.scad`](https://github.com/rsheldiii/KeyV2/blob/master/src/key_types.scad){:target="_blank"} teclas , para configuraciones predefinidas para teclas comunes (barra espaciadora, desplazamiento a la izquierda, etc.), [`key_sizes.scad`](https://github.com/rsheldiii/KeyV2/blob/master/src/key_sizes.scad){:target="_blank"} para tamaños de unidades comunes y [`key_transformations.scad`](https://github.com/rsheldiii/KeyV2/blob/master/src/key_transformations.scad){:target="_blank"} para todo lo demás. Te animo a que hagas un poco de investigación, pero para obtener una lista de (la mayoría) de las funciones de ayuda con explicaciones, ¡consulta [la wiki!](https://github.com/rsheldiii/KeyV2/wiki/KeyV2-Helper-Documentation){:target="_blank"}.

Es posible que estas funciones modificadoras no cubran todos los casos de uso; en ese caso, es posible que deba escribir SCAD usted mismo.

## Diseños

¡nuevo en la biblioteca y aún en estado beta, los diseños le permiten generar un diseño completo para un teclado!

Se recomienda utilizar un soporte de vástago con punta y establecerlo `$extra_long_stem_support = true`si planea imprimir estas teclas.

```
60_percent_default("dcs") key();
```

[![un diseño estándar del 60 por ciento](https://github.com/rsheldiii/KeyV2/raw/master/assets/layout.png)](https://github.com/rsheldiii/KeyV2/blob/master/assets/layout.png)

los diseños aceptan niños, por lo que puede usarlos como una función encadenada como otros modificadores. Sin embargo, tenga cuidado de anular accidentalmente algo que el diseño hace por usted.

#### Ejemplos de personalizaciones

Digamos que desea generar algunas teclas estabilizadas 2u para un Ergodox, podría hacer algo como esto:

```
legends = ["Enter", "Escape", "Tab", "Shift"];
for(y=[0:3]) {
  translate_u(0,y) 2u() dsa_row() stabilized() cherry() legend(legends[y], [0,0, 6]) key();
}
```

[![un juego de 2 llaves con leyendas](https://github.com/rsheldiii/KeyV2/raw/master/assets/example3.JPG)](https://github.com/rsheldiii/KeyV2/blob/master/assets/example3.JPG)

La `key()`función también es compatible con los niños, y los colocará en el centro de la parte superior de la tecla, si desea diseñar rápidamente sus propias teclas artesanales:

```
cherry() key() {
  translate([-6.25,2.3,-0]) scale(0.074) import("Assieme1.stl");
};
```

[![una llave artesanal sin rostro](https://github.com/rsheldiii/KeyV2/raw/master/assets/example4.JPG)](https://github.com/rsheldiii/KeyV2/blob/master/assets/example4.JPG)

(sin rostro cortesía de [esta cosa](https://www.thingiverse.com/thing:519727/) )

El soporte artesanal también permite *restar a los* niños haciendo `key(inset=true) { ... }`, lo cual es muy útil si desea hacer teclas con leyendas que no son texto. Los niños se colocarán justo encima de la mitad del plato como de costumbre; necesitará traducirlos hacia abajo ( `ex translate([0,0,-1])`) para que 'caven' en la parte superior de la tecla.

## Consejos y trucos

¿Busca información o algo específico? puedes intentar consultar la sección de [consejos y trucos](https://github.com/rsheldiii/KeyV2/blob/master/TIPS_AND_TRICKS.md){:target="_blank"}.

## ¿Qué pasa si quiero ser *realmente* técnico?

Ahora estamos hablando!

En el nivel base, este proyecto debería funcionar bien como una biblioteca intensiva de diseño de perfiles clave. cargando `src/key.scad`(aviso no s) puede modificar las variables `src/settings.scad`para crear prototipos de sus propios perfiles. `key.scad`Hay actualmente~~44~~una gran cantidad de configuraciones diferentes para ajustar, `src/settings.scad`incluido el ancho, la altura y la profundidad de la tapa del teclado, la inclinación del plato, la inclinación superior, las fuentes, el grosor de la pared, etc. Si desea ver la lista completa de configuraciones, siéntase libre de explorar el archivo: [configuraciones .scad](https://github.com/rsheldiii/KeyV2/blob/master/src/settings.scad){:target="_blank"} tiene muchos comentarios para ayudarlo a comenzar.

Esta biblioteca también debe ser lo suficientemente abstracta como para manejar nuevos tipos de platos, sistemas de claves, diseños de teclas, perfiles de teclas y formas de teclas, en caso de que desee diseñar sus propias teclas de estilo Typewriter, admitir teclados de resorte abrochados o diseñar algún tipo de perfil triangular. . `src/shapes.scad` `src/stems.scad`y `src/dishes.scad`todos tienen un módulo 'selector' que debería permitirle implementar sus propias creaciones junto con lo que ya existe en sus carpetas constituyentes.

Si está interesado en esto, puede ser útil leer el [Diseño técnico de una](https://github.com/rsheldiii/KeyV2/wiki/Technical-Design-of-a-Keycap){:target="_blank"} página wiki de [keycap](https://github.com/rsheldiii/KeyV2/wiki/Technical-Design-of-a-Keycap){:target="_blank"}.

Aquí hay un ejemplo de cómo ajustar la configuración y el código para crear un perfil clave de 'señal de stop':

En `key_shape()`en `shapes.scad`:

```
 else if ($key_shape_type == "stop_sign") {
   stop_sign_shape(size, delta, progress);
 }
```

en `src/shapes/stop_sign.scad`:

```
module stop_sign_shape(size, delta, progress){
  rotate([0,0,22.5]) circle(d=size[0] - delta[0], $fn=8);
}
```

En `keys.scad`:

```
union() {
  // make the font smaller
  $font_size = 3;
  // top of keycap is the same size as the bottom
  $width_difference = 0;
  $height_difference = 0;
  $key_shape_type="stop_sign";
  $dish_type = "cylindrical";
  // some keycap tops are slid backwards a little, and we don't want that
  $top_skew = 0;

  legends = ["Stop..", "Hammer", "time!"];

  for(x=[0:len(legends)-1]) {
    translate_u(x) cherry() key(legends[x]);
  }
}
```

[![tres llaves en forma de señal de stop con leyendas](https://github.com/rsheldiii/KeyV2/raw/master/assets/example5.JPG)](https://github.com/rsheldiii/KeyV2/blob/master/assets/example5.JPG)

## Ayuda de impresión

Las impresiones de esta biblioteca siguen siendo desafiantes, a pesar de todos los esfuerzos en contrario. Las impresoras de resina pueden crear teclas de gran apariencia; Las impresoras FDM pueden crear claves utilizables que se vean bien, pero pueden requerir ajustes para obtener impresiones aceptables. Hay algunas cosas rápidas que puede hacer:

1. Si su vástago no encaja en el interruptor, intente aumentar el factor de pendiente, al que se accede dando a su función de sistema un valor numérico (por ejemplo `cherry(0.5) key()`). Esto alargará la cruz y disminuirá el tamaño general del sistema de claves. El valor predeterminado es 0.3 y representa milímetros. Tenga en cuenta que incluso si tiene una impresora de resina, probablemente debería mantener el valor predeterminado; Las teclas impresas con 0 pendientes apenas caben en el tallo.
2. Si su keystem rompe la cama a mitad de la impresión, puede habilitar un borde agregando el `brimmed()`modificador. Esto dará una base sólida para que el sistema de anclaje se ancle.
3. Si no está satisfecho con la calidad de la superficie superior, puede intentar imprimir la tapa de teclado en una superficie diferente a la inferior, aunque puede afectar la calidad del tallo.
4. Si la forma de la llave de nuevo diseño se estrella contra el interruptor, puede habilitar una verificación de espacio libre para los interruptores cherry agregando `$clearance_check = true;`a su declaración de tapa de tecla. Esto restará una forma de interruptor de cereza de su tecla, resaltando las partes en rojo que se cruzan con el interruptor.

Eso es todo, si tiene alguna pregunta, ¡No dude en abrir un problema o dejar un comentario en thingiverse!

_____

**Fuentes**:

* [KeyV2: una biblioteca de teclas mecánicas paramétricas](https://github.com/rsheldiii/KeyV2#parametric-mechanical-keycap-library){:target="_blank"}