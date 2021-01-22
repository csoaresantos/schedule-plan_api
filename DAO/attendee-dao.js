const dataSource = require('../config/database');


// INSERT INTO `attendee`(`campaing_id`, `scheduler_user_id`, `name`, `companion`, `telephone_primary`, `telephone_secondary`, `scheduled_at`) 
// VALUES (1, 1, 'Belmiro Braga', 'Suzana Duarte', '31983131482', '31992738331', CURRENT_DATE);
module.exports = {

    getData: async function () {
        let result;
        await dataSource.query('SELECT * FROM attendee', (err, rows) => {
            if (err) throw err;
            result = rows;
    
            
        });


        
        console.log('Campaigs: ', result, '\n\n');
        return result;
        
    }

};