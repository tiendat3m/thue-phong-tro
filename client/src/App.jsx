import React from 'react'
import { Route, Routes } from 'react-router-dom'
import path from './utils/path'
import { Home, Login, Public } from './container/public'
const App = () => {
    return (
        <div className='h-screen bg-gray-100 font-main'>
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.LOGIN} element={<Login />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
