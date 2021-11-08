export enum ACTIONS_TYPE {
    ADD_POST = 'MyPosts/ADD_POST',
    SEND_MESSAGE = 'Messages/SEND_MESSAGE ',
}
//----------------------------------------------------------------------
export type AddPostActionType = ReturnType<typeof addPostAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type CommonActionType = AddPostActionType| SendMessageActionType;
//-----------------------------------------------------------------------
export const addPostAC = (newText:string) => {
    return {type:ACTIONS_TYPE.ADD_POST, newText} as const
}
export const sendMessageAC = (newMessage:string) => {
    return {type:ACTIONS_TYPE.SEND_MESSAGE, newMessage} as const
}