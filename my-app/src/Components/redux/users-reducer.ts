import {ACTIONS_TYPE, CommonUsersActionType} from "./actions";
import {UserType} from "../../api/user-api";

const InitialState:InitialStateUsersType = {
    items:[
        // {
        //     id: v1(),
        //     followed:false,
        //     status:'Looking for a job',
        //     fullName: 'Andrey',
        //     avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/12/2020/01/man-wearing-eyeglasses-839586-800x533.jpg?1636544438',
        //     location:{city:'Minsk', country:'Belarus'},
        // },
        // {
        //     id: v1(),
        //     followed:false,
        //     status:'Unemployed',
        //     fullName: 'Viktoria',
        //     avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg',
        //     location:{city:'Moscow', country:'Russia'},
        // },
        // {
        //     id: v1(),
        //     followed:false,
        //     status:'Looking for some fun',
        //     fullName: 'Jessica',
        //     avatar: 'https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/6/2020/01/woman-wearing-red-long-sleeved-dress-holding-pink-petaled-807842-800x563.jpg?1636544497',
        //     location:{city:'New York', country:'USA'},
        // },
    ],
    totalCount:0,
    pageSize:5,
    currentPage:1,
    loadingStatus:false
}
export type InitialStateUsersType = {
    items:Array<UserType>
    totalCount:number
    pageSize:number
    currentPage:number
    loadingStatus:boolean
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
        case ACTIONS_TYPE.SET_LOADIND_STATUS:
            return {...state, loadingStatus:action.status}
        default: return state
    }
}