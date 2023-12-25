import React, { memo, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const Modal = ({ setIsShowModal, content, name = name }) => {
    const [percent1, setPercent1] = useState(0)
    const [percent2, setPercent2] = useState(100)
    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active')
        if (percent2 <= percent1) {
            activeTrackEl.style.left = `${percent2}%`
            activeTrackEl.style.right = `${100 - (+percent1)}%`
        } else {
            activeTrackEl.style.left = `${percent1}%`
            activeTrackEl.style.right = `${100 - (+percent2)}%`
        }
    }, [percent1, percent2])
    const handleClickTrack = (e) => {
        console.log(e)
        e.stopPropagation()
        const trackEl = document.getElementById('track')
        const trackRect = trackEl.getBoundingClientRect()
        let percent = Math.round((e.clientX - trackRect.left) * 100 / (trackRect.width))
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent)
        } else {
            setPercent2(percent)
        }
    }
    const convert100to15 = (percent) => {
        return (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10
    }

    return (
        <div
            onClick={() => setIsShowModal(false)}
            className='fixed inset-0 bg-overlay-30 z-50 flex justify-center items-center'
        >
            <div
                onClick={e => {
                    e.stopPropagation()
                    setIsShowModal(true)
                }
                }
                className='bg-white rounded-md w-1/3'
            >
                <div className='h-[45px] flex px-4 items-center border-b-[1px] border-gray-300'>
                    <span className='cursor-pointer' onClick={e => {
                        e.stopPropagation()
                        setIsShowModal(false)
                    }}><FaArrowLeft size={30} /></span>
                    {/* <span>Chọn Giá</span> */}
                    {/* <span></span> */}
                </div>
                {(name === 'category' || name === 'province') && <div className='flex flex-col justify-center px-4 '>
                    {content?.map(item => (
                        <span key={item.code} className='py-2 flex gap-2 border-b-[1px] border-gray-200 '>
                            <input type="radio" name={name} id={item.code} value={item.value.code} className='cursor-pointer' />
                            <label htmlFor={item.code}>{item.value}</label>
                        </span>
                    ))}
                </div>}
                {(name === 'price' || name === 'area') && <div className='p-12 py-24'>
                    <div className='flex items-center justify-center flex-col relative'>
                        <div className='z-30 absolute bottom-[32px] my-4 text-xl text-orange-500 font-semibold'>
                            {`Từ ${percent1 <= percent2 ? convert100to15(percent1) : convert100to15(percent2)} - ${percent2 >= percent1 ? convert100to15(percent2) : convert100to15(percent1)} triệu+`}
                        </div>
                        <div onClick={handleClickTrack} id='track' className='slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-400 rounded-full'></div>
                        <div onClick={handleClickTrack} id='track-active' className='slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-400 rounded-full'></div>
                        <input
                            max={100}
                            min={0}
                            step={1}
                            type="range"
                            className='w-full appearance-none absolute top-0 bottom-0 pointer-events-none   '
                            onChange={(e) => setPercent1(+e.target.value)}
                            value={percent1}
                        />
                        <input
                            max={100}
                            min={0}
                            step={1}
                            type="range"
                            className='w-full appearance-none absolute top-0 bottom-0 pointer-events-none  '
                            onChange={(e) => setPercent2(+e.target.value)}
                            value={percent2}
                        />
                        <div className='mt-4 absolute z-30 top-4 left-0 right-0 flex justify-between items-center'>
                            <span className='px-[10px]'>0</span>
                            <span className='mr-[-20px]'>15 triệu+</span>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default memo(Modal)
