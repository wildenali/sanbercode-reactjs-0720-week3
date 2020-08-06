import React, { useState, useEffect } from 'react'

function Hooks_useEffect() {
  const [count, setCount] = useState(0);

  // Mirip dengan componentDidMount dan componentDidUpdate
  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    document.title = `Coba di klik ini, udah berapa ${count} kelik`
  });

  return(
    <div>
      <p>Yout clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click DOng</button>
    </div>
  );
}

export default Hooks_useEffect