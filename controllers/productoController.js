const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
  try {
    let producto;
    //Creamos producto
    producto = new Producto(req.body);
    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al guardar");
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar los productos");
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const { producto, categoria, modelo, precio } = req.body;
    let productos1 = await Producto.findById(req.params.id);

    if (!productos1) {
      res.status(404).json({ msg: "producto no existe" });
    }
    productos1.producto = producto;
    productos1.categoria = categoria;
    productos1.modelo = modelo;
    productos1.precio = precio;
    console.log(productos1);

    productos1 = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      productos1,
      { new: true }
    );
    res.json(productos1);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al modificar el producto");
  }
};

exports.obtenerIdProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({ msg: "producto no existe" });
    }

    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener el id del producto");
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({ msg: "Producto no existe" });
    }

    await Producto.findByIdAndRemove({_id:req.params.id});
    res.status(404).json({ msg: "Producto eliminado con exito" });
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el producto");
  }
};
