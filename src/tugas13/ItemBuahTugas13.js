import React, { Component } from 'react'

class ItemBuahTugas13 extends Component {
  constructor(props){
    super(props)
    this.state={
      inputName: "",
      indexOfForm: -1
    }
  }
  

  render(){
    return(
      <tr>
        {/* <td>{this.props.key.index+1}</td> */}
        <td>{this.props.item.no}</td>
        <td>{this.props.item.nama}</td>
        <td>{this.props.item.harga}</td>
        <td>{this.props.item.berat/1000} kg</td>
        <td>
          <button >Edit</button>
          &nbsp;
          <button onClick={this.handleDelete} value={this.props.index}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default ItemBuahTugas13