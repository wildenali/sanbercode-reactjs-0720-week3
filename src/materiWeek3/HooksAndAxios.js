// Contoh Componen Class
/*
import React, { Component } from 'react'

class HooksAndAxios extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Anda menekan sebanyak {this.state.count} kali</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Klik Saya</button>
      </div>
    )
  }

}
export default HooksAndAxios
*/

// Contoh Component dengan Hooks
import React, { useState } from 'react'

const HooksAndAxios = () => {
  // Deklarasi variable state baru ygn kita sebut "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>ANda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
    </div>
  );
}
export default HooksAndAxios