import React, { Component } from 'react'

class DaftarBuahTugas13 extends Component {
  constructor(props){
    super(props)
    this.state={
      dataHargaBuah: [
        {nama: "Semangka",    harga: 10000, berat: 1000},
        {nama: "Anggur",      harga: 40000, berat: 500},
        {nama: "Strawberry",  harga: 30000, berat: 500},
        {nama: "Jeruk",       harga: 30000, berat: 1000},
        {nama: "Mangga",      harga: 30000, berat: 500},
      ],
      inputName: "",
      inputHarga: null,
      inputBerat: null,
      indexOfForm: -1
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHargaChange = this.handleHargaChange.bind(this);
    this.handleBeratChange = this.handleBeratChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    if (this.state.inputName.replace(/\s/g,'') !== "" && this.state.inputHarga !== "" && this.state.inputBerat !== ""){
        let dataHargaBuahBaru = this.state.dataHargaBuah
        if (this.state.indexOfForm === -1){
          dataHargaBuahBaru = [...dataHargaBuahBaru,{nama: this.state.inputName, harga: this.state.inputHarga, berat: this.state.inputBerat}]
        }
        else {
          dataHargaBuahBaru[this.state.indexOfForm] = {nama: this.state.inputName, harga: this.state.inputHarga, berat: this.state.inputBerat}
        }
        this.setState({
          dataHargaBuah: dataHargaBuahBaru,
          inputName: "",
          inputHarga: "",
          inputBerat: "",
          indexOfForm: -1
        }
      )
    }
  }

  handleEdit(event){
    let index = event.target.value;
    let buahBaru = this.state.dataHargaBuah[index];
    console.log(buahBaru);
    this.setState({
        inputName: buahBaru.nama,
        inputHarga: buahBaru.harga,
        inputBerat: buahBaru.berat,
        indexOfForm: index
    });
  }
  
  handleDelete(event){
    let index = event.target.value;
    let buah = this.state.dataHargaBuah;
    let editedBuah = buah[this.state.indexOfForm];
    console.log(editedBuah);
    buah.splice(index,1);
    if(editedBuah !== undefined){
        var indexBaru = buah.findIndex((el) => el === editedBuah);
        this.setState({
            dataHargaBuah: buah,
            indexOfForm: indexBaru
        });
    }
    else{
        this.setState({
            dataHargaBuah: buah
        });
    }
  }

  render() {
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
              this.state.dataHargaBuah.map((el, index) => {
                return(
                  <tr>
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat/1000+' kg'}</td>
                    <td>
                      <button onClick={this.handleEdit} value={index}>Edit</button>
                      &nbsp;
                      <button onClick={this.handleDelete} value={index}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Masukkan Nama, Harga, Berat:
          </label>
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