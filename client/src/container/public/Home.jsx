import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation } from '~/components'
import { Search } from '.'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <Navigation />
            <Search />
            <div className='w-full flex flex-col items-center justify-center'>
                <Outlet />
                <div className='h-[300px]'></div>
            </div>
        </div>
    )
}

export default Home
