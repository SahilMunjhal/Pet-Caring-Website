const express=require('express');
const router=express.Router();
const User=require('../Models/user.model');
const jwt=require('jsonwebtoken')

const newtoken=(user)=>{
    return jwt.sign({user},'dummy');
}

const LogIn=async(req,res)=>{
    try {
        console.log(req.body)
        const user=await User.findOne({email:req.body.email})
        console.log(req.body.email)
        if(!user){
        return res.status(501).send({status:0});
      }
  
       const token=newtoken(user);
       
       const match=user.checkPassword(req.body.password);
       console.log(match);
       if(match)
       return res.status(202).send({status:1,token});
       return res.status(502).send({staus:0});
    }catch (error) {
        return res.status(403).send(error.message);
    }
}


const Register=async(req,res)=>{
    try {
        
         let user; 
         user=await User.findOne({email:req.body.email}).lean().exec();
        if(user)
        return res.status(404).send({status:0});

         user=await User.create(req.body);
        
         const token=newtoken(user);

         return res.status(203).send({status:1,token});
    } catch (error) {
        return res.status(404).send(error.message);
    }
}


module.exports={LogIn,Register};