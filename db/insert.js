var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

db.serialize(function() {

    
    for (var i = 0; i < 10; i++) {
        stmt.run('Posição da tabela ' + i);
    }
    
    stmt.finalize();


});

db.close();