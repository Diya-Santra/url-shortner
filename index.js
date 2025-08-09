import express from "express";
import connectDB from "./db/database.js";
import router from "./routes/url.routes.js";
import dotenv from "dotenv";

//env variable setup
dotenv.config();

//database connection
const DB_URL=process.env.MONGO_URL
connectDB(DB_URL)

//app initialiaztion
const app=express();

//middleware
app.use(express.json())

//routes
app.use("/",router)

//listeing
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})


