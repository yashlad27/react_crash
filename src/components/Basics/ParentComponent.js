// Using methods as props: 
// call a method using child component which is present in parent component. 

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        // alert('Hello ' + this.state.parentName)
        //  use ES6 string concatenation
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent} />  
        {/* passing a reference to the greetParent method as a prop called GreetHandler */}
      </div>
    )
  }
}

export default ParentComponent
