import React, { memo, useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { getAreaGaps, getNumbersArea, getNumbersPrice, getPriceGaps } from '~/utils/helpers';

const Modal = ({ setIsShowModal, content, name, handleSubmit, queries, arrMinMax, defaultText }) => {
    const [percent1, setPercent1] = useState(name === 'price' && arrMinMax?.priceArr ? arrMinMax?.priceArr[0] : name === 'area' && arrMinMax?.areaArr ? arrMinMax?.areaArr[0] : 0)
    const [percent2, setPercent2] = useState(name === 'price' && arrMinMax.priceArr ? arrMinMax?.priceArr[1] : name === 'area' && arrMinMax?.areaArr ? arrMinMax?.areaArr[1] : 100)
    const [activeEl, setActiveEl] = useState('')
    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active')
        // console.log(activeTrackEl)
        if (activeTrackEl) {
            if (percent2 <= percent1) {
                activeTrackEl.style.left = `${percent2}%`
                activeTrackEl.style.right = `${100 - (+percent1)}%`
            } else {
                activeTrackEl.style.left = `${percent1}%`
                activeTrackEl.style.right = `${100 - (+percent2)}%`
            }
        }
    }, [percent1, percent2])
    const handleClickTrack = (e, value) => {
        e.stopPropagation()
        const trackEl = document.getElementById('track')
        const trackRect = trackEl.getBoundingClientRect()
        let percent = +value ? +value : Math.round((e.clientX - trackRect.left) * 100 / (trackRect.width))
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent)
        } else {
            setPercent2(percent)
        }
    }
    const convert100toTarget = percent => {
        return name === 'price'
            ? (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10
            : name === 'area'
                ? (Math.ceil(Math.round((percent * 0.9)) / 5) * 5)
                : 0
    }
    const convertto100 = percent => {
        let target = name === 'price' ? 15 : name === 'area' ? 90 : 1
        return Math.floor((percent / target) * 100)
    }
    const handleActive = (code, value) => {
        let arrMaxMin = name === 'price' ? getNumbersPrice(value) : getNumbersArea(value)
        if (arrMaxMin.length === 1) {
            if (arrMaxMin[0] === 1) {
                setPercent1(0)
                setPercent2(convertto100(1))
            }
            if (arrMaxMin[0] === 20) {
                setPercent1(0)
                setPercent2(convertto100(20))
            }
            if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
                setPercent1(100)
                setPercent2(100)
            }
        }
        if (arrMaxMin.length === 2) {
            setPercent1(convertto100(arrMaxMin[0]))
            setPercent2(convertto100(arrMaxMin[1]))
        }
        setActiveEl(code)
    }
    const handleBeforeSubmit = (e) => {
        let min = percent1 < percent2 ? percent1 : percent2
        let max = percent1 < percent2 ? percent2 : percent1
        let arrMinMax = [convert100toTarget(min), convert100toTarget(max)]
        // const gaps = name === 'price'
        //     ? getPriceGaps(arrMinMax, content)
        //     : name === 'area'
        //         ? getAreaGaps(arrMinMax, content)
        //         : []
        handleSubmit(e, {
            [`${name}Number `]: arrMinMax,
            [name]: `${convert100toTarget(min)} - ${convert100toTarget(max)} ${name === 'price' ? 'triệu' : 'm2'}`
        }, {
            [`${name}Arr`]: [min, max]
        })
    }

    // const handleSubmit = (query) => {
    //     // console.log(query)
    // }

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                setIsShowModal(false)
            }}
            className='fixed inset-0 bg-overlay-30 z-50 flex justify-center items-center'
        >
            <div
                onClick={e => {
                    e.stopPropagation()
                    setIsShowModal(true)
                }
                }
                className='bg-white rounded-md w-2/5 h-[500px] relative'
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
                    <span className='py-2 flex gap-2 border-b-[1px] border-gray-200 '>
                        <input
                            type="radio"
                            name={name}
                            id='default'
                            defaultChecked={!queries[`${name}Code`] ? true : false}
                            value={defaultText || ''}
                            className='cursor-pointer'
                            onClick={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}

                        />
                        <label htmlFor={'default'}>{defaultText}</label>
                    </span>
                    {content?.map(item => (
                        <span key={item.code} className='py-2 flex gap-2 border-b-[1px] border-gray-200 '>
                            <input
                                type="radio"
                                name={name}
                                id={item.code}
                                defaultChecked={item.code === queries[`${name}Code`] ? true : false}
                                value={item.value.code}
                                className='cursor-pointer'
                                onClick={(e) => handleSubmit(e, { [name]: item.value, [`${name}Code`]: item.code })}

                            />
                            <label htmlFor={item.code}>{item.value}</label>
                        </span>
                    ))}
                </div>}
                {(name === 'price' || name === 'area') && <div className='p-12 py-24'>
                    <div className='flex items-center justify-center flex-col relative'>
                        <div className='z-30 absolute bottom-[32px] my-4 text-xl text-orange-500 font-semibold'>
                            {(percent1 === 100 && percent2 === 100)
                                ? `Trên ${convert100toTarget(percent1)} ${name === 'price' ? 'triệu' : 'm2'} +`
                                : `Từ ${percent1 <= percent2
                                    ? convert100toTarget(percent1)
                                    : convert100toTarget(percent2)} - ${percent2 >= percent1
                                        ? convert100toTarget(percent2)
                                        : convert100toTarget(percent1)} ${name === 'price'
                                            ? 'triệu'
                                            : 'm2'}`}
                        </div>
                        <div onClick={handleClickTrack} id='track' className='slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-400 rounded-full'></div>
                        <div onClick={handleClickTrack} id='track-active' className='slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-400 rounded-full'></div>
                        <input
                            max={100}
                            min={0}
                            step={1}
                            type="range"
                            className='w-full appearance-none absolute top-0 bottom-0 pointer-events-none   '
                            onChange={(e) => {
                                setPercent1(+e.target.value)
                                activeEl && setActiveEl("")
                            }}
                            value={percent1}
                        />
                        <input
                            max={100}
                            min={0}
                            step={1}
                            type="range"
                            className='w-full appearance-none absolute top-0 bottom-0 pointer-events-none  '
                            onChange={(e) => {
                                setPercent2(+e.target.value)
                                activeEl && setActiveEl("")

                            }}
                            value={percent2}
                        />
                        <div className='mt-2 absolute z-30 top-4 left-0 right-0 flex justify-between items-center'>
                            <span onClick={e => {
                                e.stopPropagation()
                                handleClickTrack(e, 0)
                            }} className='cursor-pointer'>0</span>
                            <span onClick={e => {
                                e.stopPropagation()
                                handleClickTrack(e, 100)
                            }} className='mr-[-20px] cursor-pointer'>{name === 'price' ? '15 triệu+' : '90+'}</span>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h3 className='font-semibold mb-6 text-sm'>Chọn nhanh</h3>
                        <div className=' gap-2 flex flex-wrap w-full'>
                            {content?.map(item => (
                                <span
                                    key={item.code}
                                    onClick={() => handleActive(item.code, item.value)}
                                    className={`bg-gray-100 rounded-md py-[5px] px-[15px] text-sm cursor-pointer ${item.code === activeEl ? 'bg-main text-white' : ''}`}
                                >
                                    {name === 'price' ? `${item.value} đồng` : item.value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>}
                {(name === 'price' || name === 'area') && <button
                    type='button'
                    className='uppercase px-3 w-full absolute bottom-0 text-[16px] bg-amber-400 font-semibold text-black h-[50px] rounded-bl-md rounded-br-md  '
                    onClick={handleBeforeSubmit}
                >
                    Áp dụng
                </button>}
            </div>
        </div>
    )
}

export default memo(Modal)
