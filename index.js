const express = require('express')
// const path = require('path')


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');




app.get('/rows', function (req, res) {
    db.serialize(function() {
        
        db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
          console.log(row.id + ': ' + row.info);
        });
        
      });
      
      db.close();
  });



app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  
