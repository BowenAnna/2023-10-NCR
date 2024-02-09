//Database connection
require("dotenv").config();
const mongoose=require("mongoose")

MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI)

mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

module.exports=mongoose;