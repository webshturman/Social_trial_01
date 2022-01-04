import {AppThunk} from "../store";
import {UsersAPI} from "../../../api/user-api";
import {followUser, getUsersFromApi, setCurrentPage, setLoadingStatus, setTotalCount} from "../actions/user-actions";

export const toFollow =(userID:number):AppThunk=>async dispatch=>{
    try{
        const res = await UsersAPI.setFollowStatus(userID)
        if(res.data.resultCode===0){
            dispatch(followUser(true,userID))
        }
    } catch (e) {

    }
}

export const toUnFollow =(userID:number):AppThunk=>async dispatch=>{
    try{
        const res = await UsersAPI.deleteFollowStatus(userID)
        if(res.data.resultCode===0){
            dispatch(followUser(false,userID))
        }
    } catch (e) {

    }
}

export const setUsers =(page:number, count:number):AppThunk=>async dispatch=>{
    dispatch(setLoadingStatus(true))
    try{
        const res = await UsersAPI.getUsers(page,count)
        dispatch(getUsersFromApi(res.data.items))
        dispatch(setTotalCount(res.data.totalCount))
    } catch (e) {

    } finally{
        dispatch(setLoadingStatus(false))
    }
}
export const setUsersForCurrentPage =(page:number, count:number):AppThunk=>async dispatch=>{
    dispatch(setCurrentPage(page))
    dispatch(setLoadingStatus(true))
    try{
        const res = await UsersAPI.getUsers(page,count)
        dispatch(getUsersFromApi(res.data.items))
    } catch (e) {

    }finally{
        dispatch(setLoadingStatus(false))
    }
}