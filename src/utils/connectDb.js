import mongoose from "mongoose";

export const connectDB = async () => {
   try {
      const { connection } = await mongoose.connect("mongodb://localhost:27017/employees", { dbName: "todos" });
      console.log(`Connected to DB ${connection.host}`);
   } catch (error) {
      console.log(error);
   }
};
