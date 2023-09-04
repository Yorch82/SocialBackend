<!-- LOGO -->

<p align="center">
  <img width="400" height="240" src='./public/assets/api.png'>
</p>

<!-- INDICE -->
<details>
  <summary>Indice</summary>
  <ol>
    <li>
      <a href="#introduccion">Introducción</a>
      <ul>
        <li><a href="#hecho-con">Tecnologías</a></li>
      </ul>
    </li>
    <li>
      <a href="#descripción-del-proyecto">Descripción del proyecto</a>
      <ul>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#conocimientos">Conocimientos</a></li>
  </ol>
</details>

<!-- SOBRE EL PROYECTO -->

## Introducción

En el proyecto de backend se combinará los conocimientos adquiridos en las
tecnologías node + express, además de MongoDB/mongoose.
El proyecto consistirá en una red social.


### Tecnologías

Aquí presentamos las herramientas empleadas en este proyecto:

- [Node.js](https://node.org/)
- [Express](https://expressjs.com/es/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Postman](https://www.postman.com/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [JWT](https://jwt.io/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Swagger](https://swagger.io/)

<!-- DESCRIPCION -->

## Descripción

Funciones de la API REST:

- Registro de usuarios usando Bcrypt.
- Login de usuarios + token + middleware.
- Que sea capaz de crear un CRUD.
- Dar/quitar Like a post.
- Backend disponible en producción (Heroku).

### Instalación

1. Para la instalación de la aplicación has de clonarte el siguiente repositorio:

   ```sh
   https://github.com/Yorch82/SocialBackend.git
   ```

2. Tambien has de instalar las dependencias del proyecto:
   ```sh
   npm install
   ```
3. Seeders:


<!-- EJEMPLOS DE USO -->

## Endpoints

Enlace a la documentación de Postman:

   ```sh
    https://documenter.getpostman.com/view/21013418/Uz5KkEKu
   ```

Esta es una lista de los Endpoints del proyecto que puedes ejecutar en Postman:

USUARIOS:

| Metodo | Endpoint                       | Rol     | Funcion                               |
| ------ | ------------------------------ | ------- | ------------------------------------- |
| POST   | `/users/`                      | user    | Crear nuevo usuario                   |
| POST   | `/users/login`                 | user    | Login                                 |
| GET    | `/users/getInfo/:id`           | user    | Obtienes usuario loggeado             |
| GET    | `/users/getById/:_id`          | admin   | Recupera un usuario por ID            |
| GET    | `/users/getByName/:_id_`       | admin   | Recupera un Usuario por nombre        |
| PATCH  | `/users/:id/:friendId`         | user    | Seguir a un usuario                   |
| GET    | `/users/getAll`                | admin   | Recupera todos los usuarios           |
| DELETE | `/users/delete/:_id`           | admin   | Borra usuario                         |
| GET    | `/users/getFriends/:_id`       | user    | Obtiene amigos del usuario            |

POST:

| Metodo | Endpoint                       | Rol     | Funcion                               |
| ------ | ------------------------------ | ------- | ------------------------------------- |
| POST   | `/posts/`                      | user    | Crear nuevo post                      |
| DELETE | `/posts/delete/:_id            | user    | Borrar pos por ID                     |
| PUT    | `/posts/update/:_id`           | user    | Actualizar post por ID                |
| GET    | `/posts/getAll`                | admin   | Recupera todos los posts              |
| GET    | `/posts/getById/:_id`          | admin   | Recupera post por ID                  |
| GET    | `/posts/getByName/:title`      | admin   | Recupera post por Nombre              |
| PATCH  | `/posts/:id/like`              | user    | Like/dislike post                     |

COMMENTS

| Metodo | Endpoint                       | Rol     | Funcion                               |
| ------ | ------------------------------ | ------- | ------------------------------------- |
| POST   | `/comments/`                   | user    | Crear nuevo comentario                |
| GET    | `/comments/getAll`             | admin   | Recupera todos los comentarios        |
| PUT    | `/comments/update/:_id`        | user    | Actualiza comentario                  |
| DELETE | `/comments/delete/:_id`        | user    | Borra comentario                      |
| PATCH  | `/comments/:_id/like`          | user    | Like/dislike comentario               |

<!-- LICENCIA -->

## Licencia

Este programa es de código abierto y puede ser utilizado por cualquier persona que lo desee.

<!-- CONTACTO -->

## Contacto

Jorge - [gitHub](https://github.com/yorch82)

<!-- CONCOCIMIENTOS -->

## Conocimientos

- [x] Uso de Node.js
- [x] MongoDB
- [x] Mongoose
- [x] Deploy en [Adaptable](https://adaptable.io/)
- [x] Testing con Jest
- [x] Swagger
