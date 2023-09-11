const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema ({
  email: { type: String, require: true },
  password: { type: String, require: true }
});

const Usuario = model("Usuario", UserSchema);

module.exports = Usuario;