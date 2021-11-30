import {AuthDataType, ProfileType, UserType} from "../../api/user-api";


export enum ACTIONS_TYPE {
    ADD_POST = 'MyPosts/ADD_POST',
    SEND_MESSAGE = 'Messages/SEND_MESSAGE ',
    FOLLOW_USER = 'Users/FOLLOW_USER',
    GET_USERS = 'Users/GET_USERS',
    GET_PROFILE='ProfileInfo/GET_PROFILE',
    SET_CURRENT_PAGE = 'Users/SET_CURRENT_PAGE',
    SET_TOTAL_COUNT = 'Users/SET_TOTAL_COUNT',
    SET_LOADING_STATUS = 'Users/SET_LOADING_STATUS',
    GET_AUTH_DATA = 'Header/GET_AUTH_DATA',
    SET_USER_STATUS = 'profile/SET_USER_STATUS',
    UPDATE_USER_STATUS = 'profile/UPDATE_USER_STATUS',
}
//----------------------------PROFILE-----------------------------
export type ProfileActionType = ReturnType<typeof addPostAC> | ReturnType<typeof getProfile> |
    ReturnType<typeof setUserStatus>

export const addPostAC = (newText:string) => {
    return {type:ACTIONS_TYPE.ADD_POST, newText} as const
}
export const getProfile = (profile:ProfileType) => {
    return {type:ACTIONS_TYPE.GET_PROFILE, profile} as const
}
export const setUserStatus = (status: string) => {
    return {type:ACTIONS_TYPE.SET_USER_STATUS, status} as const
}
// export const updateUserStatus = (profile:ProfileType) => {
//     return {type:ACTIONS_TYPE.UPDATE_USER_STATUS, profile} as const
// }
//-------------------------MESSAGES---------------------------------

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessage:string) => {
    return {type:ACTIONS_TYPE.SEND_MESSAGE, newMessage} as const
}

//---------------------------USERS----------------------------------

export type CommonUsersActionType = ReturnType<typeof followUser> | ReturnType<typeof getUsersFromApi> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount> | ReturnType<typeof setLoadingStatus>

export const followUser =(isFollow:boolean, userID:number)=> {
    return {type:ACTIONS_TYPE.FOLLOW_USER, isFollow,userID} as const
}
export const getUsersFromApi=(users:Array<UserType>)=> {
    return {type:ACTIONS_TYPE.GET_USERS, users} as const
}
export const setCurrentPage=(page:number)=> {
    return {type:ACTIONS_TYPE.SET_CURRENT_PAGE, page} as const
}
export const setTotalCount=(count:number)=> {
    return {type:ACTIONS_TYPE.SET_TOTAL_COUNT, count} as const
}
export const setLoadingStatus=(status:boolean)=> {
    return {type:ACTIONS_TYPE.SET_LOADING_STATUS, status} as const
}

//---------------------------AUTH DATA----------------------------------
export type AuthDataActionType = ReturnType<typeof getAuthData>

export const getAuthData =(data:AuthDataType)=> {
    return {type:ACTIONS_TYPE.GET_AUTH_DATA, data} as const
}