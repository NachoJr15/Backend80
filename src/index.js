const express = require('express');
const ConectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//Enlazar conexion con la base de datos
ConectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/cliente')); //asignando la ruta por postman, insomnia, thunder
app.use('/api/productos', require('../routes/producto'));//asignando la ruta por postman, insomnia, thunder

app.get('/', (req, res) =>{
    res.send("Bienvenidos estamos desde el navegador");
})
app.listen(port, () => console.log('Estamos conectados al servidor con el puerto', port));
