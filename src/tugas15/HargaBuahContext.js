import React, { useState, createContext } from "react";

export const HargaBuahContext = createContext();

export const HargaBuahProvider = props => {
  const[dataHargaBuah, setDataHargaBuah] = useState(
    [
      {name: "Semangka",    price: 10000, weight: 1000},
      {name: "Anggur",      price: 40000, weight: 500},
      {name: "Strawberry",  price: 30000, weight: 500},
      {name: "Jeruk",       price: 30000, weight: 1000},
      {name: "Mangga",      price: 30000, weight: 500},
    ]
  );

  return (
    <HargaBuahContext.Provider value={[dataHargaBuah, setDataHargaBuah]}>
      {props.children}
    </HargaBuahContext.Provider>
  );
};