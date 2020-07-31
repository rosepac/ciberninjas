---

author: rosepac
bootstrap: true
comments: false
tags:
- Servicios Nube
- Kubernetes
- Kubenav
- Despliegue
categories:
thumbnail: /assets/img/blog/kubenav-gestor-kubernetes.webp
feature-img: /assets/img/blog/kubenav-gestor-kubernetes.webp
title: '🚀 ▷ '
description: ''
excerpt: ''
canonical_URL: https://ciberninjas.com/kubenav-gestor-kubernetes/
permalink: /kubenav-gestor-kubernetes/
date: 2020-02-26 12:32:32
last_modified_at: 
published: false

---

**Kubenav** es el navegador para tener tus grupos de **Kubernetes** en tu bolsillo. Kubenav es una aplicación de **móvil y de escritorio** creada con el objetivo de ayudar a los desarrolladores de back end, facilitando la administración de los clústers de Kubernetes y ofreciendo un soporte, desde el que estar constantemente informado de todo lo que sucede dentro de tus proyectos.

![Kubenav, una aplicación perfecta para gestionar todos tus proyectos dentro de Kubernetes](/assets/img/blog/kubenav-gestor-kubernetes.webp "Kubenav, una aplicación perfecta para gestionar todos tus proyectos dentro de Kubernetes")

Kubenav, también facilita la vigilancia sobre las cargas de trabajo, y contiene todos los eventos y registros necesarios como para depurar los clústers en caso de fuese necesario, y también, da la opción de editar u eliminar recursos de dentro de la aplicación.

