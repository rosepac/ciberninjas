---
layout: post
title: >
    Chocolatey, el mejor instalador y actualizador de
    aplicaciones
published: false
author: rosepac
bootstrap: true
comments: false
date: 2018-03-01 07:03:36
tags:
    - Consola
    - Instalador
    - Múltiples
categories:
    - sistemas-de-gestion-de-paquetes
    - software
    - software-de-instalacion
permalink: /chocolatey
image:
    feature: chocolatey-ciberninjas.jpg
---
[toc]

## 📌 Introducción

Si eres un auténtico **ciberninja** seguro que eres un amante de probar todo software que encuentras, te parece interesante o te aconsejan.

Lo que con toda seguridad más de un día, te habrá hecho echar humo, al terminar harto de pulsar siguiente, siguiente, siguiente en la instalación de ese engorroso programa o de realizar constantes actualizaciones de los software.

Muchas veces nos obligan a descargar de nuevo archivos **_.exe_** para poder actualizar. Si te ha ocurrido algo de lo arriba citado: **Chocolatey**, es la solución perfecta a todo ello.

Igual que desde hace ya bastante tiempo, existe el instalador múltiple de [Ninite][1] y los Sistemas Operativos de Linux poseen instaladores sencillos del software; aparece Chocolatey, que nos simplifica la instalación de los programas dentro del Sistema Operativo de Windows.

## 👨‍💻 ¿Qué es Chocolatey?

Chocolatey es un gestor de paquetes e instalador a nivel de máquina para paquetes de software, creado para la plataforma Windows.

El motor de ejecución utiliza la infraestructura de empaquetado de NuGet y Windows PowerShell para proporcionar una herramienta de automatización e instalar software en máquinas Windows y fue diseñado para simplificar el proceso desde la perspectiva del usuario.

