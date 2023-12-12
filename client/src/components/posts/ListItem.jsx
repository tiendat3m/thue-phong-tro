import React from 'react'
import icons from '~/utils/icons'
import { Button } from '..'

const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/6310726d-d075-4e35-b1cb-cf5616bf5212_1658240491.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/9c60836e-26b2-4737-a6c8-60cb5187fa4c_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/716c753e-8e03-4cc8-9d09-e52ec19ce01b_1658240485.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/19/400e7ebd-5d88-48af-8599-0d074a1ee014_1658240494.jpg",
]

const { RiHeartFill, RiHeartLine, BsBookmarkStarFill, RiStarFill } = icons

const ListItem = () => {
    return (
        <div className='border-t-2 border-orange-600'>
            <div className='w-full flex gap-2 p-4'>
                <div className='w-2/5 flex flex-wrap gap-[3px] items-center'>
                    <img src={images[0]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                    <img src={images[1]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                    <img src={images[2]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                    <img src={images[3]} alt="preview" className='w-[140px] h-[120px] object-cover' />
                </div>
                <div className='w-3/5 flex flex-col gap-5'>
                    <div className='flex justify-between gap-4'>
                        <div className='text-red-500 font-semibold text-sm hover:underline cursor-pointer'>
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            <RiStarFill className='star-item' size={18} color='yellow' />
                            CHO THUÊ PHÒNG TRỌ ĐẸP GIÁ ƯU ĐÃI THÁNG 12 TẠI QUẬN GÒ VẤP
                        </div>
                        <div>
                            <BsBookmarkStarFill size={22} color='orange' />
                        </div>
                    </div>
                    <div className='inline-block text-sm'>
                        <span className='text-[#16c784] font-semibold mr-5'>3 triệu/tháng</span>
                        <span className='mr-5'>18m²</span>
                        <span>Quận Gò Vấp, Hồ Chí Minh</span>
                    </div>
                    <p className='text-sm text-gray-400'>
                        ƯU ĐÃI PHÒNG MỚI SHOCK: TẶNG 1 TRIỆU TRONG THÁNG 12 KHI DỌN VÀO PHÒNG MỚI TẠI 35 ĐƯỜNG 27, P.6, GÒ VẤPCho thuê căn hộ dịch vụ - phù hợp người đi làm,…
                    </p>
                    <div className='flex justify-between  '>
                        <div className='flex gap-2 items-center'>
                            <img src="https://phongtro123.com/images/default-user.png" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                            <p className='text-sm text-gray-400'>Nguyễn Huy Hoàn</p>
                        </div>
                        <div className='flex gap-2 text-[14px]'>
                            <Button style={'px-[7px] py-[3px] bg-main rounded-md text-white'}>
                                Gọi 0343759130
                            </Button>
                            <Button style={'px-[7px] py-[3px] border border-main rounded-md text-main'}>
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
