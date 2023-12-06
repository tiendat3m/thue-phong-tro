
import React from 'react'

const InputForm = ({ label, value, setValue, type }) => {
    return (
        <div className='text-sm'>
            <label htmlFor="phone">{label.toUpperCase()}</label>
            <input
                type="text"
                id='phone'
                className='outline-none bg-[#e8f0fe] rounded-sm p-3 w-full mt-[5px]'
                value={value}
                onChange={e => setValue(prev => ({ ...prev, [type]: e.target.value }))}
            />
        </div>
    )
}

export default InputForm
