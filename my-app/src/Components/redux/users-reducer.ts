import {ACTIONS_TYPE, CommonUsersActionType} from "./actions";
import {UserType} from "../../api/user-api";

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

export type InitialStateUsersType = {
    items:UserType[]
    totalCount:number
    pageSize:number
    currentPage:number
    loadingStatus:boolean
}