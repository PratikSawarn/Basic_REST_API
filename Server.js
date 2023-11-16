require('dotenv').config()

const express=require("express")
const mongoose=require("mongoose")
const subscriberRouter=require('./routes/subscriber')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})

const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>{console.log("Database Connected :)")})

const app=express();

app.use(express.json())


app.use('/subscriber',subscriberRouter)


app.listen(3000,()=>
    console.log("server Started")
)