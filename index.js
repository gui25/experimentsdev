const express = require('express')
// const path = require('path')
var db = new sqlite3.Database('database.db');

const app = express()
const PORT = process.env.PORT || 5000




app.get('/', (req,res) => res.send(
    db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
        console.log(row.id + ': ' + row.info);
    })
  ))



app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  
