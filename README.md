📦 Sistema de Gestión de Inventario
🚀 Descripción

Aplicación web que permite gestionar productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
El sistema está desarrollado con Node.js, Express y SQLite, y cuenta con una interfaz web que consume la API mediante JavaScript.

🧠 Funcionalidades
➕ Registrar productos
📋 Listar productos
✏️ Editar productos
❌ Eliminar productos
⚙️ Tecnologías utilizadas
Backend: Node.js + Express
Base de datos: SQLite
Frontend: HTML, CSS, JavaScript (Fetch API)
🔗 Endpoints de la API
| Método | Endpoint | Descripción |
|-------|---------|------------|
| GET | /productos | Obtener todos los productos |
| GET | /productos/:id | Obtener un producto por ID |
| POST | /productos | Crear un nuevo producto |
| PUT | /productos/:id | Actualizar un producto |
| DELETE | /productos/:id | Eliminar un producto |
📁 Estructura del proyecto
/proyecto
 ├── index.js        # Servidor y API
 ├── colegio.db      # Base de datos (no subir a GitHub)
 └── /public         # Frontend
      ├── index.html
      ├── styles.css
      └── script.js
▶️ Ejecución del proyecto
Instalar dependencias:
npm install
Ejecutar el servidor:
node index.js
Abrir en el navegador:
http://localhost:3000
👥 Trabajo en equipo
Backend (API REST): Lucas
Frontend (HTML/CSS): Yamile
Consumo API (JavaScript): Jorge
🔥 GUÍA: CÓMO HACER UN PULL REQUEST (PASO A PASO)

Cuando todos los integrantes hayan terminado sus partes, se debe unificar el proyecto en la rama principal (main).

🧱 1. Subir tu rama (si aún no lo hiciste)
git push -u origin nombre-de-tu-rama

Ejemplo:

git push -u origin lucas-backend
🌐 2. Ir al repositorio en GitHub
Entrar al repositorio
Aparecerá un botón: "Compare & pull request"
🔍 3. Crear el Pull Request
Base: main
Compare: tu rama (ej: lucas-backend)
Añadir título:
Integración backend CRUD completo
Añadir descripción:
Se implementa API REST con operaciones CRUD usando Node.js y SQLite.
Incluye integración inicial con frontend.
👀 4. Revisar cambios
Verifica que:
No falten archivos
No haya errores
No se suban archivos innecesarios (node_modules, .db)
🤝 5. Hacer Merge
Click en "Create Pull Request"
Luego "Merge pull request"
⚠️ 6. Importante
No hacer merge si el proyecto está incompleto
Revisar antes de unir cambios
Cada integrante debe trabajar en su propia rama
🎯 Estado del proyecto

✔ Backend funcional
✔ CRUD completo
✔ Integración inicial frontend
🔄 Mejoras visuales en proceso

👨‍💻 Autor

Lucas Danilo Santos Arviedo
