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
  const auth = false;
  return res.render('home', { user, auth })
})

app.listen(3000, () => {
  console.log('Rodando...');
})