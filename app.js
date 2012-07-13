// entry point for express app
var express = require("express");

var app = module.exports = express.createServer();

app.configure(function () {
    // useful for post request
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/Public'));
});

app.get("/", function (req, res) {
    res.sendfile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000);
console.log("Express listen on port %d in %s mode",
    app.address().port, app.settings.env);