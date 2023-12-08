import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Button, InputForm } from '~/components'
import withBaseComponent from '~/hocs/withBaseComponent'
import * as actions from '~/store/actions'
import { validate } from '~/utils/helpers'

const Login = ({ location, dispatch, navigate }) => {
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const { isLoggedIn, msg, update } = useSelector(state => state.auth)
    console.log(msg)
    const [invalidFields, setInvalidFields] = useState('')
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        password: '',
    })
    const resetPayload = () => {
        setPayload({
            name: '',
            phone: '',
            password: '',
        })
    }
    useEffect(() => {
        msg && Swal.fire('Opps!', msg, 'error')
    }, [msg, update])

    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])
    useEffect(() => {
        resetPayload()
        setInvalidFields([])
    }, [isRegister])
    const handleSubmit = async () => {
        // isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }
        const invalids = validate(finalPayload, setInvalidFields)
        // console.log(invalids)
        if (invalids === 0) {
            if (isRegister) {
                dispatch(actions.register(payload))
                Swal.fire('Congrats!', msg, 'success').then(() => {
                    setIsRegister(false)
                })
            } else {
                dispatch(actions.login(payload))
            }
        }
    }
    useEffect(() => {
        setIsRegister(location.state?.flag)
    }, [location.state?.flag])
    return (
        <div className='bg-white min-w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-6'>
            <h3 className='font-semibold text-2xl mb-4'>{isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}</h3>
            <div className='w-full flex flex-col gap-5'>
                {isRegister && <InputForm
                    label={'Họ tên'}
                    value={payload.name}
                    setValue={setPayload}
                    namekey={'name'}
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                />}
                <InputForm
                    label={'Số điện thoại'}
                    value={payload.phone}
                    setValue={setPayload}
                    namekey={'phone'}
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                />
                <InputForm
                    label={'Mật khẩu'}
                    value={payload.password}
                    setValue={setPayload}
                    namekey={'password'}
                    invalidFields={invalidFields}
                    setInvalidFields={setInvalidFields}
                    type='password'
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