import {AuthDataActionType} from "../actions/auth-actions";
import {ACTIONS_TYPE} from "../../../enums/action-types";
import {AuthDataType} from "../../../api/types/userType";


const InitialState:InitialStateAuthType = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    errorMessage:null
}

export const authReducer = (state:InitialStateAuthType=InitialState, action:AuthDataActionType):InitialStateAuthType=>{
    switch(action.type){
        case ACTIONS_TYPE.GET_AUTH_DATA:
            return {...state, ...action.data};
        case ACTIONS_TYPE.SET_LOGIN_STATUS:
            return {...state, isAuth:action.isAuth};
        case ACTIONS_TYPE.SET_ERROR_MESSAGE:
            return {...state, errorMessage:action.message};
        default: return state
    }
}


export type InitialStateAuthType = AuthDataType & {
    isAuth:boolean
    errorMessage?:string | null
}
