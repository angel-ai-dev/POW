// selecciona todos los botones con la clase .btn
const botones = document.querySelectorAll('.btn');
// selecciona el elemento de la pantalla
const pantalla = document.querySelector('.pantalla');

// recorre cada botón y agrega un evento de clic
botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const valor = boton.textContent; // obtiene el texto del botón

        // si el botón es "c", limpia la pantalla
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // si el botón es "igual", evalúa la operación
        if (boton.id === "igual") {
            try {
                // evalúa el contenido de la pantalla
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                // muestra error si hay una expresión inválida
                pantalla.textContent = "error";
            }
            return;
        }

        // si la pantalla está en "0", reemplaza por el valor nuevo
        if (pantalla.textContent === "0") {
            pantalla.textContent = valor;
        } else {
            // si no, agrega el valor al contenido existente
            pantalla.textContent += valor;
        }

    });
});
