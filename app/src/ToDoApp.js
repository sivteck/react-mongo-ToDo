import React from 'react'
import ItemView from './ItemView.js'
import ItemAdd from './ItemAdd.js'

class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.fetchItems()
  }

  async handleSubmit (e) {
    e.preventDefault()
    let name = document.getElementById('item-name').value
    let item = { name: name, created: Date.now() }
    let headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    let reqBody = { headers: headers, method: 'POST', body: JSON.stringify(item) }
    let res = await fetch('http://localhost:3008/insert', reqBody)
    let resJSON = await res.json()
    item = Object.assign({ label: 'null', priority: 'Low', notes: 'null' }, item)
    this.fetchItems()
  }

  async fetchItems() {
    let res = await fetch('http://localhost:3008/items')
    let items = await res.json()
    this.setState({ items: items })
    console.log('me me me ///')
  }

  render() {
    return (
      <div>
        <ItemAdd updateView={this.handleSubmit} />
        <ItemView items={this.state.items}/>
      </div>
    )
  }
}

export default ToDoApp;
