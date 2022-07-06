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
  return res.render('home', { layout: false })
})

app.listen(3000, () => {
  console.log('Rodando...');
})