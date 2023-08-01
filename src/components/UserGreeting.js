// Conditional Rendering
// 1. if/else
// 2. element variables
// 3. ternary conditional operator
// 4. short circuit operator

import React, { Component } from 'react'

class UserGreeting extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
    
    render() {

        // Method-3 -> Ternary Conditional Operator 
        // return (
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Yash</div> 
        //     ) : ( 
        //     <div>Welcome Guest </div>
        //     )
        // )

        // Method-2: Element Variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome yash!</div>
        // } else {
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>

        // Method-1: If-else Conditional Rendering
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome yash!</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome guest</div>
        //     )
        // }

    // Method with no Conditional Rendering
    // return (
    //   <div>
    //     <div>Welcome yash!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting
