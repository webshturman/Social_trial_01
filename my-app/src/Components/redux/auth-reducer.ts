import {
    ACTIONS_TYPE,
    AuthDataActionType,
    getInitialized,
    setAuthData,
    setErrorMessage,
    setLoginStatus
} from "./actions";
import {AuthAPI, AuthDataType, LoginDataType} from "../../api/user-api";
import {AppThunk} from "./store";



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

export const toBeAuthorized =():AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authMe()
        if(res.data.resultCode===0){
            const authData = {...res.data.data, isAuth:true}
            dispatch(setAuthData(authData))

        } else{

        }
        // dispatch(getInitialized(true))
    } catch (error) {

    }
}
export const toBeLoggedIn =(data:LoginDataType):AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authLogin(data)
        if(res.data.resultCode===0){
            dispatch(setErrorMessage(null))
            dispatch(setLoginStatus(true))
        } else{
            dispatch(setErrorMessage(res.data.messages[0]))
        }
    } catch (error) {

    }
}
export const toBeLoggedOut =():AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authLogout()
        if(res.data.resultCode===0){
            const cleanData = {id:null, email:null, login:null, isAuth:false}
            dispatch(setAuthData(cleanData))
        }
    } catch (error) {

    }
}

export type InitialStateAuthType = AuthDataType & {
    isAuth:boolean
    errorMessage?:string | null
}