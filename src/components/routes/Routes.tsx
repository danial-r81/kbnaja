import React from 'react'
import {Router} from 'react-router'
import {useLocation, useNavigate} from 'react-router-dom'

const AppRoutes = () => {
   const location = useLocation()
   const navigate = useNavigation
  return (
    <Router location={location} navigator={}>Routes</Router>
  )
}

export default AppRoutes