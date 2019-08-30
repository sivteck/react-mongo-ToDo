import React from 'react'
import './ItemAdd.css'

function ItemAdd (props) {

  const handleSubmit = props.updateView

  return (
    <div className="itemV">
      <form id="ItemForm" onSubmit={handleSubmit}>
        <div className="itemA">
          <input id="item-name" type="text" placeholder="Item Name" />
        </div>
      </form>
    </div>
  )
}

export default ItemAdd
