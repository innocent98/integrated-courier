import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUrl = process.env.MONGODB_URL;

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongoUrl || '');
    console.log("MongoDB connected");
  } catch (err) {
    throw new Error("Connection failed!");
  }
};

export default connectDB;
