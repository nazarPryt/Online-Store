import React from 'react'

import { GetAllUsersTC } from '../../../../store/admin/admin.thunks'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../utils/hooks/redux-hooks'

export const ShowAllUsers = () => {
  const dispatch = useAppDispatch()
  const allUsers = useAppSelector((state) => state.admin.users)

  const handleGetUsers = () => {
    dispatch(GetAllUsersTC())
  }

  return (
    <div>
      <button onClick={handleGetUsers}>get users</button>
      {allUsers.map((user) => (
        <ul key={user._id} style={{ marginBottom: '15px' }}>
          <li>ID: {user._id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
          <li>IsActivated{user.isActivated}</li>
        </ul>
      ))}
    </div>
  )
}
