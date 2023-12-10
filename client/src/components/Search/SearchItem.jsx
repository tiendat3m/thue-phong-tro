import React from 'react'

const SearchItem = ({ text, iconBefore, iconAfter }) => {
    return (
        <div className='bg-white w-full text-sm flex justify-between items-center text-[#777] h-[35px] rounded-md px-3'>
            <div className='flex items-center gap-1 justify-center'>
                {iconBefore}
                <span>{text}</span>
            </div>
            <span>{iconAfter}</span>
        </div>
    )
}

export default SearchItem
