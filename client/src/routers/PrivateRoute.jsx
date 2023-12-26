import React, { useContext } from 'react'
import { tokenContext } from '../conext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const {token} = useContext(tokenContext)
  return (
    <>
    {token ? <Outlet/> : <Navigate to={'/login'}/>}
    </>
  )
}

export default PrivateRoute