import React, { useState, useEffect  } from 'react'
import axios from 'axios'

const HargaBuahWithAxios = () => {
  const[dataHargaBuah, setDataHargaBuah] = useState(null)
  const[inputNama, setInputNama] = useState("")
  const[inputHarga, setInputHarga] = useState("")
  const[inputBerat, setInputBerat] = useState("")
  const[selectedId, setSelectedId] = useState(0)
  const[statusForm, setStatusForm] = useState("create")
  
  useEffect( () => {
    if(dataHargaBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          setDataHargaBuah(res.data.map(el=>{return {id: el.id, nama: el.name, harga:el.price, berat:el.weight}}))
        })
    }
  },[dataHargaBuah])

  const handleChangeNama = (event) => {
    setInputNama(event.target.value)
  }
  const handleChangeHarga = (event) => {
    setInputHarga(event.target.value)
  }
  const handleChangeBerat = (event) => {
    setInputBerat(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    let name = inputNama
    let price = inputHarga
    let weight = inputBerat

    if ((name.replace(/\s/g,'') !== "") && (price.toString().replace(/\s/g,'') !== "") && (weight.toString().replace(/\s/g,'') !== "")){
      if (statusForm === "create") {
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
        .then(res => {
            setDataHargaBuah([...dataHargaBuah, {id: res.data.id, name: name, price: price, weight: weight}])
        })
      } else if(statusForm === "edit"){
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
            .then(res => {
              let dataBuah = dataHargaBuah.find(el => el.id === selectedId)
                dataBuah.nama = name
                dataBuah.harga = price
                dataBuah.berat = weight
                setDataHargaBuah([...dataHargaBuah])
              })
        }
        setStatusForm("create")
        setSelectedId(0)
        setInputNama("")
        setInputHarga("")
        setInputBerat("")
    }
  }

  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value)
    let buah = dataHargaBuah.find(x => x.id === idBuah)
    console.log(idBuah)
    console.log(buah)
    setInputNama(buah.nama)
    setInputHarga(buah.harga)
    setInputBerat(buah.berat)
    setSelectedId(idBuah)
    setStatusForm("edit")
  }

  const handleDelete=(event)=>{
    let idBuah= parseInt(event.target.value);
    let newDataBuah = dataHargaBuah.filter(el => el.id !== idBuah)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
    .then(res => {
        console.log(res)
    })
    setDataHargaBuah([...newDataBuah])
  }

  return (
    <>
      <h1>Tabel Harga Buah</h1>
        <table style={{ border: "1px solid", width: "40%", margin: "0 auto" }}>
          <thead style= {{ backgroundColor: "#aaa" }}>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody style= {{ backgroundColor: "coral" }}>
            {
              dataHargaBuah !== null && dataHargaBuah.map((item, index) => {
                return(
                  <tr key={index}>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    <td>{item.berat/1000+' kg'}</td>
                    <td>
                      <button value={item.id} onClick={handleEdit}>Edit</button>
                      &nbsp;
                      <button value={item.id} onClick={handleDelete} >Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>
      <h1>Form Buah-Buahan</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan Nama, Harga, Berat:
        </label>
        <input type="text" value={inputNama} onChange={handleChangeNama}/>
        <input type="text" value={inputHarga} onChange={handleChangeHarga}/>
        <input type="text" value={inputBerat} onChange={handleChangeBerat}/>
        <button>submit</button>
      </form>
    </>
  )
}

export default HargaBuahWithAxios