exports.logout = function(req, res) {
    if (req.session.user) {
        delete req.session.user;
    }
    res.json({success: true});
};

exports.login = function(req, res) {
    console.log('login', req.body);

    var user,
        db = require('../utils/db')(),
        query = 'SELECT id, name, password FROM members';

    db.query(query, function(err, rows, fields) {
        if (err) throw err;
        rows.forEach(function(row) {
            if (row.name === req.body.name && row.password === req.body.password) {
                user = row;
            }
        });

        if (user) {
            req.session.user = {
                id: user.id,
                name: user.name,
                admin: user.admin
            };
            res.json({success: true, user: {
                id: user.id,
                name: user.name,
                admin: user.admin
            }});
        } else {
            res.json({success: false});
        }

    });

    db.end();
};

exports.register = function(req, res) {
    console.log('login', req.body);

    var user,
        db = require('../utils/db')(),
        query = 'SELECT id, name, email FROM members';

    db.query(query, function(err, rows, fields) {
        if (err) throw err;
        rows.forEach(function(row) {
            if (row.name === req.body.name || row.email === req.body.email) {
                user = row;
            }
        });

        if (!user) {
            query = 'INSERT INTO members SET ?';

            db.query(query, req.body, function(err, result) {
                if (err) throw err;
                req.session.user = {
                    id: result.insertId,
                    name: req.body.name,
                    admin: false
                };
                res.json({success: true, user: {
                    id: result.insertId,
                    name: req.body.name,
                    admin: false
                }});
                db.end();
            });
        } else {
            res.json({success: false});
        }

    });
};
