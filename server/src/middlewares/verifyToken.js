import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) => {
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.status(401).json({
                success: false,
                mes: 'Invalid access token'
            })
            req.user = user
            next()
        })
    } else {
        return res.status(401).json({
            success: false,
            mes: 'Require authentication'
        })
    }

}