// Requires
const express = require('express')
const exphbs = require('express-handlebars')

//Variables
const app = express()

//Engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Default route
app.get('/', (req, res) => {
  const user = {
    name: 'Vinícius',
    age: 20
  }
  return res.render('home', { user })
})

app.listen(3000, () => {
  console.log('Rodando...');
})