var connection = require('../bd_connection');

function getSongs(req, res) {
    var query = 'SELECT * FROM song';
    connection.query(query, function(error, result, fields) {
        processQueryResults(res, error, result);
    });
}

function getSongById(req, res) {
    var query = 'SELECT * FROM song WHERE id = ' + req.params.id;
    connection.query(query, function(error, result, fields) {
        processQueryResults(res, error, result);
    });
}

function processQueryResults(res, error, result) {
    if (error) {
        res.status(404).send('Error in request!');
        return;
    }

    var response = {
        'data': result
    };

    res.status(200).send(JSON.stringify(response));
}

module.exports = {
    getSongs: getSongs,
    getSongById: getSongById
}