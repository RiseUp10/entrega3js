const listaFavoritos = [];

//BUSCADOR PRINCIPAL - Inicio 
const opcionesMenu2 = {
  generador: ["Chango Más", "Coto", "Carrefour", "Jumbo"],
  categoria: ["Supermercados"],
  facilitador: ["Tarjeta de crédito", "Tarjeta de débito", "Billetera electrónica"],
};

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");

menu1.onchange = () => {
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

menu2.addEventListener('change',() => {
  const menu1 = document.getElementById("menu1");
  const menu2 = document.getElementById("menu2");
  const resultados = document.getElementById("resultados");
  const busqueda2 = menu2.value;

  resultados.innerHTML = "<h3 class='text-center'>Esta es tu búsqueda</h3>";
    let resultadosFiltrados = descuentos.filter((resultado) => resultado[menu1.value] == busqueda2);
    
    sessionStorage.setItem('Lista de resultados',JSON.stringify(resultadosFiltrados));
    
    for(const resultado of resultadosFiltrados){
      
      resultados.innerHTML+=`
        <div class="card col-md-3">
          <img class="card-img-top" src=${resultado.img} alt="Descuento ${resultado.id}">
          <div class="card-body text-center">
            <h4 class="card-title">${resultado.titulo}</h4>
            <p class="card-text">${resultado.tipoBeneficio} ${resultado.porcentajeDescuento}%</p>
            <p class="card-text">Medio de pago: ${resultado.facilitador}</p>
          </div>
        </div>
      `;
    }
})
//BUSCADOR PRINCIPAL - Fin

//TODOS LOS DESCUENTOS - Inicio
let mejoresDescuentos = document.getElementById('mejoresDescuentos');
let tablaLista = document.getElementById('tablaLista');

function renderizarDescuentos(listaDescuentos){
  mejoresDescuentos.innerHTML='';
  
  for(const descuento of listaDescuentos){
    mejoresDescuentos.innerHTML+=`
      <div class="card col-md-2">
        <img class="card-img-top" src=${descuento.img} alt="Descuento ${descuento.id}">
        <div class="card-body text-center">
          <h4 class="card-title">${descuento.titulo}</h4>
          <p class="card-text">${descuento.tipoBeneficio} ${descuento.porcentajeDescuento}%</p>
          <p class="card-text">Guardá este descuento</p>
          <button id=${descuento.id} class='botonCorazon'><i class="bi bi-heart"></i></button>
          <button id=${descuento.id} class='botonBasura'><i class="bi bi-trash3"></i></button>  
        </div>
      </div>
    `;

    let botonesCorazon = document.getElementsByClassName('botonCorazon');
      
    for(const botonCorazon of botonesCorazon) {
      botonCorazon.onclick = () =>{
        
        if(botonCorazon.innerHTML == '<i class="bi bi-heart"></i>'){
        alert('El descuento '+botonCorazon.id+' se está agregando a tu lista de favoritos');
        botonCorazon.innerHTML = '<i class="bi bi-heart-fill">';
        const armadoLista = descuentos.find((descuento) => botonCorazon.id == descuento.id);
        
        agregarListaFavoritos(armadoLista);
      }else{
        alert('Este descuento será quitado de tu lista de Favoritos');
        botonCorazon.innerHTML = '<i class="bi bi-heart"></i>'
        const desarmadoLista = descuentos.find((descuento) => botonCorazon.id == descuento.id);
        const indexDesarmado = indexOf(desarmadoLista);
        console.log(indexDesarmado);

        removerListaFavoritos(desarmadoLista);
      }  

      }
  }}}
//TODOS LOS DESCUENTOS - Fin

  

//FAVORITOS - Inicio
let btnFavoritos = document.getElementById('btnFavoritos');

  
function agregarListaFavoritos (favorito) {
  listaFavoritos.push(favorito);
  //Almacena# de la lista de favoritos
  localStorage.setItem("listaFavoritos",JSON.stringify(listaFavoritos));

  tablaLista.innerHTML +=`
                          <tr>
                            <th scope="row">${favorito.id}</th>
                              <td>${favorito.generador}</td>
                              <td>${favorito.porcentajeDescuento}%</td>
                              <td>${favorito.medioPago1}</td>
                          </tr>
  `;
}

function removerListaFavoritos (noFavorito) {
  listaFavoritos.pop(noFavorito);
  console.log(listaFavoritos);

  for(const lista of listaFavoritos)  {
    
    tablaLista.innerHTML =`
                          <tr>
                            <th scope="row">${lista.id}</th>
                              <td>${lista.generador}</td>
                              <td>${lista.porcentajeDescuento}%</td>
                              <td>${lista.medioPago1}</td>
                          </tr>
    `;
  }
}

/* console.log('Verificacion'+ (localStorage.getItem('Lista de Favoritos')))
console.log(listaFavoritos) */
//FAVORITOS - Fin

renderizarDescuentos(descuentos);

//NEWSLETTER - Inicio
let nombre = document.getElementById('name');
  nombre.addEventListener('change',()=>{
    nombre.value.length < 5 && alert('Ingresaste mal tu nombre. Para seguir adelante debés ingresar tu nombre completo')
  })

let email = document.getElementById('email');
  email.onchange = () => {
    !email.value.includes('@') && alert('No olvides el @, panchín.')
}

let submit = document.getElementById('submit');
submit.onclick = () =>{
  if((nombre.value == '') || (email.value == '') || (nombre.value.length > 5) && (email.value.includes('@'))){
  alert('No se puedo enviar el pedido de suscripción por los siguientes motivos:\n- Nombre no ingresado,\n- Correo no ingresado,\n- Ningún campo ingresado,\n- Algún campo no ingresado correctamente.')
  }
}
//Pensar integrar un preventDefault.
//NEWSLETTER - Fin