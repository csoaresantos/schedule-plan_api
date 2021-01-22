const dataSource = require('../config/database');

module.exports = {
    getCusomers:function () {
        dataSource.query('SELECT * FROM customer', (err, rows) => {
            if (err) throw err;
            return rows;
        });
    }

};