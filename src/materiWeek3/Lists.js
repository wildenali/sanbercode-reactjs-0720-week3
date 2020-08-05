import React, { Component } from 'react'
import "./Lists.css"

class Lists extends Component {

  constructor(props){
    super(props)
    this.state={
      pesertaLomba: [ 'Budi', 'Susi', 'Lala', 'Agung' ],
      inputName: "",
      indexOfForm: -1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(event){
    let index = event.target.value
    let peserta = this.state.pesertaLomba[index]
    this.setState({inputName: peserta, indexOfForm: index})
  }

  handleChange(event){
    console.log(event)
    this.setState({ inputName: event.target.value })
  }

  handleSubmit(event){
    // Menahan submit
    event.preventDefault()

    let name = this.state.inputName

    if (name.replace(/\s/g,'') !== "") {
      let newPesertaLomba = this.state.pesertaLomba
      let index = this.state.indexOfForm

      if (index === -1) {
        newPesertaLomba = [...newPesertaLomba, name]
      } else {
        newPesertaLomba[index] = name
      }

      this.setState({
        pesertaLomba: newPesertaLomba,
        inputName: ""
      })
    }
  }



  render() {
    return (
      <>
        <h1>Daftar Peserta</h1> 
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.pesertaLomba.map((val, index) => {
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{val}</td>
                    <td>
                      <button onClick={this.handleEdit} value={index}>Edit</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
       {/* Form */}
        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Masukkan nama peserta:
          </label>          
          <input type="text" value={this.state.inputName} onChange={this.handleChange}/>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Lists