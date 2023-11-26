import React from 'react'
import { Button, InputField, InputForm } from '~/components'

const Login = () => {
    return (
        <div className='bg-white min-w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
            <h3 className='font-semibold text-2xl mb-4'>Đăng nhập</h3>
            <div className='w-full flex flex-col gap-5'>
                <InputForm
                    label={'Số điện thoại'}
                />
                <InputForm
                    label={'Mật khẩu'}
                />
                <Button fw>
                    Đăng nhập
                </Button>

                <span className='flex justify-between items-center text-sm text-main mt-6'>
                    <span className='hover:text-secondary cursor-pointer'>Quên mật khẩu?</span>
                    <span className='hover:text-secondary cursor-pointer'>Tạo tài khoản mới</span>
                </span>
            </div>
        </div>
    )
}

export default Login


// react-hook-form