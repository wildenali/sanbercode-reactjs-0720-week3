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
  // Deklarasi variable state baru
  const [pesertaLomba, setPesertaLomba] = useState(null)  // const [pesertaLomba, setPesertaLomba] = useState([ 'Budi', 'Susi', 'Lala', 'Agung' ])
  const [inputName, setInputName] = useState('')
  const [selectedId, setSelectedId]  =  useState(0)
  const [statusForm, setStatusForm]  =  useState("create")

  useEffect( () => {
    if (pesertaLomba === null) {
      axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
        .then(res => {
          // Lakukan pengolahan data
          // console.log(res)
          // console.log(res.data)
          setPesertaLomba(res.data.map(el => {
            return {
              id: el.id,
              nama: el.name
            }})
          )
        }
      )
    }

  })
  
  const handleChange = (event) => {
    console.log(handleChange)
    setInputName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    // Menahan submit
    event.preventDefault()
    let name = inputName

    if (name.replace(/\s/g,'') !== ""){      
      if (statusForm === "create"){        
        axios.post(`http://backendexample.sanbercloud.com/api/contestants`, {name})
        .then(res => {
            setPesertaLomba([...pesertaLomba, {id: res.data.id, nama: name}])
        })
      }else if(statusForm === "edit"){
        axios.put(`http://backendexample.sanbercloud.com/api/contestants/${selectedId}`, {name})
        .then(res => {
            let dataPeserta = pesertaLomba.find(el=> el.id === selectedId)
            dataPeserta.nama = name
            setPesertaLomba([...pesertaLomba])
        })
      }
      
      setStatusForm("create")
      setSelectedId(0)
      setInputName("")
    }
    
  }

  const handleDelete = (event) => {
    let idPeserta = parseInt(event.target.value)

    let newPesertaLomba = pesertaLomba.filter(el => el.id != idPeserta)

    axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
      .then(res => {
        console.log(res)
      }
    )

    setPesertaLomba([...newPesertaLomba])
  }
  
  const handleEdit = (event) =>{
    let idPeserta = parseInt(event.target.value)
    let peserta = pesertaLomba.find(x=> x.id === idPeserta)
    setInputName(peserta.nama)
    setSelectedId(idPeserta)
    setStatusForm("edit")
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
            pesertaLomba !== null && pesertaLomba.map((item, index) => {
              return(
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.nama}</td>
                  <td>
                    <button value={item.id} onClick={handleEdit}>Edit</button>
                    &nbsp;
                    <button value={item.id} onClick={handleDelete}>Delete</button>
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