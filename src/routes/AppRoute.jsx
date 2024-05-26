import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../utils/path'
import Home from '../screens/home'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/signup'
import TruckProvider from '../screens/truck'

function AppRoute() {
  return (
    <div>
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}  />
            <Route path={PATH.LOGIN} element={<Login/>} />
            <Route path={PATH.SIGNUP} element={<Signup/>}/>
            <Route path={PATH.TRUCKHOME} element={<TruckProvider/>} />
        </Routes>
    </div>
  )
}

export default AppRoute