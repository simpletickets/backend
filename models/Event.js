import mongoose from 'mongoose';
const { Schema } = mongoose;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    planner : {
        type: String,
        require: true,
    },

    desc:{
        type: String,
        required: true,
    },
    date: { 
        type: Date, 
        default: Date.now,
     },
   earlyBird: {
    type:Number,
   },
   ticketFee: {
    type: Number,
    required: true,
   },
   photos:{
    type:[String],
    // required: true
   },
   address: {
    type: String,
    required: true,
},
availableTicket: {
    type: Number,
    required: true,
}
},
{timestamps: true});

export default mongoose.model("Event", EventSchema)