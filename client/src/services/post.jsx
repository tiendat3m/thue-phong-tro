import axios from '../axios'

export const apiGetPosts = () => axios({
    url: '/api/v1/post/',
    method: 'get'
})