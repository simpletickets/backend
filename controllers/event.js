
import Event from '../models/Event.js'
import User from '../models/User.js';
import { createError } from '../utils/error.js'


// CREATE
export const createEvent = async (req, res, next) => {
    const userId = req.params.userId;
    const newEvent = new Event(req.body);
    try {
        const savedEvent = await newEvent.save()
        try {
            await User.findByIdAndUpdate(userId, {
                 $push: { events: savedEvent._id },
                 });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedEvent)
    } catch (err) {
        next(err)
    }
}

// UPDATE
export const updateEvent = async (req, res, next) => {
    
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
         
        res.status(200).json(updatedEvent)
    } catch (err) {
        next(err)
    }
}

// DELETE
export const deleteEvent = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        await Event.findByIdAndDelete(
            req.params.id
        )
        try {
            await User.findByIdAndUpdate(userId, {
                 $pull: { events: req.params.id },
                 });
        } catch (err) {
            next(err)
        }
        res.status(200).json('Event has been deleted')
    } catch (err) {
        next(err)
    }
}

// GET
export const getEvent = async (req, res, next) => {
    try {
        const getEvent = await Event.findById({ _id: req.params.id })
        res.status(200).json(getEvent)
    } catch (err) {
        next(err)
    }
}

// GET ALL
export const getAllEvents = async (req, res, next) => {
    try {
        const getEvents = await Event.find()
        res.status(200).json(getEvents)
    } catch (err) {
        next(err)
    }
}
