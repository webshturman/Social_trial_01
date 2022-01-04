import {ProfileType} from "../../../api/types/userType";
import {ACTIONS_TYPE} from "../../../enums/action-types";


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