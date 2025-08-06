import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import usuariosRoute from './usuarios.js';
import saludo from './saludo.js';
import login from './login.js';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/api/v1", usuariosRoute);
app.use("/api/v1", saludo);
app.use("/api/v1", login);

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando');
});

mongoose.connect(process.env.URL)
  .then(() => console.log('Conectado a MongoAtlas'))
  .catch(err => console.error('Error al conectar con Atlas:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
