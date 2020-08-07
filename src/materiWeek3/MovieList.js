import React, {useContext} from "react"
import {MovieContext} from "./MovieContext"

const MovieList = () =>{
  const [movie] = useContext(MovieContext)

  return(
    <ul>
      {console.log(movie)}
      {movie.map(el=>{
        return <li>name: {el.name} {el.lengthOfTime} minutes</li>
      })}
    </ul>
  )

}

export default MovieList