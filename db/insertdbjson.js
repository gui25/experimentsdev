var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');
let jsonFile = require('jsonfile');


db.serialize(function() {

    
  db.all('SELECT rowid AS id, info FROM lorem', function(err, row) {


    const jsonfile = require('jsonfile');
 
    const file = 'loop.json';
    const obj = row;


    
    jsonfile.writeFileSync(file, obj, {  spaces: 2  });
    
  });
 



});

db.close();