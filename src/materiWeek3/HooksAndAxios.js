// Contoh Componen Class
/*
import React, { Component } from 'react'

class HooksAndAxios extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Anda menekan sebanyak {this.state.count} kali</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Klik Saya</button>
      </div>
    )
  }

}
export default HooksAndAxios
*/

// Contoh Component dengan Hooks
/*
import React, { useState } from 'react'

const HooksAndAxios = () => {
  // Deklarasi variable state baru ygn kita sebut "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>ANda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
    </div>
  );
}
export default HooksAndAxios
*/

// Contoh kasus Hooks pada Latihan Peserta Lomba
import React, { useState } from 'react'
import "./HooksAndAxios.css"

const HooksAndAxios = () => {
  // Deklarasi variable state baru ygn kita sebut "count"
  const [pesertaLomba, setPesertaLomba] = useState([ 'Budi', 'Susi', 'Lala', 'Agung' ])
  const [inputName, setInputName] = useState('')

  const handleChange = (event) => {
    console.log(handleChange)
    setInputName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    // Menahan submit
    event.preventDefault()
    let name = inputName
    let newPesertaLomba = [...pesertaLomba, name]
    setPesertaLomba(newPesertaLomba)
    setInputName("")
  }
  

  return (
    <>
      <h1>Daftar Peserta Lomba</h1>
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
            pesertaLomba.map((val, index) => {
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val}</td>
                  <td>
                    <button value={index}>Edit</button>
                    &nbsp;
                    <button value={index}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <h1>Form Peserta</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan nama peserta:
        </label>          
        <input type="text" value={inputName} onChange={handleChange}/>
        <button>submit</button>
      </form>
    </>
  );
}
export default HooksAndAxios