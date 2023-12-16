import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PageNumber } from '..'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { arrange } from '~/utils/constants';
const Pagination = ({ page }) => {

    const { count, posts } = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(+page || 1)
    const [isHideEnd, setIsHideEnd] = useState(false)
    const [isHideStart, setIsHideStart] = useState(false)
    useEffect(() => {
        let maxPage = Math.floor(count / posts.length)
        let start = (currentPage - 1) <= 0 ? 1 : (currentPage - 1)
        let end = (currentPage + 1) > maxPage ? maxPage : (currentPage + 1)
        let temp = []
        for (let i = start; i <= end; i++) {
            temp.push(i)
        }
        setArrPage(temp)
        currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false)
        currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false)
    }, [count, posts, currentPage])
    return (
        <div className='flex justify-center gap-3 py-5'>
            {!isHideStart && <PageNumber icon={<GrLinkPrevious />} setCurrentPage={setCurrentPage} text={1} />}
            {!isHideStart && <PageNumber text={'...'} />}
            {arrange?.length > 0 && arrPage.map(item => (
                <PageNumber key={item} text={item} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            ))}

            {!isHideEnd && <PageNumber text={'...'} />}
            {!isHideEnd && <PageNumber icon={<GrLinkNext />} text={Math.floor(count / posts.length)} setCurrentPage={setCurrentPage} />}
        </div>
    )
}

export default Pagination
