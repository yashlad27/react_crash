import React from 'react'

// create an object for any part of webpage and add attributes like heading along with different css specifications.

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline