import * as insertSevice from '../services/insert'


export const insert = async (req, res) => {
    try {

        const response = await insertSevice.insertService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            error: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}