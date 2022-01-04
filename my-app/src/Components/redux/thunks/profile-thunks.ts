import {AppThunk} from "../store";
import {UsersAPI} from "../../../api/user-api";
import {getProfile, setUserStatus} from "../actions/profile-actions";

export const getProfileData =(userID: string):AppThunk=>async dispatch=>{
    try{
        const res = await UsersAPI.getProfile(userID)
        dispatch(getProfile(res.data))
        dispatch(getUserStatusData(userID))
    } catch (e) {

    }
}
export const getUserStatusData =(userID:string):AppThunk=>async dispatch=>{
    try{
        const res = await UsersAPI.getUserStatus(userID)
        dispatch(setUserStatus(res.data))
    } catch (e) {

    }
}

export const updateUserStatusData =(status:string):AppThunk=>async dispatch=>{
    try{
        const res = await UsersAPI.updateUserStatus(status)
        if(res.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }

    } catch (e) {

    }
}
