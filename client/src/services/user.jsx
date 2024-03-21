import axios from '../axios'

export const getCurrent = () => axios({
    url: '/api/v1/user/get-current',
    method: 'get'
})