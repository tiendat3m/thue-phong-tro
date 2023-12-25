import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { dataIntro } from '~/utils/constants'
import { formatVietnameseToString, renderStarFromNumber } from '~/utils/helpers'
import { Button } from '..'

const Intro = () => {
    const { categories } = useSelector(state => state.app)
    return (
        <div className='w-main mx-auto flex justify-center flex-col items-center bg-white shadow-md gap-4 p-6 mt-[50px]'>
            <h3 className='text-[18px] font-semibold'>{dataIntro.title}</h3>
            <div className='text-gray-800 text-center my-4'>
                {dataIntro.description}
                {categories?.map(item => (
                    <Link
                        to={`/${formatVietnameseToString(item.value)}`}
                        key={item.code}
                        className='text-main font-semibold text-sm'
                    >
                        {`${item.value}, `}
                    </Link>
                ))}
                {dataIntro.description2}
            </div>
            <div className='w-full flex justify-around items-center'>
                {dataIntro.statistic?.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <h4 className='text-xl font-semibold'>{item.value}</h4>
                        <span className='text-sm text-gray-700'>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <h2 className='text-[18px] font-bold py-2'>
                    {dataIntro.price}
                </h2>
                {renderStarFromNumber(5, 20).map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
            <div className='text-center text-sm'>
                <p className='italic'>{dataIntro.comment}</p>
                <p className='mt-[10px]'>{dataIntro.author}</p>
            </div>
            <p className='text-[18px] font-semibold'>{dataIntro.question}</p>
            <p className='text-sm'>{dataIntro.answer}</p>
            <Button style={'font-bold py-[10px] px-[30px] hover:underline flex justify-center items-center gap-1 bg-secondary rounded-md text-white outline-non'}>
                Đăng tin ngay
            </Button>
        </div>
    )
}

export default Intro
