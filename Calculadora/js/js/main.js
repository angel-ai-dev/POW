const botones = document.querySelectorAll('.btn');
const pantalla = document.querySelector('.pantalla');

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const valor = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }

        if (pantalla.textContent === "0") {
            pantalla.textContent = valor;
        } else {
            pantalla.textContent += valor;
        }

    });
});