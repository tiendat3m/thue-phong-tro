import React, { memo } from 'react'
import { List, Pagination, SideBar } from '~/components'
import withBaseComponent from '~/hocs/withBaseComponent'
const SearchDetail = ({ location }) => {

    return (
        <div className='w-main'>
            <div className='mt-5'>
                <h1 className='text-[28px] font-bold'>{location.state?.titleSearch || "kết quả tìm kiếm"}</h1>
                <span className='text-sm text-gray-500'>{`${location.state?.titleSearch || ''}, phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`}</span>
            </div>
            <div className='w-full flex mt-5 gap-4'>
                <div className='w-[70%] '>
                    <List />
                    <Pagination />
                </div>
                <div className='w-[30%]'>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default withBaseComponent(memo(SearchDetail))
