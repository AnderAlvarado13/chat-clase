 <h2 align="center">
  Server Clase - Node.js | Sequelize
</h2>

- En este repositorio encontraras la gestión Backend para el proceso de una clase virtual para la interacción de los estudiantes y moderadores en el cual se puede encontrar con un ORM como lo es Sequelize para la gestión hacia la base de datos esto con el fin de realizar una gestión mucho mas eficaz.

<h3> 🛠️ Indicaciones de la Api 🛠️ </h3>

***Requisitos***

- Node version "v20.16.0"
- npm version "10.8.1"
- MySQL

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/AnderAlvarado13/chat-clase.git
2. **Configurar la base de datos MySQL**
   ```sql
    CREATE DATABASE clase_db;
   ```
    > Es necesario que cree en su base de datos MySQL cree el schemas `clase_db` y modificar las credencias en la ruta: `.env`:
    ```json
      DB_NAME=clase_db
      DB_USER=root
      DB_PASS=tu-contrasena
      DB_HOST=localhost
      JWT_SECRET=$klasjmdlkamsdlop123aD21
      PORT=5000
    ```
    Reemplaza root por tu usuario de MySQL y tu-contrasena por tu contraseña de MySQL.
   
4. **Instalar las dependencias del proyecto**
   ```bash
   npm install --force o npm install --legacy-peer-deps

5. **Ejecutar la Server**
- Ejecute `npm start` para que se inicie la server, si todo salio correcto tendríamos disponible el puerto `localhost:5000` para el cual ya podemos realizarle peticiones.


***request use***

> [!NOTE]
> Se realizaron pruebas unitarias con postman las cuales dejo el uso de ellas de la siguiente forma: 

- Registrar Usuario:
>`POST` http://localhost:5000/api/auth/register
Body:
```json
{
  "username": "student1",
  "password": "123456",
  "role": "student" // O "moderator" para moderadores
}
```
Response: 
```json
{
    "message": "Usuario registrado exitosamente"
}
```

- Login Usuario:
>`POST` http://localhost:5000/api/auth/login
Body:
```json
{
  "username": "student1",
  "password": "123456"
}
```
Response: 
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzI4NDM2MDc3LCJleHAiOjE3Mjg0Mzk2Nzd9.aPG92QGxmqNfb0RFUARrRsq9ffnlV6spIzf2JRHRkgM"
}
```

- Acceder a los mensajes del chat:
>`GET` http://localhost:5000/api/chat/messages
Headers: `Authorization: token`
