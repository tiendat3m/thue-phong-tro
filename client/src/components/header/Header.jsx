import React, { useCallback, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import { Button } from '..'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '~/store/actions'
import icons from '~/utils/icons'
import path from '~/utils/path'
import * as actions from '~/store/actions'
import withBaseComponent from '~/hocs/withBaseComponent'
import { menuBar } from '~/utils/constants'

const { FaHeartCirclePlus, FaSignInAlt, FaUserPlus, AiOutlinePlusCircle, RiRegisteredLine, RxDashboard } = icons
const Header = ({ navigate, dispatch }) => {
    const menuRef = useRef()
    const { isLoggedIn } = useSelector(state => state.auth)
    const { current } = useSelector(state => state.user)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(actions.getCurrent())
        }, 100)
    }, [isLoggedIn])
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutSide)
        return () => {
            document.removeEventListener('click', handleClickOpen)
        }
    }, [])
    const goLogin = useCallback((flag) => {
        navigate(path.LOGIN, { state: { flag } })
    }, [])

    return (
        <div className='w-main mx-auto flex items-center justify-between h-[70px]'>
            <NavLink to={'/'}>
                <img src={logo} alt="" className='w-[240px] h-[70px] object-contain' />
            </NavLink>
            <div className='flex items-center gap-6 text-sm text-gray-700 '>
                {isLoggedIn && <div className='flex justify-center gap-2 items-center'>
                    <img src="https://phongtro123.com/images/default-user.png" alt="" className='w-[30px] h-[30px] rounded-[50%] ' />
                    <div className='flex flex-col'>
                        <span>{`Xin chào: ${current.name !== undefined ? current.name : ''}`}</span>
                        <span>{`Mã tài khoản: ${current?.id?.split('-')[0] !== undefined ? current?.id?.split('-')[0] : ''}`}</span>
                    </div>
                </div>}
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
                    <div className='relative'>
                        <div ref={menuRef} onClick={() => setIsOpen(prev => !prev)} className='flex justify-center items-center gap-1 hover:underline cursor-pointer'>
                            <RxDashboard size={20} />
                            <button >Quản lí tài khoản</button>
                        </div>
                        {isOpen && <div className='absolute  left-0 min-w-[200px] flex flex-col rounded-md shadow-md px-5 py-3 bg-white z-50 animate animate-slide-bottom'>
                            {menuBar.map((item) => (
                                <Link key={item.id} to={`/${item.path}`} className='flex gap-2 items-center py-2 cursor-pointer text-main border-b-[1px] hover:text-orange-600'>
                                    {item.icon}
                                    {item.text}
                                </Link>
                            ))}
                            <span className='flex items-center gap-2 py-2 cursor-pointer text-main border-b-[1px] hover:text-orange-600' onClick={() => {
                                setIsOpen(false)
                                dispatch(logout())
                            }}>
                                <FaSignInAlt />
                                Đăng xuất
                            </span>
                        </div>}
                    </div>}
                <Button>
                    Đăng tin mới
                    <AiOutlinePlusCircle size={18} />
                </Button>
            </div>
        </div>
    )
}

export default withBaseComponent(Header)
