exports.mobile = function(req, res) {
    res.render('mobile', {
        title: 'ASAS Mobile',
        user: req.session.user
    });
};

exports.desktop = function(req, res) {
    res.render('desktop', {
        title: 'ASAS MANAGER',
        user: req.session.user
    });
};
