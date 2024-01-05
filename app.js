//Se llaman los id para crear la funcionalidad
export class llamar{
    onChange(event){
        let select2 = document.getElementById("cambiarTema").value
        let body = document.querySelector("body")
        //condicional para cambiar de color el fondo
        if(select2 == 'Oscuro'){
            body.style.backgroundColor = "#3333";
            localStorage.setItem('color', 'Oscuro');
        } else if (select2 == 'Rosa'){
            body.style.backgroundColor = "lightpink";
            localStorage.setItem('color', 'lightpink');
        } else if(select2 == 'Claro'){
            body.style.backgroundColor = "lightgray";
            localStorage.setItem('color', 'lightgray');
        }
    
        event.preventDefault();
    }

    prueba(){
        console.log("prueba")
    }
}