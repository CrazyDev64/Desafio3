let precio = 400000;

// Mostrar precio inicial
document.querySelector(".precio-inicial").innerHTML = precio;

// Inicializar cantidad y total
document.querySelector(".cantidad").innerHTML = 0;
document.querySelector(".valor-total").innerHTML = 0;

// Funciones para los botones
function incrementar() {
    let cantidadElem = document.querySelector(".cantidad");
    let cantidad = Number(cantidadElem.innerHTML) + 1;
    cantidadElem.innerHTML = cantidad;
    document.querySelector(".valor-total").innerHTML = cantidad * precio;
}

function decrementar() {
    let cantidadElem = document.querySelector(".cantidad");
    let cantidad = Number(cantidadElem.innerHTML);
    if (cantidad > 0) {
        cantidad = cantidad - 1;
        cantidadElem.innerHTML = cantidad;
        document.querySelector(".valor-total").innerHTML = cantidad * precio;
    }
}