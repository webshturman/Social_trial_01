import {InitialStateAuthType} from "../reducers/auth-reducer";
import {ACTIONS_TYPE} from "../../../enums/action-types";

export type AuthDataActionType = ReturnType<typeof setAuthData> | ReturnType<typeof setLoginStatus>
    | ReturnType<typeof setErrorMessage>

export const setAuthData =(data:InitialStateAuthType)=> {
    return {type:ACTIONS_TYPE.GET_AUTH_DATA, data} as const
}
export const setLoginStatus =(isAuth:boolean)=> {
    return {type:ACTIONS_TYPE.SET_LOGIN_STATUS, isAuth} as const
}
export const setErrorMessage =(message:string | null)=> {
    return {type:ACTIONS_TYPE.SET_ERROR_MESSAGE, message} as const
}