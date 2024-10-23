const mysql = require('mysql2');

const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'star_wars'
});

connection.connect((err)=>{
    if(err) {
        console.error('error connecting to MySQL', err);
        return;
    }
    console.log('en avant mousaillon');
});

module.exports = connection;

