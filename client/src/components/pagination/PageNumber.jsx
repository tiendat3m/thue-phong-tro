import React, { memo } from 'react'
import { createSearchParams } from 'react-router-dom'
import withBaseComponent from '~/hocs/withBaseComponent'

const notActive = 'w-[45px] h-[45px] flex items-center justify-center hover:bg-gray-200 rounded-md cursor-pointer'
const active = 'w-[45px] h-[45px] flex items-center justify-center bg-[#e13427] text-white rounded-md'

const PageNumber = ({ text, currentPage, navigate, location, icon, setCurrentPage, type }) => {
    const handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text)
            navigate({
                pathname: location.pathname,
                search: createSearchParams({ page: text }).toString()
            })
        }
    }
    return (
        <div
            className={+text === +currentPage ? `${active} ` : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`}
            onClick={handleChangePage}
        >
            {icon || text}
        </div>
    )
}

export default withBaseComponent(memo(PageNumber))
