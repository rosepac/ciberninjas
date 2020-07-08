---

author: rosepac
bootstrap: true
comments: false
tags:
- Rust
- Nightle
- Firefox
categories:
- Lenguajes de Programación
thumbnail: /assets/img/blog/rust-lenguaje.webp
feature-img: /assets/img/blog/rust-lenguaje.webp
title: '▷ Nueva sintaxis de ensamblaje para Rust dentro de Nightly'
description: >-
  Empoderar con Rust y Mozilla Firefox, para construir software confiable y eficiente.
excerpt: >-
  Empoderar con Rust y Mozilla Firefox, para construir software confiable y eficiente.
canonical_URL: https://ciberninjas.com/sintaxis-rust-nightly/
permalink: /sintaxis-rust-nightly/
date: 2020-06-11 12:32:32
last_modified_at: 
published: true

---

En el curso de la optimización, el sistema operativo o el desarrollo integrado, u otros tipos de programación de bajo nivel, es posible que a veces necesite escribir código de ensamblaje nativo para el procesador que está ejecutando. El "ensamblaje en línea" proporciona una manera simple de integrar algunas instrucciones de ensamblaje en un programa Rust, alimentando las expresiones Rust como registros de entrada y obteniendo resultados directamente en las variables Rust. Hemos introducido una nueva sintaxis para el ensamblaje en línea sobre Nightly Rust y estamos buscando comentarios al respecto.

Creemos que esta nueva sintaxis tiene un camino hacia la estabilización en el futuro.

Nightly Rust ha tenido una sintaxis para "ensamblaje en línea" basadada en `asm!` durante mucho tiempo; sin embargo, esta sintaxis acaba de exponer una versión muy cruda de la construcción de ensamblaje de LLVM, sin existir garantías suficientes con las que ayudar a los desarrolladores para usarla. Obtener cualquier detalle de esta sintaxis, puede llegar a ser incluso erróneo, puesto que tiende a producir un Error interno del compilador (ICE) en lugar del tipo de mensaje de error amigable que se espera de rustc.

Esta sintaxis también era propensa a errores por otra razón: se parece a la sintaxis de ensamblaje en línea de GCC, pero tiene diferencias sutiles (como los nombres en las restricciones de registro). Esta sintaxis además, tiene poca o ninguna esperanza de ser compatible con cualquier back-end que no sea LLVM. Como resultado de todas estas limitaciones, era muy poco probable que la sintaxis `asm!` se estabilizará en Nightly Rust.

En un esfuerzo por mejorar `asm!` y acercarlo a los usuarios, Amanieu d'Antras diseñó e implementó una nueva sintaxis más amigable para `asm!` y esta sintaxis ha tenido un largo camino desde su conceptualización y hasta su implementación como compilador:

- La propuesta comenzó como un pre-RFC interno.
- El ensamblaje en línea se convirtió en uno de los primeros grupos de proyectos del equipo de idiomas y diseñó RFC de forma iterativa dentro de los grupos de proyectos.
- RFC 2873 (aún en discusión) proporciona una especificación para la sintaxis y su interacción con el lenguaje Rust.
- Cambiamos el nombre del existente `asm!a` a `llvm_asm!` para que las personas que actualmente usan el ensamblaje en línea todas las noches puedan continuar usando la sintaxis existente por ahora. (Planeamos eliminar esta sintaxis eventualmente, dada su frágil naturaleza de ICE, pero al evaluar la nueva sintaxis queremos que la sintaxis anterior esté disponible para ofrecer alternativas y comparaciones).
- PR 69171 (también de Amanieu) implementó la nueva asm!sintaxis en todas las noches.

Aquí hay un ejemplo del uso de la nueva sintaxis de ensamblaje en línea, para imprimir un mensaje a la salida estándar usando una llamada write o llamada directa al sistema en Linux x86-64:

