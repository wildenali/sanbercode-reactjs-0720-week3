import React, { Component } from 'react'

class Lists extends Component {

  constructor(props){
    super(props)
    this.state={
      pesertaLomba: [ 'Budi', 'Susi', 'Lala', 'Agung' ]
    }
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
         <input type="text" />
         <input type="submit" value="Submit"/>
       </form>
      </>
    )
  }
}

export default Lists