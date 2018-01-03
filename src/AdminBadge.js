import React from 'react'
import { isCurrentAdmin, getCurrentUser } from './selectors'

export const AdminBadge = ({ state }) => {
  const isAdmin = isCurrentAdmin(state)
  const username = getCurrentUser(state)

  return isAdmin ? <div>🔑 Admin Mode! User: {username}</div> : null
}