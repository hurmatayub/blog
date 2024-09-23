import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://saqib:007007007@cluster0.q4iuu.mongodb.net/blog-app")
    console.log("DB connected");
}