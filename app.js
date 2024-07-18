var presupuesto = 0;

Swal.fire({
    title: "INGRESA LA CANTIDAD CON LA QUE DESEAS INICIAR",
    input: "text",
    inputAttributes: {
        autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Siguiente",
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
    if (result.isConfirmed) {
        presupuesto = parseFloat(result.value);
        document.getElementById("cantidad1").innerHTML = `$ ${presupuesto}.00 MXN`;
    }
});


document.getElementById('ac1').addEventListener('input', function() {
    const sliderValue = document.getElementById('ac1').value;
    document.getElementById('slidecan').innerText = `$ ${sliderValue}.00 MXN`;
});

function agregarAccion(accion, cantidad) {
    const tbody = document.querySelector("#actions-table tbody");
    const row = document.createElement("tr");
    const accionCell = document.createElement("td");
    const cantidadCell = document.createElement("td");

    accionCell.innerText = accion;
    cantidadCell.innerText = `$ ${cantidad}.00 MXN`;

    row.appendChild(accionCell);
    row.appendChild(cantidadCell);
    tbody.appendChild(row);
}

function sumar() {
    const sliderValue = parseInt(document.getElementById('ac1').value);
    presupuesto += sliderValue;
    document.getElementById("cantidad1").innerHTML = `$ ${presupuesto}.00 MXN`;
    agregarAccion('Suma', sliderValue);
}

function restar() {
    const sliderValue = parseInt(document.getElementById('ac1').value);
    presupuesto -= sliderValue;
    document.getElementById("cantidad1").innerHTML = `$ ${presupuesto}.00 MXN`;
    agregarAccion('Resta', sliderValue);
}

