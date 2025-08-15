import express from "express";
import connectDB from "./db/database.js";
import router from "./routes/url.routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose"
import URL from "./models/url.model.js";
import path from "path";
import staticRoute from "./routes/staticRouter.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";


//env variable setup
dotenv.config();

//database connection
const DB_URL=process.env.MONGO_URL
connectDB(DB_URL)



//app initialiaztion
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

//ejs
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))



app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render("home",{
        urls:allUrls
    })
        
});

//routes
app.use("/",router)
app.use("/",staticRoute)
app.use("/auth",authRouter)

//listeing
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})


