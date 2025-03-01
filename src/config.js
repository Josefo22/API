// Importar el módulo dotenv para cargar variables de entorno desde un archivo .env
import * as dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Exportar la variable PUERTO que obtiene el valor de la variable de entorno SERVER_PORT
export const PUERTO = process.env.SERVER_PORT;

// Exportar la variable MONGODB_URI que obtiene el valor de la variable de entorno MONGODB_URI
export const MONGODB_URI = process.env.MONGODB_URI;
