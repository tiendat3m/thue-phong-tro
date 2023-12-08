import express from 'express'
import * as categoryController from '../controllers/category'
const router = express.Router()
router.get('/', categoryController.category)

export default router