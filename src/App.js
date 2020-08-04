import React from 'react';
import './App.css';

// Cara 1
const Halow = (props) => {
  return(
    <>
      <h1>Hayyyy {props.namaSiapa}</h1>
    </>
  )
}

// Cara 2
class HaloKeles extends React.Component {
  render() {
    return (
      <>
        <h1>Ini HaloKeles {this.props.namaBebas}</h1>
      </>
    )
  }
}

class HaloNama extends React.Component {
  render() {
    return (
      <>
        <h1>Ini Nama Lengkapnya {this.props.namaLengkap}</h1>
      </>
    )
  }
}


function App() {
  var nama="Wilden"
  var namaLengkap = ["Wilden", "Ali"]
  return (
    <div className="App">
      <h1>Cek</h1>
      <Halow namaSiapa={nama}/>
      <HaloKeles namaBebas={nama}/>
      {
        namaLengkap.map(x => {
          return(
            <HaloNama namaLengkap={x} />
          )
        })
      }
    </div>
  );
}

export default App;
