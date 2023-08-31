import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    // Mounting Lifecycle Components
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

    // Update Lifecycle Components
    shouldComponentUpdate() {
        console.log('lifecycleA shouldComponentUpdate')
    }
    
    getSnapshotBeforeUpdate() {
      console.log('LifecycleA getSnapshotbeforeupdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifeCycleA component did Update')
    }

    changeState = () => {
      this.setState({
        name: 'Stated is changed!'
      })
    }
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>Lifecycle A</div>
        <LifeCycleB /> 
        {/* Checking child component Behaviour in mounting */}

        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}

export default LifeCycleA
