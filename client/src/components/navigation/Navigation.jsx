import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import withBaseComponent from '~/hocs/withBaseComponent';
import { apiGetCategories } from '~/services/category';
import { formatVietnameseToString } from '~/utils/helpers';
import * as actions from '../../store/actions'
import { useSelector } from 'react-redux';

const notActive = 'hover:bg-secondary px-4 h-full flex items-center'
const active = 'px-4 h-full flex items-center bg-secondary'

const Navigation = ({ dispatch }) => {
    const { categories } = useSelector(state => state.app)
    useEffect(() => {
        dispatch(actions.getCategories())
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

export default withBaseComponent(Navigation)
