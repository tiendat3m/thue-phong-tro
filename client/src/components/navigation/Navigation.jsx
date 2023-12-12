import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { apiGetCategories } from '~/services/category';
import { formatVietnameseToString } from '~/utils/helpers';

const notActive = 'hover:bg-secondary px-4 h-full flex items-center'
const active = 'px-4 h-full flex items-center bg-secondary'

const Navigation = () => {
    const [categories, setCategories] = useState(null);
    console.log(categories)
    const fetchCategories = async () => {
        const response = await apiGetCategories()
        if (response.data.err === 0) {
            console.log(response)
            setCategories(response.data.response)
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <div className='w-full bg-main'>
            <div className='w-main mx-auto h-[40px] flex items-center text-white font-semibold text-[13px]'>
                <NavLink
                    to={`/`}
                    className={({ isActive }) => isActive ? active : notActive}
                >
                    Trang chủ
                </NavLink>
                {categories?.map(item => (
                    <div key={item.code} className='flex items-center h-full'>
                        <NavLink
                            to={`/${formatVietnameseToString(item.value)}`}
                            className={({ isActive }) => isActive ? active : notActive}
                        >
                            {item.value}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navigation
