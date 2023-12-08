
import React from 'react'

const InputForm = ({ label, value, setValue, type = "text", invalidFields, setInvalidFields, namekey }) => {
    return (
        <div className='text-sm'>
            <label htmlFor="phone">{label.toUpperCase()}</label>
            <input
                type={type}
                id='phone'
                className='outline-none bg-[#e8f0fe] rounded-md p-3 w-full my-[5px]'
                value={value}
                onChange={e => setValue(prev => ({ ...prev, [namekey]: e.target.value }))}
                onFocus={() => setInvalidFields && setInvalidFields([])}
            />
            {invalidFields.length > 0 && invalidFields?.some(el => el.name === namekey) && <small className='text-[12px]  text-red-500 italic'>{invalidFields?.find(el => el.name === namekey)?.mes}</small>}
        </div>
    )
}

export default InputForm
