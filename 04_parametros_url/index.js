const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  //leitura da tabela Users e buscar um user
  console.log(`Buscando pelo user ${id}`);
  res.sendFile(`${basePath}/user.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})