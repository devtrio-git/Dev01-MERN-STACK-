import mongoose from "mongoose";


export default async function connectDb(uri) {
    try {
        await mongoose.connect(uri);
        console.log("Db connected successfully");
    } catch (error) {
        console.log("Failed to connect db", error);
        
    }    
}