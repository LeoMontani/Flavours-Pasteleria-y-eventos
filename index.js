const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const navigationController = require("./Server/Controllers/navigationController.js/navigationController");

//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, "./Client")));

//endpoints que administran archivos
app.get("/home", navigationController.goIndex);
app.get("/login", navigationController.goLogin);

//endpoints que administrarn productos
app.get("/api/productos", );

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});