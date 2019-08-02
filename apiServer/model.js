const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })


let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

let itemSchema = new mongoose.Schema({
  name: String,
  notes: String,
  priority: String,
  label: String
})
  
let Item = mongoose.model('Item', itemSchema)

const itemD = {
  name: 'item 6',
  notes: 'item 5 notes',
  priority: 'item 5 priority',
  label: 'item 5 label'
}
  
async  function insertItem(item) {
  let insertion = await Item.create(item)
  await insertion.save((e, i) => {})
  return insertion._id
}

async function fetchItems () {
  let itemsArr = []
  let itemsQuery = await Item.find({}, (e, i) => {})
  return itemsQuery
}

async function deleteItem (itemId) {
  await Item.findByIdAndDelete(itemId)
}

async function dummy () {
  console.log(await fetchAllItems())
}

async function updateItem (itemId, updates) {
}

insertItem(itemD)

exports.fetchItems = fetchItems
exports.deleteItem = deleteItem
exports.insertItem = insertItem
