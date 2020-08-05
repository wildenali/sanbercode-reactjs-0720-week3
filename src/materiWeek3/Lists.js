import React, { Component } from 'react'

class Lists extends Component {

  constructor(props){
    super(props)
    this.state={
      pesertaLomba: [ 'Budi', 'Susi', 'Lala', 'Agung' ],
      inputName: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ inputName: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      pesertaLomba: [...this.state.pesertaLomba, this.state.inputName],
      inputName: ""
    })
  }



  render() {
    return (
      <>
       <h1>Daftar Peserta</h1> 
       <tabel>
         <thead>
           <tr>
            <th>No</th>
            <th>Nama</th>
           </tr>
         </thead>
         <tbody>
           {
             this.state.pesertaLomba.map((val, index) => {
               return(
                 <tr>
                   <td>{index+1}</td>
                   <td>{val}</td>
                 </tr>
               )
             })
           }
         </tbody>
       </tabel>
       <form>
         <label>
           Masukkan nama peserta:
         </label>
         <input type="text" value={this.state.inputName} onChange={this.handleChange} />
         <input type="submit" value="Submit"/>
       </form>
      </>
    )
  }
}

export default Lists