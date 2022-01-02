import {
    ACTIONS_TYPE,
    CommonUsersActionType,
    followUser,
    getUsersFromApi, setCurrentPage,
    setLoadingStatus,
    setTotalCount
} from "./actions";
import {UsersAPI} from "../../api/user-api";
import {AppThunk} from "./store";
import {UserType} from "../../api/types/userType";

const InitialState:InitialStateUsersType = {
    items:[],
    totalCount:0,
    pageSize:5,
    currentPage:1,
    loadingStatus:false
}

export const usersReducer = (state:InitialStateUsersType=InitialState, action:CommonUsersActionType):InitialStateUsersType=> {
    switch(action.type){
        case ACTIONS_TYPE.FOLLOW_USER:
            return {...state,
                items: state.items.map(user=> user.id === action.userID ? {...user, followed:action.isFollow} : user)};
        case ACTIONS_TYPE.GET_USERS:
            return {...state, items:action.users}
        case ACTIONS_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage:action.page}
        case ACTIONS_TYPE.SET_TOTAL_COUNT:
            return {...state, totalCount:action.count}
        case ACTIONS_TYPE.SET_LOADING_STATUS:
            return {...state, loadingStatus:action.status}
        default: return state
    }
}

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

export type InitialStateUsersType = {
    items:UserType[]
    totalCount:number
    pageSize:number
    currentPage:number
    loadingStatus:boolean
}