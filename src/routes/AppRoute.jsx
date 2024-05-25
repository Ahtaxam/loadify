import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../utils/path'
import Home from '../screens/home'

function AppRoute() {
  return (
    <div>
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}  />
        </Routes>
    </div>
  )
}

export default AppRoute