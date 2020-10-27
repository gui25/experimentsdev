const express = require('express')
// const path = require('path')


const app = express()
const PORT = process.env.PORT || 5000

app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    var users = [{
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: 'http://placekitten.com/300/300'
    }, {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: 'http://placekitten.com/400/300'
    }, {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: 'http://placekitten.com/500/300'
    }]
  
    res.render('views/pages/about', { usuarios: users })
  })



app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  
