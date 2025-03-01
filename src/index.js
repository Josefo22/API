// Importar los módulos necesarios
import express from 'express';
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv'; // Importar dotenv para variables de entorno
import { connectDB } from './db.js';
import morgan from 'morgan';

// Cargar variables de entorno desde .env
dotenv.config();

// Definir el puerto desde variables de entorno o por defecto 3000
const PUERTO = process.env.PORT || 3000;

// Crear una instancia de la aplicación Express
const app = express();

// Conectar a MongoDB Atlas
connectDB();

// Middlewares
app.use(express.json()); // Habilitar el uso de JSON en las peticiones
app.use(morgan('dev')); // Registrar solicitudes en consola

// Rutas
app.use('/api', userRoutes); // Montar las rutas de usuario en /api

// Ruta principal para verificar que el servidor está activo
app.get("/", (req, res) => {
    res.send("🌎 Bienvenido a mi API SENA 🌎");
});

// Iniciar el servidor
app.listen(PUERTO, () => console.log(`✅ Aplicación corriendo en http://localhost:${PUERTO}`));
