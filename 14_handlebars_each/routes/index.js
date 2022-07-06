const express = require('express')
const routes = express.Router()

routes.get('/dashboard', (req, res) => {
  const items = [
    {
      name: 'Item 1',
      id: 1
    },
    {
      name: 'Item 2',
      id: 2
    },
    {
      name: 'Item 3',
      id: 3
    },
  ]
  return res.render('dashboard', { items })
})

module.exports = routes