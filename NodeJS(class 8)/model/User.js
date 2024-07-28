import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
    }
)

export const User = mongoose.model('user', UserSchema)