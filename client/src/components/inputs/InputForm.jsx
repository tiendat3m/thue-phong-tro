import clsx from 'clsx'
import React from 'react'

const InputForm = ({ label }) => {
    return (
        <div className='text-sm'>
            <label htmlFor="phone">{label.toUpperCase()}</label>
            <input type="text" id='phone' className='outline-none bg-[#e8f0fe] rounded-sm p-3 w-full mt-[5px]' />
        </div>
    )
}

export default InputForm
