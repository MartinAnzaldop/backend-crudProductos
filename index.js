const express = require('express');
const conectarDB=require('./config/db')
const cors = require('cors');
const app=express();
  
//conectar a la base de datos
conectarDB()
app.use(cors());
app.use(express.json());
app.use('/api/productos', require('./routes/producto'));
//rutas
//app.get('/',(req, res)=>{
//res.send('Hola Mundo');
//})


app.listen(4000, ()=>{
    console.log('El servidor 4000 esta corriendo')
})

  