import React, {useContext, useState} from "react"
import { HargaBuahContext } from "./HargaBuahContext"  // import { MovieContext } from "./MovieContext"

const HargaBuahForm = () =>{
  const [dataHargaBuah] = useContext(HargaBuahContext)
  // const [name, setName] = useState("")
  // const [lengthOfTime, setLengthOfTime] = useState(0)
  // const [movie, setMovie] = useContext(MovieContext)

  // const handleSubmit = (event) =>{
  //   event.preventDefault()
  //   setMovie([...movie, {name, lengthOfTime}])
  //   setName("")
  //   setLengthOfTime("")
  // }
  // const handleChangeName = (event) =>{
  //   setName(event.target.value)
  // }

  // const handleChangeTime = (event) =>{
  //   setLengthOfTime(event.target.value)
  // }

  return(
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChangeName} />
        <input type="number" value={lengthOfTime} onChange={handleChangeTime} />
        <button>submit</button>
      </form> */}
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
            {console.log(dataHargaBuah)}
            {
              dataHargaBuah !== null && dataHargaBuah.map((item, index) => {
                return(
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight/1000+' kg'}</td>
                    <td>
                      <button value={item.id}>Edit</button>
                      &nbsp;
                      <button value={item.id}>Delete</button>
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
          <input type="text" name = 'name'/>
          <input type="text" name = 'price'/>
          <input type="text" name = 'weight'/>
          <button>submit</button>
        </form>

        {/* <h1>Tabel Harga Buah</h1>
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
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight/1000+' kg'}</td>
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
        <input type="text" name = 'name' value={inputNama} onChange={handleChangeNama}/>
        <input type="text" name = 'price' value={inputHarga} onChange={handleChangeHarga}/>
        <input type="text" name = 'weight' value={inputBerat} onChange={handleChangeBerat}/>
        <button>submit</button>
      </form> */}
    </>
  )

}

export default HargaBuahForm