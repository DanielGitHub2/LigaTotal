const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nocnoc02',
    database: 'ligadb'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Conexión a la Base OK!!!')
});

module.exports = db;
