import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectdInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`,
    );
    console.log(
      "DB Connected Successfully !!",
      connectdInstance.connection.host,
    );
  } catch (error) {
    console.log("DB Connection Feild", error);
    process.exit(1);
  }
}

export default connectDB;
