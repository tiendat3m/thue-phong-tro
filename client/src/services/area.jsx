import axios from '../axios'

export const apiGetAreas = () => axios({
    url: '/api/v1/area/',
    method: 'get',
})