import { GET_ENTITY } from "./action";
import { GETDATA } from "./action";

const initalstate={
    petdata:[]
}

export const PetReducer=(store=initalstate,{type,payload})=>{
    switch(type){
        case GET_ENTITY :
            return {...store,petdata:payload}
        default :
           return store
    }   
}