const jwt = require('jwt-simple');
const bcrypt = requite('bycriptjs');
const User = require('../model/User');
const { json } = require('express');

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
         
    }

}