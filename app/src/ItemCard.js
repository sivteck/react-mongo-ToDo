import React from 'react';
import './ItemCard.css'

function ItemCard (props) {

  async function deleteItem(e) {
    let deleteItemId = e.target.id
    let res = await fetch('http://localhost:3008/delete/' + deleteItemId)
    props.discardItem(deleteItemId)
  }

  let item = props.itemObj
  let discardItem = props.discardItem

  return ( 
      <div className="itemC" id="{item._id}">
      <div className="itemHead">
        <input className="status" type="checkbox" />
      </div>
      <div className="itemHead">
        <h2 className="itemNameHeader" >{item.name}</h2>
      </div>
     <div className="collapsible-extras">
      <div className="itemNotes">
      <div className="notes"> <p className="item-notes"> {item.notes} </p> </div>
      </div>
      <p> Priority: {item.priority} </p>
      <p> Label: {item.label} </p>
        <button type="button" id={item._id} onClick={discardItem}> Delete Item</button>
      </div>
     </div>
  )

}

export default ItemCard;
