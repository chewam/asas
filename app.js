var express = require('express'),
    config = require('./config'),
    routes = require('./routes'),
    user = require('./routes/user'),
    team = require('./routes/team'),
    users = require('./routes/users'),
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

app.get('/api/users', users.list);
app.put('/api/users', users.update);
app.post('/api/users', users.create);
app.delete('/api/users', users.remove);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
