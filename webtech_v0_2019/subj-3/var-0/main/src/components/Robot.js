import React, { Component } from 'react'

class Robot extends Component {
  render() {
    const { item, onDelete } = this.props
    const deleteRobot = ()=>{
      onDelete(item.id)
    } 
    return (
      <div>
        <div>
          Hi i am robot {item.id + " " + item.name + " " + item.mass + " " + item.type}
        </div>
        <div>
          <input type="button" value="delete" onClick={deleteRobot} />
        </div>

      </div>

    )
  }
}

export default Robot