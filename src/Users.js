import React from 'react'

export const Users = ({ state }) => {
  return (
    <div>
      <h3>All Users</h3>
      {state.users.map(user => {
        return (
          <div key={user.name}>
            {user.isAdmin && 'Admin '}
            {user.name} has {user.reports} reports.
          </div>
        )
      })}
    </div>
  )
}
