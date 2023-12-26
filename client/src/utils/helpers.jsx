import moment from "moment"
import 'moment/locale/vi'
import icons from "./icons"

const { AiFillStar, AiOutlineStar } = icons

export const validate = (payload, setInvalidFields) => {
    let invalids = 0
    const formatPayload = Object.entries(payload)
    for (let arr of formatPayload) {
        if (arr[1].trim() === '') {
            invalids++
            setInvalidFields(prev => ([...prev, { name: arr[0], mes: 'Không thể bỏ trống trường này' }]))
        }
    }
    for (let arr of formatPayload) {
        switch (arr[0]) {
            case 'email':
                const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (!arr[1].match(regex)) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Email invalids' }])
                }
                break;
            case 'password':
                if (arr[1].length < 6) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Mật khẩu phải tối thiểu 6 kí tự' }])
                }
                break;

            case 'phone':
                if (!+arr[1]) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Số điện thoại không hợp lệ' }])
                }
                break;
            default:
                break;
        }
    }

    return invalids
}

export const formatVietnameseToString = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-")
}

export const renderStarFromNumber = (number, size) => {
    if (!Number(number)) return

    const stars = []
    number = Math.round(number)
    for (let i = 0; i < +number; i++) stars.push(<AiFillStar color='yellow' size={size || 16} className="star-item" />)
    // for (let i = 5; i > +number; i--) stars.push(<AiOutlineStar color="f1b400" size={size || 16} />)

    return stars
}

export const formatTime = (time) => {
    return moment(time).fromNow()
}

export const getNumbersPrice = (string) => string.split(' ').map(item => +item).filter(item => !item === false)
export const getNumbersArea = (string) => string.split(' ').map(item => +item.match(/\d+/)).filter(item => item !== 0)

export const convert100toTarget = (percent) => {
    return (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10
}

// export const convert15to100 = (percent) => {
//     return Math.floor(percent / 15) * 100
// }

