import {getInitialized} from "../actions/loader-actions";
import {setAuthData, setErrorMessage, setLoginStatus} from "../actions/auth-actions";
import {AuthAPI} from "../../../api/auth-api";
import {AppThunk} from "../store";
import {LoginDataType} from "../../../api/types/userType";
import {clearProfileData} from "../actions/profile-actions";

export const toBeAuthorized =():AppThunk=>async dispatch=>{
    try{
        const res = await AuthAPI.authMe()
        if(res.data.resultCode===0){
            const authData = {...res.data.data, isAuth:true}
            dispatch(setAuthData(authData))

        } else{

        }
        dispatch(getInitialized(true))
    } catch (error) {

    }
}
export const toBeLoggedIn = (data:LoginDataType):AppThunk=>async dispatch=>{
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
            dispatch(clearProfileData())
        }
    } catch (error) {

    }
}