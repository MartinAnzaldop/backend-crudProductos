//Ruras de productos
const express = require('express');
const router=express.Router();
const productoController=require('../controllers/productoController')

//a
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerIdProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports=router;
