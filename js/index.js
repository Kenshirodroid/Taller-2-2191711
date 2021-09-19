const pantallaValorPasado = document.getElementById('valor-pasado');
const pantallaValorPresente = document.getElementById('valor-presente');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


const pantalla = new Pantalla(pantallaValorPasado, pantallaValorPresente);

botonesNumeros.forEach(boton => {
     boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
}
);


botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});

