import React from 'react'

function Person({person}) {
  return (
    <h2>I am {person.name} and my age is {person.age} and I am skilled in {person.skill}.</h2>
  )
}

export default Person
