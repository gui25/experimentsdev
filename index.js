const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(PORT, () => console.log(`Listening on ${ PORT }`));

  
