import {UserType} from "../../api/user-api";


export enum ACTIONS_TYPE {
    ADD_POST = 'MyPosts/ADD_POST',
    SEND_MESSAGE = 'Messages/SEND_MESSAGE ',
    FOLLOW_USER = 'Users/FOLLOW_USER',
    UNFOLLOW_USER = 'Users/UNFOLLOW_USER',
    GET_USERS = 'Users/GET_USERS',
}
//----------------------------------------------------------------------
export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = (newText:string) => {
    return {type:ACTIONS_TYPE.ADD_POST, newText} as const
}
//-----------------------------------------------------------------------

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessage:string) => {
    return {type:ACTIONS_TYPE.SEND_MESSAGE, newMessage} as const
}

//----------------------------------------------------------------------------------
export type CommonUsersActionType = FollowUserActionType | GetUsersActionType
export type FollowUserActionType = ReturnType<typeof followUserAC>

export const followUserAC =(isFollow:boolean, userID:number)=> {
    return {type:ACTIONS_TYPE.FOLLOW_USER, isFollow,userID} as const
}
//----------------------------------------------------------------------------------
export type GetUsersActionType = ReturnType<typeof getUsersAC>

export const getUsersAC=(users:Array<UserType>)=> {
    return {type:ACTIONS_TYPE.GET_USERS, users} as const
}