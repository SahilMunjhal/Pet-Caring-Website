const mongoose=require('mongoose');

const EntitySchema=new mongoose.Schema({
    name:{type:String},
    city:{type:String},
    address:{type:String},
    capacity:{type:Number},
    cost:{type:Number},
    verified:{type:String},
    rating:{type:String},
    watched:{type:Number},
    type:{type:String},
    size:{type:String},
    Emergency:{type:String},
    outdoor:{type:String},
    supervision:{type:String},
    summary:{type:String},
    img:{type:String}
});

module.exports=mongoose.model('Entities',EntitySchema);