import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yash'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log('LifecycleB getDerivedStateFromProps')
      return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifeCycleB
