import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config();

const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Not connected with DB, error is :", error);
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// import express from "express";

// const app = express();
// const port = process.env.PORT
// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("not connected with db error is :", error);
//     });

//     app.listen(port, () => {
//       console.log("running on port :", port);
//     });
//   } catch (error) {
//     console.log("Error:", error);
//   }
// })();
