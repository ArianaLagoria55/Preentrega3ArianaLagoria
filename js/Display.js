class Display {
    constructor(DisplayValorAnterior, DisplayValorActual) {
        this.DisplayValorActual = displayValorActual;
        this.DisplayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora ();
        this.valorActual = '';
        this.valorAnterior = ''  ; 
    }

    agregarNumero(numero) {
        this.valorActual = numero;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}
 