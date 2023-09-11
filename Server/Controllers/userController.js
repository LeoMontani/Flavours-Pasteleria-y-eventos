const { connectDB, disconnectDB } = require("../db/connection");
const Usuario = require("../db/Schemas/userSchema");

const getAll = async (req, res) => { 
  console.log(process.env);
  console.log("Nueva petición a Usuarios");
  await connectDB();
  const users = await Usuario.find({});
  await disconnectDB();
  res.json(users);
};

const create = async (req, res) => { 
  const { email, password } = req.body;
  await connectDB();
  const user = new Usuario ({email, password});
  const newUser = await user.save();
  await disconnectDB();
  res.json(newUser);
};

const update = async (req, res) => { 
  const { id } = req.params
  const { email, password } = req.body;
  await connectDB();
  const response = await Usuario.findByIdAndUpdate(id, { email, password });
  await disconnectDB();
  res.json(response);
};

const deleteUser = async (req, res) => { 
  const { id } = req.params
  await connectDB();
  const response = await Usuario.findByIdAndDelete(id);
  await disconnectDB();
  res.json(response);
};

module.exports = { getAll, create, update, deleteUser }