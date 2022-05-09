const express=require('express');
const router=express.Router();

const Entity=require('../Models/Entity.model');

router.post("/",async(req,res)=>{
    try {
        const entity=await Entity.create(req.body);
        return res.status(200).send(entity);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

let count=0;
router.get("/",async(req,res)=>{
    try {
         console.log(req.query.cost)
         let entities;
         if(req.query.cost=='asc'){
            entities=await Entity.find().sort({cost:1}).lean().exec();
         }else if(req.query.cost=='dsc'){
            entities=await Entity.find().sort({cost:-1}).lean().exec();
         }else{
            entities=await Entity.find(req.query).lean().exec();
         }
        return res.status(201).send(entities);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.get("/:id",async(req,res)=>{
    try {
        let query=req.params.id
        const entity=await Entity.findOne({_id:query}).lean().exec();
        return res.status(201).send(entity);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

module.exports=router;