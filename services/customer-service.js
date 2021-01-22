const dataSource = require('../config/database');
const server = require('../config/server');

server.get('/customers', function (req, res) {
    console.log("Retriving data from customers");

    dataSource.query('SELECT * FROM customer', (err, rows) => {
        if (err) throw err;

        res.send(rows);
        
        //console.log('Customers: ', rows, '\n\n');
    });

 });

 
 // This responds a POST request for the homepage
 server.post('/customers/updateStatus', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
 });

 module.exports = server;