const loginForm= document.getElementById("login-form");

loginForm.addEventListener ("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const contraseña = loginForm["contraseña"].value;
  console.log(email, contraseña);
});