[![img](https://github.com/kubenav/kubenav/raw/master/docs/assets/app-store-badge.png)](https://apps.apple.com/us/app/kubenav/id1494512160) [![img](https://github.com/kubenav/kubenav/raw/master/docs/assets/google-play-badge.png)](https://play.google.com/store/apps/details?id=io.kubenav.kubenav) [![img](https://github.com/kubenav/kubenav/raw/master/docs/assets/desktop-badge.png)](https://github.com/kubenav/kubenav/releases)

[![img](https://github.com/kubenav/kubenav/raw/master/docs/assets/github-screenshot.png)](https://github.com/kubenav/kubenav/blob/master/docs/assets/github-screenshot.png)

<!-- Reeleer hasta abajo https://github.com/kubenav/kubenav -->
The app is developed using [Ionic Framework](https://ionicframework.com/) and [Capacitor](https://capacitor.ionicframework.com/). The most parts of the app are implemented using React functional component and TypeScript. So we can achieve nearly 100% code sharing between the mobile and desktop implementation.

## Features

-  **Available for mobile and desktop**: kubenav is available for mobile and desktop with nearly 100% code sharing.
-  **Manage Workloads**: Manage workloads like Deployments, Pods and StatefulSets in your Kubernetes cluster.
-  **View your resources**: Get an overview of other resources like Services, ConfigMaps, Persistent Volumes, Secrets and Role Bindings.
-  **CRD support**: Out of the box support for Custom Resource Definitions.
-  **Filter**: Filter the resource overview by the selected Namespace.
-  **Debugging**: Automatic detection of problems with your Workloads. Get all corresponding events and logs.
-  **Edit YAML files**: Edit and save your YAML files right from the app.
-  **Delete resources**: Delete resources which are not needed anymore.
-  **Resource usage**: Get the resource usage of your nodes, pods and containers.
-  **Manage multiple clusters**: Add multiple clusters via `kubeconfig` or manually.

## Development

kubenav requires [Node v8.6.0](https://nodejs.org/) or later, and NPM version 5.6.0 or later (which is usually automatically installed with the required version of Node). If you have Node and NPM installedm, install Ionic CLI:

```
npm install -g ionic
```

Clone the repository, login to GitHub packages and install the required dependencies:

```
git clone git@github.com:kubenav/kubenav.git
cd kubenav

npm login --registry=https://npm.pkg.github.com
npm install
```

To use kubenav in you browser you need to start the development server. The server listening on port `14122`:

```
npm run server
```

Now you can start the app and open [localhost:8100](http://localhost:8100/) in your browser:

```
ionic serve
```

You must build the kubenav project at least once before running on any native platform:

```
ionic build
```

Every time you perform a build (e.g. `ionic build`) that changes your web directory (default: `build`), you'll need to copy those changes down to your native projects:

```
npx cap sync
```

The native iOS and Android projects are opened in their standard IDEs (Xcode and Android Studio, respectively). Use the IDEs to run kubenav:

```
npx cap open ios
npx cap open android
npx cap open electron
```

You can also run the native iOS or Android app with live reloading:

```
ionic capacitor run android -l --address=0.0.0.0
ionic capacitor run ios -l --address=0.0.0.0
```

## Release

Every new release is created from the `master` branch. To create a new release the `version` field in the `package.json` file must be updated and a new tag must be set. This process is automated via `Makefile`:

```
make release-patch
make release-minor
make release-major

```

When the tag is pushed the changelog will be generated via GitHub Action and saved to the [CHANGELOG.md](https://github.com/kubenav/kubenav/blob/master/CHANGELOG.md) file. When the changelog was generated a new GitHub release can be created with the following naming scheme and the changelog for the current tag as description:

```
Version <TAG> (yyyy-mm-dd)
```

After the the release was created another GitHub Action is executed to create the Electron app for macOS, Linux and Windows via [electron-builder](https://www.electron.build/). These files are added to the corresponding release. The following formats are available:

- `kubenav--linux.AppImage`: AppImage
- `kubenav--linux.tar.gz`: Archive containing the kubenav app for Linux
- `kubenav--mac.dmg`: Apple Disk Image
- `kubenav--mac.tar.gz`: Archive containing the kubenav app file for macOS
- `kubenav--win.exe`: NSIS installer
- `kubenav--win.tar.gz`: Archive containing the kubenav app for Windows

The native iOS and Android app is built manually and submitted to the App Store and Google Play. To prepare the app run the following commands:

```
export REACT_APP_VERSION=

ionic build

npx cap sync

npx cap open ios
npx cap open android
```

In the standard IDE for iOS and Android run a clean build and follow the steps to publish the app.
## Licencia

Este contenido se encuentra bajo licencia **[MIT](https://github.com/kubenav/kubenav/blob/master/LICENSE "Licencia Apache 2.0")**.

**Fuente**\: [](https://github.com/kubenav/kubenav ""){:target="_blank" rel="nofollow,noreferrer"}
{: .notice--info}

## Relacionados

[▷ Editores de Texto](/categoria/#editor-de-texto)
  * [Eclipse Theia](/wiki/eclipse-theia)
[🥇 ▷ Cómo APRENDER a Programar GRATIS cualquier Lenguaje de Programación en 2020](/programar/)
[▷ Las 15 Mejores Lenguajes de Programación para Aprender en 2020](/15-mejores-lenguajes-programacion/)
[▷ Deep Java Library: nuevo kit de herramientas de aprendizaje profundo para desarrolladores de Java 👨‍💻](/deep-java-libreria-herramienta-desarrolladores-aprendizaje-profundo/)

<div class="fb-post" data-href="https://www.facebook.com/ciberninjas/posts/1331109157075936" data-width="850" data-show-text="true"><blockquote cite="https://developers.facebook.com/ciberninjas/posts/1331109157075936" class="fb-xfbml-parse-ignore"><p>👨‍💻 Los mejores libros con los que aprender a programar en Java y con Android, en Español</p>Publicada por <a href="https://www.facebook.com/ciberninjas/">Ciberninjas</a> en&nbsp;<a href="https://developers.facebook.com/ciberninjas/posts/1331109157075936">Martes, 3 de marzo de 2020</a></blockquote></div>