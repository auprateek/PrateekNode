import {app} from "./app.js"

import 'dotenv/config';

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
  app.listen(process.env.PORT|| 7000,()=>{
    console.log(`App is running on port : ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("DB connection Failed")
})





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