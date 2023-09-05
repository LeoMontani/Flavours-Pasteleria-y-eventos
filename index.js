const express = require("express");
const app = express();
const mongoose = require("mongoose");

const navigationController = require("./Server/Controllers/navigarionController.js/navigationController");

app.use(express.json());

//endpoints que administran archivos
app.get("/home", navigationController.goIndex);

//endpoints que administrarn productos
app.get("/api/productos", navigationController.goLogin);

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
})