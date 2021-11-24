import {ACTIONS_TYPE, AuthDataActionType, getAuthData} from "./actions";
import {AuthAPI, AuthDataType} from "../../api/user-api";
import {AppThunk} from "./store";


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

export const toBeAuthorized =():AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.getLoginData()
        if(res.data.resultCode===0){
            dispatch(getAuthData(res.data.data))
        }
    } catch (e) {

    }
}
type InitialStateAuthType = AuthDataType & {
    isAuth:boolean
}