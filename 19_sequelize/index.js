// Requires
const { log } = require('console')
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

//Variables
const app = express()

//Engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

//public
app.use(express.static('public'))

app.get('/users/create', (req, res) => {
  return res.render('addUser')
})

//CREATE
app.post('/users/create', async (req, res) => {
  const { name, occupation } = req.body
  let { newsletter } = req.body
  if(newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }
  console.log(req.body);
  await User.create({name, occupation, newsletter})
  res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findOne({ raw: true, where: { id: id } }) 
  res.render('user', { user })
})

app.post('/users/delete/:id', async (req, res) => {
  const { id } = req.params
  await User.destroy({ where: { id: id } })
  res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findOne({ include: Address, where: { id: id } })
  return res.render('edit', { user: user.get({ plain: true }) })
})

app.post('/users/update', async (req, res) => {
  const { id, name, occupation } = req.body
  let { newsletter } = req.body
  if(newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }
  const user = { id, name, occupation, newsletter }
  await User.update(user, { where: { id: id } })
  res.redirect('/')
})

app.post('/address/create', async (req, res) => {
  const { UserId, street, number, city } = req.body
  const address = { UserId, street, number, city }
  await Address.create(address)
  res.redirect(`/users/edit/${UserId}`)
})

app.post('/address/delete', async (req, res) => {
  const { id, UserId } = req.body
  await Address.destroy({
    where: {id : id}
  })
  res.redirect(`/users/edit/${UserId}`);
})

//Default route
app.get('/', async (req, res) => {
  const users = await User.findAll({raw: true})
  return res.render('home', { users })
})

conn.sync().then(() => {
  app.listen(3000)
}).catch(e => console.log(e))