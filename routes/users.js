import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.js'
// import { verifyAdmin } from '../utils/admin/verifyToken.js'
import { verifyUser, verifyAdmin  } from '../utils/verifyToken.js'

const router = express.Router()



// UPDATE
router.put("/:id", verifyUser, updateUser)
// DELETE
router.delete("/:id", verifyUser, deleteUser)
// GET
router.get("/:id", verifyUser, getUser)

// GET ALL
router.get("/", verifyAdmin, getAllUsers)


// GET ADMIN
// router.get("/admin", verifyAdmin, getAdmin)
export default router