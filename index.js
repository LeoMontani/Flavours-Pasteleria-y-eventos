require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4040;

const navigationController = require("./Server/Controllers/navigationController");
const userController = require("./Server/Controllers/userController");

//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, "./Client")));

//endpoints que administran archivos
app.get("/home", navigationController.goIndex);
app.get("/login", navigationController.goLogin);
app.post("/home", userController.create);


//endpoints que administrarn productos
app.get("/api/productos", );

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});