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


// DIrectorio público
app.use(express.static('public'))
// Rutas

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/buscar', require('./routes/busquedas'))
app.use('/api/uploads', require('./routes/uploads'))




app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});