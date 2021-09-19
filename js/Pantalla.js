class Pantalla {
    constructor(pantallaValorPasado, pantallaValorPresente){
        this.pantallaValorPresente = pantallaValorPresente;
        this.pantallaValorPasado = pantallaValorPasado;
        this.calculador = new Calculadora();
        this.valorPresente = '';
        this.valorPasado = '';
        this.signos ={
            suma: '+',
            resta: '-',
            multiplicacion: 'x',
            division: '/'
        }
        this.tipoOperacion = undefined;
    }

    agregarNumero(numero){
        this.valorPresente = this.valorPresente.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.pantallaValorPresente.textContent = this.valorPresente;
        this.pantallaValorPasado.textContent = `${this.valorPasado} ${this.signos[this.tipoOperacion] || ''} `;
    }

    borrar(){
        this.valorPresente = this.valorPresente.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrainador(){
        this.valorPresente = '';
        this.valorPasado = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    calcular(){
        const valorPasado = parseFloat(this.valorPasado);
        const valorPresente = parseFloat(this.valorPresente)
        if( isNaN(valorPresente) || isNaN(valorPasado) ) return
        this.valorPresente = this.calculador[this.tipoOperacion](valorPasado, valorPresente);       
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorPasado = this.valorPresente || this.valorPasado;
        this.valorPresente = '';
        this.imprimirValores();

    }
}
