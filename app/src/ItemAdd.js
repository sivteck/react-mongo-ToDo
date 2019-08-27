import React from 'react'
import './ItemAdd.css'

class ItemAdd extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="itemV">
        <form id="ItemForm" onSubmit={this.props.updateView}>
          <div className="itemA">
            <input id="item-name" type="text" placeholder="Item Name" />
          </div>
        </form>
      </div>
    )
  }
}

export default ItemAdd
