const express=require('express')
const router=express.Router()
const subscribers = require('../models/subscribers')

// getting all
router.get('/',async (req,res)=>{
    try{
        const Subscriber = await subscribers.find()
        res.json(Subscriber)
    }catch{
        res.status(500).json({message : err.message})
    }
})

// getting one
router.get('/:id',getSubscriber,(req,res)=>{
    res.json(res.Subscriber)
})

// creating one
router.post('/', async(req,res)=>{

    try{
        const Subscriber = await subscribers.create({
            name : req.body.name,
            email : req.body.email
        })
        // const newSubscriber = await Subscriber() 
        res.status(201).json(Subscriber)
    }catch{
        res.status(400).json({message : err.message})
    }

})

// updating one
router.patch('/:id',async (req,res)=>{
    
    try{
        const updatedSubscriber = await subscribers.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updatedSubscriber)
    }catch(err){
        res.status(400).json({ message:err.message })
    }
})

// deleting
router.delete('/:id',getSubscriber,async (req,res)=>{
    try{
        await subscribers.deleteOne()
        res.json({message:"id deleted"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})


// middlewear
async function getSubscriber(req,res,next){
    let Subscriber
    try{
        Subscriber = await subscribers.findById(req.params.id)
        if(Subscriber == null){
            return res.status(500).json({message:"this id is not exist or maybe deleted "})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.Subscriber = Subscriber
    next()
}

module.exports=router;