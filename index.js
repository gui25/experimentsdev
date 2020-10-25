const express = require('express')
// const path = require('path')
var db = new sqlite3.Database('database.db');

const app = express()
const PORT = process.env.PORT || 5000

var http = require('http');
var fs = require('fs');


app.get('/', (req,res) => res.send(

    http.createServer(function (req, res) {
        //Open a file on the server and return its content:
        fs.readFile('db/database.db', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/db'});
          res.write(data);
          return res.end();
        });
    })

))



app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  
