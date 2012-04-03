var static = require('node-static'),
    http   = require('http');

var site = new(static.Server)('./public');

http.createServer (function (request, response) {
  request.addListener ('end', function () {
    site.serve(request, response);
  });
}).listen(80);
