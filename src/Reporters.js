import React from 'react'
import { getReporters } from './selectors'

export const Reporters = ({ state }) => {
  console.log(`Rendering Reporters`)

  const reporters = getReporters(state)

  return (
    <ul>
      <h2>Reporters List</h2>
      {reporters.map(reporter => <li key={reporter.name}>{reporter.name}</li>)}
    </ul>
  )
}