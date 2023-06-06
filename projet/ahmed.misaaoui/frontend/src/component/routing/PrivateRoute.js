import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const { isAuthenticated }=useSelector(state=>state.Reducer)
    return (
    <div>
        {isAuthenticated?children :<Navigate to="/" />}
    </div>
  )
}

export default PrivateRoute
