import React from 'react';
import './App.css';
import DaftarBuah from './tugas11/DaftarBuah';

function App() {
  return(
    <div>
      <DaftarBuah />
    </div>
  )
}

export default App;

/*
// Latihan props
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
  
  // Latihan props
  var nama="Wilden"
  var namaLengkap = ["Wilden", "Ali"]
  
  return (
    // Latihan props
    <div className="App">
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
    
   <div>

   </div>
  );
}

export default App;
*/