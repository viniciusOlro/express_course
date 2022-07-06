//Requires
const express = require('express')
const path = require('path')

//Start variables
const router = express.Router();
const BASE_PATH = path.join(__dirname, '../templates')

router.get('/', (req, res) => {
  return res.sendFile(`${BASE_PATH}/product.html`);
})

module.exports = router