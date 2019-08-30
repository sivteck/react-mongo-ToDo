import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard.js'

function ItemView (props) {
  let [items, setItems] = useState([])
  const discardItem = async (e) => {
    let itemId = e.target.id
    let res = await fetch('http://localhost:3008/delete/' + itemId)
    let newItems = items.filter( i => i._id !== itemId)
    setItems(newItems)
    props.updateView()
  }

  const cookItems = () => {
    let cItems = []
    let items = props.items.sort(function (i1, i2) {
      if (i1.created <  i2.created) return 1
      return -1
    })
    for (let item of items) {
      cItems.push(<ItemCard key={item._id} discardItem={discardItem} itemObj={item} />)
    }
    return cItems
  }

  return (
    cookItems()
  )


}

export default ItemView;
