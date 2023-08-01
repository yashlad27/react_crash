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
        isLoggedIn: false
      }
    }
    
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome yash!</div>
            )
        } else {
            return (
                <div>Welcome guest</div>
            )
        }
    // return (
    //   <div>
    //     <div>Welcome yash!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting
