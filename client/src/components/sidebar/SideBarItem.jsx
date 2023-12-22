import React, { memo } from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import withBaseComponent from '~/hocs/withBaseComponent'
import { formatVietnameseToString } from '~/utils/helpers'
import icons from '~/utils/icons'

const { MdArrowForwardIos } = icons

const SideBarItem = ({ title, content, isDouble, location, navigate, type }) => {
    const formatContent = () => {
        const evenEls = content?.filter((item, index) => index % 2 === 0)
        const oddEls = content?.filter((item, index) => index % 2 !== 0)
        const formatContent = oddEls?.map((item, index) => {
            return {
                right: item,
                left: evenEls?.find((evenEl, index2) => index2 === index)
            }
        })
        return formatContent
    }
    const handleFilterPrice = (code) => {
        navigate({
            pathname: location.pathname,
            search: createSearchParams({
                [type]: code,
            }).toString()
        })
    }

    return (
        <div className='bg-white p-4 rounded-md shadow-md '>
            <h3 className='text-lg font-semibold mb-4'>{title}</h3>
            {!isDouble && content?.map(item => (
                <Link to={`/${formatVietnameseToString(item.value)}`} key={item.code} className='flex items-center gap-1 border-b border-dashed hover:text-orange-500 cursor-pointer'>
                    <MdArrowForwardIos color='#B2B2B2' size={10} />
                    <p className='py-[5px] text-sm'>{item.value}</p>
                </Link>
            ))}
            {isDouble && <div className='flex flex-col w-full'>
                {formatContent(content)?.map((item, index) => (
                    <div key={index} className='flex items-center '>
                        <div onClick={() => handleFilterPrice(item.left.code)} className='flex flex-1 items-center gap-1 border-b border-dashed hover:text-orange-500 cursor-pointer'>
                            <MdArrowForwardIos color='#B2B2B2' size={10} />
                            <p className='py-[5px] text-sm'>{item?.left.value}</p>
                        </div>
                        <div onClick={() => handleFilterPrice(item.right.code)} key={item.code} className='flex flex-1 items-center gap-1 border-b border-dashed hover:text-orange-500 cursor-pointer'>
                            <MdArrowForwardIos color='#B2B2B2' size={10} />
                            <p className='py-[5px] text-sm'>{item?.right.value}</p>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default withBaseComponent(memo(SideBarItem))
