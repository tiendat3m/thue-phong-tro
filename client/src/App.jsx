import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import path from './utils/path'
import { Home, HomePage, Login, RentalApartment, RentalHouse, RentalMotel, RentalSpace, SearchDetail } from './container/public'
const App = () => {
    return (
        <div className='bg-gray-200 font-main'>
            <Routes>
                <Route path={path.HOME} element={<Home />}>
                    <Route path='*' element={<HomePage />} />
                    <Route path={path.HOME__PAGE} element={<HomePage />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
                    <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
                    <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalMotel />} />
                    <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
                    <Route path={path.SEARCH} element={<SearchDetail />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
