import axios from '../axios'

export const apiGetPosts = () => axios({
    url: '/api/v1/post/',
    method: 'get'
})


export const apiGetPostsLimit = (page) => axios({
    url: `/api/v1/post/limit?page=${page}`,
    method: 'get'
})