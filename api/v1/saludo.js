import express from 'express';
const router = express.Router();

router.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;

    if(nombre) {
        res.status(200).json({mensaje: `Hola ${nombre}`});
    }

    else {
        res.status(400).json({mensaje: "No se proporciono ningun nombre"});
    }

});
export default router;