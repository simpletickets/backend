import express from 'express'
import { adminLogin, login, register } from '../controllers/auth.js'

const router = express.Router()


// CREATE
router.post("/register", register)
router.post("/login", login)
router.post("/adminlogin", adminLogin)



export default router