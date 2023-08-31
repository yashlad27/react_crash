import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export class ParentComp extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            name:'Yash'
        }
    }

    componentDidCatch() {
        setInterval(() => {
            this.setState({
                name:'Yash'
            })
        }, 2000)
    }

  render() {

    console.log("***************** Parent Comp Render *****************")
    return (
      <div>
        Parent Component

        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
