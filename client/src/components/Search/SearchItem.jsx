import React from 'react'

const SearchItem = ({ text, iconBefore, iconAfter, fontWeight, defaultText }) => {
    return (
        <div className='bg-white w-full text-[13px] flex justify-between items-center text-[#777] h-[35px] rounded-md px-3'>
            <div className='flex items-center gap-1 justify-center'>
                {iconBefore}
                {text ? <span className='font-bold text-black'>{text}</span> : <span className={`${fontWeight && 'font-bold text-black'} w-[100px] whitespace-nowrap`}>{defaultText}</span>}

            </div>
            <span>{iconAfter}</span>
        </div>
    )
}

export default SearchItem
