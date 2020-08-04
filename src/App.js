import React from 'react';
import './App.css';

// Cara 1
const Halow = () => {
  return(
    <>
      <h1>Hayyyy</h1>
    </>
  )
}

// Cara 2
class HaloKeles extends React.Component {
  render() {
    return (
      <>
        <h1>Ini HaloKeles</h1>
      </>
    )
  }
}


function App() {
  return (
    <div className="App">
      <h1>Cek</h1>
      <Halow />
      <HaloKeles />
    </div>
  );
}

export default App;
