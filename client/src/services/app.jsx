import axios from '../axios'

export const apiGetPrices = () => axios({
    url: '/api/v1/price/',
    method: 'get',
})

export const apiGetAreas = () => axios({
    url: '/api/v1/area/',
    method: 'get',
})

export const apiGetProvinces = () => axios({
    url: '/api/v1/province/',
    method: 'get',
})