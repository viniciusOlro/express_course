const express = require('express')
const app = express()
const port = 3000
const usersRoutes = require('./users')

app.use(
  express.urlencoded({
    extended: true
  })
  )
  
  app.use(express.json())
  
const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})