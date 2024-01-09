
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
nombre.id = 'nombre' + [i];
nombre.textContent = objetoCartas[i % objetoCartas.length].nombre;
card2.appendChild(nombre)

//p
let parrafo = document.createElement('p');
parrafo.id = 'parrafo' + [i];
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
parrafoBoton.id = 'parrafoBoton';
parrafoBoton.textContent = 'Comprar';
boton.appendChild(parrafoBoton);
}

body.appendChild(div);
console.log(body);

//Se llama nuevamente los id para darle la funcionalidad a los selectores de la página

let este = document.getElementById("cambiarTema");
este.addEventListener("change", otro.onChange);



// Agregar el evento onchange al elemento input
let este2 = document.getElementById("cambiarIdioma");
cambiarIdioma.onChange = function (){
    idioma();
};




function idioma(event){
    console.log("hola");
    // Event listener para cambiar el idioma cuando se selecciona otro idioma
    //Se obtienen los datos para las traducciones
    //parrafos
    let traduccion1 = document.getElementById('parrafo0');
    let traduccion2 = document.getElementById('parrafo1');
    let traduccion3 = document.getElementById('parrafo2');
    let traduccion4 = document.getElementById('parrafo3');
    let traduccion5 = document.getElementById('parrafo4');
    let traduccion6 = document.getElementById('parrafo5');
    let traduccion7 = document.getElementById('parrafo6');
    let traduccion8 = document.getElementById('parrafo7');

    let traducciones = {
        traduccionEspañol: {
             en: {
                  parrafo0: 'BBQ Crunch Sandwich (1 breaded chicken fillet)',
                  parrafo1: '1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)',
                  parrafo2: '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda...',
                  parrafo3: '1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)',
                  parrafo4: '1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)',
                  parrafo5: '1 Kentucky Coronelhamburger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)',
                  parrafo6: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)',
                  parrafo7: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)'
             },
             es: {
                  parrafo0:'Sandwich BBQ Crunch (1 filete de pollo apanado)',
                  parrafo1:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)',
                  parrafo2:'1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET...',
                  parrafo3:'1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)',
                  parrafo4:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)',
                  parrafo5:'1 Kentucky Coronelhamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)',
                  parrafo6:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)',
                  parrafo7:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)'
             },
        },
    };



    if(select.value === 'Español'){
    traduccion1.innerText = traducciones.traduccionEspañol.es.parrafo0;
    traduccion2.innerText = traducciones.traduccionEspañol.es.parrafo1;
    traduccion3.innerText = traducciones.traduccionEspañol.es.parrafo2;
    traduccion4.innerText = traducciones.traduccionEspañol.es.parrafo3;
    traduccion5.innerText = traducciones.traduccionEspañol.es.parrafo4;
    traduccion6.innerText = traducciones.traduccionEspañol.es.parrafo5;
    traduccion7.innerText = traducciones.traduccionEspañol.es.parrafo6;
    traduccion8.innerText = traducciones.traduccionEspañol.es.parrafo7;
    localStorage.setItem('opcionEscogida', 'Español');
    } else if (select.value === 'Ingles'){
    traduccion1.innerText = traducciones.traduccionEspañol.en.parrafo0;
    traduccion2.innerText = traducciones.traduccionEspañol.en.parrafo1;
    traduccion3.innerText = traducciones.traduccionEspañol.en.parrafo2;
    traduccion4.innerText = traducciones.traduccionEspañol.en.parrafo3;
    traduccion5.innerText = traducciones.traduccionEspañol.en.parrafo4;
    traduccion6.innerText = traducciones.traduccionEspañol.en.parrafo5;
    traduccion7.innerText = traducciones.traduccionEspañol.en.parrafo6;
    traduccion8.innerText = traducciones.traduccionEspañol.en.parrafo7;
    localStorage.setItem('opcionEscogida', 'Ingles');
    };


    //almacenar el idioma
    let seleccion = localStorage.getItem('opcionEscogida')
    try{
    if(seleccion === 'Español'){
            traduccion1.innerText = traducciones.traduccionEspañol.es.parrafo0;
            traduccion2.innerText = traducciones.traduccionEspañol.es.parrafo1;
            traduccion3.innerText = traducciones.traduccionEspañol.es.parrafo2;
            traduccion4.innerText = traducciones.traduccionEspañol.es.parrafo3;
            traduccion5.innerText = traducciones.traduccionEspañol.es.parrafo4;
            traduccion6.innerText = traducciones.traduccionEspañol.es.parrafo5;
            traduccion7.innerText = traducciones.traduccionEspañol.es.parrafo6;
            traduccion8.innerText = traducciones.traduccionEspañol.es.parrafo7;
    } else if (seleccion === 'Inglés') {
            traduccion1.innerText = traducciones.traduccionEspañol.en.parrafo0;
            traduccion2.innerText = traducciones.traduccionEspañol.en.parrafo1;
            traduccion3.innerText = traducciones.traduccionEspañol.en.parrafo2;
            traduccion4.innerText = traducciones.traduccionEspañol.en.parrafo3;
            traduccion5.innerText = traducciones.traduccionEspañol.en.parrafo4;
            traduccion6.innerText = traducciones.traduccionEspañol.en.parrafo5;
            traduccion7.innerText = traducciones.traduccionEspañol.en.parrafo6;
            traduccion8.innerText = traducciones.traduccionEspañol.en.parrafo7;
    }
    event.preventDefault();
    }catch{}

};
select.addEventListener('change', este2.onChange);
    








