var http = require('http'),
    app  = require('./index');

http.createServer(app).listen(3001, function() {
    console.log("Express server listening on port " + 3001);
});
