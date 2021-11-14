import {UserType} from "../../api/user-api";


export enum ACTIONS_TYPE {
    ADD_POST = 'MyPosts/ADD_POST',
    SEND_MESSAGE = 'Messages/SEND_MESSAGE ',
    FOLLOW_USER = 'Users/FOLLOW_USER',
    UNFOLLOW_USER = 'Users/UNFOLLOW_USER',
    GET_USERS = 'Users/GET_USERS',
    SET_CURRENT_PAGE = 'Users/SET_CURRENT_PAGE',
    SET_TOTAL_COUNT = 'Users/SET_TOTAL_COUNT'
}
//----------------------------PROFILE-----------------------------
export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = (newText:string) => {
    return {type:ACTIONS_TYPE.ADD_POST, newText} as const
}
//-------------------------MESSAGES---------------------------------

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessage:string) => {
    return {type:ACTIONS_TYPE.SEND_MESSAGE, newMessage} as const
}

//---------------------------USERS----------------------------------
export type CommonUsersActionType = FollowUserActionType | GetUsersActionType | SetCurrentPageActionType |SetTotalCountActionType

export type FollowUserActionType = ReturnType<typeof followUserAC>

export const followUserAC =(isFollow:boolean, userID:number)=> {
    return {type:ACTIONS_TYPE.FOLLOW_USER, isFollow,userID} as const
}
//--------------
export type GetUsersActionType = ReturnType<typeof getUsersAC>

export const getUsersAC=(users:Array<UserType>)=> {
    return {type:ACTIONS_TYPE.GET_USERS, users} as const
}
//--------------
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>

export const setCurrentPageAC=(page:number)=> {
    return {type:ACTIONS_TYPE.SET_CURRENT_PAGE, page} as const
}

//--------------
export type SetTotalCountActionType = ReturnType<typeof setTotalCountAC>

export const setTotalCountAC=(count:number)=> {
    return {type:ACTIONS_TYPE.SET_TOTAL_COUNT, count} as const
}