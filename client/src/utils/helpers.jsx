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

export const getCodePrice = (totals) => {
    let arr = []
    return totals.map(item => {
        let arrMaxMin = getNumbersPrice(item.value)
        if (arrMaxMin.length === 1) arr.push(arrMaxMin[0])
        let sortedArr = arr.sort()
        return ({
            ...item,
            min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max: sortedArr.indexOf(arrMaxMin[0]) === 0 ? arrMaxMin[0] : sortedArr.indexOf(arrMaxMin[0]) === 1 ? 9999999 : arrMaxMin[1]
        })
    })
}

export const getCodeArea = (totals) => {
    let arr = []
    return totals.map(item => {
        let arrMinMax = getNumbersArea(item.value)
        if (arrMinMax.length === 1) arr.push(arrMinMax[0])
        let sortedArr = arr.sort()
        return ({
            ...item,
            min: sortedArr.indexOf(arrMinMax[0]) === 0 ? 0 : arrMinMax[0],
            max: sortedArr.indexOf(arrMinMax[0]) === 0 ? arrMinMax[0] : sortedArr.indexOf(arrMinMax[0]) === 1 ? 9999999 : arrMinMax[1]
        })
    })
}


export const getPriceGaps = (arrMinMax, prices) => {
    const pricesWithMinMax = getCodePrice(prices)
    return pricesWithMinMax.filter(item => (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) || (item.max >= arrMinMax[0] && item.max <= arrMinMax[1]))
}

export const getAreaGaps = (arrMinMax, areas) => {
    const pricesWithMinMax = getCodeArea(areas)
    return pricesWithMinMax.filter(item => (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) || (item.max >= arrMinMax[0] && item.max <= arrMinMax[1]))
}

