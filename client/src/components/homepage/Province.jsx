import React, { memo } from 'react'
import { ProvinceBtn } from '..'
import { location } from '~/utils/constants'

const Province = () => {
    return (
        <div className='flex items-center justify-center gap-5 mt-[15px]'>
            {location?.map((item) => (
                <ProvinceBtn key={item.id} name={item.name} image={item.image} />
            ))}
        </div>
    )
}

export default memo(Province)
