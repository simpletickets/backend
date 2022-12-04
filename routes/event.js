import express from 'express'
import { createEvent, deleteEvent, getAllEvents, getEvent, updateEvent } from '../controllers/event.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()


// CREATE
router.post("/:userId", verifyUser, createEvent)
// UPDATE
router.put("/:id", verifyUser, updateEvent)
// DELETE
router.delete("/:id/:userId", verifyAdmin, deleteEvent)
// GET
router.get("/:id", getEvent)
// GET ALL
router.get("/", getAllEvents)

export default router