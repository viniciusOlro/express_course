// Requires
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const conn = require('./db/conn')

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
  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
  const data = ['title', 'pageqty', title, pages]
  conn.query(sql, data, (e) => {
    if(e) {
      console.log(e);
    } else {
      res.redirect('/books');
    }
  })
})

//EDIT
app.get('/books/edit/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM books WHERE id = ${id}`
  conn.query(sql, (e, data) => {
    if(e) {
      console.log(e);
    } else {
      const book = data[0]
      res.render('editbook', { book })
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


//POST UPDATE BOOKS
app.post('/books/update', (req, res) => {
  const { id, title, pages } = req.body;
  const sql = `UPDATE books SET title = '${title}', pageqty = '${pages}' WHERE id = ${id}`
  conn.query(sql, (e, data) => {
    if(e) {
      console.log(e)
    } else {
      res.redirect('/books')
    }
  })
})

app.post('/books/delete/:id', (req, res) => {
  const { id } = req.params
  const sql = `DELETE FROM books WHERE id = ${id}`
  conn.query(sql, (e, data) => {
    if(e) {
      console.log(e)
    } else {
      res.redirect('/books')
    }
  })
})

app.listen(3000)