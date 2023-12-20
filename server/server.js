import express from 'express'
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'
import { generateCode } from './src/utils/generateCode'
import { numberToString } from './src/utils/common'
require('dotenv').config()
const app = express()

// console.log(dataPrices, dataAreas)
// console.log(numberToString('41m2'))
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDatabase()
const port = process.env.PORT || 8888
const listener = app.listen(port, () => {
    console.log((`Server is running on port ${listener.address().port}`))
})