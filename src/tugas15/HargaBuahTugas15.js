import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import { HargaBuahProvider } from './HargaBuahContext'
import HargaBuahList from './HargaBuahList'
import HargaBuahForm from './HargaBuahForm'

const HargaBuahTugas15 = () => {
  // const[dataHargaBuah, setDataHargaBuah] = useState(
  //   [
  //     {name: "Semangka",    price: 10000, weight: 1000},
  //     {name: "Anggur",      price: 40000, weight: 500},
  //     {name: "Strawberry",  price: 30000, weight: 500},
  //     {name: "Jeruk",       price: 30000, weight: 1000},
  //     {name: "Mangga",      price: 30000, weight: 500},
  //   ]
  // )
  // const[inputNama, setInputNama] = useState("")
  // const[inputHarga, setInputHarga] = useState("")
  // const[inputBerat, setInputBerat] = useState("")
  // const[selectedId, setSelectedId] = useState(0)
  // const[statusForm, setStatusForm] = useState("create")
  
  // useEffect( () => {
  //   if(dataHargaBuah === null){
  //       axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
  //       .then(res => {
  //         setDataHargaBuah(res.data.map(el=>{return {id: el.id, name: el.name, price:el.price, weight:el.weight}}))
  //       })
  //   }
  // },[dataHargaBuah])

  // const handleChangeNama = (event) => {
  //   setInputNama(event.target.value)
  // }
  // const handleChangeHarga = (event) => {
  //   setInputHarga(event.target.value)
  // }
  // const handleChangeBerat = (event) => {
  //   setInputBerat(event.target.value)
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   let name = inputNama
  //   let price = inputHarga
  //   let weight = inputBerat

  //   if ((name.replace(/\s/g,'') !== "") && (price.toString().replace(/\s/g,'') !== "") && (weight.toString().replace(/\s/g,'') !== "")){
  //     if (statusForm === "create") {
  //       axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
  //       .then(res => {
  //           setDataHargaBuah([...dataHargaBuah, {id: res.data.id, name: name, price: price, weight: weight}])
  //       })
  //     } else if(statusForm === "edit"){
  //         axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
  //           .then(res => {
  //             let dataBuah = dataHargaBuah.find(el => el.id === selectedId)
  //               dataBuah.name = name
  //               dataBuah.price = price
  //               dataBuah.weight = weight
  //               setDataHargaBuah([...dataHargaBuah])
  //             })
  //       }
  //       setStatusForm("create")
  //       setSelectedId(0)
  //       setInputNama("")
  //       setInputHarga("")
  //       setInputBerat("")
  //   }
  // }

  // const handleEdit = (event) => {
  //   let idBuah = parseInt(event.target.value)
  //   let buah = dataHargaBuah.find(x => x.id === idBuah)
  //   console.log(idBuah)
  //   console.log(buah)
  //   setInputNama(buah.name)
  //   setInputHarga(buah.price)
  //   setInputBerat(buah.weight)
  //   setSelectedId(idBuah)
  //   setStatusForm("edit")
  // }

  // const handleDelete=(event)=>{
  //   let idBuah= parseInt(event.target.value);
  //   let newDataBuah = dataHargaBuah.filter(el => el.id !== idBuah)
  //   axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
  //   .then(res => {
  //       console.log(res)
  //   })
  //   setDataHargaBuah([...newDataBuah])
  // }

  return (
    <>
      <HargaBuahProvider>
        <HargaBuahList />
        <HargaBuahForm />
      </HargaBuahProvider>
    </>
  )
}

export default HargaBuahTugas15