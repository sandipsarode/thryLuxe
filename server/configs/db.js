import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Mongo DB Connected 🎉")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/thryluxe`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
