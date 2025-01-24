const db = require('../config/db.js');
const bcrypt = require('bcryptjs');

class User{

    static async createUse(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [rows] = await db.execute(
            'INSERT INTO users(username,password) VALUES(?,?)', [username, hashedPassword]
        );
        
        return rows;
    }

    static async getUserByEmail(username) {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE username=?', [username]
        );

        return rows[0];
    }
}

module.exports = User;