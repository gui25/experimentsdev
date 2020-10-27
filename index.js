const express = require('express')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 5000

  
// With middleware 
app.use('/', function(req, res, next){ 
     
    var options = { 
        root: path.join(__dirname) 
    }; 
      
    var fileName = 'db/database.db'; 
    res.sendFile(fileName, options, function (err) { 
        if (err) { 
            next(err); 
        } else { 
            console.log('Sent:', fileName); 
            next(); 
        } 
    }); 
}); 
  
app.get('/', function(req, res){ 
    console.log("File Sent") 
    res.send(); 
}); 
  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
});

  
