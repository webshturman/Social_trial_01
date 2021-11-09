export enum ACTIONS_TYPE {
    ADD_POST = 'MyPosts/ADD_POST',
    SEND_MESSAGE = 'Messages/SEND_MESSAGE ',
    FOLLOW_USER = 'Users/FOLLOW_USER',
    UNFOLLOW_USER = 'Users/UNFOLLOW_USER',
    SET_USERS = 'Users/UNFOLLOW_USER',
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
export type FollowUserActionType = ReturnType<typeof followUserAC>

export const followUserAC =(isFollow:boolean, userID:string)=> {
    return {type:ACTIONS_TYPE.FOLLOW_USER, isFollow,userID} as const
}