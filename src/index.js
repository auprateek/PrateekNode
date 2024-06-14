import mongoose from "mongoose";

import express from "express";
import 'dotenv/config';

import connectDB from "./db/index.js";

connectDB();





// const app = express();

// ;(async() => {
// try {
//   await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   //await  mongoose.connect("mongodb+srv://prateek:Prateek123@cluster0.hyh5acv.mongodb.net/ChaiCode")
//   .then(() => console.log('Connected!'));
//   app.on("error", () =>{
//     console.log("Application is not able to connect with DB")
//     throw error
//   })
//     app.listen(process.env.PORT, ()=>{
//       console.log("App is running on the port", process.env.PORT)
//     })
// } catch (error) {
//     console.error("ERROR in DB CONNECTION", error)
//     throw error
// }
// })()