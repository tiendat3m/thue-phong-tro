import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Contact, Header, Intro, Navigation } from '~/components'
import { Search } from '.'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <Navigation />
            <Search />
            <div className='w-full flex flex-col items-center justify-center'>
                <Outlet />
            </div>
            <Intro />
            <Contact />
        </div>
    )
}

export default memo(Home)
