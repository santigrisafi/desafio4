class Vehiculo {
  cantidad_ruedas = 0;
  cantidad_puertas = 0;
  tipo_carroceria = "";
  marca_destino = "";
  modelo = "";
  costo_fabricacion = 0.0;
}

let Vehiculos = [];
Vehiculos = JSON.parse(localStorage.getItem("vehiculos") || []);
let cont = 1;

function cargarVehiculos() {
  let vehiculo = new Vehiculo();
  vehiculo.cantidad_ruedas = parseInt(
    document.querySelector('input[name="cantidadRuedas"]:checked').value
  );
  vehiculo.cantidad_puertas = parseInt(
    document.querySelector('input[name="cantidadPuertas"]:checked').value
  );
  let costoBase = 50000;
  vehiculo.tipo_carroceria = document.getElementById("tipoCarroceria").value;
  vehiculo.marca_destino = document.getElementById("marcaDestino").value;
  vehiculo.modelo = calcModelo(
    vehiculo.cantidad_ruedas,
    vehiculo.tipo_carroceria
  );
  vehiculo.costo_fabricacion = parseFloat(
    calcCostoFabricacion(vehiculo.tipo_carroceria, costoBase)
  );
  if (Vehiculos.length <= 10) {
    Vehiculos.push(vehiculo);
    localStorage.setItem("vehiculos", JSON.stringify(Vehiculos));
  } else {
    Vehiculos.splice(0, 10);
    localStorage.setItem("vehiculos", JSON.stringify(Vehiculos));
  }
}

function visualizarVehiculos() {
  let table = document.getElementById("vehiculosTable");
  for (let i = 0, row; (row = table.rows[i]); i++) {
    for (let j = 0, col; (col = row.cells[j]); j++) {

    }
  }
}

function calcModelo(cantidad_ruedas, tipo_carroceria) {
  let modelo = "";
  switch (parseInt(cantidad_ruedas)) {
    case 2:
      modelo = "Moto";
      break;
    case 4:
      alert(tipo_carroceria);
      if (tipo_carroceria == "Mediana") {
        modelo = "Auto";
      } else {
        modelo = "Camioneta";
      }
      break;
  }
  return modelo;
}

function calcCostoFabricacion(tipo_carroceria, costoBase) {
  let costo_fabricacion = 0.0;
  switch (tipo_carroceria) {
    case "Chica":
      costo_fabricacion = costoBase * 2 + 5000;
      break;
    case "Mediana":
      costo_fabricacion = Math.pow(costoBase, 2) + 85000;
      break;
    case "Grande":
      costo_fabricacion = costoBase + 180000;
      break;
  }
  return costo_fabricacion;
}
