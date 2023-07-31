// Binding Event Handlers:
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      this.clickHandler = this.clickHandler.bind(this) // third method of binding
    }

    clickHandler() {
        // this snippet breaks the app -> 
        this.setState({
            message: "Goodbye!"
        })  

        console.log(this) // value comes to be -> undefined 
        // thus event handling is very necessary in react project
    }
    
  render() {
    return (
      <div>
        <div>
            {this.state.message}
        </div>
        {/* First method -> use "bind" in render
        1. works well for small applications as it re renders the whole app
        2. may cause performance errors in largescale apps 
        3. and apps with nested childrens
        */}

        {/* <button onClick={this.clickHandler.bind(this)}>Click!</button> */}

        {/* Second Method -> Use of "Arrow Functions" in render
        Here we are calling the clickHandler function using the paraenthesis and giving it's value 
        */}
        
        {/* <button onClick={() => this.clickHandler()}>Click!</button> */}

        {/* Third Method -> we bind the event handler in the class "constructor" of the component
        method is used and reccommended in React JS docs. */}

        <button onClick={this.clickHandler}>Click!</button>
      </div>
    )
  }
}

export default EventBind
