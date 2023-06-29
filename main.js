/*Para Lista de Resultados
const/let arrayPadre = [];

for (const resultado of resultados) {
    let li = document.createElement("li");
    li.innerHTML = resultado;
    arrayPadre.appendChild(li);
}

sino Plantillas Literales
    let li = document.createElement("li");
    resultado.innerHTML = `
                <h2> titulo.array <h2>;
                <p> Tipo de beneficio: ${tipoDeBeneficio} </p>;
                <p> Porcentaje de descuento: ${porcentaje} </p>;

    `
    document.body.appendChild(resultado);
*/



  /* if(botonPrincipal.value === 'Por Medio de Pago') {
    console.log('caca1');
  } else if(botonPrincipal.value === 'Por Categoría') {
    console.log('caca2');
  }else{
      console.log('caca3')
  }
} */

/* let buscarMedioPago = document.getElementById('buscarMedioPago');
let buscarCategoria = document.getElementById('buscarCategoria');
let buscarTienda = document.getElementById('buscarTienda'); */

/* buscarMedioPago.onclick = () => {console.log("Prueba")}
buscarCategoria.onclick = () => {console.log("Prueba2")}
buscarTienda.onclick = () => {console.log("Prueba3")} */

/* function respuestaClick() {
  if(botonPrincipal.value === 'Por Medio de Pago') {
    console.log('caca1');
  } else if(botonPrincipal.value === 'Por Categoría') {
    console.log('caca2');
  }else{
      console.log('caca3')
  }
} */
/* let menuPrincipal = document.getElementById("menuPrincipal");
let menuSecundario = document.getElementById("menuSecundario");
let tipoBusqueda = menuPrincipal.value;

menuPrincipal.onclick = () => {  
  
  //menuSecundario.innerHTML += "";

  if(tipoBusqueda == 'Por medio de pago'){
    console.log('caca1');
  }else if(tipoBusqueda == 'Por categoría'){
    console.log('caca2');
  }else if(tipoBusqueda == 'Por tienda'){
    console.log('caca3')
  }
} */

let mejoresDescuentos = document.getElementById('mejoresDescuentos');
let tablaLista = document.getElementById('tablaLista');

const listaFavoritos = [];



//Mostrar los descuentos en formato de cards.
function renderizarDescuentos(listaDescuentos){
    //vaciamos en contenedor para evitar duplicados
    mejoresDescuentos.innerHTML='';
    //cargamos las cartas de los productos solicitados
    for(const descuento of listaDescuentos){
      
        mejoresDescuentos.innerHTML+=`
            <div class="card col-md-2">
                <img class="card-img-top" src=${descuento.img} alt="Descuento ${descuento.id}">
                <div class="card-body text-center">
                    <h4 class="card-title">${descuento.titulo}</h4>
                    <p class="card-text">${descuento.tipoBeneficio} ${descuento.porcentajeDescuento}%</p>
                    <p class="card-text">Guardá este descuento</p>
                    <button id=${descuento.id} class='botonCorazon'><i class="bi bi-heart"></i></button>
                    
                </div>
            </div>
        `;
    }
    
  let botonesCorazon = document.getElementsByClassName('botonCorazon');
  for(const botonCorazon of botonesCorazon) {
    botonCorazon.onclick = () =>{
      
      alert('El descuento '+botonCorazon.id+' se está agregando a tu lista de favoritos');
      botonCorazon.innerHTML = '<i class="bi bi-heart-fill">';
      const armadoLista = descuentos.find((descuento) => botonCorazon.id == descuento.id);
      
    agregarListaFavoritos(armadoLista);
  }  

    botonCorazon.onmouseover = () => {
      botonCorazon.innerHTML = '<i class="bi bi-heart-fill">';
    }

    botonCorazon.addEventListener('mouseout',()=>{
      botonCorazon.innerHTML = '<i class="bi bi-heart">';
    })
  }
}
    
function agregarListaFavoritos (favorito) {
  listaFavoritos.push(favorito);
  console.table(listaFavoritos);
  tablaLista.innerHTML +=`
                          <tr>
                            <th scope="row">${favorito.id}</th>
                              <td>${favorito.generador}</td>
                              <td>${favorito.porcentajeDescuento}%</td>
                              <td>${favorito.medioPago1}</td>
                          </tr>
  `;
}

renderizarDescuentos(descuentos);

//Newsletter
let nombre = document.getElementById('name');
  nombre.addEventListener('change',()=>{
    nombre.value.length < 5 && alert('Ingresaste mal tu nombre. Para seguir adelante debés ingresar tu nombre completo')
  })

let email = document.getElementById('email');
  email.onchange = () => {
    !email.value.includes('@') && alert('No olvides el @, panchín.')
}

//Pensar integrar un preventDefault.
let submit = document.getElementById('submit');
submit.onclick = () =>{
  if((nombre.value == '') || (email.value == '') || (nombre.value.length > 5) && (email.value.includes('@'))){
  alert('No se puedo enviar el pedido de suscripción por los siguientes motivos:\nNombre no ingresado.')
  }}