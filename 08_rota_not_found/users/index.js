const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/create', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  res.sendFile(`${basePath}/user.html`)
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //leitura da tabela Users e buscar um user
  console.log(`Buscando pelo user ${id}`)
  res.sendFile(`${basePath}/user.html`)
})


module.exports = router