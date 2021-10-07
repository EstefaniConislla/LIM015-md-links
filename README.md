# Markdown Links

## Introducción

Encuentra todos los links dentro de un archivo Markdown. Funciona cuando se ingresa una ruta relativa/ absoluta llamando directamente  a un archivo Markdown que se encuentre en la posición relativa en la que está el usuario.

## Instalación

$ npm i estefanica

## Usage

Implementa los modulos de node.js:

- fs
- path
- console

## Opciones

Se puede utilizar el paquete con una serie de opciones.

- Sin opciones: al ejecutar el paquete sin opciones se genera un arreglo que contine informacion de cada link encontrado en el archivo MD:

![View](/img/sinRoute.jpg)

- Help: al ejecutar el paquete con la opción --help se genera un arreglo que contiene informacion de cada options:

![View](/img/mssgHelp.jpg)

- Validate: al ejecutar el paquete con la opción validate --v o --validate, se genera el arreglo anterior, agregando además, para cada link encontrado el status de cada uno de ellos, mediante una llamada http.

![View](/img/validate.jpg)

- Stats: al ejecutar el paquete con la opción stats --s o --stats, se genera un objeto con el total de link y con la cantidad de links únicos encontrados dentro del archivo(s).

![View](/img/stats.jpg)

- Stats y Validate: al ejecutar el paquete con las opciones --s --v o --stats --validate, se genera un objeto con el total de link, con la cantidad de links que se encuentran "OK" y la cantidad de los links que se encuentran "Broken".

![View](/img/validatestats.jpg)
