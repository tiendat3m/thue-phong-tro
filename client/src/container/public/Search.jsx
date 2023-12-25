import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal, SearchItem } from '~/components'
import icons from '~/utils/icons'

const { FaRegBuilding, CiLocationOn, RiPriceTag3Line, FaCropSimple, FiDelete, MdArrowForwardIos, CiSearch } = icons

const Search = () => {
    const { categories, areas, prices, provinces } = useSelector(state => state.app)
    const [isShowModal, setIsShowModal] = useState(false)
    const [content, setContent] = useState([])
    const [name, setName] = useState('')
    const handleShowModal = (content, name) => {
        setContent(content)
        setName(name)
        setIsShowModal(true)
    }
    return (
        <>
            <div className='w-main mx-auto mt-[10px] lg:flex-row flex-col bg-[#febb02] rounded-md flex items-center p-[10px] gap-3'>
                <span onClick={() => handleShowModal(categories, 'category')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<FaRegBuilding />} iconAfter={<FiDelete />} text={'Phòng trọ, nhà trọ'} fontWeight />
                </span>
                <span onClick={() => handleShowModal(provinces, 'province')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<CiLocationOn />} iconAfter={<MdArrowForwardIos />} text={'Toàn quốc'} />
                </span>
                <span onClick={() => handleShowModal(prices, 'price')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<RiPriceTag3Line />} iconAfter={<MdArrowForwardIos />} text={'Chọn giá'} />
                </span>
                <span onClick={() => handleShowModal(areas, 'area')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<FaCropSimple />} iconAfter={<MdArrowForwardIos />} text={'Chọn diện tích'} />
                </span>
                <button type='button' className='px-3 w-full text-[13px] bg-main font-bold text-white h-[35px] rounded-md flex flex-1 justify-center items-center gap-1'>

                    <CiSearch size={18} />
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && <Modal content={content} name={name} setIsShowModal={setIsShowModal} />}
        </>
    )
}

export default memo(Search)
