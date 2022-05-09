import {createStore,applyMiddleware} from "redux";
import { combineReducers } from "redux"; 
import {PetReducer} from "./CreateEntityRedux/reducer";
import {UserReducer} from "./User/reducer";

const rootReducer=combineReducers({
    pet:PetReducer,
    user:UserReducer,
});

const LogReducer=(store)=>(next)=>(action)=>{
    console.log(action);
    if(typeof(action)=='function'){     
        return action(store.dispatch);
    }

    next(action);
}


export const store=createStore(
    rootReducer,
    applyMiddleware(LogReducer),
);
