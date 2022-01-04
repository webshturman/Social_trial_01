import {UserType} from "../../../api/types/userType";
import {ACTIONS_TYPE} from "../../../enums/action-types";


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
