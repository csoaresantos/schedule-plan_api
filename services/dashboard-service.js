const dataSource = require('../config/database');
const server = require('../config/server');

server.get('/dashboard', async function (req, res) {
    console.log(`Retriving data from attendees to dashboard`);
    let list = {
        // 'schedulers': ['Charles V', 'Eliene S', 'Ana C', 'Maria J', 'Paulo B'],
        // 'total_schedulers': [6, 3, 1, 2, 4]
    };

    await dataSource.query(`SELECT system_user.user_name, count(system_user.user_name) total FROM attendee  INNER JOIN system_user  on system_user.user_id =  attendee.scheduler_user_id WHERE attendee.status_audit = 1 and attendee.scheduling_accepted = 1 GROUP by system_user.user_name`, (err, rows) => {
        if (err) throw err;

        list = {
            'schedulers': rows.map(a => a.user_name),
            'total_schedulers': rows.map(a => a.total)
        };

        res.send(rows);
        //console.log('Campaigs: ', rows, '\n\n');
    });

});