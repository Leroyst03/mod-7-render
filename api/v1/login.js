import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
import Usuario from './Usuario.js';

router.post('/login', async (req, res) => {
    const {correo} = req.body;
    try {
        if(!correo) {
          return res.status(400).json({mensaje: "Correo no encontrado"});
        }

        const user = await Usuario.findOne({ correo });

        if(!user) {
            return res.status(404).json({mensaje: "Usuario no encontrado"});
        }

        const token = jwt.sign({nombre: user.nombre}, process.env.FIRMA, {expiresIn: '30min'});

        res.status(200).json({
            info: "Toda la informacion del usuario en el token",
            token: token
        });
    }
    catch(err) {
       console.error("Error en /login:", err); 
        res.status(500).json({
        error: "Error al intentar loggear al usuario",
        detalle: err.message,     
        stack: err.stack 
        });
    } 
    
});
export default router;