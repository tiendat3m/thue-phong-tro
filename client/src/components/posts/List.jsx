import React, { useEffect, useState } from 'react'
import { Button, ListItem } from '..'
import { arrange } from '~/utils/constants'
import * as actions from '~/store/actions'
import withBaseComponent from '~/hocs/withBaseComponent'
import { useSelector } from 'react-redux'



const List = ({ dispatch }) => {
    const { posts, count } = useSelector(state => state.post)
    useEffect(() => {
        // dispatch(actions.getPosts())
        dispatch(actions.getPostsLimit(0))
    }, [])
    // console.log(posts.slice(0, 20))
    console.log(count)
    return (
        <div className='bg-white flex flex-col gap-3 shadow-md rounded-md'>
            <div className='flex justify-between px-4 pt-4'>
                <h3 className='text-lg font-semibold'>Danh sách tin đăng</h3>
                <span className='text-sm text-gray-500'>Cập nhật: 12:05 12/12/2023</span>
            </div>
            <div className='flex items-center text-[13.3px] gap-2 px-4'>
                <span>Sắp xếp: </span>
                {arrange?.map(item => (
                    <Button key={item.id} style={'bg-gray-200 rounded-md px-[10px] py-[3px]'}>
                        {item.name}
                    </Button>
                ))}
            </div>
            <div className=''>
                {posts.length > 0 && posts.slice(0, 20).map(item => (
                    <ListItem key={item.id} images={JSON.parse(item.images.image)} title={item.title} star={+item.star} address={item.address} attributes={item.attributes} user={item.user} description={JSON.parse(item?.description).join(',')} />
                ))}
            </div>
        </div>
    )
}

export default withBaseComponent(List)
