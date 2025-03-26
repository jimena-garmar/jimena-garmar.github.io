
// Función para realizar la búsqueda y redirigir al usuario
console.log("El archivo JS se ha cargado correctamente.");

function buscarVuelosHoteles() {
    let destino = document.getElementById('destino').value.trim();
    let ida = document.getElementById('fecha-ida').value;
    let vuelta = document.getElementById('fecha-vuelta').value;

    if (destino === "") {
        alert("Por favor, ingrese un destino.");
        return;
    }
    if (!ida) {
        alert("Por favor, seleccione la fecha de ida.");
        return;
    }
    if (!vuelta) {
        alert("Por favor, seleccione la fecha de vuelta.");
        return;
    }

    window.location.href = `vuelos_hoteles.html?destino=${encodeURIComponent(destino)}&ida=${ida}&vuelta=${vuelta}`;
}

// Función para obtener parámetros de la URL
function obtenerParametro(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// Cargar información en la página de resultados
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('destino-titulo')) {
        const destino = obtenerParametro('destino');
        const ida = obtenerParametro('ida');
        const vuelta = obtenerParametro('vuelta');

        document.getElementById('destino-titulo').textContent = destino || "Desconocido";
        document.getElementById('fecha-ida').textContent = ida || "No especificada";
        document.getElementById('fecha-vuelta').textContent = vuelta || "No especificada";

        
        vuelosEjemplo.forEach(vuelo => document.getElementById('vuelos').innerHTML += `<li>${vuelo}</li>`);
        hotelesEjemplo.forEach(hotel => document.getElementById('hoteles').innerHTML += `<li>${hotel}</li>`);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fecha").innerText = "Hoy es " + new Date().toLocaleDateString();
});

document.getElementById("btnArriba").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("btnColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

function actualizarReloj() {
    let ahora = new Date();
    document.getElementById("reloj").innerText = ahora.toLocaleTimeString();
}
setInterval(actualizarReloj, 1000);

