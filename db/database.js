import mongoose from "mongoose"

const connectDB = function(dburl) {
  mongoose.connect(dburl)
    .then(() => {
      console.log("MONGODB is connected")
    }).catch((err) => {
      console.log(err)
    })
}

export default connectDB