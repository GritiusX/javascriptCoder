let cantidad = parseInt(prompt("Indicar cantidad de cálculos que se realizarán:"));

for (let i = 0; i < cantidad; i++) {
    let calculo = prompt("Ingrese tipo de calculo - Suma (s), Resta(r), Producto(p) o Division(d)").toLowerCase();
    calculadora(calculo);
}

function calculadora(calculo) {
    let numero = 0;
    let resultado = 0;
    if (calculo == "suma".trim() || calculo == "s".trim()) {
        alert('SUMA SELECCIONADA!')
        let cantidad = parseInt(prompt("Indicar cantidad de números a utilizar:"));
        for (let i = 1; i <= cantidad; i++) {
            numero = parseInt(prompt(`número ${i}:`));
            resultado = resultado += numero;
        }
        alert(resultado);
    } else if (calculo == "resta".trim() || calculo == "r".trim()) {
        alert('RESTA SELECCIONADA!')
        let cantidad = parseInt(prompt("Indicar cantidad de números a utilizar:"));
        for (let i = 1; i <= cantidad; i++) {
            numero = parseInt(prompt(`número ${i}:`));
            if (numero <= 0) {
                resultado = resultado += numero;
            } else {
                resultado = resultado -= numero;
            }
        }
        alert(resultado);
    } else if (calculo == "producto".trim() || calculo == "p".trim()) {
        alert('PRODUCTO SELECCIONADO!')
        resultado = 1;
        let cantidad = parseInt(prompt("Indicar cantidad de números a utilizar:"));
        for (let i = 1; i <= cantidad; i++) {
            numero = parseInt(prompt(`número ${i}:`));
            resultado = resultado *= numero;
        }
        alert(resultado);
    } else {
        alert('DIVISION SELECCIONADA!')
        numero = 0;
        resultado = 0;
        let cantidad = parseInt(prompt("Indicar cantidad de números a utilizar:"));
        for (let i = 1; i <= cantidad; i++) {
            numero = parseInt(prompt(`número ${i}:`));
            resultado = resultado += numero;
        }
        resultado = resultado / cantidad;
        alert(resultado);
    }
}