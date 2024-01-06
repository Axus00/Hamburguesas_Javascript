
//Se importan funciones de otro archivo script
import { llamar } from "./app.js";
const otro = new llamar()


//Se crean los elementos de la página web
let body = document.querySelector('body');

//Se agrega el logotipo de KFC 
let logo = document.createElement('img');
logo.style.width = '300px';
logo.style.height = '300px';
logo.style.marginLeft = '100px';
logo.src = '../images/KFC.png';

//Se agrega la imagen al body
body.appendChild(logo);

//div container
let div = document.createElement('div');
div.classList.add('container');
div.style.marginTop = '50px';

//selectores
let selector = document.createElement('div');
selector.classList.add('selectores', 'd-flex', 'flex-direction-row', 'justify-content-around', 'mt-3');
div.appendChild(selector);


//option de cambiarIdioma
let option = document.createElement('option');
option.textContent = 'Seleccionar Idioma';
/* option.setAttribute('disabled', 'select' ); */

//segundo option de cambiarIdioma
let option2 = document.createElement('option');
option2.textContent = 'Inglés';
option2.id = 'idioma1';

//tercer option de cambiarIdioma
let option3 = document.createElement('option');
option3.textContent = 'Español';
option3.id = 'idioma2';



//select
let select = document.createElement('select');
select.classList.add('form-select');
select.id = 'cambiarIdioma';

//se agrega al selector cambiarIdioma
select.appendChild(option);
select.appendChild(option2);
select.appendChild(option3);

//se añade el select cambiarIdioma al div prinicpal
selector.appendChild(select);


//select2
let select2 = document.createElement('select');
select2.classList.add('form-select');
select2.id = 'cambiarTema';


//primer option de cambiarTema
let seleccionarTema = document.createElement('option');
seleccionarTema.textContent = 'Seleccionar Tema';

//segundo option de CambiarTema
let oscuro = document.createElement('option');
oscuro.textContent = 'Oscuro';

//tercer option de CambiarTema
let claro = document.createElement('option');
claro.textContent = 'Claro';

//cuarto option de CambiarTema
let rosa = document.createElement('option');
rosa.textContent = 'Rosa';

//Agregamos los options de cambiarTema
select2.appendChild(seleccionarTema);
select2.appendChild(oscuro);
select2.appendChild(claro);
select2.appendChild(rosa);


//Segrega el segundo select al div selectores
selector.appendChild(select2);




//row
let row = document.createElement('div');
row.classList.add('row');
div.appendChild(row);

//Se define objeto con la información de las cartas
let objetoCartas = [
    {src: './images/hamburguesa-1.webp', precio: '$8.900', nombre: 'BBQ Crunch', descripcion: 'Sandwich BBQ Crunch (1 filete de pollo apanado'},
    {src: './images/hamburguesa-2.webp', precio: '$15.900', nombre: 'Kentucky Sandwich', descripcion: '1 Kentucky hamburguesa / Sandwich (1 Filete de prechuga de pollo apanado, pepinillos...)'},
    {src: './images/hamburguesa-3.webp', precio: '$15.900', nombre: 'Combo BBQ Crunch', descripcion: '1 sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 papa pequeña + 1 gaseosa PET...'},
    {src: './images/hamburguesa-4.webp', precio: '$16.900', nombre: 'Kentucky Coronel Sandwich', descripcion: '1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, ensalada...)' },
    {src: './images/hamburguesa-5.webp', precio: '$21.900', nombre: 'Combo Kentucky Sandwich', descripcion: '1 Kentucky hamburguesa / Sandwich (1 Filete de prechuga de pollo apanado, pepinillos...)'},
    {src: './images/hamburguesa-6.webp', precio: '$22.900', nombre: 'Combo Kentucky Coronel Sandwich', descripcion: '1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, ensalada...)'},
    {src: './images/hamburguesa-7.webp', precio: '$23.900', nombre: 'Sandwich Crispy BBQ', descripcion: '1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)'},
    {src: './images/hamburguesa-8.webp', precio: '$29.900', nombre: 'Combo Sandwich Crispy BBQ', descripcion: '1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)'},
];

//Ciclo para generar las cartas de manera automática


for(let i = 0; i < 8; i++){
//col-md-3
let division = document.createElement('div');
division.classList.add('col-md-3','mb-3');
row.appendChild(division);

//card
let card = document.createElement('div');
card.classList.add('card', 'h-100', 'mt-3')
division.appendChild(card);


//img
let img = document.createElement('img');
img.src = objetoCartas[i % objetoCartas.length].src;
//Estilo
card.appendChild(img);

//Se crea otra card para la información
let card2 = document.createElement('div');
card2.classList.add('card-body', 'd-flex', 'flex-column');
card.appendChild(card2);

//h2
let precio = document.createElement('h2');
precio.textContent = objetoCartas[i % objetoCartas.length].precio;
card2.appendChild(precio);

//h1
let nombre = document.createElement('h1');
nombre.id = 'nombre';
nombre.textContent = objetoCartas[i % objetoCartas.length].nombre;
card2.appendChild(nombre)

//p
let parrafo = document.createElement('p');
parrafo.id = 'parrafo';
parrafo.textContent = objetoCartas[i % objetoCartas.length].descripcion;
card2.appendChild(parrafo);

//botón
let boton = document.createElement('button');
boton.classList.add('btn', 'btn-danger', 'mt-auto');

//Estilo
boton.style.height = '37px';
boton.style.borderRadius = '5px';
boton.style.marginBottom = '15px';
card2.appendChild(boton);

//Párrafo del botón
let parrafoBoton = document.createElement('p');
parrafoBoton.textContent = 'Comprar';
boton.appendChild(parrafoBoton);
}

body.appendChild(div);
console.log(body);

//Se llama nuevamente los id para darle la funcionalidad a los selectores de la página

let este = document.getElementById("cambiarTema");
este.addEventListener("change", otro.onChange);









