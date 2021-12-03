import {ACTIONS_TYPE, AuthDataActionType, getAuthData, setLoginStatus} from "./actions";
import {AuthAPI, AuthDataType, LoginDataType} from "../../api/user-api";
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
        case ACTIONS_TYPE.SET_LOGIN_STATUS:
            return {...state, ...action};
        default: return state
    }
}

export const toBeAuthorized =():AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authMe()
        if(res.data.resultCode===0){
            dispatch(getAuthData(res.data.data))
        }
    } catch (error) {

    }
}
export const setAuthData =(data:LoginDataType):AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authLogin(data)
        if(res.data.resultCode===0){
            dispatch(setLoginStatus(true))
        }
    } catch (error) {

    }
}
export const setLogOutData =():AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authLogout()
        if(res.data.resultCode===0){
            dispatch(setLoginStatus(false))
        }
    } catch (error) {

    }
}

type InitialStateAuthType = AuthDataType & {
    isAuth:boolean
}