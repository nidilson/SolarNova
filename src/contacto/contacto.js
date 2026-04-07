const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const privacidad = document.getElementById("privacidad");

  const errorNombre = document.getElementById("error-nombre");
  const errorEmail = document.getElementById("error-email");
  const errorMensaje = document.getElementById("error-mensaje");
  const success = document.getElementById("form-success");

  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorMensaje.textContent = "";
  success.textContent = "";

  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio";
    valid = false;
  }

  if (!email.value.includes("@")) {
    errorEmail.textContent = "Correo inválido";
    valid = false;
  }

  if (mensaje.value.trim() === "") {
    errorMensaje.textContent = "El mensaje es obligatorio";
    valid = false;
  }

  if (!privacidad.checked) {
    alert("Debes aceptar la política de privacidad");
    valid = false;
  }

  if (valid) {
    success.textContent = "Mensaje enviado correctamente (simulado)";
    form.reset();
  }
});
