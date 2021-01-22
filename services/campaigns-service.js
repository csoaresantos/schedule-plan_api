const dataSource = require('../config/database');
const server = require('../config/server');

// INSERT INTO `campaign`(`customer_id`, `start_date`, `script_text`, `is_active`, `delete_flag`) 
// VALUES (1,CURRENT_DATE,'Renovamos nossa frota, venha conferir',1,0)

server.get('/campaigns', function (req, res) {
    console.log("Retriving data from campaign");

    dataSource.query('SELECT * FROM campaign', (err, rows) => {
        if (err) throw err;

        res.send(rows);
        
        //console.log('Campaigs: ', rows, '\n\n');
    });

 });