import React, { Component } from 'react'
import ItemBuahTugas13 from './ItemBuahTugas13'

class DaftarBuahTugas13 extends Component {
  constructor(props){
    super(props)
    this.state={
      dataHargaBuah: [
        {no: 1, nama: "Semangga",    harga: 10000, berat: 1000},
        {no: 2, nama: "Anggur",      harga: 40000, berat: 500},
        {no: 3, nama: "Strawberry",  harga: 30000, berat: 500},
        {no: 4, nama: "Jeruk",       harga: 30000, berat: 1000},
        {no: 5, nama: "Mangga",      harga: 30000, berat: 500},
      ],
      inputNo: null,
      inputName: "",
      inputHarga: null,
      inputBerat: null,
      indexOfForm: -1
    }

    this.handleNoChange = this.handleNoChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHargaChange = this.handleHargaChange.bind(this);
    this.handleBeratChange = this.handleBeratChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNoChange(event){
    this.setState({ inputNo: event.target.value })
  }
  handleNameChange(event){
    this.setState({ inputName: event.target.value })
  }
  handleHargaChange(event){
    this.setState({ inputHarga: event.target.value })
  }
  handleBeratChange(event){
    this.setState({ inputBerat: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    const dataBaru = {no: this.state.inputNo, nama: this.state.inputName,    harga: this.state.inputHarga, berat: this.state.inputBerat }
    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah, dataBaru],
      inputNo: null,
      inputName: "",
      inputHarga: null,
      inputBerat: null
    })
  }
  

  render() {
    return (
      <>
        <h1>Tabel Harga Buah</h1>
        <table style={{ border: "1px solid", width: "40%", margin: "0 auto" }}>
          <thead style= {{ backgroundColor: "#aaa" }}>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody style= {{ backgroundColor: "coral" }}>
            {
              this.state.dataHargaBuah.map((el, index) => {
                return(
                  <>
                    {/* { console.log(el) } */}
                    <ItemBuahTugas13 item={el} key={index}/>
                  </>
                )
              })
            }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Masukkan No, Nama, Harga, Berat:
          </label>
          <input type="text" value={this.state.inputNo} onChange={this.handleNoChange}/>
          <input type="text" value={this.state.inputName} onChange={this.handleNameChange}/>
          <input type="text" value={this.state.inputHarga} onChange={this.handleHargaChange}/>
          <input type="text" value={this.state.inputBerat} onChange={this.handleBeratChange}/>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default DaftarBuahTugas13