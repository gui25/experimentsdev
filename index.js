const express = require('express')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 5000


import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    document.getElementById('root')
);


  

  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
});

  
