import React from 'react';
import './App.css';
import DaftarBuah from './tugas11/DaftarBuah';
import Timer from './timer/Timer';
import ClockAndHitungMundur from './tugas12/ClockAndHitungMundur';
import Lists from './materiWeek3/Lists';
import DaftarBuahTugas13 from './tugas13/DaftarBuahTugas13';
import HooksAndAxios from './materiWeek3/HooksAndAxios';
import Hooks_useEffect from './materiWeek3/Hooks_useEffect';
import HargaBuahWithAxios from './tugas14/HargaBuahWithAxios';
import Movie from './materiWeek3/Movie';
import HargaBuahTugas15 from './tugas15/HargaBuahTugas15';
import RouterDasar from './materiWeek3/RouterDasar';

function App() {
  return(
    <div>
      {/* tugas11 */}
      {/* <DaftarBuah /> */}

      {/* materi hari ke 2, timer component */}
      {/* <Timer /> */}

      {/* tugas12 */}
      {/* <ClockAndHitungMundur start={100}/> */}

      {/* Materi Hari ke 3, List */}
      {/* <Lists /> */}

      {/* tugas13 */}
      {/* <DaftarBuahTugas13 /> */}

      {/* Materi Hari ke 4, Hooks dan Axios */}
      {/* <HooksAndAxios /> */}
      {/* <Hooks_useEffect /> */}

      {/* tugas14 */}
      {/* <HargaBuahWithAxios /> */}

      {/* Materi Hari ke 5, Context */}
      {/* <Movie /> */}
      <RouterDasar />

      {/* tugas15 */}
      {/* <HargaBuahTugas15 /> */}

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