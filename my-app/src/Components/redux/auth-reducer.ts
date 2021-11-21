import {ACTIONS_TYPE, AuthDataActionType} from "./actions";
import {AuthDataType} from "../../api/user-api";


const InitialState:InitialStateAuthType = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
}

export const authReducer = (state:InitialStateAuthType=InitialState, action:AuthDataActionType):InitialStateAuthType=>{
    switch(action.type){
        case ACTIONS_TYPE.GET_AUTH_DATA:
            return {...state, ...action.data, isAuth:true};
        default: return state
    }
}
type InitialStateAuthType = AuthDataType & {
    isAuth:boolean
}