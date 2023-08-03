import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yash'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log('LifecycleA getDerivedStateFromProps')
      return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        Lifecycle A
      </div>
    )
  }
}

export default LifeCycleA
