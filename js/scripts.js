// Guardar restaurante en localStorage
function guardarRestaurante() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const direccion = document.getElementById('direccion').value;
    const imagen = document.getElementById('imagen').value;
  
    if (!nombre || !descripcion || !direccion || !imagen) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const nuevoRestaurante = {
      nombre,
      descripcion,
      direccion,
      imagen
    };
  
    let restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];
    restaurantes.push(nuevoRestaurante);
    localStorage.setItem('restaurantes', JSON.stringify(restaurantes));
  
    alert('Restaurante guardado correctamente.');
    document.getElementById('form-restaurante').reset();
  }
  
  
  function buscarRestaurantes() {
    const texto = document.getElementById('busqueda').value.toLowerCase();
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = '';
  
    const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];
  
    const resultados = restaurantes.filter(restaurante =>
      restaurante.nombre.toLowerCase().includes(texto) ||
      restaurante.descripcion.toLowerCase().includes(texto) ||
      restaurante.direccion.toLowerCase().includes(texto)
    );
  
    if (resultados.length === 0) {
      contenedorResultados.innerHTML = '<p>No se encontraron restaurantes.</p>';
      return;
    }
  
    resultados.forEach(rest => {
      const card = document.createElement('div');
      card.className = 'card mb-3';
      card.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${rest.imagen}" class="img-fluid rounded-start" alt="${rest.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${rest.nombre}</h5>
              <p class="card-text"><small class="text-muted">${rest.direccion}</small></p>
              <p class="card-text">${rest.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      contenedorResultados.appendChild(card);
    });
  }
  
  function mostrarTodosLosRestaurantes() {
    const lista = document.getElementById("lista-restaurantes");
    lista.innerHTML = "";
  
    const restaurantes = JSON.parse(localStorage.getItem("restaurantes")) || [];
  
    if (restaurantes.length === 0) {
      lista.innerHTML = "<p class='text-muted'>No hay restaurantes registrados.</p>";
      return;
    }
  
    restaurantes.forEach((restaurante) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
  
      card.innerHTML = `
        <div class="card bg-dark text-success">
          <img src="${restaurante.imagen}" class="card-img-top" alt="${restaurante.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${restaurante.nombre}</h5>
            <p class="card-text"><strong>Dirección:</strong> ${restaurante.direccion}</p>
            <p class="card-text">${restaurante.descripcion}</p>
            
          </div>
        </div>
      `;
  
      lista.appendChild(card);
    });
  }
  
