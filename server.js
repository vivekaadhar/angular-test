var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("/Users/viveksharma/Documents/git_repo/angular_test/sport-store"));
app.listen(5000);
