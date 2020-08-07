import React, {useContext} from "react"
import { HargaBuahContext } from "./HargaBuahContext"

const HargaBuahList = () =>{
  const [dataHargaBuah] = useContext(HargaBuahContext)

  return(
    <ul>
      {/* {console.log(dataHargaBuah)} */}
      {
        // dataHargaBuah.map(el=>{
        //   return <li>NAME: {el.name} PRICE: {el.price} WIGHT: {el.weight} </li>
        // })
      }
    </ul>
  )

}

export default HargaBuahList