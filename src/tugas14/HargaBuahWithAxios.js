import React, { useState } from 'react'

const HargaBuahWithAxios = () => {
  const[daftarHargaBuah, setDaftarHargaBuah] = useState([
    {nama: "Semangka",    harga: 10000, berat: 1000},
    {nama: "Anggur",      harga: 40000, berat: 500},
    {nama: "Strawberry",  harga: 30000, berat: 500},
    {nama: "Jeruk",       harga: 30000, berat: 1000},
    {nama: "Mangga",      harga: 30000, berat: 500},
  ])
  const[inputNama, setInputNama] = useState("")
  const[inputHarga, setInputHarga] = useState("")
  const[inputBerat, setInputBerat] = useState("")
  

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
              daftarHargaBuah.map((item, index) => {
                return(
                  <tr key={index}>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    <td>{item.berat/1000+' kg'}</td>
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
      <h1>Form Buah-Buahan</h1>
      <form>
        <label>
          Masukkan Nama, Harga, Berat:
        </label>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <button>submit</button>
      </form>
    </>
  )
}

export default HargaBuahWithAxios