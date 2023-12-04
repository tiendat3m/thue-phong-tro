import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, InputForm } from '~/components'
import withBaseComponent from '~/hocs/withBaseComponent'

const Login = ({ location }) => {
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])
    return (
        <div className='bg-white min-w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-6'>
            <h3 className='font-semibold text-2xl mb-4'>{isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}</h3>
            <div className='w-full flex flex-col gap-5'>
                {isRegister && <InputForm
                    label={'Họ tên'}
                />}
                <InputForm
                    label={'Số điện thoại'}
                />
                <InputForm
                    label={'Mật khẩu'}
                />
                <Button fw>
                    {isRegister ? 'Đăng kí' : 'Đăng nhập'}
                </Button>

                <span className={clsx('flex items-center text-sm mt-6 justify-between')}>
                    {isRegister
                        ? <small className='text-sm'>Bạn đã có tài khoản? <span className='text-main hover:underline cursor-pointer' onClick={e => setIsRegister(false)}>Đặng nhập ngay</span></small>
                        : <>
                            <span className='hover:text-secondary cursor-pointer text-main'>Quên mật khẩu?</span>
                            <span onClick={e => setIsRegister(true)} className='hover:text-secondary cursor-pointer text-main'>Tạo tài khoản mới</span>
                        </>
                    }
                </span>
            </div>


        </div>
    )
}

export default withBaseComponent(Login)


// react-hook-form