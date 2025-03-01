import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

// Conectar a MongoDB Atlas
export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true); // Configurar consulta estricta en MongoDB

        // Establecer conexión a la base de datos utilizando la URI de MongoDB obtenida desde la configuración
        await mongoose.connect(MONGODB_URI)
            .then(() => console.log(":: Conectado a MongoDB Atlas 🌎 ::")) // Mensaje de éxito si la conexión se establece correctamente
            .catch((error) => console.error(error)); // Manejo de errores si la conexión falla

    } catch (error) {
        console.log(error); // Imprimir cualquier error que ocurra durante la conexión
    }
};
