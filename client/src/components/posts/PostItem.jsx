import React, { memo } from 'react'
import withBaseComponent from '~/hocs/withBaseComponent'
import { formatTime } from '~/utils/helpers'

const PostItem = ({ title, price, image, createdAt }) => {
    return (
        <div className='w-full py-2 border-b-[1px] flex items-center-center gap-4 cursor-pointer'>
            <img src={image[0]} alt="" className='w-[65px] h-[65px] object-cover rounded-md flex-none' />
            <div className='flex flex-col justify-between'>
                <span className='text-sm text-blue-600'>{`${title.slice(0, 40).toUpperCase()}...`}</span>
                <div className='flex justify-between items-center'>
                    <span className='text-sm font-semibold text-green-500'>{price}</span>
                    <span className='text-xs'>{formatTime(createdAt)}</span>
                </div>
            </div>
        </div>
    )
}

export default withBaseComponent(memo(PostItem))
