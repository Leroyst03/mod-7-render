import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';;

dotenv.config();

export const autenticarUsuario = async(req, res, next) =>{
    const cabecera = req.headers['authorization'];
    const token = cabecera && cabecera.split(' ')[1];

    if(token == null){
        return res.status(401).send({message: "Token no proporcinado"});
    }

    jwt.verify(token, process.env.FIRMA, (err, user) =>{
        if(err){
            return res.status(401).send({message: "Error al verificar el token"});
        }

        req.username = user;
        next();
    });
};
export default autenticarUsuario;