
import React from 'react'

const InputForm = ({ label, value, setValue, type, invalidFields, setInvalidFields }) => {
    return (
        <div className='text-sm'>
            <label htmlFor="phone">{label.toUpperCase()}</label>
            <input
                type="text"
                id='phone'
                className='outline-none bg-[#e8f0fe] rounded-md p-3 w-full my-[5px]'
                value={value}
                onChange={e => setValue(prev => ({ ...prev, [type]: e.target.value }))}
                onFocus={() => setInvalidFields && setInvalidFields([])}
            />
            {invalidFields.length > 0 && invalidFields?.some(el => el.name === type) && <small className='text-[12px]  text-red-500 italic'>{invalidFields?.find(el => el.name === type)?.mes}</small>}
        </div>
    )
}

export default InputForm
