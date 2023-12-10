import React from 'react'
import { Route, Routes } from 'react-router-dom'
import path from './utils/path'
import { Home, HomePage, Login, RentalApartment, RentalHouse, RentalMotel, RentalSpace } from './container/public'
const App = () => {
    return (
        <div className='h-screen bg-gray-100 font-main'>
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path={path.HOMEPAGE} element={<HomePage />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
                    <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
                    <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalMotel />} />
                    <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
