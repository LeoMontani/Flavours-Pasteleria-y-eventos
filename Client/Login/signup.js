const loginForm = document.getElementById("login-form");

let resultadoSignup;

const signup = async (email, password) => {
  console.log("La función esta ejecutandose correctamente");
  alert("Cargando...");
  const response = await fetch("http://localhost:8080/login/", {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(response.status);
  }
  const responseData = await response.json();
  resultadoSignup = responseData;
  alert("Cuenta registrada");
};

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const contraseña = loginForm["contraseña"].value;
  await signup(email, contraseña);
});
