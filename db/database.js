import mongoose from "mongoose"

const connectDB= function (dbUrl){
    mongoose.connect(dbUrl)
        .then(()=>{
            console.log("MONGODB is connected")
        }).catch((err)=>{
            console.log(err)
        })
}
export default connectDB