const listaFavoritos = JSON.parse(localStorage.getItem('listaFavoritos')) || [];
console.log(listaFavoritos)

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
           
        </div>
      </div>
    `;
  }
  
    let botonesCorazon = document.getElementsByClassName('botonCorazon');
      
    for(const botonCorazon of botonesCorazon) {
      botonCorazon.onclick = () =>{
        
        if(botonCorazon.innerHTML == '<i class="bi bi-heart"></i>'){
        alert('El descuento '+botonCorazon.id+' se está agregando a tu lista de favoritos');
        const favorito = descuentos.find((descuento) => botonCorazon.id == descuento.id);
        botonCorazon.innerHTML = '<i class="bi bi-heart-fill"></i>';
        
        listaFavoritos.push(favorito);
        localStorage.setItem('listaFavoritos',JSON.stringify(listaFavoritos));
        console.log("Agregar"+listaFavoritos);

        actualizarListaFavoritos()

      }else{
        alert('Este descuento será quitado de tu lista de Favoritos');
        botonCorazon.innerHTML = '<i class="bi bi-heart"></i>';
        const noFavorito = descuentos.find((descuento) => botonCorazon.id == descuento.id);
        const listaNueva = listaFavoritos.filter((seleccionado) => seleccionado != noFavorito);
        
        localStorage.setItem('listaFavoritos',JSON.stringify(listaNueva));
        console.log("Remover"+listaFavoritos);

        actualizarListaFavoritos();
      }  

      }
  }}
//TODOS LOS DESCUENTOS - Fin

  

//FAVORITOS - Inicio
let btnFavoritos = document.getElementById('btnFavoritos');

  
function actualizarListaFavoritos () {
  
  listaFavoritos.innerHTML='';

  const favoritosStorage = JSON.parse(localStorage.getItem("listaFavoritos"));

//  favoritosStorage.forEach((favorito) => {
  for(const favoritoStorage of favoritosStorage) {  
    tablaLista.innerHTML =`
                          <tr>
                            <th scope="row">${favoritoStorage.id}</th>
                              <td>${favoritoStorage.generador}</td>
                              <td>${favoritoStorage.porcentajeDescuento}%</td>
                              <td>${favoritoStorage.medioPago1}</td>
                              <td><button class='botonBasura'><i class="bi bi-trash"></i></button></td>
                          </tr>  
  `;
  }
}
//FAVORITOS - Fin

renderizarDescuentos(descuentos);