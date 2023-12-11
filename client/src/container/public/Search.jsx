import React from 'react'
import { SearchItem } from '~/components'
import icons from '~/utils/icons'

const { FaRegBuilding, CiLocationOn, RiPriceTag3Line, FaCropSimple, FiDelete, MdArrowForwardIos, CiSearch } = icons

const Search = () => {
    return (
        <div className='w-main mx-auto mt-[10px] lg:flex-row flex-col bg-[#febb02] rounded-md flex items-center p-[10px] gap-3'>
            <SearchItem iconBefore={<FaRegBuilding />} iconAfter={<FiDelete />} text={'Phòng trọ, nhà trọ'} fontWeight />
            <SearchItem iconBefore={<CiLocationOn />} iconAfter={<MdArrowForwardIos />} text={'Toàn quốc'} />
            <SearchItem iconBefore={<RiPriceTag3Line />} iconAfter={<MdArrowForwardIos />} text={'Chọn giá'} />
            <SearchItem iconBefore={<FaCropSimple />} iconAfter={<MdArrowForwardIos />} text={'Chọn diện tích'} />
            <button type='button' className='px-3 w-full text-[13px] bg-main font-bold text-white h-[35px] rounded-md flex justify-center items-center gap-1'>

                <CiSearch size={18} />
                Tìm kiếm
            </button>
        </div>
    )
}

export default Search
