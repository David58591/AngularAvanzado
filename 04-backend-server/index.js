const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

// Crear el servidor express

const app = express();
//Crear rutas

//Configurar Cors
app.use(cors());

//Base de datos
dbConnection();
console.log(process.env);

app.get('/', (req,res) => {
   
    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    })
});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});