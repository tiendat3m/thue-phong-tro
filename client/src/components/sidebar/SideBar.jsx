import React from 'react'
import icons from '~/utils/icons'

const { MdArrowForwardIos } = icons

const SideBar = ({ title, categories }) => {
    return (
        <div className='bg-white p-4'>
            <h3 className='text-lg font-semibold mb-4'>{title}</h3>
            {categories?.map(item => (
                <ul key={item.code} className='flex items-center gap-1 border-b border-dashed'>
                    <MdArrowForwardIos color='#B2B2B2' size={12} />
                    <li className='py-[5px] text-sm'>{item.value}</li>
                </ul>
            ))}
        </div>
    )
}

export default SideBar
