import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { List, Pagination, Province, SideBar } from '~/components'
import { text } from '~/utils/constants'
const HomePage = () => {
    const { categories } = useSelector(state => state.app)
    const [params] = useSearchParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [params.get('page')])
    return (
        <div className='w-main'>
            <div className='mt-5'>
                <h1 className='text-[28px] font-bold text-center'>{text.HOME_TITLE}</h1>
                <span className='text-sm text-gray-500'>{text.HOME_DESCRIPTION}</span>
            </div>
            <Province />
            <div className='w-full flex mt-5 gap-4'>
                <div className='w-[70%] '>
                    <List page={params.get('page')} />
                    <Pagination page={params.get('page')} />
                </div>
                <div className='w-[30%] border border-blue-500'>
                    <SideBar categories={categories} title='Danh sách cho thuê' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
