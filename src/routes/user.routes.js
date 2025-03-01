// Importar los módulos necesarios
import { Router } from "express";
import Usuario from "../models/user.js";

const router = Router();

// Ruta para crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
    const { usuario, clave } = req.body;

    try {
        // Validar que los datos no estén vacíos
        if (!usuario || !clave) {
            return res.status(400).json({ mensaje: "Usuario y clave son requeridos" });
        }

        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: "El usuario ya existe" });
        }

        // Guardar el usuario en la base de datos
        const nuevoUsuario = new Usuario({ usuario, clave });
        const usuarioGuardado = await nuevoUsuario.save();

        res.status(201).json({
            id: usuarioGuardado._id,
            usuario: usuarioGuardado.usuario,
            mensaje: "Usuario creado correctamente"
        });

    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
});

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
});

// Ruta para obtener un usuario por ID
router.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
});

// Ruta para actualizar un usuario por ID
router.put('/usuarios/:id', async (req, res) => {
    try {
        const { usuario, clave } = req.body;
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { usuario, clave },
            { new: true }
        );

        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.status(200).json({ mensaje: "Usuario actualizado correctamente", usuarioActualizado });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
});

// Ruta para eliminar un usuario por ID
router.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { usuario, clave } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const usuarioEncontrado = await Usuario.findOne({ usuario });

        if (!usuarioEncontrado) {
            return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verificar la clave (mejor usar bcrypt en producción)
        if (usuarioEncontrado.clave !== clave) {
            return res.status(401).json({ mensaje: 'Clave incorrecta' });
        }

        res.status(200).json({ mensaje: 'Autenticación exitosa' });

    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
});

// Exportar el router con las rutas
export default router;
