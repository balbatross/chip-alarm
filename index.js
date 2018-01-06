var http = require('http');
var express = require('express');
var RED = require('node-red');

var app = express();

app.use('/dashboard', express.static(__dirname+ '/frontend/build'));
var server = http.createServer(app);

var settings = {
   httpAdminRoot: '/red',
   httpNodeRoot: '/api',
   functionGlobalContent: {}
}

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8000);
RED.start();
