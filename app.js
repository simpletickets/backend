import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cookieParser from 'cookie-parser'
dotenv.config()
const app= express();



const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");
      } catch (error) {
        throw error;
      }
}
const PORT = 4000;


import authRouter from "./routes/auth.js"
import eventRouter from "./routes/event.js"
import usersRouter from "./routes/users.js"
import categoryRouter from "./routes/category.js"





// Middlewares 

app.use(express.json())     // This will allow interactin with express collection
app.use(cookieParser())    


//Admin Routes
app.use("/admin/auth", authRouter)     // Authentication endpoint
app.use("/admin/users", usersRouter)   // Users endpoint
app.use("/admin/event", eventRouter)   // event endpoint
app.use("/admin/category", categoryRouter)   // category endpoint



//Partner Routes
app.use("/partner/auth", authRouter)     // Authentication endpoint
app.use("/partner/users", usersRouter)   // Users endpoint
app.use("/partner/event", eventRouter)   // event endpoint
app.use("/partner/category", categoryRouter)   // category endpoint

// Error handling 
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
 } )
})
app.listen(process.env.PORT || PORT, 
    ()=>{
      connect()
       console.log(`Listening to port ${PORT}`)}
    );
    // app.get('/', (req,res)=> {
    //     res.send("Welcome to Simple Tickets")
    // });
    //       app.get('/:id', function(req, res) {
    //         res.send('Hello ' + req.params.id + '!');
    //       });