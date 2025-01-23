const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/useRoutes');
const app = express();
const PORT = 4000;

//USANDO CORS PARA PODER ACCEDER A PERMISOS 
app.use(cors());

//USO DE JSON
app.use(express.json()); // Middleware para manejar JSON
app.use(express.urlencoded({ extended: true })); // Middleware para formularios codificados

//RUTAS
app.use('api/users', userRoutes)


// INICIAR SERVIDOR 
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});

