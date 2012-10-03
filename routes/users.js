exports.list = function(req, res) {

    var db = require('../utils/db')(),
        query = [
            'SELECT users.*, teams.name AS teamName',
            'FROM users',
            'LEFT JOIN teams ON users.team = teams.id',
            'ORDER BY users.team, users.position'
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
        query = 'UPDATE users SET ? WHERE id = ?';

    delete req.body.id;
    delete req.body.teamName;

    db.query(query, [req.body, id], function(err) {
        if (err) throw err;
        query = [
            'SELECT users.*, teams.name AS teamName',
            'FROM users',
            'LEFT JOIN teams ON users.team = teams.id',
            'WHERE users.id = ?'
        ].join(' ');
        db.query(query, [id], function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    });
};

exports.create = function(req, res) {

    var db = require('../utils/db')(),
        query = 'INSERT INTO users SET ?';

    delete req.body.id;
    delete req.body.teamName;

    db.query(query, req.body, function(err, result) {
        if (err) throw err;
        query = [
            'SELECT users.*, teams.name AS teamName',
            'FROM users',
            'LEFT JOIN teams ON users.team = teams.id',
            'WHERE users.id = ?'
        ].join(' ');
        db.query(query, [result.insertId], function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    });
};

exports.remove = function(req, res) {

    var db = require('../utils/db')(),
        query = 'DELETE FROM users WHERE id = ?';

    db.query(query, [req.body.id], function(err, result) {
        if (err) throw err;
        res.json({success: true});
    });

    db.end();
};
