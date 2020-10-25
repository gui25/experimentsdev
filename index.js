const express = require('express')
// const path = require('path')
var db = new sqlite3.Database('database.db');

const app = express()
const PORT = process.env.PORT || 5000


let text = '';

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

db.serialize(function() {
  
  db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
    text = text + row.id + ': ' + row.info;
  });

});

db.close();

app.get('/', (req,res) => res.send(text))



app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  
