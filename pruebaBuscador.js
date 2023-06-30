


const opcionesMenu2 = {
    opcion1: ['Chango Más', 'Coto', 'Carrefour', 'Jumbo'],
    opcion2: ['Supermercados'],
    opcion3: ['Tarjeta de crédito', 'Tarjeta de débito', 'Billetera electrónica'],
  };
  
  function actualizarMenu2() {
    const menu1 = document.getElementById('menu1');
    const menu2 = document.getElementById('menu2');
    const resultados = document.getElementById('resultados');
    const busqueda = menu1.value;
  
    menu2.innerHTML = '<option value="">Seleccione una opción</option>';

    resultados.innerHTML = '';
  
    if (busqueda) {
      opcionesMenu2[busqueda].forEach((opcion) => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = opcion;
        nuevaOpcion.textContent = opcion;
        menu2.appendChild(nuevaOpcion);
      });
    }
  }
  
  function mostrarResultados() {
    const menu2 = document.getElementById('menu2');
    const resultados = document.getElementById('resultados');
    const busqueda = menu2.value;
  
    resultados.innerHTML = ''; // Limpiar los resultados anteriores
  
    if (busqueda) {
      resultados.innerHTML = `Resultado seleccionado: ${busqueda}`;
    }
  }

  