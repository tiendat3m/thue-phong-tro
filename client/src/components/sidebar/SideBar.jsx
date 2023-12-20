import React, { useEffect } from 'react'
import SideBarItem from './SideBarItem'
import * as actions from '../../store/actions'
import { useSelector } from 'react-redux'
import withBaseComponent from '~/hocs/withBaseComponent'
const SideBar = ({ dispatch }) => {
    const { categories, prices, areas } = useSelector(state => state.app)
    useEffect(() => {
        dispatch(actions.getPrices())
        dispatch(actions.getAreas())
    }, [])
    return (
        <div className='flex flex-col gap-4'>
            <SideBarItem content={categories} title='Danh mục cho thuê' />
            <SideBarItem content={prices} title='Xem theo giá' isDouble={true} />
            <SideBarItem content={areas} title='Xem theo diện tích' isDouble={true} />
        </div>
    )
}

export default withBaseComponent(SideBar)
