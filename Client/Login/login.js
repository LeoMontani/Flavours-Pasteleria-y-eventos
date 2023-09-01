const express = require("express");
const app = express();
const mongoose = require("mongoose");
const loginForm= document.getElementById("login-form");

app.use(express.json());


loginForm.addEventListener ("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const contraseña = loginForm["contraseña"].value;
  console.log(email, contraseña);
})


// Esto lo sigo después
app.post ("/users", (req, res) => {

})