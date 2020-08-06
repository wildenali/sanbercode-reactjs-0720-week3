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
import React, { useState, useEffect } from 'react'
import "./HooksAndAxios.css"
import axios from 'axios'

const HooksAndAxios = () => {
  // Deklarasi variable state baru ygn kita sebut "count"
  const [pesertaLomba, setPesertaLomba] = useState([])  // const [pesertaLomba, setPesertaLomba] = useState([ 'Budi', 'Susi', 'Lala', 'Agung' ])
  const [inputName, setInputName] = useState('')
  const [indexOfForm, setIndexOfForm] = useState(-1)

  useEffect( () => {
    axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
      .then(res => {
        // Lakukan pengolahan data
        console.log(res)
        console.log(res.data)
        setPesertaLomba(res.data.map(el => {
          return {
            id: el.id,
            nama: el.name
          }})
        )
      })
  })
  
  const handleChange = (event) => {
    console.log(handleChange)
    setInputName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    // Menahan submit
    event.preventDefault()
    let name = inputName

    if (name.replace(/\s/g,'') !== "") {
      let newPesertaLomba = pesertaLomba
      let index = indexOfForm

      if (index === -1) {
        newPesertaLomba = [...newPesertaLomba, name]
      } else {
        newPesertaLomba[index] = name
      }
      setPesertaLomba(newPesertaLomba)
      setInputName("")
    }
    
  }

  const handleDelete = (event) => {
    let index = event.target.value
    let newPesertaLomba = pesertaLomba
    let editedPeserta = newPesertaLomba[indexOfForm]
    newPesertaLomba.splice(index, 1)

    if (editedPeserta !== undefined) {
      // array findIndex baru di ES6
      var newIndex = newPesertaLomba.findIndex((el) => el === editedPeserta)
      setPesertaLomba([...newPesertaLomba])
      setIndexOfForm(newIndex)
    } else {
      setPesertaLomba([...newPesertaLomba])
    }
  }
  
  const handleEdit = (event) => {
    let index = event.target.value
    let peserta = pesertaLomba[index]
    setInputName(peserta)
    setIndexOfForm(index)
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
            pesertaLomba.map((item, index) => {
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.nama}</td>
                  <td>
                    <button value={index} onClick={handleEdit}>Edit</button>
                    &nbsp;
                    <button value={index} onClick={handleDelete}>Delete</button>
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