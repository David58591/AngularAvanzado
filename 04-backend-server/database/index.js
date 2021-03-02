const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear el servidor express

const app = express();
//Crear rutas

//Configurar Cors
app.use(cors());

//Lectura y parseo del body

app.use(express.json())
//Base de datos
dbConnection().catch(error => (console.log(error)));
console.log(process.env);

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));




app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});