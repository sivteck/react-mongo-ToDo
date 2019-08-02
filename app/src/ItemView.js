import React from 'react'
import ItemCard from './ItemCard.js'
import ItemAdd from './ItemAdd.js'

class ItemView extends React.Component {
  constructor(props) {
    super(props)
    this.discardItem = this.discardItem.bind(this)
    this.state = {}
    this.state.items = []
  }
  async componentDidMount() {
    let res = await fetch('http://localhost:3008/items', { mode: 'cors' })
    this.setState({ items: await res.json() })
  }
  async discardItem(e) {
    let itemId = e.target.id
    let newItems = this.state.items.filter( i => i._id !== itemId)
    this.setState({ items: newItems })
    let res = await fetch('http://localhost:3008/delete/' + itemId)
  }
  cookItems() {
    let cItems = []
    cItems.push(<ItemAdd />)
    for (let item of this.state.items) {
      cItems.push(<ItemCard discardItem={this.discardItem} itemObj={item} />)
    }
    return cItems
  }
  itemAdd() {
  }
  render() {
    return (
      this.cookItems()
    )
  }
}

export default ItemView;
