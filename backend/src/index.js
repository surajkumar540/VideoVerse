import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB();

dotenv.config({
  path: "./config.env",
});

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.error("Error connecting to MongoDB:", err);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });f

//   } catch (error) {
//     console.log(error);
//   }
// })();
