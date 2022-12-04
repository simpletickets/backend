import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true,
    }
},
{timestamps: true});

export default mongoose.model("Category", CategorySchema)