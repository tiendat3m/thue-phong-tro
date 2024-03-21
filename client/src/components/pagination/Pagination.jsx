import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PageNumber } from '..'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { arrange } from '~/utils/constants';
import { useSearchParams } from 'react-router-dom';
const Pagination = () => {

    const { count, posts } = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isHideEnd, setIsHideEnd] = useState(false)
    const [isHideStart, setIsHideStart] = useState(false)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        let page = searchParams.get('page')
        page && +page !== currentPage && setCurrentPage(+page)
        !page && setCurrentPage(1)
        window.scrollTo(0, 0)
    }, [searchParams])

    useEffect(() => {
        let maxPage = Math.ceil(count / 5)
        let start = (currentPage - 2) <= 0 ? 1 : (currentPage - 2)
        let end = (currentPage + 2) > maxPage ? maxPage : (currentPage + 2)
        let temp = []
        for (let i = start; i <= end; i++) {
            temp.push(i)
        }
        setArrPage(temp)
        currentPage <= 3 ? setIsHideStart(true) : setIsHideStart(false)
        currentPage >= maxPage - 2 ? setIsHideEnd(true) : setIsHideEnd(false)
    }, [count, posts, currentPage])
    return (
        <div className='flex justify-center gap-3 py-5'>
            {!isHideStart && <PageNumber setCurrentPage={setCurrentPage} text={1} />}
            {(!isHideStart && currentPage !== 4) && <PageNumber text={'...'} />}
            {arrange?.length > 0 && arrPage.map(item => (
                <PageNumber key={item} text={item} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            ))}

            {!isHideEnd && <PageNumber text={'...'} />}
            {!isHideEnd && <PageNumber icon={<GrLinkNext />} text={Math.floor(count / posts.length)} setCurrentPage={setCurrentPage} />}
        </div>
    )
}

export default Pagination
