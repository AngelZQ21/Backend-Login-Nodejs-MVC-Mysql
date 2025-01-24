const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const JWT_SECRET = 'Angel_210301';

class UserController {

    static async Register(req, res) {
        
        const { username, password } = req.body;

        try {       
            const result = await User.createUse(username, password)
            res.status(201).json({ message: 'Usuario registrado con Exito' });
        } catch (e) {           
            res.status(500).json({ message: 'Error al registrar el usario' });
        }
    }

    static async Login(req, res) {

        const { username, password } = req.body;

        try {
            
            const user = await User.getUserByEmail(username);

            if (!user) {
                return res.status(400).json({ message: "Usuario no encontrado" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(400).json({ message: "Contraseña Incorrecta" });
            }
             
            const payload = { userId: user.id }
            const token = jwt.encode(payload, JWT_SECRET);

            res.json({ token });

        } catch (e) {   
            res.status(500).json({ message: "Error al iniciar session" });
        }
    }

}

module.exports = UserController;