import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'

import Tugas11 from '../tugas11/DaftarBuah'
import Tugas12 from '../tugas12/ClockAndHitungMundur'
import Tugas13 from '../tugas13/DaftarBuahTugas13';
import Tugas14 from '../tugas14/HargaBuahWithAxios';
import Tugas15 from './HargaBuahTugas15';
import "../App.css"

const RoutesTugas15 = () => {
  return (
    <>
      <nav className="topnav">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/tugas11">Tugas 11</Link>
        </a>
        <a>
          <Link to="/tugas12">Tugas 12</Link>
        </a>
        <a>
          <Link to="/tugas13">Tugas 13</Link>
        </a>
        <a>
          <Link to="/tugas14">Tugas 14</Link>
        </a>
        <a>
          <Link to="/tugas15">Tugas 15</Link>
        </a>
      </nav>
      <br/>
      <Switch>
        <Route exact path="/"><h1 className="App">Tugas 15 Router</h1></Route>
        <Route path="/tugas11"><Tugas11 /></Route>
        <Route path="/tugas12"><Tugas12 start={100}/></Route>
        <Route path="/tugas13"><Tugas13 /></Route>
        <Route path="/tugas14"><Tugas14 /></Route>
        <Route path="/tugas15"><Tugas15 /></Route>
      </Switch>

    </>
  )
}

export default RoutesTugas15;