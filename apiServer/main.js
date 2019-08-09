const express = require('express')
const model = require('./model.js')

const deleteItem = model.deleteItem
const insertItem = model.insertItem
const fetchItems = model.fetchItems

const app = express()
const port = 3008

app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => res.send('hello world'))

app.get('/items', async function (req, res) {
  const items = await fetchItems()
  res.send(items)
})

app.get('/delete/:id', async function (req, res) {
  const id = req.params.id
  await deleteItem(id)
  res.send(`deleted item ${id}`)
})

app.put('/insert', async function (req, res) {
  console.log(req.body)
  let itemId = await insertItem(req.body)
  res.send(itemId)
})

app.listen(port, () => console.log('listening on port 3008'))
