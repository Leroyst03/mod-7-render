import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  edad: Number
});

export default mongoose.model('Usuario', UsuarioSchema);
