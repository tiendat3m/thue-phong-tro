export const numberToString = (inputString) => {
    const number = inputString.match(/\d+/g)[0]
    return Number(number)
}