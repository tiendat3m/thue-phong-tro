import axios from '../axios'

export const apiGetPrices = () => axios({
    url: '/api/v1/price/',
    method: 'get',
})