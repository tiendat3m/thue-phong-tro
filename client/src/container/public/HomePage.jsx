import React from 'react'
import { List, Province } from '~/components'
import { text } from '~/utils/constants'
const HomePage = () => {
    return (
        <div className='w-main'>
            <div className='mt-5'>
                <h1 className='text-[28px] font-bold text-center'>{text.HOME_TITLE}</h1>
                <span className='text-sm text-gray-500'>{text.HOME_DESCRIPTION}</span>
            </div>
            <Province />
            <div className='w-full flex mt-5 gap-4'>
                <div className='w-[70%] '>
                    <List />
                </div>
                <div className='w-[30%] border border-blue-500'>
                    SIde Bar
                </div>
            </div>
        </div>
    )
}

export default HomePage
