var express = require('express'),
    config = require('./config'),
    routes = require('./routes'),
    user = require('./routes/user'),
    team = require('./routes/team'),
    users = require('./routes/users'),
    teams = require('./routes/teams'),
    events = require('./routes/events'),
    // mobile = require('./routes/mobile'),
    // desktop = require('./routes/desktop'),
    http = require('http'),
    path = require('path');

var app = express();

var checkSession = function(req, res, next) {
    if (!req.session.user) {
        res.send(403);
    } else {
        next();
    }
};

var checkAdminSession = function(req, res, next) {
    console.log('checkAdminSession', req.session.user);
    if (req.session.user && req.session.user.admin) {
        next();
    } else {
        res.send(403);
    }
};

app.configure(function() {
    app.set('port', process.env.PORT || config.port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

app.get('/mobile', routes.mobile);
app.get('/desktop', routes.desktop);

app.post('/api/login', user.login);
app.post('/api/register', user.register);
app.get('/api/logout', checkSession, user.logout);
app.get('/api/teams/:id/events', checkSession, team.events);
app.get('/api/teams/:id/members', checkSession, team.members);
app.post('/api/teams/:id/members', checkSession, team.join);
app.put('/api/teams/:id/members/:memberId', checkSession, team.join);
app.post('/api/teams/:id/events', checkSession, team.addEvent);
app.get('/api/teams', checkSession, team.list);

app.post('/api/admin/login', user.adminLogin);

app.get('/api/admin/users', users.list);
app.put('/api/admin/users', users.update);
app.post('/api/admin/users', users.create);
app.delete('/api/admin/users', users.remove);

app.get('/api/admin/teams', checkAdminSession, teams.list);
app.put('/api/admin/teams', checkAdminSession, teams.update);
app.post('/api/admin/teams', checkAdminSession, teams.create);
app.delete('/api/admin/teams', checkAdminSession, teams.remove);

app.get('/api/admin/events', events.list);
app.put('/api/admin/events', events.update);
app.post('/api/admin/events', events.create);
app.delete('/api/admin/events', events.remove);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
