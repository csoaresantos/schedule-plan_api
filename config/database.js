const mysql = require('mysql');

const dataSource = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '', // A senha do usuário. Ex: user123
    database: 'schedule_plan' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

dataSource.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err);
        return;
    }
    console.log('Connection established!');
});

module.exports = dataSource;