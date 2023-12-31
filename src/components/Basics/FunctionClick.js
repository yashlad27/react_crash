// Event handling in React js

import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button Clicked!")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

// React Events are named using CamelCase rather than lowercase

// onClick = {clickHandler()} -> function call -> we dont want this
// onClick = {clickHandler} -> passing a function
// event handler is a function and not a function call 

// problem occurs in Class components when whole page renders on click of a button.