module.exports = (req, res) => {
    const mensaje = process.env.MENSAJE_BIENVENIDA;
    res.status(200).json({ mensaje: `${mensaje}` });
};
