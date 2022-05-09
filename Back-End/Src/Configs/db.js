const mongoose=require('mongoose');

module.exports=()=>{
    return mongoose.connect('mongodb+srv://Sahil:Munjhalji2579@cluster0.3b6sd.mongodb.net/BoFirst?retryWrites=true&w=majority');
}