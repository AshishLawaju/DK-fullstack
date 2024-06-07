import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
// import "dotenv/config";
import express from "express";
import connectDB from "./utils/connectDB.js";
import mainRouter from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    // allowedHeaders: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);
app.use("/", mainRouter);
app.get("/", (req, res) => {
  res.send("test ok");
});

connectDB().then(() => {
  app.listen(4000, () => {
    console.log("server started");
  });
});
