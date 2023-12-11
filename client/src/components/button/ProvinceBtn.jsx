import React from 'react'

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className='shadow-md rounded-bl-xl rounded-br-xl cursor-pointer hover:text-orange-600 text-main'>
            <img src={image} alt="" className='h-[110px] w-[220px] object-cover rounded-tl-xl rounded-tr-xl' />
            <div className='font-semibold p-2 text-center text-sm '>{name}</div>
        </div>
    )
}

export default ProvinceBtn
