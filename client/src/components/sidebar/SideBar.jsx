import React, { memo } from 'react'
import SideBarItem from './SideBarItem'
import { useSelector } from 'react-redux'
import withBaseComponent from '~/hocs/withBaseComponent'
import { NewPost } from '..'
const SideBar = () => {
    const { categories, prices, areas } = useSelector(state => state.app)
    // useEffect(() => {
    //     dispatch(actions.getPrices())
    //     dispatch(actions.getAreas())
    // }, [])
    return (
        <div className='flex flex-col gap-4'>
            <SideBarItem content={categories} title='Danh mục cho thuê' />
            <SideBarItem content={prices} title='Xem theo giá' isDouble={true} type='priceCode' />
            <SideBarItem content={areas} title='Xem theo diện tích' isDouble={true} type='areaCode' />
            <NewPost />
        </div>
    )
}

export default withBaseComponent(memo(SideBar))
