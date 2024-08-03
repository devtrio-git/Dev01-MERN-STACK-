import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: { type: String },
    tags: { type: [String] }
});


export const postModel = mongoose.model("post", postSchema);