const express=require ('express');
const app=express();
const EntityController=require("./Controllers/Entity.controller");
app.use(express.json());
const connect=require("./Configs/db");
const cors=require('cors');
const {LogIn,Register}=require('./Controllers/user.controller');

const Port=2345;

app.use(cors());
app.use("/entity",EntityController);
app.use('/register',Register);
app.use('/logIn',LogIn);
 

app.listen(Port,async(req,res)=>{
   try {
        await connect();
        console.log(`Listening on port ${Port}`);
   } catch (error) {
       console.log(error.message);
   }
})