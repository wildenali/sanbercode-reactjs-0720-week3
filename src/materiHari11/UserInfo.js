import React, { Component } from 'react'
import Welcome from './Welcome'
import ShowAge from './ShowAge'

var person = [
  {name: "sarah", age: 25},
  {name: "michael", age: 30},
  {name: "john", age: 33}
]

class UserInfo extends Component {
  render() {
    return (
      <>
        {person.map(el=> {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <Welcome name={el.name}/> 
              <ShowAge age={el.age}/> 
            </div>
          )
        })}
      </>
    )
  }
}

export default UserInfo