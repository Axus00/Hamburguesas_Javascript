//Se llaman los id para crear la funcionalidad
//Funcionalidad para cambiar tema de la web

let body = document.querySelector("body")
export class llamar{
    onChange(event){
        let select2 = document.getElementById("cambiarTema").value
        let body = document.querySelector("body")
        //condicional para cambiar de color el fondo
        if(select2 == 'Oscuro'){
            body.classList.add('theme-dark');
            body.classList.remove('theme-light');
            body.classList.remove('theme-pink');
            body.style.backgroundColor = "black";
            localStorage.setItem('colorEscogido', 'Oscuro');
        } else if (select2 == 'Rosa'){
            body.classList.add('theme-pink');
            body.classList.remove('theme-dark');
            body.classList.remove('theme-light');
            body.style.backgroundColor = "lightpink";
            localStorage.setItem('colorEscogido', 'Rosa');
        } else if(select2 == 'Claro'){
            body.classList.add('theme-light');
            body.classList.add('theme-pink');
            body.classList.add('theme-dark');
            body.style.backgroundColor = "lightyellow";
            localStorage.setItem('colorEscogido', 'Claro');
        }
    
        event.preventDefault();
    }



/*     prueba(){
        console.log("prueba")
    } */
}

//guardar el color
try{
    const color = localStorage.getItem('colorEscogido');
    console.log(color)

    if(color === 'Oscuro'){
        body.classList.add('theme-dark');
        body.classList.remove('theme-light');
        body.classList.remove('theme-pink');
        body.style.backgroundColor = "black";
        console.log("a");
    }
    else if(color === 'Rosa'){
        body.classList.add('theme-pink');
        body.classList.remove('theme-dark');
        body.classList.remove('theme-light');
        body.style.backgroundColor = "lightpink";
        console.log("b");
    } 
    else if(color === 'Claro'){
        body.classList.add('theme-light');
        body.classList.add('theme-pink');
        body.classList.add('theme-dark');
        body.style.backgroundColor = "lightyellow";
        console.log("c");
    };
}catch{}


//FUncionalidad para cambiar idioma de la web
//Objeto para el cambio de idioma