El nombre es una extensión en un juego de palabras de NuGet (de &#171;nougat&#187; en español, turrón) porque todo el mundo ama Chocolatey (de &#171;nougat chocolat&#187; en español, turrón de chocolate).

## 📋 Requisitos

### Clientes de Chocolatey

Con los clientes de Chocolatey, nos aseguramos de que Chocolatey se ejecute con poca carga de memoria, ya que tendrá todos los aspectos de las cosas que necesitará administrar y diferentes espacios y memoria disponibles para todos esas necesidades.

Para los clientes de Chocolatey, necesitarás lo siguiente:

  * Windows 7 + / Windows 2003+ (Server Core también, pero no Windows Nano Server)
  * Windows PowerShell v2 + (aún no PowerShell Core, también conocido como PowerShell 6)
  * .NET Framework 4.x +

### Componentes de Chocolatey

  * Chocolatey CLI aka choco (o choco.exe) es un cliente (no es un servicio de Windows) que proporciona el núcleo de Chocolatey y el almacén de instalación para paquetes instalados localmente. Esto es importante ya que Chocolatey administra los paquetes, no los Programas y las Características directamente. ¿Los Programas y las Funciones se limitan solo al software que tiene &#171;instaladores&#187;? y Chocolatey trata todos los aspectos del software de Windows como ciudadanos de primera clase (cremalleras, scripts, binarios, instaladores), por lo que necesita rastrear y administrar esas cosas por separado.
  * Chocolatey GUI es una aplicación que se ejecuta cuando un usuario la ejecuta (tampoco es un servicio de Windows).

### Requisitos de Espacio

  * La CLI de Chocolatey tiene un impacto de 15 MB en la instalación predeterminada más el espacio que utilizan los paquetes instalados.
  * Chocolatey GUI ocupa otros 50–100 MB de espacio en la instalación predeterminada.
  * Recomendación [expand title=&#187;Recomendaciones de Espacio a la Hora de Instalaciones de Programas Grandes&#187;] 
    Recomendamos suficiente espacio libre para las aplicaciones que instalará más 1 GB adicional para permitir que Chocolatey procese eso. Deseará activar el Reductor de paquetes (ediciones comerciales) si lo tiene para reducir realmente el impacto de los paquetes integrados, lo que brinda confiabilidad pero también aumenta la huella (a menos que tenga el Reductor de paquetes). Si no tiene Package Reducer y está incrustando binarios en nupkgs, necesitará 3 veces el espacio de lo que está instalando a menos que limpie explícitamente los instaladores / zips extraídos en sus scripts automatizados, entonces necesitará 2 veces más espacio cuando se considera que nupkg seguirá conteniendo binarios incrustados (y el nupkg debe permanecer). Desafortunadamente, esto será un cálculo para comprender los requisitos de espacio exactos y realmente depende de lo que instalará.
    
    [/expand]  
    
    ### Requisitos de Memoria Ram
    
      * Chocolatey CLI solo se ejecuta cuando se llama. Cae en la memoria administrada, por lo que puede funcionar en entornos con poca cantidad de memoria siempre que tengan suficiente memoria disponible para administrar las instalaciones de software.
      * Chocolatey GUI solo se ejecuta cuando la aplicación está abierta y también está en la memoria administrada. Puede funcionar en sistemas con poca memoria.
      * [expand title=&#187;Recomendación&#187;]Al menos 2 GB de RAM como mínimo, pero se recomienda al menos 8 GB para administrar las instalaciones.[/expand]
    
    ## 💭 Hablemos de Chocolatey
    
    Con **Chocolatey** solo debes redactar una pequeña línea de código agregando los comandos adecuados posteriormente a la propia instalación -de Chocolatey en sí- e instantáneamente tendremos el programa instalado. **Así de fácil**.
    
    Si eres un usuario de Linux ya estarás acostumbrado a este estilo de instalaciones; puesto que **Chocolatey,** viene a traer a **Windows**; una metodología de instalación y actualización similar a la usada sobre los Sistemas Operativos de Linux desde hace ya, mucho tiempo atrás.
    
    El enfoque es la búsqueda de facilitar al máximo las instalaciones a los usuarios de Windows.
    
    Además, **Chocolatey** nos ofrece actualmente hasta nada más y nada menos que 7.850 posibilidades, entre programas y otros posibles paquetes de instalación.
    
    El software, ha sido ya, descargado más de 113 millones de veces. Lo que habla muy bien del alcance que ha logrado y de la comodidad que es capaz de aportarnos.
    
    ## ⚙ Comandos
    
    Si quieres conocer todos los comandos existentes dentro de Chocolatey, solo debes ejecutar `choco comand -help` luego de la instalación del propio programa.
    
    [expand title=&#187;Muéstrame los Comandos&#187; 👈]list: lista de paquetes remotos o locales
  
    search: busca paquetes remotos o locales (alias para la lista)
  
    info: recupera información del paquete &#171;choco search pkgname &#8211;exact &#8211;verbose&#171;
  
    install: instala paquetes de varias fuentes
  
    pin: suprimir las actualizaciones de un paquete
  
    outdated: recupera los paquetes desactualizados. Similar a actualizar todo &#171;\`upgrade all &#8211;noop&#171;\`
  
    upgrade: actualiza paquetes de varias fuentes
  
    uninstall: desinstala un paquete
  
    pack: empaqueta un &#171;nuspec&#187; a un &#171;nupkg&#187; compilado
  
    push: empuja un &#171;nupkg&#187; compilado
  
    new: genera archivos necesarios para un paquete de Chocolatey a partir de una plantilla
  
    sources: vea y configure las fuentes predeterminadas (alias para la fuente)
  
    source: vea y configure las fuentes predeterminadas
  
    config: recuperar y configurar los ajustes del archivo de configuración
  
    feature: ver y configurar las características de choco
  
    setapikey: vea y configure las características de choco (alias para la característica)
  
    apikey: recupera o guarda una apikey para una fuente particular (alias para apikey)
  
    unpackself: hacer que el chocolate se instale
  
    version: [DEPRECATED] se elimino en la versión 1 &#8211; usa &#171;choco outdated&#171;
  
    update: [DEPRECATED] RESERVADO para uso futuro
  
    support: proporciona información de soporte
  
    download: descargar paquetes &#8211; opcionalmente internalizar todos los recursos remotos
  
    synchronize: sincroniza con el software instalado en el sistema &#8211; genera paquetes faltantes
  
    sync: sincroniza con el software instalado en el sistema &#8211; genera paquetes faltantes
  
    optimize: optimiza la instalación, reduciendo el uso de espacio
  
    Por favor, ejecute chocolate con &#171;choco command -help&#171; para mostrar la ayuda específica de cada comando [/expand]
    
    
    
    ## 🛠 Instalación de Chocolatey
    
    Para la instalación existen dos opciones, podemos abrir el **Cmd.exe** o bien el **PowerShell.exe** de Windows.
    
      * En el Cmd.exe, copiar esta línea de código:
    
        @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
        
    
      * En el Powershell.exe, el código siguiente:
    
        Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
        
    
    En ambos casos debemos de tener en cuenta que deben ser ejecutadas como administrador, para ello buscaremos o bien, cmd; o bien, powershell; en el buscador de inicio de **Windows** y allí, sobre el programa a abrir, pulsaremos con el botón derecho para elegir la opción de **ejecutar como administrador**.
    
    ![Abriendo powershell como Administrador | Ciberninjas
][2]
    
    Luego simplemente pegar el código y pulsar **ENTER**.
   
    Finalmente solo deberemos entrar [aquí][3]:
    
    ![Página del Software a disposición en Chocolatey | Ciberninjas
][4]
    
    Desde está página debemos ir buscando el Software o ‘Package’ que deseamos utilizar para poder copiar la línea de código adecuada o bien podríamos probar suerte, puesto que la línea de código es siempre la misma y bien sencilla, simplemente los comandos siguientes:
    
        choco install nombre_del_programa
        
    
    **💛 Pegándolo en el CMD o PowerShell 💛**
    
    En mi caso actualizare el muy interesante programa Zeal. Ejecutando la siguiente línea:
    
        choco install zeal
        
    
    > Enter!!! 💻 
    
    ![Ejecución del comando de instalación de Zeal sobre PowerShell | Ciberninjas
][5]
    
    Luego de ver los diferentes procesos que **Chocolatey** va realizando sobre la consola, tendremos el Software instalado y preparado para funcionar!
    
    ## 🎁 Off-topic: Zeal
    
    El programa que hemos aprendido a instalar, se denomina Zeal.
    
    ![Zeal Software Instalado | Ciberninjas][6]
    
    Zeal es un programa muy interesante para todas las personas del mundo de la programación, que se basa en la creación de un navegador de documentación fuera de línea para desarrolladores de software.
    
    Espero presentarlo en una entrada más completa, próximamente 💘
    
    
      
        
           Sitio Oficial
        
        
        
          Página Web
        
      
    
    
    
      
        
           Github
        
        
        
          Código Fuente
        
      
    
    
    
      
        
           Guía
        
        
        
          Documentación Oficial en Inglés
        
      
    
    
    
      
        
           API
        
        
        
          Interfaz de Programación de Aplicaciones
        
      
    
    
    
      
        
           Paquetes
        
        
        
          Listado Completo de los Paquetes que Existen
        
      
    

 [1]: https://kutt.it/ninite_instalador_multiple
 [2]: https://cdn-images-1.medium.com/max/800/1*c_Zwtu7DvFddUnHspVKl1Q.png
 [3]: https://kutt.it/chocolatey_paquetes
 [4]: https://cdn-images-1.medium.com/max/800/1*tkVouRrDr0_fVNJUILJTVw.png
 [5]: https://cdn-images-1.medium.com/max/800/1*74B-D0hgTuaH1eFExwkqFg.png
 [6]: https://cdn-images-1.medium.com/max/1600/1*vUPK_nw-5qOxugcaBaRAhg.png