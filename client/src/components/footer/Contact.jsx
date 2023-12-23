import React from 'react'
import { dataContact } from '~/utils/constants'
import { Button } from '..'

const Contact = () => {
    return (
        <div className='bg-white rounded-md p-4 w-main mx-auto flex flex-col justify-center items-center gap-5 border-dashed border-[7px] border-[#d2def8] mt-[40px]'>
            <img
                src={dataContact.image}
                alt="thumbnal"
                className='w-full h-48 object-contain'
            />
            <p>{dataContact.content}</p>
            <div className='flex items-center justify-around w-full'>
                {dataContact.contacts.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <span className='text-orange-500 font-semibold text-sm'>{item.text}</span>
                            <span className='text-blue-900 text-[18px] font-semibold'>{item.phone}</span>
                            <span className='text-blue-900 text-[18px] font-semibold'>{item.zalo}</span>
                        </div>
                    )
                })}
            </div>
            <Button style={'font-bold py-[10px] px-[30px] hover:underline flex justify-center items-center gap-1 bg-main rounded-md text-white outline-non'}>
                Gửi liên hệ
            </Button>
        </div>
    )
}

export default Contact
