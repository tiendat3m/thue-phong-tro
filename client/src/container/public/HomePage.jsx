import React from 'react'
import { Province } from '~/components'
import { text } from '~/utils/constants'
const HomePage = () => {
    return (
        <div className='w-main'>
            <div className='mt-5'>
                <h1 className='text-[28px] font-bold text-center'>{text.HOME_TITLE}</h1>
                <span className='text-sm text-gray-500'>{text.HOME_DESCRIPTION}</span>
            </div>
            <Province />
        </div>
    )
}

export default HomePage
