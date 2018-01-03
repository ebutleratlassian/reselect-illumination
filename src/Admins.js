import React from 'react'
import { getAdmins } from './selectors'

export const Admins = ({ state }) => {
  console.log(`Rendering Admins List`)

  const admins = getAdmins(state)

  return (
    <ul>
      <h2>Admins List</h2>
      {admins.map(admin => <li key={admin.name}>{admin.name}</li>)}
    </ul>
  )
}