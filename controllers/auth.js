import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { createError } from '../utils/error.js';





// CREATE
export const register = async (req,res,next) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User ({
       ...req.body,
        password: hash,
    });
    try{
        const savedUser = await newUser.save()
        res.status(200).json("New user has been created")
    }catch(err){
       next(err)
    }
}


// LOGIN
export const login = async (req,res,next) =>{
    try{
       const user = await User.findOne({username:req.body.username})
       if(!user) return next(createError(401, "User not found"))

       const isPassword = await bcrypt.compare(req.body.password, user.password); // true
       if(!isPassword) return  next(createError(400, "Password is wrong"))
        

       const token =jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT)
       const {password, isAdmin, ...OtherDetails} = user._doc
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({...OtherDetails})
    }catch(err){
       next(err)
    }
}

// LOGIN
export const adminLogin = async (req,res,next) =>{
    try{
       const user = await User.findOne({username:req.body.username})
       if(!user) return next(createError(401, "User not found"))

       const isPassword = await bcrypt.compare(req.body.password, user.password); // true
       if(!isPassword) return  next(createError(400, "Password is wrong"))
        

       const token =jwt.sign({isAdmin: user.isAdmin}, process.env.JWT)
       const {password, isAdmin, ...OtherDetails} = user._doc
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({...OtherDetails})
    }catch(err){
       next(err)
    }
}

