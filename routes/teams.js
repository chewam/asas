exports.list = function(req, res) {

    var db = require('../utils/db')(),
        query = 'SELECT * FROM teams ORDER BY name';

    db.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    db.end();
};

exports.update = function(req, res) {

    var id = req.body.id,
        db = require('../utils/db')(),
        query = 'UPDATE teams SET ? WHERE id = ?';

    delete req.body.id;

    db.query(query, [req.body, id], function(err) {
        if (err) throw err;
        query = 'SELECT * FROM teams WHERE id = ?';
        db.query(query, [id], function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    });
};

exports.create = function(req, res) {

    var db = require('../utils/db')(),
        query = 'INSERT INTO teams SET ?';

    delete req.body.id;

    db.query(query, req.body, function(err, result) {
        if (err) throw err;
        query = 'SELECT * FROM teams WHERE id = ?';
        db.query(query, [result.insertId], function(err, rows) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    });
};

exports.remove = function(req, res) {

    var db = require('../utils/db')(),
        query = 'DELETE FROM teams WHERE id = ?';

    db.query(query, [req.body.id], function(err, result) {
        if (err) throw err;
        res.json({success: true});
    });

    db.end();
};
