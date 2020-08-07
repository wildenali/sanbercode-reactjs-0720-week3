import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
export const HargaBuahContext = createContext();

export const HargaBuahProvider = props => {
  const[dataHargaBuah, setDataHargaBuah] = useState(null);
  // const[dataHargaBuah, setDataHargaBuah] = useState(
  //   [
  //     {name: "Semangka",    price: 10000, weight: 1000},
  //     {name: "Anggur",      price: 40000, weight: 500},
  //     {name: "Strawberry",  price: 30000, weight: 500},
  //     {name: "Jeruk",       price: 30000, weight: 1000},
  //     {name: "Mangga",      price: 30000, weight: 500},
  //   ]
  // );

  useEffect( () => {
    if(dataHargaBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          setDataHargaBuah(res.data.map(el=>{return {id: el.id, name: el.name, price:el.price, weight:el.weight}}))
        })
    }
  },[dataHargaBuah])

  return (
    <HargaBuahContext.Provider value={[dataHargaBuah, setDataHargaBuah]}>
      {props.children}
    </HargaBuahContext.Provider>
  );
};