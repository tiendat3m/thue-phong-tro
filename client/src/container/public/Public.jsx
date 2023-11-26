import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation } from '~/components'

const Public = () => {
    return (
        <div className='w-full h-screen'>
            <Header />
            <div className='w-full bg-main'>
                <Navigation />
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <Outlet />
            </div>
        </div>
    )
}

export default Public
