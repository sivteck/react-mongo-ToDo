import React from 'react'

class ItemAdd extends React.Component {
  render() {
    return (
      <div className="itemV">
        <form id="ItemForm">
          <div className="itemA">
            <input id="item-name" type="text" placeholder="Item Name" />
          </div>
          <div className="itemA">
            <button type="submit" id="newItem">+</button>
          </div>
        </form>
      </div>
    )
  
  }
}

export default ItemAdd
