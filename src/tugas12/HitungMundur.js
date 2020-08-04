import React, { Component } from 'react'

class HitungMundur extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      date: new Date(),
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined) {
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(){
    if (this.state.time < 0) {
      this.componentWillUnmount()
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      time: this.state.time - 1,
      date: new Date()
    })
  }

  render(){
    return(
      <>
        {this.state.time >= 0 &&
          <div style={{ width: "100%", margin: "0px auto", marginTop: "20px"}}>
            <div style={{ display: "block" }}>
              <div style={{ textAlign: "left", display: "inline-block", width: "50%"}}>
                <h1>
                  Sekarang jam : {this.state.date.toLocaleTimeString()}
                </h1>
              </div>
              <div style={{ textAlign: "right", display: "inline-block", width: "50%"}}>
                <h1>
                  hitung mundur: {this.state.time}
                </h1>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default HitungMundur