
fetch('catalogo_productos.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('catalogo');
    data.forEach(producto => {
      const div = document.createElement('div');
      div.className = 'producto';
      div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <strong>Precio: USD ${producto.precio}</strong>
      `;
      contenedor.appendChild(div);
    });
  });
