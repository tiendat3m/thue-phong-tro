import React, { memo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Contact, Header, Intro, Navigation } from '~/components'
import { Search } from '.'
import { useSelector } from 'react-redux'
const Home = () => {
    const { isLoggedIn } = useSelector(state => state.auth)

    return (
        <div className='w-full'>
            <Header />
            <Navigation />
            {isLoggedIn && <Search />}
            <div className='w-full flex flex-col items-center justify-center'>
                <Outlet />
            </div>
            <Intro />
            <Contact />
        </div>
    )
}

export default memo((Home))
