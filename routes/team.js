exports.events = function(req, res) {
    var db = require('../utils/db')(),
        query = 'SELECT id, name, date FROM events WHERE teamId = ?';

    db.query(query, [req.params.id], function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    db.end();
};


exports.members = function(req, res) {
    var db = require('../utils/db')(),
        query = 'SELECT id, name, admin FROM members WHERE teamId = ?';

    db.query(query, [req.params.id], function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    db.end();
};


exports.addEvent = function(req, res) {
    var db = require('../utils/db')(),
        query = 'INSERT INTO events SET ?',
        event = {
            name: req.body.name,
            date: req.body.date,
            teamId: req.body.team_id
        };

    db.query(query, event, function(err, result) {
        if (err) throw err;
        query = 'INSERT INTO attendance (eventId, memberId) SELECT ?, id FROM members WHERE teamId = ?';

        db.query(query, [result.insertId, req.params.id], function(err, result) {
            db.end();
            if (err) throw err;
            res.json({
                id: result.insertId,
                name: req.body.name,
                date: req.body.date,
                team_id: req.body.team_id
            });
        });
    });

};


exports.list = function(req, res) {
    var db = require('../utils/db')(),
        query = 'SELECT * FROM teams';

    db.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });

    db.end();
};


exports.join = function(req, res) {
    var id = req.session.user.id,
        db = require('../utils/db')(),
        query = 'UPDATE members SET ? WHERE id = ?';

    db.query(query, [{teamId: req.params.id}, id], function(err) {
        if (err) throw err;
        res.json({
            id: id,
            name: req.body.name,
            team_id: req.body.team_id
        });
    });

    db.end();
};
