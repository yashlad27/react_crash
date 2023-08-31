import React, { PureComponent } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

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

        <MemoComp name = {this.state.name} />

        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
