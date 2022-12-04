import User from '../models/User.js'


// UPDATE
export const updateUser = async (req,res,next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
           { $set: req.body},
           {new: true}
        )
        res.status(200).json(updatedUser)
    }catch(err){
        next(err)
    }
}

// DELETE
export const deleteUser = async (req,res,next) =>{
    try{
        await User.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json('User has been deleted')
    }catch(err){
        next(err)
    }
}

// GET
export const getUser = async (req,res,next) =>{
    try{
        const getUser = await User.findById(
            req.params.id
            )
            const {password, isAdmin, ...OtherDetails} = getUser._doc
            res.status(200).json({...OtherDetails})
        // res.status(200).json(getUser)
    }catch(err){
        next(err)
    }
}

// GET ALL
export const getAllUsers = async (req,res,next) =>{

    try{
        const getUsers = await User.find()
        res.status(200).json(getUsers)
    }catch(err){
        next(err)
    }
}

// GET ADMIN
// export const getAdmin = async (req,res,next) =>{
//     try{
//         const getAdmin = await User.find(
//             req.params.isAdmin
//             )
//             // const {password, isAdmin, ...OtherDetails} = getUser._doc
//             res.status(200).json(getAdmin)
//         // res.status(200).json(getUser)
//     }catch(err){
//         next(err)
//     }
// }