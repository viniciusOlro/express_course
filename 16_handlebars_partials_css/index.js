// Requires
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

//Variables
const app = express()

//Middlewares
app.use(express.static('public'))

//Set partials
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

//Engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//routes
app.use(routes)

//Default route
app.get('/', (req, res) => {
  const user = {
    name: 'Vinícius',
    age: 20
  }
  const auth = false;
  return res.render('home', { user, auth })
})

//Routes

app.listen(3000, () => {
  console.log('Rodando...');
})