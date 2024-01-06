//Se llaman los id para crear la funcionalidad
//Funcionalidad para cambiar tema de la web

let body = document.querySelector("body")
export class llamar{
    onChange(event){
        let select2 = document.getElementById("cambiarTema").value
        let body = document.querySelector("body")
        //condicional para cambiar de color el fondo
        if(select2 == 'Oscuro'){
            body.style.backgroundColor = "black";
            localStorage.setItem('color', 'Oscuro');
        } else if (select2 == 'Rosa'){
            body.style.backgroundColor = "lightpink";
            localStorage.setItem('color', 'lightpink');
        } else if(select2 == 'Claro'){
            body.style.backgroundColor = "lightyellow";
            localStorage.setItem('color', 'lightyellow');
        }
    
        event.preventDefault();
    }



/*     prueba(){
        console.log("prueba")
    } */
}

//guardar el color
try{
    const color = localStorage.getItem('color');
    console.log(color)

    if(color === 'Oscuro'){
        body.style.backgroundColor = "black";
        console.log("a");
    }
    else if(color === 'Rosa'){
        body.style.backgroundColor = "lightpink";
        console.log("b");
    } 
    else if(color === 'Claro'){
        body.style.backgroundColor = "lightyellow";
        console.log("c");
    };
}catch{}


//FUncionalidad para cambiar idioma de la web