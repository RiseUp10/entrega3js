const opcionesMenu2 = {
  generador: ["Chango Más", "Coto", "Carrefour", "Jumbo"],
  categoria: ["Supermercados"],
  facilitador: ["Tarjeta de crédito", "Tarjeta de débito", "Billetera electrónica"],
};

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");

function actualizarMenu2() {
  const busqueda = menu1.value;
  menu2.innerHTML = '<option value="">Seleccione una opción</option>';
  resultados.innerHTML = "";

  if (busqueda) {
    opcionesMenu2[busqueda].forEach((opcion) => {
      const nuevaOpcion = document.createElement("option");
      nuevaOpcion.value = opcion;
      nuevaOpcion.textContent = opcion;
      menu2.appendChild(nuevaOpcion);
    });
  }
}

function mostrarResultados() {
  const menu1 = document.getElementById("menu1");
  const menu2 = document.getElementById("menu2");
  const resultados = document.getElementById("resultados");
  const busqueda2 = menu2.value;

  resultados.innerHTML = ""; // Limpiar los resultados anteriores
  if (busqueda2) {
    let resultadosFiltrados = descuentos.filter((resultado) => resultado[menu1.value] == busqueda2);
    console.log(resultadosFiltrados);
  
    for(const resultado of resultadosFiltrados){
      
      resultados.innerHTML+=`
          <div class="card col-md-3">
              <img class="card-img-top" src=${resultado.img} alt="Descuento ${resultado.id}">
              <div class="card-body text-center">
                  <h4 class="card-title">${resultado.titulo}</h4>
                  <p class="card-text">${resultado.tipoBeneficio} ${resultado.porcentajeDescuento}%</p>
                  <p class="card-text">Guardá este descuento</p>
                  <button id=${resultado.id} class='botonCorazon'><i class="bi bi-heart"></i></button>
                  
              </div>
          </div>
      `;
    }
  }
}

