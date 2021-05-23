const server = require('../config/server');

server.get('/dashboard', function (req, res) {
    let list = {
        'schedulers': ['Eliene V', 'Sheila S', 'Ana C', 'Paula R', 'Maria J', 'Paulo B'],
        'total_schedulers': [12, 19, 3, 5, 2, 3]
    };

    res.send(list);
});