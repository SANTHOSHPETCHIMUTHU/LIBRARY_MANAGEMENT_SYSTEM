import mongoose from 'mongoose';

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL,{
    dbName:"MERN STACK LIBRARY MANAGEMENT"
  })
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
}