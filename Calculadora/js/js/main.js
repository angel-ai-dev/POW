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

        // si el botón es "igual", evalúa la operación con lógica propia
        if (boton.id === "igual") {
            try {
                let resultado = calcular(pantalla.textContent);
                pantalla.textContent = resultado;
            } catch {
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


// función para calcular la expresión sin usar eval
function calcular(expresion) {

    // variable operador
    let operador;

    //asignacion
    if (expresion.includes("+")) operador = "+";
    else if (expresion.includes("-")) operador = "-";
    else if (expresion.includes("*")) operador = "*";
    else if (expresion.includes("/")) operador = "/";
    // si no se devuelve lo mismo
    else return expresion;

    // divide la expresión en dos partes usando el operador encontrado
    let partes = expresion.split(operador);

    // si no hay 2 partes es error
    if (partes.length !== 2) return "error";

    // convierte los textos en números decimales
    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);

    //si alguno no es valido error
    if (isNaN(num1) || isNaN(num2)) return "error";

    //operacion
    switch (operador) {

        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "nuh uh";
            
        default:
            return "error";
    }
}
