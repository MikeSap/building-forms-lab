import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    text:""
  }

  handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state.text)
    this.setState({text:""})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="text" type="text" value={this.state.text}/>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
