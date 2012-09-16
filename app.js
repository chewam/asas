
/**
 * Module dependencies.
 */

var express = require('express'),
    config = require('./config'),
    routes = require('./routes'),
    user = require('./routes/user'),
    team = require('./routes/team'),
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

app.configure(function(){
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

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.post('/api/login', user.login);
app.post('/api/register', user.register);
app.get('/api/logout', checkSession, user.logout);
app.get('/api/teams/:id/events', checkSession, team.events);
app.get('/api/teams/:id/members', checkSession, team.members);
app.post('/api/teams/:id/members', checkSession, team.join);
app.put('/api/teams/:id/members/:memberId', checkSession, team.join);
app.post('/api/teams/:id/events', checkSession, team.addEvent);
app.get('/api/teams', checkSession, team.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
