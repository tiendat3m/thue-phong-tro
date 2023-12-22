import axios from '../axios'

export const apiGetPosts = () => axios({
    url: '/api/v1/post/',
    method: 'get'
})


export const apiGetPostsLimit = (query) => axios({
    url: `/api/v1/post/limit/`,
    method: 'get',
    params: query
})

export const apiGetNewPosts = () => axios({
    url: '/api/v1/post/new-post',
    method: 'get'
})