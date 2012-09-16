exports.index = function(req, res) {
    res.render('index', {
        title: 'ASAS',
        user: req.session.user
    });
};
