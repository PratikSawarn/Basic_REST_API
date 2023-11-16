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
router.get('/:id',(req,res)=>{

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
router.patch('/:id',(req,res)=>{

})

// deleting
router.delete('/:id',(req,res)=>{

})

module.exports=router;