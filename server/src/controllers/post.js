import * as postService from '../services/post'


export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({
            error: -1,
            msg: 'Fail at post controller' + error
        })
    }
}

export const getPostsLimit = async (req, res) => {
    const { page, ...query } = req.query
    try {
        const response = await postService.getPostsLimitService(page, query)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({
            error: -1,
            msg: 'Fail at post controller' + error
        })
    }
}

export const getNewPosts = async (req, res) => {
    try {
        const response = await postService.getNewPostsService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({
            error: -1,
            msg: 'Fail at post controller' + error
        })
    }
}
