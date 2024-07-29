let titulo = document.querySelector('h1');
titulo.innerHTML='Hora del desafio';

function click(){
    alert(`El botón fue clicado`);
}

let ciudad = 'ciudad';
function ciudadBrasil(){
    ciudad=prompt(alert(`Escribe una ciudad de Brasil`));
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function love(){
    alert(`Yo amo JS`);
}
let numero1=0;
let numero2=0;
let sumaNumeros =0;
function suma(){
numero1 = parseInt(prompt(`Dame el primer numero`));
numero2 = parseInt(prompt(`Dame el segundo numero`));
sumaNumeros = numero1+numero2;
alert(`El resultao de la suma es ${sumaNumeros}`);


}