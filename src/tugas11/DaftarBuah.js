import React, { Component } from 'react'
import ItemBuah from './ItemBuah'

class DaftarBuah extends Component {
  render() {
    let dataHargaBuah = [
      {nama: "Semangga",    harga: 10000, berat: 1000},
      {nama: "Anggur",      harga: 40000, berat: 500},
      {nama: "Strawberry",  harga: 30000, berat: 500},
      {nama: "Jeruk",       harga: 30000, berat: 1000},
      {nama: "Mangga",      harga: 30000, berat: 500},      
    ]
    return (
      <>
        <table style={{ border: "1px solid", width: "40%", margin: "0 auto" }}>
          <thead style= {{ backgroundColor: "#aaa" }}>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody style= {{ backgroundColor: "coral" }}>
            {
              dataHargaBuah.map((el, index) => {
                return(
                  <>
                    {/* { console.log(el) } */}
                    <ItemBuah item={el} key={index}/>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
  }
}

export default DaftarBuah