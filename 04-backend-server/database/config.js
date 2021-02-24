const mongoose = require("mongoose");
require('dotenv').config();


const dbConnection = async () => {
 
 try {
     console.log(process.env);
    await mongoose.connect(`${process.env.DB_CNN}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('DB Online');
 } catch (error) {
     console.log(error);
     throw new Error('Error al conectar con la base de datos ');
 }  
};

module.exports = {
    dbConnection
};
