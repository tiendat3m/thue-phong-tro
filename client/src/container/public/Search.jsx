import React, { memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal, SearchItem } from '~/components'
import icons from '~/utils/icons'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from '~/utils/path'
import withBaseComponent from '~/hocs/withBaseComponent'

const { FaRegBuilding, CiLocationOn, RiPriceTag3Line, FaCropSimple, FiDelete, MdArrowForwardIos, CiSearch } = icons

const Search = ({ navigate, location }) => {
    const { categories, areas, prices, provinces } = useSelector(state => state.app)
    const [isShowModal, setIsShowModal] = useState(false)
    const [content, setContent] = useState([])
    const [name, setName] = useState('')
    const [queries, setQueries] = useState({})
    const [arrMinMax, setArrMinMax] = useState({})
    const [defaultText, setDefaultText] = useState('')

    useEffect(() => {
        if (!location.pathname.includes(path.SEARCH)) {
            setArrMinMax({})
            setQueries({})
        }
    }, [location])

    const handleShowModal = (content, name, defaultText) => {
        setContent(content)
        setName(name)
        setIsShowModal(true)
        setDefaultText(defaultText)
    }
    const handleSubmit = useCallback((e, query, arrMinMax) => {
        e.stopPropagation()
        setQueries(prev => ({ ...prev, ...query }))
        arrMinMax && setArrMinMax(prev => ({ ...prev, ...arrMinMax }))
        setIsShowModal(false)
    }, [isShowModal, queries])
    const handleSearch = () => {
        const queryCodes = Object.entries(queries).filter(item => item[0].includes('Number') || item[0].includes('Code')).filter(item => item[1])
        let queryCodesObject = {}
        queryCodes.forEach(item => { queryCodesObject[item[0]] = item[1] })
        const queryText = Object.entries(queries).filter(item => !item[0].includes('Code') || !item[0].includes('Number'))
        console.log(queries)
        let queryTextObject = {}
        queryText.forEach(item => {
            queryTextObject[item[0]] = item[1]
        })

        let titleSearch = `${queryTextObject.category ? queryTextObject.category : 'Cho thuê tất cả '}${queryTextObject.province ? ` tỉnh ${queryTextObject.province}` : ''} ${queryTextObject.price ? `giá ${queryTextObject.price}` : ''}${queryTextObject.area ? ` diện tích ${queryTextObject.area}` : ''}`

        // console.log(titleSearch)

        navigate({
            pathname: `/${path.SEARCH}`,
            search: createSearchParams(queryCodesObject).toString(),
        }, { state: { titleSearch } })
    }

    return (
        <>
            <div className='w-main mx-auto mt-[10px] lg:flex-row flex-col bg-[#febb02] rounded-md flex items-center p-[10px] gap-3'>
                <span onClick={() => handleShowModal(categories, 'category', 'Tìm tất cả')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<FaRegBuilding />} iconAfter={<FiDelete />} text={queries.category} defaultText={'Tìm tất cả'} fontWeight />
                </span>
                <span onClick={() => handleShowModal(provinces, 'province', 'Toàn quốc')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<CiLocationOn />} iconAfter={<MdArrowForwardIos />} text={queries.province} defaultText={'Toàn quốc'} />
                </span>
                <span onClick={() => handleShowModal(prices, 'price', 'Chọn giá')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<RiPriceTag3Line />} iconAfter={<MdArrowForwardIos />} text={queries.price} defaultText={'Chọn giá'} />
                </span>
                <span onClick={() => handleShowModal(areas, 'area', 'Chọn diện tích')} className='flex-1 cursor-pointer'>
                    <SearchItem iconBefore={<FaCropSimple />} iconAfter={<MdArrowForwardIos />} text={queries.area} defaultText={'Chọn diện tích'} />
                </span>
                <button onClick={handleSearch} type='button' className='px-3 w-full text-[13px] bg-main font-bold text-white h-[35px] rounded-md flex flex-1 justify-center items-center gap-1'>

                    <CiSearch size={18} />
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && <Modal
                queries={queries}
                handleSubmit={handleSubmit}
                arrMinMax={arrMinMax}
                content={content}
                name={name}
                setIsShowModal={setIsShowModal}
                defaultText={defaultText}
            />}
        </>
    )
}

export default memo(withBaseComponent(Search))
