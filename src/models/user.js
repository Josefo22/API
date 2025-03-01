// Importar los módulos necesarios
import mongoose, { Schema } from "mongoose";

// Definir el esquema de usuario
const userSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true,
    },
    clave: {
        type: String,
        required: true,
    }
});

// Exportar el modelo de usuario basado en el esquema
export default mongoose.model('user', userSchema);