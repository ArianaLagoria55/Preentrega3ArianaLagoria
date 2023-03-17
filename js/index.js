const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

//Funcion para hacer funcionar los botones "numero"
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
//Funcion para hacer funcionar los botones "operador"
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});