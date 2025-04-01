import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
