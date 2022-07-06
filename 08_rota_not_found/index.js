//CONSTS (REQUIRES AND DEFAULT VALUES)
const express = require('express')
const app = express()
const port = 3000
const usersRoutes = require('./users')
const path = require('path')  
const basePath = path.join(__dirname, 'templates')

//MIDDLEWARES
app.use(
  express.urlencoded({
    extended: true
  })
) 
app.use(express.json())
app.use('/users', usersRoutes)
app.use(express.static('public'))

//DEFAULT ROUTE
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/not_found.html`)
})

//APP LISTEN
app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})