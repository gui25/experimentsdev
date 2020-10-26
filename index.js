const express = require('express')
// const path = require('path')
var db = new sqlite3.Database('database.db');

const app = express()
const PORT = process.env.PORT || 5000




app.get('/', (req,res) => res.send('text'))



app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  
