import * as categoryController from '../services/category'

export const category = async (req, res) => {
    try {
        const response = await categoryController.getCategories({ raw: true })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            error: -1,
            msg: 'Fail at category controller' + error
        })
    }
}
