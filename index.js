const express = require('express'); //sintaxis de importacion en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database');
const cors = require('cors');


//Crear el servidor express
const app = express();

//Configurar cors
app.use(cors());

//Estableciendo conexion a la base de datos
dbConection();
//console.log(process.env);

//Rutas de la API Proyectos
app.get('/', (req, res)=>{//req hago peticion, res recibo mensaje
    res.json({
        ok:true,
        msg:'Bienvenidos a NodeJS'
    });
});
//codigo para desplegar el servidor
app.listen(process.env.PORT, ()=>{
    console.log('Servidor desplegado en el puerto:' + process.env.PORT)
})
