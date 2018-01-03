import { createSelector } from 'reselect';

export const getUsers = state => {
  console.log(`Selecting Users`)
  return state.users
}

export const getCurrentUser = state => {
  console.log(`Selecting Current User`);
  return state.currentUser
}

export const getAdmins = createSelector(
  getUsers,
  users => {
    console.log(`Filtering Admins`);
    return users.filter(user => user.isAdmin)
  }
)

export const getReporters = createSelector(
  getUsers,
  users => {
    console.log(`Filtering Reporters`);
    return users.filter(user => user.reports > 0)
  }
)

export const isCurrentAdmin = createSelector(
  getCurrentUser,
  getAdmins,
  (currentUser, admins) => {
    console.log(`Selecting Current Admin`);
    return !!admins.find(admin => admin.name === currentUser)
  }
)