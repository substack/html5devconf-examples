var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var server = http.createServer(ecstatic);
server.listen(8005);

var tap = require('tap');

var shoe = require('shoe');
var sock = shoe(function (stream) {
    var c = tap.createConsumer();
});
sock.install(server, '/sock');
