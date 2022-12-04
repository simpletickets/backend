import mongoose from 'mongoose';
const { Schema } = mongoose;

const AuthSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirm_password: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Auth", AuthSchema)