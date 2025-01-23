const db = require('../config/db.js');
const bycript = require('bycript');

class User{

    static async createUse(username, password) {
        const hashedPassword = await bycript.hash(password, 10);
        const [rows] = await db.execute(
            'INSERT INTO users(username,password) VALUES(?,?)', [username, hashedPassword]
        );
        
        return rows;
    }

    static async getUserByEmail(username) {
        const [rows] = await db.execute(
            'SELECT * FROM users FROM email=?', [username]
        );

        return rows[0];
    }
}

module.exports = User;