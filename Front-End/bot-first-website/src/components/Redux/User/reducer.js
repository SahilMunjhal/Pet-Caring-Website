import {GET_USER} from "./action";

const initalstate={
    user:{}
};

export const UserReducer=(store=initalstate,{type,payload})=>{
    switch(type){
        case GET_USER:
            return {...store,user:payload}
        default :
            return store
    }
};

