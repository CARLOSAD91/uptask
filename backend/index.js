import express from "express";
import dotenv  from "dotenv";
import cors from 'cors';
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoues from './routes/proyectoRoutes.js'
import tareaRoutes from './routes/tareaRoutes.js'

const app = express();
app.use(express.json())

dotenv.config()

conectarDB();

// Confirgurar CORS
const whitelist = [process.env.FRONTEND_URL]
const cosrsOptions = {
  origin: function(origin, callback){
    if(whitelist.includes(origin)){
      // Puede consultar la API
      callback(null, true)
    }else{
      // No esta permitido
      callback(new Error('Error de Cors'))
    }
  }
}

app.use(cors(cosrsOptions))

// Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoues)
app.use('/api/tareas', tareaRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
})
