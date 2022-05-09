import axios from "axios";

export const GET_ENTITY='GET_ENTITY';

export const GETDATA="GETDATA";

export const get_petdata=(payload)=>{
    return{
        type:GET_ENTITY,
        payload
    }
}

export const getdata=()=>async function(dispatch){
    const res=await fetch('http://localhost:2345/entity');
    const data=await res.json();
    console.log(data);
    dispatch(get_petdata(data));
  };

