import React, { useState } from 'react'
import icons from '~/utils/icons'
import { Button } from '..'
import { renderStarFromNumber } from '~/utils/helpers'

// const images = [
//     "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
//     "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
//     "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
//     "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
// ]
const indexs = [1, 2, 3, 4]
const { RiHeartFill, RiHeartLine, BsBookmarkStarFill, RiStarFill } = icons

const ListItem = ({ images, title, star, address, attributes, user, description }) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className='border-t-2 border-orange-600'>
            <div className='w-full flex gap-2 p-4'>
                <div className='w-2/5 flex flex-wrap gap-[3px] items-center relative cursor-pointer'>
                    {images.length > 0 && images.filter((i, idx) => indexs.some(i => i === idx))?.map((i, index) => (
                        <img key={index} src={i} alt="" className='w-[140px] h-[120px] object-cover' />
                    ))}
                    {/* <img src={images[0]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                    <img src={images[1]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                    <img src={images[2]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                    <img src={images[3]} alt="preview" className='w-[140px] h-[120px] object-cover' /> */}
                    <span className='absolute bottom-2 left-2 px-2 bg-overlay-70 rounded-md text-white text-sm'>{`${images.length} ảnh`}</span>
                    <span
                        className='absolute bottom-2 right-3 rounded-md text-white'
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        {isHover ? <RiHeartFill color='red' size={24} /> : <RiHeartLine size={24} />}
                    </span>
                </div>
                <div className='w-3/5'>
                    <div className='flex justify-between gap-4 w-full'>
                        <div className='text-red-500 font-semibold text-sm hover:underline cursor-pointer'>
                            {/* <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' /> */}
                            {renderStarFromNumber(star)}
                            {title.toUpperCase()}
                        </div>
                        <div>
                            <BsBookmarkStarFill size={22} color='orange' />
                        </div>
                    </div>
                    <div className='my-2 flex items-center justify-between gap-2'>
                        <span className='text-[#16c784] font-semibold'>{attributes?.price}</span>
                        <span className=''>{attributes.acreage}</span>
                        <span className=''>{`${address.split(',')[2]}, ${address.split(',')[3]}`}</span>

                    </div>
                    <p className='text-gray-400 w-full h-[60px] text-ellipsis overflow-hidden text-sm'>
                        {description}
                    </p>
                    <div className='flex items-center my-5 justify-between'>
                        <div className='flex items-center'>
                            <img src="https://phongtro123.com/images/default-user.png" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                            <p className='text-sm text-gray-400'>{user.name}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[14px]'>
                            <Button style={'px-[7px] py-[3px] bg-main rounded-md text-white'}>
                                {`Gọi ${user.phone}`}
                            </Button>
                            <Button style={'px-[7px] py-[3px] border border-main rounded-md text-main hover:bg-main hover:text-white'}>
                                Nhắn zalo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem
