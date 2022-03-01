import {AppThunk} from "../store";
import {UsersAPI} from "../../../api/user-api";
import {getProfile, saveUserAvatar, setUserStatus} from "../actions/profile-actions";

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
        console.log(e)
    }
}
export const addAvatar = (photo:any):AppThunk=>async dispatch=>{
    try{
        const res = await UsersAPI.loadUserPhoto(photo)
        if(res.data.resultCode === 0){
            dispatch(saveUserAvatar(res.data.data.photos))
            console.log(res.data.data.photos)
        }

    } catch (e) {

    }
}
