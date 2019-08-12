import React from 'react'
import './ItemAdd.css'

class ItemAdd extends React.Component {
  async handleSubmit (e) {
    e.preventDefault()
    let name = document.getElementById('item-name').value
    let item = { name: name, created: Date.now() }
    let headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    let reqBody = { headers: headers, method: 'POST', body: JSON.stringify(item) }
    console.log(reqBody)
    let res = await fetch('http://localhost:3008/insert', reqBody)
    let resJSON = await res.json()
    item = Object.assign({ label: 'null', priority: 'Low', notes: 'null' }, item)
  }

  render() {
    return (
      <div class="itemV">
        <form id="ItemForm" onSubmit={this.handleSubmit}>
          <div class="itemA">
            <input id="item-name" type="text" placeholder="Item Name" />
          </div>
        </form>
      </div>
    )
  }
}

export default ItemAdd
