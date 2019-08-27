import React from 'react'
import ItemCard from './ItemCard.js'

class ItemView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  discardItem = async (e) => {
    let itemId = e.target.id
    let newItems = this.state.items.filter( i => i._id !== itemId)
    this.setState({ items: newItems })
    let res = await fetch('http://localhost:3008/delete/' + itemId)
  }

  cookItems() {
    let cItems = []
    let items = this.props.items.sort(function (i1, i2) {
      if (i1.created <  i2.created) return 1
      return -1
    })
    for (let item of items) {
      cItems.push(<ItemCard key={item._id} discardItem={this.discardItem} itemObj={item} />)
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
