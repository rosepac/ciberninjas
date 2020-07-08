---

title: "Dlinject"
description: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Dlinject"
excerpt: "👨‍💻 WikiNinjas, la Enciclopedia Informática Tecnológica Ciberninjas: Dlinject"
date: 2020-01-15 01:55:07
published: true
author: rosepac
bootstrap: true
permalink: /wiki/dlinject/
canonical_URL: https://ciberninjas.com/wiki/dlinject/

---

Dlinject es una biblioteca compartida (es decir, código arbitrario) inyectable en un proceso de Linux en vivo, sin la necesidad de [ptrace](/wiki/ptrace).

Dlinject se creo Inspirado por Cexigua y linux-inject, entre otros.

# ¿Por qué?

- Porque puedo.
- Existen varias [técnicas anti-ptrace](https://www.aldeid.com/wiki/Ptrace-anti-debugging) , que esto evade simplemente al no usar ptrace.
- No me gusta ptrace.
- El uso a `LD_PRELOAD`veces puede ser complicado o imposible, si el proceso en el que desea inyectarse es generado por otro proceso con un entorno limpio.

# Cómo funciona

- Envíe la señal de parada al proceso de destino. (Opcional)
- Localiza el `_dl_open()`símbolo.
- Recuperar `RIP`y `RSP`vía `/proc/[pid]/syscall`.
- Haga una copia de seguridad de parte de la pila y del código que estamos a punto de sobrescribir con nuestro código shell, leyendo `/proc/[pid]/mem`.
- Generar buffers de código de shell primario y secundario.
- Inserte el shellcode primario en `RIP`, escribiendo a `/proc/[pid]/mem`.
- El shellcode primario:
	- Empuja registros comunes a la pila.
	- Carga el shellcode secundario a través de `mmap()`.
	- Salta al shellcode secundario.
- El shellcode secundario:
	- Restaura la pila y el código del programa a sus estados originales.
	- Pivota la pila (para que no toquemos la original).
	- Llamadas `_dl_open()`para cargar la biblioteca especificada por el usuario. Cualquier constructor se ejecutará en carga, como de costumbre.
	- Restaura el estado del registro, des-pivota la pila y salta de nuevo a donde estaba en el momento del original `SIGSTOP`.

# Limitaciones:

- El envío `SIGSTOP`puede causar efectos secundarios no deseados, por ejemplo, si otro hilo está esperando `waitpid()`. La `--stopmethod=cgroup_freeze`opción evita esto, pero requiere root (en la mayoría de las distribuciones, al menos).
- No estoy completamente seguro de cómo interactuará esto con aplicaciones complejas de subprocesos múltiples. Ciertamente hay potencial de rotura.
- `x86-64` Solo Linux (por ahora, se podría agregar soporte de 32 bits).
- Requiere root o configuración de YAMA relajada ( `echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope`es útil al realizar pruebas).
- Si el proceso de destino está protegido (por ejemplo, filtros seccomp), es posible que no tenga permiso para `mmap()`el shellcode de la segunda etapa o para `dlopen()`la biblioteca.

**Categorías**: [Depuración](/wiki/categoria/depuracion/)
{:.notice--success}

**INF.**: Esta obra contiene una traducción total derivada de [Dlinject](https://github.com/DavidBuchanan314/dlinject#dlinjectpy){:target="_blank" rel="nofollow,noreferrer"} de Github en inglés, publicada por [sus editores](https://en.wikipedia.org/w/index.php?title=Ptrace&action=history){:target="_blank" rel="nofollow,noreferrer"} bajo Licencia [MIT](https://github.com/DavidBuchanan314/dlinject/blob/master/LICENSE){:target="_blank" rel="nofollow,noreferrer"}{:target="_blank" rel="nofollow,noreferrer"}.
{: .notice--info}