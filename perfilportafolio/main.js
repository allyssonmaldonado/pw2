const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    const mensajeFormulario =
        document.getElementById("mensajeFormulario");


    // Limpiar mensajes anteriores

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    mensajeFormulario.textContent = "";


    let formularioCorrecto = true;


    // Validar nombre

    if (nombre.value.trim() === "") {

        errorNombre.textContent =
            "Ingrese su nombre.";

        formularioCorrecto = false;
    }


    // Validar correo

    const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        errorEmail.textContent =
            "Ingrese su correo.";

        formularioCorrecto = false;

    } else if (!expresionCorreo.test(email.value)) {

        errorEmail.textContent =
            "Ingrese un correo válido.";

        formularioCorrecto = false;
    }


    // Validar mensaje

    if (mensaje.value.trim() === "") {

        errorMensaje.textContent =
            "Ingrese un mensaje.";

        formularioCorrecto = false;
    }


    // Mostrar resultado

    if (formularioCorrecto) {

        mensajeFormulario.textContent =
            "¡Mensaje enviado correctamente!";

        mensajeFormulario.style.color = "green";

        formulario.reset();
    }

});
