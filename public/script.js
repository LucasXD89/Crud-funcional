const API = 'https://crud-backend-h92w.onrender.com/productos';

// Cargar productos
function cargarProductos() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        const tabla = document.getElementById('tabla');
        tabla.innerHTML = ''; // 👈 limpia la tabla

        data.forEach(p => {
            tabla.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.precio}</td>
                <td>${p.stock}</td>
                <td>
                    <button onclick='editar(${JSON.stringify(p)})'>✏️</button>
                    <button onclick="eliminar(${p.id})">❌</button>
                </td>
            </tr>
            `;
        });
    });
}

// Editar
function editar(producto) {
    document.getElementById('id').value = producto.id;
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('stock').value = producto.stock;
}

// Limpiar formulario
function limpiarFormulario() {
    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('stock').value = '';
}

// GUARDAR (crear/editar)
function guardarProducto() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;

    const data = { nombre, precio, stock };

    if (id) {
        fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            limpiarFormulario();
            cargarProductos();
        });
    } else {
        fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            limpiarFormulario();
            cargarProductos();
        });
    }
}

// Eliminar
function eliminar(id) {
    if(confirm('¿Estás seguro de eliminar este producto?')) {
        fetch(`${API}/${id}`, { method: 'DELETE' })
        .then(() => cargarProductos());
    }
}

// Cargar productos al inicio
cargarProductos();