// require packages used in the project
const express = require('express')
const app = express()

const port = 3000
// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index', { content: '首頁' })
})
app.get('/about', (req, res) => {
  res.render('index', { content: 'About' })
})
app.get('/portfolio', (req, res) => {
  res.render('index', { content: 'Portfolio' })
})
app.get('/contact', (req, res) => {
  res.render('index', { content: 'Contact' })
})



app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})