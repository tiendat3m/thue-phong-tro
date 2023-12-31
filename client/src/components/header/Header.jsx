import React, { useCallback } from 'react'
import logo from '../../assets/logo.png'
import icons from '~/utils/icons'
import { Button } from '..'
import withBaseComponent from '~/hocs/withBaseComponent'
import path from '~/utils/path'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '~/store/actions'

const { FaHeartCirclePlus, FaSignInAlt, FaUserPlus, AiOutlinePlusCircle, RiRegisteredLine } = icons
const Header = ({ navigate, dispatch }) => {
    const { isLoggedIn } = useSelector(state => state.auth)
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])
    return (
        <div className='w-main mx-auto flex items-center justify-between h-[70px]'>
            <NavLink to={'/'}>
                <img src={logo} alt="" className='w-[240px] h-[70px] object-contain' />
            </NavLink>
            <div className='flex items-center gap-6 text-sm text-gray-700 '>
                <span className='flex items-center gap-1 hover:underline cursor-pointer'>
                    <FaHeartCirclePlus size={20} />
                    <span>Yêu thích</span>
                </span>
                {!isLoggedIn &&
                    <>
                        <span onClick={() => goLogin(false)} className='flex items-center gap-1 hover:underline cursor-pointer'>
                            <FaUserPlus size={20} />
                            <span>Đăng nhập</span>
                        </span>
                        <span onClick={() => goLogin(true)} className='flex items-center gap-1 hover:underline cursor-pointer' >
                            <RiRegisteredLine size={20} />
                            <span>Đăng kí</span>
                        </span>
                    </>
                }
                {isLoggedIn &&
                    <span onClick={() => dispatch(logout())} className='flex items-center gap-1 hover:underline cursor-pointer'>
                        <FaSignInAlt size={20} />
                        <span>Đăng xuất</span>
                    </span>}
                <Button>
                    Đăng tin mới
                    <AiOutlinePlusCircle size={18} />
                </Button>
            </div>
        </div>
    )
}

export default withBaseComponent(Header)
