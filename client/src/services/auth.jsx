import axios from "../axios"
export const apiRegister = (payload) => axios({
    url: '/api/v1/auth/register',
    method: 'post',
    data: payload
})