import React, { useEffect } from 'react'
import { Button, ListItem } from '..'
import { arrange } from '~/utils/constants'
import * as actions from '~/store/actions'
import withBaseComponent from '~/hocs/withBaseComponent'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'


const List = ({ dispatch, categoryCode }) => {
    const [searchParams] = useSearchParams()
    const { posts } = useSelector(state => state.post)
    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) params.push(entry)
        let searchParamsObject = {}
        params?.map(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        if (categoryCode) searchParamsObject.categoryCode = categoryCode
        dispatch(actions.getPostsLimit(searchParamsObject))
    }, [searchParams])
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
                {posts.length > 0 && posts?.map(item => (
                    <ListItem key={item.id}
                        images={JSON.parse(item?.images?.image)}
                        title={item.title}
                        star={+item.star}
                        address={item.address}
                        attributes={item.attributes}
                        user={item.user}
                        description={JSON.parse(item?.description).join('. ')} />
                ))}
            </div>

        </div>
    )
}

export default withBaseComponent(List)
