import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const HomeDetails=()=>{

 const {id}=useParams();
 const[data,setData]=useState({}); 

 useEffect(()=>{
   datafn();
 },[]);

 const datafn=()=>{
     axios.get(`http://localhost:2345/entity/${id}`).then(({data})=>{
         setData(data);
     })
 }


    return (
        <div>
            <img src={data.img}/>
            <h1>{data.name}</h1>
            <h4>Summary : <span id="pagedetails">{data.summary}</span></h4>
            <h4>Number of pets that will be watched at one time : <span id="pagedetails">{data.watched}</span> </h4>
            <h4>Acepted Pet Types : <span id="pagedetails">{data.type}</span></h4>
            <h4>Accepted Pet size : <span id="pagedetails">{data.size} Kg</span></h4>
            <h4>Level of adult supervision. : <span id="pagedetails">{data.supervision} </span></h4>
            <h4>Cost Per Day. : <span id="pagedetails">{data.cost} </span></h4>
            
        </div>
       
        
    )
}