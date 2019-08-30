import React, { useState, useEffect } from 'react'
import ItemView from './ItemView.js'
import ItemAdd from './ItemAdd.js'

function TodoApp () {
  let [items, setItems] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let name = document.getElementById('item-name').value
    let item = { name: name, created: Date.now() }
    let headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    let reqBody = { headers: headers, method: 'POST', body: JSON.stringify(item) }
    let res = await fetch('http://localhost:3008/insert', reqBody)
    let resJSON = await res.json()
    item = Object.assign({ label: 'null', priority: 'Low', notes: 'null' }, item)
    fetchItems()
  }

  async function fetchItems () {
    let res = await fetch('http://localhost:3008/items')
    let items = await res.json()
    setItems(items)
  }

  useEffect( () => {
    fetchItems()
  }, [])

  return (
      <div>
        <ItemAdd updateView={handleSubmit} />
        <ItemView updateView={fetchItems} items={items}/>
      </div>
  )
}

export default TodoApp;
