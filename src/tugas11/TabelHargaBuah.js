import React from 'react'

const TabelHargaBuah = (props) => {
  return (
    <>
      <h1>Tabel Harga Buah</h1>
      <table border="1">
        <tr>
          <td>Nama</td>
          <td>Harga</td>
          <td>Berat</td>
        </tr>
        <tr>
          <td>Semangka</td>
          <td>10000</td>
          <td>1 Kg</td>
        </tr>
        <tr>
          <td>Anggur</td>
          <td>40000</td>
          <td>0.5 Kg</td>
        </tr>
        <tr>
          <td>Strawberry</td>
          <td>30000</td>
          <td>0.4 Kg</td>
        </tr>
        <tr>
          <td>Jeruk</td>
          <td>30000</td>
          <td>1 Kg</td>
        </tr>
        <tr>
          <td>Mangga</td>
          <td>30000</td>
          <td>0.5 Kg</td>
        </tr>
      </table>
    </>
  )
}

export default TabelHargaBuah
