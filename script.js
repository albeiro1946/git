function mensaje(){
    let resultado = document.getElementById("p");  
    let d = new Date();   
    resultado.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function pagar(){
    event.preventDefault();
    setInterval (mensaje,1000);  
}