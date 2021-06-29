const server = require('../config/server');

server.get('/dashboard', function (req, res) {
    let list = {
        'schedulers': ['Eliene V', 'Charles S', 'Ana C', 'Maria J', 'Paulo B'],
        'total_schedulers': [12, 1, 3, 5, 3]
    };

    res.send(list);
});