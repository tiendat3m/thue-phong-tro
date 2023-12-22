import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PostItem } from '..'

import * as actions from '~/store/actions'
import withBaseComponent from '~/hocs/withBaseComponent'
const NewPost = ({ dispatch }) => {
    const { newPosts } = useSelector(state => state.post)
    console.log(newPosts)
    useEffect(() => {
        dispatch(actions.getNewPosts())
    }, [])
    return (
        <div className='bg-white p-4 rounded-md shadow-md '>
            <h3 className='text-lg font-semibold mb-4'>Tin mới đăng</h3>
            {newPosts?.map(item => (
                <PostItem
                    key={item.id}
                    title={item.title}
                    price={item.attributes.price}
                    image={JSON.parse(item?.images?.image)}
                    createdAt={item.createdAt}
                />
            ))}
        </div>
    )
}

export default withBaseComponent(memo(NewPost))
