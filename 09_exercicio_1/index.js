//Requires
const path = require('path')
const express = require('express')
const { urlencoded } = require('express')
const routes = require('./routes')

//Start variables
const app = express()
const PORT = 3000
const BASE_PATH = path.join(__dirname, './templates')

//Middlewares
app.use(urlencoded({
  extended: true
}))
app.use(express.static('public'))
app.use(express.json())
app.use('/products', routes)

//App home
app.get('/', (req, res) => {
  return res.sendFile(`${BASE_PATH}/index.html`);
})

//App Listen
app.listen(PORT, () => {
  console.log(`Listening at ${PORT} port`);
})