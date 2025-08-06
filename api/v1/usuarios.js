import express from 'express';
const router = express.Router();
import Usuario from './Usuario.js';
import checkToken from './checkToken.js';

router.get('/usuarios', checkToken, async (req, res) => { 
    try {
        const usuarios = await Usuario.find();
        res.json({
            mensaje: "Usuarios obtenidos correctamente",
            usuarioLogeado: req.username.nombre,
            usuariosObtenidos: usuarios
        });
    }
    catch(err) {
        console.error("Error en /usuarios:", err); 
        res.status(500).json({
        error: "Error al intentar loggear al usuario",
        detalle: err.message,     
        stack: err.stack 
        });
    }
})
export default router;