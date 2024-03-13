import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, SearchItem } from '~/components'
import * as actions from '../../store/actions'
import icons from '~/utils/icons'

const { FaRegBuilding, CiLocationOn, RiPriceTag3Line, FaCropSimple, FiDelete, MdArrowForwardIos, CiSearch } = icons

const Search = () => {
    const dispatch = useDispatch()
    const { categories, areas, prices, provinces } = useSelector(state => state.app)
    const [isShowModal, setIsShowModal] = useState(false)
    const [content, setContent] = useState([])
    const [name, setName] = useState('')
    const [queries, setQueries] = useState({})
    const [arrMinMax, setArrMinMax] = useState({})
    const [texts, setTexts] = useState({
        category: '',
        province: '',
        price: '',
        area: '',

    })
    const handleShowModal = (content, name) => {
        setContent(content)
        setName(name)
        setIsShowModal(true)
    }
    const handleSubmit = useCallback((e, query, arrMinMax) => {
        e.stopPropagation()
        setQueries(prev => ({ ...prev, ...query }))
        setTexts(prev => ({ ...prev, ...query }))
        arrMinMax && setArrMinMax(prev => ({ ...prev, ...arrMinMax }))
        setIsShowModal(false)
    }, [isShowModal, queries])
    const handleSearch = () => {
        const queryCodes = Object.entries(queries).filter(item => item[0].includes('Code'))
        let queryCodesObject = {}
        queryCodes.forEach(item => { queryCodesObject[item[0]] = item[1] })
        dispatch(actions.getPostsLimit(queryCodesObject))
        console.log(queryCodesObject)

    }

    return (
        <>
            <div className='w-main mx-auto mt-[10px] lg:flex-row flex-col bg-[#febb02] rounded-md flex items-center p-[10px] gap-3'>
                <span onClick={() => handleShowModal(categories, 'category')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<FaRegBuilding />} iconAfter={<FiDelete />} text={texts.category} defaultText={'Phòng trọ, nhà trọ'} fontWeight />
                </span>
                <span onClick={() => handleShowModal(provinces, 'province')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<CiLocationOn />} iconAfter={<MdArrowForwardIos />} text={texts.province} defaultText={'Toàn quốc'} />
                </span>
                <span onClick={() => handleShowModal(prices, 'price')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<RiPriceTag3Line />} iconAfter={<MdArrowForwardIos />} text={texts.price} defaultText={'Chọn giá'} />
                </span>
                <span onClick={() => handleShowModal(areas, 'area')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<FaCropSimple />} iconAfter={<MdArrowForwardIos />} text={texts.area} defaultText={'Chọn diện tích'} />
                </span>
                <button onClick={handleSearch} type='button' className='px-3 w-full text-[13px] bg-main font-bold text-white h-[35px] rounded-md flex flex-1 justify-center items-center gap-1'>

                    <CiSearch size={18} />
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && <Modal queries={queries} handleSubmit={handleSubmit} arrMinMax={arrMinMax} content={content} name={name} setIsShowModal={setIsShowModal} />}
        </>
    )
}

export default memo(Search)
