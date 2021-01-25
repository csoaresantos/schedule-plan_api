const dataSource = require('../config/database');
const server = require('../config/server');

// INSERT INTO `attendee`(`campaing_id`, `scheduler_user_id`, `name`, `companion`, `telephone_primary`, `telephone_secondary`, `scheduled_at`) 
// VALUES (1, 1, 'Belmiro Braga', 'Suzana Duarte', '31983131482', '31992738331', CURRENT_DATE)

server.get('/attendees/:scheduler', function (req, res) {
    const scheduler = req.params.scheduler;
    console.log(`Retriving data from attendees for user ${scheduler}`);
    dataSource.query(`SELECT a.* FROM attendee a INNER JOIN system_user su ON a.scheduler_user_id = su.user_id WHERE su.user_name = '${scheduler}' AND a.scheduling_accepted IS NULL`, (err, rows) => {
        if (err) throw err;

        res.send(rows);
        //console.log('Campaigs: ', rows, '\n\n');
    });
});

// This responds a POST request for the homepage
server.post('/attendees/confirm', async function (req, res) {
    console.log("Updating attendee status"+ JSON.stringify(req.body));

    const { observation, scheduled_at, scheduling_accepted, attendee_name } = req.body;

    await dataSource.query('UPDATE attendee SET observation = ?, scheduled_at = ?, scheduling_accepted = ? WHERE name = ?',
        [observation, scheduled_at, scheduling_accepted, attendee_name],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(400).send({ 'errorMessage': 'Erro ao atualizar dados do cliente!' });
                

            } else {
                res.status(200).send({ 'successMessage': 'Dados atualizado com sucess!'});
            }

            console.log('Changed ', result);
        }
    );

    //res.send('Hello POST');
});