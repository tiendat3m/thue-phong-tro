import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, InputForm } from '~/components'
import withBaseComponent from '~/hocs/withBaseComponent'
import { apiRegister } from '~/services/auth'

const Login = ({ location }) => {
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        password: '',

    })
    const handleSubmit = async () => {
        const response = await apiRegister(payload)
        console.log(response)
    }
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])
    return (
        <div className='bg-white min-w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-6'>
            <h3 className='font-semibold text-2xl mb-4'>{isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}</h3>
            <div className='w-full flex flex-col gap-5'>
                {isRegister && <InputForm
                    label={'Họ tên'} value={payload.name} setValue={setPayload} type={'name'}
                />}
                <InputForm
                    label={'Số điện thoại'} value={payload.phone} setValue={setPayload} type={'phone'}
                />
                <InputForm
                    label={'Mật khẩu'} value={payload.password} setValue={setPayload} type={'password'}
                />
                <Button fw handleOnclick={handleSubmit}>
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