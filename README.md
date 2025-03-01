# Evidencia API: GA7-220501096-AA5-EV02 🚀
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

¡Bienvenido/a a este repositorio! Aquí encontrarás la documentación relacionada con la Evidencia API  "GA7-220501096-AA5-EV02". Esta tarea se centra en la implementación y el uso de una API específica. A continuación, encontrarás toda la información necesaria para comprender y utilizar esta API de manera efectiva.


## Instrucciones
Clona este repositorio en tu máquina local.
```sh
git clone https://github.com/mzrtcode/EVIDENCIA_API
```
Asegúrate de tener instaladas todas las dependencias necesarias para ejecutar la API correctamente.
```sh
cd NODEJS_API_PROYECTO
npm install
```
Configura el archivo de variables de entorno, crea un archivo .env basado en el archivo env.ejemplo
```sh
# Configuración de MongoDB
MONGODB_URL=mongodb://localhost:27017/nombre-de-la-base-de-datos

# Configuración del puerto
PORT=4000
```
Para ejecutar la aplicacion, ejecuta el siguiente comando:
```sh
npm run dev
```

## La aplicación proporciona los siguientes endpoints:

**Obtener Usuarios ✨**

Método: GET
URL: http://localhost:4000/api/usuarios
Descripción: Permite obtener la lista de usuarios registrados en la aplicación.

**RegistarUsuario ✨**

Método: POST
URL: http://localhost:4000/api/usuarios
Descripción: Permite registrar un nuevo usuario en la aplicación. El cuerpo de la solicitud debe incluir los campos "usuario" y "clave" en formato JSON.

**Login ✨**

Método: POST
URL: http://localhost:4000/api/login
Descripción: Permite realizar el inicio de sesión en la aplicación. El cuerpo de la solicitud debe incluir los campos "usuario" y "clave" en formato JSON.
Estos endpoints te permitirán interactuar con la aplicación para obtener información de usuarios, registrar nuevos usuarios y realizar el inicio de sesión. Asegúrate de utilizar los métodos y las URL correspondientes según tus necesidades.

![uno](https://github.com/mzrtcode/EVIDENCIA_API/assets/71569136/4f79fad5-7df1-4c49-9ed0-914ab43c18ee)
![dos](https://github.com/mzrtcode/EVIDENCIA_API/assets/71569136/8e9f26aa-da9f-4a7b-90e4-ef7f86853810)
![tres](https://github.com/mzrtcode/EVIDENCIA_API/assets/71569136/01a8675a-45f8-4392-9ce4-086985a53bb4)


