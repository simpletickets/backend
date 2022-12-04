import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    acctName: {
        type: String
    },
    acctNumber: {
        type: Number
    },
    events: {
        type: [String], 
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
   photos:{
    type:[String],
   },
   address: {
    type: String,
},
},
{timestamps: true});

export default mongoose.model("User", UserSchema)