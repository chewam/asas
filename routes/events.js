exports.list = function(req, res) {

    var db = require('../utils/db')(),
        query = [
            'SELECT events.*, teams.name AS teamName FROM events',
            'LEFT JOIN teams ON events.team = teams.id',
            'ORDER BY events.name'
        ].join(' ');

    db.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    db.end();
};

exports.update = function(req, res) {

    var id = req.body.id,
        db = require('../utils/db')(),
        query = 'UPDATE events SET ? WHERE id = ?';

    delete req.body.id;

    db.query(query, [req.body, id], function(err) {
        if (err) throw err;
        query = 'SELECT * FROM events WHERE id = ?';
        db.query(query, [id], function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    });
};

exports.create = function(req, res) {

    var db = require('../utils/db')(),
        query = 'INSERT INTO events SET ?';

    delete req.body.id;

    db.query(query, req.body, function(err, result) {
        if (err) throw err;
        query = 'SELECT * FROM events WHERE id = ?';
        db.query(query, [result.insertId], function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    });
};

exports.remove = function(req, res) {

    var db = require('../utils/db')(),
        query = 'DELETE FROM events WHERE id = ?';

    db.query(query, [req.body.id], function(err, result) {
        if (err) throw err;
        res.json({success: true});
    });

    db.end();
};