```
#![feature(asm)]

fn main() {
    let buf = "Hello from asm!\n";
    let ret: i32;
    unsafe {
        asm!(
            "syscall",
            in("rax") 1, // syscall number
            in("rdi") 1, // fd (stdout)
            in("rsi") buf.as_ptr(),
            in("rdx") buf.len(),
            out("rcx") _, // clobbered by syscalls
            out("r11") _, // clobbered by syscalls
            lateout("rax") ret,
        );
    }
    println!("write returned: {}", ret);
}
```

[👨‍💻 Probar el Código](https://play.rust-lang.org/?version=nightly&mode=release&edition=2018&gist=e983a5f5cffa51f4320f1176465d3a56){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

El ejemplo anterior especifica las entradas, salidas y clobbers exactos requeridos por la convención de llamadas syscall de Linux. También puede proporcionar entradas y salidas a través de registros arbitrarios, y el compilador seleccionará los registros apropiados para usted. El siguiente ejemplo utiliza instrucciones de manipulación de bits para calcular los números de bits de todos los bits establecidos en un valor, y los almacena en una porción de memoria:

```
#![feature(asm)]

fn main() {
    let mut bits = [0u8; 64];
    for value in 0..=1024u64 {
        let popcnt;
        unsafe {
            asm!("
                popcnt {popcnt}, {v}
                2:
                blsi rax, {v}
                jz 1f
                xor {v}, rax
                tzcnt rax, rax
                stosb
                jmp 2b
                1:
                ",
                v = inout(reg) value => _,
                popcnt = out(reg) popcnt,
                out("rax") _, // scratch
                inout("rdi") bits.as_mut_ptr() => _,
            );
        }
        println!("bits of {}: {:?}", value, &bits[0..popcnt]);
    }
}
```

[👨‍💻 Probar el Código](https://play.rust-lang.org/?version=nightly&mode=release&edition=2018&gist=38874735e48aa20289f23f5a3cbeae0c){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}

Ten en cuenta que este código sirve para demostrar el ensamblaje en línea, no para demostrar una implementación eficiente de ningún algoritmo en particular).

Observe eso `value` y `popcnt` tenga registros seleccionados para ellos, mientras que `bits.as_mut_ptr()` debe ir en el registro `rdi` para usarlo con la introducción `stosb`.

Además, tenga en cuenta que en las plataformas x86, `asm!` utiliza la sintaxis de Intel de forma predeterminada; sin embargo, puede usar la sintaxis de AT&T con `option(att_syntax)`. Puede resultarle útil al traducir el código de ensamblaje en línea existente a la nueva `asm!`sintaxis.

Para obtener detalles completos sobre la nueva sintaxis `asm!`, consulte [RFC 2873](https://github.com/Amanieu/rfcs/blob/inline-asm/text/0000-inline-asm.md){:target="_blank" rel="nofollow,noreferrer"} . Pruébelo (incluida la traducción del ensamblaje en línea existente a la nueva sintaxis) e [informe cualquier error a través del rastreador de problemas de óxido](https://github.com/rust-lang/rust/issues/){:target="_blank" rel="nofollow,noreferrer"} con la etiqueta `F-asm`. También puede discutir el ensamblaje en línea creando un tema en [la secuencia project-inline-asm en Zulip](https://rust-lang.zulipchat.com/#narrow/stream/216763-project-inline-asm){:target="_blank" rel="nofollow,noreferrer"}.

> 🔥 Seguro también te interesa: [mejores libros de programación](/programar/) >> [programas para desarrolladores](/mejores-sistemas-operativos-para-hackear/) >> [mejores lenguajes de programación](/15-mejores-lenguajes-programacion/) >> [mejores auriculares para programadores](/auriculares-dise%C3%B1o/) >> [ratones verticales para trabajar](/teclados-ratones-dise%C3%B1o/) >> [componentes de PC para programadores](/ordenadores-componentes/) >> [mejores regalos 1 - 📦](/black-friday-amazon/) >> [mejores regalos 2 - 🎁](/prime-day-amazon/)
{: .notice--danger}

[🎁 Visita Nuestra Tienda 🎁](https://www.amazon.es/shop/cibercursos){: .btn .btn--warning .btn--large .align-center}{:target="_blank" rel="nofollow,noreferrer"}