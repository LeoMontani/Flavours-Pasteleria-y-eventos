<<<<<<< HEAD
const loginForm= document.getElementById("login-form");

loginForm.addEventListener ("submit", (e) => {
=======
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
>>>>>>> 7113443f5a9f4f50c67eab01e6cab6ffe5e77f91
  e.preventDefault();
  const email = loginForm["email"].value;
  const contraseña = loginForm["contraseña"].value;
  console.log(email, contraseña);
<<<<<<< HEAD
})


// Esto lo sigo después
app.post ("/users", (req, res) => {

=======
>>>>>>> 7113443f5a9f4f50c67eab01e6cab6ffe5e77f91
});