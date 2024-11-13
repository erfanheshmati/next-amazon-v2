import mongoose from "mongoose";

export default async function dbConnect() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB URI is not defined in environment variables.");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`MongoDB connection failed: ${error.message}`);
    } else {
      throw new Error("MongoDB connection failed: Unknown error");
    }
  }
}
