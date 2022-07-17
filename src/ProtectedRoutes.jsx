import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = ({isLocation}) => {
  if (isLocation){
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes  