import React, { memo } from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'
import withBaseComponent from '~/hocs/withBaseComponent'

const notActive = 'w-[45px] h-[45px] flex items-center justify-center hover:bg-gray-200 rounded-md cursor-pointer'
const active = 'w-[45px] h-[45px] flex items-center justify-center bg-[#e13427] text-white rounded-md'

const PageNumber = ({ text, currentPage, navigate, location, icon, setCurrentPage, type }) => {
    const [searchParams] = useSearchParams()
    let entries = searchParams.entries()
    const append = (entries) => {
        let params = []
        searchParams.append('page', +text)
        for (let entry of entries) params.push(entry)
        let a = {}
        params?.map(i => {
            a = { ...a, [i[0]]: i[1] }
        })
        return a
    }
    const handleChangePage = () => {
        if (!(text === '...')) {

            setCurrentPage(+text)
            navigate({
                pathname: location.pathname,
                search: createSearchParams(append(entries)).toString()
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
