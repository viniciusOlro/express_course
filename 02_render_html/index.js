const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

const baseUrl = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  return res.sendFile(`${baseUrl}/index.html`);
})

app.listen(PORT, () => {
  console.log('Iniciado.');
});