// Requires
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

//INSERT
app.post('/books/insert', (req, res) => {
  const { title, pages } = req.body;
  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pages}')`
  conn.query(sql, (e) => {
    if(e) {
      console.log(e);
    } else {
      res.redirect('/books');
    }
  })
})

//SELECT
app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM books WHERE id = ${id}`
  conn.query(sql, (e, data) => {
    if(e) {
      console.log(e);
    } else {
      const book = data[0]
      res.render('book', { book })
    }
  })
})

app.get('/books', (req, res) => {
  const sql = "SELECT * FROM books"
  conn.query(sql, (e, data) => {
    if(e) {
      console.log(e);
    } else {
      const books = data
      res.render('books', { books })
    }
  })
})

//Default route
app.get('/', (req, res) => {
  return res.render('home')
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Conectado ao MySQL!')
  }

  app.listen(3000)
})