import express from "express";
import URL from "./models/url.model.js";
import connectDB from "./db/database.js";
import dotenv from "dotenv";
import router from "./routes/url.routes.js"

//environmental variable setup
dotenv.config()

//app initialization
const app = express();

//middlewares
app.use(express.json());

//database connection
const DB_Url =process.env.MONGO_URL
  
connectDB(DB_Url);

//routes
app.use("/", router);

const PORT = process.env.PORT
//listening
app.listen(PORT, () => {
  console.log(`server is running at ${PORT} `);
});
